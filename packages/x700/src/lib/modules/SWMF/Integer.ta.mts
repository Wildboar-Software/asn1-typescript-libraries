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
 * @summary Integer
 * @description
 *
 * Supporting INTEGER used by
 * `futureAutoBackupTriggerThreshold`: number of modifications
 * after which an automatic backup is performed (in addition to any
 * scheduled periodic backup). Destination is
 * `futureAutoBackupDestination`. Completing the backup emits
 * `autoBackupReport`. ITU-T Rec. X.744 (10/96)
 * [§8.2.11](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * A.3.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integer  ::=  INTEGER
 * ```
 */
export type Integer = INTEGER;


export const _decode_Integer = $._decodeInteger;


export const _encode_Integer = $._encodeInteger;


/* eslint-enable */
