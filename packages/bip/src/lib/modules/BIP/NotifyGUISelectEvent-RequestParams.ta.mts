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
 * @summary NotifyGUISelectEvent_RequestParams
 * @description
 *
 * Parameters of a `notifyGUISelectEvent` request BIP message
 * (master→slave) for `BioAPI_NotifyGUISelectEvent`. This is a
 * request/response exchange on the request/response channel,
 * not a clause 17 `guiSelectEvent` notification PDU. A host
 * that received a primary GUI select callback (or a redirected
 * host) uses it to deliver a secondary GUI select event that
 * needs an acknowledgement-like response. `originalBSPHandle`
 * is omitted when building `GUISelectEventInfo`. X.1083
 * §16.25, §8.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotifyGUISelectEvent-RequestParams ::= SEQUENCE {
 *   subscriberEndpointIRI     EndpointIRI,
 *   guiEventSubscriptionUuid  BioAPI-UUID,
 *   bspProductUuid            BioAPI-UUID,
 *   unitID                    BioAPI-UNIT-ID,
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
export class NotifyGUISelectEvent_RequestParams {
  constructor(
    /**
     * @summary `subscriberEndpointIRI`.
     * @description
     *
     * Endpoint IRI of the secondary GUI handler. BioAPI `NULL`
     * `SubscriberEndpointIRI` is rewritten to the local
     * endpoint IRI (X.1083 §15.3). X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly subscriberEndpointIRI: EndpointIRI,
    /**
     * @summary `guiEventSubscriptionUuid`.
     * @description
     *
     * UUID of the secondary GUI-event subscription that shall
     * receive this event. Required (unlike
     * `subscribeToGUIEvents`, where it is OPTIONAL). C `NULL`
     * is unconvertible (clause 19). X.1083 §16.25.5, §8.5.
     *
     * @public
     * @readonly
     */
    readonly guiEventSubscriptionUuid: BioAPI_UUID,
    /**
     * @summary `bspProductUuid`.
     * @description
     *
     * Product UUID of the BSP that originated the GUI event.
     * Converted from BioAPI `BSPUuid` via clause 25. X.1083
     * §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `unitID`.
     * @description
     *
     * Unit that originated the GUI select event. Forwarded from
     * the primary callback. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly unitID: BioAPI_UNIT_ID,
    /**
     * @summary `enrollType`.
     * @description
     *
     * Enrollment type from the primary GUI select callback.
     * Forwarded unchanged to the secondary handler. X.1083
     * §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly enrollType: BioAPI_GUI_ENROLL_TYPE,
    /**
     * @summary `operation`.
     * @description
     *
     * GUI operation from the primary select callback.
     * Forwarded to the secondary handler. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly operation: BioAPI_GUI_OPERATION,
    /**
     * @summary `moment`.
     * @description
     *
     * GUI moment from the primary select callback. Forwarded
     * to the secondary handler. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly moment: BioAPI_GUI_MOMENT,
    /**
     * @summary `resultCode`.
     * @description
     *
     * Result code from the primary select callback. Forwarded
     * to the secondary handler. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly resultCode: BioAPI_RETURN,
    /**
     * @summary `maxNumEnrollSamples`.
     * @description
     *
     * Maximum number of enroll samples from the primary select
     * callback. Forwarded to the secondary handler. X.1083
     * §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly maxNumEnrollSamples: UnsignedInt,
    /**
     * @summary `selectableInstances`.
     * @description
     *
     * Subtype mask of instances the subject may select.
     * Forwarded from the primary callback; the handler returns
     * `selectedInstances` on the response. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly selectableInstances: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `capturedInstances`.
     * @description
     *
     * Subtype mask of instances already captured. Forwarded
     * from the primary callback. X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly capturedInstances: BioAPI_BIR_SUBTYPE_MASK,
    /**
     * @summary `text`.
     * @description
     *
     * Prompt or status text from the primary callback. C
     * `NULL` ↔ absent (X.1083 §15.2). X.1083 §16.25.5.
     *
     * @public
     * @readonly
     */
    readonly text?: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a NotifyGUISelectEvent_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `NotifyGUISelectEvent_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NotifyGUISelectEvent_RequestParams`.
   * @returns {NotifyGUISelectEvent_RequestParams}
   */
  public static _from_object(
    _o: {
      [_K in keyof NotifyGUISelectEvent_RequestParams]: NotifyGUISelectEvent_RequestParams[_K];
    }
  ): NotifyGUISelectEvent_RequestParams {
    return new NotifyGUISelectEvent_RequestParams(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.bspProductUuid,
      _o.unitID,
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
 * @summary The Leading Root Component Types of NotifyGUISelectEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NotifyGUISelectEvent_RequestParams: $.ComponentSpec[] = [
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
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'unitID',
    false,
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
 * @summary The Trailing Root Component Types of NotifyGUISelectEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NotifyGUISelectEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_NotifyGUISelectEvent_RequestParams: $.ASN1Decoder<NotifyGUISelectEvent_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUISelectEvent_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUISelectEvent_RequestParams} The decoded data structure.
 */
export function _decode_NotifyGUISelectEvent_RequestParams(el: _Element): NotifyGUISelectEvent_RequestParams {
  if (!_cached_decoder_for_NotifyGUISelectEvent_RequestParams) {
    _cached_decoder_for_NotifyGUISelectEvent_RequestParams = function (
      el: _Element
    ): NotifyGUISelectEvent_RequestParams {
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid!: BioAPI_UUID;
      let bspProductUuid!: BioAPI_UUID;
      let unitID!: BioAPI_UNIT_ID;
      let enrollType!: BioAPI_GUI_ENROLL_TYPE;
      let operation!: BioAPI_GUI_OPERATION;
      let moment!: BioAPI_GUI_MOMENT;
      let resultCode!: BioAPI_RETURN;
      let maxNumEnrollSamples!: UnsignedInt;
      let selectableInstances!: BioAPI_BIR_SUBTYPE_MASK;
      let capturedInstances!: BioAPI_BIR_SUBTYPE_MASK;
      let text: OPTIONAL<UTF8String>;
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
        _root_component_type_list_1_spec_for_NotifyGUISelectEvent_RequestParams,
        _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams,
        _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams,
        undefined
      );
      return new NotifyGUISelectEvent_RequestParams (
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        bspProductUuid,
        unitID,
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
  return _cached_decoder_for_NotifyGUISelectEvent_RequestParams(el);
}


let _cached_encoder_for_NotifyGUISelectEvent_RequestParams: $.ASN1Encoder<NotifyGUISelectEvent_RequestParams> | null = null;


/**
 * @summary Encodes a(n) NotifyGUISelectEvent_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUISelectEvent_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUISelectEvent_RequestParams(
  value: NotifyGUISelectEvent_RequestParams,
  elGetter: $.ASN1Encoder<NotifyGUISelectEvent_RequestParams>
): _Element {
  if (!_cached_encoder_for_NotifyGUISelectEvent_RequestParams) {
    _cached_encoder_for_NotifyGUISelectEvent_RequestParams = function (
      value: NotifyGUISelectEvent_RequestParams    ): _Element {
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
  return _cached_encoder_for_NotifyGUISelectEvent_RequestParams(
    value,
    elGetter
  );
}


/* eslint-enable */
