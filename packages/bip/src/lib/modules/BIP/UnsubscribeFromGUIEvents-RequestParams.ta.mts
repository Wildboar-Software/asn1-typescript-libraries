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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
 * @summary UnsubscribeFromGUIEvents_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsubscribeFromGUIEvents-RequestParams ::= SEQUENCE {
 *   guiEventSubscriptionUuid    BioAPI-UUID OPTIONAL,
 *   bspProductUuid              BioAPI-UUID OPTIONAL,
 *   originalBSPHandle           BioAPI-HANDLE OPTIONAL,
 *   guiSelectEventSubscribed    BOOLEAN,
 *   guiStateEventSubscribed     BOOLEAN,
 *   guiProgressEventSubscribed  BOOLEAN
 * }
 * ```
 *
 */
export class UnsubscribeFromGUIEvents_RequestParams {
  constructor(
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
    readonly bspProductUuid: OPTIONAL<BioAPI_UUID>,
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
   * @summary Restructures an object into a UnsubscribeFromGUIEvents_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `UnsubscribeFromGUIEvents_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnsubscribeFromGUIEvents_RequestParams`.
   * @returns {UnsubscribeFromGUIEvents_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnsubscribeFromGUIEvents_RequestParams]: UnsubscribeFromGUIEvents_RequestParams[_K];
    }
  ): UnsubscribeFromGUIEvents_RequestParams {
    return new UnsubscribeFromGUIEvents_RequestParams(
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
 * @summary The Leading Root Component Types of UnsubscribeFromGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnsubscribeFromGUIEvents_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'guiSelectEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'guiStateEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'guiProgressEventSubscribed',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnsubscribeFromGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnsubscribeFromGUIEvents_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnsubscribeFromGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnsubscribeFromGUIEvents_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnsubscribeFromGUIEvents_RequestParams: $.ASN1Decoder<UnsubscribeFromGUIEvents_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnsubscribeFromGUIEvents_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsubscribeFromGUIEvents_RequestParams} The decoded data structure.
 */
export function _decode_UnsubscribeFromGUIEvents_RequestParams(el: _Element): UnsubscribeFromGUIEvents_RequestParams {
  if (!_cached_decoder_for_UnsubscribeFromGUIEvents_RequestParams) {
    _cached_decoder_for_UnsubscribeFromGUIEvents_RequestParams = function (
      el: _Element
    ): UnsubscribeFromGUIEvents_RequestParams {
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspProductUuid: OPTIONAL<BioAPI_UUID>;
      let originalBSPHandle: OPTIONAL<BioAPI_HANDLE>;
      let guiSelectEventSubscribed!: BOOLEAN;
      let guiStateEventSubscribed!: BOOLEAN;
      let guiProgressEventSubscribed!: BOOLEAN;
      const callbacks: $.DecodingMap = {
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UnsubscribeFromGUIEvents_RequestParams,
        _extension_additions_list_spec_for_UnsubscribeFromGUIEvents_RequestParams,
        _root_component_type_list_2_spec_for_UnsubscribeFromGUIEvents_RequestParams,
        undefined
      );
      return new UnsubscribeFromGUIEvents_RequestParams (
        guiEventSubscriptionUuid,
        bspProductUuid,
        originalBSPHandle,
        guiSelectEventSubscribed,
        guiStateEventSubscribed,
        guiProgressEventSubscribed
      );
    };
  }
  return _cached_decoder_for_UnsubscribeFromGUIEvents_RequestParams(el);
}


let _cached_encoder_for_UnsubscribeFromGUIEvents_RequestParams: $.ASN1Encoder<UnsubscribeFromGUIEvents_RequestParams> | null = null;


/**
 * @summary Encodes a(n) UnsubscribeFromGUIEvents_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsubscribeFromGUIEvents_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_UnsubscribeFromGUIEvents_RequestParams(
  value: UnsubscribeFromGUIEvents_RequestParams,
  elGetter: $.ASN1Encoder<UnsubscribeFromGUIEvents_RequestParams>
): _Element {
  if (!_cached_encoder_for_UnsubscribeFromGUIEvents_RequestParams) {
    _cached_encoder_for_UnsubscribeFromGUIEvents_RequestParams = function (
      value: UnsubscribeFromGUIEvents_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* IF_ABSENT  */ value.bspProductUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
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
  return _cached_encoder_for_UnsubscribeFromGUIEvents_RequestParams(
    value,
    elGetter
  );
}


/* eslint-enable */
