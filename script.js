// Simple script to handle "Add to Cart" button clicks
        let cartCount = 0;
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", () => {
                cartCount++;
                document.getElementById("cart-count").innerText = cartCount;
                alert("Item added to cart!");
            });
});
