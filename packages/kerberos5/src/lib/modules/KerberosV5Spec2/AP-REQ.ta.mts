/* eslint-disable */
import {
  INTEGER,
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
  APOptions,
  _decode_APOptions,
  _encode_APOptions,
} from '../KerberosV5Spec2/APOptions.ta.mjs';
import {
  Ticket,
  _decode_Ticket,
  _encode_Ticket,
} from '../KerberosV5Spec2/Ticket.ta.mjs';
import {
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/**
 * @summary AP_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-REQ ::= [APPLICATION 14] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (14),
 *         ap-options      [2] APOptions,
 *         ticket          [3] Ticket,
 *         authenticator   [4] EncryptedData -- Authenticator
 * }
 * ```
 *
 * @class
 */
export class AP_REQ {
  constructor(
    /**
     * @summary `pvno`.
     * @public
     * @readonly
     */
    readonly pvno: INTEGER,
    /**
     * @summary `msg_type`.
     * @public
     * @readonly
     */
    readonly msg_type: INTEGER,
    /**
     * @summary `ap_options`.
     * @public
     * @readonly
     */
    readonly ap_options: APOptions,
    /**
     * @summary `ticket`.
     * @public
     * @readonly
     */
    readonly ticket: Ticket,
    /**
     * @summary `authenticator`.
     * @public
     * @readonly
     */
    readonly authenticator: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a AP_REQ
   * @description
   *
   * This takes an `object` and converts it to a `AP_REQ`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AP_REQ`.
   * @returns {AP_REQ}
   */
  public static _from_object(_o: { [_K in keyof AP_REQ]: AP_REQ[_K] }): AP_REQ {
    return new AP_REQ(
      _o.pvno,
      _o.msg_type,
      _o.ap_options,
      _o.ticket,
      _o.authenticator
    );
  }
}


/**
 * @summary The Leading Root Component Types of AP_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AP_REQ: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pvno',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'msg-type',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'ap-options',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'ticket',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'authenticator',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of AP_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AP_REQ: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AP_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AP_REQ: $.ComponentSpec[] = [];


let _cached_decoder_for_AP_REQ: $.ASN1Decoder<AP_REQ> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AP_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_REQ} The decoded data structure.
 */
export function _decode_AP_REQ(el: _Element): AP_REQ {
  if (!_cached_decoder_for_AP_REQ) {
    _cached_decoder_for_AP_REQ = $._decode_implicit<AP_REQ>(
      () =>
        function (el: _Element): AP_REQ {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 5) {
            throw new _ConstructionError(
              'AP-REQ contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pvno';
          sequence[1].name = 'msg-type';
          sequence[2].name = 'ap-options';
          sequence[3].name = 'ticket';
          sequence[4].name = 'authenticator';
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let ap_options!: APOptions;
          let ticket!: Ticket;
          let authenticator!: EncryptedData;
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[1]
          );
          ap_options = $._decode_explicit<APOptions>(() => _decode_APOptions)(
            sequence[2]
          );
          ticket = $._decode_explicit<Ticket>(() => _decode_Ticket)(
            sequence[3]
          );
          authenticator = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(sequence[4]);
          return new AP_REQ(pvno, msg_type, ap_options, ticket, authenticator);
        }
    );
  }
  return _cached_decoder_for_AP_REQ(el);
}


let _cached_encoder_for_AP_REQ: $.ASN1Encoder<AP_REQ> | null = null;


/**
 * @summary Encodes a(n) AP_REQ into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_REQ, encoded as an ASN.1 Element.
 */
export function _encode_AP_REQ(value: AP_REQ, elGetter: $.ASN1Encoder<AP_REQ>): _Element {
  if (!_cached_encoder_for_AP_REQ) {
    _cached_encoder_for_AP_REQ = $._encode_implicit(
      _TagClass.application,
      14,
      () =>
        function (value: AP_REQ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.DER
                )(value.pvno, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.DER
                )(value.msg_type, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_APOptions,
                  $.DER
                )(value.ap_options, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_Ticket,
                  $.DER
                )(value.ticket, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_EncryptedData,
                  $.DER
                )(value.authenticator, $.DER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
          );
        },
      $.DER
    );
  }
  return _cached_encoder_for_AP_REQ(value, elGetter);
}


/* eslint-enable */
