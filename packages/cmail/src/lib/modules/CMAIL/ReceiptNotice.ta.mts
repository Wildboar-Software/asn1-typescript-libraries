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
  ReceiptNoticeType,
  _decode_ReceiptNoticeType,
  _encode_ReceiptNoticeType,
} from '../CMAIL/ReceiptNoticeType.ta.mjs';

/**
 * @summary ReceiptNotice
 * @description
 *
 * Server-signed notice of reception: operator postmark only
 * (Annex B). On `RETR` of a `CertifiedMail` message the
 * server returns a notice of reception (with challenge)
 * instead of the ENVELOPE; the client checks the signature
 * and sender certificate. Annex A XSD also puts
 * `EnvelopeInformation` on `ReceiptNoticeType`; Annex B does
 * not. ITU-T Rec. X.1341 (09/2015)
 * [§9.2](https://www.itu.int/rec/T-REC-X.1341-201509-I),
 * 3.2.6, Annex B, Figure A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptNotice         ::=  ReceiptNoticeType
 * ```
 */
export type ReceiptNotice = ReceiptNoticeType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptNotice} The decoded data structure.
 */
export const _decode_ReceiptNotice: $.ASN1Decoder<ReceiptNotice> = _decode_ReceiptNoticeType;

/**
 * @summary Encodes a(n) ReceiptNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptNotice, encoded as an ASN.1 Element.
 */
export const _encode_ReceiptNotice: $.ASN1Encoder<ReceiptNotice> = _encode_ReceiptNoticeType;


/* eslint-enable */
