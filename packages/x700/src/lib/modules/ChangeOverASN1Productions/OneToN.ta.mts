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
 * @summary OneToN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneToN  ::=  INTEGER(1..MAX)
 * ```
 */
export type OneToN = INTEGER;


export const _decode_OneToN = $._decodeInteger;


export const _encode_OneToN = $._encodeInteger;


/* eslint-enable */
