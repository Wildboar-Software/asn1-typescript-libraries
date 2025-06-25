/* eslint-disable */
import {
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
  UnsignedInt,
  _decode_UnsignedInt,
  _encode_UnsignedInt,
} from '../BIP/UnsignedInt.ta.mjs';
import {
  BIPRequest_params,
  _decode_BIPRequest_params,
  _encode_BIPRequest_params,
} from '../BIP/BIPRequest-params.ta.mjs';

/**
 * @summary BIPRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPRequest ::= SEQUENCE {
 *   slaveEndpointIRI   EndpointIRI,
 *   masterEndpointIRI  EndpointIRI,
 *   linkNumber         UnsignedInt,
 *   requestId          UnsignedInt,
 *   params
 *     CHOICE {addMaster                   AddMaster-RequestParams,
 *             deleteMaster                DeleteMaster-RequestParams,
 *             bspLoad                     BSPLoad-RequestParams,
 *             bspUnload                   BSPUnload-RequestParams,
 *             queryUnits                  QueryUnits-RequestParams,
 *             queryBFPs                   QueryBFPs-RequestParams,
 *             bspAttach                   BSPAttach-RequestParams,
 *             bspDetach                   BSPDetach-RequestParams,
 *             enableUnitEvents            EnableUnitEvents-RequestParams,
 *             enableEventNotifications    EnableEventNotifications-RequestParams,
 *             controlUnit                 ControlUnit-RequestParams,
 *             control                     Control-RequestParams,
 *             freeBIRHandle               FreeBIRHandle-RequestParams,
 *             getBIRFromHandle            GetBIRFromHandle-RequestParams,
 *             getHeaderFromHandle         GetHeaderFromHandle-RequestParams,
 *             subscribeToGUIEvents        SubscribeToGUIEvents-RequestParams,
 *             unsubscribeFromGUIEvents    UnsubscribeFromGUIEvents-RequestParams,
 *             redirectGUIEvents           RedirectGUIEvents-RequestParams,
 *             unredirectGUIEvents         UnredirectGUIEvents-RequestParams,
 *             queryGUIEventSubscriptions
 *               QueryGUIEventSubscriptions-RequestParams,
 *             notifyGUISelectEvent        NotifyGUISelectEvent-RequestParams,
 *             notifyGUIStateEvent         NotifyGUIStateEvent-RequestParams,
 *             notifyGUIProgressEvent      NotifyGUIProgressEvent-RequestParams,
 *             capture                     Capture-RequestParams,
 *             createTemplate              CreateTemplate-RequestParams,
 *             process                     Process-RequestParams,
 *             processWithAuxBIR           ProcessWithAuxBIR-RequestParams,
 *             verifyMatch                 VerifyMatch-RequestParams,
 *             identifyMatch               IdentifyMatch-RequestParams,
 *             enroll                      Enroll-RequestParams,
 *             verify                      Verify-RequestParams,
 *             identify                    Identify-RequestParams,
 *             import                      Import-RequestParams,
 *             presetIdentifyPopulation    PresetIdentifyPopulation-RequestParams,
 *             transform                   Transform-RequestParams,
 *             dbOpen                      DbOpen-RequestParams,
 *             dbClose                     DbClose-RequestParams,
 *             dbCreate                    DbCreate-RequestParams,
 *             dbDelete                    DbDelete-RequestParams,
 *             dbSetMarker                 DbSetMarker-RequestParams,
 *             dbFreeMarker                DbFreeMarker-RequestParams,
 *             dbStore                     DbStoreBIR-RequestParams,
 *             dbGetBIR                    DbGetBIR-RequestParams,
 *             dbGetNextBIR                DbGetNextBIR-RequestParams,
 *             dbDeleteBIR                 DbDeleteBIR-RequestParams,
 *             calibrateSensor             CalibrateSensor-RequestParams,
 *             setPowerMode                SetPowerMode-RequestParams,
 *             setIndicatorStatus          SetIndicatorStatus-RequestParams,
 *             getIndicatorStatus          GetIndicatorStatus-RequestParams,
 *             cancel                      Cancel-RequestParams,
 *             registerBSP                 RegisterBSP-RequestParams,
 *             unregisterBSP               UnregisterBSP-RequestParams,
 *             registerBFP                 RegisterBFP-RequestParams,
 *             unregisterBFP               UnregisterBFP-RequestParams,
 *             ...}
 * }
 * ```
 *
 * @class
 */
