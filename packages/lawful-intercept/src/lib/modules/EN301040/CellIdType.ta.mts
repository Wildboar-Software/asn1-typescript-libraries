/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellIdType
 * @description
 * 
 * Cell identity within a TETRA cell global identity, 16 bits. Optional on
 * `TETRACGIType`. Clause 4.4 allows the reported location to name the base
 * station when that is known.
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.8.1, clause 4.4.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type CellIdType = BIT_STRING;
export const _decode_CellIdType: $.ASN1Decoder<CellIdType> = (el: _Element): CellIdType => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("CellIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_CellIdType: $.ASN1Encoder<CellIdType> = $._encodeBitString;


/* eslint-enable */
