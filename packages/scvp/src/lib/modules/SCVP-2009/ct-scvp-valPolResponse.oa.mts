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
import {
  ValPolResponse,
  _decode_ValPolResponse,
  _encode_ValPolResponse,
} from '../SCVP-2009/ValPolResponse.ta.mjs';
import { id_ct_scvp_valPolResponse } from '../SCVP-2009/id-ct-scvp-valPolResponse.va.mjs';
import { CONTENT_TYPE } from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs';


/* START_OF_SYMBOL_DEFINITION ct_scvp_valPolResponse */
/**
 * @summary ct_scvp_valPolResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-scvp-valPolResponse CONTENT-TYPE ::= { ValPolResponse IDENTIFIED BY id-ct-scvp-valPolResponse }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ValPolResponse>}
 * @implements {CONTENT_TYPE<ValPolResponse>}
 */
export const ct_scvp_valPolResponse: CONTENT_TYPE<ValPolResponse> = {
  class: 'CONTENT-TYPE',
  decoderFor: {
    '&Type': _decode_ValPolResponse,
  },
  encoderFor: {
    '&Type': _encode_ValPolResponse,
  },
  '&id': id_ct_scvp_valPolResponse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_scvp_valPolResponse */

/* eslint-enable */
