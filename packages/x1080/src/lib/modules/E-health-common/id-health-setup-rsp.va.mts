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
/* START_OF_SYMBOL_DEFINITION id_health_setup_rsp */
/**
 * @summary id_health_setup_rsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-health-setup-rsp OBJECT IDENTIFIER ::= { id-x1080-1-cms-content health-setup-rsp(2) }
 * ```
 *
 * @constant
 */
export const id_health_setup_rsp: OBJECT_IDENTIFIER = new _OID(
    [/* health-setup-rsp */ 2],
    id_x1080_1_cms_content
);
/* END_OF_SYMBOL_DEFINITION id_health_setup_rsp */

/* eslint-enable */
