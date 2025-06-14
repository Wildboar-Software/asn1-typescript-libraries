/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION Entity_Reference */
/**
 * @summary Entity_Reference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Entity-Reference  ::=  INTEGER {
 *   no-categorization-possible(0), initiating-file-service-user(1),
 *   initiating-file-protocol-machine(2),
 *   service-supporting-the-file-protocol-machine(3),
 *   responding-file-protocol-machine(4), responding-file-service-user(5)
 * }
 * ```
 */
export type Entity_Reference = INTEGER;
/* END_OF_SYMBOL_DEFINITION Entity_Reference */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_no_categorization_possible */
/**
 * @summary Entity_Reference_no_categorization_possible
 * @constant
 * @type {number}
 */
export const Entity_Reference_no_categorization_possible: Entity_Reference = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_no_categorization_possible */

/* START_OF_SYMBOL_DEFINITION no_categorization_possible */
/**
 * @summary Entity_Reference_no_categorization_possible
 * @constant
 * @type {number}
 */
export const no_categorization_possible: Entity_Reference = Entity_Reference_no_categorization_possible; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_categorization_possible */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_initiating_file_service_user */
/**
 * @summary Entity_Reference_initiating_file_service_user
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_service_user: Entity_Reference = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_initiating_file_service_user */

/* START_OF_SYMBOL_DEFINITION initiating_file_service_user */
/**
 * @summary Entity_Reference_initiating_file_service_user
 * @constant
 * @type {number}
 */
export const initiating_file_service_user: Entity_Reference = Entity_Reference_initiating_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION initiating_file_service_user */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_initiating_file_protocol_machine */
/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_protocol_machine: Entity_Reference = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_initiating_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION initiating_file_protocol_machine */
/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @constant
 * @type {number}
 */
export const initiating_file_protocol_machine: Entity_Reference = Entity_Reference_initiating_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION initiating_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_service_supporting_the_file_protocol_machine */
/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_service_supporting_the_file_protocol_machine: Entity_Reference = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_service_supporting_the_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION service_supporting_the_file_protocol_machine */
/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @constant
 * @type {number}
 */
export const service_supporting_the_file_protocol_machine: Entity_Reference = Entity_Reference_service_supporting_the_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION service_supporting_the_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_responding_file_protocol_machine */
/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_protocol_machine: Entity_Reference = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_responding_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION responding_file_protocol_machine */
/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @constant
 * @type {number}
 */
export const responding_file_protocol_machine: Entity_Reference = Entity_Reference_responding_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION responding_file_protocol_machine */

/* START_OF_SYMBOL_DEFINITION Entity_Reference_responding_file_service_user */
/**
 * @summary Entity_Reference_responding_file_service_user
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_service_user: Entity_Reference = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Entity_Reference_responding_file_service_user */

/* START_OF_SYMBOL_DEFINITION responding_file_service_user */
/**
 * @summary Entity_Reference_responding_file_service_user
 * @constant
 * @type {number}
 */
export const responding_file_service_user: Entity_Reference = Entity_Reference_responding_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION responding_file_service_user */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Entity_Reference */
let _cached_decoder_for_Entity_Reference: $.ASN1Decoder<Entity_Reference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Entity_Reference */

/* START_OF_SYMBOL_DEFINITION _decode_Entity_Reference */
/**
 * @summary Decodes an ASN.1 element into a(n) Entity_Reference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Entity_Reference} The decoded data structure.
 */
export function _decode_Entity_Reference(el: _Element) {
  if (!_cached_decoder_for_Entity_Reference) {
    _cached_decoder_for_Entity_Reference = $._decodeInteger;
  }
  return _cached_decoder_for_Entity_Reference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Entity_Reference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Entity_Reference */
let _cached_encoder_for_Entity_Reference: $.ASN1Encoder<Entity_Reference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Entity_Reference */

/* START_OF_SYMBOL_DEFINITION _encode_Entity_Reference */
/**
 * @summary Encodes a(n) Entity_Reference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entity_Reference, encoded as an ASN.1 Element.
 */
export function _encode_Entity_Reference(
  value: Entity_Reference,
  elGetter: $.ASN1Encoder<Entity_Reference>
) {
  if (!_cached_encoder_for_Entity_Reference) {
    _cached_encoder_for_Entity_Reference = $._encodeInteger;
  }
  return _cached_encoder_for_Entity_Reference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Entity_Reference */

/* eslint-enable */
