/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.js';
export {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.js';

/* START_OF_SYMBOL_DEFINITION PA_ENC_TS_ENC */
/**
 * @summary PA_ENC_TS_ENC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PA-ENC-TS-ENC ::= SEQUENCE {
 *         patimestamp     [0] KerberosTime -- client's time --,
 *         pausec          [1] Microseconds OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PA_ENC_TS_ENC {
  constructor(
    /**
     * @summary `patimestamp`.
     * @public
     * @readonly
     */
    readonly patimestamp: KerberosTime,
    /**
     * @summary `pausec`.
     * @public
     * @readonly
     */
    readonly pausec: OPTIONAL<Microseconds>
  ) {}

  /**
   * @summary Restructures an object into a PA_ENC_TS_ENC
   * @description
   *
   * This takes an `object` and converts it to a `PA_ENC_TS_ENC`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PA_ENC_TS_ENC`.
   * @returns {PA_ENC_TS_ENC}
   */
  public static _from_object(
    _o: { [_K in keyof PA_ENC_TS_ENC]: PA_ENC_TS_ENC[_K] }
  ): PA_ENC_TS_ENC {
    return new PA_ENC_TS_ENC(_o.patimestamp, _o.pausec);
  }
}
/* END_OF_SYMBOL_DEFINITION PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PA_ENC_TS_ENC */
/**
 * @summary The Leading Root Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'patimestamp',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'pausec',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PA_ENC_TS_ENC */
/**
 * @summary The Trailing Root Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PA_ENC_TS_ENC */
/**
 * @summary The Extension Addition Component Types of PA_ENC_TS_ENC
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PA_ENC_TS_ENC: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PA_ENC_TS_ENC */
let _cached_decoder_for_PA_ENC_TS_ENC: $.ASN1Decoder<PA_ENC_TS_ENC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _decode_PA_ENC_TS_ENC */
/**
 * @summary Decodes an ASN.1 element into a(n) PA_ENC_TS_ENC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PA_ENC_TS_ENC} The decoded data structure.
 */
export function _decode_PA_ENC_TS_ENC(el: _Element) {
  if (!_cached_decoder_for_PA_ENC_TS_ENC) {
    _cached_decoder_for_PA_ENC_TS_ENC = function (el: _Element): PA_ENC_TS_ENC {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let patimestamp!: KerberosTime;
      let pausec: OPTIONAL<Microseconds>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        patimestamp: (_el: _Element): void => {
          patimestamp = $._decode_explicit<KerberosTime>(
            () => _decode_KerberosTime
          )(_el);
        },
        pausec: (_el: _Element): void => {
          pausec = $._decode_explicit<Microseconds>(() => _decode_Microseconds)(
            _el
          );
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PA_ENC_TS_ENC,
        _extension_additions_list_spec_for_PA_ENC_TS_ENC,
        _root_component_type_list_2_spec_for_PA_ENC_TS_ENC,
        undefined
      );
      return new PA_ENC_TS_ENC /* SEQUENCE_CONSTRUCTOR_CALL */(
        patimestamp,
        pausec
      );
    };
  }
  return _cached_decoder_for_PA_ENC_TS_ENC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PA_ENC_TS_ENC */
let _cached_encoder_for_PA_ENC_TS_ENC: $.ASN1Encoder<PA_ENC_TS_ENC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PA_ENC_TS_ENC */

/* START_OF_SYMBOL_DEFINITION _encode_PA_ENC_TS_ENC */
/**
 * @summary Encodes a(n) PA_ENC_TS_ENC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_ENC_TS_ENC, encoded as an ASN.1 Element.
 */
export function _encode_PA_ENC_TS_ENC(
  value: PA_ENC_TS_ENC,
  elGetter: $.ASN1Encoder<PA_ENC_TS_ENC>
) {
  if (!_cached_encoder_for_PA_ENC_TS_ENC) {
    _cached_encoder_for_PA_ENC_TS_ENC = function (
      value: PA_ENC_TS_ENC,
      elGetter: $.ASN1Encoder<PA_ENC_TS_ENC>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_KerberosTime,
              $.BER
            )(value.patimestamp, $.BER),
            /* IF_ABSENT  */ value.pausec === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Microseconds,
                  $.BER
                )(value.pausec, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PA_ENC_TS_ENC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PA_ENC_TS_ENC */

/* eslint-enable */
