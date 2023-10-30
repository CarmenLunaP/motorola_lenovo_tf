import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      build: {
        minify: false,
        rollupOptions: {
          input: 'main.jsx', 
          output: {
            dir: './dist',
          },
        },
      },
    };
  }
  return {};
});


// export default {
//   server: {
//     port: 3000, 
//   },
// };
