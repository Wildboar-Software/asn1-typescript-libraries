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
 * @summary CalledPartyNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CalledPartyNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minCalledPartyNumberLength .. bound.&maxCalledPartyNumberLength))
 * ```
 *
 */
export type CalledPartyNumber = OCTET_STRING;
export const _decode_CalledPartyNumber = $._decodeOctetString;
export const _encode_CalledPartyNumber = $._encodeOctetString;
