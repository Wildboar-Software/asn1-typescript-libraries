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
/* START_OF_SYMBOL_DEFINITION clockStatusOID */
/**
 * @summary clockStatusOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockStatusOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockStatus(9)}
 * ```
 *
 * @constant
 */
export const clockStatusOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* clockStatus */ 9],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION clockStatusOID */

/* eslint-enable */
