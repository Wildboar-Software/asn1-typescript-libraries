import type { AttributeTypeAndValue as ATAV } from "../types/AttributeTypeAndValue.mjs";
import type { StringDecoderGetter } from "../types/StringDecoderGetter.mjs";
import rdnFromString from "./RelativeDistinguishedName.mjs";

type RDN = ATAV[];

/**
 * @summary Parse an RDN sequence from a string according to RFC 4514.
 * @description
 * 
 * This function parses an RDN sequence from a string according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 * 
 * @param str The string to parse.
 * @param getStringDecoder A function that can be used to get a string decoder.
 * @param escape The escape character.
 * @param rdnDelimiter The RDN delimiter.
 * @param atavDelimiter The ATAV delimiter.
 * @yields RDNs from the sequence from left to right.
 * @function
 */
export default function* rdnSequenceFromString(
    str: string,
    getStringDecoder: StringDecoderGetter,
    escape: number = "\\".charCodeAt(0),
    rdnDelimiter: number = ",".charCodeAt(0),
    atavDelimiter: number = "+".charCodeAt(0),
): IterableIterator<RDN> {
    if (str.length === 0) { // Without this, rdnFromString() will crash when trying to parse the root DSE DN.
        return;
    }
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
