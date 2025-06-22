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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
  BioAPI_GUI_EVENT_SUBSCRIPTION,
  _decode_BioAPI_GUI_EVENT_SUBSCRIPTION,
  _encode_BioAPI_GUI_EVENT_SUBSCRIPTION,
} from '../BIP/BioAPI-GUI-EVENT-SUBSCRIPTION.ta.mjs';

/**
 * @summary QueryGUIEventSubscriptions_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QueryGUIEventSubscriptions-ResponseParams ::= SEQUENCE {
 *   guiEventSubscriptions
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF subscription
 *       BioAPI-GUI-EVENT-SUBSCRIPTION
 * }
 * ```
 *
 * @class
 */
export class QueryGUIEventSubscriptions_ResponseParams {
  constructor(
    /**
     * @summary `guiEventSubscriptions`.
     * @public
     * @readonly
     */
    readonly guiEventSubscriptions: BioAPI_GUI_EVENT_SUBSCRIPTION[]
  ) {}

  /**
   * @summary Restructures an object into a QueryGUIEventSubscriptions_ResponseParams
   * @description
   *
   * This takes an `object` and converts it to a `QueryGUIEventSubscriptions_ResponseParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `QueryGUIEventSubscriptions_ResponseParams`.
   * @returns {QueryGUIEventSubscriptions_ResponseParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof QueryGUIEventSubscriptions_ResponseParams]: QueryGUIEventSubscriptions_ResponseParams[_K];
    }
  ): QueryGUIEventSubscriptions_ResponseParams {
    return new QueryGUIEventSubscriptions_ResponseParams(
      _o.guiEventSubscriptions
    );
  }
}


/**
 * @summary The Leading Root Component Types of QueryGUIEventSubscriptions_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QueryGUIEventSubscriptions_ResponseParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiEventSubscriptions',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of QueryGUIEventSubscriptions_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QueryGUIEventSubscriptions_ResponseParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of QueryGUIEventSubscriptions_ResponseParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QueryGUIEventSubscriptions_ResponseParams: $.ComponentSpec[] = [];


let _cached_decoder_for_QueryGUIEventSubscriptions_ResponseParams: $.ASN1Decoder<QueryGUIEventSubscriptions_ResponseParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QueryGUIEventSubscriptions_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QueryGUIEventSubscriptions_ResponseParams} The decoded data structure.
 */
export function _decode_QueryGUIEventSubscriptions_ResponseParams(
  el: _Element
) {
  if (!_cached_decoder_for_QueryGUIEventSubscriptions_ResponseParams) {
    _cached_decoder_for_QueryGUIEventSubscriptions_ResponseParams = function (
      el: _Element
    ): QueryGUIEventSubscriptions_ResponseParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'QueryGUIEventSubscriptions-ResponseParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'guiEventSubscriptions';
      let guiEventSubscriptions!: BioAPI_GUI_EVENT_SUBSCRIPTION[];
      guiEventSubscriptions = $._decodeSequenceOf<BioAPI_GUI_EVENT_SUBSCRIPTION>(
        () => _decode_BioAPI_GUI_EVENT_SUBSCRIPTION
      )(sequence[0]);
      return new QueryGUIEventSubscriptions_ResponseParams(
        guiEventSubscriptions
      );
    };
  }
  return _cached_decoder_for_QueryGUIEventSubscriptions_ResponseParams(el);
}


let _cached_encoder_for_QueryGUIEventSubscriptions_ResponseParams: $.ASN1Encoder<QueryGUIEventSubscriptions_ResponseParams> | null = null;


/**
 * @summary Encodes a(n) QueryGUIEventSubscriptions_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueryGUIEventSubscriptions_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_QueryGUIEventSubscriptions_ResponseParams(
  value: QueryGUIEventSubscriptions_ResponseParams,
  elGetter: $.ASN1Encoder<QueryGUIEventSubscriptions_ResponseParams>
) {
  if (!_cached_encoder_for_QueryGUIEventSubscriptions_ResponseParams) {
    _cached_encoder_for_QueryGUIEventSubscriptions_ResponseParams = function (
      value: QueryGUIEventSubscriptions_ResponseParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_GUI_EVENT_SUBSCRIPTION>(
              () => _encode_BioAPI_GUI_EVENT_SUBSCRIPTION,
              $.BER
            )(value.guiEventSubscriptions, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_QueryGUIEventSubscriptions_ResponseParams(
    value,
    elGetter
  );
}


/* eslint-enable */
