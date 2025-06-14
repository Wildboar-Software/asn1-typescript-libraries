/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
/* START_OF_SYMBOL_DEFINITION SecurityProtocol */
/**
 * @summary SecurityProtocol
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProtocol ::= SEQUENCE {
 *   id         SECURITY-PROTOCOL.&id({SecurityProtocols}),
 *   parameter  SECURITY-PROTOCOL.&Parameter({SecurityProtocols}{@id})
 * }
 * ```
 *
 * @class
 */
export class SecurityProtocol {
  constructor(
    /**
     * @summary `id`.
     * @public
     * @readonly
     */
    readonly id: OBJECT_IDENTIFIER,
    /**
     * @summary `parameter`.
     * @public
     * @readonly
     */
    readonly parameter: _Element
  ) {}

  /**
   * @summary Restructures an object into a SecurityProtocol
   * @description
   *
   * This takes an `object` and converts it to a `SecurityProtocol`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SecurityProtocol`.
   * @returns {SecurityProtocol}
   */
  public static _from_object(
    _o: { [_K in keyof SecurityProtocol]: SecurityProtocol[_K] }
  ): SecurityProtocol {
    return new SecurityProtocol(_o.id, _o.parameter);
  }
}
/* END_OF_SYMBOL_DEFINITION SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityProtocol */
/**
 * @summary The Leading Root Component Types of SecurityProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityProtocol: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'id',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'parameter',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityProtocol */
/**
 * @summary The Trailing Root Component Types of SecurityProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityProtocol: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityProtocol */
/**
 * @summary The Extension Addition Component Types of SecurityProtocol
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityProtocol: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProtocol */
let _cached_decoder_for_SecurityProtocol: $.ASN1Decoder<SecurityProtocol> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityProtocol */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProtocol
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityProtocol} The decoded data structure.
 */
export function _decode_SecurityProtocol(el: _Element) {
  if (!_cached_decoder_for_SecurityProtocol) {
    _cached_decoder_for_SecurityProtocol = function (
      el: _Element
    ): SecurityProtocol {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'SecurityProtocol contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'id';
      sequence[1].name = 'parameter';
      let id!: OBJECT_IDENTIFIER;
      let parameter!: _Element;
      id = $._decodeObjectIdentifier(sequence[0]);
      parameter = $._decodeAny(sequence[1]);
      return new SecurityProtocol(id, parameter);
    };
  }
  return _cached_decoder_for_SecurityProtocol(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProtocol */
let _cached_encoder_for_SecurityProtocol: $.ASN1Encoder<SecurityProtocol> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProtocol */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityProtocol */
/**
 * @summary Encodes a(n) SecurityProtocol into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityProtocol, encoded as an ASN.1 Element.
 */
export function _encode_SecurityProtocol(
  value: SecurityProtocol,
  elGetter: $.ASN1Encoder<SecurityProtocol>
) {
  if (!_cached_encoder_for_SecurityProtocol) {
    _cached_encoder_for_SecurityProtocol = function (
      value: SecurityProtocol    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.id, $.BER),
            /* REQUIRED   */ $._encodeAny(value.parameter, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SecurityProtocol(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityProtocol */

/* eslint-enable */
