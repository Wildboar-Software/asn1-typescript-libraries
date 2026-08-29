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
 * @summary localClockAddressOID
 * @description
 *
 * Registers attribute `localClockAddress`: network address
 * of this node. On `localClock` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.15](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.15.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localClockAddressOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) localClockAddress(16)}
 * ```
 *
 * @constant
 */
export const localClockAddressOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* localClockAddress */ 16],
    timeManagement
);

/* eslint-enable */
