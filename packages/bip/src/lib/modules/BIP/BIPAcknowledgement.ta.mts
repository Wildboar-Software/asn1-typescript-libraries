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
  BIPAcknowledgement_params,
  _decode_BIPAcknowledgement_params,
  _encode_BIPAcknowledgement_params,
} from '../BIP/BIPAcknowledgement-params.ta.mjs';
import {
  BioAPI_RETURN,
  _decode_BioAPI_RETURN,
  _encode_BioAPI_RETURN,
} from '../BIP/BioAPI-RETURN.ta.mjs';

/**
 * @summary BIPAcknowledgement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPAcknowledgement ::= SEQUENCE {
 *   masterEndpointIRI  EndpointIRI,
 *   slaveEndpointIRI   EndpointIRI,
 *   linkNumber         UnsignedInt,
 *   notificationId     UnsignedInt,
 *   params
 *     CHOICE {guiSelectEvent    GUISelectEvent-AcknowledgementParams,
 *             guiStateEvent     GUIStateEvent-AcknowledgementParams,
 *             guiProgressEvent  GUIProgressEvent-AcknowledgementParams,
 *             ...},
 *   returnValue        BioAPI-RETURN
 * }
 * ```
 *
 * @class
 */
export class BIPAcknowledgement {
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
    readonly params: BIPAcknowledgement_params,
    /**
     * @summary `returnValue`.
     * @public
     * @readonly
     */
    readonly returnValue: BioAPI_RETURN
  ) {}

  /**
   * @summary Restructures an object into a BIPAcknowledgement
   * @description
   *
   * This takes an `object` and converts it to a `BIPAcknowledgement`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BIPAcknowledgement`.
   * @returns {BIPAcknowledgement}
   */
  public static _from_object(
    _o: { [_K in keyof BIPAcknowledgement]: BIPAcknowledgement[_K] }
  ): BIPAcknowledgement {
    return new BIPAcknowledgement(
      _o.masterEndpointIRI,
      _o.slaveEndpointIRI,
      _o.linkNumber,
      _o.notificationId,
      _o.params,
      _o.returnValue
    );
  }
}


/**
 * @summary The Leading Root Component Types of BIPAcknowledgement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BIPAcknowledgement: $.ComponentSpec[] = [
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
  new $.ComponentSpec(
    'returnValue',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
];


/**
 * @summary The Trailing Root Component Types of BIPAcknowledgement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BIPAcknowledgement: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BIPAcknowledgement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BIPAcknowledgement: $.ComponentSpec[] = [];


let _cached_decoder_for_BIPAcknowledgement: $.ASN1Decoder<BIPAcknowledgement> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPAcknowledgement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPAcknowledgement} The decoded data structure.
 */
export function _decode_BIPAcknowledgement(el: _Element) {
  if (!_cached_decoder_for_BIPAcknowledgement) {
    _cached_decoder_for_BIPAcknowledgement = function (
      el: _Element
    ): BIPAcknowledgement {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 6) {
        throw new _ConstructionError(
          'BIPAcknowledgement contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'masterEndpointIRI';
      sequence[1].name = 'slaveEndpointIRI';
      sequence[2].name = 'linkNumber';
      sequence[3].name = 'notificationId';
      sequence[4].name = 'params';
      sequence[5].name = 'returnValue';
      let masterEndpointIRI!: EndpointIRI;
      let slaveEndpointIRI!: EndpointIRI;
      let linkNumber!: UnsignedInt;
      let notificationId!: UnsignedInt;
      let params!: BIPAcknowledgement_params;
      let returnValue!: BioAPI_RETURN;
      masterEndpointIRI = _decode_EndpointIRI(sequence[0]);
      slaveEndpointIRI = _decode_EndpointIRI(sequence[1]);
      linkNumber = _decode_UnsignedInt(sequence[2]);
      notificationId = _decode_UnsignedInt(sequence[3]);
      params = _decode_BIPAcknowledgement_params(sequence[4]);
      returnValue = _decode_BioAPI_RETURN(sequence[5]);
      return new BIPAcknowledgement(
        masterEndpointIRI,
        slaveEndpointIRI,
        linkNumber,
        notificationId,
        params,
        returnValue
      );
    };
  }
  return _cached_decoder_for_BIPAcknowledgement(el);
}


let _cached_encoder_for_BIPAcknowledgement: $.ASN1Encoder<BIPAcknowledgement> | null = null;


/**
 * @summary Encodes a(n) BIPAcknowledgement into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPAcknowledgement, encoded as an ASN.1 Element.
 */
export function _encode_BIPAcknowledgement(
  value: BIPAcknowledgement,
  elGetter: $.ASN1Encoder<BIPAcknowledgement>
) {
  if (!_cached_encoder_for_BIPAcknowledgement) {
    _cached_encoder_for_BIPAcknowledgement = function (
      value: BIPAcknowledgement    ): _Element {
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
            /* REQUIRED   */ _encode_BIPAcknowledgement_params(
              value.params,
              $.BER
            ),
            /* REQUIRED   */ _encode_BioAPI_RETURN(value.returnValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BIPAcknowledgement(value, elGetter);
}


/* eslint-enable */
