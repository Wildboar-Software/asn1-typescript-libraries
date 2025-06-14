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
/* START_OF_SYMBOL_DEFINITION nboi */
/**
 * @summary nboi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nboi OBJECT IDENTIFIER ::= {nloi nameBinding(6)}
 * ```
 *
 * @constant
 */
export const nboi: OBJECT_IDENTIFIER = new _OID([/* nameBinding */ 6], nloi);
/* END_OF_SYMBOL_DEFINITION nboi */

/* eslint-enable */
