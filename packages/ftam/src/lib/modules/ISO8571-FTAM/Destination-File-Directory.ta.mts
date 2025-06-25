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
  Pathname_Attribute,
  _decode_Pathname_Attribute,
  _encode_Pathname_Attribute,
} from '../ISO8571-FTAM/Pathname-Attribute.ta.mjs';

/**
 * @summary Destination_File_Directory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Destination-File-Directory  ::=  [APPLICATION 24]  Pathname-Attribute
 * ```
 */
export type Destination_File_Directory = Pathname_Attribute; // DefinedType


let _cached_decoder_for_Destination_File_Directory: $.ASN1Decoder<Destination_File_Directory> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Destination_File_Directory
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Destination_File_Directory} The decoded data structure.
 */
export function _decode_Destination_File_Directory(el: _Element): Destination_File_Directory {
  if (!_cached_decoder_for_Destination_File_Directory) {
    _cached_decoder_for_Destination_File_Directory = $._decode_explicit<Destination_File_Directory>(
      () => _decode_Pathname_Attribute
    );
  }
  return _cached_decoder_for_Destination_File_Directory(el);
}


let _cached_encoder_for_Destination_File_Directory: $.ASN1Encoder<Destination_File_Directory> | null = null;


/**
 * @summary Encodes a(n) Destination_File_Directory into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destination_File_Directory, encoded as an ASN.1 Element.
 */
export function _encode_Destination_File_Directory(
  value: Destination_File_Directory,
  elGetter: $.ASN1Encoder<Destination_File_Directory>
): _Element {
  if (!_cached_encoder_for_Destination_File_Directory) {
    _cached_encoder_for_Destination_File_Directory = $._encode_explicit(
      _TagClass.application,
      24,
      () => _encode_Pathname_Attribute,
      $.BER
    );
  }
  return _cached_encoder_for_Destination_File_Directory(value, elGetter);
}


/* eslint-enable */
