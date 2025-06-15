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
  SubjectPublicKeyInfo,
  _decode_SubjectPublicKeyInfo,
  _encode_SubjectPublicKeyInfo,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs';
import { id_swb_pkc_public_key_info } from '../SCVP-2009/id-swb-pkc-public-key-info.va.mjs';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';

/**
 * @summary swb_pkc_public_key_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-pkc-public-key-info WANT-BACK ::= { SubjectPublicKeyInfo IDENTIFIED BY id-swb-pkc-public-key-info }
 * ```
 *
 * @constant
 * @type {WANT_BACK<SubjectPublicKeyInfo>}
 * @implements {WANT_BACK<SubjectPublicKeyInfo>}
 */
export const swb_pkc_public_key_info: WANT_BACK<SubjectPublicKeyInfo> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_SubjectPublicKeyInfo,
  },
  encoderFor: {
    '&Type': _encode_SubjectPublicKeyInfo,
  },
  '&id': id_swb_pkc_public_key_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
