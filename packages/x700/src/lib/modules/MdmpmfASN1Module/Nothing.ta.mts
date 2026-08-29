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
 * @summary Nothing
 * @description
 *
 * Syntax of the `timeoutError` parameter. Used only to register the
 * parameter; shall not be transmitted in `CommonError`. ITU-T Rec.
 * X.749 (08/97)
 * [A.9](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Nothing  ::=  NULL
 * ```
 */
export type Nothing = NULL; // NullType


export const _decode_Nothing = $._decodeNull;


export const _encode_Nothing = $._encodeNull;


/* eslint-enable */
