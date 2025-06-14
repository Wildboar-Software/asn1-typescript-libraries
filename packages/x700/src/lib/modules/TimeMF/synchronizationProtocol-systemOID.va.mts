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
/* START_OF_SYMBOL_DEFINITION synchronizationProtocol_systemOID */
/**
 * @summary synchronizationProtocol_systemOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * synchronizationProtocol-systemOID OBJECT IDENTIFIER ::= {timeManagement nameBinding(6) synchronizationProtocol-system(1)}
 * ```
 *
 * @constant
 */
export const synchronizationProtocol_systemOID: OBJECT_IDENTIFIER = new _OID(
    [/* nameBinding */ 6, /* synchronizationProtocol-system */ 1],
    timeManagement
);
/* END_OF_SYMBOL_DEFINITION synchronizationProtocol_systemOID */

/* eslint-enable */
