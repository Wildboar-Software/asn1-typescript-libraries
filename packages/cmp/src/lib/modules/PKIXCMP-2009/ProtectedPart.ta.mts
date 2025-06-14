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
  PKIHeader,
  _decode_PKIHeader,
  _encode_PKIHeader,
} from '../PKIXCMP-2009/PKIHeader.ta.mjs';
import {
  PKIBody,
  _decode_PKIBody,
  _encode_PKIBody,
} from '../PKIXCMP-2009/PKIBody.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ProtectedPart */
/**
 * @summary ProtectedPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedPart ::= SEQUENCE {
 *     header    PKIHeader,
 *     body      PKIBody }
 * ```
 *
 * @class
 */
export class ProtectedPart {
  constructor(
    /**
     * @summary `header`.
     * @public
     * @readonly
     */
    readonly header: PKIHeader,
    /**
     * @summary `body`.
     * @public
     * @readonly
     */
    readonly body: PKIBody
  ) {}

  /**
   * @summary Restructures an object into a ProtectedPart
   * @description
   *
   * This takes an `object` and converts it to a `ProtectedPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ProtectedPart`.
   * @returns {ProtectedPart}
   */
  public static _from_object(
    _o: { [_K in keyof ProtectedPart]: ProtectedPart[_K] }
  ): ProtectedPart {
    return new ProtectedPart(_o.header, _o.body);
  }
}
/* END_OF_SYMBOL_DEFINITION ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedPart */
/**
 * @summary The Leading Root Component Types of ProtectedPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'header',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec('body', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedPart */
/**
 * @summary The Trailing Root Component Types of ProtectedPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedPart */
/**
 * @summary The Extension Addition Component Types of ProtectedPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedPart */
let _cached_decoder_for_ProtectedPart: $.ASN1Decoder<ProtectedPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectedPart */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedPart} The decoded data structure.
 */
export function _decode_ProtectedPart(el: _Element) {
  if (!_cached_decoder_for_ProtectedPart) {
    _cached_decoder_for_ProtectedPart = function (el: _Element): ProtectedPart {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ProtectedPart contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'header';
      sequence[1].name = 'body';
      let header!: PKIHeader;
      let body!: PKIBody;
      header = _decode_PKIHeader(sequence[0]);
      body = _decode_PKIBody(sequence[1]);
      return new ProtectedPart(header, body);
    };
  }
  return _cached_decoder_for_ProtectedPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedPart */
let _cached_encoder_for_ProtectedPart: $.ASN1Encoder<ProtectedPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedPart */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectedPart */
/**
 * @summary Encodes a(n) ProtectedPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedPart, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedPart(
  value: ProtectedPart,
  elGetter: $.ASN1Encoder<ProtectedPart>
) {
  if (!_cached_encoder_for_ProtectedPart) {
    _cached_encoder_for_ProtectedPart = function (
      value: ProtectedPart    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIHeader(value.header, $.BER),
            /* REQUIRED   */ _encode_PKIBody(value.body, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ProtectedPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectedPart */

/* eslint-enable */
