/* eslint-disable */
import {
  OCTET_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Content_encoded_value,
  _decode_Content_encoded_value,
  _encode_Content_encoded_value,
} from '../ASN1SOAP/Content-encoded-value.ta.mjs';
import {
  _decode_Document,
  _encode_Document,
} from '@wildboar/fast-infoset/src/lib/modules/FastInfoset/Document.ta.mjs';


/**
 * @summary Content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=  CHOICE {
 *   encoded-value
 *     SEQUENCE {schema-identifier  OCTET STRING(SIZE (16)) OPTIONAL,
 *               id                 Identifier,
 *               encoding           OCTET STRING},
 *   fast-infoset-document
 *     OCTET STRING(CONTAINING Document ENCODED BY finf-doc-no-decl)
 * }
 * ```
 */
export type Content =
  | { encoded_value: Content_encoded_value } /* CHOICE_ALT_ROOT */
  | { fast_infoset_document: OCTET_STRING } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Content: $.ASN1Decoder<Content> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content} The decoded data structure.
 */
export function _decode_Content(el: _Element) {
  if (!_cached_decoder_for_Content) {
    _cached_decoder_for_Content = $._decode_inextensible_choice<Content>({
      'CONTEXT 0': ['encoded_value', _decode_Content_encoded_value],
      'CONTEXT 1': ['fast_infoset_document', $._decodeOctetString],
    });
  }
  return _cached_decoder_for_Content(el);
}


let _cached_encoder_for_Content: $.ASN1Encoder<Content> | null = null;


/**
 * @summary Encodes a(n) Content into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content, encoded as an ASN.1 Element.
 */
export function _encode_Content(
  value: Content,
  elGetter: $.ASN1Encoder<Content>
) {
  if (!_cached_encoder_for_Content) {
    _cached_encoder_for_Content = $._encode_choice<Content>(
      {
        encoded_value: _encode_Content_encoded_value,
        fast_infoset_document: $._encodeOctetString,
      },
      $.BER
    );
  }
  return _cached_encoder_for_Content(value, elGetter);
}


/* eslint-enable */
