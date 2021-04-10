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
import { Decimal, _decode_Decimal, _encode_Decimal } from '../XSD/Decimal.ta';
export { Decimal, _decode_Decimal, _encode_Decimal } from '../XSD/Decimal.ta';
import {
  ProviderId,
  _decode_ProviderId,
  _encode_ProviderId,
} from '../Uds2/ProviderId.ta';
export {
  ProviderId,
  _decode_ProviderId,
  _encode_ProviderId,
} from '../Uds2/ProviderId.ta';
import {
  SearchResult_information_Item,
  _decode_SearchResult_information_Item,
  _encode_SearchResult_information_Item,
} from '../Uds2/SearchResult-information-Item.ta';
export {
  SearchResult_information_Item,
  _decode_SearchResult_information_Item,
  _encode_SearchResult_information_Item,
} from '../Uds2/SearchResult-information-Item.ta';
import {
  SearchResult_entryCount,
  _decode_SearchResult_entryCount,
  _encode_SearchResult_entryCount,
} from '../Uds2/SearchResult-entryCount.ta';
export {
  SearchResult_entryCount,
  _decode_SearchResult_entryCount,
  _encode_SearchResult_entryCount,
} from '../Uds2/SearchResult-entryCount.ta';
import {
  SearchResult_notifications,
  _decode_SearchResult_notifications,
  _encode_SearchResult_notifications,
} from '../Uds2/SearchResult-notifications.ta';
export {
  SearchResult_notifications,
  _decode_SearchResult_notifications,
  _encode_SearchResult_notifications,
} from '../Uds2/SearchResult-notifications.ta';

/* START_OF_SYMBOL_DEFINITION SearchResult */
/**
 * @summary SearchResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult ::= SEQUENCE {
 *   msgCode         Decimal OPTIONAL,
 *   queryReference  OCTET STRING OPTIONAL,
 *   performer       ProviderId OPTIONAL,
 *   information
 *     SEQUENCE (SIZE (1..MAX)) OF
 *       CHOICE {hierarchy
 *                 SEQUENCE {entries      INTEGER(1..MAX) OPTIONAL,
 *                           firsteEntry  INTEGER(1..MAX) DEFAULT 1,
 *                           entry        SEQUENCE (SIZE (1..MAX)) OF Entry
 *               },
 *               entry      SEQUENCE {hierSeq  INTEGER OPTIONAL,
 *                                    base     Entry}} OPTIONAL,
 *   entryCount
 *     SEQUENCE {count      INTEGER(1..MAX) OPTIONAL,
 *               qualifier  ENUMERATED {exact, bestEstimate} OPTIONAL} OPTIONAL,
 *   notifications
 *     SEQUENCE {notification  SEQUENCE (SIZE (1..MAX)) OF Notification} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SearchResult {
  constructor(
    /**
     * @summary `msgCode`.
     * @public
     * @readonly
     */
    readonly msgCode: OPTIONAL<Decimal>,
    /**
     * @summary `queryReference`.
     * @public
     * @readonly
     */
    readonly queryReference: OPTIONAL<OCTET_STRING>,
    /**
     * @summary `performer`.
     * @public
     * @readonly
     */
    readonly performer: OPTIONAL<ProviderId>,
    /**
     * @summary `information`.
     * @public
     * @readonly
     */
    readonly information: OPTIONAL<SearchResult_information_Item[]>,
    /**
     * @summary `entryCount`.
     * @public
     * @readonly
     */
    readonly entryCount: OPTIONAL<SearchResult_entryCount>,
    /**
     * @summary `notifications`.
     * @public
     * @readonly
     */
    readonly notifications: OPTIONAL<SearchResult_notifications>
  ) {}

  /**
   * @summary Restructures an object into a SearchResult
   * @description
   *
   * This takes an `object` and converts it to a `SearchResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SearchResult`.
   * @returns {SearchResult}
   */
  public static _from_object(
    _o: { [_K in keyof SearchResult]: SearchResult[_K] }
  ): SearchResult {
    return new SearchResult(
      _o.msgCode,
      _o.queryReference,
      _o.performer,
      _o.information,
      _o.entryCount,
      _o.notifications
    );
  }
}
/* END_OF_SYMBOL_DEFINITION SearchResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult */
/**
 * @summary The Leading Root Component Types of SearchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchResult: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'msgCode',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'queryReference',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'performer',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'information',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'entryCount',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'notifications',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult */
/**
 * @summary The Trailing Root Component Types of SearchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult */
/**
 * @summary The Extension Addition Component Types of SearchResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult */
let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult} The decoded data structure.
 */
export function _decode_SearchResult(el: _Element) {
  if (!_cached_decoder_for_SearchResult) {
    _cached_decoder_for_SearchResult = function (el: _Element): SearchResult {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let msgCode: OPTIONAL<Decimal>;
      let queryReference: OPTIONAL<OCTET_STRING>;
      let performer: OPTIONAL<ProviderId>;
      let information: OPTIONAL<SearchResult_information_Item[]>;
      let entryCount: OPTIONAL<SearchResult_entryCount>;
      let notifications: OPTIONAL<SearchResult_notifications>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        msgCode: (_el: _Element): void => {
          msgCode = _decode_Decimal(_el);
        },
        queryReference: (_el: _Element): void => {
          queryReference = $._decodeOctetString(_el);
        },
        performer: (_el: _Element): void => {
          performer = _decode_ProviderId(_el);
        },
        information: (_el: _Element): void => {
          information = $._decodeSequenceOf<SearchResult_information_Item>(
            () => _decode_SearchResult_information_Item
          )(_el);
        },
        entryCount: (_el: _Element): void => {
          entryCount = _decode_SearchResult_entryCount(_el);
        },
        notifications: (_el: _Element): void => {
          notifications = _decode_SearchResult_notifications(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SearchResult,
        _extension_additions_list_spec_for_SearchResult,
        _root_component_type_list_2_spec_for_SearchResult,
        undefined
      );
      return new SearchResult /* SEQUENCE_CONSTRUCTOR_CALL */(
        msgCode,
        queryReference,
        performer,
        information,
        entryCount,
        notifications
      );
    };
  }
  return _cached_decoder_for_SearchResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult */
let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult */
/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult(
  value: SearchResult,
  elGetter: $.ASN1Encoder<SearchResult>
) {
  if (!_cached_encoder_for_SearchResult) {
    _cached_encoder_for_SearchResult = function (
      value: SearchResult,
      elGetter: $.ASN1Encoder<SearchResult>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.msgCode === undefined
              ? undefined
              : _encode_Decimal(value.msgCode, $.BER),
            /* IF_ABSENT  */ value.queryReference === undefined
              ? undefined
              : $._encodeOctetString(value.queryReference, $.BER),
            /* IF_ABSENT  */ value.performer === undefined
              ? undefined
              : _encode_ProviderId(value.performer, $.BER),
            /* IF_ABSENT  */ value.information === undefined
              ? undefined
              : $._encodeSequenceOf<SearchResult_information_Item>(
                  () => _encode_SearchResult_information_Item,
                  $.BER
                )(value.information, $.BER),
            /* IF_ABSENT  */ value.entryCount === undefined
              ? undefined
              : _encode_SearchResult_entryCount(value.entryCount, $.BER),
            /* IF_ABSENT  */ value.notifications === undefined
              ? undefined
              : _encode_SearchResult_notifications(value.notifications, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SearchResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult */

/* eslint-enable */
