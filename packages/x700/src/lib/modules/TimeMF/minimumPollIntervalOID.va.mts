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
 * @summary minimumPollIntervalOID
 * @description
 *
 * Registers NTP attribute `minimumPollInterval`: minimum
 * polling interval allowable in the system. On `ntpProtocol`
 * (`GET`; equality and ordering). ITU-T Rec. X.743 (06/98)
 * [§B.3.11](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * minimumPollIntervalOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) minimumPollInterval(25)}
 * ```
 *
 * @constant
 */
export const minimumPollIntervalOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* minimumPollInterval */ 25],
    timeManagement
);

/* eslint-enable */
