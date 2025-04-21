// UNUSED FOR NOW
import { ref, onMounted, onUnmounted } from "vue";

// by convention, composable function names start with "use"
export default function useAuth() {
  // state encapsulated and managed by the composable
  const user = ref();

  return { user };
}
