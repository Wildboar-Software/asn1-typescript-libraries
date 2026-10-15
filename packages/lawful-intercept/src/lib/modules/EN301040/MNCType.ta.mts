/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNCType
 * @description
 * 
 * Mobile Network Code, 14 bits, as defined in EN 300 392-1. Used in a TSI and
 * in a TETRA cell global identity. On initialization of interception, this
 * field may hold a system default (clause 6.8.1).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2, clause 6.8.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNCType  ::=  BIT STRING (SIZE (14))
 * ```
 */
export
type MNCType = BIT_STRING;
export const _decode_MNCType: $.ASN1Decoder<MNCType> = (el: _Element): MNCType => {
    const value = $._decodeBitString(el);
    if (value.length < 14 || value.length > 14) {
        throw new ASN1SizeError("MNCType violates SIZE constraint");
    }
    return value;
};
export const _encode_MNCType: $.ASN1Encoder<MNCType> = $._encodeBitString;


/* eslint-enable */
