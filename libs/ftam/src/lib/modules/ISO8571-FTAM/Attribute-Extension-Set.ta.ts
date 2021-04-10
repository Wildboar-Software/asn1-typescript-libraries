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
  Extension_Set_Identifier,
  _decode_Extension_Set_Identifier,
  _encode_Extension_Set_Identifier,
} from '../ISO8571-FTAM/Extension-Set-Identifier.ta';
export {
  Extension_Set_Identifier,
  _decode_Extension_Set_Identifier,
  _encode_Extension_Set_Identifier,
} from '../ISO8571-FTAM/Extension-Set-Identifier.ta';
import {
  Extension_Attribute,
  _decode_Extension_Attribute,
  _encode_Extension_Attribute,
} from '../ISO8571-FTAM/Extension-Attribute.ta';
export {
  Extension_Attribute,
  _decode_Extension_Attribute,
  _encode_Extension_Attribute,
} from '../ISO8571-FTAM/Extension-Attribute.ta';

/* START_OF_SYMBOL_DEFINITION Attribute_Extension_Set */
/**
 * @summary Attribute_Extension_Set
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extension-Set ::= SEQUENCE {
 *   extension-set-identifier  [0] IMPLICIT Extension-Set-Identifier,
 *   extension-set-attributes  [1]  SEQUENCE OF Extension-Attribute
 * }
 * ```
 *
 * @class
 */
export class Attribute_Extension_Set {
  constructor(
    /**
     * @summary `extension_set_identifier`.
     * @public
     * @readonly
     */
    readonly extension_set_identifier: Extension_Set_Identifier,
    /**
     * @summary `extension_set_attributes`.
     * @public
     * @readonly
     */
    readonly extension_set_attributes: Extension_Attribute[]
  ) {}

  /**
   * @summary Restructures an object into a Attribute_Extension_Set
   * @description
   *
   * This takes an `object` and converts it to a `Attribute_Extension_Set`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Attribute_Extension_Set`.
   * @returns {Attribute_Extension_Set}
   */
  public static _from_object(
    _o: { [_K in keyof Attribute_Extension_Set]: Attribute_Extension_Set[_K] }
  ): Attribute_Extension_Set {
    return new Attribute_Extension_Set(
      _o.extension_set_identifier,
      _o.extension_set_attributes
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extension_Set */
/**
 * @summary The Leading Root Component Types of Attribute_Extension_Set
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute_Extension_Set: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'extension-set-identifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extension-set-attributes',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extension_Set */
/**
 * @summary The Trailing Root Component Types of Attribute_Extension_Set
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute_Extension_Set: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extension_Set */
/**
 * @summary The Extension Addition Component Types of Attribute_Extension_Set
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute_Extension_Set: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Set */
let _cached_decoder_for_Attribute_Extension_Set: $.ASN1Decoder<Attribute_Extension_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Set */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extension_Set
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extension_Set} The decoded data structure.
 */
export function _decode_Attribute_Extension_Set(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extension_Set) {
    _cached_decoder_for_Attribute_Extension_Set = function (
      el: _Element
    ): Attribute_Extension_Set {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Attribute-Extension-Set contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'extension-set-identifier';
      sequence[1].name = 'extension-set-attributes';
      let extension_set_identifier!: Extension_Set_Identifier;
      let extension_set_attributes!: Extension_Attribute[];
      extension_set_identifier = $._decode_implicit<Extension_Set_Identifier>(
        () => _decode_Extension_Set_Identifier
      )(sequence[0]);
      extension_set_attributes = $._decode_explicit<Extension_Attribute[]>(() =>
        $._decodeSequenceOf<Extension_Attribute>(
          () => _decode_Extension_Attribute
        )
      )(sequence[1]);
      return new Attribute_Extension_Set(
        extension_set_identifier,
        extension_set_attributes
      );
    };
  }
  return _cached_decoder_for_Attribute_Extension_Set(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Set */
let _cached_encoder_for_Attribute_Extension_Set: $.ASN1Encoder<Attribute_Extension_Set> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Set */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Set */
/**
 * @summary Encodes a(n) Attribute_Extension_Set into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extension_Set, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extension_Set(
  value: Attribute_Extension_Set,
  elGetter: $.ASN1Encoder<Attribute_Extension_Set>
) {
  if (!_cached_encoder_for_Attribute_Extension_Set) {
    _cached_encoder_for_Attribute_Extension_Set = function (
      value: Attribute_Extension_Set,
      elGetter: $.ASN1Encoder<Attribute_Extension_Set>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_Extension_Set_Identifier,
              $.BER
            )(value.extension_set_identifier, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () =>
                $._encodeSequenceOf<Extension_Attribute>(
                  () => _encode_Extension_Attribute,
                  $.BER
                ),
              $.BER
            )(value.extension_set_attributes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute_Extension_Set(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Set */

/* eslint-enable */
