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
 * @summary Time
 * @description
 *
 * `Time`. The Expiry Time heading field (O) identifies when the authorizing users
 * consider the IPM to lose its validity. It comprises a date and time. See ITU-T X.420
 * (1999), §7.2.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  UTCTime
 * ```
 */
export type Time = UTCTime; // UTCTime


export const _decode_Time = $._decodeUTCTime;


export const _encode_Time = $._encodeUTCTime;


/* eslint-enable */
