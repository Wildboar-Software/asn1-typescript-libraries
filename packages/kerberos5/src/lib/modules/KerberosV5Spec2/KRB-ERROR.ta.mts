/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
  OCTET_STRING,
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
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';
import {
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';
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
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta.mjs';

/**
 * @summary KRB_ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KRB-ERROR ::= [APPLICATION 30] SEQUENCE {
 *         pvno            [0] INTEGER (5),
 *         msg-type        [1] INTEGER (30),
 *         ctime           [2] KerberosTime OPTIONAL,
 *         cusec           [3] Microseconds OPTIONAL,
 *         stime           [4] KerberosTime,
 *         susec           [5] Microseconds,
 *         error-code      [6] Int32,
 *         crealm          [7] Realm OPTIONAL,
 *         cname           [8] PrincipalName OPTIONAL,
 *         realm           [9] Realm -- service realm --,
 *         sname           [10] PrincipalName -- service name --,
 *         e-text          [11] KerberosString OPTIONAL,
 *         e-data          [12] OCTET STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class KRB_ERROR {
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
     * @summary `ctime`.
     * @public
     * @readonly
     */
    readonly ctime: OPTIONAL<KerberosTime>,
    /**
     * @summary `cusec`.
     * @public
     * @readonly
     */
    readonly cusec: OPTIONAL<Microseconds>,
    /**
     * @summary `stime`.
     * @public
     * @readonly
     */
    readonly stime: KerberosTime,
    /**
     * @summary `susec`.
     * @public
     * @readonly
     */
    readonly susec: Microseconds,
    /**
     * @summary `error_code`.
     * @public
     * @readonly
     */
    readonly error_code: Int32,
    /**
     * @summary `crealm`.
     * @public
     * @readonly
     */
    readonly crealm: OPTIONAL<Realm>,
    /**
     * @summary `cname`.
     * @public
     * @readonly
     */
    readonly cname: OPTIONAL<PrincipalName>,
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
     * @summary `e_text`.
     * @public
     * @readonly
     */
    readonly e_text: OPTIONAL<KerberosString>,
    /**
     * @summary `e_data`.
     * @public
     * @readonly
     */
    readonly e_data: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a KRB_ERROR
   * @description
   *
   * This takes an `object` and converts it to a `KRB_ERROR`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KRB_ERROR`.
   * @returns {KRB_ERROR}
   */
  public static _from_object(
    _o: { [_K in keyof KRB_ERROR]: KRB_ERROR[_K] }
  ): KRB_ERROR {
    return new KRB_ERROR(
      _o.pvno,
      _o.msg_type,
      _o.ctime,
      _o.cusec,
      _o.stime,
      _o.susec,
      _o.error_code,
      _o.crealm,
      _o.cname,
      _o.realm,
      _o.sname,
      _o.e_text,
      _o.e_data
    );
  }
}


/**
 * @summary The Leading Root Component Types of KRB_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KRB_ERROR: $.ComponentSpec[] = [
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
    'ctime',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cusec',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'stime',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'susec',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'error-code',
    false,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'crealm',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cname',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'realm',
    false,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'sname',
    false,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'e-text',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'e-data',
    true,
    $.hasTag(_TagClass.context, 12),
    undefined,
    undefined
  ),
];


/**
 * @summary The Trailing Root Component Types of KRB_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KRB_ERROR: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KRB_ERROR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KRB_ERROR: $.ComponentSpec[] = [];


let _cached_decoder_for_KRB_ERROR: $.ASN1Decoder<KRB_ERROR> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) KRB_ERROR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KRB_ERROR} The decoded data structure.
 */
export function _decode_KRB_ERROR(el: _Element) {
  if (!_cached_decoder_for_KRB_ERROR) {
    _cached_decoder_for_KRB_ERROR = $._decode_implicit<KRB_ERROR>(
      () =>
        function (el: _Element): KRB_ERROR {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let pvno!: INTEGER;
          let msg_type!: INTEGER;
          let ctime: OPTIONAL<KerberosTime>;
          let cusec: OPTIONAL<Microseconds>;
          let stime!: KerberosTime;
          let susec!: Microseconds;
          let error_code!: Int32;
          let crealm: OPTIONAL<Realm>;
          let cname: OPTIONAL<PrincipalName>;
          let realm!: Realm;
          let sname!: PrincipalName;
          let e_text: OPTIONAL<KerberosString>;
          let e_data: OPTIONAL<OCTET_STRING>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            pvno: (_el: _Element): void => {
              pvno = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el);
            },
            'msg-type': (_el: _Element): void => {
              msg_type = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                _el
              );
            },
            ctime: (_el: _Element): void => {
              ctime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            cusec: (_el: _Element): void => {
              cusec = $._decode_explicit<Microseconds>(
                () => _decode_Microseconds
              )(_el);
            },
            stime: (_el: _Element): void => {
              stime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            susec: (_el: _Element): void => {
              susec = $._decode_explicit<Microseconds>(
                () => _decode_Microseconds
              )(_el);
            },
            'error-code': (_el: _Element): void => {
              error_code = $._decode_explicit<Int32>(() => _decode_Int32)(_el);
            },
            crealm: (_el: _Element): void => {
              crealm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
            },
            cname: (_el: _Element): void => {
              cname = $._decode_explicit<PrincipalName>(
                () => _decode_PrincipalName
              )(_el);
            },
            realm: (_el: _Element): void => {
              realm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
            },
            sname: (_el: _Element): void => {
              sname = $._decode_explicit<PrincipalName>(
                () => _decode_PrincipalName
              )(_el);
            },
            'e-text': (_el: _Element): void => {
              e_text = $._decode_explicit<KerberosString>(
                () => _decode_KerberosString
              )(_el);
            },
            'e-data': (_el: _Element): void => {
              e_data = $._decode_explicit<OCTET_STRING>(
                () => $._decodeOctetString
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_KRB_ERROR,
            _extension_additions_list_spec_for_KRB_ERROR,
            _root_component_type_list_2_spec_for_KRB_ERROR,
            undefined
          );
          return new KRB_ERROR /* SEQUENCE_CONSTRUCTOR_CALL */(
            pvno,
            msg_type,
            ctime,
            cusec,
            stime,
            susec,
            error_code,
            crealm,
            cname,
            realm,
            sname,
            e_text,
            e_data
          );
        }
    );
  }
  return _cached_decoder_for_KRB_ERROR(el);
}


let _cached_encoder_for_KRB_ERROR: $.ASN1Encoder<KRB_ERROR> | null = null;


/**
 * @summary Encodes a(n) KRB_ERROR into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB_ERROR, encoded as an ASN.1 Element.
 */
export function _encode_KRB_ERROR(
  value: KRB_ERROR,
  elGetter: $.ASN1Encoder<KRB_ERROR>
) {
  if (!_cached_encoder_for_KRB_ERROR) {
    _cached_encoder_for_KRB_ERROR = $._encode_implicit(
      _TagClass.application,
      30,
      () =>
        function (
          value: KRB_ERROR        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.BER
                )(value.pvno, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeInteger,
                  $.BER
                )(value.msg_type, $.BER),
                /* IF_ABSENT  */ value.ctime === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      2,
                      () => _encode_KerberosTime,
                      $.BER
                    )(value.ctime, $.BER),
                /* IF_ABSENT  */ value.cusec === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Microseconds,
                      $.BER
                    )(value.cusec, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.stime, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => _encode_Microseconds,
                  $.BER
                )(value.susec, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  6,
                  () => _encode_Int32,
                  $.BER
                )(value.error_code, $.BER),
                /* IF_ABSENT  */ value.crealm === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      7,
                      () => _encode_Realm,
                      $.BER
                    )(value.crealm, $.BER),
                /* IF_ABSENT  */ value.cname === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      8,
                      () => _encode_PrincipalName,
                      $.BER
                    )(value.cname, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  9,
                  () => _encode_Realm,
                  $.BER
                )(value.realm, $.BER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  10,
                  () => _encode_PrincipalName,
                  $.BER
                )(value.sname, $.BER),
                /* IF_ABSENT  */ value.e_text === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      11,
                      () => _encode_KerberosString,
                      $.BER
                    )(value.e_text, $.BER),
                /* IF_ABSENT  */ value.e_data === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      12,
                      () => $._encodeOctetString,
                      $.BER
                    )(value.e_data, $.BER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
          );
        },
      $.BER
    );
  }
  return _cached_encoder_for_KRB_ERROR(value, elGetter);
}


/* eslint-enable */
