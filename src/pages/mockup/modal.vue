<template>

<div class="app-container">
	
	<div class="modal-container">
		<div class="dark"></div>
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="modal col-md-4" id="authorization">
					<p class="message">
						abc@abc.com<br/>
						메일을 인증하면 가입이 완료됩니다.<br/>
						(24시간 동안만 유효합니다.)
					</p>
					<ul class="modal-button">
						<li id="again">
							<button>인증 메일 다시 받기</button>
						</li>
						<li id="cancel">
							<button>취소</button>
						</li>
						<li id="confirm">
							<button>확인</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</div>

</template>

<script>
export default {
  name: 'MockupModal',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "static/css/cdls/core/common";
@import "static/css/cdls/pages/modal";
</style>
