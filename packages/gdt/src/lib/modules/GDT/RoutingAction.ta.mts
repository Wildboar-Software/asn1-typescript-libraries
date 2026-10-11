/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingAction  ::=  INTEGER {
 *     roua-route-set      (0),
 *     roua-route-get      (1),
 *     roua-route-result   (2)
 * }
 * ```
 */
export
type RoutingAction = INTEGER;

/**
 * @summary RoutingAction_roua_route_set
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_set: RoutingAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_set
 * @constant
 * @type {number}
 */
export
const roua_route_set: RoutingAction = RoutingAction_roua_route_set; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_get
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_get: RoutingAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_get
 * @constant
 * @type {number}
 */
export
const roua_route_get: RoutingAction = RoutingAction_roua_route_get; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_result
 * @constant
 * @type {number}
 */
export
const RoutingAction_roua_route_result: RoutingAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoutingAction_roua_route_result
 * @constant
 * @type {number}
 */
export
const roua_route_result: RoutingAction = RoutingAction_roua_route_result; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RoutingAction = $._decodeInteger;
export const _encode_RoutingAction = $._encodeInteger;


/* eslint-enable */
