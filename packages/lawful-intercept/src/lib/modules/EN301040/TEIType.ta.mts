/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TEIType
 * @description
 * 
 * TETRA Equipment Identity, 60 bits, as defined in EN 300 392-1. Clause 3.1
 * uses it when the interception target is an equipment rather than a
 * subscription. Clause 4.2 tells the operator to use best endeavours to map a
 * TEI to a TSI. That may use TEI PROVIDE, which clause 4.2 does not mandate and
 * which must preserve service transparency (clause 4.6). Clause 6.2 requires
 * the SwMI to support TEI PROVIDE (EN 300 392-7, clause 4) when the (co)target
 * is identified by TEI.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.2, clause 4.2, clause 3.1.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TEIType  ::=  BIT STRING (SIZE (60))
 * ```
 */
export
type TEIType = BIT_STRING;
export const _decode_TEIType: $.ASN1Decoder<TEIType> = (el: _Element): TEIType => {
    const value = $._decodeBitString(el);
    if (value.length < 60 || value.length > 60) {
        throw new ASN1SizeError("TEIType violates SIZE constraint");
    }
    return value;
};
export const _encode_TEIType: $.ASN1Encoder<TEIType> = $._encodeBitString;


/* eslint-enable */
