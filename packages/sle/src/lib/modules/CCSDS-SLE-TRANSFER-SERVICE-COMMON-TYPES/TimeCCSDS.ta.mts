/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDS                ::=    OCTET STRING (SIZE(8))
 * ```
 */
export
type TimeCCSDS = OCTET_STRING; // OctetStringType
export function _decode_TimeCCSDS (el: _Element): TimeCCSDS {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 8 || _decoded.length > 8) {
        throw new ASN1SizeError("TimeCCSDS violates SIZE (8)");
    }
    return _decoded;
}
export const _encode_TimeCCSDS: $.ASN1Encoder<TimeCCSDS> = $._encodeOctetString;


/* eslint-enable */
