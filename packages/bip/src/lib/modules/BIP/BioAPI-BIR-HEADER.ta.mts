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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  UnsignedShort,
  _decode_UnsignedShort,
  _encode_UnsignedShort,
} from '../BIP/UnsignedShort.ta.mjs';

/**
 * @summary BioAPI_BIR_HEADER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-HEADER ::= SEQUENCE {
 *   patronFormatOwner  UnsignedShort,
 *   patronFormatType   UnsignedShort,
 *   formattedBIR       OCTET STRING
 * }
 * ```
 *
 */
export class BioAPI_BIR_HEADER {
  constructor(
    /**
     * @summary `patronFormatOwner`.
     * @public
     * @readonly
     */
    readonly patronFormatOwner: UnsignedShort,
    /**
     * @summary `patronFormatType`.
     * @public
     * @readonly
     */
    readonly patronFormatType: UnsignedShort,
    /**
     * @summary `formattedBIR`.
     * @public
     * @readonly
     */
    readonly formattedBIR: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_HEADER
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_HEADER`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_HEADER`.
   * @returns {BioAPI_BIR_HEADER}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_BIR_HEADER]: BioAPI_BIR_HEADER[_K] }
  ): BioAPI_BIR_HEADER {
    return new BioAPI_BIR_HEADER(
      _o.patronFormatOwner,
      _o.patronFormatType,
      _o.formattedBIR
    );
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_BIR_HEADER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_HEADER: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'patronFormatOwner',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'patronFormatType',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'formattedBIR',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_HEADER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_HEADER: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_HEADER
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_HEADER: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BIR_HEADER: $.ASN1Decoder<BioAPI_BIR_HEADER> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_HEADER
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_HEADER} The decoded data structure.
 */
export function _decode_BioAPI_BIR_HEADER(el: _Element): BioAPI_BIR_HEADER {
  if (!_cached_decoder_for_BioAPI_BIR_HEADER) {
    _cached_decoder_for_BioAPI_BIR_HEADER = function (
      el: _Element
    ): BioAPI_BIR_HEADER {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BioAPI-BIR-HEADER contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'patronFormatOwner';
      sequence[1].name = 'patronFormatType';
      sequence[2].name = 'formattedBIR';
      let patronFormatOwner!: UnsignedShort;
      let patronFormatType!: UnsignedShort;
      let formattedBIR!: OCTET_STRING;
      patronFormatOwner = _decode_UnsignedShort(sequence[0]);
      patronFormatType = _decode_UnsignedShort(sequence[1]);
      formattedBIR = $._decodeOctetString(sequence[2]);
      return new BioAPI_BIR_HEADER(
        patronFormatOwner,
        patronFormatType,
        formattedBIR
      );
    };
  }
  return _cached_decoder_for_BioAPI_BIR_HEADER(el);
}


let _cached_encoder_for_BioAPI_BIR_HEADER: $.ASN1Encoder<BioAPI_BIR_HEADER> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_HEADER into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_HEADER, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_HEADER(
  value: BioAPI_BIR_HEADER,
  elGetter: $.ASN1Encoder<BioAPI_BIR_HEADER>
): _Element {
  if (!_cached_encoder_for_BioAPI_BIR_HEADER) {
    _cached_encoder_for_BioAPI_BIR_HEADER = function (
      value: BioAPI_BIR_HEADER    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_UnsignedShort(
              value.patronFormatOwner,
              $.BER
            ),
            /* REQUIRED   */ _encode_UnsignedShort(
              value.patronFormatType,
              $.BER
            ),
            /* REQUIRED   */ $._encodeOctetString(value.formattedBIR, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_HEADER(value, elGetter);
}


/* eslint-enable */
