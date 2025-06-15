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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary FieldElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldElement  ::=  OCTET STRING
 * ```
 */
export
type FieldElement = OCTET_STRING; // OctetStringType


export const _decode_FieldElement = $._decodeOctetString;


export const _encode_FieldElement = $._encodeOctetString;


/* eslint-enable */
