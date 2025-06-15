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
  ValPolRequest,
  _decode_ValPolRequest,
  _encode_ValPolRequest,
} from '../SCVP-2009/ValPolRequest.ta.mjs';
import { id_ct_scvp_valPolRequest } from '../SCVP-2009/id-ct-scvp-valPolRequest.va.mjs';
import { CONTENT_TYPE } from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs';


/**
 * @summary ct_scvp_valPolRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-scvp-valPolRequest CONTENT-TYPE ::= { ValPolRequest IDENTIFIED BY id-ct-scvp-valPolRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<ValPolRequest>}
 * @implements {CONTENT_TYPE<ValPolRequest>}
 */
export const ct_scvp_valPolRequest: CONTENT_TYPE<ValPolRequest> = {
  class: 'CONTENT-TYPE',
  decoderFor: {
    '&Type': _decode_ValPolRequest,
  },
  encoderFor: {
    '&Type': _encode_ValPolRequest,
  },
  '&id': id_ct_scvp_valPolRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
