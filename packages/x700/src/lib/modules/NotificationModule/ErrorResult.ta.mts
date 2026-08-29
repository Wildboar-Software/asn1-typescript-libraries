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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ErrorResult
 * @description
 *
 * GDMO example (X.722 Annex A). Reply syntax of the example
 * `communicationError` notification. The annex does not
 * specify further event-reply content. ITU-T Rec. X.722
 * (01/92) [A.8](https://www.itu.int/rec/T-REC-X.722-199201-I),
 * A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorResult  ::=  NULL
 * ```
 */
export type ErrorResult = NULL; // NullType


export const _decode_ErrorResult = $._decodeNull;


export const _encode_ErrorResult = $._encodeNull;


/* eslint-enable */
