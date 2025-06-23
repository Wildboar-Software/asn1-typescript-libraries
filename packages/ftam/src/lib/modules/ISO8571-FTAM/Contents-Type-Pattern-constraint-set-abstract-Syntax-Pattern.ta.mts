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
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta.mjs';

/**
 * @summary Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Pattern-constraint-set-abstract-Syntax-Pattern ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern {
  constructor(
    /**
     * @summary `constraint_Set_Pattern`.
     * @public
     * @readonly
     */
    readonly constraint_Set_Pattern: OPTIONAL<Object_Identifier_Pattern>,
    /**
     * @summary `abstract_Syntax_Pattern`.
     * @public
     * @readonly
     */
    readonly abstract_Syntax_Pattern: OPTIONAL<Object_Identifier_Pattern>
  ) {}

  /**
   * @summary Restructures an object into a Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
   * @description
   *
   * This takes an `object` and converts it to a `Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern`.
   * @returns {Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern}
   */
  public static _from_object(
    _o: {
      [_K in keyof Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern]: Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern[_K];
    }
  ): Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern {
    return new Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
      _o.constraint_Set_Pattern,
      _o.abstract_Syntax_Pattern
    );
  }
}


/**
 * @summary The Leading Root Component Types of Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'constraint-Set-Pattern',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'abstract-Syntax-Pattern',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ComponentSpec[] = [];


let _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ASN1Decoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern} The decoded data structure.
 */
export function _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
  el: _Element
) {
  if (
    !_cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
  ) {
    _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern = function (
      el: _Element
    ): Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern {
      let constraint_Set_Pattern: OPTIONAL<Object_Identifier_Pattern>;
      let abstract_Syntax_Pattern: OPTIONAL<Object_Identifier_Pattern>;
      const callbacks: $.DecodingMap = {
        'constraint-Set-Pattern': (_el: _Element): void => {
          constraint_Set_Pattern = $._decode_implicit<Object_Identifier_Pattern>(
            () => _decode_Object_Identifier_Pattern
          )(_el);
        },
        'abstract-Syntax-Pattern': (_el: _Element): void => {
          abstract_Syntax_Pattern = $._decode_implicit<Object_Identifier_Pattern>(
            () => _decode_Object_Identifier_Pattern
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        undefined
      );
      return new Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern (
        constraint_Set_Pattern,
        abstract_Syntax_Pattern
      );
    };
  }
  return _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
    el
  );
}


let _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ASN1Encoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern> | null = null;


/**
 * @summary Encodes a(n) Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
  value: Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
  elGetter: $.ASN1Encoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern>
) {
  if (
    !_cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
  ) {
    _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern = function (
      value: Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.constraint_Set_Pattern === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  2,
                  () => _encode_Object_Identifier_Pattern,
                  $.BER
                )(value.constraint_Set_Pattern, $.BER),
            /* IF_ABSENT  */ value.abstract_Syntax_Pattern === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  3,
                  () => _encode_Object_Identifier_Pattern,
                  $.BER
                )(value.abstract_Syntax_Pattern, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
    value,
    elGetter
  );
}


/* eslint-enable */
