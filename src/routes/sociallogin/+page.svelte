<script lang="ts">
    import { onMount } from 'svelte';
    import { isLogin } from '../../api/auth';

    let token;
  
    const getUrlParameter = (name) => {
      let params = new URLSearchParams(location.search);
      return params.get(name);
    };
  
    onMount(() => {
      token = getUrlParameter("token");
      if (token) {
        localStorage.setItem("ACCESS_TOKEN", token);
        isLogin();
      } else {
        alert("로그인 에러")
      }
      window.location.href = "/";
    });
  </script>
  
  <div></div>