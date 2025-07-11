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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
/**
 * @summary Parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Parameter ::= SEQUENCE {
 *   paramId    PARAMETER.&id({Parameters}),
 *   paramInfo  PARAMETER.&Type({Parameters}{@paramId})
 * }
 * ```
 *
 */
export class Parameter {
  constructor(
    /**
     * @summary `paramId`.
     * @public
     * @readonly
     */
    readonly paramId: OBJECT_IDENTIFIER,
    /**
     * @summary `paramInfo`.
     * @public
     * @readonly
     */
    readonly paramInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a Parameter
   * @description
   *
   * This takes an `object` and converts it to a `Parameter`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Parameter`.
   * @returns {Parameter}
   */
  public static _from_object(
    _o: { [_K in keyof Parameter]: Parameter[_K] }
  ): Parameter {
    return new Parameter(_o.paramId, _o.paramInfo);
  }
}

/**
 * @summary The Leading Root Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Parameter: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'paramId',
    false,
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec('paramInfo', false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Parameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Parameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Parameter: $.ComponentSpec[] = [];

let _cached_decoder_for_Parameter: $.ASN1Decoder<Parameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Parameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Parameter} The decoded data structure.
 */
export function _decode_Parameter(el: _Element): Parameter {
  if (!_cached_decoder_for_Parameter) {
    _cached_decoder_for_Parameter = function (el: _Element): Parameter {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Parameter contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'paramId';
      sequence[1].name = 'paramInfo';
      let paramId!: OBJECT_IDENTIFIER;
      let paramInfo!: _Element;
      paramId = $._decodeObjectIdentifier(sequence[0]);
      paramInfo = $._decodeAny(sequence[1]);
      return new Parameter(paramId, paramInfo);
    };
  }
  return _cached_decoder_for_Parameter(el);
}

let _cached_encoder_for_Parameter: $.ASN1Encoder<Parameter> | null = null;

/**
 * @summary Encodes a(n) Parameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameter, encoded as an ASN.1 Element.
 */
export function _encode_Parameter(
  value: Parameter,
  elGetter: $.ASN1Encoder<Parameter>
): _Element {
  if (!_cached_encoder_for_Parameter) {
    _cached_encoder_for_Parameter = function (
      value: Parameter    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.paramId, $.BER),
            /* REQUIRED   */ $._encodeAny(value.paramInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Parameter(value, elGetter);
}


/* eslint-enable */
