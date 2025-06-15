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
 * @summary synchronizingClocksOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizingClocksOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) synchronizingClocks(35)}
 * ```
 *
 * @constant
 */
export const synchronizingClocksOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* synchronizingClocks */ 35],
    timeManagement
);

/* eslint-enable */
