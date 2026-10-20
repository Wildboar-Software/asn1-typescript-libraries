/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeUERole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeUERole  ::=  ENUMERATED {
 *    annoucingUE     ( 0 ),
 *    monitoringUE    ( 1 ),
 *    requestorUE     ( 2 ),
 *    requestedUE     ( 3 ),
 *    discovererUE    ( 4 ),
 *    discovereeUE    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeUERole {
    annoucingUE = 0,
    monitoringUE = 1,
    requestorUE = 2,
    requestedUE = 3,
    discovererUE = 4,
    discovereeUE = 5,
}

/**
 * @summary ProSeUERole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeUERole  ::=  ENUMERATED {
 *    annoucingUE     ( 0 ),
 *    monitoringUE    ( 1 ),
 *    requestorUE     ( 2 ),
 *    requestedUE     ( 3 ),
 *    discovererUE    ( 4 ),
 *    discovereeUE    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeUERole = _enum_for_ProSeUERole;

/**
 * @summary ProSeUERole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeUERole  ::=  ENUMERATED {
 *    annoucingUE     ( 0 ),
 *    monitoringUE    ( 1 ),
 *    requestorUE     ( 2 ),
 *    requestedUE     ( 3 ),
 *    discovererUE    ( 4 ),
 *    discovereeUE    ( 5 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeUERole = _enum_for_ProSeUERole;

/**
 * @summary ProSeUERole_annoucingUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_annoucingUE: ProSeUERole = ProSeUERole.annoucingUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary annoucingUE
 * @constant
 * @type {number}
 */
export
const annoucingUE: ProSeUERole = ProSeUERole.annoucingUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_monitoringUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_monitoringUE: ProSeUERole = ProSeUERole.monitoringUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringUE
 * @constant
 * @type {number}
 */
export
const monitoringUE: ProSeUERole = ProSeUERole.monitoringUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_requestorUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_requestorUE: ProSeUERole = ProSeUERole.requestorUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorUE
 * @constant
 * @type {number}
 */
export
const requestorUE: ProSeUERole = ProSeUERole.requestorUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_requestedUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_requestedUE: ProSeUERole = ProSeUERole.requestedUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedUE
 * @constant
 * @type {number}
 */
export
const requestedUE: ProSeUERole = ProSeUERole.requestedUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_discovererUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_discovererUE: ProSeUERole = ProSeUERole.discovererUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discovererUE
 * @constant
 * @type {number}
 */
export
const discovererUE: ProSeUERole = ProSeUERole.discovererUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_discovereeUE
 * @constant
 * @type {number}
 */
export
const ProSeUERole_discovereeUE: ProSeUERole = ProSeUERole.discovereeUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discovereeUE
 * @constant
 * @type {number}
 */
export
const discovereeUE: ProSeUERole = ProSeUERole.discovereeUE; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeUERole: $.ASN1Decoder<ProSeUERole> = $._decodeEnumerated;

export
const _encode_ProSeUERole: $.ASN1Encoder<ProSeUERole> = $._encodeEnumerated;

/* eslint-enable */
