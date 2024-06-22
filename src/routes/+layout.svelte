<script>
    import Navbar from '../components/Navbar.svelte';
    import Sidebar from '../components/Sidebar.svelte';
  </script>
  
  <main>
    <Navbar />
    <div class="container">
      <Sidebar />
      <div class="content">
        <slot />
      </div>
    </div>
  </main>
  
  <style>
    :global(body) {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
    }
  
    main {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
  
    .container {
      display: flex;
      flex: 1;
    }
  
    .content {
      flex: 1;
      overflow-y: auto;
    }
  </style>