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
 * @summary synchronizationSourceAddressOID
 * @description
 *
 * Registers attribute `synchronizationSourceAddress`:
 * network address or reference-clock type of the current
 * synchronization source for this node. On `localClock`
 * (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.20](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.20.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizationSourceAddressOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) synchronizationSourceAddress(33)}
 * ```
 *
 * @constant
 */
export const synchronizationSourceAddressOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* synchronizationSourceAddress */ 33],
    timeManagement
);

/* eslint-enable */
