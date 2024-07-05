let posts = [];

document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const imageFile = document.getElementById('post-image').files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            addPost(title, content, event.target.result);
        };
        reader.readAsDataURL(imageFile);
    } else {
        addPost(title, content);
    }

    this.reset();
});

function addPost(title, content, imageUrl = null) {
    const post = {
        id: Date.now(),
        title,
        content,
        imageUrl,
        comments: []
    };
    posts.unshift(post);
    renderPosts();
}

function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}">` : ''}
            <p>${post.content}</p>
            <div class="comments">
                <h4>Comentarios:</h4>
                ${post.comments.map(comment => `
                    <div class="comment">
                        <p>${comment}</p>
                    </div>
                `).join('')}
            </div>
            <form class="comment-form" data-post-id="${post.id}">
                <input type="text" placeholder="Añadir un comentario" required>
                <button type="submit">Comentar</button>
            </form>
        `;
        postsContainer.appendChild(postElement);
    });

    // Añadir event listeners para los formularios de comentarios
    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post-id');
            const comment = this.querySelector('input').value;
            addComment(parseInt(postId), comment);
            this.reset();
        });
    });
}

function addComment(postId, comment) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comments.push(comment);
        renderPosts();
    }
}

// Inicializar con algunas publicaciones de ejemplo
addPost('Beneficios del Gel de Sábila', 'El gel de sábila tiene múltiples beneficios para la piel...');
addPost('Cómo aplicar el Gel de Sábila', 'Para obtener los mejores resultados, sigue estos pasos...');