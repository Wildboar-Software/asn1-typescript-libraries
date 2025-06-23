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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta.mjs';

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
    $.hasTag(_TagClass.universal, 4)
  ),
  new $.ComponentSpec(
    'certReqId',
    false,
    $.hasTag(_TagClass.universal, 2)
  ),
  new $.ComponentSpec(
    'statusInfo',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of CertStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertStatus: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertStatus: $.ComponentSpec[] = [];


let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element) {
  if (!_cached_decoder_for_CertStatus) {
    _cached_decoder_for_CertStatus = function (el: _Element): CertStatus {
      let certHash!: OCTET_STRING;
      let certReqId!: INTEGER;
      let statusInfo: OPTIONAL<PKIStatusInfo>;
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
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertStatus,
        _extension_additions_list_spec_for_CertStatus,
        _root_component_type_list_2_spec_for_CertStatus,
        undefined
      );
      return new CertStatus (
        certHash,
        certReqId,
        statusInfo
      );
    };
  }
  return _cached_decoder_for_CertStatus(el);
}


let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;


/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
  value: CertStatus,
  elGetter: $.ASN1Encoder<CertStatus>
) {
  if (!_cached_encoder_for_CertStatus) {
    _cached_encoder_for_CertStatus = function (
      value: CertStatus    ): _Element {
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


/* eslint-enable */
