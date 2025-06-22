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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary QOSErrorCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSErrorCounter  ::=  INTEGER
 * ```
 */
export type QOSErrorCounter = INTEGER;


export const _decode_QOSErrorCounter = $._decodeInteger;


export const _encode_QOSErrorCounter = $._encodeInteger;


/* eslint-enable */
