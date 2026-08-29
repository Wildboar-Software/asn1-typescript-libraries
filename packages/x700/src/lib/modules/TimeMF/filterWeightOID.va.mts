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
 * @summary filterWeightOID
 * @description
 *
 * Registers NTP attribute `filterWeight`: weight used to
 * compute the filter dispersion. On `ntpProtocol` (`GET`).
 * ITU-T Rec. X.743 (06/98)
 * [§B.3.2](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterWeightOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) filterWeight(13)}
 * ```
 *
 * @constant
 */
export const filterWeightOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* filterWeight */ 13],
    timeManagement
);

/* eslint-enable */
