document.querySelector(".py").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "평면예술분과는 평면예술을 사랑하는 동아리들이 모여있습니다. 서로 조언하고 응원하며 함께 작품전시회를 준비하다보면 스스로가 상상하던 작품을 내손으로 만들어내는 즐거움을 느낄 수 있을거에요. 회화, 사진, 서예, 만화, 판화, 영상까지, 다양한 평면예술을 즐겨보세요!";
});
document.querySelector(".yy").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "연행예술분과는 무대 위 무형의 예술을 창조합니다. 관객과 같은 시공간을 공유하면서, 그 자리에서 작품의 실체가 만들어져 가는 형태의 예술을 꿈꾸고 있습니다. 끼와 재능의 순간적 폭발과, 모든 공연이 끝난 후 텅 빈 무대의 여운이 기대된다면 연행예술분과와 함께해요!";
});
document.querySelector(".bs").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "봉사분과는 성균관대 중앙봉사동아리 5개로 구성된 분과로서 헤라, 쿠사, 캠퍼스학생회, 심산한누리 그리고 호우회가 그 5개 동아리입니다!! 교내, 교외 봉사를 모두 담당하고 있는 것은 물론! 교내 및 교외 봉사들을 직접 기획하고 실행하는 일까지!! 삶의 이유와 활력을 찾고 싶다면 봉사 분과 동아리로 오세요!!";
});
document.querySelector(".cg").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "취미교양분과는 학생들이 즐길 수 있는 다양한 동아리가 존재합니다! 요즘 핫한 e스포츠부터 시작해서 보드게임, 광고, 여행, 천문학, 답사, 그리고 바둑까지 말이죠. 만약 다른 곳에서 여러분들이 즐길 걸 찾지 못하셨다면 취미교양에서 찾아보세요!";
});
document.querySelector(".sp").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "예로부터 학업과 운동 모두에 능하면 ‘문무겸비’라 했는데 바로 여기 모여 있네요. 바로 스포츠분과 동아리 학우들입니다! 축구, 농구, 야구, 테니스, 배드민턴, 태권도, 국궁, 택견, 스노우보드, 댄스스포츠까지 다양한 스포츠가 여러분을 기다리고 있습니다. 어서 와서 함께 해요!";
});
document.querySelector(".jg").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "종교분과는 기독교 동아리인 겟세마네, CCC, SCA, UBF, 불교 동아리인 성불회, 천주교 동아리 반촌까지 총 6개 동아리가 있습니다. 종교 분과는 성균관대학교 종교인의 자유로운 종교 활동 보장과 종교 공동체 제공, 사이비 단체의 차단을 위해 힘쓰고 있습니다.";
});
document.querySelector(".hb").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "학술 분과 소속 동아리들은 다양한 분야의 지식, 정보를 공유하고 소통합니다. 글과 말을 매개로 경제와 시사, 외국어에 대해서 자유롭게 토론하고 배우며, 성장합니다. 여러분들이 배움과 소통에 목마른 학생이라면 학술 분과 동아리들은 최고의 선택이 될 것입니다.";
});
document.querySelector(".is").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "인문사회분과는 인문/사회적 교양을 쌓을 수 있는 동아리가 모여있는 곳입니다. 학술, 봉사, 사회 문제를 다루기도 하지만, 보다 큰 집단(연합 단체) 속에서의 일원으로서 친목도 쌓고, 나은 결과 도출을 위한 대화들도 즐길 수 있습니다. 즐겁게 의견 나눌 곳을 원한다면 찾아주세요!";
});
document.querySelector(".all").addEventListener("click", function() {
  checkState();
});

let activeCheck = document.querySelector("#check").className;

let checkState = () => {
  if ((activeCheck = "active")) {
    document.querySelector(".introCard").style.display = "none";
  }
};

checkState();
