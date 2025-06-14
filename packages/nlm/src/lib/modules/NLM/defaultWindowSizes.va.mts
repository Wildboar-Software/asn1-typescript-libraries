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
/* START_OF_SYMBOL_DEFINITION defaultWindowSizes */
/**
 * @summary defaultWindowSizes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultWindowSizes OBJECT IDENTIFIER ::= {aoi 104}
 * ```
 *
 * @constant
 */
export const defaultWindowSizes: OBJECT_IDENTIFIER = new _OID([104], aoi);
/* END_OF_SYMBOL_DEFINITION defaultWindowSizes */

/* eslint-enable */
