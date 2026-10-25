/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserCSGInformation_cSGAccessMode
 * @description
 *
 * Access mode inside `UserCSGInformation`. TS 32.278 V19.0.0
 * does not describe closed subscriber group access modes.
 * Clause 6.3.2.1 defers the formal definition to TS 32.298.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation-cSGAccessMode ::= ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UserCSGInformation_cSGAccessMode {
    closedMode = 0,
    hybridMode = 1,
}

/**
 * @summary UserCSGInformation_cSGAccessMode
 * @description
 *
 * Access mode inside `UserCSGInformation`. TS 32.278 V19.0.0
 * does not describe closed subscriber group access modes.
 * Clause 6.3.2.1 defers the formal definition to TS 32.298.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation-cSGAccessMode ::= ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UserCSGInformation_cSGAccessMode = _enum_for_UserCSGInformation_cSGAccessMode;

/**
 * @summary UserCSGInformation_cSGAccessMode
 * @description
 *
 * Access mode inside `UserCSGInformation`. TS 32.278 V19.0.0
 * does not describe closed subscriber group access modes.
 * Clause 6.3.2.1 defers the formal definition to TS 32.298.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation-cSGAccessMode ::= ENUMERATED {
 *    closedMode    ( 0 ),
 *    hybridMode    ( 1 )
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UserCSGInformation_cSGAccessMode = _enum_for_UserCSGInformation_cSGAccessMode;

/**
 * @summary UserCSGInformation_cSGAccessMode_closedMode
 * @description
 *
 * TS 32.278 V19.0.0 does not describe this access mode.
 *
 * @constant
 * @type {number}
 */
export
const UserCSGInformation_cSGAccessMode_closedMode = UserCSGInformation_cSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @description
 *
 * See {@link UserCSGInformation_cSGAccessMode_closedMode}.
 *
 * @constant
 * @type {number}
 */
export
const closedMode = UserCSGInformation_cSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UserCSGInformation_cSGAccessMode_hybridMode
 * @description
 *
 * TS 32.278 V19.0.0 does not describe this access mode.
 *
 * @constant
 * @type {number}
 */
export
const UserCSGInformation_cSGAccessMode_hybridMode = UserCSGInformation_cSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @description
 *
 * See {@link UserCSGInformation_cSGAccessMode_hybridMode}.
 *
 * @constant
 * @type {number}
 */
export
const hybridMode = UserCSGInformation_cSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_UserCSGInformation_cSGAccessMode: $.ASN1Decoder<UserCSGInformation_cSGAccessMode> = $._decodeEnumerated;

export
const _encode_UserCSGInformation_cSGAccessMode: $.ASN1Encoder<UserCSGInformation_cSGAccessMode> = $._encodeEnumerated;

/* eslint-enable */
