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
} from 'asn1-ts';
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
  BIPResponse_params,
  _decode_BIPResponse_params,
  _encode_BIPResponse_params,
} from '../BIP/BIPResponse-params.ta.mjs';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta.mjs';

/**
 * @summary BIPResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPResponse ::= SEQUENCE {
 *   slaveEndpointIRI   EndpointIRI,
 *   masterEndpointIRI  EndpointIRI,
 *   linkNumber         UnsignedInt,
 *   requestId          UnsignedInt,
 *   params
 *     CHOICE {addMaster                   AddMaster-ResponseParams,
 *             deleteMaster                DeleteMaster-ResponseParams,
 *             bspLoad                     BSPLoad-ResponseParams,
 *             bspUnload                   BSPUnload-ResponseParams,
 *             queryUnits                  QueryUnits-ResponseParams,
 *             queryBFPs                   QueryBFPs-ResponseParams,
 *             bspAttach                   BSPAttach-ResponseParams,
 *             bspDetach                   BSPDetach-ResponseParams,
 *             enableUnitEvents            EnableUnitEvents-ResponseParams,
 *             enableEventNotifications    EnableEventNotifications-ResponseParams,
 *             controlUnit                 ControlUnit-ResponseParams,
 *             control                     Control-ResponseParams,
 *             freeBIRHandle               FreeBIRHandle-ResponseParams,
 *             getBIRFromHandle            GetBIRFromHandle-ResponseParams,
 *             getHeaderFromHandle         GetHeaderFromHandle-ResponseParams,
 *             subscribeToGUIEvents        SubscribeToGUIEvents-ResponseParams,
 *             unsubscribeFromGUIEvents    UnsubscribeFromGUIEvents-ResponseParams,
 *             redirectGUIEvents           RedirectGUIEvents-ResponseParams,
 *             unredirectGUIEvents         UnredirectGUIEvents-ResponseParams,
 *             queryGUIEventSubscriptions
 *               QueryGUIEventSubscriptions-ResponseParams,
 *             notifyGUISelectEvent        NotifyGUISelectEvent-ResponseParams,
 *             notifyGUIStateEvent         NotifyGUIStateEvent-ResponseParams,
 *             notifyGUIProgressEvent      NotifyGUIProgressEvent-ResponseParams,
 *             capture                     Capture-ResponseParams,
 *             createTemplate              CreateTemplate-ResponseParams,
 *             process                     Process-ResponseParams,
 *             processWithAuxBIR           ProcessWithAuxBIR-ResponseParams,
 *             verifyMatch                 VerifyMatch-ResponseParams,
 *             identifyMatch               IdentifyMatch-ResponseParams,
 *             enroll                      Enroll-ResponseParams,
 *             verify                      Verify-ResponseParams,
 *             identify                    Identify-ResponseParams,
 *             import                      Import-ResponseParams,
 *             presetIdentifyPopulation    PresetIdentifyPopulation-ResponseParams,
 *             transform                   Transform-ResponseParams,
 *             dbOpen                      DbOpen-ResponseParams,
 *             dbClose                     DbClose-ResponseParams,
 *             dbCreate                    DbCreate-ResponseParams,
 *             dbDelete                    DbDelete-ResponseParams,
 *             dbSetMarker                 DbSetMarker-ResponseParams,
 *             dbFreeMarker                DbFreeMarker-ResponseParams,
 *             dbStore                     DbStoreBIR-ResponseParams,
 *             dbGetBIR                    DbGetBIR-ResponseParams,
 *             dbGetNextBIR                DbGetNextBIR-ResponseParams,
 *             dbDeleteBIR                 DbDeleteBIR-ResponseParams,
 *             calibrateSensor             CalibrateSensor-ResponseParams,
 *             setPowerMode                SetPowerMode-ResponseParams,
 *             setIndicatorStatus          SetIndicatorStatus-ResponseParams,
 *             getIndicatorStatus          GetIndicatorStatus-ResponseParams,
 *             cancel                      Cancel-ResponseParams,
 *             registedBSP                 RegisterBSP-ResponseParams,
 *             unregisterBSP               UnregisterBSP-ResponseParams,
 *             registerBFP                 RegisterBFP-ResponseParams,
 *             unregisterBFP               UnregisterBFP-ResponseParams,
 *             ...},
 *   returnValue        BioAPI-RETURN
 * }
 * ```
 *
 * @class
 */
