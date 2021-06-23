import type { AttributeTypeAndValue as ATAV } from "../types/AttributeTypeAndValue";
import type { StringDecoderGetter } from "../types/StringDecoderGetter";
import rdnFromString from "./RelativeDistinguishedName";

type RDN = ATAV[];

export default function* rdnSequenceFromString(
    str: string,
    getStringDecoder: StringDecoderGetter,
    escape: number = "\\".charCodeAt(0),
    rdnDelimiter: number = ",".charCodeAt(0),
    atavDelimiter: number = "+".charCodeAt(0),
): IterableIterator<RDN> {
    let start: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        const char: number = str.charCodeAt(i);
        const prevChar: number = str.charCodeAt(i - 1);
        if (char === rdnDelimiter && prevChar !== escape) {
            const unescapedRDN = str.slice(start, i);
            yield Array.from(
                rdnFromString(unescapedRDN, getStringDecoder, escape, atavDelimiter)
            );
            i++;
            start = i;
        }
    }
    const unescapedRDN = str.slice(start);
    yield Array.from(
        rdnFromString(unescapedRDN, getStringDecoder, escape, atavDelimiter)
    );
}
