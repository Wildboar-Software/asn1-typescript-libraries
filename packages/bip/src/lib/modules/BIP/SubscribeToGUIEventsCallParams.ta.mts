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
} from 'asn1-ts';
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
 * @summary SubscribeToGUIEventsCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscribeToGUIEventsCallParams ::= SEQUENCE {
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
 * @class
 */
export class SubscribeToGUIEventsCallParams {
  constructor(
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspUuid`.
     * @public
     * @readonly
     */
    readonly bspUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `bspHandle`.
     * @public
     * @readonly
     */
    readonly bspHandle: OPTIONAL<BioAPI_HANDLE>,
    /**
     * @summary `guiSelectEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiSelectEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiSelectEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiStateEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiStateEventHandlerContext: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerAddress`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerAddress: MemoryAddress,
    /**
     * @summary `guiProgressEventHandlerContext`.
     * @public
     * @readonly
     */
    readonly guiProgressEventHandlerContext: MemoryAddress
  ) {}

  /**
   * @summary Restructures an object into a SubscribeToGUIEventsCallParams
   * @description
   *
   * This takes an `object` and converts it to a `SubscribeToGUIEventsCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubscribeToGUIEventsCallParams`.
   * @returns {SubscribeToGUIEventsCallParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof SubscribeToGUIEventsCallParams]: SubscribeToGUIEventsCallParams[_K];
    }
  ): SubscribeToGUIEventsCallParams {
    return new SubscribeToGUIEventsCallParams(
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
 * @summary The Leading Root Component Types of SubscribeToGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubscribeToGUIEventsCallParams: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of SubscribeToGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubscribeToGUIEventsCallParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SubscribeToGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubscribeToGUIEventsCallParams: $.ComponentSpec[] = [];


let _cached_decoder_for_SubscribeToGUIEventsCallParams: $.ASN1Decoder<SubscribeToGUIEventsCallParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SubscribeToGUIEventsCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscribeToGUIEventsCallParams} The decoded data structure.
 */
export function _decode_SubscribeToGUIEventsCallParams(el: _Element) {
  if (!_cached_decoder_for_SubscribeToGUIEventsCallParams) {
    _cached_decoder_for_SubscribeToGUIEventsCallParams = function (
      el: _Element
    ): SubscribeToGUIEventsCallParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspUuid: OPTIONAL<BioAPI_UUID>;
      let bspHandle: OPTIONAL<BioAPI_HANDLE>;
      let guiSelectEventHandlerAddress!: MemoryAddress;
      let guiSelectEventHandlerContext!: MemoryAddress;
      let guiStateEventHandlerAddress!: MemoryAddress;
      let guiStateEventHandlerContext!: MemoryAddress;
      let guiProgressEventHandlerAddress!: MemoryAddress;
      let guiProgressEventHandlerContext!: MemoryAddress;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubscribeToGUIEventsCallParams,
        _extension_additions_list_spec_for_SubscribeToGUIEventsCallParams,
        _root_component_type_list_2_spec_for_SubscribeToGUIEventsCallParams,
        undefined
      );
      return new SubscribeToGUIEventsCallParams /* SEQUENCE_CONSTRUCTOR_CALL */(
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
  return _cached_decoder_for_SubscribeToGUIEventsCallParams(el);
}


let _cached_encoder_for_SubscribeToGUIEventsCallParams: $.ASN1Encoder<SubscribeToGUIEventsCallParams> | null = null;


/**
 * @summary Encodes a(n) SubscribeToGUIEventsCallParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribeToGUIEventsCallParams, encoded as an ASN.1 Element.
 */
export function _encode_SubscribeToGUIEventsCallParams(
  value: SubscribeToGUIEventsCallParams,
  elGetter: $.ASN1Encoder<SubscribeToGUIEventsCallParams>
) {
  if (!_cached_encoder_for_SubscribeToGUIEventsCallParams) {
    _cached_encoder_for_SubscribeToGUIEventsCallParams = function (
      value: SubscribeToGUIEventsCallParams    ): _Element {
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
  return _cached_encoder_for_SubscribeToGUIEventsCallParams(value, elGetter);
}


/* eslint-enable */
