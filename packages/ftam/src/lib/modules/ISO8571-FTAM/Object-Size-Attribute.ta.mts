/* eslint-disable */
import {
  INTEGER,
  NULL,
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


/**
 * @summary Object_Size_Attribute
 * @description
 *
 * Storage-group integer octet size (ISO 8571-2:1988
 * §12.14–§12.15, §14.2). ISO 8571-4:1988 Figure 11 names this
 * `Filesize-Attribute`; this encoding uses
 * `Object-Size-Attribute`. The same ASN.1 type is used for
 * current size (`object-size`) and future size
 * (`future-Object-size`).
 *
 * Current filesize: octets of the complete file at close after
 * open for modification or extension (including connection
 * failure). Not changeable; not settable on create (starts 0).
 * May be quantized to allocation units. Depends on the real
 * representation and the negotiated transfer syntax.
 *
 * Future filesize: nominal size the file may grow to. Set at
 * create; changeable. When current filesize reaches it, the
 * responder may increase it, increase it and warn, or indicate
 * an error.
 *
 * `no-value-available` means partial support and shall appear
 * only in response PDUs. Initiators shall not claim partial
 * support (ISO 8571-2:1988 §9.4).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Object-Size-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values       [1] IMPLICIT INTEGER
 * }
 * ```
 */
export type Object_Size_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Object_Size_Attribute: $.ASN1Decoder<Object_Size_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Object_Size_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Object_Size_Attribute} The decoded data structure.
 */
export function _decode_Object_Size_Attribute(el: _Element): Object_Size_Attribute {
  if (!_cached_decoder_for_Object_Size_Attribute) {
    _cached_decoder_for_Object_Size_Attribute = $._decode_inextensible_choice<Object_Size_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'CONTEXT 1': [
          'actual_values',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_Object_Size_Attribute(el);
}


let _cached_encoder_for_Object_Size_Attribute: $.ASN1Encoder<Object_Size_Attribute> | null = null;


/**
 * @summary Encodes a(n) Object_Size_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Object_Size_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_Object_Size_Attribute(
  value: Object_Size_Attribute,
  elGetter: $.ASN1Encoder<Object_Size_Attribute>
): _Element {
  if (!_cached_encoder_for_Object_Size_Attribute) {
    _cached_encoder_for_Object_Size_Attribute = $._encode_choice<Object_Size_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_Object_Size_Attribute(value, elGetter);
}


/* eslint-enable */
