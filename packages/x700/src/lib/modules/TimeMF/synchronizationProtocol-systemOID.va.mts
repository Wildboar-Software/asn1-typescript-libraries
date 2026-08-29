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
 * @summary synchronizationProtocol_systemOID
 * @description
 *
 * Registers name binding `synchronizationProtocol-system`: a
 * `synchronizationProtocol` (and subclasses) is named by a
 * `system` object with `synchronizationProtocolID`. Create
 * with automatic instance naming; delete deletes contained
 * objects. ITU-T Rec. X.743 (06/98)
 * [§8.5.2](https://www.itu.int/rec/T-REC-X.743-199806-I), A.4.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizationProtocol-systemOID OBJECT IDENTIFIER ::= {timeManagement nameBinding(6) synchronizationProtocol-system(1)}
 * ```
 *
 * @constant
 */
export const synchronizationProtocol_systemOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* nameBinding */ 6, /* synchronizationProtocol-system */ 1],
    timeManagement
);

/* eslint-enable */
