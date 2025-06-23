/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
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
    $.hasTag(_TagClass.universal, 6)
  ),
  new $.ComponentSpec(
    'status',
    true,
    $.hasTag(_TagClass.universal, 2)
  ),
];

/**
 * @summary The Trailing Root Component Types of ReplyCheck
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplyCheck: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ReplyCheck
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplyCheck: $.ComponentSpec[] = [];

let _cached_decoder_for_ReplyCheck: $.ASN1Decoder<ReplyCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyCheck} The decoded data structure.
 */
export function _decode_ReplyCheck(el: _Element) {
  if (!_cached_decoder_for_ReplyCheck) {
    _cached_decoder_for_ReplyCheck = function (el: _Element): ReplyCheck {
      let check!: OBJECT_IDENTIFIER;
      let status: OPTIONAL<INTEGER> = ReplyCheck._default_value_for_status;
      const callbacks: $.DecodingMap = {
        check: (_el: _Element): void => {
          check = $._decodeObjectIdentifier(_el);
        },
        status: (_el: _Element): void => {
          status = $._decodeInteger(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ReplyCheck,
        _extension_additions_list_spec_for_ReplyCheck,
        _root_component_type_list_2_spec_for_ReplyCheck,
        undefined
      );
      return new ReplyCheck (check, status);
    };
  }
  return _cached_decoder_for_ReplyCheck(el);
}

let _cached_encoder_for_ReplyCheck: $.ASN1Encoder<ReplyCheck> | null = null;

/**
 * @summary Encodes a(n) ReplyCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyCheck, encoded as an ASN.1 Element.
 */
export function _encode_ReplyCheck(
  value: ReplyCheck,
  elGetter: $.ASN1Encoder<ReplyCheck>
) {
  if (!_cached_encoder_for_ReplyCheck) {
    _cached_encoder_for_ReplyCheck = function (
      value: ReplyCheck    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.check, $.DER),
            /* IF_DEFAULT */ value.status === undefined ||
            $.deepEq(value.status, ReplyCheck._default_value_for_status)
              ? undefined
              : $._encodeInteger(value.status, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_ReplyCheck(value, elGetter);
}


/* eslint-enable */
