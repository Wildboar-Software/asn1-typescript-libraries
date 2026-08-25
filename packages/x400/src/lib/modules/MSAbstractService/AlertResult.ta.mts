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
 * @summary AlertResult
 * @description
 *
 * Should the request succeed, the alert-result will be returned. AlertResult ::= NULL
 * 8.2.6.3 Alert abstract-errors Should the request fail, the security-error will be
 * reported. See ITU-T X.413 (1999), §8.2.6.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertResult  ::=  NULL
 * ```
 */
export type AlertResult = NULL; // NullType


export const _decode_AlertResult = $._decodeNull;


export const _encode_AlertResult = $._encodeNull;


/* eslint-enable */
