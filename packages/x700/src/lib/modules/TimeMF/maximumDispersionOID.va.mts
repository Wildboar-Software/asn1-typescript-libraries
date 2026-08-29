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
 * @summary maximumDispersionOID
 * @description
 *
 * Registers NTP attribute `maximumDispersion`: maximum
 * dispersion increment allowable, and the dispersion assumed
 * for missing data. On `ntpProtocol` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§B.3.4](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumDispersionOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumDispersion(18)}
 * ```
 *
 * @constant
 */
export const maximumDispersionOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* maximumDispersion */ 18],
    timeManagement
);

/* eslint-enable */
