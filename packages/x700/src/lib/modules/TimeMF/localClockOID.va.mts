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
 * @summary localClockOID
 * @description
 *
 * Registers the `localClock` managed object class: an
 * internal system clock (subclass of `clockSource`). Adds
 * `localClockAddress`, `peerClockAddresses`,
 * `synchronizationSourceAddress`, `clockStratum`, and
 * `clockAdjustmentInterval`. ITU-T Rec. X.743 (06/98)
 * [§8.2.2](https://www.itu.int/rec/T-REC-X.743-199806-I), A.1.2, §7.2.4.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localClockOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) localClock(1)}
 * ```
 *
 * @constant
 */
export const localClockOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* localClock */ 1],
    timeManagement
);

/* eslint-enable */
