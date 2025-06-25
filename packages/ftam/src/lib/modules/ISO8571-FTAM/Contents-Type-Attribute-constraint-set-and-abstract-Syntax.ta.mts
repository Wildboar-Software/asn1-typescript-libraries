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
  Constraint_Set_Name,
  _decode_Constraint_Set_Name,
  _encode_Constraint_Set_Name,
} from '../ISO8571-FTAM/Constraint-Set-Name.ta.mjs';
import {
  Abstract_Syntax_Name,
  _decode_Abstract_Syntax_Name,
  _encode_Abstract_Syntax_Name,
} from '../ISO8571-FTAM/Abstract-Syntax-Name.ta.mjs';

/**
 * @summary Contents_Type_Attribute_constraint_set_and_abstract_Syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Contents-Type-Attribute-constraint-set-and-abstract-Syntax ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Contents_Type_Attribute_constraint_set_and_abstract_Syntax {
  constructor(
    /**
     * @summary `constraint_set_name`.
     * @public
     * @readonly
     */
    readonly constraint_set_name: Constraint_Set_Name,
    /**
     * @summary `abstract_Syntax_name`.
     * @public
     * @readonly
     */
    readonly abstract_Syntax_name: Abstract_Syntax_Name
  ) {}

  /**
   * @summary Restructures an object into a Contents_Type_Attribute_constraint_set_and_abstract_Syntax
   * @description
   *
   * This takes an `object` and converts it to a `Contents_Type_Attribute_constraint_set_and_abstract_Syntax`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Contents_Type_Attribute_constraint_set_and_abstract_Syntax`.
   * @returns {Contents_Type_Attribute_constraint_set_and_abstract_Syntax}
   */
  public static _from_object(
    _o: {
      [_K in keyof Contents_Type_Attribute_constraint_set_and_abstract_Syntax]: Contents_Type_Attribute_constraint_set_and_abstract_Syntax[_K];
    }
  ): Contents_Type_Attribute_constraint_set_and_abstract_Syntax {
    return new Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
      _o.constraint_set_name,
      _o.abstract_Syntax_name
    );
  }
}


/**
 * @summary The Leading Root Component Types of Contents_Type_Attribute_constraint_set_and_abstract_Syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'constraint-set-name',
    false,
    $.hasTag(_TagClass.application, 11)
  ),
  new $.ComponentSpec(
    'abstract-Syntax-name',
    false,
    $.hasTag(_TagClass.application, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Contents_Type_Attribute_constraint_set_and_abstract_Syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Contents_Type_Attribute_constraint_set_and_abstract_Syntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax: $.ComponentSpec[] = [];


let _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax: $.ASN1Decoder<Contents_Type_Attribute_constraint_set_and_abstract_Syntax> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Contents_Type_Attribute_constraint_set_and_abstract_Syntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Contents_Type_Attribute_constraint_set_and_abstract_Syntax} The decoded data structure.
 */
export function _decode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
  el: _Element
): Contents_Type_Attribute_constraint_set_and_abstract_Syntax {
  if (
    !_cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax
  ) {
    _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax = function (
      el: _Element
    ): Contents_Type_Attribute_constraint_set_and_abstract_Syntax {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Contents-Type-Attribute-constraint-set-and-abstract-Syntax contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'constraint-set-name';
      sequence[1].name = 'abstract-Syntax-name';
      let constraint_set_name!: Constraint_Set_Name;
      let abstract_Syntax_name!: Abstract_Syntax_Name;
      constraint_set_name = _decode_Constraint_Set_Name(sequence[0]);
      abstract_Syntax_name = _decode_Abstract_Syntax_Name(sequence[1]);
      return new Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
        constraint_set_name,
        abstract_Syntax_name
      );
    };
  }
  return _cached_decoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
    el
  );
}


let _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_Syntax> | null = null;


/**
 * @summary Encodes a(n) Contents_Type_Attribute_constraint_set_and_abstract_Syntax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Contents_Type_Attribute_constraint_set_and_abstract_Syntax, encoded as an ASN.1 Element.
 */
export function _encode_Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
  value: Contents_Type_Attribute_constraint_set_and_abstract_Syntax,
  elGetter: $.ASN1Encoder<Contents_Type_Attribute_constraint_set_and_abstract_Syntax>
): _Element {
  if (
    !_cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax
  ) {
    _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax = function (
      value: Contents_Type_Attribute_constraint_set_and_abstract_Syntax    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Constraint_Set_Name(
              value.constraint_set_name,
              $.BER
            ),
            /* REQUIRED   */ _encode_Abstract_Syntax_Name(
              value.abstract_Syntax_name,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Contents_Type_Attribute_constraint_set_and_abstract_Syntax(
    value,
    elGetter
  );
}


/* eslint-enable */
