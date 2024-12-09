// vite.config.ts
import path from "path";
import { defineConfig } from "file:///F:/Github/eliza/node_modules/vite/dist/node/index.js";
import topLevelAwait from "file:///F:/Github/eliza/client/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import react from "file:///F:/Github/eliza/client/node_modules/@vitejs/plugin-react/dist/index.mjs";
import wasm from "file:///F:/Github/eliza/client/node_modules/vite-plugin-wasm/exports/import.mjs";
var __vite_injected_original_dirname = "F:\\Github\\eliza\\client";
var vite_config_default = defineConfig({
  plugins: [wasm(), topLevelAwait(), react()],
  optimizeDeps: {
    exclude: ["onnxruntime-node", "@anush008/tokenizers"]
  },
  build: {
    commonjsOptions: {
      exclude: ["onnxruntime-node", "@anush008/tokenizers"]
    },
    rollupOptions: {
      external: ["onnxruntime-node", "@anush008/tokenizers"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxHaXRodWJcXFxcZWxpemFcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxHaXRodWJcXFxcZWxpemFcXFxcY2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9HaXRodWIvZWxpemEvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSBcInZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdFwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB3YXNtIGZyb20gXCJ2aXRlLXBsdWdpbi13YXNtXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFt3YXNtKCksIHRvcExldmVsQXdhaXQoKSwgcmVhY3QoKV0sXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBleGNsdWRlOiBbXCJvbm54cnVudGltZS1ub2RlXCIsIFwiQGFudXNoMDA4L3Rva2VuaXplcnNcIl0sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBjb21tb25qc09wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXhjbHVkZTogW1wib25ueHJ1bnRpbWUtbm9kZVwiLCBcIkBhbnVzaDAwOC90b2tlbml6ZXJzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogW1wib25ueHJ1bnRpbWUtbm9kZVwiLCBcIkBhbnVzaDAwOC90b2tlbml6ZXJzXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgcHJveHk6IHtcclxuICAgICAgICAgICAgXCIvYXBpXCI6IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIixcclxuICAgICAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFAsT0FBTyxVQUFVO0FBQzdRLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUyxDQUFDLEtBQUssR0FBRyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQUEsRUFDMUMsY0FBYztBQUFBLElBQ1YsU0FBUyxDQUFDLG9CQUFvQixzQkFBc0I7QUFBQSxFQUN4RDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsaUJBQWlCO0FBQUEsTUFDYixTQUFTLENBQUMsb0JBQW9CLHNCQUFzQjtBQUFBLElBQ3hEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVLENBQUMsb0JBQW9CLHNCQUFzQjtBQUFBLElBQ3pEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3hDO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLFFBQ0osUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsU0FBUyxDQUFDQSxVQUFTQSxNQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsTUFDaEQ7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
