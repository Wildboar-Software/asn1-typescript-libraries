/* eslint-disable */
import {
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

/**
 * @summary FirstPdvExplicit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstPdvExplicit{SECURITY-TRANSFORMATION:ValidSTs} ::= SEQUENCE {
 *   transformationId   SECURITY-TRANSFORMATION.&sT-Identifier({ValidSTs}),
 *   staticUnprotParm
 *     SECURITY-TRANSFORMATION.&StaticUnprotectedParm
 *       ({ValidSTs}{@transformationId}) OPTIONAL,
 *   dynamicUnprotParm
 *     SECURITY-TRANSFORMATION.&DynamicUnprotectedParm
 *       ({ValidSTs}{@transformationId}) OPTIONAL,
 *   xformedData
 *     SECURITY-TRANSFORMATION.&XformedDataType({ValidSTs}{@transformationId})
 * }
 * ```
 *
 */
export class FirstPdvExplicit {
  constructor(
    /**
     * @summary `transformationId`.
     * @public
     * @readonly
     */
    readonly transformationId: OBJECT_IDENTIFIER,
    /**
     * @summary `staticUnprotParm`.
     * @public
     * @readonly
     */
    readonly staticUnprotParm: OPTIONAL<_Element>,
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
   * @summary Restructures an object into a FirstPdvExplicit
   * @description
   *
   * This takes an `object` and converts it to a `FirstPdvExplicit`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `FirstPdvExplicit`.
   * @returns {FirstPdvExplicit}
   */
  public static _from_object(
    _o: { [_K in keyof FirstPdvExplicit]: FirstPdvExplicit[_K] }
  ): FirstPdvExplicit {
    return new FirstPdvExplicit(
      _o.transformationId,
      _o.staticUnprotParm,
      _o.dynamicUnprotParm,
      _o.xformedData
    );
  }
}


/**
 * @summary The Leading Root Component Types of FirstPdvExplicit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FirstPdvExplicit: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'transformationId',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'staticUnprotParm',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'dynamicUnprotParm',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'xformedData',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of FirstPdvExplicit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FirstPdvExplicit: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of FirstPdvExplicit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FirstPdvExplicit: $.ComponentSpec[] = [];


let _cached_decoder_for_FirstPdvExplicit: $.ASN1Decoder<FirstPdvExplicit> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FirstPdvExplicit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstPdvExplicit} The decoded data structure.
 */
export function _decode_FirstPdvExplicit(el: _Element): FirstPdvExplicit {
  if (!_cached_decoder_for_FirstPdvExplicit) {
    _cached_decoder_for_FirstPdvExplicit = function (
      el: _Element
    ): FirstPdvExplicit {
      let transformationId!: OBJECT_IDENTIFIER;
      let staticUnprotParm: OPTIONAL<_Element>;
      let dynamicUnprotParm: OPTIONAL<_Element>;
      let xformedData!: _Element;
      const callbacks: $.DecodingMap = {
        transformationId: (_el: _Element): void => {
          transformationId = $._decodeObjectIdentifier(_el);
        },
        staticUnprotParm: (_el: _Element): void => {
          staticUnprotParm = $._decodeAny(_el);
        },
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
        _root_component_type_list_1_spec_for_FirstPdvExplicit,
        _extension_additions_list_spec_for_FirstPdvExplicit,
        _root_component_type_list_2_spec_for_FirstPdvExplicit,
        undefined
      );
      return new FirstPdvExplicit (
        transformationId,
        staticUnprotParm,
        dynamicUnprotParm,
        xformedData
      );
    };
  }
  return _cached_decoder_for_FirstPdvExplicit(el);
}


let _cached_encoder_for_FirstPdvExplicit: $.ASN1Encoder<FirstPdvExplicit> | null = null;


/**
 * @summary Encodes a(n) FirstPdvExplicit into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstPdvExplicit, encoded as an ASN.1 Element.
 */
export function _encode_FirstPdvExplicit(
  value: FirstPdvExplicit,
  elGetter: $.ASN1Encoder<FirstPdvExplicit>
): _Element {
  if (!_cached_encoder_for_FirstPdvExplicit) {
    _cached_encoder_for_FirstPdvExplicit = function (
      value: FirstPdvExplicit    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(
              value.transformationId,
              $.BER
            ),
            /* IF_ABSENT  */ value.staticUnprotParm === undefined
              ? undefined
              : $._encodeAny(value.staticUnprotParm, $.BER),
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
  return _cached_encoder_for_FirstPdvExplicit(value, elGetter);
}


/* eslint-enable */
