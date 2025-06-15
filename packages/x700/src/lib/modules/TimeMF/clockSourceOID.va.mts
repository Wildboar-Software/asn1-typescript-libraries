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
 * @summary clockSourceOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockSourceOID OBJECT IDENTIFIER ::= {timeManagement managedObjectClass(3) clockSource(0)}
 * ```
 *
 * @constant
 */
export const clockSourceOID: OBJECT_IDENTIFIER = new _OID(
    [/* managedObjectClass */ 3, /* clockSource */ 0],
    timeManagement
);

/* eslint-enable */
