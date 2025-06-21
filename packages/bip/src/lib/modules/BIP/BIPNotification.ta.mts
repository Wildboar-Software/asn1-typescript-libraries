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
import * as $ from 'asn1-ts/dist/functional.mjs';
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
  BIPNotification_params,
  _decode_BIPNotification_params,
  _encode_BIPNotification_params,
} from '../BIP/BIPNotification-params.ta.mjs';

/**
 * @summary BIPNotification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPNotification ::= SEQUENCE {
 *   masterEndpointIRI  EndpointIRI,
 *   slaveEndpointIRI   EndpointIRI,
 *   linkNumber         UnsignedInt,
 *   notificationId     UnsignedInt,
 *   params
 *     CHOICE {masterDeletionEvent     MasterDeletionEvent-NotificationParams,
 *             unitEvent               UnitEvent-NotificationParams,
 *             guiSelectEvent          GUISelectEvent-NotificationParams,
 *             guiStateEvent           GUIStateEvent-NotificationParams,
 *             guiProgressEvent        GUIProgressEvent-NotificationParams,
 *             bspRegistrationEvent    BSPRegistrationEvent-NotificationParams,
 *             bspUnregistrationEvent  BSPUnregistrationEvent-NotificationParams,
 *             bfpRegistrationEvent    BFPRegistrationEvent-NotificationParams,
 *             bfpUnregistrationEvent  BFPUnregistrationEvent-NotificationParams,
 *             ...}
 * }
 * ```
 *
 * @class
 */
export class BIPNotification {
  constructor(
    /**
     * @summary `masterEndpointIRI`.
     * @public
     * @readonly
     */
    readonly masterEndpointIRI: EndpointIRI,
    /**
     * @summary `slaveEndpointIRI`.
     * @public
     * @readonly
     */
    readonly slaveEndpointIRI: EndpointIRI,
    /**
     * @summary `linkNumber`.
     * @public
     * @readonly
     */
    readonly linkNumber: UnsignedInt,
    /**
     * @summary `notificationId`.
     * @public
     * @readonly
     */
    readonly notificationId: UnsignedInt,
    /**
     * @summary `params`.
     * @public
     * @readonly
     */
    readonly params: BIPNotification_params
  ) {}

  /**
   * @summary Restructures an object into a BIPNotification
   * @description
   *
   * This takes an `object` and converts it to a `BIPNotification`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIPNotification`.
   * @returns {BIPNotification}
   */
  public static _from_object(
    _o: { [_K in keyof BIPNotification]: BIPNotification[_K] }
  ): BIPNotification {
    return new BIPNotification(
      _o.masterEndpointIRI,
      _o.slaveEndpointIRI,
      _o.linkNumber,
      _o.notificationId,
      _o.params
    );
  }
}


/**
 * @summary The Leading Root Component Types of BIPNotification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIPNotification: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'masterEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'slaveEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'linkNumber',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'notificationId',
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
 * @summary The Trailing Root Component Types of BIPNotification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIPNotification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BIPNotification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIPNotification: $.ComponentSpec[] = [];


let _cached_decoder_for_BIPNotification: $.ASN1Decoder<BIPNotification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPNotification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPNotification} The decoded data structure.
 */
export function _decode_BIPNotification(el: _Element) {
  if (!_cached_decoder_for_BIPNotification) {
    _cached_decoder_for_BIPNotification = function (
      el: _Element
    ): BIPNotification {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 5) {
        throw new _ConstructionError(
          'BIPNotification contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'masterEndpointIRI';
      sequence[1].name = 'slaveEndpointIRI';
      sequence[2].name = 'linkNumber';
      sequence[3].name = 'notificationId';
      sequence[4].name = 'params';
      let masterEndpointIRI!: EndpointIRI;
      let slaveEndpointIRI!: EndpointIRI;
      let linkNumber!: UnsignedInt;
      let notificationId!: UnsignedInt;
      let params!: BIPNotification_params;
      masterEndpointIRI = _decode_EndpointIRI(sequence[0]);
      slaveEndpointIRI = _decode_EndpointIRI(sequence[1]);
      linkNumber = _decode_UnsignedInt(sequence[2]);
      notificationId = _decode_UnsignedInt(sequence[3]);
      params = _decode_BIPNotification_params(sequence[4]);
      return new BIPNotification(
        masterEndpointIRI,
        slaveEndpointIRI,
        linkNumber,
        notificationId,
        params
      );
    };
  }
  return _cached_decoder_for_BIPNotification(el);
}


let _cached_encoder_for_BIPNotification: $.ASN1Encoder<BIPNotification> | null = null;


/**
 * @summary Encodes a(n) BIPNotification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPNotification, encoded as an ASN.1 Element.
 */
export function _encode_BIPNotification(
  value: BIPNotification,
  elGetter: $.ASN1Encoder<BIPNotification>
) {
  if (!_cached_encoder_for_BIPNotification) {
    _cached_encoder_for_BIPNotification = function (
      value: BIPNotification    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(
              value.masterEndpointIRI,
              $.BER
            ),
            /* REQUIRED   */ _encode_EndpointIRI(value.slaveEndpointIRI, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.linkNumber, $.BER),
            /* REQUIRED   */ _encode_UnsignedInt(value.notificationId, $.BER),
            /* REQUIRED   */ _encode_BIPNotification_params(
              value.params,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIPNotification(value, elGetter);
}


/* eslint-enable */
