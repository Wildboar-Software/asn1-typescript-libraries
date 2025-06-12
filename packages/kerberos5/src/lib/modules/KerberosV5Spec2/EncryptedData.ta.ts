/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
} from '../KerberosV5Spec2/Int32.ta.js';
export {
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.js';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';
export {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';

/* START_OF_SYMBOL_DEFINITION EncryptedData */
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
/* END_OF_SYMBOL_DEFINITION EncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedData */
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
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'kvno',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cipher',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedData */
/**
 * @summary The Trailing Root Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedData */
/**
 * @summary The Extension Addition Component Types of EncryptedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedData: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */
let _cached_decoder_for_EncryptedData: $.ASN1Decoder<EncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedData */
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
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */
let _cached_encoder_for_EncryptedData: $.ASN1Encoder<EncryptedData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedData */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedData */
/**
 * @summary Encodes a(n) EncryptedData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedData, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedData(
  value: EncryptedData,
  elGetter: $.ASN1Encoder<EncryptedData>
) {
  if (!_cached_encoder_for_EncryptedData) {
    _cached_encoder_for_EncryptedData = function (
      value: EncryptedData,
      elGetter: $.ASN1Encoder<EncryptedData>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.BER
            )(value.etype, $.BER),
            /* IF_ABSENT  */ value.kvno === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_UInt32,
                  $.BER
                )(value.kvno, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => $._encodeOctetString,
              $.BER
            )(value.cipher, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EncryptedData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedData */

/* eslint-enable */
