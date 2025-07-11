/* eslint-disable */
import {
  OPTIONAL,
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
  PA_DATA,
  _decode_PA_DATA,
  _encode_PA_DATA,
} from '../KerberosV5Spec2/PA-DATA.ta.mjs';
import {
  KDC_REQ_BODY,
  _decode_KDC_REQ_BODY,
  _encode_KDC_REQ_BODY,
} from '../KerberosV5Spec2/KDC-REQ-BODY.ta.mjs';

/**
 * @summary KDC_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDC-REQ ::= SEQUENCE {
 *         -- NOTE: first tag is [1], not [0]
 *         pvno            [1] INTEGER (5) ,
 *         msg-type        [2] INTEGER (10 -- AS -- | 12 -- TGS --),
 *         padata          [3] SEQUENCE OF PA-DATA OPTIONAL
 *                             -- NOTE: not empty --,
 *         req-body        [4] KDC-REQ-BODY
 * }
 * ```
 *
 */
export class KDC_REQ {
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
     * @summary `padata`.
     * @public
     * @readonly
     */
    readonly padata: OPTIONAL<PA_DATA[]>,
    /**
     * @summary `req_body`.
     * @public
     * @readonly
     */
    readonly req_body: KDC_REQ_BODY
  ) {}

  /**
   * @summary Restructures an object into a KDC_REQ
   * @description
   *
   * This takes an `object` and converts it to a `KDC_REQ`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KDC_REQ`.
   * @returns {KDC_REQ}
   */
  public static _from_object(
    _o: { [_K in keyof KDC_REQ]: KDC_REQ[_K] }
  ): KDC_REQ {
    return new KDC_REQ(_o.pvno, _o.msg_type, _o.padata, _o.req_body);
  }
}


/**
 * @summary The Leading Root Component Types of KDC_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KDC_REQ: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pvno',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'msg-type',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'padata',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'req-body',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of KDC_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KDC_REQ: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KDC_REQ
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KDC_REQ: $.ComponentSpec[] = [];


let _cached_decoder_for_KDC_REQ: $.ASN1Decoder<KDC_REQ> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KDC_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KDC_REQ} The decoded data structure.
 */
export function _decode_KDC_REQ(el: _Element): KDC_REQ {
  if (!_cached_decoder_for_KDC_REQ) {
    _cached_decoder_for_KDC_REQ = function (el: _Element): KDC_REQ {
      let pvno!: INTEGER;
      let msg_type!: INTEGER;
      let padata: OPTIONAL<PA_DATA[]>;
      let req_body!: KDC_REQ_BODY;
      const callbacks: $.DecodingMap = {
        pvno: (_el: _Element): void => {
          pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el);
        },
        'msg-type': (_el: _Element): void => {
          msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el);
        },
        padata: (_el: _Element): void => {
          padata = $._decode_explicit<PA_DATA[]>(() =>
            $._decodeSequenceOf<PA_DATA>(() => _decode_PA_DATA)
          )(_el);
        },
        'req-body': (_el: _Element): void => {
          req_body = $._decode_explicit<KDC_REQ_BODY>(
            () => _decode_KDC_REQ_BODY
          )(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KDC_REQ,
        _extension_additions_list_spec_for_KDC_REQ,
        _root_component_type_list_2_spec_for_KDC_REQ,
        undefined
      );
      return new KDC_REQ (
        pvno,
        msg_type,
        padata,
        req_body
      );
    };
  }
  return _cached_decoder_for_KDC_REQ(el);
}


let _cached_encoder_for_KDC_REQ: $.ASN1Encoder<KDC_REQ> | null = null;


/**
 * @summary Encodes a(n) KDC_REQ into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDC_REQ, encoded as an ASN.1 Element.
 */
export function _encode_KDC_REQ(
  value: KDC_REQ,
  elGetter: $.ASN1Encoder<KDC_REQ>
): _Element {
  if (!_cached_encoder_for_KDC_REQ) {
    _cached_encoder_for_KDC_REQ = function (
      value: KDC_REQ    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.DER
            )(value.pvno, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => $._encodeInteger,
              $.DER
            )(value.msg_type, $.DER),
            /* IF_ABSENT  */ value.padata === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () =>
                    $._encodeSequenceOf<PA_DATA>(() => _encode_PA_DATA, $.DER),
                  $.DER
                )(value.padata, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              4,
              () => _encode_KDC_REQ_BODY,
              $.DER
            )(value.req_body, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_KDC_REQ(value, elGetter);
}


/* eslint-enable */
