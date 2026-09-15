/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceProblem
 * @description
 *
 * Operational failure. ISO/IEC 10166-1:1991 §8.3.10, §8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *     server-busy                 (1), -- please wait and repeat
 *     server-unavailable          (2), -- please unbind
 *     operation-too-complex       (3), -- e.g. search-criteria
 *     resource-limit-exceeded     (4), -- e-g. Lohen creating a bulky object
 *     maximum-length-exceeded     (5), -- in an abstract operation
 *     cannot-continue             (6), -- e-g. search-domain altered
 *     unclassified-server-error   (7), -- implementation specific
 *     function-set-violation      (8)  -- see 8.4
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ServiceProblem {
    server_busy = 1,
    server_unavailable = 2,
    operation_too_complex = 3,
    resource_limit_exceeded = 4,
    maximum_length_exceeded = 5,
    cannot_continue = 6,
    unclassified_server_error = 7,
    function_set_violation = 8,
}

/**
 * @summary ServiceProblem
 * @description
 *
 * Operational failure. ISO/IEC 10166-1:1991 §8.3.10, §8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *     server-busy                 (1), -- please wait and repeat
 *     server-unavailable          (2), -- please unbind
 *     operation-too-complex       (3), -- e.g. search-criteria
 *     resource-limit-exceeded     (4), -- e-g. Lohen creating a bulky object
 *     maximum-length-exceeded     (5), -- in an abstract operation
 *     cannot-continue             (6), -- e-g. search-domain altered
 *     unclassified-server-error   (7), -- implementation specific
 *     function-set-violation      (8)  -- see 8.4
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ServiceProblem = _enum_for_ServiceProblem;

/**
 * @summary ServiceProblem
 * @description
 *
 * Operational failure. ISO/IEC 10166-1:1991 §8.3.10, §8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceProblem  ::=  ENUMERATED {
 *     server-busy                 (1), -- please wait and repeat
 *     server-unavailable          (2), -- please unbind
 *     operation-too-complex       (3), -- e.g. search-criteria
 *     resource-limit-exceeded     (4), -- e-g. Lohen creating a bulky object
 *     maximum-length-exceeded     (5), -- in an abstract operation
 *     cannot-continue             (6), -- e-g. search-domain altered
 *     unclassified-server-error   (7), -- implementation specific
 *     function-set-violation      (8)  -- see 8.4
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ServiceProblem = _enum_for_ServiceProblem;

/**
 * @summary ServiceProblem_server_busy
 * @description
 *
 * Too busy; retry shortly.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_server_busy: ServiceProblem = ServiceProblem.server_busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server_busy
 * @description
 *
 * Too busy; retry shortly.
 * @constant
 * @type {number}
 */
export
const server_busy: ServiceProblem = ServiceProblem.server_busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_server_unavailable
 * @description
 *
 * Currently unavailable; unbind.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_server_unavailable: ServiceProblem = ServiceProblem.server_unavailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary server_unavailable
 * @description
 *
 * Currently unavailable; unbind.
 * @constant
 * @type {number}
 */
export
const server_unavailable: ServiceProblem = ServiceProblem.server_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_operation_too_complex
 * @description
 *
 * Too complex (e.g. search-criteria nesting).
 * @constant
 * @type {number}
 */
export
const ServiceProblem_operation_too_complex: ServiceProblem = ServiceProblem.operation_too_complex; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operation_too_complex
 * @description
 *
 * Too complex (e.g. search-criteria nesting).
 * @constant
 * @type {number}
 */
export
const operation_too_complex: ServiceProblem = ServiceProblem.operation_too_complex; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_resource_limit_exceeded
 * @description
 *
 * Store-wide or per-user resource limit.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_resource_limit_exceeded: ServiceProblem = ServiceProblem.resource_limit_exceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resource_limit_exceeded
 * @description
 *
 * Store-wide or per-user resource limit.
 * @constant
 * @type {number}
 */
export
const resource_limit_exceeded: ServiceProblem = ServiceProblem.resource_limit_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_maximum_length_exceeded
 * @description
 *
 * Argument or result exceeds bind maximum-length.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_maximum_length_exceeded: ServiceProblem = ServiceProblem.maximum_length_exceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum_length_exceeded
 * @description
 *
 * Argument or result exceeds bind maximum-length.
 * @constant
 * @type {number}
 */
export
const maximum_length_exceeded: ServiceProblem = ServiceProblem.maximum_length_exceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_cannot_continue
 * @description
 *
 * Store changed; List/Search cannot resume.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_cannot_continue: ServiceProblem = ServiceProblem.cannot_continue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_continue
 * @description
 *
 * Store changed; List/Search cannot resume.
 * @constant
 * @type {number}
 */
export
const cannot_continue: ServiceProblem = ServiceProblem.cannot_continue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_unclassified_server_error
 * @description
 *
 * Implementation-specific; not otherwise classified.
 * @constant
 * @type {number}
 */
export
const ServiceProblem_unclassified_server_error: ServiceProblem = ServiceProblem.unclassified_server_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unclassified_server_error
 * @description
 *
 * Implementation-specific; not otherwise classified.
 * @constant
 * @type {number}
 */
export
const unclassified_server_error: ServiceProblem = ServiceProblem.unclassified_server_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ServiceProblem_function_set_violation
 * @description
 *
 * Operation not allowed in this store's function-set (§8.4).
 * @constant
 * @type {number}
 */
export
const ServiceProblem_function_set_violation: ServiceProblem = ServiceProblem.function_set_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary function_set_violation
 * @description
 *
 * Operation not allowed in this store's function-set (§8.4).
 * @constant
 * @type {number}
 */
export
const function_set_violation: ServiceProblem = ServiceProblem.function_set_violation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ServiceProblem = $._decodeEnumerated;
export const _encode_ServiceProblem = $._encodeEnumerated;


/* eslint-enable */
