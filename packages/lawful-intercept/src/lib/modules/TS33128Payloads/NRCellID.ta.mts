/* eslint-disable */
import {
    BIT_STRING,
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

export const _decode_NRCellID: $.ASN1Decoder<NRCellID> = $._decodeBitString;

export const _encode_NRCellID: $.ASN1Encoder<NRCellID> = $._encodeBitString;

/* eslint-enable */
