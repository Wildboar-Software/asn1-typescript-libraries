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
 * @summary Percent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Percent  ::=  INTEGER(0..100)
 * ```
 */
export type Percent = INTEGER;


export const _decode_Percent = $._decodeInteger;


export const _encode_Percent = $._encodeInteger;


/* eslint-enable */
