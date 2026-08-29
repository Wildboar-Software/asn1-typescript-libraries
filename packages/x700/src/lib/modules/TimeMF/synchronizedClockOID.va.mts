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
 * @summary synchronizedClockOID
 * @description
 *
 * Registers attribute `synchronizedClock`: clock being
 * synchronized by this protocol instance. On
 * `synchronizationProtocol` (`GET`). ITU-T Rec. X.743 (06/98)
 * [§8.3.21](https://www.itu.int/rec/T-REC-X.743-199806-I), A.2.21.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizedClockOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) synchronizedClock(34)}
 * ```
 *
 * @constant
 */
export const synchronizedClockOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* attribute */ 7, /* synchronizedClock */ 34],
    timeManagement
);

/* eslint-enable */
