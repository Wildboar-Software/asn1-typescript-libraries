/* eslint-disable */
import {
  joint_iso_itu_t,
  OPTIONAL,
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
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
import {
  IntermediateType_keyInformation,
  _decode_IntermediateType_keyInformation,
  _encode_IntermediateType_keyInformation,
} from '../GulsSecurityTransformations/IntermediateType-keyInformation.ta.mjs';

/**
 * @summary IntermediateType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateType{KEY-INFORMATION:SupportedKIClasses} ::= SEQUENCE {
 *   unprotectedItem      ABSTRACT-SYNTAX.&Type-- this type is constrained to being
 *   -- the type of the unprotected item, or
 *   -- BIT STRING if the unprotected item is
 *   -- not derived from an ASN.1 abstract
 *   -- syntax --,
 *   initEncRules
 *     OBJECT IDENTIFIER
 *       DEFAULT {joint-iso-itu-t asn1(1) ber-derived(2) canonical-encoding(0)},
 *   signOrSealAlgorithm  AlgorithmIdentifier OPTIONAL,
 *   -- Identifies the signing or
 *   -- sealing algorithm, and can convey
 *   -- algorithm parameters
 *   hashAlgorithm        AlgorithmIdentifier OPTIONAL,
 *   -- Identifies a hash function,
 *   -- for use if a hash function is required
 *   -- and the signOrSealAlgorithm identifier
 *   -- does not imply a particular hash
 *   -- function. Can also convey algorithm
 *   -- parameters.
 *   keyInformation
 *     SEQUENCE {kiClass  KEY-INFORMATION.&kiClass({SupportedKIClasses}),
 *               keyInfo
 *                 KEY-INFORMATION.&KiType({SupportedKIClasses}{@.kiClass})
 *   } OPTIONAL
 *   -- Key information may assume various
 *   -- formats, governed by supported members
 *   -- of the KEY-INFORMATION information
 *   -- object class (defined at start of the
 *   -- definitive ASN.1 module)
 * }
 * ```
 *
 */
export class IntermediateType {
  constructor(
    /**
     * @summary `unprotectedItem`.
     * @public
     * @readonly
     */
    readonly unprotectedItem: _Element,
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
    readonly keyInformation: OPTIONAL<IntermediateType_keyInformation>
  ) {}

  /**
   * @summary Restructures an object into a IntermediateType
   * @description
   *
   * This takes an `object` and converts it to a `IntermediateType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `IntermediateType`.
   * @returns {IntermediateType}
   */
  public static _from_object(
    _o: { [_K in keyof IntermediateType]: IntermediateType[_K] }
  ): IntermediateType {
    return new IntermediateType(
      _o.unprotectedItem,
      _o.initEncRules,
      _o.signOrSealAlgorithm,
      _o.hashAlgorithm,
      _o.keyInformation
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
 * @summary The Leading Root Component Types of IntermediateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntermediateType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'unprotectedItem',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'initEncRules',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'signOrSealAlgorithm',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'hashAlgorithm',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'keyInformation',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of IntermediateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntermediateType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IntermediateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntermediateType: $.ComponentSpec[] = [];


let _cached_decoder_for_IntermediateType: $.ASN1Decoder<IntermediateType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateType} The decoded data structure.
 */
export function _decode_IntermediateType(el: _Element): IntermediateType {
  if (!_cached_decoder_for_IntermediateType) {
    _cached_decoder_for_IntermediateType = function (
      el: _Element
    ): IntermediateType {
      let unprotectedItem!: _Element;
      let initEncRules: OPTIONAL<OBJECT_IDENTIFIER> =
        IntermediateType._default_value_for_initEncRules;
      let signOrSealAlgorithm: OPTIONAL<AlgorithmIdentifier>;
      let hashAlgorithm: OPTIONAL<AlgorithmIdentifier>;
      let keyInformation: OPTIONAL<IntermediateType_keyInformation>;
      const callbacks: $.DecodingMap = {
        unprotectedItem: (_el: _Element): void => {
          unprotectedItem = $._decodeAny(_el);
        },
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
          keyInformation = _decode_IntermediateType_keyInformation(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_IntermediateType,
        _extension_additions_list_spec_for_IntermediateType,
        _root_component_type_list_2_spec_for_IntermediateType,
        undefined
      );
      return new IntermediateType (
        unprotectedItem,
        initEncRules,
        signOrSealAlgorithm,
        hashAlgorithm,
        keyInformation
      );
    };
  }
  return _cached_decoder_for_IntermediateType(el);
}


let _cached_encoder_for_IntermediateType: $.ASN1Encoder<IntermediateType> | null = null;


/**
 * @summary Encodes a(n) IntermediateType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateType, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateType(
  value: IntermediateType,
  elGetter: $.ASN1Encoder<IntermediateType>
): _Element {
  if (!_cached_encoder_for_IntermediateType) {
    _cached_encoder_for_IntermediateType = function (
      value: IntermediateType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeAny(value.unprotectedItem, $.BER),
            /* IF_DEFAULT */ value.initEncRules === undefined ||
            $.deepEq(
              value.initEncRules,
              IntermediateType._default_value_for_initEncRules
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
              : _encode_IntermediateType_keyInformation(
                  value.keyInformation,
                  $.BER
                ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_IntermediateType(value, elGetter);
}


/* eslint-enable */
