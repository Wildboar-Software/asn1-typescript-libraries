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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.js';
export { AnyURI, _decode_AnyURI, _encode_AnyURI } from '../XSD/AnyURI.ta.js';
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';
export { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.js';

/* START_OF_SYMBOL_DEFINITION QName */
/**
 * @summary QName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QName ::= SEQUENCE {
 * uri     AnyURI OPTIONAL,
 * name     NCName }
 * ```
 *
 * @class
 */
export class QName {
  constructor(
    /**
     * @summary `uri`.
     * @public
     * @readonly
     */
    readonly uri: OPTIONAL<AnyURI>,
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: NCName
  ) {}

  /**
   * @summary Restructures an object into a QName
   * @description
   *
   * This takes an `object` and converts it to a `QName`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QName`.
   * @returns {QName}
   */
  public static _from_object(_o: { [_K in keyof QName]: QName[_K] }): QName {
    return new QName(_o.uri, _o.name);
  }
}
/* END_OF_SYMBOL_DEFINITION QName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QName */
/**
 * @summary The Leading Root Component Types of QName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QName: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'uri',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'name',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_QName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QName */
/**
 * @summary The Trailing Root Component Types of QName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_QName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QName */
/**
 * @summary The Extension Addition Component Types of QName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_QName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_QName */
let _cached_decoder_for_QName: $.ASN1Decoder<QName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_QName */

/* START_OF_SYMBOL_DEFINITION _decode_QName */
/**
 * @summary Decodes an ASN.1 element into a(n) QName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QName} The decoded data structure.
 */
export function _decode_QName(el: _Element) {
  if (!_cached_decoder_for_QName) {
    _cached_decoder_for_QName = function (el: _Element): QName {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let uri: OPTIONAL<AnyURI>;
      let name!: NCName;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        uri: (_el: _Element): void => {
          uri = _decode_AnyURI(_el);
        },
        name: (_el: _Element): void => {
          name = _decode_NCName(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_QName,
        _extension_additions_list_spec_for_QName,
        _root_component_type_list_2_spec_for_QName,
        undefined
      );
      return new QName /* SEQUENCE_CONSTRUCTOR_CALL */(uri, name);
    };
  }
  return _cached_decoder_for_QName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_QName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_QName */
let _cached_encoder_for_QName: $.ASN1Encoder<QName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_QName */

/* START_OF_SYMBOL_DEFINITION _encode_QName */
/**
 * @summary Encodes a(n) QName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QName, encoded as an ASN.1 Element.
 */
export function _encode_QName(value: QName, elGetter: $.ASN1Encoder<QName>) {
  if (!_cached_encoder_for_QName) {
    _cached_encoder_for_QName = function (
      value: QName,
      elGetter: $.ASN1Encoder<QName>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.uri === undefined
              ? undefined
              : _encode_AnyURI(value.uri, $.BER),
            /* REQUIRED   */ _encode_NCName(value.name, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_QName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_QName */

/* eslint-enable */
