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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary StorageTime
 * @description
 *
 * `StorageTime`. This general-attribute indicates the date and time at which the MS-user
 * estimates that storage for the entry will no longer be required. An entry becomes
 * subject to deletion by the Auto-delete auto-action when its storage-time is reached
 * (see 13.4). See ITU-T X.413 (1999), §11.2.79.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StorageTime  ::=  UTCTime
 * ```
 */
export type StorageTime = UTCTime; // UTCTime


export const _decode_StorageTime = $._decodeUTCTime;


export const _encode_StorageTime = $._encodeUTCTime;


/* eslint-enable */