export class BIPRequest {
  constructor(
    /**
     * @summary `slaveEndpointIRI`.
     * @public
     * @readonly
     */
    readonly slaveEndpointIRI: EndpointIRI,
    /**
     * @summary `masterEndpointIRI`.
     * @public
     * @readonly
     */
    readonly masterEndpointIRI: EndpointIRI,
    /**
     * @summary `linkNumber`.
     * @public
     * @readonly
     */
    readonly linkNumber: UnsignedInt,
    /**
     * @summary `requestId`.
     * @public
     * @readonly
     */
    readonly requestId: UnsignedInt,
    /**
     * @summary `params`.
     * @public
     * @readonly
     */
    readonly params: BIPRequest_params
  ) {}

  /**
   * @summary Restructures an object into a BIPRequest
   * @description
   *
   * This takes an `object` and converts it to a `BIPRequest`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIPRequest`.
   * @returns {BIPRequest}
   */
  public static _from_object(
    _o: { [_K in keyof BIPRequest]: BIPRequest[_K] }
  ): BIPRequest {
    return new BIPRequest(
      _o.slaveEndpointIRI,
      _o.masterEndpointIRI,
      _o.linkNumber,
      _o.requestId,
      _o.params
    );
  }
}


/**
 * @summary The Leading Root Component Types of BIPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIPRequest: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'slaveEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'masterEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'linkNumber',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'requestId',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'params',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of BIPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIPRequest: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BIPRequest
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIPRequest: $.ComponentSpec[] = [];


let _cached_decoder_for_BIPRequest: $.ASN1Decoder<BIPRequest> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPRequest} The decoded data structure.
 */
export function _decode_BIPRequest(el: _Element): BIPRequest {
  if (!_cached_decoder_for_BIPRequest) {
    _cached_decoder_for_BIPRequest = function (el: _Element): BIPRequest {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'BIPRequest contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'slaveEndpointIRI';
      sequence[1].name = 'masterEndpointIRI';
      sequence[2].name = 'linkNumber';
      sequence[3].name = 'requestId';
      sequence[4].name = 'params';
      let slaveEndpointIRI!: EndpointIRI;
      let masterEndpointIRI!: EndpointIRI;
      let linkNumber!: UnsignedInt;
      let requestId!: UnsignedInt;
      let params!: BIPRequest_params;
      slaveEndpointIRI = _decode_EndpointIRI(sequence[0]);
      masterEndpointIRI = _decode_EndpointIRI(sequence[1]);
      linkNumber = _decode_UnsignedInt(sequence[2]);
      requestId = _decode_UnsignedInt(sequence[3]);
      params = _decode_BIPRequest_params(sequence[4]);
      return new BIPRequest(
        slaveEndpointIRI,
        masterEndpointIRI,
        linkNumber,
        requestId,
        params
      );
    };
  }
  return _cached_decoder_for_BIPRequest(el);
}


let _cached_encoder_for_BIPRequest: $.ASN1Encoder<BIPRequest> | null = null;


/**
 * @summary Encodes a(n) BIPRequest into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPRequest, encoded as an ASN.1 Element.
 */
export function _encode_BIPRequest(
  value: BIPRequest,
  elGetter: $.ASN1Encoder<BIPRequest>
): _Element {
  if (!_cached_encoder_for_BIPRequest) {
    _cached_encoder_for_BIPRequest = function (
      value: BIPRequest    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(value.slaveEndpointIRI, $.BER),
            /* REQUIRED   */ _encode_EndpointIRI(
              value.masterEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedInt(value.linkNumber, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.requestId, $.BER),
            /* REQUIRED   */ _encode_BIPRequest_params(value.params, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIPRequest(value, elGetter);
}


/* eslint-enable */
