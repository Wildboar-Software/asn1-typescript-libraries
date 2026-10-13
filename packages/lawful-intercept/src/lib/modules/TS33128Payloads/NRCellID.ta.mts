/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NRCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NRCellID  ::=  BIT STRING (SIZE(36))
 * ```
 */
export
type NRCellID = BIT_STRING;
export const _decode_NRCellID: $.ASN1Decoder<NRCellID> = (el: _Element): NRCellID => {
    const value = $._decodeBitString(el);
    if (value.length < 36 || value.length > 36) {
        throw new ASN1SizeError("NRCellID violates SIZE constraint");
    }
    return value;
};
export const _encode_NRCellID: $.ASN1Encoder<NRCellID> = $._encodeBitString;


/* eslint-enable */
