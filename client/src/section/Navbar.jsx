import React, { useState } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Import cross icon
import logo from "../../public/ecommerce-logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import { DialogDescription } from "@radix-ui/react-dialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const { cartItems, clearCart, removeFromCart } = useCart();

  const handleCategoriesClick = () => {
    navigate("/categories");
    setIsMenuOpen(false); // Close menu on click
  };

  const handleLogoClick = () => {
    navigate("/");
    setIsMenuOpen(false); // Close menu on click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false); // Close menu on click
  };

  const handleAuthClick = () => {
    if (auth.isLoggedIn) {
      logout();
      setIsMenuOpen(false); // Close menu on click
    } else {
      setIsLoginForm(true); // Show login form
      setShowDialog(true); // Open dialog
      setIsMenuOpen(false); // Close menu on click
    }
  };

  const handlePurchasedItemsClick = () => {
    navigate("/previously-purchased-items");
    setIsMenuOpen(false); // Close menu on click
  };

  const handleCheckout = () => {
    if (!auth.isLoggedIn) {
      setIsLoginForm(true); // Show login form
      setShowDialog(true); // Open dialog
    } else {
      clearCart();
      navigate("/");
    }
    setIsMenuOpen(false); // Close menu on click
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <>
      <div className="sticky shadow-md top-0 z-50 hover:cursor-pointer bg-white">
        <div className="flex justify-between items-center h-28 m-auto w-[87%]">
          <img src={logo} alt="logo" className="w-28 lg:w-36" onClick={handleLogoClick} />
          <div className="flex gap-10 items-center">
            <span
              className="hidden lg:block text-lg hover:underline hover:cursor-pointer"
              onClick={handleCategoriesClick}
            >
              CATEGORIES
            </span>
            {auth.isLoggedIn && (
              <>
                <span
                  className="hidden lg:block text-lg hover:underline hover:cursor-pointer"
                  onClick={handlePurchasedItemsClick}
                >
                  Previously Purchased Items
                </span>
                <span
                  className="hidden lg:block text-lg hover:underline hover:cursor-pointer"
                  onClick={handleAuthClick}
                >
                  LOGOUT
                </span>
              </>
            )}
            {!auth.isLoggedIn && (
              <span
                className="hidden lg:block text-lg hover:underline hover:cursor-pointer"
                onClick={handleAuthClick}
              >
                Sign Up
              </span>
            )}
            {auth.isLoggedIn && (
              <div className="relative group">
                <span className="text-lg">₹{auth.availableMoney}</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block shadow-xl text-black text-xs rounded py-1 px-2 z-10">
                  Available Money
                </div>
              </div>
            )}

            <div className="relative">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="relative">
                    <PiShoppingCart className="text-2xl hover:cursor-pointer font-bold" />
                    {calculateTotalQuantity() > 0 && (
                      <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {calculateTotalQuantity()}
                      </span>
                    )}
                  </div>
                </SheetTrigger>
                <SheetContent className="overflow-auto lg:text-xl text-lg">
                  <SheetHeader>
                    <SheetTitle>Cart Items</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    {cartItems.length === 0 ? (
                      <p>No items in cart</p>
                    ) : (
                      <ul>
                        {cartItems.map((item, index) => (
                          <li
                            key={index}
                            className="flex justify-between py-2 border-b hover:bg-zinc-50 duration-200"
                          >
                            <div>
                              <div className="w-40">{item.productName}</div>
                              <br />
                              <span>Qty: {item.quantity}</span>
                            </div>
                            <div className="flex flex-col justify-between items-center">
                              <span>₹{item.price * item.quantity}</span>
                              <AiOutlineClose
                                className="text-red-500 cursor-pointer lg:text-2xl text-xl hover:size-7"
                                onClick={() => removeFromCart(item._id)}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex justify-between">
                      <span className="font-bold">Subtotal:</span>
                      <span>₹{calculateSubtotal()}</span>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={handleCheckout}
                        className="bg-[#B6002C] border-4 border-[#B6002C] hover:bg-transparent hover:text-[#B6002C] text-white font-semibold w-full py-1 lg:py-2"
                      >
                        CHECKOUT
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <RxHamburgerMenu onClick={toggleMenu} className="lg:hidden" />
          </div>
        </div>

        <div
          className={`lg:hidden fixed bottom-0 left-0 w-full h-full bg-white shadow-lg flex flex-col items-center pt-20 transition-transform duration-300 ${
            isMenuOpen ? "transform translate-y-0" : "transform translate-y-full"
          }`}
          style={{ zIndex: 50 }}
        >
          <button className="absolute top-4 right-4 text-2xl font-bold" onClick={toggleMenu}>
            X
          </button>
          <span
            className="text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center mt-12"
            onClick={handleHomeClick}
          >
            Home
          </span>
          <span
            className="text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center"
            onClick={handleCategoriesClick}
          >
            CATEGORIES
          </span>
          {auth.isLoggedIn && (
            <>
              <span
                className="text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center"
                onClick={handlePurchasedItemsClick}
              >
                Previously Purchased Items
              </span>
              <span
                className="text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center"
                onClick={handleAuthClick}
              >
                LOGOUT
              </span>
            </>
          )}
          {!auth.isLoggedIn && (
            <span
              className="text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center"
              onClick={handleAuthClick}
            >
              Sign Up
            </span>
          )}
          {auth.isLoggedIn && (
            <div className="relative text-xl py-2 cursor-pointer hover:bg-gray-200 w-full text-center">
              <span>₹{auth.availableMoney}</span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 hidden group-hover:block shadow-xl text-black text-xs rounded py-1 px-2 z-10">
                Available Money
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold mb-2">
              {isLoginForm ? "Login" : "Register"} Page
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mb-4">
              {isLoginForm
                ? "Please login to proceed with the purchase."
                : "Please register to proceed with the purchase."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {isLoginForm ? (
              <LoginForm
                switchToRegister={() => setIsLoginForm(false)}
                setShowDialog={setShowDialog}
                setLoginError={setLoginError}
                redirectPath={"/"}
              />
            ) : (
              <RegistrationForm
                switchToLogin={() => setIsLoginForm(true)}
                setShowDialog={setShowDialog}
              />
            )}
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
