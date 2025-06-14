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
} from 'asn1-ts';
import { CONTENT_TYPE } from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs';
import { ct_scvp_certValRequest } from '../SCVP-2009/ct-scvp-certValRequest.oa.mjs';
import { ct_scvp_certValResponse } from '../SCVP-2009/ct-scvp-certValResponse.oa.mjs';
import { ct_scvp_valPolRequest } from '../SCVP-2009/ct-scvp-valPolRequest.oa.mjs';
import { ct_scvp_valPolResponse } from '../SCVP-2009/ct-scvp-valPolResponse.oa.mjs';
/* START_OF_SYMBOL_DEFINITION ContentTypes */
/**
 * @summary ContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypes CONTENT-TYPE ::= {ct-scvp-certValRequest |
 *     ct-scvp-certValResponse | ct-scvp-valPolRequest |
 *     ct-scvp-valPolResponse, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentTypes: CONTENT_TYPE[] = [
  ct_scvp_certValRequest,
  ct_scvp_certValResponse,
  ct_scvp_valPolRequest,
  ct_scvp_valPolResponse,
];
/* END_OF_SYMBOL_DEFINITION ContentTypes */

/* eslint-enable */
