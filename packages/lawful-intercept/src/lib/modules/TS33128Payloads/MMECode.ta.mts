/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMECode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMECode  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MMECode = OCTET_STRING; // OctetStringType
export const _decode_MMECode: $.ASN1Decoder<MMECode> = (el: _Element): MMECode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("MMECode violates SIZE constraint");
    }
    return value;
};
export const _encode_MMECode: $.ASN1Encoder<MMECode> = $._encodeOctetString;


/* eslint-enable */
