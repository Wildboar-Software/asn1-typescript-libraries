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
import { signedData } from '../CmsTelebiometric/signedData.oa.mjs';
import { envelopedData } from '../CmsTelebiometric/envelopedData.oa.mjs';
import { ct_authEnvelopedData } from '../CmsTelebiometric/ct-authEnvelopedData.oa.mjs';

/**
 * @summary TelebSupportedcontentTypes
 * @description
 *
 * Open set of CMS content types used by telebiometrics:
 * `signedData`, `envelopedData`, `ct-authEnvelopedData`, plus
 * types defined by a referencing specification (extensible `{...}`).
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.1.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TelebSupportedcontentTypes CONTENT-TYPE ::= { signedData | envelopedData | ct-authEnvelopedData, ...}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const TelebSupportedcontentTypes: CONTENT_TYPE[] = [
    signedData,
    envelopedData,
    ct_authEnvelopedData,
];

/* eslint-enable */
