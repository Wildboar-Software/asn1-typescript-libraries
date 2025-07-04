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
  type Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/AuthenticationFramework';
import { id_swb_pkc_cert } from '../SCVP-2009/id-swb-pkc-cert.va.mjs';
import type { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';

/**
 * @summary swb_pkc_cert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-pkc-cert WANT-BACK ::= { Certificate IDENTIFIED BY id-swb-pkc-cert }
 * ```
 *
 * @constant
 * @type {WANT_BACK<Certificate>}
 * @implements {WANT_BACK<Certificate>}
 */
export const swb_pkc_cert: WANT_BACK<Certificate> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_Certificate,
  },
  encoderFor: {
    '&Type': _encode_Certificate,
  },
  '&id': id_swb_pkc_cert /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
