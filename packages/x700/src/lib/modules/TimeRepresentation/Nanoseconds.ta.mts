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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Nanoseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Nanoseconds  ::=  INTEGER(0..999999999)
 * ```
 */
export type Nanoseconds = INTEGER;


export const _decode_Nanoseconds = $._decodeInteger;


export const _encode_Nanoseconds = $._encodeInteger;


/* eslint-enable */
