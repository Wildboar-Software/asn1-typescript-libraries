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
  BioAPI_HANDLE,
  _decode_BioAPI_HANDLE,
  _encode_BioAPI_HANDLE,
} from '../BIP/BioAPI-HANDLE.ta.mjs';

/**
 * @summary Cancel_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Cancel-RequestParams ::= SEQUENCE {originalBSPHandle  BioAPI-HANDLE
 * }
 * ```
 *
 */
export class Cancel_RequestParams {
  constructor(
    /**
     * @summary `originalBSPHandle`.
     * @public
     * @readonly
     */
    readonly originalBSPHandle: BioAPI_HANDLE
  ) {}

  /**
   * @summary Restructures an object into a Cancel_RequestParams
   * @description
   *
   * This takes an `object` and converts it to a `Cancel_RequestParams`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Cancel_RequestParams`.
   * @returns {Cancel_RequestParams}
   */
  public static _from_object(
    _o: { [_K in keyof Cancel_RequestParams]: Cancel_RequestParams[_K] }
  ): Cancel_RequestParams {
    return new Cancel_RequestParams(_o.originalBSPHandle);
  }
}


/**
 * @summary The Leading Root Component Types of Cancel_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Cancel_RequestParams: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'originalBSPHandle',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of Cancel_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Cancel_RequestParams: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Cancel_RequestParams
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Cancel_RequestParams: $.ComponentSpec[] = [];


let _cached_decoder_for_Cancel_RequestParams: $.ASN1Decoder<Cancel_RequestParams> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Cancel_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Cancel_RequestParams} The decoded data structure.
 */
export function _decode_Cancel_RequestParams(el: _Element): Cancel_RequestParams {
  if (!_cached_decoder_for_Cancel_RequestParams) {
    _cached_decoder_for_Cancel_RequestParams = function (
      el: _Element
    ): Cancel_RequestParams {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'Cancel-RequestParams contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'originalBSPHandle';
      let originalBSPHandle!: BioAPI_HANDLE;
      originalBSPHandle = _decode_BioAPI_HANDLE(sequence[0]);
      return new Cancel_RequestParams(originalBSPHandle);
    };
  }
  return _cached_decoder_for_Cancel_RequestParams(el);
}


let _cached_encoder_for_Cancel_RequestParams: $.ASN1Encoder<Cancel_RequestParams> | null = null;


/**
 * @summary Encodes a(n) Cancel_RequestParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Cancel_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_Cancel_RequestParams(
  value: Cancel_RequestParams,
  elGetter: $.ASN1Encoder<Cancel_RequestParams>
): _Element {
  if (!_cached_encoder_for_Cancel_RequestParams) {
    _cached_encoder_for_Cancel_RequestParams = function (
      value: Cancel_RequestParams    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_BioAPI_HANDLE(
              value.originalBSPHandle,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Cancel_RequestParams(value, elGetter);
}


/* eslint-enable */
