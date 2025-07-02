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
  BioAPI_UUID,
  _decode_BioAPI_UUID,
  _encode_BioAPI_UUID,
} from '../BIP/BioAPI-UUID.ta.mjs';
import {
  BioAPI_VERSION,
  _decode_BioAPI_VERSION,
  _encode_BioAPI_VERSION,
} from '../BIP/BioAPI-VERSION.ta.mjs';
import {
  BioAPI_UNIT_LIST_ELEMENT,
  _decode_BioAPI_UNIT_LIST_ELEMENT,
  _encode_BioAPI_UNIT_LIST_ELEMENT,
} from '../BIP/BioAPI-UNIT-LIST-ELEMENT.ta.mjs';

/**
 * @summary BSPAttach_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BSPAttach-RequestParams ::= SEQUENCE {
 *   bspProductUuid  BioAPI-UUID,
 *   version         BioAPI-VERSION,
 *   units
 *     SEQUENCE (SIZE (0..max-unsigned-int)) OF unit BioAPI-UNIT-LIST-ELEMENT
 * }
 * ```
 *
 */
export class BSPAttach_RequestParams {
  constructor(
    /**
     * @summary `bspProductUuid`.
     * @public
     * @readonly
     */
    readonly bspProductUuid: BioAPI_UUID,
    /**
     * @summary `version`.
     * @public
     * @readonly
     */
    readonly version: BioAPI_VERSION,
    /**
     * @summary `units`.
     * @public
     * @readonly
     */
    readonly units: BioAPI_UNIT_LIST_ELEMENT[]
  ) {}

  /**
   * @summary Restructures an object into a BSPAttach_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `BSPAttach_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BSPAttach_RequestParams`.
   * @returns {BSPAttach_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof BSPAttach_RequestParams]: BSPAttach_RequestParams[_K] }
  ): BSPAttach_RequestParams {
    return new BSPAttach_RequestParams(_o.bspProductUuid, _o.version, _o.units);
  }
}


/**
 * @summary The Leading Root Component Types of BSPAttach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BSPAttach_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'bspProductUuid',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'version',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'units',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of BSPAttach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BSPAttach_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BSPAttach_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BSPAttach_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_BSPAttach_RequestParams: $.ASN1Decoder<BSPAttach_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BSPAttach_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BSPAttach_RequestParams} The decoded data structure.
 */
export function _decode_BSPAttach_RequestParams(el: _Element): BSPAttach_RequestParams {
  if (!_cached_decoder_for_BSPAttach_RequestParams) {
    _cached_decoder_for_BSPAttach_RequestParams = function (
      el: _Element
    ): BSPAttach_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BSPAttach-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'bspProductUuid';
      sequence[1].name = 'version';
      sequence[2].name = 'units';
      let bspProductUuid!: BioAPI_UUID;
      let version!: BioAPI_VERSION;
      let units!: BioAPI_UNIT_LIST_ELEMENT[];
      bspProductUuid = _decode_BioAPI_UUID(sequence[0]);
      version = _decode_BioAPI_VERSION(sequence[1]);
      units = $._decodeSequenceOf<BioAPI_UNIT_LIST_ELEMENT>(
        () => _decode_BioAPI_UNIT_LIST_ELEMENT
      )(sequence[2]);
      return new BSPAttach_RequestParams(bspProductUuid, version, units);
    };
  }
  return _cached_decoder_for_BSPAttach_RequestParams(el);
}


let _cached_encoder_for_BSPAttach_RequestParams: $.ASN1Encoder<BSPAttach_RequestParams> | null = null;


/**
 * @summary Encodes a(n) BSPAttach_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSPAttach_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_BSPAttach_RequestParams(
  value: BSPAttach_RequestParams,
  elGetter: $.ASN1Encoder<BSPAttach_RequestParams>
): _Element {
  if (!_cached_encoder_for_BSPAttach_RequestParams) {
    _cached_encoder_for_BSPAttach_RequestParams = function (
      value: BSPAttach_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_UUID(value.bspProductUuid, $.BER),
            /* REQUIRED   */ _encode_BioAPI_VERSION(value.version, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<BioAPI_UNIT_LIST_ELEMENT>(
              () => _encode_BioAPI_UNIT_LIST_ELEMENT,
              $.BER
            )(value.units, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BSPAttach_RequestParams(value, elGetter);
}


/* eslint-enable */
