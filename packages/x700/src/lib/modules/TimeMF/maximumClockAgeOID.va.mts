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
 * @summary maximumClockAgeOID
 * @description
 *
 * Registers NTP attribute `maximumClockAge`: maximum
 * interval without an update that a reference clock remains
 * valid. On `ntpProtocol` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§B.3.3](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumClockAgeOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumClockAge(17)}
 * ```
 *
 * @constant
 */
export const maximumClockAgeOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* maximumClockAge */ 17],
    timeManagement
);

/* eslint-enable */
