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
  AttributeType,
  _enum_for_AttributeType,
  AttributeType_country /* IMPORTED_LONG_ENUMERATION_ITEM */,
  country /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_streetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  streetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_houseId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  houseId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_givenName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  givenName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_title /* IMPORTED_LONG_ENUMERATION_ITEM */,
  title /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_description /* IMPORTED_LONG_ENUMERATION_ITEM */,
  description /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postalCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postalCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postOfficeBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postOfficeBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_dmdName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dmdName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityNDC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityNDC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberType /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_secondFamilyName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secondFamilyName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_profession /* IMPORTED_LONG_ENUMERATION_ITEM */,
  profession /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_language /* IMPORTED_LONG_ENUMERATION_ITEM */,
  language /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_telephone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  telephone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_orAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  orAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_url /* IMPORTED_LONG_ENUMERATION_ITEM */,
  url /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidFrom /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidFrom /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidUntil /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidUntil /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidity /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrCoverage /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrCoverage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrTariff /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrTariff /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeType,
  _encode_AttributeType,
} from '../Uds/AttributeType.ta';
export {
  AttributeType,
  _enum_for_AttributeType,
  AttributeType_country /* IMPORTED_LONG_ENUMERATION_ITEM */,
  country /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_locality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  locality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_stateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  stateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_streetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  streetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_houseId /* IMPORTED_LONG_ENUMERATION_ITEM */,
  houseId /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_givenName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  givenName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_title /* IMPORTED_LONG_ENUMERATION_ITEM */,
  title /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_description /* IMPORTED_LONG_ENUMERATION_ITEM */,
  description /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_businessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  businessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postalCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postalCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_postOfficeBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  postOfficeBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_dmdName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  dmdName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityCode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityCode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_localityNDC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  localityNDC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_subscriberType /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_secondFamilyName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secondFamilyName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_profession /* IMPORTED_LONG_ENUMERATION_ITEM */,
  profession /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_language /* IMPORTED_LONG_ENUMERATION_ITEM */,
  language /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_telephone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  telephone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_orAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  orAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_url /* IMPORTED_LONG_ENUMERATION_ITEM */,
  url /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commService /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commService /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_commNetwork /* IMPORTED_LONG_ENUMERATION_ITEM */,
  commNetwork /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidFrom /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidFrom /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidUntil /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidUntil /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrValidity /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrValidity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrCoverage /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrCoverage /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrTariff /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrTariff /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AttributeType_addrRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
  addrRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AttributeType,
  _encode_AttributeType,
} from '../Uds/AttributeType.ta';
import {
  StringMatchTypes,
  _decode_StringMatchTypes,
  _encode_StringMatchTypes,
} from '../Uds/StringMatchTypes.ta';
export {
  StringMatchTypes,
  _decode_StringMatchTypes,
  _encode_StringMatchTypes,
} from '../Uds/StringMatchTypes.ta';
import {
  WordMatchTypes,
  _decode_WordMatchTypes,
  _encode_WordMatchTypes,
} from '../Uds/WordMatchTypes.ta';
export {
  WordMatchTypes,
  _decode_WordMatchTypes,
  _encode_WordMatchTypes,
} from '../Uds/WordMatchTypes.ta';
import {
  CharacterMatchTypes,
  _decode_CharacterMatchTypes,
  _encode_CharacterMatchTypes,
} from '../Uds/CharacterMatchTypes.ta';
export {
  CharacterMatchTypes,
  _decode_CharacterMatchTypes,
  _encode_CharacterMatchTypes,
} from '../Uds/CharacterMatchTypes.ta';

/* START_OF_SYMBOL_DEFINITION WordRestriction */
/**
 * @summary WordRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordRestriction ::= SEQUENCE {
 *   attributeType        AttributeType OPTIONAL,
 *   initialMinimum       INTEGER(1..MAX) OPTIONAL,
 *   otherMinimum         INTEGER(1..MAX) OPTIONAL,
 *   stringMatchTypes     StringMatchTypes OPTIONAL,
 *   wordMatchTypes       WordMatchTypes OPTIONAL,
 *   characterMatchTypes  CharacterMatchTypes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class WordRestriction {
  constructor(
    /**
     * @summary `attributeType`.
     * @public
     * @readonly
     */
    readonly attributeType: OPTIONAL<AttributeType>,
    /**
     * @summary `initialMinimum`.
     * @public
     * @readonly
     */
    readonly initialMinimum: OPTIONAL<INTEGER>,
    /**
     * @summary `otherMinimum`.
     * @public
     * @readonly
     */
    readonly otherMinimum: OPTIONAL<INTEGER>,
    /**
     * @summary `stringMatchTypes`.
     * @public
     * @readonly
     */
    readonly stringMatchTypes: OPTIONAL<StringMatchTypes>,
    /**
     * @summary `wordMatchTypes`.
     * @public
     * @readonly
     */
    readonly wordMatchTypes: OPTIONAL<WordMatchTypes>,
    /**
     * @summary `characterMatchTypes`.
     * @public
     * @readonly
     */
    readonly characterMatchTypes: OPTIONAL<CharacterMatchTypes>
  ) {}

  /**
   * @summary Restructures an object into a WordRestriction
   * @description
   *
   * This takes an `object` and converts it to a `WordRestriction`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `WordRestriction`.
   * @returns {WordRestriction}
   */
  public static _from_object(
    _o: { [_K in keyof WordRestriction]: WordRestriction[_K] }
  ): WordRestriction {
    return new WordRestriction(
      _o.attributeType,
      _o.initialMinimum,
      _o.otherMinimum,
      _o.stringMatchTypes,
      _o.wordMatchTypes,
      _o.characterMatchTypes
    );
  }

  /**
   * @summary The enum used as the type of the component `attributeType`
   * @public
   * @static
   */

  public static _enum_for_attributeType = _enum_for_AttributeType;
}
/* END_OF_SYMBOL_DEFINITION WordRestriction */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WordRestriction */
/**
 * @summary The Leading Root Component Types of WordRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WordRestriction: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attributeType',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'initialMinimum',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'otherMinimum',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'stringMatchTypes',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'wordMatchTypes',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'characterMatchTypes',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WordRestriction */
