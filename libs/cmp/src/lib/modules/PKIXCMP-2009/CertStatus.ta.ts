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
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta';
export {
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta';

/* START_OF_SYMBOL_DEFINITION CertStatus */
/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus ::= SEQUENCE {
 *     certHash    OCTET STRING,
 *     -- the hash of the certificate, using the same hash algorithm
 *     -- as is used to create and verify the certificate signature
 *     certReqId   INTEGER,
 *     -- to match this confirmation with the corresponding req/rep
 *     statusInfo  PKIStatusInfo OPTIONAL }
 * ```
 *
 * @class
 */
export class CertStatus {
  constructor(
    /**
     * @summary `certHash`.
     * @public
     * @readonly
     */
    readonly certHash: OCTET_STRING,
    /**
     * @summary `certReqId`.
     * @public
     * @readonly
     */
    readonly certReqId: INTEGER,
    /**
     * @summary `statusInfo`.
     * @public
     * @readonly
     */
    readonly statusInfo: OPTIONAL<PKIStatusInfo>
  ) {}

  /**
   * @summary Restructures an object into a CertStatus
   * @description
   *
   * This takes an `object` and converts it to a `CertStatus`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertStatus`.
   * @returns {CertStatus}
   */
  public static _from_object(
    _o: { [_K in keyof CertStatus]: CertStatus[_K] }
  ): CertStatus {
    return new CertStatus(_o.certHash, _o.certReqId, _o.statusInfo);
  }
}
/* END_OF_SYMBOL_DEFINITION CertStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertStatus */
/**
 * @summary The Leading Root Component Types of CertStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertStatus: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certHash',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'certReqId',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'statusInfo',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertStatus */
/**
 * @summary The Trailing Root Component Types of CertStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertStatus */
/**
 * @summary The Extension Addition Component Types of CertStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertStatus */
let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _decode_CertStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element) {
  if (!_cached_decoder_for_CertStatus) {
    _cached_decoder_for_CertStatus = function (el: _Element): CertStatus {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certHash!: OCTET_STRING;
      let certReqId!: INTEGER;
      let statusInfo: OPTIONAL<PKIStatusInfo>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certHash: (_el: _Element): void => {
          certHash = $._decodeOctetString(_el);
        },
        certReqId: (_el: _Element): void => {
          certReqId = $._decodeInteger(_el);
        },
        statusInfo: (_el: _Element): void => {
          statusInfo = _decode_PKIStatusInfo(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertStatus,
        _extension_additions_list_spec_for_CertStatus,
        _root_component_type_list_2_spec_for_CertStatus,
        undefined
      );
      return new CertStatus /* SEQUENCE_CONSTRUCTOR_CALL */(
        certHash,
        certReqId,
        statusInfo
      );
    };
  }
  return _cached_decoder_for_CertStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertStatus */
let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _encode_CertStatus */
/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
  value: CertStatus,
  elGetter: $.ASN1Encoder<CertStatus>
) {
  if (!_cached_encoder_for_CertStatus) {
    _cached_encoder_for_CertStatus = function (
      value: CertStatus,
      elGetter: $.ASN1Encoder<CertStatus>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeOctetString(value.certHash, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.certReqId, $.BER),
            /* IF_ABSENT  */ value.statusInfo === undefined
              ? undefined
              : _encode_PKIStatusInfo(value.statusInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertStatus */

/* eslint-enable */
