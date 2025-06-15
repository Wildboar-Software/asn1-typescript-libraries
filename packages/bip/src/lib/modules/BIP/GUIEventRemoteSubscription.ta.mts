/* eslint-disable */
import {
  OPTIONAL,
  BOOLEAN,
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
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary GUIEventRemoteSubscription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIEventRemoteSubscription ::= SEQUENCE {
 *   subscriberEndpointIRI       EndpointIRI,
 *   guiEventSubscriptionUuid    BioAPI-UUID OPTIONAL,
 *   bspProductUuid              BioAPI-UUID,
 *   originalBSPHandle           BioAPI-HANDLE OPTIONAL,
 *   guiSelectEventSubscribed    BOOLEAN,
 *   guiStateEventSubscribed     BOOLEAN,
 *   guiProgressEventSubscribed  BOOLEAN
 * }
 * ```
 *
 * @class
 */
export class GUIEventRemoteSubscription {
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
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: OPTIONAL<BioAPI_HANDLE>,
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
   * @summary Restructures an object into a GUIEventRemoteSubscription
   * @description
   *
   * This takes an `object` and converts it to a `GUIEventRemoteSubscription`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIEventRemoteSubscription`.
   * @returns {GUIEventRemoteSubscription}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIEventRemoteSubscription]: GUIEventRemoteSubscription[_K];
    }
  ): GUIEventRemoteSubscription {
    return new GUIEventRemoteSubscription(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.bspProductUuid,
      _o.originalBSPHandle,
      _o.guiSelectEventSubscribed,
      _o.guiStateEventSubscribed,
      _o.guiProgressEventSubscribed
    );
  }
}


/**
 * @summary The Leading Root Component Types of GUIEventRemoteSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIEventRemoteSubscription: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'subscriberEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiSelectEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiStateEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiProgressEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of GUIEventRemoteSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIEventRemoteSubscription: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GUIEventRemoteSubscription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIEventRemoteSubscription: $.ComponentSpec[] = [];


let _cached_decoder_for_GUIEventRemoteSubscription: $.ASN1Decoder<GUIEventRemoteSubscription> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIEventRemoteSubscription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIEventRemoteSubscription} The decoded data structure.
 */
export function _decode_GUIEventRemoteSubscription(el: _Element) {
  if (!_cached_decoder_for_GUIEventRemoteSubscription) {
    _cached_decoder_for_GUIEventRemoteSubscription = function (
      el: _Element
    ): GUIEventRemoteSubscription {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspProductUuid!: BioAPI_UUID;
      let originalBSPHandle: OPTIONAL<BioAPI_HANDLE>;
      let guiSelectEventSubscribed!: BOOLEAN;
      let guiStateEventSubscribed!: BOOLEAN;
      let guiProgressEventSubscribed!: BOOLEAN;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        subscriberEndpointIRI: (_el: _Element): void => {
          subscriberEndpointIRI = _decode_EndpointIRI(_el);
        },
        guiEventSubscriptionUuid: (_el: _Element): void => {
          guiEventSubscriptionUuid = _decode_BioAPI_UUID(_el);
        },
        bspProductUuid: (_el: _Element): void => {
          bspProductUuid = _decode_BioAPI_UUID(_el);
        },
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
        },
        guiSelectEventSubscribed: (_el: _Element): void => {
          guiSelectEventSubscribed = $._decodeBoolean(_el);
        },
        guiStateEventSubscribed: (_el: _Element): void => {
          guiStateEventSubscribed = $._decodeBoolean(_el);
        },
        guiProgressEventSubscribed: (_el: _Element): void => {
          guiProgressEventSubscribed = $._decodeBoolean(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUIEventRemoteSubscription,
        _extension_additions_list_spec_for_GUIEventRemoteSubscription,
        _root_component_type_list_2_spec_for_GUIEventRemoteSubscription,
        undefined
      );
      return new GUIEventRemoteSubscription /* SEQUENCE_CONSTRUCTOR_CALL */(
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        bspProductUuid,
        originalBSPHandle,
        guiSelectEventSubscribed,
        guiStateEventSubscribed,
        guiProgressEventSubscribed
      );
    };
  }
  return _cached_decoder_for_GUIEventRemoteSubscription(el);
}


let _cached_encoder_for_GUIEventRemoteSubscription: $.ASN1Encoder<GUIEventRemoteSubscription> | null = null;


/**
 * @summary Encodes a(n) GUIEventRemoteSubscription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIEventRemoteSubscription, encoded as an ASN.1 Element.
 */
export function _encode_GUIEventRemoteSubscription(
  value: GUIEventRemoteSubscription,
  elGetter: $.ASN1Encoder<GUIEventRemoteSubscription>
) {
  if (!_cached_encoder_for_GUIEventRemoteSubscription) {
    _cached_encoder_for_GUIEventRemoteSubscription = function (
      value: GUIEventRemoteSubscription    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.subscriberEndpointIRI,
              $.BER
            ),
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* IF_ABSENT  */ value.originalBSPHandle === undefined
              ? undefined
              : _encode_BioAPI_HANDLE(value.originalBSPHandle, $.BER),
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
  return _cached_encoder_for_GUIEventRemoteSubscription(value, elGetter);
}


/* eslint-enable */
