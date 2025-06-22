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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
  IdentifyingStringOrIndex,
  _decode_IdentifyingStringOrIndex,
  _encode_IdentifyingStringOrIndex,
} from '../FastInfoset/IdentifyingStringOrIndex.ta.mjs';
/**
 * @summary Notation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Notation ::= SEQUENCE {
 *   name               IdentifyingStringOrIndex-- OTHER NCNAME category --,
 *   system-identifier  IdentifyingStringOrIndex OPTIONAL-- OTHER URI category --,
 *   public-identifier  IdentifyingStringOrIndex OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Notation {
  constructor(
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: IdentifyingStringOrIndex,
    /**
     * @summary `system_identifier`.
     * @public
     * @readonly
     */
    readonly system_identifier: OPTIONAL<IdentifyingStringOrIndex>,
    /**
     * @summary `public_identifier`.
     * @public
     * @readonly
     */
    readonly public_identifier: OPTIONAL<IdentifyingStringOrIndex>
  ) {}

  /**
   * @summary Restructures an object into a Notation
   * @description
   *
   * This takes an `object` and converts it to a `Notation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Notation`.
   * @returns {Notation}
   */
  public static _from_object(
    _o: { [_K in keyof Notation]: Notation[_K] }
  ): Notation {
    return new Notation(_o.name, _o.system_identifier, _o.public_identifier);
  }
}

/**
 * @summary The Leading Root Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Notation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'name',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'system-identifier',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'public-identifier',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];

/**
 * @summary The Trailing Root Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Notation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Notation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Notation: $.ComponentSpec[] = [];

let _cached_decoder_for_Notation: $.ASN1Decoder<Notation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Notation} The decoded data structure.
 */
export function _decode_Notation(el: _Element) {
  if (!_cached_decoder_for_Notation) {
    _cached_decoder_for_Notation = function (el: _Element): Notation {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let name!: IdentifyingStringOrIndex;
      let system_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      let public_identifier: OPTIONAL<IdentifyingStringOrIndex>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        name: (_el: _Element): void => {
          name = _decode_IdentifyingStringOrIndex(_el);
        },
        'system-identifier': (_el: _Element): void => {
          system_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
        'public-identifier': (_el: _Element): void => {
          public_identifier = _decode_IdentifyingStringOrIndex(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Notation,
        _extension_additions_list_spec_for_Notation,
        _root_component_type_list_2_spec_for_Notation,
        undefined
      );
      return new Notation /* SEQUENCE_CONSTRUCTOR_CALL */(
        name,
        system_identifier,
        public_identifier
      );
    };
  }
  return _cached_decoder_for_Notation(el);
}

let _cached_encoder_for_Notation: $.ASN1Encoder<Notation> | null = null;

/**
 * @summary Encodes a(n) Notation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notation, encoded as an ASN.1 Element.
 */
export function _encode_Notation(
  value: Notation,
  elGetter: $.ASN1Encoder<Notation>
) {
  if (!_cached_encoder_for_Notation) {
    _cached_encoder_for_Notation = function (
      value: Notation    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_IdentifyingStringOrIndex(
              value.name,
              $.BER
            ),
            /* IF_ABSENT  */ value.system_identifier === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(
                  value.system_identifier,
                  $.BER
                ),
            /* IF_ABSENT  */ value.public_identifier === undefined
              ? undefined
              : _encode_IdentifyingStringOrIndex(
                  value.public_identifier,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Notation(value, elGetter);
}


/* eslint-enable */
