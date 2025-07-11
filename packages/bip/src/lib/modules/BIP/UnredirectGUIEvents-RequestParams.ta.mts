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
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary UnredirectGUIEvents_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnredirectGUIEvents-RequestParams ::= SEQUENCE {
 *   subscriberEndpointIRI       EndpointIRI,
 *   guiEventSubscriptionUuid    BioAPI-UUID,
 *   originalBSPHandle           BioAPI-HANDLE,
 *   guiSelectEventRedirected    BOOLEAN,
 *   guiStateEventRedirected     BOOLEAN,
 *   guiProgressEventRedirected  BOOLEAN
 * }
 * ```
 *
 */
export class UnredirectGUIEvents_RequestParams {
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
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE,
    /**
     * @summary `guiSelectEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiSelectEventRedirected: BOOLEAN,
    /**
     * @summary `guiStateEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiStateEventRedirected: BOOLEAN,
    /**
     * @summary `guiProgressEventRedirected`.
     * @public
     * @readonly
     */
    readonly guiProgressEventRedirected: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a UnredirectGUIEvents_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `UnredirectGUIEvents_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnredirectGUIEvents_RequestParams`.
   * @returns {UnredirectGUIEvents_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnredirectGUIEvents_RequestParams]: UnredirectGUIEvents_RequestParams[_K];
    }
  ): UnredirectGUIEvents_RequestParams {
    return new UnredirectGUIEvents_RequestParams(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.originalBSPHandle,
      _o.guiSelectEventRedirected,
      _o.guiStateEventRedirected,
      _o.guiProgressEventRedirected
    );
  }
}


/**
 * @summary The Leading Root Component Types of UnredirectGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnredirectGUIEvents_RequestParams: $.ComponentSpec[] = [
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
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'guiSelectEventRedirected',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'guiStateEventRedirected',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'guiProgressEventRedirected',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnredirectGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnredirectGUIEvents_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnredirectGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnredirectGUIEvents_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnredirectGUIEvents_RequestParams: $.ASN1Decoder<UnredirectGUIEvents_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnredirectGUIEvents_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnredirectGUIEvents_RequestParams} The decoded data structure.
 */
export function _decode_UnredirectGUIEvents_RequestParams(el: _Element): UnredirectGUIEvents_RequestParams {
  if (!_cached_decoder_for_UnredirectGUIEvents_RequestParams) {
    _cached_decoder_for_UnredirectGUIEvents_RequestParams = function (
      el: _Element
    ): UnredirectGUIEvents_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 6) {
        throw new _ConstructionError(
          'UnredirectGUIEvents-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'subscriberEndpointIRI';
      sequence[1].name = 'guiEventSubscriptionUuid';
      sequence[2].name = 'originalBSPHandle';
      sequence[3].name = 'guiSelectEventRedirected';
      sequence[4].name = 'guiStateEventRedirected';
      sequence[5].name = 'guiProgressEventRedirected';
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid!: BioAPI_UUID;
      let originalBSPHandle!: BioAPI_HANDLE;
      let guiSelectEventRedirected!: BOOLEAN;
      let guiStateEventRedirected!: BOOLEAN;
      let guiProgressEventRedirected!: BOOLEAN;
      subscriberEndpointIRI = _decode_EndpointIRI(sequence[0]);
      guiEventSubscriptionUuid = _decode_BioAPI_UUID(sequence[1]);
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[2]);
      guiSelectEventRedirected = $._decodeBoolean(sequence[3]);
      guiStateEventRedirected = $._decodeBoolean(sequence[4]);
      guiProgressEventRedirected = $._decodeBoolean(sequence[5]);
      return new UnredirectGUIEvents_RequestParams(
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        originalBSPHandle,
        guiSelectEventRedirected,
        guiStateEventRedirected,
        guiProgressEventRedirected
      );
    };
  }
  return _cached_decoder_for_UnredirectGUIEvents_RequestParams(el);
}


let _cached_encoder_for_UnredirectGUIEvents_RequestParams: $.ASN1Encoder<UnredirectGUIEvents_RequestParams> | null = null;


/**
 * @summary Encodes a(n) UnredirectGUIEvents_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnredirectGUIEvents_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_UnredirectGUIEvents_RequestParams(
  value: UnredirectGUIEvents_RequestParams,
  elGetter: $.ASN1Encoder<UnredirectGUIEvents_RequestParams>
): _Element {
  if (!_cached_encoder_for_UnredirectGUIEvents_RequestParams) {
    _cached_encoder_for_UnredirectGUIEvents_RequestParams = function (
      value: UnredirectGUIEvents_RequestParams    ): _Element {
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
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiSelectEventRedirected,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiStateEventRedirected,
              $.BER
            ),
            /* REQUIRED   */ $._encodeBoolean(
              value.guiProgressEventRedirected,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnredirectGUIEvents_RequestParams(value, elGetter);
}


/* eslint-enable */
