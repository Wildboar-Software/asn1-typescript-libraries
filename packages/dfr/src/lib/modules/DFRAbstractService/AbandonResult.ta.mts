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
 * @summary AbandonResult
 * @description
 *
 * NULL. Success is reported as `abandoned` on the target operation, not as
 * this result. ISO/IEC 10166-1:1991 §8.2.10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonResult  ::=  NULL
 * ```
 */
export
type AbandonResult = NULL; // NullType
export const _decode_AbandonResult = $._decodeNull;
export const _encode_AbandonResult = $._encodeNull;


/* eslint-enable */
