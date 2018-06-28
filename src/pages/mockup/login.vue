<template>
	<div class="app-container" id="login">
		<div class="container">
			<div class="row justify-content-md-center">
				<div class="col-md-4">
					Login Modal			
					
					<div id="id-login">
						<form>
							<div class="form-component warning" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">이미 가입된 이메일입니다.</p>
							</div>
							<div class="form-component" id="password">
								<label>비밀번호</label>
								<input type="password" class="cr"/>
							</div>
							<div class="form-component" id="submit">
								<button class="cr">로그인</button>
							</div>
						</form>
					</div>
					
					<div class="or"></div>
					
					<div id="social-login">
						<button class="cr" id="facebook">페이스북으로 로그인</button>
						<button class="cr" id="google">구글로 로그인</button>
					</div>
					
				</div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'MockupLogin',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "static/css/cdls/core/common";
@import "static/css/cdls/pages/login";
</style>