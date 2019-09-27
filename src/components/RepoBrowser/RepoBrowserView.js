/* eslint-disable class-methods-use-this */
import View from '../../redux/View';

export default class RepoBrowserView extends View {
  render({ files, commits, shownFiles }) {
    console.log('VIEW', this.constructor.name, 'render method called');
    const fileList = shownFiles.map((id) => {
      const file = files[id];
      const commit = commits[file.commit];
      return `
      <div class="Table-Row Table-Row_padding_h Table-Row_padding_v Table-Row_border_bottom">
        <div class="Table-Cell RepoBrowser-File">
            <a href="#" class="File">
                <span class="Icon">
                    <img src="../assets/${file.type}.svg">                                      
                </span>
                <span>${files[id].name}</span>
            </a>
        </div>
        <div class="Table-Cell RepoBrowser-Commit">
            <a href="#" class="Link">${files[id].commit}</a>
        </div>
        <div class="Table-Cell RepoBrowser-CommitMessage">
            ${commit.message}
        </div>
        <div class="Table-Cell RepoBrowser-Committer">
            <a href="#" class="Name">${commit.author}</a>
        </div>
        <div class="Table-Cell Table-Cell_text_right RepoBrowser-Updated">
            ${commit.time}
        </div>
        <div class="Table-Cell Goto">
            <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.9375 1.02344L0.15625 1.76562C0 1.96094 0 2.27344 0.15625 2.42969L7.22656 9.5L0.15625 16.6094C0 16.7656 0 17.0781 0.15625 17.2734L0.9375 18.0156C1.13281 18.2109 1.40625 18.2109 1.60156 18.0156L9.80469 9.85156C9.96094 9.65625 9.96094 9.38281 9.80469 9.1875L1.60156 1.02344C1.40625 0.828125 1.13281 0.828125 0.9375 1.02344Z" fill="#E5E5E5"/>
            </svg>                                
        </div>
      </div>
      `;
    }).join('');
    return `
      <div class="Table RepoBrowser Page-Block">
        <div class="Table-Header Table-Header_padding_h Table-Header_padding_v Table-Row RepoBrowser-Header">
            <div class="Table-Cell RepoBrowser-File">Name</div>
            <div class="Table-Cell RepoBrowser-Commit">Last commit</div>
            <div class="Table-Cell RepoBrowser-CommitMessage">Commit message</div>
            <div class="Table-Cell RepoBrowser-Committer">Committer</div>
            <div class="Table-Cell Table-Cell_text_right RepoBrowser-Updated">Updated</div>
        </div>
        ${fileList}
      </div>
    `;
  }
}
