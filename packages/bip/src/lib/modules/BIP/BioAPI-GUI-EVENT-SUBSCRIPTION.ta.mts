/* eslint-disable */
import {
  BOOLEAN,
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
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';

/**
 * @summary BioAPI_GUI_EVENT_SUBSCRIPTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-GUI-EVENT-SUBSCRIPTION ::= SEQUENCE {
 *   subscriberEndpointIRI       EndpointIRI,
 *   guiEventSubscriptionUuid    BioAPI-UUID,
 *   guiSelectEventSubscribed    BOOLEAN,
 *   guiStateEventSubscribed     BOOLEAN,
 *   guiProgressEventSubscribed  BOOLEAN
 * }
 * ```
 *
 */
export class BioAPI_GUI_EVENT_SUBSCRIPTION {
  constructor(
    /**
     * @summary `subscriberEndpointIRI`.
     * @public
     * @readonly
     */
    readonly subscriberEndpointIRI: EndpointIRI,
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: BioAPI_UUID,
    /**
     * @summary `guiSelectEventSubscribed`.
     * @public
     * @readonly
     */
    readonly guiSelectEventSubscribed: BOOLEAN,
    /**
     * @summary `guiStateEventSubscribed`.
     * @public
     * @readonly
     */
    readonly guiStateEventSubscribed: BOOLEAN,
    /**
     * @summary `guiProgressEventSubscribed`.
     * @public
     * @readonly
     */
    readonly guiProgressEventSubscribed: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_GUI_EVENT_SUBSCRIPTION
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_GUI_EVENT_SUBSCRIPTION`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_GUI_EVENT_SUBSCRIPTION`.
   * @returns {BioAPI_GUI_EVENT_SUBSCRIPTION}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_GUI_EVENT_SUBSCRIPTION]: BioAPI_GUI_EVENT_SUBSCRIPTION[_K];
    }
  ): BioAPI_GUI_EVENT_SUBSCRIPTION {
    return new BioAPI_GUI_EVENT_SUBSCRIPTION(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.guiSelectEventSubscribed,
      _o.guiStateEventSubscribed,
      _o.guiProgressEventSubscribed
    );
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_GUI_EVENT_SUBSCRIPTION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_GUI_EVENT_SUBSCRIPTION: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'subscriberEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'guiSelectEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'guiStateEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'guiProgressEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_GUI_EVENT_SUBSCRIPTION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_GUI_EVENT_SUBSCRIPTION: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_GUI_EVENT_SUBSCRIPTION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_GUI_EVENT_SUBSCRIPTION: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION: $.ASN1Decoder<BioAPI_GUI_EVENT_SUBSCRIPTION> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_GUI_EVENT_SUBSCRIPTION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_GUI_EVENT_SUBSCRIPTION} The decoded data structure.
 */
export function _decode_BioAPI_GUI_EVENT_SUBSCRIPTION(el: _Element): BioAPI_GUI_EVENT_SUBSCRIPTION {
  if (!_cached_decoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION) {
    _cached_decoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION = function (
      el: _Element
    ): BioAPI_GUI_EVENT_SUBSCRIPTION {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'BioAPI-GUI-EVENT-SUBSCRIPTION contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'subscriberEndpointIRI';
      sequence[1].name = 'guiEventSubscriptionUuid';
      sequence[2].name = 'guiSelectEventSubscribed';
      sequence[3].name = 'guiStateEventSubscribed';
      sequence[4].name = 'guiProgressEventSubscribed';
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid!: BioAPI_UUID;
      let guiSelectEventSubscribed!: BOOLEAN;
      let guiStateEventSubscribed!: BOOLEAN;
      let guiProgressEventSubscribed!: BOOLEAN;
      subscriberEndpointIRI = _decode_EndpointIRI(sequence[0]);
      guiEventSubscriptionUuid = _decode_BioAPI_UUID(sequence[1]);
      guiSelectEventSubscribed = $._decodeBoolean(sequence[2]);
      guiStateEventSubscribed = $._decodeBoolean(sequence[3]);
      guiProgressEventSubscribed = $._decodeBoolean(sequence[4]);
      return new BioAPI_GUI_EVENT_SUBSCRIPTION(
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        guiSelectEventSubscribed,
        guiStateEventSubscribed,
        guiProgressEventSubscribed
      );
    };
  }
  return _cached_decoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION(el);
}


let _cached_encoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION: $.ASN1Encoder<BioAPI_GUI_EVENT_SUBSCRIPTION> | null = null;


/**
 * @summary Encodes a(n) BioAPI_GUI_EVENT_SUBSCRIPTION into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_GUI_EVENT_SUBSCRIPTION, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_GUI_EVENT_SUBSCRIPTION(
  value: BioAPI_GUI_EVENT_SUBSCRIPTION,
  elGetter: $.ASN1Encoder<BioAPI_GUI_EVENT_SUBSCRIPTION>
): _Element {
  if (!_cached_encoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION) {
    _cached_encoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION = function (
      value: BioAPI_GUI_EVENT_SUBSCRIPTION    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.subscriberEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_UUID(
              value.guiEventSubscriptionUuid,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiSelectEventSubscribed,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiStateEventSubscribed,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiProgressEventSubscribed,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_GUI_EVENT_SUBSCRIPTION(value, elGetter);
}


/* eslint-enable */
