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
import { Name, _decode_Name, _encode_Name } from '../XSD/Name.ta.mjs';

/**
 * @summary NCName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NCName  ::=  Name
 *     (CONSTRAINED BY {
 *                  / * The Name shall be an NCName as defined in W3C XML Namespaces, 2 * / } )
 * ```
 */
export type NCName = Name; // DefinedType


let _cached_decoder_for_NCName: $.ASN1Decoder<NCName> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NCName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NCName} The decoded data structure.
 */
export function _decode_NCName(el: _Element): NCName {
  if (!_cached_decoder_for_NCName) {
    _cached_decoder_for_NCName = _decode_Name;
  }
  return _cached_decoder_for_NCName(el);
}


let _cached_encoder_for_NCName: $.ASN1Encoder<NCName> | null = null;


/**
 * @summary Encodes a(n) NCName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCName, encoded as an ASN.1 Element.
 */
export function _encode_NCName(value: NCName, elGetter: $.ASN1Encoder<NCName>): _Element {
  if (!_cached_encoder_for_NCName) {
    _cached_encoder_for_NCName = _encode_Name;
  }
  return _cached_encoder_for_NCName(value, elGetter);
}


/* eslint-enable */
