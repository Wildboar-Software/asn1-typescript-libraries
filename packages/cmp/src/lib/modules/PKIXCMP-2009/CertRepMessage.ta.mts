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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';
import {
  CertResponse,
  _decode_CertResponse,
  _encode_CertResponse,
} from '../PKIXCMP-2009/CertResponse.ta.mjs';

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
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'response',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of CertRepMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertRepMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertRepMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertRepMessage: $.ComponentSpec[] = [];


let _cached_decoder_for_CertRepMessage: $.ASN1Decoder<CertRepMessage> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertRepMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRepMessage} The decoded data structure.
 */
export function _decode_CertRepMessage(el: _Element): CertRepMessage {
  if (!_cached_decoder_for_CertRepMessage) {
    _cached_decoder_for_CertRepMessage = function (
      el: _Element
    ): CertRepMessage {
      let caPubs: OPTIONAL<CMPCertificate[]>;
      let response!: CertResponse[];
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertRepMessage,
        _extension_additions_list_spec_for_CertRepMessage,
        _root_component_type_list_2_spec_for_CertRepMessage,
        undefined
      );
      return new CertRepMessage (
        caPubs,
        response
      );
    };
  }
  return _cached_decoder_for_CertRepMessage(el);
}


let _cached_encoder_for_CertRepMessage: $.ASN1Encoder<CertRepMessage> | null = null;


/**
 * @summary Encodes a(n) CertRepMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRepMessage, encoded as an ASN.1 Element.
 */
export function _encode_CertRepMessage(
  value: CertRepMessage,
  elGetter: $.ASN1Encoder<CertRepMessage>
): _Element {
  if (!_cached_encoder_for_CertRepMessage) {
    _cached_encoder_for_CertRepMessage = function (
      value: CertRepMessage    ): _Element {
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


/* eslint-enable */
