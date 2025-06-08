/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta';
export {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta';
import {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta';
export {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta';
import {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta';
export {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta';
import {
  TicketFlags,
  _decode_TicketFlags,
  _encode_TicketFlags,
} from '../KerberosV5Spec2/TicketFlags.ta';
export {
  TicketFlags,
  _decode_TicketFlags,
  _encode_TicketFlags,
} from '../KerberosV5Spec2/TicketFlags.ta';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta';
import {
  HostAddresses,
  _decode_HostAddresses,
  _encode_HostAddresses,
} from '../KerberosV5Spec2/HostAddresses.ta';
export {
  HostAddresses,
  _decode_HostAddresses,
  _encode_HostAddresses,
} from '../KerberosV5Spec2/HostAddresses.ta';

/* START_OF_SYMBOL_DEFINITION KrbCredInfo */
/**
 * @summary KrbCredInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KrbCredInfo ::= SEQUENCE {
 *         key             [0] EncryptionKey,
 *         prealm          [1] Realm OPTIONAL,
 *         pname           [2] PrincipalName OPTIONAL,
 *         flags           [3] TicketFlags OPTIONAL,
 *         authtime        [4] KerberosTime OPTIONAL,
 *         starttime       [5] KerberosTime OPTIONAL,
 *         endtime         [6] KerberosTime OPTIONAL,
 *         renew-till      [7] KerberosTime OPTIONAL,
 *         srealm          [8] Realm OPTIONAL,
 *         sname           [9] PrincipalName OPTIONAL,
 *         caddr           [10] HostAddresses OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class KrbCredInfo {
  constructor(
    /**
     * @summary `key`.
     * @public
     * @readonly
     */
    readonly key: EncryptionKey,
    /**
     * @summary `prealm`.
     * @public
     * @readonly
     */
    readonly prealm: OPTIONAL<Realm>,
    /**
     * @summary `pname`.
     * @public
     * @readonly
     */
    readonly pname: OPTIONAL<PrincipalName>,
    /**
     * @summary `flags`.
     * @public
     * @readonly
     */
    readonly flags: OPTIONAL<TicketFlags>,
    /**
     * @summary `authtime`.
     * @public
     * @readonly
     */
    readonly authtime: OPTIONAL<KerberosTime>,
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
    readonly endtime: OPTIONAL<KerberosTime>,
    /**
     * @summary `renew_till`.
     * @public
     * @readonly
     */
    readonly renew_till: OPTIONAL<KerberosTime>,
    /**
     * @summary `srealm`.
     * @public
     * @readonly
     */
    readonly srealm: OPTIONAL<Realm>,
    /**
     * @summary `sname`.
     * @public
     * @readonly
     */
    readonly sname: OPTIONAL<PrincipalName>,
    /**
     * @summary `caddr`.
     * @public
     * @readonly
     */
    readonly caddr: OPTIONAL<HostAddresses>
  ) {}

  /**
   * @summary Restructures an object into a KrbCredInfo
   * @description
   *
   * This takes an `object` and converts it to a `KrbCredInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `KrbCredInfo`.
   * @returns {KrbCredInfo}
   */
  public static _from_object(
    _o: { [_K in keyof KrbCredInfo]: KrbCredInfo[_K] }
  ): KrbCredInfo {
    return new KrbCredInfo(
      _o.key,
      _o.prealm,
      _o.pname,
      _o.flags,
      _o.authtime,
      _o.starttime,
      _o.endtime,
      _o.renew_till,
      _o.srealm,
      _o.sname,
      _o.caddr
    );
  }
}
/* END_OF_SYMBOL_DEFINITION KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KrbCredInfo */
/**
 * @summary The Leading Root Component Types of KrbCredInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KrbCredInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'key',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'prealm',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'pname',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'flags',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'authtime',
    true,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'starttime',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'endtime',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'renew-till',
    true,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'srealm',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'sname',
    true,
    $.hasTag(_TagClass.context, 9),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'caddr',
    true,
    $.hasTag(_TagClass.context, 10),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KrbCredInfo */
/**
 * @summary The Trailing Root Component Types of KrbCredInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KrbCredInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KrbCredInfo */
/**
 * @summary The Extension Addition Component Types of KrbCredInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KrbCredInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KrbCredInfo */
let _cached_decoder_for_KrbCredInfo: $.ASN1Decoder<KrbCredInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _decode_KrbCredInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) KrbCredInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KrbCredInfo} The decoded data structure.
 */
export function _decode_KrbCredInfo(el: _Element) {
  if (!_cached_decoder_for_KrbCredInfo) {
    _cached_decoder_for_KrbCredInfo = function (el: _Element): KrbCredInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let key!: EncryptionKey;
      let prealm: OPTIONAL<Realm>;
      let pname: OPTIONAL<PrincipalName>;
      let flags: OPTIONAL<TicketFlags>;
      let authtime: OPTIONAL<KerberosTime>;
      let starttime: OPTIONAL<KerberosTime>;
      let endtime: OPTIONAL<KerberosTime>;
      let renew_till: OPTIONAL<KerberosTime>;
      let srealm: OPTIONAL<Realm>;
      let sname: OPTIONAL<PrincipalName>;
      let caddr: OPTIONAL<HostAddresses>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        key: (_el: _Element): void => {
          key = $._decode_explicit<EncryptionKey>(() => _decode_EncryptionKey)(
            _el
          );
        },
        prealm: (_el: _Element): void => {
          prealm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
        },
        pname: (_el: _Element): void => {
          pname = $._decode_explicit<PrincipalName>(
            () => _decode_PrincipalName
          )(_el);
        },
        flags: (_el: _Element): void => {
          flags = $._decode_explicit<TicketFlags>(() => _decode_TicketFlags)(
            _el
          );
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
        srealm: (_el: _Element): void => {
          srealm = $._decode_explicit<Realm>(() => _decode_Realm)(_el);
        },
        sname: (_el: _Element): void => {
          sname = $._decode_explicit<PrincipalName>(
            () => _decode_PrincipalName
          )(_el);
        },
        caddr: (_el: _Element): void => {
          caddr = $._decode_explicit<HostAddresses>(
            () => _decode_HostAddresses
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_KrbCredInfo,
        _extension_additions_list_spec_for_KrbCredInfo,
        _root_component_type_list_2_spec_for_KrbCredInfo,
        undefined
      );
      return new KrbCredInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        key,
        prealm,
        pname,
        flags,
        authtime,
        starttime,
        endtime,
        renew_till,
        srealm,
        sname,
        caddr
      );
    };
  }
  return _cached_decoder_for_KrbCredInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KrbCredInfo */
let _cached_encoder_for_KrbCredInfo: $.ASN1Encoder<KrbCredInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KrbCredInfo */

/* START_OF_SYMBOL_DEFINITION _encode_KrbCredInfo */
/**
 * @summary Encodes a(n) KrbCredInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KrbCredInfo, encoded as an ASN.1 Element.
 */
export function _encode_KrbCredInfo(
  value: KrbCredInfo,
  elGetter: $.ASN1Encoder<KrbCredInfo>
) {
  if (!_cached_encoder_for_KrbCredInfo) {
    _cached_encoder_for_KrbCredInfo = function (
      value: KrbCredInfo,
      elGetter: $.ASN1Encoder<KrbCredInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_EncryptionKey,
              $.BER
            )(value.key, $.BER),
            /* IF_ABSENT  */ value.prealm === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => _encode_Realm,
                  $.BER
                )(value.prealm, $.BER),
            /* IF_ABSENT  */ value.pname === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  2,
                  () => _encode_PrincipalName,
                  $.BER
                )(value.pname, $.BER),
            /* IF_ABSENT  */ value.flags === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_TicketFlags,
                  $.BER
                )(value.flags, $.BER),
            /* IF_ABSENT  */ value.authtime === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.authtime, $.BER),
            /* IF_ABSENT  */ value.starttime === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  5,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.starttime, $.BER),
            /* IF_ABSENT  */ value.endtime === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  6,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.endtime, $.BER),
            /* IF_ABSENT  */ value.renew_till === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  7,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.renew_till, $.BER),
            /* IF_ABSENT  */ value.srealm === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  8,
                  () => _encode_Realm,
                  $.BER
                )(value.srealm, $.BER),
            /* IF_ABSENT  */ value.sname === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  9,
                  () => _encode_PrincipalName,
                  $.BER
                )(value.sname, $.BER),
            /* IF_ABSENT  */ value.caddr === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  10,
                  () => _encode_HostAddresses,
                  $.BER
                )(value.caddr, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_KrbCredInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KrbCredInfo */

/* eslint-enable */
