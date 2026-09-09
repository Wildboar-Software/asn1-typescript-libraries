import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Carrier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Carrier {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minCarrierLength .. bound.&maxCarrierLength))
 * ```
 *
 */
export type Carrier = OCTET_STRING;
export const _decode_Carrier = $._decodeOctetString;
export const _encode_Carrier = $._encodeOctetString;
