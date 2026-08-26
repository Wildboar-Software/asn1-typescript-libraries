/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary PKIPublicationInfo_action
 * @description
 *
 * Unnested `action` INTEGER from `PKIPublicationInfo`
 * ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIPublicationInfo-action ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PKIPublicationInfo_action = INTEGER;


/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @description
 *
 * `dontPublish`(0): requester wishes the CA/RA not to publish;
 * `pubInfos` MUST be omitted ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_dontPublish: PKIPublicationInfo_action = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_dontPublish
 * @description
 *
 * `dontPublish`(0): requester wishes the CA/RA not to publish;
 * `pubInfos` MUST be omitted ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const dontPublish: PKIPublicationInfo_action = PKIPublicationInfo_action_dontPublish; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @description
 *
 * `pleasePublish`(1): requester wishes the CA/RA to publish the
 * certificate ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIPublicationInfo_action_pleasePublish: PKIPublicationInfo_action = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIPublicationInfo_action_pleasePublish
 * @description
 *
 * `pleasePublish`(1): requester wishes the CA/RA to publish the
 * certificate ([RFC 4211 §6.3](https://datatracker.ietf.org/doc/html/rfc4211#section-6.3)).
 *
 * @constant
 * @type {number}
 */
export const pleasePublish: PKIPublicationInfo_action = PKIPublicationInfo_action_pleasePublish; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PKIPublicationInfo_action = $._decodeInteger;




export const _encode_PKIPublicationInfo_action = $._encodeInteger;


/* eslint-enable */
