/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary GNbID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNbID  ::=  BIT STRING(SIZE(22..32))
 * ```
 */
export
type GNbID = BIT_STRING;

export const _decode_GNbID: $.ASN1Decoder<GNbID> = $._decodeBitString;

export const _encode_GNbID: $.ASN1Encoder<GNbID> = $._encodeBitString;

/* eslint-enable */
