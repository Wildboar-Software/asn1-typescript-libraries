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
 * @summary clockSourceOID
 * @description
 *
 * Registers the `clockSource` managed object class: dynamic
 * state of a clock. Required for each manageable clock.
 * Superclass of `localClock` and `referenceClock`. Mandatory
 * attributes include `clockID`, `operationalState`,
 * `clockStatus`, `clockValue`, and the event triple; action
 * `clockReset`; notification `stateChange`. ITU-T Rec. X.743 (06/98)
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockSourceOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) clockSource(0)}
 * ```
 *
 * @constant
 */
export const clockSourceOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* clockSource */ 0],
    timeManagement
);

/* eslint-enable */
