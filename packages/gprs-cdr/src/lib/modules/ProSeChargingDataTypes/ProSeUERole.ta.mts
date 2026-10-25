/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeUERole
 * @description
 *
 * Role of the UE in the ProSe service this CDR records. Direct Discovery uses
 * Announcing UE, Monitoring UE, Discoverer UE, and Discoveree UE. EPC-level
 * Discovery uses the requestor UE and the requested UE.
 *
 * The ASN.1 spelling `annoucingUE` omits an `n`. It is the Announcing UE.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 6.1.3.2, 6.1.3.3, and 6.3.1.2.
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
 * Role of the UE in the ProSe service this CDR records. Direct Discovery uses
 * Announcing UE, Monitoring UE, Discoverer UE, and Discoveree UE. EPC-level
 * Discovery uses the requestor UE and the requested UE.
 *
 * The ASN.1 spelling `annoucingUE` omits an `n`. It is the Announcing UE.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 6.1.3.2, 6.1.3.3, and 6.3.1.2.
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
 * Role of the UE in the ProSe service this CDR records. Direct Discovery uses
 * Announcing UE, Monitoring UE, Discoverer UE, and Discoveree UE. EPC-level
 * Discovery uses the requestor UE and the requested UE.
 *
 * The ASN.1 spelling `annoucingUE` omits an `n`. It is the Announcing UE.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1, 6.1.3.2, 6.1.3.3, and 6.3.1.2.
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
 * @description
 *
 * Announcing UE in Direct Discovery Model A, open or restricted. The ASN.1 name
 * is spelled `annoucingUE`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_annoucingUE = ProSeUERole.annoucingUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary annoucingUE
 * @description
 *
 * Announcing UE. See `ProSeUERole_annoucingUE`.
 *
 * @constant
 * @type {number}
 */
export
const annoucingUE = ProSeUERole.annoucingUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_monitoringUE
 * @description
 *
 * Monitoring UE in Direct Discovery Model A, open or restricted.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.1 and 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_monitoringUE = ProSeUERole.monitoringUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitoringUE
 * @description
 *
 * Monitoring UE. See `ProSeUERole_monitoringUE`.
 *
 * @constant
 * @type {number}
 */
export
const monitoringUE = ProSeUERole.monitoringUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_requestorUE
 * @description
 *
 * UE that initiates an EPC-level ProSe discovery proximity request.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_requestorUE = ProSeUERole.requestorUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestorUE
 * @description
 *
 * Requestor UE. See `ProSeUERole_requestorUE`.
 *
 * @constant
 * @type {number}
 */
export
const requestorUE = ProSeUERole.requestorUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_requestedUE
 * @description
 *
 * UE targeted by an EPC-level proximity request.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.3.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_requestedUE = ProSeUERole.requestedUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedUE
 * @description
 *
 * Requested UE. See `ProSeUERole_requestedUE`.
 *
 * @constant
 * @type {number}
 */
export
const requestedUE = ProSeUERole.requestedUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_discovererUE
 * @description
 *
 * Discoverer UE in Model B restricted Direct Discovery. It sends the discovery
 * query and the match report.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.2 and 5.2.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_discovererUE = ProSeUERole.discovererUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discovererUE
 * @description
 *
 * Discoverer UE. See `ProSeUERole_discovererUE`.
 *
 * @constant
 * @type {number}
 */
export
const discovererUE = ProSeUERole.discovererUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeUERole_discovereeUE
 * @description
 *
 * Discoveree UE in Model B restricted Direct Discovery. It sends the discovery
 * response.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.1.2 and 5.2.2.1.5.
 *
 * @constant
 * @type {number}
 */
export
const ProSeUERole_discovereeUE = ProSeUERole.discovereeUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary discovereeUE
 * @description
 *
 * Discoveree UE. See `ProSeUERole_discovereeUE`.
 *
 * @constant
 * @type {number}
 */
export
const discovereeUE = ProSeUERole.discovereeUE; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeUERole: $.ASN1Decoder<ProSeUERole> = $._decodeEnumerated;

export
const _encode_ProSeUERole: $.ASN1Encoder<ProSeUERole> = $._encodeEnumerated;

/* eslint-enable */
