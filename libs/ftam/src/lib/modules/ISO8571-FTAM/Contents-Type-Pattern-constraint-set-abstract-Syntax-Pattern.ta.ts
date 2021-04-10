/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta';
export {
  Object_Identifier_Pattern,
  _decode_Object_Identifier_Pattern,
  _encode_Object_Identifier_Pattern,
} from '../ISO8571-FTAM/Object-Identifier-Pattern.ta';

/* START_OF_SYMBOL_DEFINITION Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
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
/* END_OF_SYMBOL_DEFINITION Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
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
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'abstract-Syntax-Pattern',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
/**
 * @summary The Trailing Root Component Types of Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
/**
 * @summary The Extension Addition Component Types of Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
let _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ASN1Decoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
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
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let constraint_Set_Pattern: OPTIONAL<Object_Identifier_Pattern>;
      let abstract_Syntax_Pattern: OPTIONAL<Object_Identifier_Pattern>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        _extension_additions_list_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        _root_component_type_list_2_spec_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
        undefined
      );
      return new Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern /* SEQUENCE_CONSTRUCTOR_CALL */(
        constraint_Set_Pattern,
        abstract_Syntax_Pattern
      );
    };
  }
  return _cached_decoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern(
    el
  );
}
/* END_OF_SYMBOL_DEFINITION _decode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
let _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern: $.ASN1Encoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* START_OF_SYMBOL_DEFINITION _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */
/**
 * @summary Encodes a(n) Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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
      value: Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern,
      elGetter: $.ASN1Encoder<Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_Contents_Type_Pattern_constraint_set_abstract_Syntax_Pattern */

/* eslint-enable */
