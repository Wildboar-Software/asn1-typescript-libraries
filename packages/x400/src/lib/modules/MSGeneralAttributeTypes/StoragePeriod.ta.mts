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
 * @summary StoragePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StoragePeriod  ::=  INTEGER
 * ```
 */
export type StoragePeriod = INTEGER;


export const _decode_StoragePeriod = $._decodeInteger;


export const _encode_StoragePeriod = $._encodeInteger;


/* eslint-enable */
