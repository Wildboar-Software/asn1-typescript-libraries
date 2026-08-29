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
 * @summary clockSourceDetailPkgOID
 * @description
 *
 * Registers conditional package `clockSourceDetailPkg` on
 * `clockSource`: `clockPrecision`, `clockDrift`,
 * `clockMaximumError`, `clockEstimatedError`. Present if the
 * instance supports detailed clock-source information.
 * ITU-T Rec. X.743 (06/98)
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.743-199806-I), A.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockSourceDetailPkgOID OBJECT IDENTIFIER ::= {timeManagement package(4) clockSourceDetailPkg(0)}
 * ```
 *
 * @constant
 */
export const clockSourceDetailPkgOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* package */ 4, /* clockSourceDetailPkg */ 0],
    timeManagement
);

/* eslint-enable */
