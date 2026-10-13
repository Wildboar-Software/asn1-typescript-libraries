/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SpaceLinkDataUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpaceLinkDataUnit       ::=    OCTET STRING (SIZE (1 .. 65536))
 * ```
 */
export
type SpaceLinkDataUnit = OCTET_STRING; // OctetStringType
export function _decode_SpaceLinkDataUnit (el: _Element): SpaceLinkDataUnit {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 1 || _decoded.length > 65536) {
        throw new ASN1SizeError("SpaceLinkDataUnit violates SIZE (1..65536)");
    }
    return _decoded;
}
export const _encode_SpaceLinkDataUnit: $.ASN1Encoder<SpaceLinkDataUnit> = $._encodeOctetString;


/* eslint-enable */
