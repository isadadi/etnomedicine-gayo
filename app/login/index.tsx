import { useSession } from "@/stores/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Layout, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Minimal 6 karakter"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const { signIn } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log("Login Data:", data);
    signIn();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is successful before navigating.
    router.replace("/");
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Layout className="flex-1 justify-center p-6">
            <View className="bg-white rounded-lg p-6 shadow-xl elevation-5">
              <Text category="h4" className="text-center mb-6">
                Masuk
              </Text>

              {/* Email Field */}
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label="Email"
                    placeholder="contoh@email.com"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    status={errors.email ? "danger" : "basic"}
                  />
                )}
              />
              {errors.email && (
                <Text appearance="hint" status="danger" className="mt-1">
                  {errors.email.message}
                </Text>
              )}

              {/* Password Field */}
              <View className="mt-4">
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label="Kata Sandi"
                      placeholder="******"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      secureTextEntry
                      status={errors.password ? "danger" : "basic"}
                    />
                  )}
                />
                {errors.password && (
                  <Text appearance="hint" status="danger" className="mt-1">
                    {errors.password.message}
                  </Text>
                )}
              </View>

              <Button
                className="mt-6"
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Memproses..." : "Masuk"}
              </Button>
            </View>
          </Layout>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
