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
 * @summary maximumSkewOID
 * @description
 *
 * Registers NTP attribute `maximumSkew`: maximum offset
 * error caused by local-clock skew over `maximumClockAge`.
 * On `ntpProtocol` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§B.3.8](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumSkewOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumSkew(22)}
 * ```
 *
 * @constant
 */
export const maximumSkewOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* maximumSkew */ 22],
    timeManagement
);

/* eslint-enable */
