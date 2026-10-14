/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDSpico
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDSpico            ::=    OCTET STRING (SIZE(10))
 * ```
 */
export
type TimeCCSDSpico = OCTET_STRING; // OctetStringType
export function _decode_TimeCCSDSpico (el: _Element): TimeCCSDSpico {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 10 || _decoded.length > 10) {
        throw new ASN1SizeError("TimeCCSDSpico violates SIZE (10)");
    }
    return _decoded;
}
export const _encode_TimeCCSDSpico: $.ASN1Encoder<TimeCCSDSpico> = $._encodeOctetString;


/* eslint-enable */
