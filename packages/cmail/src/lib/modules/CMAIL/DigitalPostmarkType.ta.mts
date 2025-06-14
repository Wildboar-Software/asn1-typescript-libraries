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
  HashValueType,
  _decode_HashValueType,
  _encode_HashValueType,
} from '../CMAIL/HashValueType.ta.mjs';
import {
  SignatureType,
  _decode_SignatureType,
  _encode_SignatureType,
} from '../CMAIL/SignatureType.ta.mjs';
import {
  DigitalPostmarkType_deliveryType,
  _enum_for_DigitalPostmarkType_deliveryType,
  _decode_DigitalPostmarkType_deliveryType,
  _encode_DigitalPostmarkType_deliveryType,
} from '../CMAIL/DigitalPostmarkType-deliveryType.ta.mjs';
import {
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DigitalPostmarkType */
/**
 * @summary DigitalPostmarkType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DigitalPostmarkType ::= SEQUENCE {
 *     mimeMessageHash    SEQUENCE (SIZE(1..MAX)) OF
 *         mimeMessageHash HashValueType,
 *     signature    SEQUENCE (SIZE(0..MAX)) OF
 *         signature    SignatureType,
 *     envelopeId    String,
 *     deliveryType    ENUMERATED {
 *         certifiedMail,
 *         ...
 *         }
 *     }
 * ```
 *
 * @class
 */
export class DigitalPostmarkType {
  constructor(
    /**
     * @summary `mimeMessageHash`.
     * @public
     * @readonly
     */
    readonly mimeMessageHash: HashValueType[],
    /**
     * @summary `signature`.
     * @public
     * @readonly
     */
    readonly signature: SignatureType[],
    /**
     * @summary `envelopeId`.
     * @public
     * @readonly
     */
    readonly envelopeId: String,
    /**
     * @summary `deliveryType`.
     * @public
     * @readonly
     */
    readonly deliveryType: DigitalPostmarkType_deliveryType
  ) {}

  /**
   * @summary Restructures an object into a DigitalPostmarkType
   * @description
   *
   * This takes an `object` and converts it to a `DigitalPostmarkType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `DigitalPostmarkType`.
   * @returns {DigitalPostmarkType}
   */
  public static _from_object(
    _o: { [_K in keyof DigitalPostmarkType]: DigitalPostmarkType[_K] }
  ): DigitalPostmarkType {
    return new DigitalPostmarkType(
      _o.mimeMessageHash,
      _o.signature,
      _o.envelopeId,
      _o.deliveryType
    );
  }

  /**
   * @summary The enum used as the type of the component `deliveryType`
   * @public
   * @static
   */

  public static _enum_for_deliveryType = _enum_for_DigitalPostmarkType_deliveryType;
}
/* END_OF_SYMBOL_DEFINITION DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DigitalPostmarkType */
/**
 * @summary The Leading Root Component Types of DigitalPostmarkType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DigitalPostmarkType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'mimeMessageHash',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'signature',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  ,
  /* FIXME: envelopeId COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
    'deliveryType',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DigitalPostmarkType */
/**
 * @summary The Trailing Root Component Types of DigitalPostmarkType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DigitalPostmarkType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DigitalPostmarkType */
/**
 * @summary The Extension Addition Component Types of DigitalPostmarkType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DigitalPostmarkType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType */
let _cached_decoder_for_DigitalPostmarkType: $.ASN1Decoder<DigitalPostmarkType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType */
/**
 * @summary Decodes an ASN.1 element into a(n) DigitalPostmarkType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DigitalPostmarkType} The decoded data structure.
 */
export function _decode_DigitalPostmarkType(el: _Element) {
  if (!_cached_decoder_for_DigitalPostmarkType) {
    _cached_decoder_for_DigitalPostmarkType = function (
      el: _Element
    ): DigitalPostmarkType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 4) {
        throw new _ConstructionError(
          'DigitalPostmarkType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'mimeMessageHash';
      sequence[1].name = 'signature';
      sequence[2].name = 'envelopeId';
      sequence[3].name = 'deliveryType';
      let mimeMessageHash!: HashValueType[];
      let signature!: SignatureType[];
      let envelopeId!: String;
      let deliveryType!: DigitalPostmarkType_deliveryType;
      mimeMessageHash = $._decodeSequenceOf<HashValueType>(
        () => _decode_HashValueType
      )(sequence[0]);
      signature = $._decodeSequenceOf<SignatureType>(
        () => _decode_SignatureType
      )(sequence[1]);
      envelopeId = _decode_String(sequence[2]);
      deliveryType = _decode_DigitalPostmarkType_deliveryType(sequence[3]);
      return new DigitalPostmarkType(
        mimeMessageHash,
        signature,
        envelopeId,
        deliveryType
      );
    };
  }
  return _cached_decoder_for_DigitalPostmarkType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType */
let _cached_encoder_for_DigitalPostmarkType: $.ASN1Encoder<DigitalPostmarkType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DigitalPostmarkType */

/* START_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType */
/**
 * @summary Encodes a(n) DigitalPostmarkType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitalPostmarkType, encoded as an ASN.1 Element.
 */
export function _encode_DigitalPostmarkType(
  value: DigitalPostmarkType,
  elGetter: $.ASN1Encoder<DigitalPostmarkType>
) {
  if (!_cached_encoder_for_DigitalPostmarkType) {
    _cached_encoder_for_DigitalPostmarkType = function (
      value: DigitalPostmarkType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeSequenceOf<HashValueType>(
              () => _encode_HashValueType,
              $.BER
            )(value.mimeMessageHash, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<SignatureType>(
              () => _encode_SignatureType,
              $.BER
            )(value.signature, $.BER),
            /* REQUIRED   */ _encode_String(value.envelopeId, $.BER),
            /* REQUIRED   */ _encode_DigitalPostmarkType_deliveryType(
              value.deliveryType,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_DigitalPostmarkType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DigitalPostmarkType */

/* eslint-enable */
