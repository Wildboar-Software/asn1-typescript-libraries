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
 * @summary referenceClockOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * referenceClockOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) referenceClock(2)}
 * ```
 *
 * @constant
 */
export const referenceClockOID: OBJECT_IDENTIFIER = new _OID(
    [/* managedObjectClass */ 3, /* referenceClock */ 2],
    timeManagement
);

/* eslint-enable */
