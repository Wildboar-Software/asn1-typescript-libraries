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
  KRB_SAFE_BODY,
  _decode_KRB_SAFE_BODY,
  _encode_KRB_SAFE_BODY,
} from '../KerberosV5Spec2/KRB-SAFE-BODY.ta.mjs';
import {
  Checksum,
  _decode_Checksum,
  _encode_Checksum,
} from '../KerberosV5Spec2/Checksum.ta.mjs';

/**
 * @summary KRB_SAFE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KRB-SAFE ::= [APPLICATION 20] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (20),
 *         safe-body       [2] KRB-SAFE-BODY,
 *         cksum           [3] Checksum
 * }
 * ```
 *
 * @class
 */
export class KRB_SAFE {
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
     * @summary `safe_body`.
     * @public
     * @readonly
     */
    readonly safe_body: KRB_SAFE_BODY,
    /**
     * @summary `cksum`.
     * @public
     * @readonly
     */
    readonly cksum: Checksum
  ) {}

  /**
   * @summary Restructures an object into a KRB_SAFE
   * @description
   *
   * This takes an `object` and converts it to a `KRB_SAFE`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KRB_SAFE`.
   * @returns {KRB_SAFE}
   */
  public static _from_object(
    _o: { [_K in keyof KRB_SAFE]: KRB_SAFE[_K] }
  ): KRB_SAFE {
    return new KRB_SAFE(_o.pvno, _o.msg_type, _o.safe_body, _o.cksum);
  }
}


/**
 * @summary The Leading Root Component Types of KRB_SAFE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KRB_SAFE: $.ComponentSpec[] = [
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
    'safe-body',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'cksum',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
];


/**
 * @summary The Trailing Root Component Types of KRB_SAFE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KRB_SAFE: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KRB_SAFE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KRB_SAFE: $.ComponentSpec[] = [];


let _cached_decoder_for_KRB_SAFE: $.ASN1Decoder<KRB_SAFE> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KRB_SAFE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KRB_SAFE} The decoded data structure.
 */
export function _decode_KRB_SAFE(el: _Element): KRB_SAFE {
  if (!_cached_decoder_for_KRB_SAFE) {
    _cached_decoder_for_KRB_SAFE = $._decode_implicit<KRB_SAFE>(
      () =>
        function (el: _Element): KRB_SAFE {
          const sequence: _Element[] = el.sequence;
          if (sequence.length < 4) {
            throw new _ConstructionError(
              'KRB-SAFE contained only ' +
                sequence.length.toString() +
                ' elements.'
            );
          }
          sequence[0].name = 'pvno';
          sequence[1].name = 'msg-type';
          sequence[2].name = 'safe-body';
          sequence[3].name = 'cksum';
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let safe_body!: KRB_SAFE_BODY;
          let cksum!: Checksum;
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[0]
          );
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
            sequence[1]
          );
          safe_body = $._decode_explicit<KRB_SAFE_BODY>(
            () => _decode_KRB_SAFE_BODY
          )(sequence[2]);
          cksum = $._decode_explicit<Checksum>(() => _decode_Checksum)(
            sequence[3]
          );
          return new KRB_SAFE(pvno, msg_type, safe_body, cksum);
        }
    );
  }
  return _cached_decoder_for_KRB_SAFE(el);
}


let _cached_encoder_for_KRB_SAFE: $.ASN1Encoder<KRB_SAFE> | null = null;


/**
 * @summary Encodes a(n) KRB_SAFE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB_SAFE, encoded as an ASN.1 Element.
 */
export function _encode_KRB_SAFE(
  value: KRB_SAFE,
  elGetter: $.ASN1Encoder<KRB_SAFE>
): _Element {
  if (!_cached_encoder_for_KRB_SAFE) {
    _cached_encoder_for_KRB_SAFE = $._encode_implicit(
      _TagClass.application,
      20,
      () =>
        function (
          value: KRB_SAFE        ): _Element {
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
                  () => _encode_KRB_SAFE_BODY,
                  $.DER
                )(value.safe_body, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_Checksum,
                  $.DER
                )(value.cksum, $.DER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
          );
        },
      $.DER
    );
  }
  return _cached_encoder_for_KRB_SAFE(value, elGetter);
}


/* eslint-enable */
