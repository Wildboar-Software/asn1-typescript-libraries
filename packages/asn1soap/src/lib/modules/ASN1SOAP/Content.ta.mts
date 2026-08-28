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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  Content_encoded_value,
  _decode_Content_encoded_value,
  _encode_Content_encoded_value,
} from '../ASN1SOAP/Content-encoded-value.ta.mjs';
import {
  _decode_Document,
  _encode_Document,
} from '@wildboar/fast-infoset';


/**
 * @summary Content
 * @description
 *
 * Payload of a header block, Body, or Fault Detail. Either:
 *
 * - `encoded-value`: an ASN.1 value in Basic Aligned PER, identified
 *   by {@link Identifier}. Maps to XML with `encodingStyle`
 *   `urn:ohn:joint-iso-itu-t:asn1:generic-applications:fast-web-services:soap-envelope:encoding-style:aper`
 *   and Base64 character content. If `id` equals Annex A's
 *   `notUnderstoodIdentifier`, treat as {@link NotUnderstood}
 *   (X.892 §7.5.1.4, §7.5.4).
 * - `fast-infoset-document`: a Fast Infoset document (X.891
 *   `finf-doc-no-decl`) whose root element is the content EII.
 *   SOAP `role` / `mustUnderstand` / `relay` attributes on that
 *   root are stripped so only {@link HeaderBlock} components apply.
 *
 * ITU-T Rec. X.892 (05/2005)
 * [§7.5](https://www.itu.int/rec/T-REC-X.892-200505-I), §8.5, §9.
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
export function _decode_Content(el: _Element): Content {
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
): _Element {
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
