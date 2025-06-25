/* eslint-disable */
import {
  INTEGER,
  OBJECT_IDENTIFIER,
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

/**
 * @summary gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignatureTransformation-XformedDataType-keyInformation ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class gulsSignatureTransformation_XformedDataType_keyInformation {
  constructor(
    /**
     * @summary `kiClass`.
     * @public
     * @readonly
     */
    readonly kiClass: { local: INTEGER } | { global: OBJECT_IDENTIFIER },
    /**
     * @summary `keyInfo`.
     * @public
     * @readonly
     */
    readonly keyInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a gulsSignatureTransformation_XformedDataType_keyInformation
   * @description
   *
   * This takes an `object` and converts it to a `gulsSignatureTransformation_XformedDataType_keyInformation`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `gulsSignatureTransformation_XformedDataType_keyInformation`.
   * @returns {gulsSignatureTransformation_XformedDataType_keyInformation}
   */
  public static _from_object(
    _o: {
      [_K in keyof gulsSignatureTransformation_XformedDataType_keyInformation]: gulsSignatureTransformation_XformedDataType_keyInformation[_K];
    }
  ): gulsSignatureTransformation_XformedDataType_keyInformation {
    return new gulsSignatureTransformation_XformedDataType_keyInformation(
      _o.kiClass,
      _o.keyInfo
    );
  }
}


/**
 * @summary The Leading Root Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'kiClass',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'keyInfo',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of gulsSignatureTransformation_XformedDataType_keyInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ComponentSpec[] = [];


let _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ASN1Decoder<gulsSignatureTransformation_XformedDataType_keyInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) gulsSignatureTransformation_XformedDataType_keyInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {gulsSignatureTransformation_XformedDataType_keyInformation} The decoded data structure.
 */
export function _decode_gulsSignatureTransformation_XformedDataType_keyInformation(
  el: _Element
): gulsSignatureTransformation_XformedDataType_keyInformation {
  if (
    !_cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation
  ) {
    _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation = function (
      el: _Element
    ): gulsSignatureTransformation_XformedDataType_keyInformation {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'gulsSignatureTransformation-XformedDataType-keyInformation contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'kiClass';
      sequence[1].name = 'keyInfo';
      let kiClass!: { local: INTEGER } | { global: OBJECT_IDENTIFIER };
      let keyInfo!: _Element;
      kiClass = $._decode_inextensible_choice<typeof kiClass>({
        'UNIVERSAL 2': ['local', $._decodeInteger],
        'UNIVERSAL 6': ['global', $._decodeObjectIdentifier],
      })(sequence[0]);
      keyInfo = $._decodeAny(sequence[1]);
      return new gulsSignatureTransformation_XformedDataType_keyInformation(
        kiClass,
        keyInfo
      );
    };
  }
  return _cached_decoder_for_gulsSignatureTransformation_XformedDataType_keyInformation(
    el
  );
}


let _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType_keyInformation> | null = null;


/**
 * @summary Encodes a(n) gulsSignatureTransformation_XformedDataType_keyInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The gulsSignatureTransformation_XformedDataType_keyInformation, encoded as an ASN.1 Element.
 */
export function _encode_gulsSignatureTransformation_XformedDataType_keyInformation(
  value: gulsSignatureTransformation_XformedDataType_keyInformation,
  elGetter: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType_keyInformation>
): _Element {
  if (
    !_cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation
  ) {
    _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation = function (
      value: gulsSignatureTransformation_XformedDataType_keyInformation    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            ("local" in value.kiClass)
              ? $._encodeInteger(value.kiClass.local, $.DER)
              : $._encodeObjectIdentifier(value.kiClass.global, $.DER),
            $._encodeAny(
              value.keyInfo,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_gulsSignatureTransformation_XformedDataType_keyInformation(
    value,
    elGetter
  );
}


/* eslint-enable */
