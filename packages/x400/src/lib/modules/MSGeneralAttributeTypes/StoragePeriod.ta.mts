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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary StoragePeriod
 * @description
 *
 * `StoragePeriod`. This general-attribute indicates the period, in seconds, for which
 * the MS-user anticipates that storage of the entry will be required, relative to its
 * creation-time. An entry becomes subject to deletion by the Auto-delete auto-action
 * when its storage-period expires (see 13.4). See ITU-T X.413 (1999), §11.2.78.
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
