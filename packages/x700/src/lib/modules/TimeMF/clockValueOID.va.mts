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
 * @summary clockValueOID
 * @description
 *
 * Registers attribute `clockValue`: current time of the
 * clock. Mandatory on `clockSource` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.12](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.12.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockValueOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockValue(11)}
 * ```
 *
 * @constant
 */
export const clockValueOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* clockValue */ 11],
    timeManagement
);

/* eslint-enable */
