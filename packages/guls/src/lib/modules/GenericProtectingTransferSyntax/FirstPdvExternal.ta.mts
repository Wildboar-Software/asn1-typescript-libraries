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
import {
  ExternalSAID,
  _decode_ExternalSAID,
  _encode_ExternalSAID,
} from '../Notation/ExternalSAID.ta.mjs';

/**
 * @summary FirstPdvExternal
 * @description
 *
 * First PDV of a protecting presentation context, or a protected
 * PDV sent outside a presentation context, for an
 * externally-established security association. The transformation
 * and static parameters are attributes of that association, not
 * carried here. ITU-T Rec. X.833 (04/95)
 * [§5.4, §6](https://www.itu.int/rec/T-REC-X.833-199504-I); ITU-T Rec. X.830 (04/95) §7.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FirstPdvExternal{SECURITY-TRANSFORMATION:ValidSTs} ::= SEQUENCE {
 *   externalSAID       ExternalSAID,
 *   dynamicUnprotParm
 *     SECURITY-TRANSFORMATION.&DynamicUnprotectedParm({ValidSTs}) OPTIONAL,
 *   -- Actual member of ValidSTs is as implied
 *   -- by externalSAID
 *   xformedData        SECURITY-TRANSFORMATION.&XformedDataType({ValidSTs})
 *   -- Actual member of ValidSTs is as implied
 *   -- by externalSAID
 * }
 * ```
 *
 */
export class FirstPdvExternal {
  constructor(
    /**
     * @summary `externalSAID`.
     * @description
     *
     * Identifies the externally-established security
     * association (and thereby the transformation). ITU-T Rec.
     * X.833 (04/95) §6.
     *
     * @public
     * @readonly
     */
    readonly externalSAID: ExternalSAID,
    /**
     * @summary `dynamicUnprotParm`.
     * @description
     *
     * Dynamic unprotected parameters of the transformation
     * implied by `externalSAID`. ITU-T Rec. X.833 (04/95) §6.
     *
     * @public
     * @readonly
     */
    readonly dynamicUnprotParm: OPTIONAL<_Element>,
    /**
     * @summary `xformedData`.
     * @description
     *
     * `&XformedDataType` of the transformation implied by
     * `externalSAID`. ITU-T Rec. X.833 (04/95) §6.
     *
     * @public
     * @readonly
     */
    readonly xformedData: _Element
  ) {}

  /**
   * @summary Restructures an object into a FirstPdvExternal
   * @description
   *
   * This takes an `object` and converts it to a `FirstPdvExternal`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `FirstPdvExternal`.
   * @returns {FirstPdvExternal}
   */
  public static _from_object(
    _o: { [_K in keyof FirstPdvExternal]: FirstPdvExternal[_K] }
  ): FirstPdvExternal {
    return new FirstPdvExternal(
      _o.externalSAID,
      _o.dynamicUnprotParm,
      _o.xformedData
    );
  }
}


/**
 * @summary The Leading Root Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FirstPdvExternal: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'externalSAID',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'dynamicUnprotParm',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'xformedData',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FirstPdvExternal: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of FirstPdvExternal
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FirstPdvExternal: $.ComponentSpec[] = [];


let _cached_decoder_for_FirstPdvExternal: $.ASN1Decoder<FirstPdvExternal> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) FirstPdvExternal
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FirstPdvExternal} The decoded data structure.
 */
export function _decode_FirstPdvExternal(el: _Element): FirstPdvExternal {
  if (!_cached_decoder_for_FirstPdvExternal) {
    _cached_decoder_for_FirstPdvExternal = function (
      el: _Element
    ): FirstPdvExternal {
      let externalSAID!: ExternalSAID;
      let dynamicUnprotParm: OPTIONAL<_Element>;
      let xformedData!: _Element;
      const callbacks: $.DecodingMap = {
        externalSAID: (_el: _Element): void => {
          externalSAID = _decode_ExternalSAID(_el);
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
        _root_component_type_list_1_spec_for_FirstPdvExternal,
        _extension_additions_list_spec_for_FirstPdvExternal,
        _root_component_type_list_2_spec_for_FirstPdvExternal,
        undefined
      );
      return new FirstPdvExternal (
        externalSAID,
        dynamicUnprotParm,
        xformedData
      );
    };
  }
  return _cached_decoder_for_FirstPdvExternal(el);
}


let _cached_encoder_for_FirstPdvExternal: $.ASN1Encoder<FirstPdvExternal> | null = null;


/**
 * @summary Encodes a(n) FirstPdvExternal into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FirstPdvExternal, encoded as an ASN.1 Element.
 */
export function _encode_FirstPdvExternal(
  value: FirstPdvExternal,
  elGetter: $.ASN1Encoder<FirstPdvExternal>
): _Element {
  if (!_cached_encoder_for_FirstPdvExternal) {
    _cached_encoder_for_FirstPdvExternal = function (
      value: FirstPdvExternal    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ExternalSAID(value.externalSAID, $.BER),
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
  return _cached_encoder_for_FirstPdvExternal(value, elGetter);
}


/* eslint-enable */
