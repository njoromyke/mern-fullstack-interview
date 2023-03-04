import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { AUTH_TOKEN } from "../../helpers/constants";
import { storeLocally } from "../../helpers/utils/localStorage.util";
import { register } from "../../state/actions/actions";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const { user, loading } = data;

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch(register(formData));
  };

  useEffect(() => {
    if (user) {
      storeLocally(AUTH_TOKEN, user.token);
      window.location.reload();
      window.location.href = "/";
    }
  }, [user]);

  return (
    <div className="container mx-auto p-2">
      {loading && <Loader />}
      <div className="flex min-h-full items-center justify-center py-12 px -4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-10">
          <div>
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6 bg-white rounded-md shadow-sm" onSubmit={handleRegister}>
            <div className="p-2 pt-5">
              <div className="mb-5">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-5 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
                    placeholder="Password"
                    onChange={onInputChange}
                  />
                  <div>
                    {showPassword ? (
                      <EyeSlashIcon
                        className="h-5 w-5 text-pink-500 absolute right-2 top-2 cursor-pointer z-50"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <EyeIcon
                        className="h-5 w-5 text-pink-500 absolute right-2 top-2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button type="submit" className="w-full block rounded-md bg-pink-600 text-white py-2 px-4 mt-5">
                  Sign Up
                </button>
              </div>
              <div className="mt-5">
                <p className="text-center text-sm text-gray-600">
                  Already have an account?
                  <Link to="/" className="font-medium ml-2 text-pink-600 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
