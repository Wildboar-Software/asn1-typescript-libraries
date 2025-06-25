/* eslint-disable */
import {
  OPTIONAL,
  OCTET_STRING,
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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';
import {
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta.mjs';

/**
 * @summary ETYPE_INFO2_ENTRY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ETYPE-INFO2-ENTRY ::= SEQUENCE {
 *         etype           [0] Int32,
 *         salt            [1] KerberosString OPTIONAL,
 *         s2kparams       [2] OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ETYPE_INFO2_ENTRY {
  constructor(
    /**
     * @summary `etype`.
     * @public
     * @readonly
     */
    readonly etype: Int32,
    /**
     * @summary `salt`.
     * @public
     * @readonly
     */
    readonly salt: OPTIONAL<KerberosString>,
    /**
     * @summary `s2kparams`.
     * @public
     * @readonly
     */
    readonly s2kparams: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a ETYPE_INFO2_ENTRY
   * @description
   *
   * This takes an `object` and converts it to a `ETYPE_INFO2_ENTRY`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ETYPE_INFO2_ENTRY`.
   * @returns {ETYPE_INFO2_ENTRY}
   */
  public static _from_object(
    _o: { [_K in keyof ETYPE_INFO2_ENTRY]: ETYPE_INFO2_ENTRY[_K] }
  ): ETYPE_INFO2_ENTRY {
    return new ETYPE_INFO2_ENTRY(_o.etype, _o.salt, _o.s2kparams);
  }
}


/**
 * @summary The Leading Root Component Types of ETYPE_INFO2_ENTRY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ETYPE_INFO2_ENTRY: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'etype',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'salt',
    true,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    's2kparams',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of ETYPE_INFO2_ENTRY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ETYPE_INFO2_ENTRY: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ETYPE_INFO2_ENTRY
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ETYPE_INFO2_ENTRY: $.ComponentSpec[] = [];


let _cached_decoder_for_ETYPE_INFO2_ENTRY: $.ASN1Decoder<ETYPE_INFO2_ENTRY> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ETYPE_INFO2_ENTRY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ETYPE_INFO2_ENTRY} The decoded data structure.
 */
export function _decode_ETYPE_INFO2_ENTRY(el: _Element): ETYPE_INFO2_ENTRY {
  if (!_cached_decoder_for_ETYPE_INFO2_ENTRY) {
    _cached_decoder_for_ETYPE_INFO2_ENTRY = function (
      el: _Element
    ): ETYPE_INFO2_ENTRY {
      let etype!: Int32;
      let salt: OPTIONAL<KerberosString>;
      let s2kparams: OPTIONAL<OCTET_STRING>;
      const callbacks: $.DecodingMap = {
        etype: (_el: _Element): void => {
          etype = $._decode_explicit<Int32>(() => _decode_Int32)(_el);
        },
        salt: (_el: _Element): void => {
          salt = $._decode_explicit<KerberosString>(
            () => _decode_KerberosString
          )(_el);
        },
        s2kparams: (_el: _Element): void => {
          s2kparams = $._decode_explicit<OCTET_STRING>(
            () => $._decodeOctetString
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ETYPE_INFO2_ENTRY,
        _extension_additions_list_spec_for_ETYPE_INFO2_ENTRY,
        _root_component_type_list_2_spec_for_ETYPE_INFO2_ENTRY,
        undefined
      );
      return new ETYPE_INFO2_ENTRY (
        etype,
        salt,
        s2kparams
      );
    };
  }
  return _cached_decoder_for_ETYPE_INFO2_ENTRY(el);
}


let _cached_encoder_for_ETYPE_INFO2_ENTRY: $.ASN1Encoder<ETYPE_INFO2_ENTRY> | null = null;


/**
 * @summary Encodes a(n) ETYPE_INFO2_ENTRY into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETYPE_INFO2_ENTRY, encoded as an ASN.1 Element.
 */
export function _encode_ETYPE_INFO2_ENTRY(
  value: ETYPE_INFO2_ENTRY,
  elGetter: $.ASN1Encoder<ETYPE_INFO2_ENTRY>
): _Element {
  if (!_cached_encoder_for_ETYPE_INFO2_ENTRY) {
    _cached_encoder_for_ETYPE_INFO2_ENTRY = function (
      value: ETYPE_INFO2_ENTRY    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.etype, $.DER),
            /* IF_ABSENT  */ value.salt === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_KerberosString,
                  $.DER
                )(value.salt, $.DER),
            /* IF_ABSENT  */ value.s2kparams === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => $._encodeOctetString,
                  $.DER
                )(value.s2kparams, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_ETYPE_INFO2_ENTRY(value, elGetter);
}


/* eslint-enable */
