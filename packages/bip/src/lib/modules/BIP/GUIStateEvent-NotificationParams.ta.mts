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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';
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

/**
 * @summary GUIStateEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIStateEvent-NotificationParams ::= SEQUENCE {
 *   guiEventSubscriptionUuid  BioAPI-UUID OPTIONAL,
 *   bspProductUuid            BioAPI-UUID,
 *   unitID                    BioAPI-UNIT-ID,
 *   originalBSPHandle         BioAPI-HANDLE OPTIONAL,
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
 */
export class GUIStateEvent_NotificationParams {
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
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitID`.
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: OPTIONAL<BioAPI_HANDLE>,
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
   * @summary Restructures an object into a GUIStateEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `GUIStateEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIStateEvent_NotificationParams`.
   * @returns {GUIStateEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUIStateEvent_NotificationParams]: GUIStateEvent_NotificationParams[_K];
    }
  ): GUIStateEvent_NotificationParams {
    return new GUIStateEvent_NotificationParams(
      _o.guiEventSubscriptionUuid,
      _o.bspProductUuid,
      _o.unitID,
      _o.originalBSPHandle,
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


/**
 * @summary The Leading Root Component Types of GUIStateEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIStateEvent_NotificationParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'suboperation',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'enrollSampleIndex',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'bitmaps',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 11)
  ),
];


/**
 * @summary The Trailing Root Component Types of GUIStateEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIStateEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GUIStateEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIStateEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GUIStateEvent_NotificationParams: $.ASN1Decoder<GUIStateEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUIStateEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIStateEvent_NotificationParams} The decoded data structure.
 */
export function _decode_GUIStateEvent_NotificationParams(el: _Element): GUIStateEvent_NotificationParams {
  if (!_cached_decoder_for_GUIStateEvent_NotificationParams) {
    _cached_decoder_for_GUIStateEvent_NotificationParams = function (
      el: _Element
    ): GUIStateEvent_NotificationParams {
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let originalBSPHandle: OPTIONAL<BioAPI_HANDLE>;
      let operation!: BioAPI_GUI_OPERATION;
      let suboperation!: BioAPI_GUI_SUBOPERATION;
      let purpose!: BioAPI_BIR_PURPOSE;
      let moment!: BioAPI_GUI_MOMENT;
      let resultCode!: BioAPI_RETURN;
      let enrollSampleIndex!: SignedInt;
      let bitmaps: OPTIONAL<BioAPI_GUI_BITMAP_ARRAY>;
      let text: OPTIONAL<UTF8String>;
      const callbacks: $.DecodingMap = {
        guiEventSubscriptionUuid: (_el: _Element): void => {
          guiEventSubscriptionUuid = _decode_BioAPI_UUID(_el);
        },
        bspProductUuid: (_el: _Element): void => {
          bspProductUuid = _decode_BioAPI_UUID(_el);
        },
        unitID: (_el: _Element): void => {
          unitID = _decode_BioAPI_UNIT_ID(_el);
        },
        originalBSPHandle: (_el: _Element): void => {
          originalBSPHandle = _decode_BioAPI_HANDLE(_el);
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUIStateEvent_NotificationParams,
        _extension_additions_list_spec_for_GUIStateEvent_NotificationParams,
        _root_component_type_list_2_spec_for_GUIStateEvent_NotificationParams,
        undefined
      );
      return new GUIStateEvent_NotificationParams (
        guiEventSubscriptionUuid,
        bspProductUuid,
        unitID,
        originalBSPHandle,
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
  return _cached_decoder_for_GUIStateEvent_NotificationParams(el);
}


let _cached_encoder_for_GUIStateEvent_NotificationParams: $.ASN1Encoder<GUIStateEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) GUIStateEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIStateEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_GUIStateEvent_NotificationParams(
  value: GUIStateEvent_NotificationParams,
  elGetter: $.ASN1Encoder<GUIStateEvent_NotificationParams>
): _Element {
  if (!_cached_encoder_for_GUIStateEvent_NotificationParams) {
    _cached_encoder_for_GUIStateEvent_NotificationParams = function (
      value: GUIStateEvent_NotificationParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_UNIT_ID(value.unitID, $.BER),
            /* IF_ABSENT  */ value.originalBSPHandle === undefined
              ? undefined
              : _encode_BioAPI_HANDLE(value.originalBSPHandle, $.BER),
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
  return _cached_encoder_for_GUIStateEvent_NotificationParams(value, elGetter);
}


/* eslint-enable */
