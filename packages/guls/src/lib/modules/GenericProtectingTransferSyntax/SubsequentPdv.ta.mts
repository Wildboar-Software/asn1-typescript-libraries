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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SubsequentPdv
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsequentPdv{SECURITY-TRANSFORMATION:ValidSTs} ::= SEQUENCE {
 *   dynamicUnprotParm
 *     SECURITY-TRANSFORMATION.&DynamicUnprotectedParm({ValidSTs}) OPTIONAL,
 *   xformedData        SECURITY-TRANSFORMATION.&XformedDataType({ValidSTs})
 *   -- Actual member of ValidSTs is implied
 *   -- by presentation context
 * }
 * ```
 *
 * @class
 */
export class SubsequentPdv {
  constructor(
    /**
     * @summary `dynamicUnprotParm`.
     * @public
     * @readonly
     */
    readonly dynamicUnprotParm: OPTIONAL<_Element>,
    /**
     * @summary `xformedData`.
     * @public
     * @readonly
     */
    readonly xformedData: _Element
  ) {}

  /**
   * @summary Restructures an object into a SubsequentPdv
   * @description
   *
   * This takes an `object` and converts it to a `SubsequentPdv`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubsequentPdv`.
   * @returns {SubsequentPdv}
   */
  public static _from_object(
    _o: { [_K in keyof SubsequentPdv]: SubsequentPdv[_K] }
  ): SubsequentPdv {
    return new SubsequentPdv(_o.dynamicUnprotParm, _o.xformedData);
  }
}


/**
 * @summary The Leading Root Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubsequentPdv: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'dynamicUnprotParm',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'xformedData',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubsequentPdv: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SubsequentPdv
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubsequentPdv: $.ComponentSpec[] = [];


let _cached_decoder_for_SubsequentPdv: $.ASN1Decoder<SubsequentPdv> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SubsequentPdv
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubsequentPdv} The decoded data structure.
 */
export function _decode_SubsequentPdv(el: _Element): SubsequentPdv {
  if (!_cached_decoder_for_SubsequentPdv) {
    _cached_decoder_for_SubsequentPdv = function (el: _Element): SubsequentPdv {
      let dynamicUnprotParm: OPTIONAL<_Element>;
      let xformedData!: _Element;
      const callbacks: $.DecodingMap = {
        dynamicUnprotParm: (_el: _Element): void => {
          dynamicUnprotParm = $._decodeAny(_el);
        },
        xformedData: (_el: _Element): void => {
          xformedData = $._decodeAny(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubsequentPdv,
        _extension_additions_list_spec_for_SubsequentPdv,
        _root_component_type_list_2_spec_for_SubsequentPdv,
        undefined
      );
      return new SubsequentPdv (
        dynamicUnprotParm,
        xformedData
      );
    };
  }
  return _cached_decoder_for_SubsequentPdv(el);
}


let _cached_encoder_for_SubsequentPdv: $.ASN1Encoder<SubsequentPdv> | null = null;


/**
 * @summary Encodes a(n) SubsequentPdv into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubsequentPdv, encoded as an ASN.1 Element.
 */
export function _encode_SubsequentPdv(
  value: SubsequentPdv,
  elGetter: $.ASN1Encoder<SubsequentPdv>
): _Element {
  if (!_cached_encoder_for_SubsequentPdv) {
    _cached_encoder_for_SubsequentPdv = function (
      value: SubsequentPdv    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.dynamicUnprotParm === undefined
              ? undefined
              : $._encodeAny(value.dynamicUnprotParm, $.BER),
            /* REQUIRED   */ $._encodeAny(value.xformedData, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SubsequentPdv(value, elGetter);
}


/* eslint-enable */
