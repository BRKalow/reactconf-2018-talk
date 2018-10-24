import React from 'react';

const Diagram = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: `
      <svg width="76vw" height="586px" viewBox="0 0 979 293" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs>
              <text id="text-1" font-family="Helvetica" font-size="60" font-weight="normal" fill="#E6E9EF">
                  <tspan x="493" y="307">&gt;</tspan>
              </text>
              <filter x="-27.5%" y="-9.6%" width="155.0%" height="130.1%" filterUnits="objectBoundingBox" id="filter-2">
                  <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                  <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
                  <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
                  <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
                  </feMerge>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop" transform="translate(-21.000000, -154.000000)">
                  <rect id="Rectangle" stroke="#E6E9EF" stroke-width="3" x="22.5" y="155.5" width="400" height="290" rx="8"></rect>
                  <rect id="Rectangle" stroke="#E6E9EF" stroke-width="3" x="598.5" y="155.5" width="400" height="290" rx="8"></rect>
                  <rect id="Rectangle-2" fill="#F8E71C" x="79" y="242" width="115" height="9"></rect>
                  <rect id="Rectangle-2" fill="#50E3C2" x="166" y="345" width="115" height="9"></rect>
                  <rect id="Rectangle-2" fill="#BD10E0" x="199" y="242" width="115" height="9"></rect>
                  <rect id="Rectangle-2" fill="#50E3C2" x="79" y="383" width="115" height="9"></rect>
                  <rect id="Rectangle-2" fill="#BD10E0" x="199" y="383" width="115" height="9"></rect>
                  <rect id="Rectangle-2" fill="#BD10E0" x="79" y="223" width="147" height="9"></rect>
                  <rect id="Rectangle-2" fill="#F8E71C" x="79" y="364" width="147" height="9"></rect>
                  <rect id="Rectangle-2" fill="#50E3C2" x="79" y="204" width="82" height="9"></rect>
                  <rect id="Rectangle-2" fill="#50E3C2" x="225" y="204" width="82" height="9"></rect>
                  <rect id="Rectangle-2" fill="#BD10E0" x="79" y="345" width="82" height="9"></rect>
                  <rect id="Rectangle-2" fill="#F8E71C" x="166" y="204" width="54" height="9"></rect>
                  <rect id="Rectangle-2" fill="#F8E71C" x="231" y="223" width="54" height="9"></rect>
                  <rect id="Rectangle-3" fill="#50E3C2" x="668" y="209" width="130" height="47" rx="8"></rect>
                  <rect id="Rectangle-3" fill="#BD10E0" x="734" y="270" width="130" height="47" rx="8"></rect>
                  <rect id="Rectangle-3" fill="#F8E71C" x="800" y="333" width="130" height="47" rx="8"></rect>
                  <text id="componentDidMount(-)" font-family="Helvetica-Bold, Helvetica" font-size="18" font-weight="bold" fill="#E6E9EF">
                      <tspan x="55" y="192">componentDidMount( ) {</tspan>
                  </text>
                  <text id="componentDidUpdate(" font-family="Helvetica-Bold, Helvetica" font-size="18" font-weight="bold" fill="#E6E9EF">
                      <tspan x="55" y="333">componentDidUpdate( ) {</tspan>
                  </text>
                  <text id="}" font-family="Helvetica-Bold, Helvetica" font-size="18" font-weight="bold" fill="#E6E9EF">
                      <tspan x="58.7346039" y="274.140625">}</tspan>
                  </text>
                  <text id="}" font-family="Helvetica-Bold, Helvetica" font-size="18" font-weight="bold" fill="#E6E9EF">
                      <tspan x="56.4305573" y="415.398438">}</tspan>
                  </text>
                  <g id="&gt;" fill-opacity="1" fill="#E6E9EF">
                      <use filter="url(#filter-2)" xlink:href="#text-1"></use>
                      <use xlink:href="#text-1"></use>
                  </g>
              </g>
          </g>
      </svg>`
    }}
  />
);

export default Diagram;
