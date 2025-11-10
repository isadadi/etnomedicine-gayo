/* eslint-disable react-hooks/exhaustive-deps */
import { customTheme } from "@/theme/custom-theme";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { MotiView } from "moti";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export type ListItem = {
  id: string;
  label: string;
};

function Skeleton() {
  return (
    <View style={styles.itemContainer}>
      <MotiView
        from={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ loop: true, type: "timing", duration: 800 }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 16,
          backgroundColor: "#e5e5e5",
        }}
      />
    </View>
  );
}

type Props = {
  data: ListItem[];
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: ListItem) => void;
  selectedValue?: string;
  loading?: boolean;
};

const SearchBottomSheet = forwardRef<BottomSheet, Props>(
  (
    {
      data,
      title = "Pilih Item",
      isOpen,
      onClose,
      onSelect,
      selectedValue,
      loading,
    },
    ref
  ) => {
    const [search, setSearch] = useState("");

    const filtered = useMemo(
      () =>
        data.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase())
        ),
      [search, data]
    );

    const snapPoints = useMemo(() => ["60%", "80%"], []);

    useEffect(() => {
      if (!isOpen && ref && "current" in ref && ref.current) {
        ref.current.close();
      } else if (isOpen && ref && "current" in ref && ref.current) {
        ref.current.expand();
      }
    }, [isOpen]);

    const renderItem = useCallback(
      ({ item }: { item: ListItem }) => (
        <Pressable onPress={() => onSelect(item)} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.label}</Text>
          {selectedValue === item.id && (
            <MaterialIcons
              name="check"
              size={24}
              color={customTheme["color-primary-500"]}
            />
          )}
        </Pressable>
      ),
      [onSelect]
    );

    const handleClose = () => {
      onClose();
      setSearch("");
    };
    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
        onClose={handleClose}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            placeholder="Cari penyakit..."
            value={search}
            onChangeText={setSearch}
            style={styles.input}
          />
        </View>

        <BottomSheetFlatList<ListItem>
          data={loading ? Array(5).fill(null) : filtered}
          keyExtractor={(item: any, index: number) => index}
          renderItem={({ item }: any) =>
            loading ? <Skeleton /> : renderItem({ item })
          }
          contentContainerStyle={styles.content}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Tidak ditemukan</Text>
            </View>
          }
        />
      </BottomSheet>
    );
  }
);

SearchBottomSheet.displayName = "SearchBottomSheet";

export default SearchBottomSheet;

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handleIndicator: {
    backgroundColor: "#ccc",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 15,
  },
  content: {
    backgroundColor: "#fff",
  },
  itemContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    color: "#111",
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    color: "#999",
  },
});
