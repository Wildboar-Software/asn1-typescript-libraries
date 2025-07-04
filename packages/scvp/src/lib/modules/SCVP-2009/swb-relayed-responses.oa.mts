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
import {
  SCVPResponses,
  _decode_SCVPResponses,
  _encode_SCVPResponses,
} from '../SCVP-2009/SCVPResponses.ta.mjs';
import { id_swb_relayed_responses } from '../SCVP-2009/id-swb-relayed-responses.va.mjs';
import { type WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
/**
 * @summary swb_relayed_responses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-relayed-responses WANT-BACK ::= {SCVPResponses IDENTIFIED BY id-swb-relayed-responses }
 * ```
 *
 * @constant
 * @type {WANT_BACK<SCVPResponses>}
 * @implements {WANT_BACK<SCVPResponses>}
 */
export const swb_relayed_responses: WANT_BACK<SCVPResponses> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_SCVPResponses,
  },
  encoderFor: {
    '&Type': _encode_SCVPResponses,
  },
  '&id': id_swb_relayed_responses /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
