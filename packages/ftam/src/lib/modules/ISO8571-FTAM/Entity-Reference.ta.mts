/* eslint-disable */
import {
  type INTEGER,
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


/**
 * @summary Entity_Reference
 * @description
 *
 * Observer or presumed source of a diagnostic
 * (ISO 8571-3:1988 Annex A.5 Table 42). Values 0 and 3 are
 * valid only as error-source; 5 is the virtual filestore
 * (ISO 8571-4:1988).
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
 * @description
 *
 * `no-categorization-possible`(0). Valid as error-source
 * only (ISO 8571-3:1988 Table 42; ISO 8571-4:1988).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_no_categorization_possible: 0 = 0 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_no_categorization_possible
 * @constant
 * @type {number}
 */
export const no_categorization_possible: 0 = Entity_Reference_no_categorization_possible; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_service_user
 * @description
 *
 * `initiating-file-service-user`(1) — initiating FSU
 * (ISO 8571-3:1988 Table 42).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_service_user: 1 = 1 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_service_user
 * @constant
 * @type {number}
 */
export const initiating_file_service_user: 1 = Entity_Reference_initiating_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @description
 *
 * `initiating-file-protocol-machine`(2) — initiating FPM
 * (ISO 8571-3:1988 Table 42).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_initiating_file_protocol_machine: 2 = 2 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_initiating_file_protocol_machine
 * @constant
 * @type {number}
 */
export const initiating_file_protocol_machine: 2 = Entity_Reference_initiating_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @description
 *
 * `service-supporting-the-file-protocol-machine`(3). Valid
 * as error-source only (ISO 8571-3:1988 Table 42;
 * ISO 8571-4:1988).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_service_supporting_the_file_protocol_machine: 3 = 3 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_service_supporting_the_file_protocol_machine
 * @constant
 * @type {number}
 */
export const service_supporting_the_file_protocol_machine: 3 = Entity_Reference_service_supporting_the_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @description
 *
 * `responding-file-protocol-machine`(4) — responding FPM
 * (ISO 8571-3:1988 Table 42).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_protocol_machine: 4 = 4 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_protocol_machine
 * @constant
 * @type {number}
 */
export const responding_file_protocol_machine: 4 = Entity_Reference_responding_file_protocol_machine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_service_user
 * @description
 *
 * `responding-file-service-user`(5) — responding FSU /
 * filestore. Corresponds to the virtual filestore
 * (ISO 8571-3:1988 Table 42; ISO 8571-4:1988).
 *
 * @constant
 * @type {number}
 */
export const Entity_Reference_responding_file_service_user: 5 = 5 satisfies Entity_Reference; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary Entity_Reference_responding_file_service_user
 * @constant
 * @type {number}
 */
export const responding_file_service_user: 5 = Entity_Reference_responding_file_service_user; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_Entity_Reference: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_Entity_Reference: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
