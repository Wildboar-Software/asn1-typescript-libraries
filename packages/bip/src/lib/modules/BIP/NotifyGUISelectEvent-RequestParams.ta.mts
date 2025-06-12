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
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta.mjs';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
export {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta.mjs';
import {
  BioAPI_GUI_ENROLL_TYPE,
  BioAPI_GUI_ENROLL_TYPE_testVerify /* IMPORTED_LONG_NAMED_BIT */,
  testVerify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_GUI_ENROLL_TYPE_multipleCapture /* IMPORTED_LONG_NAMED_BIT */,
  multipleCapture /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_GUI_ENROLL_TYPE,
  _encode_BioAPI_GUI_ENROLL_TYPE,
} from '../BIP/BioAPI-GUI-ENROLL-TYPE.ta.mjs';
export {
  BioAPI_GUI_ENROLL_TYPE,
  BioAPI_GUI_ENROLL_TYPE_testVerify /* IMPORTED_LONG_NAMED_BIT */,
  testVerify /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_GUI_ENROLL_TYPE_multipleCapture /* IMPORTED_LONG_NAMED_BIT */,
  multipleCapture /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_GUI_ENROLL_TYPE,
  _encode_BioAPI_GUI_ENROLL_TYPE,
} from '../BIP/BioAPI-GUI-ENROLL-TYPE.ta.mjs';
import {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  capture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  process /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  createtemplate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verifymatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identifymatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enroll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
export {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  capture /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  process /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  createtemplate /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verifymatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identifymatch /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  verify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  identify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enroll /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta.mjs';
import {
  BioAPI_GUI_MOMENT,
  _enum_for_BioAPI_GUI_MOMENT,
  BioAPI_GUI_MOMENT_beforeStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  beforeStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_during /* IMPORTED_LONG_ENUMERATION_ITEM */,
  during /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_afterEnd /* IMPORTED_LONG_ENUMERATION_ITEM */,
  afterEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_MOMENT,
  _encode_BioAPI_GUI_MOMENT,
} from '../BIP/BioAPI-GUI-MOMENT.ta.mjs';
export {
  BioAPI_GUI_MOMENT,
  _enum_for_BioAPI_GUI_MOMENT,
  BioAPI_GUI_MOMENT_beforeStart /* IMPORTED_LONG_ENUMERATION_ITEM */,
  beforeStart /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_during /* IMPORTED_LONG_ENUMERATION_ITEM */,
  during /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_GUI_MOMENT_afterEnd /* IMPORTED_LONG_ENUMERATION_ITEM */,
  afterEnd /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_MOMENT,
  _encode_BioAPI_GUI_MOMENT,
} from '../BIP/BioAPI-GUI-MOMENT.ta.mjs';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta.mjs';
export {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta.mjs';
import {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
export {
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';
export {
  BioAPI_BIR_SUBTYPE_MASK,
  BioAPI_BIR_SUBTYPE_MASK_left /* IMPORTED_LONG_NAMED_BIT */,
  left /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right /* IMPORTED_LONG_NAMED_BIT */,
  right /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_thumb /* IMPORTED_LONG_NAMED_BIT */,
  left_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  left_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  left_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_thumb /* IMPORTED_LONG_NAMED_BIT */,
  right_thumb /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_pointerfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_pointerfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_middlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_middlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_ringfinger /* IMPORTED_LONG_NAMED_BIT */,
  right_ringfinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_littlefinger /* IMPORTED_LONG_NAMED_BIT */,
  right_littlefinger /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_left_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  left_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_palm /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_palm /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_backofhand /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_backofhand /* IMPORTED_SHORT_NAMED_BIT */,
  BioAPI_BIR_SUBTYPE_MASK_right_vein_wrist /* IMPORTED_LONG_NAMED_BIT */,
  right_vein_wrist /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_BioAPI_BIR_SUBTYPE_MASK,
  _encode_BioAPI_BIR_SUBTYPE_MASK,
} from '../BIP/BioAPI-BIR-SUBTYPE-MASK.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NotifyGUISelectEvent_RequestParams */
/**
 * @summary NotifyGUISelectEvent_RequestParams
 * @description
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
 * @class
 */
export class NotifyGUISelectEvent_RequestParams {
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
/* END_OF_SYMBOL_DEFINITION NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUISelectEvent_RequestParams */
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
    'enrollType',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'maxNumEnrollSamples',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'selectableInstances',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'capturedInstances',
    false,
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams */
/**
 * @summary The Trailing Root Component Types of NotifyGUISelectEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams */
/**
 * @summary The Extension Addition Component Types of NotifyGUISelectEvent_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUISelectEvent_RequestParams */
let _cached_decoder_for_NotifyGUISelectEvent_RequestParams: $.ASN1Decoder<NotifyGUISelectEvent_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_NotifyGUISelectEvent_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) NotifyGUISelectEvent_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyGUISelectEvent_RequestParams} The decoded data structure.
 */
export function _decode_NotifyGUISelectEvent_RequestParams(el: _Element) {
  if (!_cached_decoder_for_NotifyGUISelectEvent_RequestParams) {
    _cached_decoder_for_NotifyGUISelectEvent_RequestParams = function (
      el: _Element
    ): NotifyGUISelectEvent_RequestParams {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NotifyGUISelectEvent_RequestParams,
        _extension_additions_list_spec_for_NotifyGUISelectEvent_RequestParams,
        _root_component_type_list_2_spec_for_NotifyGUISelectEvent_RequestParams,
        undefined
      );
      return new NotifyGUISelectEvent_RequestParams /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUISelectEvent_RequestParams */
let _cached_encoder_for_NotifyGUISelectEvent_RequestParams: $.ASN1Encoder<NotifyGUISelectEvent_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotifyGUISelectEvent_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_NotifyGUISelectEvent_RequestParams */
/**
 * @summary Encodes a(n) NotifyGUISelectEvent_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyGUISelectEvent_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_NotifyGUISelectEvent_RequestParams(
  value: NotifyGUISelectEvent_RequestParams,
  elGetter: $.ASN1Encoder<NotifyGUISelectEvent_RequestParams>
) {
  if (!_cached_encoder_for_NotifyGUISelectEvent_RequestParams) {
    _cached_encoder_for_NotifyGUISelectEvent_RequestParams = function (
      value: NotifyGUISelectEvent_RequestParams,
      elGetter: $.ASN1Encoder<NotifyGUISelectEvent_RequestParams>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_NotifyGUISelectEvent_RequestParams */

/* eslint-enable */
