/* eslint-disable */
import {
  OPTIONAL,
  UTF8String,
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
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
import {
  BioAPI_GUI_SUBOPERATION,
  _enum_for_BioAPI_GUI_SUBOPERATION,
  _decode_BioAPI_GUI_SUBOPERATION,
  _encode_BioAPI_GUI_SUBOPERATION,
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta.mjs';
import {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta.mjs';
import {
  BioAPI_GUI_MOMENT,
  _enum_for_BioAPI_GUI_MOMENT,
  _decode_BioAPI_GUI_MOMENT,
  _encode_BioAPI_GUI_MOMENT,
} from '../BIP/BioAPI-GUI-MOMENT.ta.mjs';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta.mjs';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';
import {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta.mjs';
/* START_OF_SYMBOL_DEFINITION NotifyGUIStateEvent_RequestParams */
/**
 * @summary NotifyGUIStateEvent_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotifyGUIStateEvent-RequestParams ::= SEQUENCE {
 *   subscriberEndpointIRI     EndpointIRI,
 *   guiEventSubscriptionUuid  BioAPI-UUID,
 *   bspProductUuid            BioAPI-UUID,
 *   unitID                    BioAPI-UNIT-ID,
 *   operation                 BioAPI-GUI-OPERATION,
 *   suboperation              BioAPI-GUI-SUBOPERATION,
 *   purpose                   BioAPI-BIR-PURPOSE,
 *   moment                    BioAPI-GUI-MOMENT,
 *   resultCode                BioAPI-RETURN,
 *   enrollSampleIndex         SignedInt,
 *   bitmaps                   BioAPI-GUI-BITMAP-ARRAY OPTIONAL,
 *   text                      UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NotifyGUIStateEvent_RequestParams {
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
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: BioAPI_GUI_OPERATION,
    /**
     * @summary `suboperation`.
     * @public
     * @readonly
     */
    readonly suboperation: BioAPI_GUI_SUBOPERATION,
    /**
     * @summary `purpose`.
     * @public
     * @readonly
     */
    readonly purpose: BioAPI_BIR_PURPOSE,
    /**
     * @summary `moment`.
     * @public
     * @readonly
     */
    readonly moment: BioAPI_GUI_MOMENT,
    /**
     * @summary `resultCode`.
     * @public
     * @readonly
     */
    readonly resultCode: BioAPI_RETURN,
    /**
     * @summary `enrollSampleIndex`.
     * @public
     * @readonly
     */
    readonly enrollSampleIndex: SignedInt,
    /**
     * @summary `bitmaps`.
     * @public
     * @readonly
     */
    readonly bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>,
    /**
     * @summary `text`.
     * @public
     * @readonly
     */
    readonly text: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a NotifyGUIStateEvent_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `NotifyGUIStateEvent_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NotifyGUIStateEvent_RequestParams`.
   * @returns {NotifyGUIStateEvent_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof NotifyGUIStateEvent_RequestParams]: NotifyGUIStateEvent_RequestParams[_K];
    }
  ): NotifyGUIStateEvent_RequestParams {
    return new NotifyGUIStateEvent_RequestParams(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.bspProductUuid,
      _o.unitID,
      _o.operation,
      _o.suboperation,
      _o.purpose,
      _o.moment,
      _o.resultCode,
      _o.enrollSampleIndex,
      _o.bitmaps,
      _o.text
    );
  }

  /**
   * @summary The enum used as the type of the component `operation`
   * @public
   * @static
   */

  public static _enum_for_operation = _enum_for_BioAPI_GUI_OPERATION;
  /**
   * @summary The enum used as the type of the component `suboperation`
   * @public
   * @static
   */

  public static _enum_for_suboperation = _enum_for_BioAPI_GUI_SUBOPERATION;
  /**
   * @summary The enum used as the type of the component `purpose`
   * @public
   * @static
   */

  public static _enum_for_purpose = _enum_for_BioAPI_BIR_PURPOSE;
  /**
   * @summary The enum used as the type of the component `moment`
   * @public
   * @static
   */

  public static _enum_for_moment = _enum_for_BioAPI_GUI_MOMENT;
}
/* END_OF_SYMBOL_DEFINITION NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUIStateEvent_RequestParams */
/**
 * @summary The Leading Root Component Types of NotifyGUIStateEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotifyGUIStateEvent_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'subscriberEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    false,
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
    'unitID',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'suboperation',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enrollSampleIndex',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bitmaps',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUIStateEvent_RequestParams */
/**
 * @summary The Trailing Root Component Types of NotifyGUIStateEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUIStateEvent_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUIStateEvent_RequestParams */
/**
 * @summary The Extension Addition Component Types of NotifyGUIStateEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUIStateEvent_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUIStateEvent_RequestParams */
let _cached_decoder_for_NotifyGUIStateEvent_RequestParams: $.ASN1Decoder<NotifyGUIStateEvent_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_NotifyGUIStateEvent_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUIStateEvent_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUIStateEvent_RequestParams} The decoded data structure.
 */
