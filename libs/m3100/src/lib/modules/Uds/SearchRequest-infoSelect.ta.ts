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
  AttributeTypes,
  _decode_AttributeTypes,
  _encode_AttributeTypes,
} from '../Uds/AttributeTypes.ta';
export {
  AttributeTypes,
  _decode_AttributeTypes,
  _encode_AttributeTypes,
} from '../Uds/AttributeTypes.ta';
import { Family, _decode_Family, _encode_Family } from '../Uds/Family.ta';
export { Family, _decode_Family, _encode_Family } from '../Uds/Family.ta';

/* START_OF_SYMBOL_DEFINITION SearchRequest_infoSelect */
/**
 * @summary SearchRequest_infoSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-infoSelect ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchRequest_infoSelect {
  constructor(
    /**
     * @summary `attrTypes`.
     * @public
     * @readonly
     */
    readonly attrTypes: OPTIONAL<AttributeTypes>,
    /**
     * @summary `family`.
     * @public
     * @readonly
     */
    readonly family: Family[]
  ) {}

  /**
   * @summary Restructures an object into a SearchRequest_infoSelect
   * @description
   *
   * This takes an `object` and converts it to a `SearchRequest_infoSelect`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchRequest_infoSelect`.
   * @returns {SearchRequest_infoSelect}
   */
  public static _from_object(
    _o: { [_K in keyof SearchRequest_infoSelect]: SearchRequest_infoSelect[_K] }
  ): SearchRequest_infoSelect {
    return new SearchRequest_infoSelect(_o.attrTypes, _o.family);
  }
}
/* END_OF_SYMBOL_DEFINITION SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest_infoSelect */
/**
 * @summary The Leading Root Component Types of SearchRequest_infoSelect
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRequest_infoSelect: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'attrTypes',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'family',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest_infoSelect */
/**
 * @summary The Trailing Root Component Types of SearchRequest_infoSelect
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRequest_infoSelect: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest_infoSelect */
/**
 * @summary The Extension Addition Component Types of SearchRequest_infoSelect
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRequest_infoSelect: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_infoSelect */
let _cached_decoder_for_SearchRequest_infoSelect: $.ASN1Decoder<SearchRequest_infoSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest_infoSelect */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_infoSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_infoSelect} The decoded data structure.
 */
export function _decode_SearchRequest_infoSelect(el: _Element) {
  if (!_cached_decoder_for_SearchRequest_infoSelect) {
    _cached_decoder_for_SearchRequest_infoSelect = function (
      el: _Element
    ): SearchRequest_infoSelect {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let attrTypes: OPTIONAL<AttributeTypes>;
      let family!: Family[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        attrTypes: (_el: _Element): void => {
          attrTypes = _decode_AttributeTypes(_el);
        },
        family: (_el: _Element): void => {
          family = $._decodeSequenceOf<Family>(() => _decode_Family)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchRequest_infoSelect,
        _extension_additions_list_spec_for_SearchRequest_infoSelect,
        _root_component_type_list_2_spec_for_SearchRequest_infoSelect,
        undefined
      );
      return new SearchRequest_infoSelect /* SEQUENCE_CONSTRUCTOR_CALL */(
        attrTypes,
        family
      );
    };
  }
  return _cached_decoder_for_SearchRequest_infoSelect(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_infoSelect */
let _cached_encoder_for_SearchRequest_infoSelect: $.ASN1Encoder<SearchRequest_infoSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_infoSelect */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest_infoSelect */
/**
 * @summary Encodes a(n) SearchRequest_infoSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_infoSelect, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_infoSelect(
  value: SearchRequest_infoSelect,
  elGetter: $.ASN1Encoder<SearchRequest_infoSelect>
) {
  if (!_cached_encoder_for_SearchRequest_infoSelect) {
    _cached_encoder_for_SearchRequest_infoSelect = function (
      value: SearchRequest_infoSelect,
      elGetter: $.ASN1Encoder<SearchRequest_infoSelect>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.attrTypes === undefined
              ? undefined
              : _encode_AttributeTypes(value.attrTypes, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Family>(
              () => _encode_Family,
              $.BER
            )(value.family, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchRequest_infoSelect(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest_infoSelect */

/* eslint-enable */
