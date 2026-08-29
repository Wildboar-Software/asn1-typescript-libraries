/* eslint-disable */
import {
  OPTIONAL,
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
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.mjs';

/**
 * @summary UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * Aids specification of `BioAPI_UnsubscribeFromGUIEvents`.
 * Abstract values do not occur in any BIP message exchanged
 * between BIP endpoints. Fields must match the corresponding
 * subscribe call. X.1083 §16.23.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsubscribeFromGUIEventsCallParams ::= SEQUENCE {
 *   guiEventSubscriptionUuid        BioAPI-UUID OPTIONAL,
 *   bspUuid                         BioAPI-UUID OPTIONAL,
 *   bspHandle                       BioAPI-HANDLE OPTIONAL,
 *   guiSelectEventHandlerAddress    MemoryAddress,
 *   guiSelectEventHandlerContext    MemoryAddress,
 *   guiStateEventHandlerAddress     MemoryAddress,
 *   guiStateEventHandlerContext     MemoryAddress,
 *   guiProgressEventHandlerAddress  MemoryAddress,
 *   guiProgressEventHandlerContext  MemoryAddress
 * }
 * ```
 *
 */
export class UnsubscribeFromGUIEventsCallParams {
  constructor(
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @description
     *
     * `GUIEventSubscriptionUuid`. Must match the subscribe call
     * (presence and value). X.1083 §16.23.4.1, §16.23.6.
     *
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspUuid`.
     * @description
     *
     * `BSPUuid`. Exactly one of this and `bspHandle` shall be
     * absent (NULL in C). X.1083 §16.23.4.
     *
     * @public
     * @readonly
     */
    readonly bspUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspHandle`.
     * @description
     *
     * `BSPHandle`. Exactly one of this and `bspUuid` shall be
     * absent (NULL in C). X.1083 §16.23.4.
     *
     * @public
     * @readonly
     */
    readonly bspHandle: OPTIONAL<BioAPI_HANDLE>,
    /**
     * @summary `guiSelectEventHandlerAddress`.
     * @description
     *
     * `GUISelectEventHandler`. Must match the address stored at
     * subscribe. Non-zero sets `guiSelectEventSubscribed` TRUE
     * on the wire request. X.1083 §16.23.4.2, §16.23.6,
     * §15.1.7.
     *
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiSelectEventHandlerContext`.
     * @description
     *
     * `GUISelectEventHandlerCtx`. Must match the context stored
     * at subscribe. X.1083 §16.23.4.1, §16.23.6.
     *
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerAddress`.
     * @description
     *
     * `GUIStateEventHandler`. Must match the address stored at
     * subscribe. Non-zero sets `guiStateEventSubscribed` TRUE
     * on the wire request. X.1083 §16.23.4.2, §16.23.6,
     * §15.1.7.
     *
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerContext`.
     * @description
     *
     * `GUIStateEventHandlerCtx`. Must match the context stored
     * at subscribe. X.1083 §16.23.4.1, §16.23.6.
     *
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerAddress`.
     * @description
     *
     * `GUIProgressEventHandler`. Must match the address stored
     * at subscribe. Non-zero sets `guiProgressEventSubscribed`
     * TRUE on the wire request. X.1083 §16.23.4.2, §16.23.6,
     * §15.1.7.
     *
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerContext`.
     * @description
     *
     * `GUIProgressEventHandlerCtx`. Must match the context
     * stored at subscribe. X.1083 §16.23.4.1, §16.23.6.
     *
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a UnsubscribeFromGUIEventsCallParams
   * @description
   *
   * This takes an `object` and converts it to a `UnsubscribeFromGUIEventsCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnsubscribeFromGUIEventsCallParams`.
   * @returns {UnsubscribeFromGUIEventsCallParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof UnsubscribeFromGUIEventsCallParams]: UnsubscribeFromGUIEventsCallParams[_K];
    }
  ): UnsubscribeFromGUIEventsCallParams {
    return new UnsubscribeFromGUIEventsCallParams(
      _o.guiEventSubscriptionUuid,
      _o.bspUuid,
      _o.bspHandle,
      _o.guiSelectEventHandlerAddress,
      _o.guiSelectEventHandlerContext,
      _o.guiStateEventHandlerAddress,
      _o.guiStateEventHandlerContext,
      _o.guiProgressEventHandlerAddress,
      _o.guiProgressEventHandlerContext
    );
  }
}


/**
 * @summary The Leading Root Component Types of UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnsubscribeFromGUIEventsCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspUuid',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'bspHandle',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams: $.ComponentSpec[] = [];


let _cached_decoder_for_UnsubscribeFromGUIEventsCallParams: $.ASN1Decoder<UnsubscribeFromGUIEventsCallParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UnsubscribeFromGUIEventsCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsubscribeFromGUIEventsCallParams} The decoded data structure.
 */
export function _decode_UnsubscribeFromGUIEventsCallParams(el: _Element): UnsubscribeFromGUIEventsCallParams {
  if (!_cached_decoder_for_UnsubscribeFromGUIEventsCallParams) {
    _cached_decoder_for_UnsubscribeFromGUIEventsCallParams = function (
      el: _Element
    ): UnsubscribeFromGUIEventsCallParams {
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspUuid: OPTIONAL<BioAPI_UUID>;
      let bspHandle: OPTIONAL<BioAPI_HANDLE>;
      let guiSelectEventHandlerAddress!: MemoryAddress;
      let guiSelectEventHandlerContext!: MemoryAddress;
      let guiStateEventHandlerAddress!: MemoryAddress;
      let guiStateEventHandlerContext!: MemoryAddress;
      let guiProgressEventHandlerAddress!: MemoryAddress;
      let guiProgressEventHandlerContext!: MemoryAddress;
      const callbacks: $.DecodingMap = {
        guiEventSubscriptionUuid: (_el: _Element): void => {
          guiEventSubscriptionUuid = _decode_BioAPI_UUID(_el);
        },
        bspUuid: (_el: _Element): void => {
          bspUuid = _decode_BioAPI_UUID(_el);
        },
        bspHandle: (_el: _Element): void => {
          bspHandle = _decode_BioAPI_HANDLE(_el);
        },
        guiSelectEventHandlerAddress: (_el: _Element): void => {
          guiSelectEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiSelectEventHandlerContext: (_el: _Element): void => {
          guiSelectEventHandlerContext = _decode_MemoryAddress(_el);
        },
        guiStateEventHandlerAddress: (_el: _Element): void => {
          guiStateEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiStateEventHandlerContext: (_el: _Element): void => {
          guiStateEventHandlerContext = _decode_MemoryAddress(_el);
        },
        guiProgressEventHandlerAddress: (_el: _Element): void => {
          guiProgressEventHandlerAddress = _decode_MemoryAddress(_el);
        },
        guiProgressEventHandlerContext: (_el: _Element): void => {
          guiProgressEventHandlerContext = _decode_MemoryAddress(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UnsubscribeFromGUIEventsCallParams,
        _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams,
        _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams,
        undefined
      );
      return new UnsubscribeFromGUIEventsCallParams (
        guiEventSubscriptionUuid,
        bspUuid,
        bspHandle,
        guiSelectEventHandlerAddress,
        guiSelectEventHandlerContext,
        guiStateEventHandlerAddress,
        guiStateEventHandlerContext,
        guiProgressEventHandlerAddress,
        guiProgressEventHandlerContext
      );
    };
  }
  return _cached_decoder_for_UnsubscribeFromGUIEventsCallParams(el);
}


let _cached_encoder_for_UnsubscribeFromGUIEventsCallParams: $.ASN1Encoder<UnsubscribeFromGUIEventsCallParams> | null = null;


/**
 * @summary Encodes a(n) UnsubscribeFromGUIEventsCallParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsubscribeFromGUIEventsCallParams, encoded as an ASN.1 Element.
 */
export function _encode_UnsubscribeFromGUIEventsCallParams(
  value: UnsubscribeFromGUIEventsCallParams,
  elGetter: $.ASN1Encoder<UnsubscribeFromGUIEventsCallParams>
): _Element {
  if (!_cached_encoder_for_UnsubscribeFromGUIEventsCallParams) {
    _cached_encoder_for_UnsubscribeFromGUIEventsCallParams = function (
      value: UnsubscribeFromGUIEventsCallParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* IF_ABSENT  */ value.bspUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.bspUuid, $.BER),
            /* IF_ABSENT  */ value.bspHandle === undefined
              ? undefined
              : _encode_BioAPI_HANDLE(value.bspHandle, $.BER),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiSelectEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiSelectEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiStateEventHandlerContext,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerAddress,
              $.BER
            ),
            /* REQUIRED   */ _encode_MemoryAddress(
              value.guiProgressEventHandlerContext,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnsubscribeFromGUIEventsCallParams(
    value,
    elGetter
  );
}


/* eslint-enable */
