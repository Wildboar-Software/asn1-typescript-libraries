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
 * @summary synchronizationProtocolOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizationProtocolOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) synchronizationProtocol(3)}
 * ```
 *
 * @constant
 */
export const synchronizationProtocolOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* synchronizationProtocol */ 3],
    timeManagement
);

/* eslint-enable */
