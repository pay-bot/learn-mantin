import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { CustomAppPage } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../react-query/queryClient"

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <NotificationsProvider>
          {getLayout(<Component {...pageProps} />)}
        </NotificationsProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default App;


