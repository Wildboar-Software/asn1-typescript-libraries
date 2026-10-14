/* eslint-disable */
import {
    ASN1Element as _Element,
    VisibleString,
    ASN1CharactersError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IdentifierString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IdentifierString         ::=    VisibleString (FROM (ALL EXCEPT " "))
 * ```
 */
export
type IdentifierString = VisibleString; // VisibleString
export function _decode_IdentifierString (el: _Element): IdentifierString {
    const _decoded = $._decodeVisibleString(el);
    if (_decoded.includes(" ")) {
        throw new ASN1CharactersError("IdentifierString contains a prohibited character");
    }
    return _decoded;
}
export const _encode_IdentifierString: $.ASN1Encoder<IdentifierString> = $._encodeVisibleString;


/* eslint-enable */
