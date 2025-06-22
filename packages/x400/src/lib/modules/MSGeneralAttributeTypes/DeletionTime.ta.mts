/* eslint-disable */
import {
    UTCTime,
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
 * @summary DeletionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeletionTime  ::=  UTCTime
 * ```
 */
export type DeletionTime = UTCTime; // UTCTime


export const _decode_DeletionTime = $._decodeUTCTime;


export const _encode_DeletionTime = $._encodeUTCTime;


/* eslint-enable */
