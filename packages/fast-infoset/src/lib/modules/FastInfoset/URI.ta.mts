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
  type NonEmptyOctetString,
  _decode_NonEmptyOctetString,
  _encode_NonEmptyOctetString,
} from '../FastInfoset/NonEmptyOctetString.ta.mjs';
/**
 * @summary URI
 * @description
 *
 * URI as specified in IETF RFC 2396, stored as a non-empty
 * UTF-8 octet string. Used for additional-data ids, external
 * vocabularies, and encoding-algorithm identifiers. ITU-T Rec.
 * X.891 (05/2005)
 * [§7.2.3](https://www.itu.int/rec/T-REC-X.891-200505-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * URI  ::=  NonEmptyOctetString
 * ```
 */
export type URI = NonEmptyOctetString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {URI} The decoded data structure.
 */
export const _decode_URI: $.ASN1Decoder<URI> = _decode_NonEmptyOctetString;

/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export const _encode_URI: $.ASN1Encoder<URI> = _encode_NonEmptyOctetString;


/* eslint-enable */
