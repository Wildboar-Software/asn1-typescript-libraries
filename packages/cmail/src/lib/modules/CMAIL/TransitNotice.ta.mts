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
  TransitNoticeType,
  _decode_TransitNoticeType,
  _encode_TransitNoticeType,
} from '../CMAIL/TransitNoticeType.ta.mjs';

/**
 * @summary TransitNotice
 * @description
 *
 * Notice of transit built by the Cmail server that received
 * the ENVELOPE from another Cmail server (`SEND EVLP`). Same
 * postmark content as a notice of deposit; signed with that
 * server's private key. Returned as `250 Notice-of-transit`
 * (base64). ITU-T Rec. X.1341 (09/2015)
 * [§8.17](https://www.itu.int/rec/T-REC-X.1341-201509-I),
 * 3.2.7, Annex B, Figure A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitNotice         ::=  TransitNoticeType
 * ```
 */
export type TransitNotice = TransitNoticeType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitNotice} The decoded data structure.
 */
export const _decode_TransitNotice: $.ASN1Decoder<TransitNotice> = _decode_TransitNoticeType;

/**
 * @summary Encodes a(n) TransitNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitNotice, encoded as an ASN.1 Element.
 */
export const _encode_TransitNotice: $.ASN1Encoder<TransitNotice> = _encode_TransitNoticeType;


/* eslint-enable */
