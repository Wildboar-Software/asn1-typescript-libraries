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
import {
  CertifiedKeyPair,
  _decode_CertifiedKeyPair,
  _encode_CertifiedKeyPair,
} from '../PKIXCMP-2009/CertifiedKeyPair.ta';
export {
  CertifiedKeyPair,
  _decode_CertifiedKeyPair,
  _encode_CertifiedKeyPair,
} from '../PKIXCMP-2009/CertifiedKeyPair.ta';

/* START_OF_SYMBOL_DEFINITION CertResponse */
/**
 * @summary CertResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertResponse ::= SEQUENCE {
 *     certReqId           INTEGER,
 *     -- to match this response with the corresponding request (a value
 *     -- of -1 is to be used if certReqId is not specified in the
 *     -- corresponding request)
 *     status              PKIStatusInfo,
 *     certifiedKeyPair    CertifiedKeyPair    OPTIONAL,
 *     rspInfo             OCTET STRING        OPTIONAL
 *     -- analogous to the id-regInfo-utf8Pairs string defined
 *     -- for regInfo in CertReqMsg [RFC4211]
 * }
 * ```
 *
 * @class
 */
export class CertResponse {
  constructor(
    /**
     * @summary `certReqId`.
     * @public
     * @readonly
     */
    readonly certReqId: INTEGER,
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatusInfo,
    /**
     * @summary `certifiedKeyPair`.
     * @public
     * @readonly
     */
    readonly certifiedKeyPair: OPTIONAL<CertifiedKeyPair>,
    /**
     * @summary `rspInfo`.
     * @public
     * @readonly
     */
    readonly rspInfo: OPTIONAL<OCTET_STRING>
  ) {}

  /**
   * @summary Restructures an object into a CertResponse
   * @description
   *
   * This takes an `object` and converts it to a `CertResponse`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertResponse`.
   * @returns {CertResponse}
   */
  public static _from_object(
    _o: { [_K in keyof CertResponse]: CertResponse[_K] }
  ): CertResponse {
    return new CertResponse(
      _o.certReqId,
      _o.status,
      _o.certifiedKeyPair,
      _o.rspInfo
    );
  }
}
/* END_OF_SYMBOL_DEFINITION CertResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertResponse */
/**
 * @summary The Leading Root Component Types of CertResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertResponse: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'certReqId',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'certifiedKeyPair',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'rspInfo',
    true,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertResponse */
/**
 * @summary The Trailing Root Component Types of CertResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertResponse */
/**
 * @summary The Extension Addition Component Types of CertResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertResponse */
let _cached_decoder_for_CertResponse: $.ASN1Decoder<CertResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertResponse */

/* START_OF_SYMBOL_DEFINITION _decode_CertResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) CertResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertResponse} The decoded data structure.
 */
export function _decode_CertResponse(el: _Element) {
  if (!_cached_decoder_for_CertResponse) {
    _cached_decoder_for_CertResponse = function (el: _Element): CertResponse {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let certReqId!: INTEGER;
      let status!: PKIStatusInfo;
      let certifiedKeyPair: OPTIONAL<CertifiedKeyPair>;
      let rspInfo: OPTIONAL<OCTET_STRING>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        certReqId: (_el: _Element): void => {
          certReqId = $._decodeInteger(_el);
        },
        status: (_el: _Element): void => {
          status = _decode_PKIStatusInfo(_el);
        },
        certifiedKeyPair: (_el: _Element): void => {
          certifiedKeyPair = _decode_CertifiedKeyPair(_el);
        },
        rspInfo: (_el: _Element): void => {
          rspInfo = $._decodeOctetString(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CertResponse,
        _extension_additions_list_spec_for_CertResponse,
        _root_component_type_list_2_spec_for_CertResponse,
        undefined
      );
      return new CertResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
        certReqId,
        status,
        certifiedKeyPair,
        rspInfo
      );
    };
  }
  return _cached_decoder_for_CertResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertResponse */
let _cached_encoder_for_CertResponse: $.ASN1Encoder<CertResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertResponse */

/* START_OF_SYMBOL_DEFINITION _encode_CertResponse */
/**
 * @summary Encodes a(n) CertResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertResponse, encoded as an ASN.1 Element.
 */
export function _encode_CertResponse(
  value: CertResponse,
  elGetter: $.ASN1Encoder<CertResponse>
) {
  if (!_cached_encoder_for_CertResponse) {
    _cached_encoder_for_CertResponse = function (
      value: CertResponse,
      elGetter: $.ASN1Encoder<CertResponse>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.certReqId, $.BER),
            /* REQUIRED   */ _encode_PKIStatusInfo(value.status, $.BER),
            /* IF_ABSENT  */ value.certifiedKeyPair === undefined
              ? undefined
              : _encode_CertifiedKeyPair(value.certifiedKeyPair, $.BER),
            /* IF_ABSENT  */ value.rspInfo === undefined
              ? undefined
              : $._encodeOctetString(value.rspInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertResponse */

/* eslint-enable */
