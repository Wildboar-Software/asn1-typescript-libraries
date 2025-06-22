/* eslint-disable */
import {
  OPTIONAL,
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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';

/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData ::= SEQUENCE {
 *         etype   [0] Int32 -- EncryptionType --,
 *         kvno    [1] UInt32 OPTIONAL,
 *         cipher  [2] OCTET STRING -- ciphertext
 * }
 * ```
 *
 * @class
 */
export class EncryptedData {
  constructor(
    /**
     * @summary `etype`.
     * @public
     * @readonly
     */
    readonly etype: Int32,
    /**
     * @summary `kvno`.
     * @public
     * @readonly
     */
    readonly kvno: OPTIONAL<UInt32>,
    /**
     * @summary `cipher`.
     * @public
     * @readonly
     */
    readonly cipher: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a EncryptedData
   * @description
   *
   * This takes an `object` and converts it to a `EncryptedData`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncryptedData`.
   * @returns {EncryptedData}
   */
  public static _from_object(
    _o: { [_K in keyof EncryptedData]: EncryptedData[_K] }
  ): EncryptedData {
    return new EncryptedData(_o.etype, _o.kvno, _o.cipher);
  }
}


/**
 * @summary The Leading Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedData: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'etype',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'kvno',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'cipher',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedData: $.ComponentSpec[] = [];


let _cached_decoder_for_EncryptedData: $.ASN1Decoder<EncryptedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedData} The decoded data structure.
 */
export function _decode_EncryptedData(el: _Element) {
  if (!_cached_decoder_for_EncryptedData) {
    _cached_decoder_for_EncryptedData = function (el: _Element): EncryptedData {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let etype!: Int32;
      let kvno: OPTIONAL<UInt32>;
      let cipher!: OCTET_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        etype: (_el: _Element): void => {
          etype = $._decode_explicit<Int32>(() => _decode_Int32)(_el);
        },
        kvno: (_el: _Element): void => {
          kvno = $._decode_explicit<UInt32>(() => _decode_UInt32)(_el);
        },
        cipher: (_el: _Element): void => {
          cipher = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EncryptedData,
        _extension_additions_list_spec_for_EncryptedData,
        _root_component_type_list_2_spec_for_EncryptedData,
        undefined
      );
      return new EncryptedData /* SEQUENCE_CONSTRUCTOR_CALL */(
        etype,
        kvno,
        cipher
      );
    };
  }
  return _cached_decoder_for_EncryptedData(el);
}


let _cached_encoder_for_EncryptedData: $.ASN1Encoder<EncryptedData> | null = null;


/**
 * @summary Encodes a(n) EncryptedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedData(
  value: EncryptedData,
  elGetter: $.ASN1Encoder<EncryptedData>
) {
  if (!_cached_encoder_for_EncryptedData) {
    _cached_encoder_for_EncryptedData = function (
      value: EncryptedData    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.etype, $.DER),
            /* IF_ABSENT  */ value.kvno === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_UInt32,
                  $.DER
                )(value.kvno, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => $._encodeOctetString,
              $.DER
            )(value.cipher, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_EncryptedData(value, elGetter);
}


/* eslint-enable */
