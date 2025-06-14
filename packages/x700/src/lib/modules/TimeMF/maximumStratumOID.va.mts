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
/* START_OF_SYMBOL_DEFINITION maximumStratumOID */
/**
 * @summary maximumStratumOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * maximumStratumOID OBJECT IDENTIFIER ::= {timeManagement attribute(7) maximumStratum(23)}
 * ```
 *
 * @constant
 */
export const maximumStratumOID: OBJECT_IDENTIFIER = new _OID(
    [/* attribute */ 7, /* maximumStratum */ 23],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION maximumStratumOID */

/* eslint-enable */
