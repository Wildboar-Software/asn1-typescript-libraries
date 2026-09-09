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
 * @summary IPSSPCapabilities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPSSPCapabilities {PARAMETERS-BOUND : bound} ::= OCTET STRING (SIZE(
 bound.&minIPSSPCapabilitiesLength .. bound.&maxIPSSPCapabilitiesLength))
 * ```
 *
 */
export type IPSSPCapabilities = OCTET_STRING;
export const _decode_IPSSPCapabilities = $._decodeOctetString;
export const _encode_IPSSPCapabilities = $._encodeOctetString;
