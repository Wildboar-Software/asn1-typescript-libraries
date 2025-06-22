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
import * as $ from '@wildboar/asn1/functional';


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


/**
 * @summary Entity_Reference_no_categorization_possible
 * @constant
 * @type {number}
 */
export const Entity_Reference_no_categorization_possible: Entity_Reference = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_no_categorization_possible
 * @constant
 * @type {number}
 */
export const no_categorization_possible: Entity_Reference = Entity_Reference_no_categorization_possible; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_service_user
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_service_user: Entity_Reference = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_service_user
 * @constant
 * @type {number}
 */
export const initiating_file_service_user: Entity_Reference = Entity_Reference_initiating_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_protocol_machine: Entity_Reference = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @constant
 * @type {number}
 */
export const initiating_file_protocol_machine: Entity_Reference = Entity_Reference_initiating_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_service_supporting_the_file_protocol_machine: Entity_Reference = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @constant
 * @type {number}
 */
export const service_supporting_the_file_protocol_machine: Entity_Reference = Entity_Reference_service_supporting_the_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_protocol_machine: Entity_Reference = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @constant
 * @type {number}
 */
export const responding_file_protocol_machine: Entity_Reference = Entity_Reference_responding_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_service_user
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_service_user: Entity_Reference = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_service_user
 * @constant
 * @type {number}
 */
export const responding_file_service_user: Entity_Reference = Entity_Reference_responding_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Entity_Reference = $._decodeInteger;




export const _encode_Entity_Reference = $._encodeInteger;


/* eslint-enable */
