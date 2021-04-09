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

/* START_OF_SYMBOL_DEFINITION ReplyCheck */
/**
 * @summary ReplyCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyCheck ::= SEQUENCE {
 *     check    OBJECT IDENTIFIER (CertCheckSet | ACertCheckSet, ... ),
 *     status   INTEGER DEFAULT 0
 * }
 * ```
 *
 * @class
 */
export class ReplyCheck {
  constructor(
    /**
     * @summary `check`.
     * @public
     * @readonly
     */
    readonly check: OBJECT_IDENTIFIER,
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: OPTIONAL<INTEGER>
  ) {}

  /**
   * @summary Restructures an object into a ReplyCheck
   * @description
   *
   * This takes an `object` and converts it to a `ReplyCheck`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReplyCheck`.
   * @returns {ReplyCheck}
   */
  public static _from_object(
    _o: { [_K in keyof ReplyCheck]: ReplyCheck[_K] }
  ): ReplyCheck {
    return new ReplyCheck(_o.check, _o.status);
  }

  /**
   * @summary Getter that returns the default value for `status`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_status() {
    return 0;
  }
}
/* END_OF_SYMBOL_DEFINITION ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplyCheck */
/**
 * @summary The Leading Root Component Types of ReplyCheck
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplyCheck: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'check',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'status',
    true,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplyCheck */
/**
 * @summary The Trailing Root Component Types of ReplyCheck
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplyCheck: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplyCheck */
/**
 * @summary The Extension Addition Component Types of ReplyCheck
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplyCheck: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyCheck */
let _cached_decoder_for_ReplyCheck: $.ASN1Decoder<ReplyCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyCheck */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyCheck} The decoded data structure.
 */
export function _decode_ReplyCheck(el: _Element) {
  if (!_cached_decoder_for_ReplyCheck) {
    _cached_decoder_for_ReplyCheck = function (el: _Element): ReplyCheck {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let check!: OBJECT_IDENTIFIER;
      let status: OPTIONAL<INTEGER> = ReplyCheck._default_value_for_status;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        check: (_el: _Element): void => {
          check = $._decodeObjectIdentifier(_el);
        },
        status: (_el: _Element): void => {
          status = $._decodeInteger(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ReplyCheck,
        _extension_additions_list_spec_for_ReplyCheck,
        _root_component_type_list_2_spec_for_ReplyCheck,
        undefined
      );
      return new ReplyCheck /* SEQUENCE_CONSTRUCTOR_CALL */(check, status);
    };
  }
  return _cached_decoder_for_ReplyCheck(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyCheck */
let _cached_encoder_for_ReplyCheck: $.ASN1Encoder<ReplyCheck> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyCheck */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyCheck */
/**
 * @summary Encodes a(n) ReplyCheck into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyCheck, encoded as an ASN.1 Element.
 */
export function _encode_ReplyCheck(
  value: ReplyCheck,
  elGetter: $.ASN1Encoder<ReplyCheck>
) {
  if (!_cached_encoder_for_ReplyCheck) {
    _cached_encoder_for_ReplyCheck = function (
      value: ReplyCheck,
      elGetter: $.ASN1Encoder<ReplyCheck>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.check, $.BER),
            /* IF_DEFAULT */ value.status === undefined ||
            $.deepEq(value.status, ReplyCheck._default_value_for_status)
              ? undefined
              : $._encodeInteger(value.status, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReplyCheck(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyCheck */

/* eslint-enable */
