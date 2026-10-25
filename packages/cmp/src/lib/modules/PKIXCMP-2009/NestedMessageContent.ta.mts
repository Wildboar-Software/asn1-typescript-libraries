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
  type PKIMessages,
  _decode_PKIMessages,
  _encode_PKIMessages,
} from '../PKIXCMP-2009/PKIMessages.ta.mjs';

/**
 * @summary NestedMessageContent
 * @description
 *
 * Nested (batched) PKI messages for multiple protection: an RA MAY
 * forward EE messages to a CA inside a new `PKIMessage`, attaching
 * its own MAC or signature ([RFC 4210 §5.1.3.4](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3.4)).
 *
 * `NestedMessageContent` ::= `PKIMessages`. All messages in the batch
 * MUST be of the same type (e.g., all `ir`). The original EE
 * `PKIMessage`(s) MAY also appear in `PKIHeader.generalInfo` as
 * `{id-it 15}`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NestedMessageContent  ::=  PKIMessages
 * ```
 */
export type NestedMessageContent = PKIMessages; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NestedMessageContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NestedMessageContent} The decoded data structure.
 */
export const _decode_NestedMessageContent: $.ASN1Decoder<NestedMessageContent> = _decode_PKIMessages;

/**
 * @summary Encodes a(n) NestedMessageContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NestedMessageContent, encoded as an ASN.1 Element.
 */
export const _encode_NestedMessageContent: $.ASN1Encoder<NestedMessageContent> = _encode_PKIMessages;


/* eslint-enable */
