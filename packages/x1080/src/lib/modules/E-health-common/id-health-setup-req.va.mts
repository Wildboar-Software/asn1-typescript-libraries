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

/**
 * @summary id_health_setup_req
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-health-setup-req OBJECT IDENTIFIER ::= { id-x1080-1-cms-content health-setup-req(1) }
 * ```
 *
 * @constant
 */
export const id_health_setup_req: OBJECT_IDENTIFIER = new _OID(
    [/* health-setup-req */ 1],
    id_x1080_1_cms_content
);

/* eslint-enable */
