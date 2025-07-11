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

/**
 * @summary LinkCallParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkCallParams ::= SEQUENCE {slaveEndpointIRI  EndpointIRI
 * }
 * ```
 *
 */
export class LinkCallParams {
  constructor(
    /**
     * @summary `slaveEndpointIRI`.
     * @public
     * @readonly
     */
    readonly slaveEndpointIRI: EndpointIRI
  ) {}

  /**
   * @summary Restructures an object into a LinkCallParams
   * @description
   *
   * This takes an `object` and converts it to a `LinkCallParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LinkCallParams`.
   * @returns {LinkCallParams}
   */
  public static _from_object(
    _o: { [_K in keyof LinkCallParams]: LinkCallParams[_K] }
  ): LinkCallParams {
    return new LinkCallParams(_o.slaveEndpointIRI);
  }
}


/**
 * @summary The Leading Root Component Types of LinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LinkCallParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'slaveEndpointIRI',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of LinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LinkCallParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LinkCallParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LinkCallParams: $.ComponentSpec[] = [];


let _cached_decoder_for_LinkCallParams: $.ASN1Decoder<LinkCallParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LinkCallParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkCallParams} The decoded data structure.
 */
export function _decode_LinkCallParams(el: _Element): LinkCallParams {
  if (!_cached_decoder_for_LinkCallParams) {
    _cached_decoder_for_LinkCallParams = function (
      el: _Element
    ): LinkCallParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'LinkCallParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'slaveEndpointIRI';
      let slaveEndpointIRI!: EndpointIRI;
      slaveEndpointIRI = _decode_EndpointIRI(sequence[0]);
      return new LinkCallParams(slaveEndpointIRI);
    };
  }
  return _cached_decoder_for_LinkCallParams(el);
}


let _cached_encoder_for_LinkCallParams: $.ASN1Encoder<LinkCallParams> | null = null;


/**
 * @summary Encodes a(n) LinkCallParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkCallParams, encoded as an ASN.1 Element.
 */
export function _encode_LinkCallParams(
  value: LinkCallParams,
  elGetter: $.ASN1Encoder<LinkCallParams>
): _Element {
  if (!_cached_encoder_for_LinkCallParams) {
    _cached_encoder_for_LinkCallParams = function (
      value: LinkCallParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EndpointIRI(value.slaveEndpointIRI, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_LinkCallParams(value, elGetter);
}


/* eslint-enable */
