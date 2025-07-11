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
  BioAPI_GUI_ENROLL_TYPE,
  _decode_BioAPI_GUI_ENROLL_TYPE,
  _encode_BioAPI_GUI_ENROLL_TYPE,
} from '../BIP/BioAPI-GUI-ENROLL-TYPE.ta.mjs';
import {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  BioAPI_BIR_SUBTYPE_MASK,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';

/**
 * @summary GUISelectEvent_NotificationParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUISelectEvent-NotificationParams ::= SEQUENCE {
 *   guiEventSubscriptionUuid  BioAPI-UUID OPTIONAL,
 *   bspProductUuid            BioAPI-UUID,
 *   unitID                    BioAPI-UNIT-ID,
 *   originalBSPHandle         BioAPI-HANDLE OPTIONAL,
 *   enrollType                BioAPI-GUI-ENROLL-TYPE,
 *   operation                 BioAPI-GUI-OPERATION,
 *   moment                    BioAPI-GUI-MOMENT,
 *   resultCode                BioAPI-RETURN,
 *   maxNumEnrollSamples       UnsignedInt,
 *   selectableInstances       BioAPI-BIR-SUBTYPE-MASK,
 *   capturedInstances         BioAPI-BIR-SUBTYPE-MASK,
 *   text                      UTF8String OPTIONAL
 * }
 * ```
 *
 */
export class GUISelectEvent_NotificationParams {
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
     * @summary `enrollType`.
     * @public
     * @readonly
     */
    readonly enrollType: BioAPI_GUI_ENROLL_TYPE,
    /**
     * @summary `operation`.
     * @public
     * @readonly
     */
    readonly operation: BioAPI_GUI_OPERATION,
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
     * @summary `maxNumEnrollSamples`.
     * @public
     * @readonly
     */
    readonly maxNumEnrollSamples: UnsignedInt,
    /**
     * @summary `selectableInstances`.
     * @public
     * @readonly
     */
    readonly selectableInstances: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `capturedInstances`.
     * @public
     * @readonly
     */
    readonly capturedInstances: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `text`.
     * @public
     * @readonly
     */
    readonly text: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a GUISelectEvent_NotificationParams
   * @description
   *
   * This takes an `object` and converts it to a `GUISelectEvent_NotificationParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUISelectEvent_NotificationParams`.
   * @returns {GUISelectEvent_NotificationParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof GUISelectEvent_NotificationParams]: GUISelectEvent_NotificationParams[_K];
    }
  ): GUISelectEvent_NotificationParams {
    return new GUISelectEvent_NotificationParams(
      _o.guiEventSubscriptionUuid,
      _o.bspProductUuid,
      _o.unitID,
      _o.originalBSPHandle,
      _o.enrollType,
      _o.operation,
      _o.moment,
      _o.resultCode,
      _o.maxNumEnrollSamples,
      _o.selectableInstances,
      _o.capturedInstances,
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
   * @summary The enum used as the type of the component `moment`
   * @public
   * @static
   */

  public static _enum_for_moment = _enum_for_BioAPI_GUI_MOMENT;
}


/**
 * @summary The Leading Root Component Types of GUISelectEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUISelectEvent_NotificationParams: $.ComponentSpec[] = [
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
    'enrollType',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'maxNumEnrollSamples',
    false,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'selectableInstances',
    false,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'capturedInstances',
    false,
    $.hasTag(_TagClass.context, 10)
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 11)
  ),
];


/**
 * @summary The Trailing Root Component Types of GUISelectEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUISelectEvent_NotificationParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of GUISelectEvent_NotificationParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUISelectEvent_NotificationParams: $.ComponentSpec[] = [];


let _cached_decoder_for_GUISelectEvent_NotificationParams: $.ASN1Decoder<GUISelectEvent_NotificationParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GUISelectEvent_NotificationParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUISelectEvent_NotificationParams} The decoded data structure.
 */
export function _decode_GUISelectEvent_NotificationParams(el: _Element): GUISelectEvent_NotificationParams {
  if (!_cached_decoder_for_GUISelectEvent_NotificationParams) {
    _cached_decoder_for_GUISelectEvent_NotificationParams = function (
      el: _Element
    ): GUISelectEvent_NotificationParams {
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let originalBSPHandle: OPTIONAL<BioAPI_HANDLE>;
      let enrollType!: BioAPI_GUI_ENROLL_TYPE;
      let operation!: BioAPI_GUI_OPERATION;
      let moment!: BioAPI_GUI_MOMENT;
      let resultCode!: BioAPI_RETURN;
      let maxNumEnrollSamples!: UnsignedInt;
      let selectableInstances!: BioAPI_BIR_SUBTYPE_MASK;
      let capturedInstances!: BioAPI_BIR_SUBTYPE_MASK;
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
        enrollType: (_el: _Element): void => {
          enrollType = _decode_BioAPI_GUI_ENROLL_TYPE(_el);
        },
        operation: (_el: _Element): void => {
          operation = _decode_BioAPI_GUI_OPERATION(_el);
        },
        moment: (_el: _Element): void => {
          moment = _decode_BioAPI_GUI_MOMENT(_el);
        },
        resultCode: (_el: _Element): void => {
          resultCode = _decode_BioAPI_RETURN(_el);
        },
        maxNumEnrollSamples: (_el: _Element): void => {
          maxNumEnrollSamples = _decode_UnsignedInt(_el);
        },
        selectableInstances: (_el: _Element): void => {
          selectableInstances = _decode_BioAPI_BIR_SUBTYPE_MASK(_el);
        },
        capturedInstances: (_el: _Element): void => {
          capturedInstances = _decode_BioAPI_BIR_SUBTYPE_MASK(_el);
        },
        text: (_el: _Element): void => {
          text = $._decodeUTF8String(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUISelectEvent_NotificationParams,
        _extension_additions_list_spec_for_GUISelectEvent_NotificationParams,
        _root_component_type_list_2_spec_for_GUISelectEvent_NotificationParams,
        undefined
      );
      return new GUISelectEvent_NotificationParams (
        guiEventSubscriptionUuid,
        bspProductUuid,
        unitID,
        originalBSPHandle,
        enrollType,
        operation,
        moment,
        resultCode,
        maxNumEnrollSamples,
        selectableInstances,
        capturedInstances,
        text
      );
    };
  }
  return _cached_decoder_for_GUISelectEvent_NotificationParams(el);
}


let _cached_encoder_for_GUISelectEvent_NotificationParams: $.ASN1Encoder<GUISelectEvent_NotificationParams> | null = null;


/**
 * @summary Encodes a(n) GUISelectEvent_NotificationParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUISelectEvent_NotificationParams, encoded as an ASN.1 Element.
 */
export function _encode_GUISelectEvent_NotificationParams(
  value: GUISelectEvent_NotificationParams,
  elGetter: $.ASN1Encoder<GUISelectEvent_NotificationParams>
): _Element {
  if (!_cached_encoder_for_GUISelectEvent_NotificationParams) {
    _cached_encoder_for_GUISelectEvent_NotificationParams = function (
      value: GUISelectEvent_NotificationParams    ): _Element {
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
            /* REQUIRED   */ _encode_BioAPI_GUI_ENROLL_TYPE(
              value.enrollType,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_GUI_OPERATION(
              value.operation,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_GUI_MOMENT(value.moment, $.BER),
            /* REQUIRED   */ _encode_BioAPI_RETURN(value.resultCode, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(
              value.maxNumEnrollSamples,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE_MASK(
              value.selectableInstances,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_BIR_SUBTYPE_MASK(
              value.capturedInstances,
              $.BER
            ),
            /* IF_ABSENT  */ value.text === undefined
              ? undefined
              : $._encodeUTF8String(value.text, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GUISelectEvent_NotificationParams(value, elGetter);
}


/* eslint-enable */
