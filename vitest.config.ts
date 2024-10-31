import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      mainFields: ['module'],
    },
    test: {
      environment: 'jsdom',
      globals: true,
      globalSetup: './vitest.globals.ts',
      setupFiles: './vitest.setup.ts',
      reporters: ['default', 'junit', 'hanging-process'],
      outputFile: {
        junit: './coverage/junit.xml',
      },
      exclude: [...configDefaults.exclude],
      coverage: {
        provider: 'istanbul',
        reporter: ['json', 'text', 'cobertura', 'lcov', 'html'],
        all: true,
        include: ['src/**/*.{ts,tsx}'],
        exclude: [
          'src/@enumerations/**',
          'src/@interfaces/**',
          'src/@types/**',
          'src/**/index.{ts,tsx}',
          'src/main.tsx',
        ],
        thresholds: {
          branches: 75,
          functions: 85,
          statements: 85,
        },
      },
    },
  }),
);
