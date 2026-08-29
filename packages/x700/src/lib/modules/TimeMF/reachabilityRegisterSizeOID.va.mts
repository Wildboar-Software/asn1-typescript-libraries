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
 * @summary reachabilityRegisterSizeOID
 * @description
 *
 * Registers NTP attribute `reachabilityRegisterSize`: size
 * of the reachability register. On `ntpProtocol` (`GET`;
 * equality and ordering). ITU-T Rec. X.743 (06/98)
 * [§B.3.13](https://www.itu.int/rec/T-REC-X.743-199806-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reachabilityRegisterSizeOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) reachabilityRegisterSize(28)}
 * ```
 *
 * @constant
 */
export const reachabilityRegisterSizeOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* reachabilityRegisterSize */ 28],
    timeManagement
);

/* eslint-enable */
