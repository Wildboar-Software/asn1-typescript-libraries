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
  RefuseReason,
  _decode_RefuseReason,
  _encode_RefuseReason,
} from '../Reliable-Transfer-APDU/RefuseReason.ta.mjs';

/**
 * @summary RTORJapdu
 * @description
 *
 * RT-OPEN-REJECT (RTORJ). Negative response to establishment or
 * recovery: user information of A-ASSOCIATE response/confirm when
 * the RTPM or acceptor rejects. ITU-T Rec. X.228 (11/88) §7.1.2.3,
 * §7.1.3.3, §7.8.3.2.3; ITU-T Rec. X.218 (03/93) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RTORJapdu ::= SET {
 *   refuseReason  [0] IMPLICIT RefuseReason OPTIONAL, -- only in X.410-1984 mode
 *   userDataRJ
 *     [1]  OPEN.&Type OPTIONAL -- RTSE user data, only in normal mode--
 * }
 * ```
 *
 */
export class RTORJapdu {
  constructor(
    /**
     * @summary `refuseReason`.
     * @description
     *
     * Solely in X.410-1984 mode. Why the RTPM or acceptor refused
     * establishment or recovery. ITU-T Rec. X.228 (11/88) Table
     * 4/X.228 note 1, §7.1.6.1, §7.8.3.6.1.
     *
     * @public
     * @readonly
     */
    readonly refuseReason?: OPTIONAL<RefuseReason>,
    /**
     * @summary `userDataRJ`.
     * @description
     *
     * Solely in normal mode. RT-OPEN response User-data; transparent
     * to the RTPM. Not used in association-recovery. ITU-T Rec.
     * X.228 (11/88) Table 4/X.228 note 2, §7.1.6.2, §7.8.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly userDataRJ?: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a RTORJapdu
   * @description
   *
   * This takes an `object` and converts it to a `RTORJapdu`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RTORJapdu`.
   * @returns {RTORJapdu}
   */
  public static _from_object(
    _o: { [_K in keyof RTORJapdu]: RTORJapdu[_K] }
  ): RTORJapdu {
    return new RTORJapdu(_o.refuseReason, _o.userDataRJ);
  }
}


/**
 * @summary The Leading Root Component Types of RTORJapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RTORJapdu: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'refuseReason',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'userDataRJ',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of RTORJapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RTORJapdu: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RTORJapdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RTORJapdu: $.ComponentSpec[] = [];


let _cached_decoder_for_RTORJapdu: $.ASN1Decoder<RTORJapdu> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RTORJapdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RTORJapdu} The decoded data structure.
 */
export function _decode_RTORJapdu(el: _Element): RTORJapdu {
  if (!_cached_decoder_for_RTORJapdu) {
    _cached_decoder_for_RTORJapdu = function (el: _Element): RTORJapdu {
      /* START_OF_SET_COMPONENT_DECLARATIONS */
      let refuseReason: OPTIONAL<RefuseReason>;
      let userDataRJ: OPTIONAL<_Element>;
      /* END_OF_SET_COMPONENT_DECLARATIONS */
      const callbacks: $.DecodingMap = {
        refuseReason: (_el: _Element): void => {
          refuseReason = $._decode_implicit<RefuseReason>(
            () => _decode_RefuseReason
          )(_el);
        },
        userDataRJ: (_el: _Element): void => {
          userDataRJ = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
        },
      };
      $._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_RTORJapdu,
        _extension_additions_list_spec_for_RTORJapdu,
        _root_component_type_list_2_spec_for_RTORJapdu,
        undefined
      );
      return new RTORJapdu /* SET_CONSTRUCTOR_CALL */(refuseReason, userDataRJ);
    };
  }
  return _cached_decoder_for_RTORJapdu(el);
}


let _cached_encoder_for_RTORJapdu: $.ASN1Encoder<RTORJapdu> | null = null;


/**
 * @summary Encodes a(n) RTORJapdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RTORJapdu, encoded as an ASN.1 Element.
 */
export function _encode_RTORJapdu(
  value: RTORJapdu,
  elGetter: $.ASN1Encoder<RTORJapdu>
): _Element {
  if (!_cached_encoder_for_RTORJapdu) {
    _cached_encoder_for_RTORJapdu = function (
      value: RTORJapdu    ): _Element {
      return $._encodeSet(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.refuseReason === undefined
              ? undefined
              : $._encode_implicit(
                  _TagClass.context,
                  0,
                  () => _encode_RefuseReason,
                  $.BER
                )(value.refuseReason, $.BER),
            /* IF_ABSENT  */ value.userDataRJ === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeAny,
                  $.BER
                )(value.userDataRJ, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RTORJapdu(value, elGetter);
}


/* eslint-enable */