export class BIPResponse {
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
    readonly params: BIPResponse_params,
    /**
     * @summary `returnValue`.
     * @public
     * @readonly
     */
    readonly returnValue: BioAPI_RETURN
  ) {}

  /**
   * @summary Restructures an object into a BIPResponse
   * @description
   *
   * This takes an `object` and converts it to a `BIPResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIPResponse`.
   * @returns {BIPResponse}
   */
  public static _from_object(
    _o: { [_K in keyof BIPResponse]: BIPResponse[_K] }
  ): BIPResponse {
    return new BIPResponse(
      _o.slaveEndpointIRI,
      _o.masterEndpointIRI,
      _o.linkNumber,
      _o.requestId,
      _o.params,
      _o.returnValue
    );
  }
}


/**
 * @summary The Leading Root Component Types of BIPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIPResponse: $.ComponentSpec[] = [
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
  new $.ComponentSpec(
    'returnValue',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of BIPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIPResponse: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BIPResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIPResponse: $.ComponentSpec[] = [];


let _cached_decoder_for_BIPResponse: $.ASN1Decoder<BIPResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPResponse} The decoded data structure.
 */
export function _decode_BIPResponse(el: _Element) {
  if (!_cached_decoder_for_BIPResponse) {
    _cached_decoder_for_BIPResponse = function (el: _Element): BIPResponse {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 6) {
        throw new _ConstructionError(
          'BIPResponse contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'slaveEndpointIRI';
      sequence[1].name = 'masterEndpointIRI';
      sequence[2].name = 'linkNumber';
      sequence[3].name = 'requestId';
      sequence[4].name = 'params';
      sequence[5].name = 'returnValue';
      let slaveEndpointIRI!: EndpointIRI;
      let masterEndpointIRI!: EndpointIRI;
      let linkNumber!: UnsignedInt;
      let requestId!: UnsignedInt;
      let params!: BIPResponse_params;
      let returnValue!: BioAPI_RETURN;
      slaveEndpointIRI = _decode_EndpointIRI(sequence[0]);
      masterEndpointIRI = _decode_EndpointIRI(sequence[1]);
      linkNumber = _decode_UnsignedInt(sequence[2]);
      requestId = _decode_UnsignedInt(sequence[3]);
      params = _decode_BIPResponse_params(sequence[4]);
      returnValue = _decode_BioAPI_RETURN(sequence[5]);
      return new BIPResponse(
        slaveEndpointIRI,
        masterEndpointIRI,
        linkNumber,
        requestId,
        params,
        returnValue
      );
    };
  }
  return _cached_decoder_for_BIPResponse(el);
}


let _cached_encoder_for_BIPResponse: $.ASN1Encoder<BIPResponse> | null = null;


/**
 * @summary Encodes a(n) BIPResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPResponse, encoded as an ASN.1 Element.
 */
export function _encode_BIPResponse(
  value: BIPResponse,
  elGetter: $.ASN1Encoder<BIPResponse>
) {
  if (!_cached_encoder_for_BIPResponse) {
    _cached_encoder_for_BIPResponse = function (
      value: BIPResponse    ): _Element {
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
            /* REQUIRED   */ _encode_BIPResponse_params(value.params, $.BER),
            /* REQUIRED   */ _encode_BioAPI_RETURN(value.returnValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIPResponse(value, elGetter);
}


/* eslint-enable */
