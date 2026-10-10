/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SequenceNum
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNum  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type SequenceNum = OCTET_STRING; // OctetStringType
export const _decode_SequenceNum = (el: _Element): SequenceNum => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("SequenceNum violates SIZE constraint");
    }
    return value;
};
export const _encode_SequenceNum = $._encodeOctetString;


/* eslint-enable */
