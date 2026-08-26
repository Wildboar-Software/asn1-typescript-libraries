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
  RevInfoWantBack,
  _decode_RevInfoWantBack,
  _encode_RevInfoWantBack,
} from '../SCVP-2009/RevInfoWantBack.ta.mjs';
import { id_swb_pkc_revocation_info } from '../SCVP-2009/id-swb-pkc-revocation-info.va.mjs';
import { type WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
/**
 * @summary swb_pkc_revocation_info
 * @description
 *
 * WantBack information object for `id-swb-pkc-revocation-info`: Proof of revocation status for each certificate in the certification path.
 * Conformance: DPD MUST for conforming servers as specified in
 * ([RFC 5055 §3.2.3](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-pkc-revocation-info WANT-BACK ::= { RevInfoWantBack IDENTIFIED BY id-swb-pkc-revocation-info }
 * ```
 *
 * @constant
 * @type {WANT_BACK<RevInfoWantBack>}
 * @implements {WANT_BACK<RevInfoWantBack>}
 */
export const swb_pkc_revocation_info: WANT_BACK<RevInfoWantBack> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_RevInfoWantBack,
  },
  encoderFor: {
    '&Type': _encode_RevInfoWantBack,
  },
  '&id': id_swb_pkc_revocation_info /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
