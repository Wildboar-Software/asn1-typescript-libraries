/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_ProSeTargetType {
    pRoSeRemoteUE = 1,
    pRoSeUEtoNwRelay = 2,
}

/**
 * @summary ProSeTargetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeTargetType  ::=  ENUMERATED
 * {
 *     pRoSeRemoteUE        (1),
 *     pRoSeUEtoNwRelay    (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeTargetType = _enum_for_ProSeTargetType | ENUMERATED;

/**
 * @summary ProSeTargetType_pRoSeRemoteUE
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeRemoteUE: ProSeTargetType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeRemoteUE
 * @constant
 * @type {number}
 */
export
const pRoSeRemoteUE: ProSeTargetType = ProSeTargetType_pRoSeRemoteUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeTargetType_pRoSeUEtoNwRelay
 * @constant
 * @type {number}
 */
export
const ProSeTargetType_pRoSeUEtoNwRelay: ProSeTargetType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pRoSeUEtoNwRelay
 * @constant
 * @type {number}
 */
export
const pRoSeUEtoNwRelay: ProSeTargetType = ProSeTargetType_pRoSeUEtoNwRelay; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_ProSeTargetType: $.ASN1Decoder<ProSeTargetType> = $._decodeEnumerated;

export const _encode_ProSeTargetType: $.ASN1Encoder<ProSeTargetType> = $._encodeEnumerated;

/* eslint-enable */
