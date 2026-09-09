/*
 * 서버 주소와 **anon 키**. 이 둘만 여기 둔다.
 *
 * ⛔ 비밀번호도, `service_role` 키도 절대 넣지 마라. 이 파일은 **공개 저장소**에 올라간다 —
 *    비밀번호를 여기 적으면 자물쇠 옆에 열쇠를 붙여두는 것과 같다. 운영자 비밀번호는
 *    **서버 계정에만** 있고, 콘솔은 화면에서 입력받아 세션을 얻을 뿐이다.
 *
 * anon 키는 APK 에도 그대로 박히는 **공개 키**라 여기 있어도 새는 게 없다. 이 키로 할 수 있는 일은
 * 서버의 RLS 와 `private.is_operator()` 가 정한다 — 열쇠가 아니라 **주소 같은 것**이다.
 */
window.ILGAM = {
  url: 'https://lotgzwnksnsnslrrnewf.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvdGd6d25rc25zbnNscnJuZXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MDc3OTEsImV4cCI6MjEwMjE4Mzc5MX0.PsdGa255vVALxoZHb2PejSY_u_npI5qw4lDCfbsHIcc',
};
