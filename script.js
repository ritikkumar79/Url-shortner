document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector(`#shortUrl_button`);
    let copyButton = document.querySelector(`.material-symbols-outlined`);
    let NewURL = document.querySelector(`#urloutput`);
  
    btn.addEventListener('click', async () => {
        const userWrote = document.querySelector(`#urlinput`).value;
        try {
            const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(userWrote)}`);
            if (response.ok) {
                const data = await response.text();
                NewURL.value = data; 
            } else {
                NewURL.value = "Error shortening"; 
            }
        } catch (error) {
            console.error(error);
            NewURL.value = "Error shortening"; 
        }
    });

    copyButton.onclick = async () => {
        try {
            await navigator.clipboard.writeText(NewURL.value);
            copyMessage.style.display = 'block';
            setTimeout(() => {
                copyMessage.style.display = 'none';
            }, 2000);
        } catch (error) {
            console.error(error);
            NewURL.value = "Error copying"; 
        }
    };
});
