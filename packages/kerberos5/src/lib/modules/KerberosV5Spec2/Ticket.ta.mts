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
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.mjs';
import {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.mjs';
import {
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/**
 * @summary Ticket
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ticket ::= [APPLICATION 1] SEQUENCE {
 *         tkt-vno         [0] INTEGER (5),
 *         realm           [1] Realm,
 *         sname           [2] PrincipalName,
 *         enc-part        [3] EncryptedData -- EncTicketPart
 * }
 * ```
 *
 */
export class Ticket {
  constructor(
    /**
     * @summary `tkt_vno`.
     * @public
     * @readonly
     */
    readonly tkt_vno: INTEGER,
    /**
     * @summary `realm`.
     * @public
     * @readonly
     */
    readonly realm: Realm,
    /**
     * @summary `sname`.
     * @public
     * @readonly
     */
    readonly sname: PrincipalName,
    /**
     * @summary `enc_part`.
     * @public
     * @readonly
     */
    readonly enc_part: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a Ticket
   * @description
   *
   * This takes an `object` and converts it to a `Ticket`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Ticket`.
   * @returns {Ticket}
   */
  public static _from_object(_o: { [_K in keyof Ticket]: Ticket[_K] }): Ticket {
    return new Ticket(_o.tkt_vno, _o.realm, _o.sname, _o.enc_part);
  }
}


/**
 * @summary The Leading Root Component Types of Ticket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Ticket: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'tkt-vno',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'realm',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'sname',
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
 * @summary The Trailing Root Component Types of Ticket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Ticket: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Ticket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Ticket: $.ComponentSpec[] = [];


let _cached_decoder_for_Ticket: $.ASN1Decoder<Ticket> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Ticket
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ticket} The decoded data structure.
 */
export function _decode_Ticket(el: _Element): Ticket {
  if (!_cached_decoder_for_Ticket) {
    _cached_decoder_for_Ticket = $._decode_implicit<Ticket>(
      () =>
        function (el: _Element): Ticket {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 4) {
            throw new _ConstructionError(
              'Ticket contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'tkt-vno';
          sequence[1].name = 'realm';
          sequence[2].name = 'sname';
          sequence[3].name = 'enc-part';
          let tkt_vno!: INTEGER;
          let realm!: Realm;
          let sname!: PrincipalName;
          let enc_part!: EncryptedData;
          tkt_vno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          realm = $._decode_explicit<Realm>(() => _decode_Realm)(sequence[1]);
          sname = $._decode_explicit<PrincipalName>(
            () => _decode_PrincipalName
          )(sequence[2]);
          enc_part = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(sequence[3]);
          return new Ticket(tkt_vno, realm, sname, enc_part);
        }
    );
  }
  return _cached_decoder_for_Ticket(el);
}


let _cached_encoder_for_Ticket: $.ASN1Encoder<Ticket> | null = null;


/**
 * @summary Encodes a(n) Ticket into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ticket, encoded as an ASN.1 Element.
 */
export function _encode_Ticket(value: Ticket, elGetter: $.ASN1Encoder<Ticket>): _Element {
  if (!_cached_encoder_for_Ticket) {
    _cached_encoder_for_Ticket = $._encode_implicit(
      _TagClass.application,
      1,
      () =>
        function (value: Ticket): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.DER
                )(value.tkt_vno, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Realm,
                  $.DER
                )(value.realm, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_PrincipalName,
                  $.DER
                )(value.sname, $.DER),
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
  return _cached_encoder_for_Ticket(value, elGetter);
}


/* eslint-enable */
