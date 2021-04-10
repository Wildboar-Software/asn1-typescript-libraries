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
  Notification,
  _decode_Notification,
  _encode_Notification,
} from '../Uds2/Notification.ta';
export {
  Notification,
  _decode_Notification,
  _encode_Notification,
} from '../Uds2/Notification.ta';

/* START_OF_SYMBOL_DEFINITION SearchResult_notifications */
/**
 * @summary SearchResult_notifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult-notifications ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SearchResult_notifications {
  constructor(
    /**
     * @summary `notification`.
     * @public
     * @readonly
     */
    readonly notification: Notification[]
  ) {}

  /**
   * @summary Restructures an object into a SearchResult_notifications
   * @description
   *
   * This takes an `object` and converts it to a `SearchResult_notifications`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResult_notifications`.
   * @returns {SearchResult_notifications}
   */
  public static _from_object(
    _o: {
      [_K in keyof SearchResult_notifications]: SearchResult_notifications[_K];
    }
  ): SearchResult_notifications {
    return new SearchResult_notifications(_o.notification);
  }
}
/* END_OF_SYMBOL_DEFINITION SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_notifications */
/**
 * @summary The Leading Root Component Types of SearchResult_notifications
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResult_notifications: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'notification',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_notifications */
/**
 * @summary The Trailing Root Component Types of SearchResult_notifications
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResult_notifications: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_notifications */
/**
 * @summary The Extension Addition Component Types of SearchResult_notifications
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResult_notifications: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_notifications */
let _cached_decoder_for_SearchResult_notifications: $.ASN1Decoder<SearchResult_notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult_notifications */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult_notifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult_notifications} The decoded data structure.
 */
export function _decode_SearchResult_notifications(el: _Element) {
  if (!_cached_decoder_for_SearchResult_notifications) {
    _cached_decoder_for_SearchResult_notifications = function (
      el: _Element
    ): SearchResult_notifications {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'SearchResult-notifications contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'notification';
      let notification!: Notification[];
      notification = $._decodeSequenceOf<Notification>(
        () => _decode_Notification
      )(sequence[0]);
      return new SearchResult_notifications(notification);
    };
  }
  return _cached_decoder_for_SearchResult_notifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_notifications */
let _cached_encoder_for_SearchResult_notifications: $.ASN1Encoder<SearchResult_notifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult_notifications */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult_notifications */
/**
 * @summary Encodes a(n) SearchResult_notifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult_notifications, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult_notifications(
  value: SearchResult_notifications,
  elGetter: $.ASN1Encoder<SearchResult_notifications>
) {
  if (!_cached_encoder_for_SearchResult_notifications) {
    _cached_encoder_for_SearchResult_notifications = function (
      value: SearchResult_notifications,
      elGetter: $.ASN1Encoder<SearchResult_notifications>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<Notification>(
              () => _encode_Notification,
              $.BER
            )(value.notification, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchResult_notifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult_notifications */

/* eslint-enable */
