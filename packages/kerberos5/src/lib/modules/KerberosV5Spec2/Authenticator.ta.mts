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
  Checksum,
  _decode_Checksum,
  _encode_Checksum,
} from '../KerberosV5Spec2/Checksum.ta.mjs';
import {
  Microseconds,
  _decode_Microseconds,
  _encode_Microseconds,
} from '../KerberosV5Spec2/Microseconds.ta.mjs';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.mjs';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.mjs';
import {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary Authenticator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authenticator ::= [APPLICATION 2] SEQUENCE  {
 *         authenticator-vno       [0] INTEGER (5),
 *         crealm                  [1] Realm,
 *         cname                   [2] PrincipalName,
 *         cksum                   [3] Checksum OPTIONAL,
 *         cusec                   [4] Microseconds,
 *         ctime                   [5] KerberosTime,
 *         subkey                  [6] EncryptionKey OPTIONAL,
 *         seq-number              [7] UInt32 OPTIONAL,
 *         authorization-data      [8] AuthorizationData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Authenticator {
  constructor(
    /**
     * @summary `authenticator_vno`.
     * @public
     * @readonly
     */
    readonly authenticator_vno: INTEGER,
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
     * @summary `cksum`.
     * @public
     * @readonly
     */
    readonly cksum: OPTIONAL<Checksum>,
    /**
     * @summary `cusec`.
     * @public
     * @readonly
     */
    readonly cusec: Microseconds,
    /**
     * @summary `ctime`.
     * @public
     * @readonly
     */
    readonly ctime: KerberosTime,
    /**
     * @summary `subkey`.
     * @public
     * @readonly
     */
    readonly subkey: OPTIONAL<EncryptionKey>,
    /**
     * @summary `seq_number`.
     * @public
     * @readonly
     */
    readonly seq_number: OPTIONAL<UInt32>,
    /**
     * @summary `authorization_data`.
     * @public
     * @readonly
     */
    readonly authorization_data: OPTIONAL<AuthorizationData>
  ) {}

  /**
   * @summary Restructures an object into a Authenticator
   * @description
   *
   * This takes an `object` and converts it to a `Authenticator`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Authenticator`.
   * @returns {Authenticator}
   */
  public static _from_object(
    _o: { [_K in keyof Authenticator]: Authenticator[_K] }
  ): Authenticator {
    return new Authenticator(
      _o.authenticator_vno,
      _o.crealm,
      _o.cname,
      _o.cksum,
      _o.cusec,
      _o.ctime,
      _o.subkey,
      _o.seq_number,
      _o.authorization_data
    );
  }
}


/**
 * @summary The Leading Root Component Types of Authenticator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Authenticator: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'authenticator-vno',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'crealm',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'cname',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'cksum',
    true,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'cusec',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'ctime',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'subkey',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'seq-number',
    true,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'authorization-data',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of Authenticator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Authenticator: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Authenticator
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Authenticator: $.ComponentSpec[] = [];


let _cached_decoder_for_Authenticator: $.ASN1Decoder<Authenticator> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Authenticator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Authenticator} The decoded data structure.
 */
export function _decode_Authenticator(el: _Element) {
  if (!_cached_decoder_for_Authenticator) {
    _cached_decoder_for_Authenticator = $._decode_implicit<Authenticator>(
      () =>
        function (el: _Element): Authenticator {
          /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          let authenticator_vno!: INTEGER;
          let crealm!: Realm;
          let cname!: PrincipalName;
          let cksum: OPTIONAL<Checksum>;
          let cusec!: Microseconds;
          let ctime!: KerberosTime;
          let subkey: OPTIONAL<EncryptionKey>;
          let seq_number: OPTIONAL<UInt32>;
          let authorization_data: OPTIONAL<AuthorizationData>;
          /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
          /* START_OF_CALLBACKS_MAP */
          const callbacks: $.DecodingMap = {
            'authenticator-vno': (_el: _Element): void => {
              authenticator_vno = $._decode_explicit<INTEGER>(
                () => $._decodeInteger
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
            cksum: (_el: _Element): void => {
              cksum = $._decode_explicit<Checksum>(() => _decode_Checksum)(_el);
            },
            cusec: (_el: _Element): void => {
              cusec = $._decode_explicit<Microseconds>(
                () => _decode_Microseconds
              )(_el);
            },
            ctime: (_el: _Element): void => {
              ctime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            subkey: (_el: _Element): void => {
              subkey = $._decode_explicit<EncryptionKey>(
                () => _decode_EncryptionKey
              )(_el);
            },
            'seq-number': (_el: _Element): void => {
              seq_number = $._decode_explicit<UInt32>(() => _decode_UInt32)(
                _el
              );
            },
            'authorization-data': (_el: _Element): void => {
              authorization_data = $._decode_explicit<AuthorizationData>(
                () => _decode_AuthorizationData
              )(_el);
            },
          };
          /* END_OF_CALLBACKS_MAP */
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_Authenticator,
            _extension_additions_list_spec_for_Authenticator,
            _root_component_type_list_2_spec_for_Authenticator,
            undefined
          );
          return new Authenticator /* SEQUENCE_CONSTRUCTOR_CALL */(
            authenticator_vno,
            crealm,
            cname,
            cksum,
            cusec,
            ctime,
            subkey,
            seq_number,
            authorization_data
          );
        }
    );
  }
  return _cached_decoder_for_Authenticator(el);
}


let _cached_encoder_for_Authenticator: $.ASN1Encoder<Authenticator> | null = null;


/**
 * @summary Encodes a(n) Authenticator into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Authenticator, encoded as an ASN.1 Element.
 */
export function _encode_Authenticator(
  value: Authenticator,
  elGetter: $.ASN1Encoder<Authenticator>
) {
  if (!_cached_encoder_for_Authenticator) {
    _cached_encoder_for_Authenticator = $._encode_implicit(
      _TagClass.application,
      2,
      () =>
        function (
          value: Authenticator        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => $._encodeInteger,
                  $.DER
                )(value.authenticator_vno, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Realm,
                  $.DER
                )(value.crealm, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_PrincipalName,
                  $.DER
                )(value.cname, $.DER),
                /* IF_ABSENT  */ value.cksum === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      3,
                      () => _encode_Checksum,
                      $.DER
                    )(value.cksum, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_Microseconds,
                  $.DER
                )(value.cusec, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => _encode_KerberosTime,
                  $.DER
                )(value.ctime, $.DER),
                /* IF_ABSENT  */ value.subkey === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      6,
                      () => _encode_EncryptionKey,
                      $.DER
                    )(value.subkey, $.DER),
                /* IF_ABSENT  */ value.seq_number === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      7,
                      () => _encode_UInt32,
                      $.DER
                    )(value.seq_number, $.DER),
                /* IF_ABSENT  */ value.authorization_data === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      8,
                      () => _encode_AuthorizationData,
                      $.DER
                    )(value.authorization_data, $.DER),
              ])
              .filter((c: _Element | undefined): c is _Element => !!c),
            $.DER
          );
        },
      $.DER
    );
  }
  return _cached_encoder_for_Authenticator(value, elGetter);
}


/* eslint-enable */
