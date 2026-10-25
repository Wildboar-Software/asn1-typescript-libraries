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
  type XMLStringWithNoCRLFHT,
  _decode_XMLStringWithNoCRLFHT,
  _encode_XMLStringWithNoCRLFHT,
} from '../XSD/XMLStringWithNoCRLFHT.ta.mjs';

/**
 * @summary AnyURI
 * @description
 *
 * Mapping of XML Schema `xsd:anyURI`. A URI/IRI per IETF RFC 2396
 * (non-ASCII IRIs need not be escaped). In ASN.1 SOAP: header
 * `role`, Fault `node`/`role`, and {@link ultimateReceiver}.
 * ITU-T Rec. X.892 (05/2005) Annex A. ITU-T Rec. X.694.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AnyURI  ::=  XMLStringWithNoCRLFHT
 * (CONSTRAINED BY {
 *     / * The XMLStringWithNoCRLFHT shall be a valid URI as defined in IETF RFC
 *      2396.  Note that 2396 allows any valid IRI format without escaping
 *       non-ASCII characters.  Use of the IANA oid: URI/IRI scheme should be
 *       considered. * / } )
 * ```
 */
export type AnyURI = XMLStringWithNoCRLFHT; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AnyURI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AnyURI} The decoded data structure.
 */
export const _decode_AnyURI: $.ASN1Decoder<AnyURI> = _decode_XMLStringWithNoCRLFHT;

/**
 * @summary Encodes a(n) AnyURI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyURI, encoded as an ASN.1 Element.
 */
export const _encode_AnyURI: $.ASN1Encoder<AnyURI> = _encode_XMLStringWithNoCRLFHT;


/* eslint-enable */
