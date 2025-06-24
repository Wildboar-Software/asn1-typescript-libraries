import type { AttributeTypeAndValue as ATAV } from "../types/AttributeTypeAndValue.mjs";
import type { StringDecoderGetter } from "../types/StringDecoderGetter.mjs";
import atavFromString from "./AttributeTypeAndValue.mjs";

/**
 * @summary Parse an RDN from a string according to RFC 4514.
 * @description
 * 
 * This function parses an RDN from a string according to
 * [IETF RFC 4514](https://www.rfc-editor.org/rfc/rfc4514).
 * 
 * @param str The string to parse.
 * @param getStringDecoder A function that can be used to get a string decoder.
 * @param escape The escape character.
 * @param atavDelimiter The ATAV delimiter.
 * @yields ATAVs from the RDN from left to right.
 * @function
 */
export function* rdnFromString(
    str: string,
    getStringDecoder: StringDecoderGetter,
    escape: number = "\\".charCodeAt(0),
    atavDelimiter: number = "+".charCodeAt(0),
): IterableIterator<ATAV> {
    let start: number = 0;
    for (let i: number = 0; i < str.length; i++) {
        const char: number = str.charCodeAt(i);
        const prevChar: number = str.charCodeAt(i - 1);
        if (char === atavDelimiter && prevChar !== escape) {
            yield atavFromString(str.slice(start, i), getStringDecoder);
            i++;
            start = i;
        }
    }
    yield atavFromString(str.slice(start), getStringDecoder);
}

export default rdnFromString;

