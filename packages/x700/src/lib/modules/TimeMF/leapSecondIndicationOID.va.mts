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
 * @summary leapSecondIndicationOID
 * @description
 *
 * Registers attribute `leapSecondIndication`: a leap second
 * will occur at the end of the current day. In
 * `leapSecondPkg` (`GET-REPLACE`, `SET-BY-CREATE`). ITU-T Rec. X.743 (06/98)
 * [§8.3.14](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.14.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondIndicationOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) leapSecondIndication(15)}
 * ```
 *
 * @constant
 */
export const leapSecondIndicationOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* leapSecondIndication */ 15],
    timeManagement
);

/* eslint-enable */
