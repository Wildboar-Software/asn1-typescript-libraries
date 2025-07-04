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
  AttributeCertificate,
  _decode_AttributeCertificate,
  _encode_AttributeCertificate,
} from '@wildboar/x500/AttributeCertificateDefinitions';
import { id_swb_ac_cert } from '../SCVP-2009/id-swb-ac-cert.va.mjs';
import { type WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
/**
 * @summary swb_ac_cert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * swb-ac-cert WANT-BACK ::= { AttributeCertificate IDENTIFIED BY id-swb-ac-cert }
 * ```
 *
 * @constant
 * @type {WANT_BACK<AttributeCertificate>}
 * @implements {WANT_BACK<AttributeCertificate>}
 */
export const swb_ac_cert: WANT_BACK<AttributeCertificate> = {
  class: 'TYPE-IDENTIFIER',
  decoderFor: {
    '&Type': _decode_AttributeCertificate,
  },
  encoderFor: {
    '&Type': _encode_AttributeCertificate,
  },
  '&id': id_swb_ac_cert /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
