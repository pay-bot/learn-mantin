import type { CustomNextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthLayout } from "src/layout";
import { getPath } from "src/lib/const";
import { Button } from "src/lib/mantine";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAuth } from "../hooks/useAuth";
import { useMutation } from "react-query";
import request from "../helper/axiosUtil"

const SignIn: CustomNextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const updateArticles = async (data) =>
    request({ url: `/articles/`, method: "post", data });

  const { mutateAsync: updateArticle } = useMutation(updateArticles);

  const onUpdateArticle = async (data) => {
    await updateArticle(data);
  };

  const router = useRouter();
  const auth = useAuth();
  const onLogin = (data) => {
    console.log(data);
    const email = data.email;
    auth.signin(email);
  };

  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        YAP ADMIN
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Not have account？{" "}
        <Link href={getPath("SIGN_UP")} passHref>
          <Anchor<"a"> size="sm">SIgn up</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(onUpdateArticle)}>
          <TextInput
            label="Email"
            placeholder="test@example.com"
            required
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps("password")}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </>
  );
};

SignIn.getLayout = AuthLayout;

export default SignIn;



