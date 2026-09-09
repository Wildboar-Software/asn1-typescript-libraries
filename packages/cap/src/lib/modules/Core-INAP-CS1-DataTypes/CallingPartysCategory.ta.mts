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
 * @summary CallingPartysCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartysCategory      ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type CallingPartysCategory = OCTET_STRING; // OctetStringType
export const _decode_CallingPartysCategory = $._decodeOctetString;
export const _encode_CallingPartysCategory = $._encodeOctetString;


/* eslint-enable */
