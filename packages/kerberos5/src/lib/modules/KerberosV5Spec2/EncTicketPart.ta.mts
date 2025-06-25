/* eslint-disable */
import {
  OPTIONAL,
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
  TicketFlags,
  _decode_TicketFlags,
  _encode_TicketFlags,
} from '../KerberosV5Spec2/TicketFlags.ta.mjs';
import {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.mjs';
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
  TransitedEncoding,
  _decode_TransitedEncoding,
  _encode_TransitedEncoding,
} from '../KerberosV5Spec2/TransitedEncoding.ta.mjs';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.mjs';
import {
  HostAddresses,
  _decode_HostAddresses,
  _encode_HostAddresses,
} from '../KerberosV5Spec2/HostAddresses.ta.mjs';
import {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary EncTicketPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncTicketPart ::= [APPLICATION 3] SEQUENCE {
 *         flags                   [0] TicketFlags,
 *         key                     [1] EncryptionKey,
 *         crealm                  [2] Realm,
 *
 *
 *         cname                   [3] PrincipalName,
 *         transited               [4] TransitedEncoding,
 *         authtime                [5] KerberosTime,
 *         starttime               [6] KerberosTime OPTIONAL,
 *         endtime                 [7] KerberosTime,
 *         renew-till              [8] KerberosTime OPTIONAL,
 *         caddr                   [9] HostAddresses OPTIONAL,
 *         authorization-data      [10] AuthorizationData OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncTicketPart {
  constructor(
    /**
     * @summary `flags`.
     * @public
     * @readonly
     */
    readonly flags: TicketFlags,
    /**
     * @summary `key`.
     * @public
     * @readonly
     */
    readonly key: EncryptionKey,
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
     * @summary `transited`.
     * @public
     * @readonly
     */
    readonly transited: TransitedEncoding,
    /**
     * @summary `authtime`.
     * @public
     * @readonly
     */
    readonly authtime: KerberosTime,
    /**
     * @summary `starttime`.
     * @public
     * @readonly
     */
    readonly starttime: OPTIONAL<KerberosTime>,
    /**
     * @summary `endtime`.
     * @public
     * @readonly
     */
    readonly endtime: KerberosTime,
    /**
     * @summary `renew_till`.
     * @public
     * @readonly
     */
    readonly renew_till: OPTIONAL<KerberosTime>,
    /**
     * @summary `caddr`.
     * @public
     * @readonly
     */
    readonly caddr: OPTIONAL<HostAddresses>,
    /**
     * @summary `authorization_data`.
     * @public
     * @readonly
     */
    readonly authorization_data: OPTIONAL<AuthorizationData>
  ) {}

  /**
   * @summary Restructures an object into a EncTicketPart
   * @description
   *
   * This takes an `object` and converts it to a `EncTicketPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncTicketPart`.
   * @returns {EncTicketPart}
   */
  public static _from_object(
    _o: { [_K in keyof EncTicketPart]: EncTicketPart[_K] }
  ): EncTicketPart {
    return new EncTicketPart(
      _o.flags,
      _o.key,
      _o.crealm,
      _o.cname,
      _o.transited,
      _o.authtime,
      _o.starttime,
      _o.endtime,
      _o.renew_till,
      _o.caddr,
      _o.authorization_data
    );
  }
}


/**
 * @summary The Leading Root Component Types of EncTicketPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncTicketPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'flags',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'key',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'crealm',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
  new $.ComponentSpec(
    'cname',
    false,
    $.hasTag(_TagClass.context, 3)
  ),
  new $.ComponentSpec(
    'transited',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
  new $.ComponentSpec(
    'authtime',
    false,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'starttime',
    true,
    $.hasTag(_TagClass.context, 6)
  ),
  new $.ComponentSpec(
    'endtime',
    false,
    $.hasTag(_TagClass.context, 7)
  ),
  new $.ComponentSpec(
    'renew-till',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
  new $.ComponentSpec(
    'caddr',
    true,
    $.hasTag(_TagClass.context, 9)
  ),
  new $.ComponentSpec(
    'authorization-data',
    true,
    $.hasTag(_TagClass.context, 10)
  ),
];


/**
 * @summary The Trailing Root Component Types of EncTicketPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncTicketPart: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncTicketPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncTicketPart: $.ComponentSpec[] = [];


let _cached_decoder_for_EncTicketPart: $.ASN1Decoder<EncTicketPart> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncTicketPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncTicketPart} The decoded data structure.
 */
export function _decode_EncTicketPart(el: _Element): EncTicketPart {
  if (!_cached_decoder_for_EncTicketPart) {
    _cached_decoder_for_EncTicketPart = $._decode_implicit<EncTicketPart>(
      () =>
        function (el: _Element): EncTicketPart {
          let flags!: TicketFlags;
          let key!: EncryptionKey;
          let crealm!: Realm;
          let cname!: PrincipalName;
          let transited!: TransitedEncoding;
          let authtime!: KerberosTime;
          let starttime: OPTIONAL<KerberosTime>;
          let endtime!: KerberosTime;
          let renew_till: OPTIONAL<KerberosTime>;
          let caddr: OPTIONAL<HostAddresses>;
          let authorization_data: OPTIONAL<AuthorizationData>;
          const callbacks: $.DecodingMap = {
            flags: (_el: _Element): void => {
              flags = $._decode_explicit<TicketFlags>(
                () => _decode_TicketFlags
              )(_el);
            },
            key: (_el: _Element): void => {
              key = $._decode_explicit<EncryptionKey>(
                () => _decode_EncryptionKey
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
            transited: (_el: _Element): void => {
              transited = $._decode_explicit<TransitedEncoding>(
                () => _decode_TransitedEncoding
              )(_el);
            },
            authtime: (_el: _Element): void => {
              authtime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            starttime: (_el: _Element): void => {
              starttime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            endtime: (_el: _Element): void => {
              endtime = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            'renew-till': (_el: _Element): void => {
              renew_till = $._decode_explicit<KerberosTime>(
                () => _decode_KerberosTime
              )(_el);
            },
            caddr: (_el: _Element): void => {
              caddr = $._decode_explicit<HostAddresses>(
                () => _decode_HostAddresses
              )(_el);
            },
            'authorization-data': (_el: _Element): void => {
              authorization_data = $._decode_explicit<AuthorizationData>(
                () => _decode_AuthorizationData
              )(_el);
            },
          };
          $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_EncTicketPart,
            _extension_additions_list_spec_for_EncTicketPart,
            _root_component_type_list_2_spec_for_EncTicketPart,
            undefined
          );
          return new EncTicketPart (
            flags,
            key,
            crealm,
            cname,
            transited,
            authtime,
            starttime,
            endtime,
            renew_till,
            caddr,
            authorization_data
          );
        }
    );
  }
  return _cached_decoder_for_EncTicketPart(el);
}


let _cached_encoder_for_EncTicketPart: $.ASN1Encoder<EncTicketPart> | null = null;


/**
 * @summary Encodes a(n) EncTicketPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncTicketPart, encoded as an ASN.1 Element.
 */
export function _encode_EncTicketPart(
  value: EncTicketPart,
  elGetter: $.ASN1Encoder<EncTicketPart>
): _Element {
  if (!_cached_encoder_for_EncTicketPart) {
    _cached_encoder_for_EncTicketPart = $._encode_implicit(
      _TagClass.application,
      3,
      () =>
        function (
          value: EncTicketPart        ): _Element {
          return $._encodeSequence(
            ([] as (_Element | undefined)[])
              .concat([
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  0,
                  () => _encode_TicketFlags,
                  $.DER
                )(value.flags, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_EncryptionKey,
                  $.DER
                )(value.key, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_Realm,
                  $.DER
                )(value.crealm, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_PrincipalName,
                  $.DER
                )(value.cname, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_TransitedEncoding,
                  $.DER
                )(value.transited, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => _encode_KerberosTime,
                  $.DER
                )(value.authtime, $.DER),
                /* IF_ABSENT  */ value.starttime === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      6,
                      () => _encode_KerberosTime,
                      $.DER
                    )(value.starttime, $.DER),
                /* REQUIRED   */ $._encode_explicit(
                  _TagClass.context,
                  7,
                  () => _encode_KerberosTime,
                  $.DER
                )(value.endtime, $.DER),
                /* IF_ABSENT  */ value.renew_till === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      8,
                      () => _encode_KerberosTime,
                      $.DER
                    )(value.renew_till, $.DER),
                /* IF_ABSENT  */ value.caddr === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      9,
                      () => _encode_HostAddresses,
                      $.DER
                    )(value.caddr, $.DER),
                /* IF_ABSENT  */ value.authorization_data === undefined
                  ? undefined
                  : $._encode_explicit(
                      _TagClass.context,
                      10,
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
  return _cached_encoder_for_EncTicketPart(value, elGetter);
}


/* eslint-enable */
