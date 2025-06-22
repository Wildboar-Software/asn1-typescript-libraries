/* eslint-disable */
import {
  OPTIONAL,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    Identifier,
    _decode_Identifier,
    _encode_Identifier,
} from '../Notation/Identifier.ta.mjs';


/**
 * @summary SEerror
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEerror{SECURITY-EXCHANGE:ValidSEs} ::= SEQUENCE {
 *   errorCode       SE-ERROR.&errorCode({Errors{{ValidSEs}}})  OPTIONAL,
 *   errorParameter
 *     SE-ERROR.&ParameterType({Errors{{ValidSEs}}})  OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SEerror {
  constructor(
    /**
     * @summary `errorCode`.
     * @public
     * @readonly
     */
    readonly errorCode: OPTIONAL<Identifier>,
    /**
     * @summary `errorParameter`.
     * @public
     * @readonly
     */
    readonly errorParameter: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a SEerror
   * @description
   *
   * This takes an `object` and converts it to a `SEerror`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SEerror`.
   * @returns {SEerror}
   */
  public static _from_object(
    _o: { [_K in keyof SEerror]: SEerror[_K] }
  ): SEerror {
    return new SEerror(_o.errorCode, _o.errorParameter);
  }
}


/**
 * @summary The Leading Root Component Types of SEerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SEerror: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'errorCode',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'errorParameter',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of SEerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SEerror: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SEerror
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SEerror: $.ComponentSpec[] = [];


let _cached_decoder_for_SEerror: $.ASN1Decoder<SEerror> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SEerror
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SEerror} The decoded data structure.
 */
export function _decode_SEerror(el: _Element) {
  if (!_cached_decoder_for_SEerror) {
    _cached_decoder_for_SEerror = function (el: _Element): SEerror {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let errorCode: OPTIONAL<Identifier>;
      let errorParameter: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        errorCode: (_el: _Element): void => {
          errorCode = _decode_Identifier(_el);
        },
        errorParameter: (_el: _Element): void => {
          errorParameter = $._decodeAny(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SEerror,
        _extension_additions_list_spec_for_SEerror,
        _root_component_type_list_2_spec_for_SEerror,
        undefined
      );
      return new SEerror /* SEQUENCE_CONSTRUCTOR_CALL */(
        errorCode,
        errorParameter
      );
    };
  }
  return _cached_decoder_for_SEerror(el);
}


let _cached_encoder_for_SEerror: $.ASN1Encoder<SEerror> | null = null;


/**
 * @summary Encodes a(n) SEerror into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SEerror, encoded as an ASN.1 Element.
 */
export function _encode_SEerror(
  value: SEerror,
  elGetter: $.ASN1Encoder<SEerror>
) {
  if (!_cached_encoder_for_SEerror) {
    _cached_encoder_for_SEerror = function (
      value: SEerror    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.errorCode === undefined
              ? undefined
              : _encode_Identifier(value.errorCode, $.BER),
            /* IF_ABSENT  */ value.errorParameter === undefined
              ? undefined
              : $._encodeAny(value.errorParameter, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SEerror(value, elGetter);
}


/* eslint-enable */
