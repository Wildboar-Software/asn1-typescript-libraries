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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.js';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.js';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.js';
import {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.js';
export {
  MemoryAddress,
  _decode_MemoryAddress,
  _encode_MemoryAddress,
} from '../BIP/MemoryAddress.ta.js';

/* START_OF_SYMBOL_DEFINITION UnsubscribeFromGUIEventsCallParams */
/**
 * @summary UnsubscribeFromGUIEventsCallParams
 * @description
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
 * @class
 */
export class UnsubscribeFromGUIEventsCallParams {
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
/* END_OF_SYMBOL_DEFINITION UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnsubscribeFromGUIEventsCallParams */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspUuid',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspHandle',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiSelectEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiStateEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerAddress',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiProgressEventHandlerContext',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams */
/**
 * @summary The Trailing Root Component Types of UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams */
/**
 * @summary The Extension Addition Component Types of UnsubscribeFromGUIEventsCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsubscribeFromGUIEventsCallParams */
let _cached_decoder_for_UnsubscribeFromGUIEventsCallParams: $.ASN1Decoder<UnsubscribeFromGUIEventsCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _decode_UnsubscribeFromGUIEventsCallParams */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsubscribeFromGUIEventsCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsubscribeFromGUIEventsCallParams} The decoded data structure.
 */
export function _decode_UnsubscribeFromGUIEventsCallParams(el: _Element) {
  if (!_cached_decoder_for_UnsubscribeFromGUIEventsCallParams) {
    _cached_decoder_for_UnsubscribeFromGUIEventsCallParams = function (
      el: _Element
    ): UnsubscribeFromGUIEventsCallParams {
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
        _root_component_type_list_1_spec_for_UnsubscribeFromGUIEventsCallParams,
        _extension_additions_list_spec_for_UnsubscribeFromGUIEventsCallParams,
        _root_component_type_list_2_spec_for_UnsubscribeFromGUIEventsCallParams,
        undefined
      );
      return new UnsubscribeFromGUIEventsCallParams /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsubscribeFromGUIEventsCallParams */
let _cached_encoder_for_UnsubscribeFromGUIEventsCallParams: $.ASN1Encoder<UnsubscribeFromGUIEventsCallParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsubscribeFromGUIEventsCallParams */

/* START_OF_SYMBOL_DEFINITION _encode_UnsubscribeFromGUIEventsCallParams */
/**
 * @summary Encodes a(n) UnsubscribeFromGUIEventsCallParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsubscribeFromGUIEventsCallParams, encoded as an ASN.1 Element.
 */
export function _encode_UnsubscribeFromGUIEventsCallParams(
  value: UnsubscribeFromGUIEventsCallParams,
  elGetter: $.ASN1Encoder<UnsubscribeFromGUIEventsCallParams>
) {
  if (!_cached_encoder_for_UnsubscribeFromGUIEventsCallParams) {
    _cached_encoder_for_UnsubscribeFromGUIEventsCallParams = function (
      value: UnsubscribeFromGUIEventsCallParams,
      elGetter: $.ASN1Encoder<UnsubscribeFromGUIEventsCallParams>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_UnsubscribeFromGUIEventsCallParams */

/* eslint-enable */
