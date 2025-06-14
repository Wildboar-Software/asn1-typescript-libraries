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
/* START_OF_SYMBOL_DEFINITION clockEventTimeOID */
/**
 * @summary clockEventTimeOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clockEventTimeOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) clockEventTime(5)}
 * ```
 *
 * @constant
 */
export const clockEventTimeOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* clockEventTime */ 5],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION clockEventTimeOID */

/* eslint-enable */
