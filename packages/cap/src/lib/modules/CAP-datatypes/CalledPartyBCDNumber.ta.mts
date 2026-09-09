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
 * @summary CalledPartyBCDNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledPartyBCDNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minCalledPartyBCDNumberLength .. bound.&maxCalledPartyBCDNumberLength))
 * ```
 *
 */
export type CalledPartyBCDNumber = OCTET_STRING;
export const _decode_CalledPartyBCDNumber = $._decodeOctetString;
export const _encode_CalledPartyBCDNumber = $._encodeOctetString;
