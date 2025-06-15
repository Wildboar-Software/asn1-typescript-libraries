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
 * @summary PerMessageComponentRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerMessageComponentRate  ::=  INTEGER
 * ```
 */
export type PerMessageComponentRate = INTEGER;


export const _decode_PerMessageComponentRate = $._decodeInteger;


export const _encode_PerMessageComponentRate = $._encodeInteger;


/* eslint-enable */
