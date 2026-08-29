/* eslint-disable */
import {
    joint_iso_itu_t,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    SynchronizationProtocolType,
    _decode_SynchronizationProtocolType,
    _encode_SynchronizationProtocolType,
} from '../TimeMF/SynchronizationProtocolType.ta.mjs';
/**
 * @summary ntp
 * @description
 *
 * Registered `SynchronizationProtocolType` value identifying
 * the Network Time Protocol (NTP, RFC 1305):
 * `{joint-iso-itu-t ms(9) function(2) part20(20)
 * synchProtocolType(20) ntp(1)}`. ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I), Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ntp SynchronizationProtocolType ::= {joint-iso-itu-t ms(9) function(2) part20(20) synchProtocolType(20) ntp(1)}
 * ```
 *
 * @constant
 */
export const ntp: SynchronizationProtocolType = _OID.fromParts(
    [
        /* ms */ 9,
        /* function */ 2,
        /* part20 */ 20,
        /* synchProtocolType */ 20,
        /* ntp */ 1,
    ],
    joint_iso_itu_t
);

/* eslint-enable */
