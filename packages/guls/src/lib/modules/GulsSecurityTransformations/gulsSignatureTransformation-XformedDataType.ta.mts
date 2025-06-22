/* eslint-disable */
import {
  joint_iso_itu_t,
  OPTIONAL,
  BIT_STRING,
  OBJECT_IDENTIFIER,
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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
  gulsSignatureTransformation_XformedDataType_keyInformation,
  _decode_gulsSignatureTransformation_XformedDataType_keyInformation,
  _encode_gulsSignatureTransformation_XformedDataType_keyInformation,
} from '../GulsSecurityTransformations/gulsSignatureTransformation-XformedDataType-keyInformation.ta.mjs';


/**
 * @summary gulsSignatureTransformation_XformedDataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignatureTransformation-XformedDataType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class gulsSignatureTransformation_XformedDataType {
  constructor(
    /**
     * @summary `initEncRules`.
     * @public
     * @readonly
     */
    readonly initEncRules: OPTIONAL<OBJECT_IDENTIFIER>,
    /**
     * @summary `signOrSealAlgorithm`.
     * @public
     * @readonly
     */
    readonly signOrSealAlgorithm: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `hashAlgorithm`.
     * @public
     * @readonly
     */
    readonly hashAlgorithm: OPTIONAL<AlgorithmIdentifier>,
    /**
     * @summary `keyInformation`.
     * @public
     * @readonly
     */
    readonly keyInformation: OPTIONAL<gulsSignatureTransformation_XformedDataType_keyInformation>,
    /**
     * @summary `appendix`.
     * @public
     * @readonly
     */
    readonly appendix: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a gulsSignatureTransformation_XformedDataType
   * @description
   *
   * This takes an `object` and converts it to a `gulsSignatureTransformation_XformedDataType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `gulsSignatureTransformation_XformedDataType`.
   * @returns {gulsSignatureTransformation_XformedDataType}
   */
  public static _from_object(
    _o: {
      [_K in keyof gulsSignatureTransformation_XformedDataType]: gulsSignatureTransformation_XformedDataType[_K];
    }
  ): gulsSignatureTransformation_XformedDataType {
    return new gulsSignatureTransformation_XformedDataType(
      _o.initEncRules,
      _o.signOrSealAlgorithm,
      _o.hashAlgorithm,
      _o.keyInformation,
      _o.appendix
    );
  }

  /**
   * @summary Getter that returns the default value for `initEncRules`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_initEncRules() {
    return _OID.fromParts(
      [/* asn1 */ 1, /* ber-derived */ 2, /* canonical-encoding */ 0],
      joint_iso_itu_t
    );
  }
}


/**
 * @summary The Leading Root Component Types of gulsSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'initEncRules',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'signOrSealAlgorithm',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'hashAlgorithm',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'keyInformation',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'appendix',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of gulsSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of gulsSignatureTransformation_XformedDataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType: $.ComponentSpec[] = [];


let _cached_decoder_for_gulsSignatureTransformation_XformedDataType: $.ASN1Decoder<gulsSignatureTransformation_XformedDataType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) gulsSignatureTransformation_XformedDataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {gulsSignatureTransformation_XformedDataType} The decoded data structure.
 */
export function _decode_gulsSignatureTransformation_XformedDataType(
  el: _Element
) {
  if (!_cached_decoder_for_gulsSignatureTransformation_XformedDataType) {
    _cached_decoder_for_gulsSignatureTransformation_XformedDataType = function (
      el: _Element
    ): gulsSignatureTransformation_XformedDataType {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let initEncRules: OPTIONAL<OBJECT_IDENTIFIER> =
        gulsSignatureTransformation_XformedDataType._default_value_for_initEncRules;
      let signOrSealAlgorithm: OPTIONAL<AlgorithmIdentifier>;
      let hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
      let keyInformation: OPTIONAL<gulsSignatureTransformation_XformedDataType_keyInformation>;
      let appendix!: BIT_STRING;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        initEncRules: (_el: _Element): void => {
          initEncRules = $._decodeObjectIdentifier(_el);
        },
        signOrSealAlgorithm: (_el: _Element): void => {
          signOrSealAlgorithm = _decode_AlgorithmIdentifier(_el);
        },
        hashAlgorithm: (_el: _Element): void => {
          hashAlgorithm = _decode_AlgorithmIdentifier(_el);
        },
        keyInformation: (_el: _Element): void => {
          keyInformation = _decode_gulsSignatureTransformation_XformedDataType_keyInformation(
            _el
          );
        },
        appendix: (_el: _Element): void => {
          appendix = $._decodeBitString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_gulsSignatureTransformation_XformedDataType,
        _extension_additions_list_spec_for_gulsSignatureTransformation_XformedDataType,
        _root_component_type_list_2_spec_for_gulsSignatureTransformation_XformedDataType,
        undefined
      );
      return new gulsSignatureTransformation_XformedDataType /* SEQUENCE_CONSTRUCTOR_CALL */(
        initEncRules,
        signOrSealAlgorithm,
        hashAlgorithm,
        keyInformation,
        appendix
      );
    };
  }
  return _cached_decoder_for_gulsSignatureTransformation_XformedDataType(el);
}


let _cached_encoder_for_gulsSignatureTransformation_XformedDataType: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType> | null = null;


/**
 * @summary Encodes a(n) gulsSignatureTransformation_XformedDataType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The gulsSignatureTransformation_XformedDataType, encoded as an ASN.1 Element.
 */
export function _encode_gulsSignatureTransformation_XformedDataType(
  value: gulsSignatureTransformation_XformedDataType,
  elGetter: $.ASN1Encoder<gulsSignatureTransformation_XformedDataType>
) {
  if (!_cached_encoder_for_gulsSignatureTransformation_XformedDataType) {
    _cached_encoder_for_gulsSignatureTransformation_XformedDataType = function (
      value: gulsSignatureTransformation_XformedDataType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.initEncRules === undefined ||
            $.deepEq(
              value.initEncRules,
              gulsSignatureTransformation_XformedDataType._default_value_for_initEncRules
            )
              ? undefined
              : $._encodeObjectIdentifier(value.initEncRules, $.BER),
            /* IF_ABSENT  */ value.signOrSealAlgorithm === undefined
              ? undefined
              : _encode_AlgorithmIdentifier(value.signOrSealAlgorithm, $.BER),
            /* IF_ABSENT  */ value.hashAlgorithm === undefined
              ? undefined
              : _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER),
            /* IF_ABSENT  */ value.keyInformation === undefined
              ? undefined
              : _encode_gulsSignatureTransformation_XformedDataType_keyInformation(
                  value.keyInformation,
                  $.BER
                ),
            /* REQUIRED   */ $._encodeBitString(value.appendix, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_gulsSignatureTransformation_XformedDataType(
    value,
    elGetter
  );
}


/* eslint-enable */
