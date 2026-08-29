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
 * @summary maximumStratumOID
 * @description
 *
 * Registers NTP attribute `maximumStratum`: maximum stratum
 * encodable as a packet variable; also interpreted as
 * network unreachable. On `ntpProtocol` (`GET`; equality and
 * ordering). ITU-T Rec. X.743 (06/98)
 * [§B.3.9](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumStratumOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumStratum(23)}
 * ```
 *
 * @constant
 */
export const maximumStratumOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* maximumStratum */ 23],
    timeManagement
);

/* eslint-enable */
