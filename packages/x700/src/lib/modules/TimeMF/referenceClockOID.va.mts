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
 * @summary referenceClockOID
 * @description
 *
 * Registers the `referenceClock` managed object class:
 * interface in a system to an external time reference (GPS,
 * radio such as WWV, atomic oscillators). Subclass of
 * `clockSource`; adds `referenceClockType`. ITU-T Rec. X.743 (06/98)
 * [§8.2.3](https://www.itu.int/rec/T-REC-X.743-199806-I), A.1.3, §7.2.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * referenceClockOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) referenceClock(2)}
 * ```
 *
 * @constant
 */
export const referenceClockOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* referenceClock */ 2],
    timeManagement
);

/* eslint-enable */
