import { defineConfig } from 'vite';



export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
   
      build: {
        minify: false,
        rollupOptions: {
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
