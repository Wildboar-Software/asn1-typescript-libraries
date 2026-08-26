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
  CVResponse,
  _decode_CVResponse,
  _encode_CVResponse,
} from '../SCVP-2009/CVResponse.ta.mjs';
import { id_ct_scvp_certValResponse } from '../SCVP-2009/id-ct-scvp-certValResponse.va.mjs';
import type { CONTENT_TYPE } from '@wildboar/cms';

/**
 * @summary ct_scvp_certValResponse
 * @description
 *
 * CMS `CONTENT-TYPE` for an SCVP certificate validation response:
 * `CVResponse` identified by `id-ct-scvp-certValResponse`
 * ([RFC 5055 §4](https://datatracker.ietf.org/doc/html/rfc5055#section-4)) / ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-scvp-certValResponse CONTENT-TYPE ::= { CVResponse IDENTIFIED BY id-ct-scvp-certValResponse }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<CVResponse>}
 * @implements {CONTENT_TYPE<CVResponse>}
 */
export const ct_scvp_certValResponse: CONTENT_TYPE<CVResponse> = {
  class: 'CONTENT-TYPE',
  decoderFor: {
    '&Type': _decode_CVResponse,
  },
  encoderFor: {
    '&Type': _encode_CVResponse,
  },
  '&id': id_ct_scvp_certValResponse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
  '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
