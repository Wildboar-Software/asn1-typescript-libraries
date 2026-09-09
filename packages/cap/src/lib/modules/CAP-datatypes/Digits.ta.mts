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
 * @summary Digits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digits {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minDigitsLength .. bound.&maxDigitsLength))
 * ```
 *
 */
export type Digits = OCTET_STRING;
export const _decode_Digits = $._decodeOctetString;
export const _encode_Digits = $._encodeOctetString;
