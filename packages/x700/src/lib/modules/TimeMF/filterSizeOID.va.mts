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
 * @summary filterSizeOID
 * @description
 *
 * Registers NTP attribute `filterSize`: size of the clock
 * filter shift register. On `ntpProtocol` (`GET`; equality
 * and ordering). ITU-T Rec. X.743 (06/98)
 * [§B.3.1](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterSizeOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) filterSize(12)}
 * ```
 *
 * @constant
 */
export const filterSizeOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* filterSize */ 12],
    timeManagement
);

/* eslint-enable */
