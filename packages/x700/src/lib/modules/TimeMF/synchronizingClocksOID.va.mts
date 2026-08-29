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
 * @summary synchronizingClocksOID
 * @description
 *
 * Registers attribute `synchronizingClocks`: set of clocks
 * exchanging information with this clock for synchronization.
 * On `synchronizationProtocol` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.22](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.22.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizingClocksOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) synchronizingClocks(35)}
 * ```
 *
 * @constant
 */
export const synchronizingClocksOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* synchronizingClocks */ 35],
    timeManagement
);

/* eslint-enable */
