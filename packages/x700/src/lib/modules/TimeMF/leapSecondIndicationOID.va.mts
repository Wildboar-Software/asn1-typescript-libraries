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
/* START_OF_SYMBOL_DEFINITION leapSecondIndicationOID */
/**
 * @summary leapSecondIndicationOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * leapSecondIndicationOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) leapSecondIndication(15)}
 * ```
 *
 * @constant
 */
export const leapSecondIndicationOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* leapSecondIndication */ 15],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION leapSecondIndicationOID */

/* eslint-enable */
