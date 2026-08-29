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
 * @summary clockEventCounterOID
 * @description
 *
 * Registers attribute `clockEventCounter`: number of system
 * exception events since last checked and cleared.
 * Mandatory on `clockSource` (`GET`; equality and ordering).
 * ITU-T Rec. X.743 (06/98)
 * [§8.3.5](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockEventCounterOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockEventCounter(4)}
 * ```
 *
 * @constant
 */
export const clockEventCounterOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockEventCounter */ 4],
    timeManagement
);

/* eslint-enable */
