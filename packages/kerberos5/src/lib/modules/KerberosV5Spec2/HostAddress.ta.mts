/* eslint-disable */
import {
  OCTET_STRING,
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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';

/**
 * @summary HostAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HostAddress ::= SEQUENCE  {
 *         addr-type       [0] Int32,
 *         address         [1] OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class HostAddress {
  constructor(
    /**
     * @summary `addr_type`.
     * @public
     * @readonly
     */
    readonly addr_type: Int32,
    /**
     * @summary `address`.
     * @public
     * @readonly
     */
    readonly address: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a HostAddress
   * @description
   *
   * This takes an `object` and converts it to a `HostAddress`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HostAddress`.
   * @returns {HostAddress}
   */
  public static _from_object(
    _o: { [_K in keyof HostAddress]: HostAddress[_K] }
  ): HostAddress {
    return new HostAddress(_o.addr_type, _o.address);
  }
}


/**
 * @summary The Leading Root Component Types of HostAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HostAddress: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'addr-type',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'address',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of HostAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HostAddress: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of HostAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HostAddress: $.ComponentSpec[] = [];


let _cached_decoder_for_HostAddress: $.ASN1Decoder<HostAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HostAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HostAddress} The decoded data structure.
 */
export function _decode_HostAddress(el: _Element) {
  if (!_cached_decoder_for_HostAddress) {
    _cached_decoder_for_HostAddress = function (el: _Element): HostAddress {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'HostAddress contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'addr-type';
      sequence[1].name = 'address';
      let addr_type!: Int32;
      let address!: OCTET_STRING;
      addr_type = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      address = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(
        sequence[1]
      );
      return new HostAddress(addr_type, address);
    };
  }
  return _cached_decoder_for_HostAddress(el);
}


let _cached_encoder_for_HostAddress: $.ASN1Encoder<HostAddress> | null = null;


/**
 * @summary Encodes a(n) HostAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HostAddress, encoded as an ASN.1 Element.
 */
export function _encode_HostAddress(
  value: HostAddress,
  elGetter: $.ASN1Encoder<HostAddress>
) {
  if (!_cached_encoder_for_HostAddress) {
    _cached_encoder_for_HostAddress = function (
      value: HostAddress    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.addr_type, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => $._encodeOctetString,
              $.DER
            )(value.address, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_HostAddress(value, elGetter);
}


/* eslint-enable */
