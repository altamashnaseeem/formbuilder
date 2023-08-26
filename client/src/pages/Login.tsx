import { Link } from 'react-router-dom';
import InputField from '../components/shared/InputField';
import { Button } from '../components/ui/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../components/ui/Card';
import {
  FacebookSvg,
  GithubSvg,
  GoogleSvg,
  SSOKeySvg,
} from '../assets/icons/Svgs';

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4">
          <div className="flex justify-around">
            <Link to="/sso/login" className="space-y-2 text-center">
              <Button
                variant="outline"
                size="icon"
                className="peer h-12 w-12 rounded-2xl"
                asChild
              >
                <div>
                  <SSOKeySvg className="h-[22px] w-[22px]" />
                </div>
              </Button>
              <p className="text-sm text-muted-foreground transition-colors peer-hover:text-foreground">
                SSO
              </p>
            </Link>
            <article className="space-y-2 text-center">
              <Button
                variant="outline"
                size="icon"
                className="peer h-12 w-12 rounded-2xl"
              >
                <GithubSvg className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground peer-hover:text-foreground">
                Github
              </p>
            </article>
            <article className="space-y-2 text-center">
              <Button
                variant="outline"
                size="icon"
                className="peer h-12 w-12 rounded-2xl"
              >
                <GoogleSvg className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground peer-hover:text-foreground">
                Google
              </p>
            </article>
            <article className="space-y-2 text-center">
              <Button
                variant="outline"
                size="icon"
                className="peer h-12 w-12 rounded-2xl"
              >
                <FacebookSvg className="h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground peer-hover:text-foreground">
                Facebook
              </p>
            </article>
          </div>
          <div className="relative z-10 text-center">
            <hr className="absolute left-0 right-0 top-1/2 -z-10" />
            <p className="inline-block bg-white px-4 text-sm uppercase text-muted-foreground">
              Or Login With Email
            </p>
          </div>
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="test@mail.com"
            className="text-slate-600"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Password123@"
            className="text-slate-600"
          />
          <div className="flex items-center justify-between px-0.5">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember"
                className="h-3.5 w-3.5 cursor-pointer accent-primary"
                defaultChecked
              />
              <label
                htmlFor="remember-me"
                className="cursor-pointer pl-2 text-sm"
              >
                Stay signed in
              </label>
            </div>
            <Link
              to="/recover-password"
              className="cursor-pointer text-sm underline underline-offset-2 hover:text-primary hover:decoration-primary"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <div className="flex justify-center gap-2 text-sm">
          <p className="text-muted-foreground">
            Don&#39;t have an account yet?
          </p>
          <Link className="text-primary hover:underline" to="/register">
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
