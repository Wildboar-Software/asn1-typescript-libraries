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
 * @summary selectWeightOID
 * @description
 *
 * Registers NTP attribute `selectWeight`: weight used to
 * compute the selection dispersion. On `ntpProtocol`
 * (`GET`). ITU-T Rec. X.743 (06/98)
 * [§B.3.14](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * selectWeightOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) selectWeight(30)}
 * ```
 *
 * @constant
 */
export const selectWeightOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* selectWeight */ 30],
    timeManagement
);

/* eslint-enable */
