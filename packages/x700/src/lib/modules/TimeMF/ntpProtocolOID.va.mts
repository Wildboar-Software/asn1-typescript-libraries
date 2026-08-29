/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
/**
 * @summary ntpProtocolOID
 * @description
 *
 * Registers the `ntpProtocol` managed object class: NTP
 * (RFC 1305) as a subclass of `synchronizationProtocol`.
 * Adds the NTP filter, poll, stratum, dispersion, distance,
 * skew, and selection attributes of Annex B. ITU-T Rec. X.743 (06/98)
 * [§B.2](https://www.itu.int/rec/T-REC-X.743-199806-I), B.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ntpProtocolOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) ntpProtocol(4)}
 * ```
 *
 * @constant
 */
export const ntpProtocolOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* ntpProtocol */ 4],
    timeManagement
);

/* eslint-enable */
