import React from 'react';

export const Explanatory = () => {
	return(
		<div>
			CMS Website Cerindo ini terdiri dari <i>Collection Types</i> dan <i>Single Types</i>. <i>Collection Types</i> merupakan tipe konten yang dapat dipakai berulang-ulang formatnya dan <i>Single Types</i> adalah konten sekali pakai (statis).
		</div>
	)
};

export const Content = () => {
	return(
        <ul>
          <li className="paddingText italic subSubHeader">Collection Types</li>
            <ul className="italic">
              <li className="item">Announcements</li>
              <li className="item">Businesses</li>
              <li className="item">Career Contents</li>
              <li className="item">Community Activities</li>
              <li className="item">Phases</li>
              <li className="item">Photos Galleries</li>
              <li className="item">Press News</li>
              <li className="item">Users</li>
              <li className="item">Video Galleries</li>
            </ul>
          <li className="paddingText italic subSubHeader">Single Types</li>
            <ul>
              <li className="italic item">About Us</li>
              <li className="italic item ">Career</li>
              <li className="italic item">Global Sustainibility</li>
              <li className="italic item">Homepage</li>
            </ul>
        </ul>
	)
};

export const Collection = () => {
	return(
        <ol>
          <li className="item">Pilih bagian <i>"Collection Types"</i>. Pilih salah satu untuk diubah atau ditambah.</li>
          <li className="item">Jika ingin mengubah, klik kontent yang sesuai dan lakukan perubahan.</li>
          <li className="item">Jika ingin menambah konten, pilih di kanan atas <i>"Add New ---"</i> sesuai dengan konten yang dipilih.</li>
          <li className="item">Jangan lupa untuk mem-<i>publish</i> atau men-<i>save</i>!</li>
        </ol>
	)
};

export const Single = () => {
	return(
        <ol>
          <li className="item">Pilih bagian <i>"Single Types"</i>. Pilh salah satu untuk diedit.</li>
          <li className="item">Jika ingin mengubah, klik konten yang sesuai dan lakukan perubahan.</li>
          <li className="item">Jangan lupa untuk men-<i>save</i>!</li>
        </ol>
	)
};