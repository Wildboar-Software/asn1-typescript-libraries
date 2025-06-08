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
  Extension_Attribute_identifier,
  _decode_Extension_Attribute_identifier,
  _encode_Extension_Attribute_identifier,
} from '../ISO8571-FTAM/Extension-Attribute-identifier.ta';
export {
  Extension_Attribute_identifier,
  _decode_Extension_Attribute_identifier,
  _encode_Extension_Attribute_identifier,
} from '../ISO8571-FTAM/Extension-Attribute-identifier.ta';

/* START_OF_SYMBOL_DEFINITION Attribute_Extension_Set_Name */
/**
 * @summary Attribute_Extension_Set_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Attribute-Extension-Set-Name ::= SEQUENCE {
 *   extension-set-identifier   [0] IMPLICIT Extension-Set-Identifier,
 *   extension-attribute-names  [1]  SEQUENCE OF Extension-Attribute-identifier
 * }
 * ```
 *
 * @class
 */
export class Attribute_Extension_Set_Name {
  constructor(
    /**
     * @summary `extension_set_identifier`.
     * @public
     * @readonly
     */
    readonly extension_set_identifier: Extension_Set_Identifier,
    /**
     * @summary `extension_attribute_names`.
     * @public
     * @readonly
     */
    readonly extension_attribute_names: Extension_Attribute_identifier[]
  ) {}

  /**
   * @summary Restructures an object into a Attribute_Extension_Set_Name
   * @description
   *
   * This takes an `object` and converts it to a `Attribute_Extension_Set_Name`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Attribute_Extension_Set_Name`.
   * @returns {Attribute_Extension_Set_Name}
   */
  public static _from_object(
    _o: {
      [_K in keyof Attribute_Extension_Set_Name]: Attribute_Extension_Set_Name[_K];
    }
  ): Attribute_Extension_Set_Name {
    return new Attribute_Extension_Set_Name(
      _o.extension_set_identifier,
      _o.extension_attribute_names
    );
  }
}
/* END_OF_SYMBOL_DEFINITION Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extension_Set_Name */
/**
 * @summary The Leading Root Component Types of Attribute_Extension_Set_Name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Attribute_Extension_Set_Name: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'extension-set-identifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extension-attribute-names',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extension_Set_Name */
/**
 * @summary The Trailing Root Component Types of Attribute_Extension_Set_Name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Attribute_Extension_Set_Name: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extension_Set_Name */
/**
 * @summary The Extension Addition Component Types of Attribute_Extension_Set_Name
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Attribute_Extension_Set_Name: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Set_Name */
let _cached_decoder_for_Attribute_Extension_Set_Name: $.ASN1Decoder<Attribute_Extension_Set_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Set_Name */
/**
 * @summary Decodes an ASN.1 element into a(n) Attribute_Extension_Set_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Attribute_Extension_Set_Name} The decoded data structure.
 */
export function _decode_Attribute_Extension_Set_Name(el: _Element) {
  if (!_cached_decoder_for_Attribute_Extension_Set_Name) {
    _cached_decoder_for_Attribute_Extension_Set_Name = function (
      el: _Element
    ): Attribute_Extension_Set_Name {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Attribute-Extension-Set-Name contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'extension-set-identifier';
      sequence[1].name = 'extension-attribute-names';
      let extension_set_identifier!: Extension_Set_Identifier;
      let extension_attribute_names!: Extension_Attribute_identifier[];
      extension_set_identifier = $._decode_implicit<Extension_Set_Identifier>(
        () => _decode_Extension_Set_Identifier
      )(sequence[0]);
      extension_attribute_names = $._decode_explicit<
        Extension_Attribute_identifier[]
      >(() =>
        $._decodeSequenceOf<Extension_Attribute_identifier>(
          () => _decode_Extension_Attribute_identifier
        )
      )(sequence[1]);
      return new Attribute_Extension_Set_Name(
        extension_set_identifier,
        extension_attribute_names
      );
    };
  }
  return _cached_decoder_for_Attribute_Extension_Set_Name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Set_Name */
let _cached_encoder_for_Attribute_Extension_Set_Name: $.ASN1Encoder<Attribute_Extension_Set_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Attribute_Extension_Set_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Set_Name */
/**
 * @summary Encodes a(n) Attribute_Extension_Set_Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Attribute_Extension_Set_Name, encoded as an ASN.1 Element.
 */
export function _encode_Attribute_Extension_Set_Name(
  value: Attribute_Extension_Set_Name,
  elGetter: $.ASN1Encoder<Attribute_Extension_Set_Name>
) {
  if (!_cached_encoder_for_Attribute_Extension_Set_Name) {
    _cached_encoder_for_Attribute_Extension_Set_Name = function (
      value: Attribute_Extension_Set_Name,
      elGetter: $.ASN1Encoder<Attribute_Extension_Set_Name>
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
                $._encodeSequenceOf<Extension_Attribute_identifier>(
                  () => _encode_Extension_Attribute_identifier,
                  $.BER
                ),
              $.BER
            )(value.extension_attribute_names, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Attribute_Extension_Set_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Attribute_Extension_Set_Name */

/* eslint-enable */
