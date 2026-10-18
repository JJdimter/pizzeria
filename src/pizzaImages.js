const samplePizzaImages = {
  p001: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85",
  p002: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=1200&q=85",
  p003: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1200&q=85",
  p004: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=1200&q=85",
  p005: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=85",
  p006: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=1200&q=85",
};

export const getSamplePizzaImage = (id) => samplePizzaImages[id] ?? samplePizzaImages.p001;