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
  PKIHeader,
  _decode_PKIHeader,
  _encode_PKIHeader,
} from '../PKIXCMP-2009/PKIHeader.ta';
export {
  PKIHeader,
  _decode_PKIHeader,
  _encode_PKIHeader,
} from '../PKIXCMP-2009/PKIHeader.ta';
import {
  PKIBody,
  _decode_PKIBody,
  _encode_PKIBody,
} from '../PKIXCMP-2009/PKIBody.ta';
export {
  PKIBody,
  _decode_PKIBody,
  _encode_PKIBody,
} from '../PKIXCMP-2009/PKIBody.ta';
import {
  PKIProtection,
  _decode_PKIProtection,
  _encode_PKIProtection,
} from '../PKIXCMP-2009/PKIProtection.ta';
export {
  PKIProtection,
  _decode_PKIProtection,
  _encode_PKIProtection,
} from '../PKIXCMP-2009/PKIProtection.ta';
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

/* START_OF_SYMBOL_DEFINITION PKIMessage */
/**
 * @summary PKIMessage
 * @description
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
 * @class
 */
export class PKIMessage {
  constructor(
    /**
     * @summary `header`.
     * @public
     * @readonly
     */
    readonly header: PKIHeader,
    /**
     * @summary `body`.
     * @public
     * @readonly
     */
    readonly body: PKIBody,
    /**
     * @summary `protection`.
     * @public
     * @readonly
     */
    readonly protection: OPTIONAL<PKIProtection>,
    /**
     * @summary `extraCerts`.
     * @public
     * @readonly
     */
    readonly extraCerts: OPTIONAL<CMPCertificate[]>
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
/* END_OF_SYMBOL_DEFINITION PKIMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIMessage */
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
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec('body', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'protection',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'extraCerts',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIMessage */
/**
 * @summary The Trailing Root Component Types of PKIMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIMessage */
/**
 * @summary The Extension Addition Component Types of PKIMessage
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIMessage: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIMessage */
let _cached_decoder_for_PKIMessage: $.ASN1Decoder<PKIMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _decode_PKIMessage */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIMessage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIMessage} The decoded data structure.
 */
export function _decode_PKIMessage(el: _Element) {
  if (!_cached_decoder_for_PKIMessage) {
    _cached_decoder_for_PKIMessage = function (el: _Element): PKIMessage {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let header!: PKIHeader;
      let body!: PKIBody;
      let protection: OPTIONAL<PKIProtection>;
      let extraCerts: OPTIONAL<CMPCertificate[]>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIMessage,
        _extension_additions_list_spec_for_PKIMessage,
        _root_component_type_list_2_spec_for_PKIMessage,
        undefined
      );
      return new PKIMessage /* SEQUENCE_CONSTRUCTOR_CALL */(
        header,
        body,
        protection,
        extraCerts
      );
    };
  }
  return _cached_decoder_for_PKIMessage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIMessage */
let _cached_encoder_for_PKIMessage: $.ASN1Encoder<PKIMessage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIMessage */

/* START_OF_SYMBOL_DEFINITION _encode_PKIMessage */
/**
 * @summary Encodes a(n) PKIMessage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIMessage, encoded as an ASN.1 Element.
 */
export function _encode_PKIMessage(
  value: PKIMessage,
  elGetter: $.ASN1Encoder<PKIMessage>
) {
  if (!_cached_encoder_for_PKIMessage) {
    _cached_encoder_for_PKIMessage = function (
      value: PKIMessage,
      elGetter: $.ASN1Encoder<PKIMessage>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_PKIMessage */

/* eslint-enable */
