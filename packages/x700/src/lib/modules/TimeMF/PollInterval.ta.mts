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
 * @summary PollInterval
 * @description
 *
 * Polling interval in seconds; positive values only (A.5).
 * Syntax of NTP `minimumPollInterval` and
 * `maximumPollInterval`. ITU-T Rec. X.743 (06/98)
 * [§B.3.6](https://www.itu.int/rec/T-REC-X.743-199806-I), B.3.11, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollInterval  ::=  INTEGER(0..MAX)
 * ```
 */
export type PollInterval = INTEGER;


export const _decode_PollInterval = $._decodeInteger;


export const _encode_PollInterval = $._encodeInteger;


/* eslint-enable */
