/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type CellID = OCTET_STRING; // OctetStringType

export function _decode_CellID (el: _Element): CellID {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("CellID violates the SIZE constraint");
    }
    return value;
}

export const _encode_CellID: $.ASN1Encoder<CellID> = $._encodeOctetString;


/* eslint-enable */
