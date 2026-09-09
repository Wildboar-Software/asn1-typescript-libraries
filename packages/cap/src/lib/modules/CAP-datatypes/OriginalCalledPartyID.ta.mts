import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary OriginalCalledPartyID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalCalledPartyID {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minOriginalCalledPartyIDLength .. bound.&maxOriginalCalledPartyIDLength))
 * ```
 *
 */
export type OriginalCalledPartyID = OCTET_STRING;
export const _decode_OriginalCalledPartyID = $._decodeOctetString;
export const _encode_OriginalCalledPartyID = $._encodeOctetString;
