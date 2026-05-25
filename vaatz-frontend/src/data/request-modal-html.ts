export const requestModalHtml = `<div class="rq-m" id="rqM">
<div class="rq-b">
    <div class="rq-h">📤 공식 데이터 업로드 요청</div>
    <div class="rq-d">AI 지식 베이스에 반영할 공식 데이터를 업로드하고, 해당 팀에 승인을 요청합니다.<br>승인 후 전체 사용자에게 제공됩니다.</div>
    <div class="frm-g">
        <label class="frm-l">데이터명 / 문서명</label>
        <input type="text" class="frm-i" placeholder="예: 2026년 상반기 구매전략 보고서">
    </div>
    <div class="frm-g">
        <label class="frm-l">파일 첨부</label>
        <div class="upl-req-z" id="reqDropZone" onclick="simReqUpload()">
            <span class="upl-i">📎</span>
            <div class="upl-t">클릭하여 파일 선택 또는 드래그</div>
            <div class="upl-s">PDF, DOCX, XLSX, HWP · 최대 50MB</div>
        </div>
        <div id="reqFileList" class="req-file-list"></div>
    </div>
    <div class="frm-g">
        <label class="frm-l">승인 요청 팀</label>
        <select class="frm-i frm-sel" id="reqTeamSel">
            <option value="">팀을 선택하세요</option>
            <option value="구매전략팀">구매전략팀</option>
            <option value="반도체구매팀">반도체구매팀</option>
            <option value="구매품질기획팀">구매품질기획팀</option>
            <option value="PT제어부품구매팀">PT제어부품구매팀</option>
            <option value="구매디지털추진팀">구매디지털추진팀</option>
            <option value="구매역량개발팀">구매역량개발팀</option>
            <option value="샤시부품구매1팀">샤시부품구매1팀</option>
        </select>
    </div>
    <div class="frm-g">
        <label class="frm-l">요청 사유</label>
        <input type="text" class="frm-i" placeholder="예: 신규 계약 검토 시 참조 필요">
    </div>
    <div class="frm-a">
        <button class="btn btn-c" onclick="reqClose()">취소</button>
        <button class="btn btn-p" onclick="submitReq()">📤 업로드 요청</button>
    </div>
</div>
</div>`