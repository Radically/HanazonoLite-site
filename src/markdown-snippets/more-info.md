### There are incorrect glyphs in my locale!

<sup>N.B. I am a newcomer to GlyphWiki myself, so the observations below may not be entirely correct, and there may be exceptions to the rule given the nature of collaborative editing. I've created an issue [here](https://github.com/Radically/HanazonoLite/issues/14) for further discussion and observations on locale-specific needs.</sup>

In GlyphWiki, default names (e.g. `u7940`) are usually aliased to the J-source variant or even the `-jv` variant if one exists; thus `u7940` is aliased to `u7940-j`, and `u6eb8` is aliased to `u6eb8-jv` as of the time of writing, otherwise it is aliased to the primary locale from which it originates.

For instance, <span class="large">纷</span>, being the Simplified Chinese-exclusive variant of <span class="large mincho" lang="ko">紛</span>, necessarily only has a G-source glyph. `u7eb7` is thus an alias of `u7eb7-g`. Note the absence of the brief horizontal stroke in <span class="large bold mincho" lang="zh-Hans">八</span> compared to <span class="large bold mincho" lang="ko">八</span>, as well as the lack of discontinuity in <span class="large bold mincho" lang="zh-Hans">纟</span> vs <span class="large bold mincho" lang="ja">糸</span>, which are [characteristics of modern G-source <span class="gothic">宋体</span>](https://en.wikipedia.org/wiki/Jiu_zixing#Characteristics), which in turn takes on many features of regular script.

<span class="large"><ruby>𫙹<rp>(</rp><rt>ブリザード</rt><rp>)</rp></ruby></span> is a recently-coined, <span class="gothic">和製漢字</span> with no G-source, even though in theory a G-styled glyph with <span class="large mincho bold" lang="zh-Hans">山</span> instead of <span class="large mincho bold" lang="ja">山</span> could be created (note the boxy protrusion to the bottom left, once again a <span class="gothic">新字形</span> artifact).

<span class="large mincho" lang="ja">払</span>, the <span class="gothic">新字体</span> of <span class="large mincho" lang="ja">拂</span>, is a [variant attested to in the <span class="gothic">康熙字典</span>](https://web.archive.org/web/20210408170441/https://c.cidianwang.com/file/kangxi/1555.gif), hence, naturally it has a G-variant too, <span class="large mincho" lang="zh-Hans">払</span>.

Yet still, there exist Korean-only <span lang="ko" class="gothic">國字</span> which made their way into the PRC's GB standards, e.g. <span class="large mincho" lang="zh-Hans">乻</span> with the first stroke in <span class="large mincho" lang="ko">乻</span> rendered as a <span class="large">丶</span> instead.

In the absence of a locale-specific glyph, the default name is used. When generating the SC font, the (sole) J-variant is used for <span class="large">𫙹</span>, which makes sense to me since it almost always appears in a Japanese context. The same would apply to non-SC fonts using <span class="large">纷</span>.

Unfortunately, currently, [locale-specific glyphs for the URO](https://en.glyphwiki.org/wiki/Group:MulticolumnCharts) are far from complete. Using <span class="large">諞</span> as an example; as of [April 9, 2021](https://en.glyphwiki.org/wiki/u8ade@7) only its G and J-source glyphs are defined. Therefore, in the TC font, `u8ade` uses the `u8ade-j` glyph by default. When invoking the `locl` feature using the TC font, all locales except `zh-Hans` fall back to the `u8ade-j` glyph. `zh-Hans` works properly because there would be a substitution rule which replaces whatever CID `u8ade` points to with `u8ade-g` unconditionally, which exists.

It is unclear whether, say, `u8ade && locl=vi (nonexistent) -> u8ade (nonexistent) -> u8ade-j` is a desirable fallback strategy. For one, various Nôm-targeted fonts are based on Song-style glyphs, not least the eponymous [<ruby><rb><span class="gothic">喃</span> </rb><rp>(</rp><rt>nôm</rt><rp>)</rp></ruby><ruby><rb><span class="gothic">那</span></rb><rp>(</rp><rt>na</rt><rp>)</rp></ruby><ruby><rb><span class="gothic">宋</span></rb><rp>(</rp><rt>tống</rt><rp>)</rp></ruby> Light](http://nomfoundation.org/nom-tools/Nom-Font) font, which is a V-source Unicode code chart reference font, as well as the [Han Nom fonts](http://vietunicode.sourceforge.net/), used in the <ruby><rb><span class="gothic">字</span></rb><rt>Từ</rt><rb><span class="gothic">典</span></rb><rt>Điển</rt><rb><span class="gothic">𡨸</span></rb><rt>Chữ</rt><rb><span class="gothic">喃</span></rb> <rt>Nôm</rt><rb><span class="gothic">摘</span></rb> <rt>Trích</rt><rb><span class="gothic">引</span></rb> <rt>Dẫn</rt></ruby>, hence fallback to _any_ of G, T, or even H sources could be desirable.

Simply leaving those glyphs unpopulated, thus allowing the user to choose a suitable font stack, is another possibility, although the `locl` feature for that codepoint would no longer work because there is no glyph to substitute for anymore!

Charts showing which locale-specific glyphs are available in the URO and whether they have been added to GlyphWiki are available [here](https://en.glyphwiki.org/wiki/Group:MulticolumnCharts).

### Gothic font is missing lots of strokes!

Yes, that's probably why `kage.kShotai = kage.kGothic` isn't documented yet. I'm keeping track of the gothic related issues I've found [here](https://github.com/Radically/HanazonoLite/issues/13).

### Is there any reasoning behind the A, B, C, and D splits?

In the CJK fonts, as many of the East Asian-related Unicode blocks are added to the A file as possible to pass `fc-validate` so that there are less catches with `fontconfig` when trying to prioritize it over system fonts. Simply avoid installing the D split if you don't want to use non East Asian glyphs.

```sh
$ fc-validate -l zh_cn HanaMinLiteCJKATC.otf
HanaMinLiteCJKATC.otf:0 Satisfy the coverage for zh-cn language
$ fc-validate -l zh_tw HanaMinLiteCJKATC.otf
HanaMinLiteCJKATC.otf:0 Satisfy the coverage for zh-tw language
$ fc-validate -l zh_hk HanaMinLiteCJKATC.otf
HanaMinLiteCJKATC.otf:0 Missing 121 glyph(s) to satisfy the coverage for zh-hk language
$ fc-validate -l ja_jp HanaMinLiteCJKATC.otf
HanaMinLiteCJKATC.otf:0 Satisfy the coverage for ja language
$ fc-validate -l ko_kr HanaMinLiteCJKATC.otf
HanaMinLiteCJKATC.otf:0 Satisfy the coverage for ko language
```
