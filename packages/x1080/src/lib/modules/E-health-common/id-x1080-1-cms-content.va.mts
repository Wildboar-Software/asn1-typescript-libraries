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
import { id_x1080_1 } from '../E-health-common/id-x1080-1.va.mjs';

/**
 * @summary id_x1080_1_cms_content
 * @description
 *
 * `{id-x1080-1 cms-content(1)}`. Arc for CMS content types
 * defined by this Rec. ITU-T Rec. X.1080.1 (05/2018)
 * [§7.2](https://www.itu.int/rec/T-REC-X.1080.1-201805-I), §7.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-1-cms-content OBJECT IDENTIFIER ::= { id-x1080-1 cms-content(1) }
 * ```
 *
 * @constant
 */
export const id_x1080_1_cms_content: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* cms-content */ 1],
    id_x1080_1
);

/* eslint-enable */
