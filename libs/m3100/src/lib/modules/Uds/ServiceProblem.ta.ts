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

/* START_OF_SYMBOL_DEFINITION _enum_for_ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *   hierSelectForbidden, hierSelectNotAvailableForService, hierSelectNotSupported
 * }
 * ```@enum {number}
 */
export enum _enum_for_ServiceProblem {
  hierSelectForbidden = 0,
  hierSelectNotAvailableForService = 1,
  hierSelectNotSupported = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *   hierSelectForbidden, hierSelectNotAvailableForService, hierSelectNotSupported
 * }
 * ```@enum {number}
 */
export type ServiceProblem = _enum_for_ServiceProblem;
/* END_OF_SYMBOL_DEFINITION ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *   hierSelectForbidden, hierSelectNotAvailableForService, hierSelectNotSupported
 * }
 * ```@enum {number}
 */
export const ServiceProblem = _enum_for_ServiceProblem;
/* END_OF_SYMBOL_DEFINITION ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectForbidden */
/**
 * @summary ServiceProblem_hierSelectForbidden
 * @constant
 * @type {number}
 */
export const ServiceProblem_hierSelectForbidden: ServiceProblem =
  ServiceProblem.hierSelectForbidden; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectForbidden */

/* START_OF_SYMBOL_DEFINITION hierSelectForbidden */
/**
 * @summary hierSelectForbidden
 * @constant
 * @type {number}
 */
export const hierSelectForbidden: ServiceProblem =
  ServiceProblem.hierSelectForbidden; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hierSelectForbidden */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectNotAvailableForService */
/**
 * @summary ServiceProblem_hierSelectNotAvailableForService
 * @constant
 * @type {number}
 */
export const ServiceProblem_hierSelectNotAvailableForService: ServiceProblem =
  ServiceProblem.hierSelectNotAvailableForService; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectNotAvailableForService */

/* START_OF_SYMBOL_DEFINITION hierSelectNotAvailableForService */
/**
 * @summary hierSelectNotAvailableForService
 * @constant
 * @type {number}
 */
export const hierSelectNotAvailableForService: ServiceProblem =
  ServiceProblem.hierSelectNotAvailableForService; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hierSelectNotAvailableForService */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectNotSupported */
/**
 * @summary ServiceProblem_hierSelectNotSupported
 * @constant
 * @type {number}
 */
export const ServiceProblem_hierSelectNotSupported: ServiceProblem =
  ServiceProblem.hierSelectNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_hierSelectNotSupported */

/* START_OF_SYMBOL_DEFINITION hierSelectNotSupported */
/**
 * @summary hierSelectNotSupported
 * @constant
 * @type {number}
 */
export const hierSelectNotSupported: ServiceProblem =
  ServiceProblem.hierSelectNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hierSelectNotSupported */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */
let _cached_decoder_for_ServiceProblem: $.ASN1Decoder<ServiceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceProblem} The decoded data structure.
 */
export function _decode_ServiceProblem(el: _Element) {
  if (!_cached_decoder_for_ServiceProblem) {
    _cached_decoder_for_ServiceProblem = $._decodeEnumerated;
  }
  return _cached_decoder_for_ServiceProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */
let _cached_encoder_for_ServiceProblem: $.ASN1Encoder<ServiceProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceProblem */
/**
 * @summary Encodes a(n) ServiceProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceProblem, encoded as an ASN.1 Element.
 */
export function _encode_ServiceProblem(
  value: ServiceProblem,
  elGetter: $.ASN1Encoder<ServiceProblem>
) {
  if (!_cached_encoder_for_ServiceProblem) {
    _cached_encoder_for_ServiceProblem = $._encodeEnumerated;
  }
  return _cached_encoder_for_ServiceProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceProblem */

/* eslint-enable */
