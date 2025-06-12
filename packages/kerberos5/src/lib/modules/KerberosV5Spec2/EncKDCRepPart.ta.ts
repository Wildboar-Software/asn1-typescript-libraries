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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.js';
export {
  EncryptionKey,
  _decode_EncryptionKey,
  _encode_EncryptionKey,
} from '../KerberosV5Spec2/EncryptionKey.ta.js';
import {
  LastReq,
  _decode_LastReq,
  _encode_LastReq,
} from '../KerberosV5Spec2/LastReq.ta.js';
export {
  LastReq,
  _decode_LastReq,
  _encode_LastReq,
} from '../KerberosV5Spec2/LastReq.ta.js';
import {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';
export {
  UInt32,
  _decode_UInt32,
  _encode_UInt32,
} from '../KerberosV5Spec2/UInt32.ta.js';
import {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
export {
  KerberosTime,
  _decode_KerberosTime,
  _encode_KerberosTime,
} from '../KerberosV5Spec2/KerberosTime.ta.js';
import {
  TicketFlags,
  _decode_TicketFlags,
  _encode_TicketFlags,
} from '../KerberosV5Spec2/TicketFlags.ta.js';
export {
  TicketFlags,
  _decode_TicketFlags,
  _encode_TicketFlags,
} from '../KerberosV5Spec2/TicketFlags.ta.js';
import {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.js';
export {
  Realm,
  _decode_Realm,
  _encode_Realm,
} from '../KerberosV5Spec2/Realm.ta.js';
import {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.js';
export {
  PrincipalName,
  _decode_PrincipalName,
  _encode_PrincipalName,
} from '../KerberosV5Spec2/PrincipalName.ta.js';
import {
  HostAddresses,
  _decode_HostAddresses,
  _encode_HostAddresses,
} from '../KerberosV5Spec2/HostAddresses.ta.js';
export {
  HostAddresses,
  _decode_HostAddresses,
  _encode_HostAddresses,
} from '../KerberosV5Spec2/HostAddresses.ta.js';

/* START_OF_SYMBOL_DEFINITION EncKDCRepPart */
/**
 * @summary EncKDCRepPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncKDCRepPart ::= SEQUENCE {
 *         key             [0] EncryptionKey,
 *         last-req        [1] LastReq,
 *         nonce           [2] UInt32,
 *         key-expiration  [3] KerberosTime OPTIONAL,
 *         flags           [4] TicketFlags,
 *         authtime        [5] KerberosTime,
 *         starttime       [6] KerberosTime OPTIONAL,
 *         endtime         [7] KerberosTime,
 *         renew-till      [8] KerberosTime OPTIONAL,
 *         srealm          [9] Realm,
 *         sname           [10] PrincipalName,
 *         caddr           [11] HostAddresses OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class EncKDCRepPart {
  constructor(
    /**
     * @summary `key`.
     * @public
     * @readonly
     */
    readonly key: EncryptionKey,
    /**
     * @summary `last_req`.
     * @public
     * @readonly
     */
    readonly last_req: LastReq,
    /**
     * @summary `nonce`.
     * @public
     * @readonly
     */
    readonly nonce: UInt32,
    /**
     * @summary `key_expiration`.
     * @public
     * @readonly
     */
    readonly key_expiration: OPTIONAL<KerberosTime>,
    /**
     * @summary `flags`.
     * @public
     * @readonly
     */
    readonly flags: TicketFlags,
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
     * @summary `srealm`.
     * @public
     * @readonly
     */
    readonly srealm: Realm,
    /**
     * @summary `sname`.
     * @public
     * @readonly
     */
    readonly sname: PrincipalName,
    /**
     * @summary `caddr`.
     * @public
     * @readonly
     */
    readonly caddr: OPTIONAL<HostAddresses>
  ) {}

  /**
   * @summary Restructures an object into a EncKDCRepPart
   * @description
   *
   * This takes an `object` and converts it to a `EncKDCRepPart`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EncKDCRepPart`.
   * @returns {EncKDCRepPart}
   */
  public static _from_object(
    _o: { [_K in keyof EncKDCRepPart]: EncKDCRepPart[_K] }
  ): EncKDCRepPart {
    return new EncKDCRepPart(
      _o.key,
      _o.last_req,
      _o.nonce,
      _o.key_expiration,
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
/* END_OF_SYMBOL_DEFINITION EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncKDCRepPart */
/**
 * @summary The Leading Root Component Types of EncKDCRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncKDCRepPart: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'key',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'last-req',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'nonce',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'key-expiration',
    true,
    $.hasTag(_TagClass.context, 3),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'flags',
    false,
    $.hasTag(_TagClass.context, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'authtime',
    false,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'starttime',
    true,
    $.hasTag(_TagClass.context, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'endtime',
    false,
    $.hasTag(_TagClass.context, 7),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'renew-till',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'srealm',
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
    'caddr',
    true,
    $.hasTag(_TagClass.context, 11),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncKDCRepPart */
/**
 * @summary The Trailing Root Component Types of EncKDCRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncKDCRepPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncKDCRepPart */
/**
 * @summary The Extension Addition Component Types of EncKDCRepPart
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncKDCRepPart: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncKDCRepPart */
let _cached_decoder_for_EncKDCRepPart: $.ASN1Decoder<EncKDCRepPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _decode_EncKDCRepPart */
/**
 * @summary Decodes an ASN.1 element into a(n) EncKDCRepPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncKDCRepPart} The decoded data structure.
 */
export function _decode_EncKDCRepPart(el: _Element) {
  if (!_cached_decoder_for_EncKDCRepPart) {
    _cached_decoder_for_EncKDCRepPart = function (el: _Element): EncKDCRepPart {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let key!: EncryptionKey;
      let last_req!: LastReq;
      let nonce!: UInt32;
      let key_expiration: OPTIONAL<KerberosTime>;
      let flags!: TicketFlags;
      let authtime!: KerberosTime;
      let starttime: OPTIONAL<KerberosTime>;
      let endtime!: KerberosTime;
      let renew_till: OPTIONAL<KerberosTime>;
      let srealm!: Realm;
      let sname!: PrincipalName;
      let caddr: OPTIONAL<HostAddresses>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        key: (_el: _Element): void => {
          key = $._decode_explicit<EncryptionKey>(() => _decode_EncryptionKey)(
            _el
          );
        },
        'last-req': (_el: _Element): void => {
          last_req = $._decode_explicit<LastReq>(() => _decode_LastReq)(_el);
        },
        nonce: (_el: _Element): void => {
          nonce = $._decode_explicit<UInt32>(() => _decode_UInt32)(_el);
        },
        'key-expiration': (_el: _Element): void => {
          key_expiration = $._decode_explicit<KerberosTime>(
            () => _decode_KerberosTime
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
        _root_component_type_list_1_spec_for_EncKDCRepPart,
        _extension_additions_list_spec_for_EncKDCRepPart,
        _root_component_type_list_2_spec_for_EncKDCRepPart,
        undefined
      );
      return new EncKDCRepPart /* SEQUENCE_CONSTRUCTOR_CALL */(
        key,
        last_req,
        nonce,
        key_expiration,
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
  return _cached_decoder_for_EncKDCRepPart(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncKDCRepPart */
let _cached_encoder_for_EncKDCRepPart: $.ASN1Encoder<EncKDCRepPart> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncKDCRepPart */

/* START_OF_SYMBOL_DEFINITION _encode_EncKDCRepPart */
/**
 * @summary Encodes a(n) EncKDCRepPart into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncKDCRepPart, encoded as an ASN.1 Element.
 */
export function _encode_EncKDCRepPart(
  value: EncKDCRepPart,
  elGetter: $.ASN1Encoder<EncKDCRepPart>
) {
  if (!_cached_encoder_for_EncKDCRepPart) {
    _cached_encoder_for_EncKDCRepPart = function (
      value: EncKDCRepPart,
      elGetter: $.ASN1Encoder<EncKDCRepPart>
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
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_LastReq,
              $.BER
            )(value.last_req, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              2,
              () => _encode_UInt32,
              $.BER
            )(value.nonce, $.BER),
            /* IF_ABSENT  */ value.key_expiration === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  3,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.key_expiration, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              4,
              () => _encode_TicketFlags,
              $.BER
            )(value.flags, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              5,
              () => _encode_KerberosTime,
              $.BER
            )(value.authtime, $.BER),
            /* IF_ABSENT  */ value.starttime === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  6,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.starttime, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              7,
              () => _encode_KerberosTime,
              $.BER
            )(value.endtime, $.BER),
            /* IF_ABSENT  */ value.renew_till === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  8,
                  () => _encode_KerberosTime,
                  $.BER
                )(value.renew_till, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              9,
              () => _encode_Realm,
              $.BER
            )(value.srealm, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              10,
              () => _encode_PrincipalName,
              $.BER
            )(value.sname, $.BER),
            /* IF_ABSENT  */ value.caddr === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  11,
                  () => _encode_HostAddresses,
                  $.BER
                )(value.caddr, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EncKDCRepPart(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncKDCRepPart */

/* eslint-enable */
