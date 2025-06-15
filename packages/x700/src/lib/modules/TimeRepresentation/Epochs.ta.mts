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
 * @summary Epochs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Epochs  ::=  INTEGER(-128..127)
 * ```
 */
export type Epochs = INTEGER;


export const _decode_Epochs = $._decodeInteger;


export const _encode_Epochs = $._encodeInteger;


/* eslint-enable */
