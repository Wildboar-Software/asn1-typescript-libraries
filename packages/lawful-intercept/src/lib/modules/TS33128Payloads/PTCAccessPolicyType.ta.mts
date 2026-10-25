/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCAccessPolicyType
 * @description
 * 
 * Identifies the type of access policy list being managed or queried by the
 * target when known: a) PTCUserAccessPolicyAttempt b)
 * GroupAuthorizationRulesAttempt c) PTCUserAccessPolicyQuery d)
 * GroupAuthorizationRulesQuery e) PTCUserAccessPolicyResult f)
 * GroupAuthorizationRulesResult g) Request unsuccessful - Report a), b), c), or
 * d) when the PTC target attempts a change or queries the Access Control
 * list(s). - Report e), f), or g) when the network notifies the target of
 * changes to the access control list(s) or the request was unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCAccessPolicyType {
    pTCUserAccessPolicyAttempt = 1,
    groupAuthorizationRulesAttempt = 2,
    pTCUserAccessPolicyQuery = 3,
    groupAuthorizationRulesQuery = 4,
    pTCUserAccessPolicyResult = 5,
    groupAuthorizationRulesResult = 6,
    requestUnsuccessful = 7,
}

/**
 * @summary PTCAccessPolicyType
 * @description
 * 
 * Identifies the type of access policy list being managed or queried by the
 * target when known: a) PTCUserAccessPolicyAttempt b)
 * GroupAuthorizationRulesAttempt c) PTCUserAccessPolicyQuery d)
 * GroupAuthorizationRulesQuery e) PTCUserAccessPolicyResult f)
 * GroupAuthorizationRulesResult g) Request unsuccessful - Report a), b), c), or
 * d) when the PTC target attempts a change or queries the Access Control
 * list(s). - Report e), f), or g) when the network notifies the target of
 * changes to the access control list(s) or the request was unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCAccessPolicyType = _enum_for_PTCAccessPolicyType;

/**
 * @summary PTCAccessPolicyType
 * @description
 * 
 * Identifies the type of access policy list being managed or queried by the
 * target when known: a) PTCUserAccessPolicyAttempt b)
 * GroupAuthorizationRulesAttempt c) PTCUserAccessPolicyQuery d)
 * GroupAuthorizationRulesQuery e) PTCUserAccessPolicyResult f)
 * GroupAuthorizationRulesResult g) Request unsuccessful - Report a), b), c), or
 * d) when the PTC target attempts a change or queries the Access Control
 * list(s). - Report e), f), or g) when the network notifies the target of
 * changes to the access control list(s) or the request was unsuccessful.
 *
 * 3GPP TS 33.128, clause 7.5.2.18.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCAccessPolicyType   ::=  ENUMERATED
 * {
 *     pTCUserAccessPolicyAttempt(1),
 *     groupAuthorizationRulesAttempt(2),
 *     pTCUserAccessPolicyQuery(3),
 *     groupAuthorizationRulesQuery(4),
 *     pTCUserAccessPolicyResult(5),
 *     groupAuthorizationRulesResult(6),
 *     requestUnsuccessful(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCAccessPolicyType = _enum_for_PTCAccessPolicyType;

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyAttempt
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyAttempt = PTCAccessPolicyType.pTCUserAccessPolicyAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyAttempt
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyAttempt = PTCAccessPolicyType.pTCUserAccessPolicyAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesAttempt
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesAttempt = PTCAccessPolicyType.groupAuthorizationRulesAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesAttempt
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesAttempt = PTCAccessPolicyType.groupAuthorizationRulesAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyQuery
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyQuery = PTCAccessPolicyType.pTCUserAccessPolicyQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyQuery
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyQuery = PTCAccessPolicyType.pTCUserAccessPolicyQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesQuery
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesQuery = PTCAccessPolicyType.groupAuthorizationRulesQuery; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesQuery
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesQuery = PTCAccessPolicyType.groupAuthorizationRulesQuery; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_pTCUserAccessPolicyResult
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_pTCUserAccessPolicyResult = PTCAccessPolicyType.pTCUserAccessPolicyResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTCUserAccessPolicyResult
 * @constant
 * @type {number}
 */
export
const pTCUserAccessPolicyResult = PTCAccessPolicyType.pTCUserAccessPolicyResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_groupAuthorizationRulesResult
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_groupAuthorizationRulesResult = PTCAccessPolicyType.groupAuthorizationRulesResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupAuthorizationRulesResult
 * @constant
 * @type {number}
 */
export
const groupAuthorizationRulesResult = PTCAccessPolicyType.groupAuthorizationRulesResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCAccessPolicyType_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCAccessPolicyType_requestUnsuccessful = PTCAccessPolicyType.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful = PTCAccessPolicyType.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCAccessPolicyType: $.ASN1Decoder<PTCAccessPolicyType> = $._decodeEnumerated;
export const _encode_PTCAccessPolicyType: $.ASN1Encoder<PTCAccessPolicyType> = $._encodeEnumerated;


/* eslint-enable */
