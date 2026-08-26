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
  PKIHeader,
  _decode_PKIHeader,
  _encode_PKIHeader,
} from '../PKIXCMP-2009/PKIHeader.ta.mjs';
import {
  PKIBody,
  _decode_PKIBody,
  _encode_PKIBody,
} from '../PKIXCMP-2009/PKIBody.ta.mjs';
import {
  PKIProtection,
  _decode_PKIProtection,
  _encode_PKIProtection,
} from '../PKIXCMP-2009/PKIProtection.ta.mjs';
import {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';

/**
 * @summary PKIMessage
 * @description
 *
 * Overall CMP message used for all PKI management exchanges
 * ([RFC 4210 §5.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1)).
 *
 * The `PKIHeader` carries addressing and transaction identification;
 * `PKIBody` carries message-specific content; optional `PKIProtection`
 * integrity bits cover the DER encoding of `ProtectedPart`
 * ([RFC 4210 §5.1.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3)); optional `extraCerts` may hold certificates useful
 * to the recipient (not necessarily a certification path).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIMessage ::= SEQUENCE {
 *     header           PKIHeader,
 *     body             PKIBody,
 *     protection   [0] PKIProtection OPTIONAL,
 *     extraCerts   [1] SEQUENCE SIZE (1..MAX) OF CMPCertificate
 *                 OPTIONAL }
 * ```
 *
 */
export class PKIMessage {
  constructor(
    /**
     * @summary `header`.
     * @description
     *
     * Common header (`PKIHeader`) for addressing and transaction
     * identification ([RFC 4210 §5.1.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.1)).
     *
     * @public
     * @readonly
     */
    readonly header: PKIHeader,
    /**
     * @summary `body`.
     * @description
     *
     * Message-specific body (`PKIBody` CHOICE)
     * ([RFC 4210 §5.1.2](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.2), [RFC 4210 §5.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3)).
     *
     * @public
     * @readonly
     */
    readonly body: PKIBody,
    /**
     * @summary `protection`.
     * @description
     *
     * Optional integrity bits (`BIT STRING`). Input is the DER encoding of
     * `ProtectedPart` (`header`, `body`) ([RFC 4210 §5.1.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1.3)). MAY be
     * omitted when external protection (e.g., CMS) is applied instead.
     *
     * @public
     * @readonly
     */
    readonly protection?: OPTIONAL<PKIProtection>,
    /**
     * @summary `extraCerts`.
     * @description
     *
     * Optional certificates that may help the recipient (e.g., for the EE
     * to verify its new certificate when the issuing CA is not a root).
     * The recipient may need to sort or select among them
     * ([RFC 4210 §5.1](https://datatracker.ietf.org/doc/html/rfc4210#section-5.1)).
     *
     * @public
     * @readonly
     */
    readonly extraCerts?: OPTIONAL<CMPCertificate[]>
  ) {}

  /**
   * @summary Restructures an object into a PKIMessage
   * @description
   *
   * This takes an `object` and converts it to a `PKIMessage`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PKIMessage`.
   * @returns {PKIMessage}
   */
  public static _from_object(
    _o: { [_K in keyof PKIMessage]: PKIMessage[_K] }
  ): PKIMessage {
    return new PKIMessage(_o.header, _o.body, _o.protection, _o.extraCerts);
  }
}


/**
 * @summary The Leading Root Component Types of PKIMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKIMessage: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'header',
    false,
    $.hasTag(_TagClass.universal, 16)
  ),
  new $.ComponentSpec('body', false, $.hasAnyTag),
  new $.ComponentSpec(
    'protection',
    true,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'extraCerts',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of PKIMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIMessage: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKIMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIMessage: $.ComponentSpec[] = [];


let _cached_decoder_for_PKIMessage: $.ASN1Decoder<PKIMessage> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKIMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIMessage} The decoded data structure.
 */
export function _decode_PKIMessage(el: _Element): PKIMessage {
  if (!_cached_decoder_for_PKIMessage) {
    _cached_decoder_for_PKIMessage = function (el: _Element): PKIMessage {
      let header!: PKIHeader;
      let body!: PKIBody;
      let protection: OPTIONAL<PKIProtection>;
      let extraCerts: OPTIONAL<CMPCertificate[]>;
      const callbacks: $.DecodingMap = {
        header: (_el: _Element): void => {
          header = _decode_PKIHeader(_el);
        },
        body: (_el: _Element): void => {
          body = _decode_PKIBody(_el);
        },
        protection: (_el: _Element): void => {
          protection = $._decode_explicit<PKIProtection>(
            () => _decode_PKIProtection
          )(_el);
        },
        extraCerts: (_el: _Element): void => {
          extraCerts = $._decode_explicit<CMPCertificate[]>(() =>
            $._decodeSequenceOf<CMPCertificate>(() => _decode_CMPCertificate)
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIMessage,
        _extension_additions_list_spec_for_PKIMessage,
        _root_component_type_list_2_spec_for_PKIMessage,
        undefined
      );
      return new PKIMessage (
        header,
        body,
        protection,
        extraCerts
      );
    };
  }
  return _cached_decoder_for_PKIMessage(el);
}


let _cached_encoder_for_PKIMessage: $.ASN1Encoder<PKIMessage> | null = null;


/**
 * @summary Encodes a(n) PKIMessage into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIMessage, encoded as an ASN.1 Element.
 */
export function _encode_PKIMessage(
  value: PKIMessage,
  elGetter: $.ASN1Encoder<PKIMessage>
): _Element {
  if (!_cached_encoder_for_PKIMessage) {
    _cached_encoder_for_PKIMessage = function (
      value: PKIMessage    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIHeader(value.header, $.BER),
            /* REQUIRED   */ _encode_PKIBody(value.body, $.BER),
            /* IF_ABSENT  */ value.protection === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_PKIProtection,
                  $.BER
                )(value.protection, $.BER),
            /* IF_ABSENT  */ value.extraCerts === undefined
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
                )(value.extraCerts, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PKIMessage(value, elGetter);
}


/* eslint-enable */
