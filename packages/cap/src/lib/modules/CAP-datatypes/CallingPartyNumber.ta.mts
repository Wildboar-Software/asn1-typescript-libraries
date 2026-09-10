import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary CallingPartyNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallingPartyNumber {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 *  bound.&minCallingPartyNumberLength .. bound.&maxCallingPartyNumberLength))
 * ```
 *
 */
export type CallingPartyNumber = OCTET_STRING;
export const _decode_CallingPartyNumber = $._decodeOctetString;
export const _encode_CallingPartyNumber = $._encodeOctetString;
