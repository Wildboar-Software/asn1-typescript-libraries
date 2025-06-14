/* eslint-disable */
import {
  OPTIONAL,
  BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION PROTECTED_dirSign */
/**
 * @summary PROTECTED_dirSign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PROTECTED-dirSign ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class PROTECTED_dirSign<BaseType> {
  constructor(
    /**
     * @summary `baseType`.
     * @public
     * @readonly
     */
    readonly baseType: OPTIONAL<BaseType>,
    /**
     * @summary `algorithmId`.
     * @public
     * @readonly
     */
    readonly algorithmId: AlgorithmIdentifier,
    /**
     * @summary `encipheredHash`.
     * @public
     * @readonly
     */
    readonly encipheredHash: BIT_STRING
  ) {}

  /**
   * @summary Restructures an object into a PROTECTED_dirSign
   * @description
   *
   * This takes an `object` and converts it to a `PROTECTED_dirSign`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PROTECTED_dirSign`.
   * @returns {PROTECTED_dirSign}
   */
  public static _from_object(
    _o: { [_K in keyof PROTECTED_dirSign<any>]: PROTECTED_dirSign<any>[_K] }
  ): PROTECTED_dirSign<any> {
    return new PROTECTED_dirSign(
      _o.baseType,
      _o.algorithmId,
      _o.encipheredHash
    );
  }
}
/* END_OF_SYMBOL_DEFINITION PROTECTED_dirSign */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PROTECTED_dirSign */
/**
 * @summary The Leading Root Component Types of PROTECTED_dirSign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [
  new $.ComponentSpec('baseType', true, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'algorithmId',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'encipheredHash',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PROTECTED_dirSign */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PROTECTED_dirSign */
/**
 * @summary The Trailing Root Component Types of PROTECTED_dirSign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PROTECTED_dirSign */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PROTECTED_dirSign */
/**
 * @summary The Extension Addition Component Types of PROTECTED_dirSign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PROTECTED_dirSign: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PROTECTED_dirSign */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_PROTECTED_dirSign */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PROTECTED_dirSign
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_PROTECTED_dirSign<BaseType>(
  _decode_BaseType: $.ASN1Decoder<BaseType>
) {
  return function (el: _Element): PROTECTED_dirSign<BaseType> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let baseType: OPTIONAL<BaseType>;
    let algorithmId!: AlgorithmIdentifier;
    let encipheredHash!: BIT_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
      baseType: (_el: _Element): void => {
        baseType = _decode_BaseType(_el);
      },
      algorithmId: (_el: _Element): void => {
        algorithmId = _decode_AlgorithmIdentifier(_el);
      },
      encipheredHash: (_el: _Element): void => {
        encipheredHash = $._decodeBitString(_el);
      },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
      el,
      callbacks,
      _root_component_type_list_1_spec_for_PROTECTED_dirSign,
      _extension_additions_list_spec_for_PROTECTED_dirSign,
      _root_component_type_list_2_spec_for_PROTECTED_dirSign,
      undefined
    );
    return new PROTECTED_dirSign /* SEQUENCE_CONSTRUCTOR_CALL */(
      baseType,
      algorithmId,
      encipheredHash
    );
  };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_PROTECTED_dirSign */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_PROTECTED_dirSign */
/**
 * @summary Returns a function that will encode a(n) PROTECTED_dirSign into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PROTECTED_dirSign as an ASN.1 element.
 */
export function _get_encoder_for_PROTECTED_dirSign<BaseType>(
  _encode_BaseType: $.ASN1Encoder<BaseType>
) {
  return function (
    value: PROTECTED_dirSign<BaseType>  ): _Element {
    return $._encodeSequence(
      ([] as (_Element | undefined)[])
        .concat([
          /* IF_ABSENT  */ value.baseType === undefined
            ? undefined
            : _encode_BaseType(value.baseType, $.BER),
          /* REQUIRED   */ _encode_AlgorithmIdentifier(
            value.algorithmId,
            $.BER
          ),
          /* REQUIRED   */ $._encodeBitString(value.encipheredHash, $.BER),
        ])
        .filter((c: _Element | undefined): c is _Element => !!c),
      $.BER
    );
  };
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_PROTECTED_dirSign */

/* eslint-enable */
