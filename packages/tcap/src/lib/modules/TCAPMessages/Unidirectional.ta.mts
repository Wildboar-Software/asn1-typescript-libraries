/* eslint-disable */
import {
  OPTIONAL,
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
  DialoguePortion,
  _decode_DialoguePortion,
  _encode_DialoguePortion,
} from '../TCAPMessages/DialoguePortion.ta.mjs';
import {
  ComponentPortion,
  _decode_ComponentPortion,
  _encode_ComponentPortion,
} from '../TCAPMessages/ComponentPortion.ta.mjs';
/**
 * @summary Unidirectional
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Unidirectional{OPERATION:Invokable, OPERATION:Returnable} ::= SEQUENCE {
 *   dialoguePortion  DialoguePortion OPTIONAL,
 *   components       ComponentPortion{{Invokable}, {Returnable}}
 * }
 * ```
 *
 * @class
 */
export class Unidirectional {
  constructor(
    /**
     * @summary `dialoguePortion`.
     * @public
     * @readonly
     */
    readonly dialoguePortion: OPTIONAL<DialoguePortion>,
    /**
     * @summary `components`.
     * @public
     * @readonly
     */
    readonly components: ComponentPortion
  ) {}

  /**
   * @summary Restructures an object into a Unidirectional
   * @description
   *
   * This takes an `object` and converts it to a `Unidirectional`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Unidirectional`.
   * @returns {Unidirectional}
   */
  public static _from_object(
    _o: { [_K in keyof Unidirectional]: Unidirectional[_K] }
  ): Unidirectional {
    return new Unidirectional(_o.dialoguePortion, _o.components);
  }
}

/**
 * @summary The Leading Root Component Types of Unidirectional
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Unidirectional: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dialoguePortion',
    true,
    $.hasTag(_TagClass.application, 11)
  ),
  new $.ComponentSpec(
    'components',
    false,
    $.hasTag(_TagClass.application, 12)
  ),
];

/**
 * @summary The Trailing Root Component Types of Unidirectional
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Unidirectional: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Unidirectional
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Unidirectional: $.ComponentSpec[] = [];

let _cached_decoder_for_Unidirectional: $.ASN1Decoder<Unidirectional> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Unidirectional
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Unidirectional} The decoded data structure.
 */
export function _decode_Unidirectional(el: _Element): Unidirectional {
  if (!_cached_decoder_for_Unidirectional) {
    _cached_decoder_for_Unidirectional = function (
      el: _Element
    ): Unidirectional {
      let dialoguePortion: OPTIONAL<DialoguePortion>;
      let components!: ComponentPortion;
      const callbacks: $.DecodingMap = {
        dialoguePortion: (_el: _Element): void => {
          dialoguePortion = _decode_DialoguePortion(_el);
        },
        components: (_el: _Element): void => {
          components = _decode_ComponentPortion(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Unidirectional,
        _extension_additions_list_spec_for_Unidirectional,
        _root_component_type_list_2_spec_for_Unidirectional,
        undefined
      );
      return new Unidirectional (
        dialoguePortion,
        components
      );
    };
  }
  return _cached_decoder_for_Unidirectional(el);
}

let _cached_encoder_for_Unidirectional: $.ASN1Encoder<Unidirectional> | null = null;

/**
 * @summary Encodes a(n) Unidirectional into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unidirectional, encoded as an ASN.1 Element.
 */
export function _encode_Unidirectional(
  value: Unidirectional,
  elGetter: $.ASN1Encoder<Unidirectional>
): _Element {
  if (!_cached_encoder_for_Unidirectional) {
    _cached_encoder_for_Unidirectional = function (
      value: Unidirectional    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.dialoguePortion === undefined
              ? undefined
              : _encode_DialoguePortion(value.dialoguePortion, $.BER),
            /* REQUIRED   */ _encode_ComponentPortion(value.components, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Unidirectional(value, elGetter);
}


/* eslint-enable */
