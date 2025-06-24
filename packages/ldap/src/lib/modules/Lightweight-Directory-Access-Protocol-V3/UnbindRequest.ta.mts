/* eslint-disable */
import {
  NULL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary UnbindRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnbindRequest  ::=  [APPLICATION 2]  NULL
 * ```
 */
export type UnbindRequest = NULL; // NullType

/**
 * @summary Decodes an ASN.1 element into a(n) UnbindRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnbindRequest} The decoded data structure.
 */
export const _decode_UnbindRequest: $.ASN1Decoder<UnbindRequest> = $._decode_implicit<UnbindRequest>(
  () => $._decodeNull
);

/**
 * @summary Encodes a(n) UnbindRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnbindRequest, encoded as an ASN.1 Element.
 */
export const _encode_UnbindRequest: $.ASN1Encoder<UnbindRequest> = $._encode_implicit(
  _TagClass.application,
  2,
  () => $._encodeNull,
  $.BER
);

/* eslint-enable */
