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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  PA_DATA,
  _decode_PA_DATA,
  _encode_PA_DATA,
} from '../KerberosV5Spec2/PA-DATA.ta.mjs';
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
 * @summary KDC_REP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDC-REP ::= SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (11 -- AS -- | 13 -- TGS --),
 *         padata          [2] SEQUENCE OF PA-DATA OPTIONAL
 *                                 -- NOTE: not empty --,
 *         crealm          [3] Realm,
 *         cname           [4] PrincipalName,
 *         ticket          [5] Ticket,
 *         enc-part        [6] EncryptedData
 *                                 -- EncASRepPart or EncTGSRepPart,
 *                                 -- as appropriate
 * }
 * ```
 *
 * @class
 */
export class KDC_REP {
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
     * @summary `crealm`.
     * @public
     * @readonly
     */
    readonly crealm: Realm,
    /**
     * @summary `cname`.
     * @public
     * @readonly
     */
    readonly cname: PrincipalName,
    /**
     * @summary `ticket`.
     * @public
     * @readonly
     */
    readonly ticket: Ticket,
    /**
     * @summary `enc_part`.
     * @public
     * @readonly
     */
    readonly enc_part: EncryptedData
  ) {}

  /**
   * @summary Restructures an object into a KDC_REP
   * @description
   *
   * This takes an `object` and converts it to a `KDC_REP`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KDC_REP`.
   * @returns {KDC_REP}
   */
  public static _from_object(
    _o: { [_K in keyof KDC_REP]: KDC_REP[_K] }
  ): KDC_REP {
    return new KDC_REP(
      _o.pvno,
      _o.msg_type,
      _o.padata,
      _o.crealm,
      _o.cname,
      _o.ticket,
      _o.enc_part
    );
  }
}


/**
 * @summary The Leading Root Component Types of KDC_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KDC_REP: $.ComponentSpec[] = [
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
    'padata',
    true,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'crealm',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'cname',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'ticket',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'enc-part',
    false,
    $.hasTag(_TagClass.context, 6)
  ),
];


/**
 * @summary The Trailing Root Component Types of KDC_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KDC_REP: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KDC_REP
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KDC_REP: $.ComponentSpec[] = [];


let _cached_decoder_for_KDC_REP: $.ASN1Decoder<KDC_REP> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KDC_REP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KDC_REP} The decoded data structure.
 */
export function _decode_KDC_REP(el: _Element) {
  if (!_cached_decoder_for_KDC_REP) {
    _cached_decoder_for_KDC_REP = function (el: _Element): KDC_REP {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let pvno!: INTEGER;
      let msg_type!: INTEGER;
      let padata: OPTIONAL<PA_DATA[]>;
      let crealm!: Realm;
      let cname!: PrincipalName;
      let ticket!: Ticket;
      let enc_part!: EncryptedData;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
        crealm: (_el: _Element): void => {
          crealm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
        },
        cname: (_el: _Element): void => {
          cname = $._decode_explicit<PrincipalName>(
            () => _decode_PrincipalName
          )(_el);
        },
        ticket: (_el: _Element): void => {
          ticket = $._decode_explicit<Ticket>(() => _decode_Ticket)(_el);
        },
        'enc-part': (_el: _Element): void => {
          enc_part = $._decode_explicit<EncryptedData>(
            () => _decode_EncryptedData
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KDC_REP,
        _extension_additions_list_spec_for_KDC_REP,
        _root_component_type_list_2_spec_for_KDC_REP,
        undefined
      );
      return new KDC_REP /* SEQUENCE_CONSTRUCTOR_CALL */(
        pvno,
        msg_type,
        padata,
        crealm,
        cname,
        ticket,
        enc_part
      );
    };
  }
  return _cached_decoder_for_KDC_REP(el);
}


let _cached_encoder_for_KDC_REP: $.ASN1Encoder<KDC_REP> | null = null;


/**
 * @summary Encodes a(n) KDC_REP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDC_REP, encoded as an ASN.1 Element.
 */
export function _encode_KDC_REP(
  value: KDC_REP,
  elGetter: $.ASN1Encoder<KDC_REP>
) {
  if (!_cached_encoder_for_KDC_REP) {
    _cached_encoder_for_KDC_REP = function (
      value: KDC_REP    ): _Element {
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
            /* IF_ABSENT  */ value.padata === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () =>
                    $._encodeSequenceOf<PA_DATA>(() => _encode_PA_DATA, $.DER),
                  $.DER
                )(value.padata, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              3,
              () => _encode_Realm,
              $.DER
            )(value.crealm, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              4,
              () => _encode_PrincipalName,
              $.DER
            )(value.cname, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              5,
              () => _encode_Ticket,
              $.DER
            )(value.ticket, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              6,
              () => _encode_EncryptedData,
              $.DER
            )(value.enc_part, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_KDC_REP(value, elGetter);
}


/* eslint-enable */
