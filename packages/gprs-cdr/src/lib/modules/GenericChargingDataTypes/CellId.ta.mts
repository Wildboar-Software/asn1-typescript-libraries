/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellId      ::=  OCTET STRING ( SIZE( 2 ) )
 * ```
 */
export
type CellId = OCTET_STRING; // OctetStringType

export const _decode_CellId = (el: _Element): CellId => {
    const value = $._decodeOctetString(el);
    if (value.length !== 2) {
        throw new ASN1SizeError("CellId violates SIZE constraint");
    }
    return value;
};

export
const _encode_CellId: $.ASN1Encoder<CellId> = $._encodeOctetString;

/* eslint-enable */
