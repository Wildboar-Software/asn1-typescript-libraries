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
 * @summary NullableBitString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NullableBitString  ::=  OCTET STRING (CONSTRAINED BY {
 *     -- Zero octets to represent the NULL value --
 *     -- Anything else MUST be a valid BIT STRING according to the encoding rules used --
 * })
 * ```
 */
export
type NullableBitString = OCTET_STRING; // OctetStringType
export const _decode_NullableBitString = $._decodeOctetString;
export const _encode_NullableBitString = $._encodeOctetString;


/* eslint-enable */
