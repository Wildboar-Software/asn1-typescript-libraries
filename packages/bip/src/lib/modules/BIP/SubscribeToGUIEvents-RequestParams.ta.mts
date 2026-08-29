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
 * @summary SubscribeToGUIEvents_RequestParams
 * @description
 *
 * Parameters of a `subscribeToGUIEvents` request BIP message
 * (master→slave) for `BioAPI_SubscribeToGUIEvents`. Handler
 * callback addresses and contexts are local `MemoryAddress`
 * values and are omitted from the PDU; only the three
 * subscribed flags travel on the wire. Exactly one of
 * `bspProductUuid` and `originalBSPHandle` shall be present
 * (both present: `BioAPIERR_UUID_AND_HANDLE_BOTH_PRESENT`;
 * both absent: `BioAPIERR_UUID_AND_HANDLE_BOTH_ABSENT`).
 * X.1083 §16.22, §8.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscribeToGUIEvents-RequestParams ::= SEQUENCE {
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
export class SubscribeToGUIEvents_RequestParams {
  constructor(
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @description
     *
     * UUID of a secondary GUI-event subscription. Absent for a
     * primary subscription (ISO/IEC 19784-1 does not pass a
     * UUID for primary GUI callbacks). C `NULL` ↔ absent
     * (clause 19). X.1083 §16.22, §8.3.
     *
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspProductUuid`.
     * @description
     *
     * Product UUID of the BSP whose GUI events are subscribed.
     * Mutually exclusive with `originalBSPHandle`. Resolved
     * from BioAPI `BSPUuid` via clause 23/25 (product UUID,
     * not access UUID). C `NULL` ↔ absent (clause 19).
     * X.1083 §16.22.
     *
     * @public
     * @readonly
     */
    readonly bspProductUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `originalBSPHandle`.
     * @description
     *
     * Attach-session handle on the hosting (slave) endpoint.
     * Mutually exclusive with `bspProductUuid`. BioAPI
     * `BSPHandle` is rewritten via clauses 24 and 26. C `NULL`
     * ↔ absent (clause 19). X.1083 §16.22.
     *
     * @public
     * @readonly
     */
    readonly originalBSPHandle: OPTIONAL<BioAPI_HANDLE>,
    /**
     * @summary `guiSelectEventSubscribed`.
     * @description
     *
     * `TRUE` if the caller supplied a GUI select-event handler
     * (non-zero handler address). The address itself is local
     * and omitted from the PDU. X.1083 §16.22.4.2.
     *
     * @public
     * @readonly
     */
    readonly guiSelectEventSubscribed: BOOLEAN,
    /**
     * @summary `guiStateEventSubscribed`.
     * @description
     *
     * `TRUE` if the caller supplied a GUI state-event handler
     * (non-zero handler address). The address itself is local
     * and omitted from the PDU. X.1083 §16.22.4.2.
     *
     * @public
     * @readonly
     */
    readonly guiStateEventSubscribed: BOOLEAN,
    /**
     * @summary `guiProgressEventSubscribed`.
     * @description
     *
     * `TRUE` if the caller supplied a GUI progress-event
     * handler (non-zero handler address). The address itself
     * is local and omitted from the PDU. X.1083 §16.22.4.2.
     *
     * @public
     * @readonly
     */
    readonly guiProgressEventSubscribed: BOOLEAN
  ) {}

  /**
   * @summary Restructures an object into a SubscribeToGUIEvents_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `SubscribeToGUIEvents_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubscribeToGUIEvents_RequestParams`.
   * @returns {SubscribeToGUIEvents_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof SubscribeToGUIEvents_RequestParams]: SubscribeToGUIEvents_RequestParams[_K];
    }
  ): SubscribeToGUIEvents_RequestParams {
    return new SubscribeToGUIEvents_RequestParams(
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
 * @summary The Leading Root Component Types of SubscribeToGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubscribeToGUIEvents_RequestParams: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of SubscribeToGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubscribeToGUIEvents_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SubscribeToGUIEvents_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubscribeToGUIEvents_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_SubscribeToGUIEvents_RequestParams: $.ASN1Decoder<SubscribeToGUIEvents_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SubscribeToGUIEvents_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscribeToGUIEvents_RequestParams} The decoded data structure.
 */
export function _decode_SubscribeToGUIEvents_RequestParams(el: _Element): SubscribeToGUIEvents_RequestParams {
  if (!_cached_decoder_for_SubscribeToGUIEvents_RequestParams) {
    _cached_decoder_for_SubscribeToGUIEvents_RequestParams = function (
      el: _Element
    ): SubscribeToGUIEvents_RequestParams {
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
        _root_component_type_list_1_spec_for_SubscribeToGUIEvents_RequestParams,
        _extension_additions_list_spec_for_SubscribeToGUIEvents_RequestParams,
        _root_component_type_list_2_spec_for_SubscribeToGUIEvents_RequestParams,
        undefined
      );
      return new SubscribeToGUIEvents_RequestParams (
        guiEventSubscriptionUuid,
        bspProductUuid,
        originalBSPHandle,
        guiSelectEventSubscribed,
        guiStateEventSubscribed,
        guiProgressEventSubscribed
      );
    };
  }
  return _cached_decoder_for_SubscribeToGUIEvents_RequestParams(el);
}


let _cached_encoder_for_SubscribeToGUIEvents_RequestParams: $.ASN1Encoder<SubscribeToGUIEvents_RequestParams> | null = null;


/**
 * @summary Encodes a(n) SubscribeToGUIEvents_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribeToGUIEvents_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_SubscribeToGUIEvents_RequestParams(
  value: SubscribeToGUIEvents_RequestParams,
  elGetter: $.ASN1Encoder<SubscribeToGUIEvents_RequestParams>
): _Element {
  if (!_cached_encoder_for_SubscribeToGUIEvents_RequestParams) {
    _cached_encoder_for_SubscribeToGUIEvents_RequestParams = function (
      value: SubscribeToGUIEvents_RequestParams    ): _Element {
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
  return _cached_encoder_for_SubscribeToGUIEvents_RequestParams(
    value,
    elGetter
  );
}


/* eslint-enable */
