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
 * @summary DeletionTime
 * @description
 *
 * This general-attribute may be present in entries of the Message-log entry-class, and
 * indicates the time at which the corresponding entry in the Stored-message entry-class
 * was deleted. In the case of a Submission-log entry for which no Submission entry is
 * created, the deletion-time attribute is generated when the Submission-log entry is
 * created and is assigned the same value as the entry's creation-time. See ITU-T X.413
 * (1999), §11.2.24.
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
