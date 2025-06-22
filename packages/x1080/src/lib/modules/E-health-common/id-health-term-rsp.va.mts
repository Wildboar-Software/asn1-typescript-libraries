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
} from '@wildboar/asn1';
import { id_x1080_1_cms_content } from '../E-health-common/id-x1080-1-cms-content.va.mjs';

/**
 * @summary id_health_term_rsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-health-term-rsp OBJECT IDENTIFIER ::= { id-x1080-1-cms-content health-term-rsp(5) }
 * ```
 *
 * @constant
 */
export const id_health_term_rsp: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* health-term-rsp */ 5],
    id_x1080_1_cms_content
);

/* eslint-enable */
