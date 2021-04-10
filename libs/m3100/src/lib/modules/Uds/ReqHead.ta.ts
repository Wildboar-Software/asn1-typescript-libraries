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
  SearchType,
  _enum_for_SearchType,
  SearchType_searchForStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByEntryIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByEntryIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinCountry /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinCountry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByCommunicationsAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByCommunicationsAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByBusinessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByBusinessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchType,
  _encode_SearchType,
} from '../Uds/SearchType.ta';
export {
  SearchType,
  _enum_for_SearchType,
  SearchType_searchForStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinLocality /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinLocality /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByEntryIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByEntryIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinStateOrProvince /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinStateOrProvince /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberWithinCountry /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberWithinCountry /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_searchForStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  searchForStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByStreetAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByStreetAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByCommunicationsAddress /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByCommunicationsAddress /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SearchType_subscriberByBusinessCategory /* IMPORTED_LONG_ENUMERATION_ITEM */,
  subscriberByBusinessCategory /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SearchType,
  _encode_SearchType,
} from '../Uds/SearchType.ta';
import {
  ReqHead_userClass,
  _enum_for_ReqHead_userClass,
  ReqHead_userClass_operator /* IMPORTED_LONG_ENUMERATION_ITEM */,
  operator /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReqHead_userClass_publicUser /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicUser /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ReqHead_userClass,
  _encode_ReqHead_userClass,
} from '../Uds/ReqHead-userClass.ta';
export {
  ReqHead_userClass,
  _enum_for_ReqHead_userClass,
  ReqHead_userClass_operator /* IMPORTED_LONG_ENUMERATION_ITEM */,
  operator /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ReqHead_userClass_publicUser /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicUser /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ReqHead_userClass,
  _encode_ReqHead_userClass,
} from '../Uds/ReqHead-userClass.ta';

/* START_OF_SYMBOL_DEFINITION ReqHead */
/**
 * @summary ReqHead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReqHead ::= SEQUENCE {
 *   requestRef  INTEGER,
 *   searchType  SearchType,
 *   userClass   ENUMERATED {operator, publicUser} DEFAULT operator
 * }
 * ```
 *
 * @class
 */
export class ReqHead {
  constructor(
    /**
     * @summary `requestRef`.
     * @public
     * @readonly
     */
    readonly requestRef: INTEGER,
    /**
     * @summary `searchType`.
     * @public
     * @readonly
     */
    readonly searchType: SearchType,
    /**
     * @summary `userClass`.
     * @public
     * @readonly
     */
    readonly userClass: OPTIONAL<ReqHead_userClass>
  ) {}

  /**
   * @summary Restructures an object into a ReqHead
   * @description
   *
   * This takes an `object` and converts it to a `ReqHead`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReqHead`.
   * @returns {ReqHead}
   */
  public static _from_object(
    _o: { [_K in keyof ReqHead]: ReqHead[_K] }
  ): ReqHead {
    return new ReqHead(_o.requestRef, _o.searchType, _o.userClass);
  }

  /**
   * @summary Getter that returns the default value for `userClass`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_userClass() {
    return ReqHead_userClass_operator;
  }
  /**
   * @summary The enum used as the type of the component `searchType`
   * @public
   * @static
   */

  public static _enum_for_searchType = _enum_for_SearchType;
  /**
   * @summary The enum used as the type of the component `userClass`
   * @public
   * @static
   */

  public static _enum_for_userClass = _enum_for_ReqHead_userClass;
}
/* END_OF_SYMBOL_DEFINITION ReqHead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReqHead */
/**
 * @summary The Leading Root Component Types of ReqHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReqHead: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'requestRef',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'searchType',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'userClass',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReqHead */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReqHead */
/**
 * @summary The Trailing Root Component Types of ReqHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReqHead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReqHead */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReqHead */
/**
 * @summary The Extension Addition Component Types of ReqHead
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReqHead: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReqHead */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReqHead */
let _cached_decoder_for_ReqHead: $.ASN1Decoder<ReqHead> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReqHead */

/* START_OF_SYMBOL_DEFINITION _decode_ReqHead */
/**
 * @summary Decodes an ASN.1 element into a(n) ReqHead
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReqHead} The decoded data structure.
 */
export function _decode_ReqHead(el: _Element) {
  if (!_cached_decoder_for_ReqHead) {
    _cached_decoder_for_ReqHead = function (el: _Element): ReqHead {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let requestRef!: INTEGER;
      let searchType!: SearchType;
      let userClass: OPTIONAL<ReqHead_userClass> =
        ReqHead._default_value_for_userClass;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        requestRef: (_el: _Element): void => {
          requestRef = $._decodeInteger(_el);
        },
        searchType: (_el: _Element): void => {
          searchType = _decode_SearchType(_el);
        },
        userClass: (_el: _Element): void => {
          userClass = _decode_ReqHead_userClass(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ReqHead,
        _extension_additions_list_spec_for_ReqHead,
        _root_component_type_list_2_spec_for_ReqHead,
        undefined
      );
      return new ReqHead /* SEQUENCE_CONSTRUCTOR_CALL */(
        requestRef,
        searchType,
        userClass
      );
    };
  }
  return _cached_decoder_for_ReqHead(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReqHead */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReqHead */
let _cached_encoder_for_ReqHead: $.ASN1Encoder<ReqHead> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReqHead */

/* START_OF_SYMBOL_DEFINITION _encode_ReqHead */
/**
 * @summary Encodes a(n) ReqHead into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReqHead, encoded as an ASN.1 Element.
 */
export function _encode_ReqHead(
  value: ReqHead,
  elGetter: $.ASN1Encoder<ReqHead>
) {
  if (!_cached_encoder_for_ReqHead) {
    _cached_encoder_for_ReqHead = function (
      value: ReqHead,
      elGetter: $.ASN1Encoder<ReqHead>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.requestRef, $.BER),
            /* REQUIRED   */ _encode_SearchType(value.searchType, $.BER),
            /* IF_DEFAULT */ value.userClass === undefined ||
            $.deepEq(value.userClass, ReqHead._default_value_for_userClass)
              ? undefined
              : _encode_ReqHead_userClass(value.userClass, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReqHead(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReqHead */

/* eslint-enable */
