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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/**
 * @summary KRB_PRIV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KRB-PRIV ::= [APPLICATION 21] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (21),
 *                         -- NOTE: there is no [2] tag
 *         enc-part        [3] EncryptedData -- EncKrbPrivPart
 * }
 * ```
 *
 * @class
 */
export class KRB_PRIV {
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
     * @summary `enc_part`.
     * @public
     * @readonly
     */
    readonly enc_part: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a KRB_PRIV
   * @description
   *
   * This takes an `object` and converts it to a `KRB_PRIV`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KRB_PRIV`.
   * @returns {KRB_PRIV}
   */
  public static _from_object(
    _o: { [_K in keyof KRB_PRIV]: KRB_PRIV[_K] }
  ): KRB_PRIV {
    return new KRB_PRIV(_o.pvno, _o.msg_type, _o.enc_part);
  }
}


/**
 * @summary The Leading Root Component Types of KRB_PRIV
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KRB_PRIV: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pvno',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'msg-type',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'enc-part',
    false,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of KRB_PRIV
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KRB_PRIV: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KRB_PRIV
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KRB_PRIV: $.ComponentSpec[] = [];


let _cached_decoder_for_KRB_PRIV: $.ASN1Decoder<KRB_PRIV> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KRB_PRIV
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KRB_PRIV} The decoded data structure.
 */
export function _decode_KRB_PRIV(el: _Element) {
  if (!_cached_decoder_for_KRB_PRIV) {
    _cached_decoder_for_KRB_PRIV = $._decode_implicit<KRB_PRIV>(
      () =>
        function (el: _Element): KRB_PRIV {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 3) {
            throw new _ConstructionError(
              'KRB-PRIV contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pvno';
          sequence[1].name = 'msg-type';
          sequence[2].name = 'enc-part';
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let enc_part!: EncryptedData;
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[1]
          );
          enc_part = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(sequence[2]);
          return new KRB_PRIV(pvno, msg_type, enc_part);
        }
    );
  }
  return _cached_decoder_for_KRB_PRIV(el);
}


let _cached_encoder_for_KRB_PRIV: $.ASN1Encoder<KRB_PRIV> | null = null;


/**
 * @summary Encodes a(n) KRB_PRIV into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB_PRIV, encoded as an ASN.1 Element.
 */
export function _encode_KRB_PRIV(
  value: KRB_PRIV,
  elGetter: $.ASN1Encoder<KRB_PRIV>
) {
  if (!_cached_encoder_for_KRB_PRIV) {
    _cached_encoder_for_KRB_PRIV = $._encode_implicit(
      _TagClass.application,
      21,
      () =>
        function (
          value: KRB_PRIV        ): _Element {
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
  return _cached_encoder_for_KRB_PRIV(value, elGetter);
}


/* eslint-enable */
