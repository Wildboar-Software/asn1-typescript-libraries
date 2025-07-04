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
import { envelopedData } from '../CmsTelebiometric/envelopedData.oa.mjs';

/**
 * @summary IncludedContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncludedContent CONTENT-TYPE ::= {envelopedData, ...}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const IncludedContent: CONTENT_TYPE[] = [envelopedData];

/* eslint-enable */
