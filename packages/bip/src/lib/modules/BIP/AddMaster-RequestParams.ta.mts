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
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta.mjs';

/**
 * @summary AddMaster_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddMaster-RequestParams ::= SEQUENCE {bipVersion  BioAPI-VERSION
 * }
 * ```
 *
 * @class
 */
export class AddMaster_RequestParams {
  constructor(
    /**
     * @summary `bipVersion`.
     * @public
     * @readonly
     */
    readonly bipVersion: BioAPI_VERSION
  ) {}

  /**
   * @summary Restructures an object into a AddMaster_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `AddMaster_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AddMaster_RequestParams`.
   * @returns {AddMaster_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof AddMaster_RequestParams]: AddMaster_RequestParams[_K] }
  ): AddMaster_RequestParams {
    return new AddMaster_RequestParams(_o.bipVersion);
  }
}


/**
 * @summary The Leading Root Component Types of AddMaster_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddMaster_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bipVersion',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of AddMaster_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddMaster_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddMaster_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddMaster_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_AddMaster_RequestParams: $.ASN1Decoder<AddMaster_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddMaster_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddMaster_RequestParams} The decoded data structure.
 */
export function _decode_AddMaster_RequestParams(el: _Element) {
  if (!_cached_decoder_for_AddMaster_RequestParams) {
    _cached_decoder_for_AddMaster_RequestParams = function (
      el: _Element
    ): AddMaster_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'AddMaster-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bipVersion';
      let bipVersion!: BioAPI_VERSION;
      bipVersion = _decode_BioAPI_VERSION(sequence[0]);
      return new AddMaster_RequestParams(bipVersion);
    };
  }
  return _cached_decoder_for_AddMaster_RequestParams(el);
}


let _cached_encoder_for_AddMaster_RequestParams: $.ASN1Encoder<AddMaster_RequestParams> | null = null;


/**
 * @summary Encodes a(n) AddMaster_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddMaster_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_AddMaster_RequestParams(
  value: AddMaster_RequestParams,
  elGetter: $.ASN1Encoder<AddMaster_RequestParams>
) {
  if (!_cached_encoder_for_AddMaster_RequestParams) {
    _cached_encoder_for_AddMaster_RequestParams = function (
      value: AddMaster_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_VERSION(value.bipVersion, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AddMaster_RequestParams(value, elGetter);
}


/* eslint-enable */
