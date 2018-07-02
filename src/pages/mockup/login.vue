<template>
	<div class="app-container" id="login">
		<div class="container">
			
			<!-- 회원가입 페이지 -->
			<div class="stage-wrapper" id="register">
				<div class="row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-8 col-xs-12">
						
					<!-- 로고 컴포넌트 -->
					<div class="logo">
						<img src="/static/img/logo.png">
					</div>
					
					<!-- 회원 폼 컴포넌트 -->
					<div class="member-form">
						<form>
							<!-- add 'warning' as a class if there is an error-->
							<div class="form-element warning" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">이미 가입된 이메일입니다.</p>
							</div>
							<div class="form-element" id="password">
								<label>비밀번호</label>
								<input type="password" class="cr"/>
							</div>
							<div class="form-element" id="password-check">
								<label>비밀번호 확인</label>
								<input type="password" class="cr"/>
								<p class="message">이메일과 비밀번호가 일치하지 않습니다.</p>
							</div>
							<div class="form-element" id="name">
								<label>이름</label>
								<input type="text" class="cr"/>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>직업</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<div class="caret"></div>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>유입경로</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<div class="caret"></div>
								<p class="message"></p>
							</div>
							<div class="form-element">
								<div class="tnc">
									<p>
										<a href="#">약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하고 가입합니다.
									</p>
								</div>
							</div>
							<div class="form-element" id="submit">
								<button class="cr disabled">로그인</button>
							</div>
						</form>
					</div>
					
					<!-- 소셜 로그인 컴포넌트 -->
					<div class="social-login">
						<div class="or"></div>
						<form>
							<div class="form-element">
								<button class="cr btn" id="facebook">
									<span>페이스북으로 회원가입</span>
								</button>
							</div>
						</form>
						<form>
							<div class="form-element">
								<button class="cr btn" id="google">
									<span>구글로 회원가입</span>
								</button>
							</div>
						</form>
					</div>
					
					<!-- 추가정보 컴포넌트 -->
					<div class="additional-info">
						<div class="already">
							<span>이미 크리에이터블 계정이 있으신가요?</span><a href="#">로그인</a>
						</div>
					</div>
						 	
					</div>
				</div>				
			</div>
			<!-- 회원가입 페이지 끝 -->
			
			
			
			<!-- 구글 회원가입 페이지 -->
			<div class="stage-wrapper" id="register-google">
				<div class="row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-8 col-xs-12">
						
					<!-- 심플 헤더 컴포넌트 -->
					<div class="simple-header">
						<h1 class="google-icon">구글로 회원가입</h1>
						<p>추가 정보를 입력하고 회원가입을 완료하세요.</p>
					</div>
					
					<!-- 회원 폼 컴포넌트 -->
					<div class="member-form">
						<form>
							<!-- add 'warning' as a class if there is an error-->
							<div class="form-element" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">이미 가입된 이메일입니다.</p>
							</div>
							<div class="form-element" id="password">
								<label>비밀번호</label>
								<input type="password" class="cr"/>
							</div>
							<div class="form-element" id="password-check">
								<label>비밀번호 확인</label>
								<input type="password" class="cr"/>
								<p class="message">이메일과 비밀번호가 일치하지 않습니다.</p>
							</div>
							<div class="form-element" id="name">
								<label>이름</label>
								<input type="text" class="cr"/>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>직업</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>유입경로</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<p class="message"></p>
							</div>
							<div class="form-element">
								<div class="tnc">
									<p>
										<a href="#">약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하고 가입합니다.
									</p>
								</div>
							</div>
							<div class="form-element" id="submit">
								<button class="cr disabled">로그인</button>
							</div>
						</form>
					</div>
					
					<!-- 추가정보 컴포넌트 -->
					<div class="additional-info">
						<div class="already">
							<span>이미 크리에이터블 계정이 있으신가요?</span><a href="#">로그인</a>
						</div>
					</div>
						
					</div>
				</div>
			</div>
			<!-- 구글로 회원가입 하기 끝 -->
			
			
			
			<!-- 페이스북 회원가입 페이지 -->
			<div class="stage-wrapper" id="register-facebook">
				<div class="row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-8 col-xs-12">
						
					<!-- 심플 헤더 컴포넌트 -->
					<div class="simple-header">
						<h1 class="facebook-icon">페이스북으로 회원가입</h1>
						<p>추가 정보를 입력하고 회원가입을 완료하세요.</p>
					</div>
					
					<!-- 회원 폼 컴포넌트 -->
					<div class="member-form">
						<form>
							<!-- add 'warning' as a class if there is an error-->
							<div class="form-element" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">이미 가입된 이메일입니다.</p>
							</div>
							<div class="form-element" id="password">
								<label>비밀번호</label>
								<input type="password" class="cr"/>
							</div>
							<div class="form-element" id="password-check">
								<label>비밀번호 확인</label>
								<input type="password" class="cr"/>
								<p class="message">이메일과 비밀번호가 일치하지 않습니다.</p>
							</div>
							<div class="form-element" id="name">
								<label>이름</label>
								<input type="text" class="cr"/>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>직업</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<div class="caret"></div>
								<p class="message"></p>
							</div>
							<div class="form-element" id="occupation">
								<label>유입경로</label>
								<select class="cr">
									<option>어떤 일을 하시나요?</option>
									<option>직업1</option>
									<option>직업2</option>
									<option>직업3</option>
									<option>직업4</option>
								</select>
								<div class="caret"></div>
								<p class="message"></p>
							</div>
							<div class="form-element">
								<div class="tnc">
									<p>
										<a href="#">약관</a> 및 <a href="#">개인정보처리방침</a>에 동의하고 가입합니다.
									</p>
								</div>
							</div>
							<div class="form-element" id="submit">
								<button class="cr disabled">로그인</button>
							</div>
						</form>
					</div>
					
					<!-- 추가정보 컴포넌트 -->
					<div class="additional-info">
						<div class="already">
							<span>이미 크리에이터블 계정이 있으신가요?</span><a href="#">로그인</a>
						</div>
					</div>
						
					</div>
				</div>
			</div>
			<!-- 페이스북으로 회원가입 하기 끝 -->
			
			
			<!-- 로그인 페이지 -->
			<div class="stage-wrapper" id="login">
				<div class="row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-8 col-xs-12">
					
					<!-- 로고 컴포넌트 -->
					<div class="logo">
						<img src="/static/img/logo.png">
					</div>
					
					<!-- 회원 폼 컴포넌트 -->
					<div class="member-form">
						<form>
							<!-- add 'warning' as a class if there is an error-->
							<div class="form-element" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">이미 가입된 이메일입니다.</p>
							</div>
							<div class="form-element" id="password">
								<label>비밀번호</label>
								<input type="password" class="cr"/>
								<p class="message">이메일과 비밀번호가 일치하지 않습니다.</p>
							</div>
							<div class="form-element" id="submit">
								<button class="cr disabled">로그인</button>
							</div>
						</form>
					</div>
					
					<!--소셜 로그인 컴포넌트-->
					<div class="social-login">
						<div class="or"></div>
						<form>
							<div class="form-element">
								<button class="cr btn" id="facebook">
									<span>페이스북으로 로그인</span>
								</button>
							</div>
						</form>
						<form>
							<div class="form-element">
								<button class="cr btn" id="google">
									<span>구글로 로그인</span>
								</button>
							</div>
						</form>
					</div>
					
					<!--추가정보 컴포넌트-->
					<div class="additional-info">
						<div class="lost-password">
							<a href="#">비밀번호 찾기</a>
						</div>
						<div class="register">
							<span>크리에이터블 계정이 없으신가요?</span><a href="#">회원가입</a>
						</div>
					</div>
					
					</div>
				</div>
			</div>
			<!-- 로그인 페이지 끝 -->
			
			
			<!-- 비밀번호 찾기 페이지 -->
			<div class="stage-wrapper" id="find-password">
				<div class="row justify-content-center align-items-center">
					<div class="col-md-4 col-sm-8 col-xs-12">
						
					<!--심플 헤더 컴포넌트-->
					<div class="simple-header">
						<h1>비밀번호 찾기</h1>
						<p>가입시 사용한 이메일 주소를 입력해주세요. <br/>이 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
					</div>
					
					<!--회원 폼 컴포넌트-->
					<div class="member-form">
						<form>
							<!-- add 'warning' as a class if there is an error-->
							<div class="form-element" id="email">
								<label>이메일</label>
								<input type="text" class="cr"/>
								<p class="message">일치하는 계정 정보가 없습니다.</p>
							</div>
							<div class="form-element" id="submit">
								<button class="cr disabled">비밀번호 재설정 링크 받기</button>
							</div>
						</form>
					</div>
						
					</div>
				</div>
			</div>
			<!-- 비밀번호 찾기 페이지 끝 -->
			
			
			
			
		</div><!--end of container-->
	</div><!-- end of app-container -->
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