export function _decode_NotifyGUIStateEvent_RequestParams(el: _Element) {
  if (!_cached_decoder_for_NotifyGUIStateEvent_RequestParams) {
    _cached_decoder_for_NotifyGUIStateEvent_RequestParams = function (
      el: _Element
    ): NotifyGUIStateEvent_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid!: BioAPI_UUID;
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let operation!: BioAPI_GUI_OPERATION;
      let suboperation!: BioAPI_GUI_SUBOPERATION;
      let purpose!: BioAPI_BIR_PURPOSE;
      let moment!: BioAPI_GUI_MOMENT;
      let resultCode!: BioAPI_RETURN;
      let enrollSampleIndex!: SignedInt;
      let bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>;
      let text: OPTIONAL<UTF8String>;
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
        unitID: (_el: _Element): void => {
          unitID = _decode_BioAPI_UNIT_ID(_el);
        },
        operation: (_el: _Element): void => {
          operation = _decode_BioAPI_GUI_OPERATION(_el);
        },
        suboperation: (_el: _Element): void => {
          suboperation = _decode_BioAPI_GUI_SUBOPERATION(_el);
        },
        purpose: (_el: _Element): void => {
          purpose = _decode_BioAPI_BIR_PURPOSE(_el);
        },
        moment: (_el: _Element): void => {
          moment = _decode_BioAPI_GUI_MOMENT(_el);
        },
        resultCode: (_el: _Element): void => {
          resultCode = _decode_BioAPI_RETURN(_el);
        },
        enrollSampleIndex: (_el: _Element): void => {
          enrollSampleIndex = _decode_SignedInt(_el);
        },
        bitmaps: (_el: _Element): void => {
          bitmaps = _decode_BioAPI_GUI_BITMAP_ARRAY(_el);
        },
        text: (_el: _Element): void => {
          text = $._decodeUTF8String(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NotifyGUIStateEvent_RequestParams,
        _extension_additions_list_spec_for_NotifyGUIStateEvent_RequestParams,
        _root_component_type_list_2_spec_for_NotifyGUIStateEvent_RequestParams,
        undefined
      );
      return new NotifyGUIStateEvent_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        bspProductUuid,
        unitID,
        operation,
        suboperation,
        purpose,
        moment,
        resultCode,
        enrollSampleIndex,
        bitmaps,
        text
      );
    };
  }
  return _cached_decoder_for_NotifyGUIStateEvent_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUIStateEvent_RequestParams */
let _cached_encoder_for_NotifyGUIStateEvent_RequestParams: $.ASN1Encoder<NotifyGUIStateEvent_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUIStateEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_NotifyGUIStateEvent_RequestParams */
/**
 * @summary Encodes a(n) NotifyGUIStateEvent_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUIStateEvent_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUIStateEvent_RequestParams(
  value: NotifyGUIStateEvent_RequestParams,
  elGetter: $.ASN1Encoder<NotifyGUIStateEvent_RequestParams>
) {
  if (!_cached_encoder_for_NotifyGUIStateEvent_RequestParams) {
    _cached_encoder_for_NotifyGUIStateEvent_RequestParams = function (
      value: NotifyGUIStateEvent_RequestParams    ): _Element {
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
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* REQUIRED   */ _encode_BioAPI_GUI_OPERATION(
              value.operation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_GUI_SUBOPERATION(
              value.suboperation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_PURPOSE(value.purpose, $.BER),
            /* REQUIRED   */ _encode_BioAPI_GUI_MOMENT(value.moment, $.BER),
            /* REQUIRED   */ _encode_BioAPI_RETURN(value.resultCode, $.BER),
            /* REQUIRED   */ _encode_SignedInt(value.enrollSampleIndex, $.BER),
            /* IF_ABSENT  */ value.bitmaps === undefined
              ? undefined
              : _encode_BioAPI_GUI_BITMAP_ARRAY(value.bitmaps, $.BER),
            /* IF_ABSENT  */ value.text === undefined
              ? undefined
              : $._encodeUTF8String(value.text, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NotifyGUIStateEvent_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotifyGUIStateEvent_RequestParams */

/* eslint-enable */
