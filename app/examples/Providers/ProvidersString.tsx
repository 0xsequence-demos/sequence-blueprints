export const codeString = "<WagmiProvider config={wagmiConfig}>\r\n  <QueryClientProvider client={queryClient || defaultQueryClient}>\r\n    <KitProvider config={kitConfig}>{children}</KitProvider>\r\n  </QueryClientProvider>\r\n</WagmiProvider>\r"