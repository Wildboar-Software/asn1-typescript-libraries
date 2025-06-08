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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta';
export {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta';
import {
  CertResponse,
  _decode_CertResponse,
  _encode_CertResponse,
} from '../PKIXCMP-2009/CertResponse.ta';
export {
  CertResponse,
  _decode_CertResponse,
  _encode_CertResponse,
} from '../PKIXCMP-2009/CertResponse.ta';

/* START_OF_SYMBOL_DEFINITION CertRepMessage */
/**
 * @summary CertRepMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRepMessage ::= SEQUENCE {
 *     caPubs       [1] SEQUENCE SIZE (1..MAX) OF CMPCertificate
 *                 OPTIONAL,
 *     response         SEQUENCE OF CertResponse }
 * ```
 *
 * @class
 */
export class CertRepMessage {
  constructor(
    /**
     * @summary `caPubs`.
     * @public
     * @readonly
     */
    readonly caPubs: OPTIONAL<CMPCertificate[]>,
    /**
     * @summary `response`.
     * @public
     * @readonly
     */
    readonly response: CertResponse[]
  ) {}

  /**
   * @summary Restructures an object into a CertRepMessage
   * @description
   *
   * This takes an `object` and converts it to a `CertRepMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertRepMessage`.
   * @returns {CertRepMessage}
   */
  public static _from_object(
    _o: { [_K in keyof CertRepMessage]: CertRepMessage[_K] }
  ): CertRepMessage {
    return new CertRepMessage(_o.caPubs, _o.response);
  }
}
/* END_OF_SYMBOL_DEFINITION CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertRepMessage */
/**
 * @summary The Leading Root Component Types of CertRepMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertRepMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'caPubs',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertRepMessage */
/**
 * @summary The Trailing Root Component Types of CertRepMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRepMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertRepMessage */
/**
 * @summary The Extension Addition Component Types of CertRepMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRepMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRepMessage */
let _cached_decoder_for_CertRepMessage: $.ASN1Decoder<CertRepMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _decode_CertRepMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) CertRepMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRepMessage} The decoded data structure.
 */
export function _decode_CertRepMessage(el: _Element) {
  if (!_cached_decoder_for_CertRepMessage) {
    _cached_decoder_for_CertRepMessage = function (
      el: _Element
    ): CertRepMessage {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let caPubs: OPTIONAL<CMPCertificate[]>;
      let response!: CertResponse[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        caPubs: (_el: _Element): void => {
          caPubs = $._decode_explicit<CMPCertificate[]>(() =>
            $._decodeSequenceOf<CMPCertificate>(() => _decode_CMPCertificate)
          )(_el);
        },
        response: (_el: _Element): void => {
          response = $._decodeSequenceOf<CertResponse>(
            () => _decode_CertResponse
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertRepMessage,
        _extension_additions_list_spec_for_CertRepMessage,
        _root_component_type_list_2_spec_for_CertRepMessage,
        undefined
      );
      return new CertRepMessage /* SEQUENCE_CONSTRUCTOR_CALL */(
        caPubs,
        response
      );
    };
  }
  return _cached_decoder_for_CertRepMessage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRepMessage */
let _cached_encoder_for_CertRepMessage: $.ASN1Encoder<CertRepMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRepMessage */

/* START_OF_SYMBOL_DEFINITION _encode_CertRepMessage */
/**
 * @summary Encodes a(n) CertRepMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRepMessage, encoded as an ASN.1 Element.
 */
export function _encode_CertRepMessage(
  value: CertRepMessage,
  elGetter: $.ASN1Encoder<CertRepMessage>
) {
  if (!_cached_encoder_for_CertRepMessage) {
    _cached_encoder_for_CertRepMessage = function (
      value: CertRepMessage,
      elGetter: $.ASN1Encoder<CertRepMessage>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.caPubs === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () =>
                    $._encodeSequenceOf<CMPCertificate>(
                      () => _encode_CMPCertificate,
                      $.BER
                    ),
                  $.BER
                )(value.caPubs, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<CertResponse>(
              () => _encode_CertResponse,
              $.BER
            )(value.response, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertRepMessage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertRepMessage */

/* eslint-enable */
