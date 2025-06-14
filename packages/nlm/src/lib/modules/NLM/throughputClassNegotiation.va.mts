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
import { aoi } from '../NLM/aoi.va.mjs';
/* START_OF_SYMBOL_DEFINITION throughputClassNegotiation */
/**
 * @summary throughputClassNegotiation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * throughputClassNegotiation OBJECT IDENTIFIER ::= {aoi 168}
 * ```
 *
 * @constant
 */
export const throughputClassNegotiation: OBJECT_IDENTIFIER = new _OID(
    [168],
    aoi
);
/* END_OF_SYMBOL_DEFINITION throughputClassNegotiation */

/* eslint-enable */
