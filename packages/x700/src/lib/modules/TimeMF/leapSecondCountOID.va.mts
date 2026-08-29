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
 * @summary leapSecondCountOID
 * @description
 *
 * Registers attribute `leapSecondCount`: cumulative leap
 * seconds since 1 January 1972. In `leapSecondPkg`
 * (`GET-REPLACE`, `SET-BY-CREATE`; equality and ordering).
 * ITU-T Rec. X.743 (06/98)
 * [§8.3.13](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondCountOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) leapSecondCount(14)}
 * ```
 *
 * @constant
 */
export const leapSecondCountOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* leapSecondCount */ 14],
    timeManagement
);

/* eslint-enable */
