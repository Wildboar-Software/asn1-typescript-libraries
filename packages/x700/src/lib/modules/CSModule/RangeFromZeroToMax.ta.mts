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
 * @summary RangeFromZeroToMax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeFromZeroToMax = INTEGER;


export const _decode_RangeFromZeroToMax = $._decodeInteger;


export const _encode_RangeFromZeroToMax = $._encodeInteger;


/* eslint-enable */
