/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableProfileResponse_enableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileResponse-enableResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnableProfileResponse_enableResult = INTEGER;

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_ok: EnableProfileResponse_enableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_iccidOrAidNotFound: EnableProfileResponse_enableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_profileNotInDisabledState: EnableProfileResponse_enableResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_disallowedByPolicy: EnableProfileResponse_enableResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_wrongProfileReenabling: EnableProfileResponse_enableResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_wrongProfileReenabling
 * @constant
 * @type {number}
 */
export
const wrongProfileReenabling: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_wrongProfileReenabling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_catBusy: EnableProfileResponse_enableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const EnableProfileResponse_enableResult_undefinedError: EnableProfileResponse_enableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnableProfileResponse_enableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: EnableProfileResponse_enableResult = EnableProfileResponse_enableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EnableProfileResponse_enableResult = $._decodeInteger;
export const _encode_EnableProfileResponse_enableResult = $._encodeInteger;


/* eslint-enable */
