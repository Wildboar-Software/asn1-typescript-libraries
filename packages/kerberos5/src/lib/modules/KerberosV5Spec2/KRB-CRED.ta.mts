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
 * @summary KRB_CRED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KRB-CRED ::= [APPLICATION 22] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (22),
 *         tickets         [2] SEQUENCE OF Ticket,
 *         enc-part        [3] EncryptedData -- EncKrbCredPart
 * }
 * ```
 *
 */
export class KRB_CRED {
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
     * @summary `tickets`.
     * @public
     * @readonly
     */
    readonly tickets: Ticket[],
    /**
     * @summary `enc_part`.
     * @public
     * @readonly
     */
    readonly enc_part: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a KRB_CRED
   * @description
   *
   * This takes an `object` and converts it to a `KRB_CRED`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KRB_CRED`.
   * @returns {KRB_CRED}
   */
  public static _from_object(
    _o: { [_K in keyof KRB_CRED]: KRB_CRED[_K] }
  ): KRB_CRED {
    return new KRB_CRED(_o.pvno, _o.msg_type, _o.tickets, _o.enc_part);
  }
}


/**
 * @summary The Leading Root Component Types of KRB_CRED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KRB_CRED: $.ComponentSpec[] = [
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
    'tickets',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'enc-part',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of KRB_CRED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KRB_CRED: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KRB_CRED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KRB_CRED: $.ComponentSpec[] = [];


let _cached_decoder_for_KRB_CRED: $.ASN1Decoder<KRB_CRED> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KRB_CRED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KRB_CRED} The decoded data structure.
 */
export function _decode_KRB_CRED(el: _Element): KRB_CRED {
  if (!_cached_decoder_for_KRB_CRED) {
    _cached_decoder_for_KRB_CRED = $._decode_implicit<KRB_CRED>(
      () =>
        function (el: _Element): KRB_CRED {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 4) {
            throw new _ConstructionError(
              'KRB-CRED contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pvno';
          sequence[1].name = 'msg-type';
          sequence[2].name = 'tickets';
          sequence[3].name = 'enc-part';
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let tickets!: Ticket[];
          let enc_part!: EncryptedData;
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[1]
          );
          tickets = $._decode_explicit<Ticket[]>(() =>
            $._decodeSequenceOf<Ticket>(() => _decode_Ticket)
          )(sequence[2]);
          enc_part = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(sequence[3]);
          return new KRB_CRED(pvno, msg_type, tickets, enc_part);
        }
    );
  }
  return _cached_decoder_for_KRB_CRED(el);
}


let _cached_encoder_for_KRB_CRED: $.ASN1Encoder<KRB_CRED> | null = null;


/**
 * @summary Encodes a(n) KRB_CRED into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB_CRED, encoded as an ASN.1 Element.
 */
export function _encode_KRB_CRED(
  value: KRB_CRED,
  elGetter: $.ASN1Encoder<KRB_CRED>
): _Element {
  if (!_cached_encoder_for_KRB_CRED) {
    _cached_encoder_for_KRB_CRED = $._encode_implicit(
      _TagClass.application,
      22,
      () =>
        function (
          value: KRB_CRED        ): _Element {
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
                  () =>
                    $._encodeSequenceOf<Ticket>(() => _encode_Ticket, $.DER),
                  $.DER
                )(value.tickets, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_EncryptedData,
                  $.DER
                )(value.enc_part, $.DER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
          );
        },
      $.DER
    );
  }
  return _cached_encoder_for_KRB_CRED(value, elGetter);
}


/* eslint-enable */
