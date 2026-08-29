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
 * @summary clockStratumOID
 * @description
 *
 * Registers attribute `clockStratum`: current stratum of
 * this local clock. On `localClock` (`GET`; equality and
 * ordering). ITU-T Rec. X.743 (06/98)
 * [§8.3.11](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockStratumOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockStratum(10)}
 * ```
 *
 * @constant
 */
export const clockStratumOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockStratum */ 10],
    timeManagement
);

/* eslint-enable */
