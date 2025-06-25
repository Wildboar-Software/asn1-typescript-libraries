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
import * as $ from '@wildboar/asn1/functional';
import {
  CertificateList,
  _decode_CertificateList,
  _encode_CertificateList,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateList.ta.mjs';


/**
 * @summary CRLAnnContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLAnnContent  ::=  SEQUENCE OF CertificateList
 * ```
 */
export type CRLAnnContent = CertificateList[]; // SequenceOfType


let _cached_decoder_for_CRLAnnContent: $.ASN1Decoder<CRLAnnContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CRLAnnContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLAnnContent} The decoded data structure.
 */
export function _decode_CRLAnnContent(el: _Element): CRLAnnContent {
  if (!_cached_decoder_for_CRLAnnContent) {
    _cached_decoder_for_CRLAnnContent = $._decodeSequenceOf<CertificateList>(
      () => _decode_CertificateList
    );
  }
  return _cached_decoder_for_CRLAnnContent(el);
}


let _cached_encoder_for_CRLAnnContent: $.ASN1Encoder<CRLAnnContent> | null = null;


/**
 * @summary Encodes a(n) CRLAnnContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLAnnContent, encoded as an ASN.1 Element.
 */
export function _encode_CRLAnnContent(
  value: CRLAnnContent,
  elGetter: $.ASN1Encoder<CRLAnnContent>
): _Element {
  if (!_cached_encoder_for_CRLAnnContent) {
    _cached_encoder_for_CRLAnnContent = $._encodeSequenceOf<CertificateList>(
      () => _encode_CertificateList,
      $.BER
    );
  }
  return _cached_encoder_for_CRLAnnContent(value, elGetter);
}


/* eslint-enable */
