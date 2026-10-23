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
  SignedTransitNoticeType,
  _decode_SignedTransitNoticeType,
  _encode_SignedTransitNoticeType,
} from '../CMAIL/SignedTransitNoticeType.ta.mjs';

/**
 * @summary SignedTransitNotice
 * @description
 *
 * Notice of transit countersigned by the sending Cmail
 * server (`250 Signed-notice-of-transit`). Co-signed by both
 * Cmail servers; evidence of transit (Appendix I.3). ITU-T
 * Rec. X.1341 (09/2015)
 * [§8.18](https://www.itu.int/rec/T-REC-X.1341-201509-I),
 * 3.2.7, Annex B, Figure A.10.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedTransitNotice     ::=  SignedTransitNoticeType
 * ```
 */
export type SignedTransitNotice = SignedTransitNoticeType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SignedTransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedTransitNotice} The decoded data structure.
 */
export const _decode_SignedTransitNotice: $.ASN1Decoder<SignedTransitNotice> = _decode_SignedTransitNoticeType;

/**
 * @summary Encodes a(n) SignedTransitNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedTransitNotice, encoded as an ASN.1 Element.
 */
export const _encode_SignedTransitNotice: $.ASN1Encoder<SignedTransitNotice> = _encode_SignedTransitNoticeType;


/* eslint-enable */
