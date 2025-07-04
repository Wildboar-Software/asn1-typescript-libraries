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
  CVRequest,
  _decode_CVRequest,
  _encode_CVRequest,
} from '../SCVP-2009/CVRequest.ta.mjs';
import { id_ct_scvp_certValRequest } from '../SCVP-2009/id-ct-scvp-certValRequest.va.mjs';
import type { CONTENT_TYPE } from '@wildboar/cms';

/**
 * @summary ct_scvp_certValRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-scvp-certValRequest CONTENT-TYPE ::= { CVRequest IDENTIFIED BY id-ct-scvp-certValRequest }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<CVRequest>}
 * @implements {CONTENT_TYPE<CVRequest>}
 */
export const ct_scvp_certValRequest: CONTENT_TYPE<CVRequest> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_CVRequest,
    },
    encoderFor: {
        '&Type': _encode_CVRequest,
    },
    '&id': id_ct_scvp_certValRequest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
