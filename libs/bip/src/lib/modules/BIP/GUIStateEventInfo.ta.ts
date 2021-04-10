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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
export {
  EndpointIRI,
  _decode_EndpointIRI,
  _encode_EndpointIRI,
} from '../BIP/EndpointIRI.ta';
import {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
export {
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta';
import {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
export {
  BioAPI_UNIT_ID,
  _decode_BioAPI_UNIT_ID,
  _encode_BioAPI_UNIT_ID,
} from '../BIP/BioAPI-UNIT-ID.ta';
import {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
export {
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta';
import {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta';
export {
  BioAPI_GUI_OPERATION,
  _enum_for_BioAPI_GUI_OPERATION,
  BioAPI_GUI_OPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_OPERATION_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_OPERATION,
  _encode_BioAPI_GUI_OPERATION,
} from '../BIP/BioAPI-GUI-OPERATION.ta';
import {
  BioAPI_GUI_SUBOPERATION,
  _enum_for_BioAPI_GUI_SUBOPERATION,
  BioAPI_GUI_SUBOPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_SUBOPERATION,
  _encode_BioAPI_GUI_SUBOPERATION,
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta';
export {
  BioAPI_GUI_SUBOPERATION,
  _enum_for_BioAPI_GUI_SUBOPERATION,
  BioAPI_GUI_SUBOPERATION_capture /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_process /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_createtemplate /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_verifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_GUI_SUBOPERATION_identifymatch /* IMPORTED_LONG_ENUMERATION_ITEM */,
  _decode_BioAPI_GUI_SUBOPERATION,
  _encode_BioAPI_GUI_SUBOPERATION,
} from '../BIP/BioAPI-GUI-SUBOPERATION.ta';
import {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta';
export {
  BioAPI_BIR_PURPOSE,
  _enum_for_BioAPI_BIR_PURPOSE,
  BioAPI_BIR_PURPOSE_verify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_identify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enroll /* IMPORTED_LONG_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollVerify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollVerify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_enrollIdentify /* IMPORTED_LONG_ENUMERATION_ITEM */,
  enrollIdentify /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_audit /* IMPORTED_LONG_ENUMERATION_ITEM */,
  audit /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  BioAPI_BIR_PURPOSE_any_ /* IMPORTED_LONG_ENUMERATION_ITEM */,
  any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_BioAPI_BIR_PURPOSE,
  _encode_BioAPI_BIR_PURPOSE,
} from '../BIP/BioAPI-BIR-PURPOSE.ta';
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
} from '../BIP/BioAPI-GUI-MOMENT.ta';
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
} from '../BIP/BioAPI-GUI-MOMENT.ta';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta';
export {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta';
import {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';
export {
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta';
import {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta';
export {
  BioAPI_GUI_BITMAP_ARRAY,
  _decode_BioAPI_GUI_BITMAP_ARRAY,
  _encode_BioAPI_GUI_BITMAP_ARRAY,
} from '../BIP/BioAPI-GUI-BITMAP-ARRAY.ta';

/* START_OF_SYMBOL_DEFINITION GUIStateEventInfo */
/**
 * @summary GUIStateEventInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GUIStateEventInfo ::= SEQUENCE {
 *   subscriberEndpointIRI     EndpointIRI,
 *   guiEventSubscriptionUuid  BioAPI-UUID OPTIONAL,
 *   hostingEndpointIRI        EndpointIRI,
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
 * @class
 */
export class GUIStateEventInfo {
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
    readonly guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>,
    /**
     * @summary `hostingEndpointIRI`.
     * @public
     * @readonly
     */
    readonly hostingEndpointIRI: EndpointIRI,
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
   * @summary Restructures an object into a GUIStateEventInfo
   * @description
   *
   * This takes an `object` and converts it to a `GUIStateEventInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GUIStateEventInfo`.
   * @returns {GUIStateEventInfo}
   */
  public static _from_object(
    _o: { [_K in keyof GUIStateEventInfo]: GUIStateEventInfo[_K] }
  ): GUIStateEventInfo {
    return new GUIStateEventInfo(
      _o.subscriberEndpointIRI,
      _o.guiEventSubscriptionUuid,
      _o.hostingEndpointIRI,
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
/* END_OF_SYMBOL_DEFINITION GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEventInfo */
/**
 * @summary The Leading Root Component Types of GUIStateEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GUIStateEventInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'subscriberEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'guiEventSubscriptionUuid',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'hostingEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'unitID',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'originalBSPHandle',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'operation',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'suboperation',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'purpose',
    false,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'moment',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'resultCode',
    false,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enrollSampleIndex',
    false,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'bitmaps',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'text',
    true,
    $.hasTag(_TagClass.context, 13),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEventInfo */
/**
 * @summary The Trailing Root Component Types of GUIStateEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GUIStateEventInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEventInfo */
/**
 * @summary The Extension Addition Component Types of GUIStateEventInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GUIStateEventInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEventInfo */
let _cached_decoder_for_GUIStateEventInfo: $.ASN1Decoder<GUIStateEventInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _decode_GUIStateEventInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) GUIStateEventInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GUIStateEventInfo} The decoded data structure.
 */
export function _decode_GUIStateEventInfo(el: _Element) {
  if (!_cached_decoder_for_GUIStateEventInfo) {
    _cached_decoder_for_GUIStateEventInfo = function (
      el: _Element
    ): GUIStateEventInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let subscriberEndpointIRI!: EndpointIRI;
      let guiEventSubscriptionUuid: OPTIONAL<BioAPI_UUID>;
      let hostingEndpointIRI!: EndpointIRI;
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
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        subscriberEndpointIRI: (_el: _Element): void => {
          subscriberEndpointIRI = _decode_EndpointIRI(_el);
        },
        guiEventSubscriptionUuid: (_el: _Element): void => {
          guiEventSubscriptionUuid = _decode_BioAPI_UUID(_el);
        },
        hostingEndpointIRI: (_el: _Element): void => {
          hostingEndpointIRI = _decode_EndpointIRI(_el);
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GUIStateEventInfo,
        _extension_additions_list_spec_for_GUIStateEventInfo,
        _root_component_type_list_2_spec_for_GUIStateEventInfo,
        undefined
      );
      return new GUIStateEventInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        subscriberEndpointIRI,
        guiEventSubscriptionUuid,
        hostingEndpointIRI,
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
  return _cached_decoder_for_GUIStateEventInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEventInfo */
let _cached_encoder_for_GUIStateEventInfo: $.ASN1Encoder<GUIStateEventInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GUIStateEventInfo */

/* START_OF_SYMBOL_DEFINITION _encode_GUIStateEventInfo */
/**
 * @summary Encodes a(n) GUIStateEventInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUIStateEventInfo, encoded as an ASN.1 Element.
 */
export function _encode_GUIStateEventInfo(
  value: GUIStateEventInfo,
  elGetter: $.ASN1Encoder<GUIStateEventInfo>
) {
  if (!_cached_encoder_for_GUIStateEventInfo) {
    _cached_encoder_for_GUIStateEventInfo = function (
      value: GUIStateEventInfo,
      elGetter: $.ASN1Encoder<GUIStateEventInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.subscriberEndpointIRI,
              $.BER
            ),
            /* IF_ABSENT  */ value.guiEventSubscriptionUuid === undefined
              ? undefined
              : _encode_BioAPI_UUID(value.guiEventSubscriptionUuid, $.BER),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.hostingEndpointIRI,
              $.BER
            ),
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
  return _cached_encoder_for_GUIStateEventInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GUIStateEventInfo */

/* eslint-enable */
