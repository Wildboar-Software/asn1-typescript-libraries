/* eslint-disable */
import {
    NULL,
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
 * @summary DeleteResult
 * @description
 *
 * NULL. Success has no parameters. ISO/IEC 10166-1:1991 §8.2.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteResult  ::=  NULL
 * ```
 */
export
type DeleteResult = NULL; // NullType
export const _decode_DeleteResult = $._decodeNull;
export const _encode_DeleteResult = $._encodeNull;


/* eslint-enable */
