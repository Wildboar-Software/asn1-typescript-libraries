/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FloatingPoint
 * @description
 *
 * Binary floating-point as OCTET STRING of two or more octets. First octet is
 * exponent width N (bits). Remaining octets: sign (MSB), then N exponent bits,
 * then fraction. Values include ±infinity (exponent all ones, fraction zero),
 * NaN (exponent all ones, fraction nonzero), and zero (exponent and fraction
 * zero). Differing N must not be given semantic difference (ISO 9506-2:2003
 * §14.4.2.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FloatingPoint  ::=  OCTET STRING
 * ```
 */
export
type FloatingPoint = OCTET_STRING; // OctetStringType
export const _decode_FloatingPoint = $._decodeOctetString;
export const _encode_FloatingPoint = $._encodeOctetString;


/* eslint-enable */
