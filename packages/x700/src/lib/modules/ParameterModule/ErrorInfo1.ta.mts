/* eslint-disable */
import {
    INTEGER,
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
 * @summary ErrorInfo1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorInfo1  ::=  INTEGER
 * ```
 */
export type ErrorInfo1 = INTEGER;


export const _decode_ErrorInfo1 = $._decodeInteger;


export const _encode_ErrorInfo1 = $._encodeInteger;


/* eslint-enable */
