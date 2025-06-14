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
import { nloi } from '../NLM/nloi.va.mjs';
/* START_OF_SYMBOL_DEFINITION aoi */
/**
 * @summary aoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aoi OBJECT IDENTIFIER ::= {nloi attribute(7)}
 * ```
 *
 * @constant
 */
export const aoi: OBJECT_IDENTIFIER = new _OID([/* attribute */ 7], nloi);
/* END_OF_SYMBOL_DEFINITION aoi */

/* eslint-enable */
