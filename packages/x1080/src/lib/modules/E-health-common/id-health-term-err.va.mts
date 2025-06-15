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
import { id_x1080_1_cms_content } from '../E-health-common/id-x1080-1-cms-content.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_health_term_err */
/**
 * @summary id_health_term_err
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-health-term-err OBJECT IDENTIFIER ::= { id-x1080-1-cms-content health-term-err(6) }
 * ```
 *
 * @constant
 */
export const id_health_term_err: OBJECT_IDENTIFIER = new _OID(
    [/* health-term-err */ 6],
    id_x1080_1_cms_content
);
/* END_OF_SYMBOL_DEFINITION id_health_term_err */

/* eslint-enable */
