import { BANNER_HEIGHT, HEADER_HEIGHT } from "@/constants/var";
import { ReactNode } from "react";
import { Animated, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title?: ReactNode;
  showHeader?: boolean;
  scrollY: Animated.Value;
  animated?: boolean;
  elevated?: boolean;
};
export default function AnimatedAppBar({
  title,
  scrollY,
  animated = true,
  elevated = true,
  showHeader = true,
}: Props) {
  const headerOpacity = scrollY?.interpolate({
    inputRange: [0, BANNER_HEIGHT / 2, BANNER_HEIGHT],
    outputRange: [0, 0.6, 1],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {
            height: showHeader
              ? HEADER_HEIGHT + (StatusBar.currentHeight ?? 0)
              : (StatusBar.currentHeight ?? 0),
          },
          !animated ? { position: "relative" } : undefined,
          animated ? { opacity: headerOpacity } : undefined,
          !elevated ? { shadowOpacity: 0, elevation: 0 } : undefined,
        ]}
      >
        <SafeAreaView className="flex-row items-center justify-between px-4 flex-1">
          <Animated.Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[
              styles.title,
              animated
                ? {
                    flex: 1,
                    // marginTop: 8,
                    marginLeft: 56,
                    marginRight: 90,
                    fontSize: 18,
                    fontWeight: "600",
                    color: "#171717",
                    opacity: scrollY?.interpolate({
                      inputRange: [0, 60, 120],
                      outputRange: [0, 0.5, 1],
                      extrapolate: "clamp",
                    }),
                  }
                : undefined,
            ]}
          >
            {title}
          </Animated.Text>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    zIndex: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    flex: 1,
    // marginTop: 8,
    marginLeft: 56,
    marginRight: 90,
    fontSize: 18,
    fontWeight: "600",
    color: "#171717",
  },
});
