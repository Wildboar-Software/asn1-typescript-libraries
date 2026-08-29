/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';

/**
 * @summary SupportedContentTypes
 * @description
 *
 * Extensible set of CMS `CONTENT-TYPE` objects. Empty in this
 * module (`{...}`). ITU-T Rec. X.1080.1 (05/2018) Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedContentTypes CONTENT-TYPE ::= { ... }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const SupportedContentTypes: CONTENT_TYPE[] = [];

/* eslint-enable */
