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
  UnsignedShort,
  _decode_UnsignedShort,
  _encode_UnsignedShort,
} from '../BIP/UnsignedShort.ta.mjs';

/**
 * @summary BioAPI_BIR_BIOMETRIC_DATA_FORMAT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-BIR-BIOMETRIC-DATA-FORMAT ::= SEQUENCE {
 *   formatOwner  UnsignedShort,
 *   formatType   UnsignedShort
 * }
 * ```
 *
 * @class
 */
export class BioAPI_BIR_BIOMETRIC_DATA_FORMAT {
  constructor(
    /**
     * @summary `formatOwner`.
     * @public
     * @readonly
     */
    readonly formatOwner: UnsignedShort,
    /**
     * @summary `formatType`.
     * @public
     * @readonly
     */
    readonly formatType: UnsignedShort
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_BIR_BIOMETRIC_DATA_FORMAT
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_BIR_BIOMETRIC_DATA_FORMAT`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_BIR_BIOMETRIC_DATA_FORMAT`.
   * @returns {BioAPI_BIR_BIOMETRIC_DATA_FORMAT}
   */
  public static _from_object(
    _o: {
      [_K in keyof BioAPI_BIR_BIOMETRIC_DATA_FORMAT]: BioAPI_BIR_BIOMETRIC_DATA_FORMAT[_K];
    }
  ): BioAPI_BIR_BIOMETRIC_DATA_FORMAT {
    return new BioAPI_BIR_BIOMETRIC_DATA_FORMAT(_o.formatOwner, _o.formatType);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_BIR_BIOMETRIC_DATA_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'formatOwner',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'formatType',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_BIR_BIOMETRIC_DATA_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_BIR_BIOMETRIC_DATA_FORMAT
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT: $.ASN1Decoder<BioAPI_BIR_BIOMETRIC_DATA_FORMAT> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_BIR_BIOMETRIC_DATA_FORMAT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_BIR_BIOMETRIC_DATA_FORMAT} The decoded data structure.
 */
export function _decode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(el: _Element): BioAPI_BIR_BIOMETRIC_DATA_FORMAT {
  if (!_cached_decoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT) {
    _cached_decoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT = function (
      el: _Element
    ): BioAPI_BIR_BIOMETRIC_DATA_FORMAT {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-BIR-BIOMETRIC-DATA-FORMAT contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'formatOwner';
      sequence[1].name = 'formatType';
      let formatOwner!: UnsignedShort;
      let formatType!: UnsignedShort;
      formatOwner = _decode_UnsignedShort(sequence[0]);
      formatType = _decode_UnsignedShort(sequence[1]);
      return new BioAPI_BIR_BIOMETRIC_DATA_FORMAT(formatOwner, formatType);
    };
  }
  return _cached_decoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(el);
}


let _cached_encoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_DATA_FORMAT> | null = null;


/**
 * @summary Encodes a(n) BioAPI_BIR_BIOMETRIC_DATA_FORMAT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_BIR_BIOMETRIC_DATA_FORMAT, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(
  value: BioAPI_BIR_BIOMETRIC_DATA_FORMAT,
  elGetter: $.ASN1Encoder<BioAPI_BIR_BIOMETRIC_DATA_FORMAT>
): _Element {
  if (!_cached_encoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT) {
    _cached_encoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT = function (
      value: BioAPI_BIR_BIOMETRIC_DATA_FORMAT    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_UnsignedShort(value.formatOwner, $.BER),
            /* REQUIRED   */ _encode_UnsignedShort(value.formatType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_BIR_BIOMETRIC_DATA_FORMAT(value, elGetter);
}


/* eslint-enable */