/**
 * @summary The Trailing Root Component Types of WordRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WordRestriction: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WordRestriction */
/**
 * @summary The Extension Addition Component Types of WordRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WordRestriction: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WordRestriction */
let _cached_decoder_for_WordRestriction: $.ASN1Decoder<WordRestriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _decode_WordRestriction */
/**
 * @summary Decodes an ASN.1 element into a(n) WordRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WordRestriction} The decoded data structure.
 */
export function _decode_WordRestriction(el: _Element) {
  if (!_cached_decoder_for_WordRestriction) {
    _cached_decoder_for_WordRestriction = function (
      el: _Element
    ): WordRestriction {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let attributeType: OPTIONAL<AttributeType>;
      let initialMinimum: OPTIONAL<INTEGER>;
      let otherMinimum: OPTIONAL<INTEGER>;
      let stringMatchTypes: OPTIONAL<StringMatchTypes>;
      let wordMatchTypes: OPTIONAL<WordMatchTypes>;
      let characterMatchTypes: OPTIONAL<CharacterMatchTypes>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        attributeType: (_el: _Element): void => {
          attributeType = _decode_AttributeType(_el);
        },
        initialMinimum: (_el: _Element): void => {
          initialMinimum = $._decodeInteger(_el);
        },
        otherMinimum: (_el: _Element): void => {
          otherMinimum = $._decodeInteger(_el);
        },
        stringMatchTypes: (_el: _Element): void => {
          stringMatchTypes = _decode_StringMatchTypes(_el);
        },
        wordMatchTypes: (_el: _Element): void => {
          wordMatchTypes = _decode_WordMatchTypes(_el);
        },
        characterMatchTypes: (_el: _Element): void => {
          characterMatchTypes = _decode_CharacterMatchTypes(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_WordRestriction,
        _extension_additions_list_spec_for_WordRestriction,
        _root_component_type_list_2_spec_for_WordRestriction,
        undefined
      );
      return new WordRestriction /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributeType,
        initialMinimum,
        otherMinimum,
        stringMatchTypes,
        wordMatchTypes,
        characterMatchTypes
      );
    };
  }
  return _cached_decoder_for_WordRestriction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WordRestriction */
let _cached_encoder_for_WordRestriction: $.ASN1Encoder<WordRestriction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WordRestriction */

/* START_OF_SYMBOL_DEFINITION _encode_WordRestriction */
/**
 * @summary Encodes a(n) WordRestriction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordRestriction, encoded as an ASN.1 Element.
 */
export function _encode_WordRestriction(
  value: WordRestriction,
  elGetter: $.ASN1Encoder<WordRestriction>
) {
  if (!_cached_encoder_for_WordRestriction) {
    _cached_encoder_for_WordRestriction = function (
      value: WordRestriction,
      elGetter: $.ASN1Encoder<WordRestriction>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.attributeType === undefined
              ? undefined
              : _encode_AttributeType(value.attributeType, $.BER),
            /* IF_ABSENT  */ value.initialMinimum === undefined
              ? undefined
              : $._encodeInteger(value.initialMinimum, $.BER),
            /* IF_ABSENT  */ value.otherMinimum === undefined
              ? undefined
              : $._encodeInteger(value.otherMinimum, $.BER),
            /* IF_ABSENT  */ value.stringMatchTypes === undefined
              ? undefined
              : _encode_StringMatchTypes(value.stringMatchTypes, $.BER),
            /* IF_ABSENT  */ value.wordMatchTypes === undefined
              ? undefined
              : _encode_WordMatchTypes(value.wordMatchTypes, $.BER),
            /* IF_ABSENT  */ value.characterMatchTypes === undefined
              ? undefined
              : _encode_CharacterMatchTypes(value.characterMatchTypes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_WordRestriction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WordRestriction */

/* eslint-enable */
