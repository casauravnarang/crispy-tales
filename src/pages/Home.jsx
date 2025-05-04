import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ShoppingCart, CreditCard, Minus, Plus, X } from "lucide-react";

// ... AddToCartButton component ...

function AddToCartButton({ product, quantity, onAdd }) {
  return (
    <Button onClick={() => onAdd(product)} className="bg-[#b89c74] text-white w-full font-serif relative">
      Add to Cart
      {quantity > 0 && (
        <span className="absolute top-0 right-2 -mt-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {quantity}
        </span>
      )}
    </Button>
  );
}

export default function CrispyTales() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.title]: (prev[item.title] || 0) + 1,
    }));
  };

  const updateQuantity = (title, change) => {
    setCart((prev) => {
      const newQty = (prev[title] || 0) + change;
      if (newQty <= 0) {
        const { [title]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [title]: newQty };
    });
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) return;
    setCheckoutMessage("Thank you for your order! Your order has been placed.");
    setCart({});
  };

  const products = [
    {
      title: "Classic Ladakh Salt",
      description: "Hand-roasted makhana with a touch of pink salt sourced from high altitudes of Ladakh.",
      image: "/makhana1.jpg",
      price: 149,
    },
    {
      title: "Amritsari Charr Spice",
      description: "A fiery twist for spice lovers, bold and unforgettable.",
      image: "/makhana2.jpg",
      price: 149,
    },
    {
      title: "Gurh-Gurh Touch",
      description: "Sweet, crunchy, and surprisingly light – the perfect treat made from the organic jaggery.",
      image: "/makhana3.jpg",
      price: 149,
    },
    {
      title: "Naked Makhana Powder",
      description: "Made from hand-picked makhanas, a great protien for daily life – vegan, gluten-free, organic",
      image: "/makhana4.jpg",
      price: 199,
    },
  ];

  const testimonials = [
    { text: "Crispy Tales has become my go-to evening snack!", name: "Aarav Kapoor, Jalandhar, India" },
    { text: "An ethereal crunch kissed by pristine Himalayan salt—light and pure!", name: "Jhanvi Oberoi, Sydney, Australia" },
    { text: "I love how light and crunchy the makhanas are.", name: "Sneha Raichand, Lucknow, India" },
    { text: "My kids can’t get enough of the caramel flavor!", name: "Riya Sharma, Mumbai, India" },
    { text: "Healthier than chips and just as tasty.", name: "Nikhil Verma, Jaipur, India" },
    { text: "Perfect for office munching – no guilt involved!", name: "Tanvi Jain, Dubai, UAE" },
  ];

  const calculateTotal = () => {
    return Object.entries(cart).reduce((total, [title, qty]) => {
      const product = products.find((p) => p.title === title);
      return total + (product ? product.price * qty : 0);
    }, 0);
  };

  return (
    <main className="min-h-screen bg-[#f5f1ed] text-[#2b1d0e] font-serif relative">
      {/* Cart Modal */}
      {/* ... UI continues ... */}
    </main>
  );
}
