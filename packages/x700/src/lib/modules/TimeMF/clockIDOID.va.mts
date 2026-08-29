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
 * @summary clockIDOID
 * @description
 *
 * Registers attribute `clockID`: identity of the clock.
 * Naming attribute of `clockSource` (`GET`,
 * `SET-BY-CREATE`, `NO-MODIFY`). ITU-T Rec. X.743 (06/98)
 * [§8.3.7](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockIDOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockID(6)}
 * ```
 *
 * @constant
 */
export const clockIDOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockID */ 6],
    timeManagement
);

/* eslint-enable */
