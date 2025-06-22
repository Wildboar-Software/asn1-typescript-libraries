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
} from 'asn1-ts';
import { timeManagement } from '../TimeMF/timeManagement.va.mjs';
/**
 * @summary ntpProtocolOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ntpProtocolOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) ntpProtocol(4)}
 * ```
 *
 * @constant
 */
export const ntpProtocolOID: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3, /* ntpProtocol */ 4],
    timeManagement
);

/* eslint-enable */
