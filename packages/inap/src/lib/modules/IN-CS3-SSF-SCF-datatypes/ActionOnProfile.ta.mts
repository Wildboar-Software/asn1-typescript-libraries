/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ActionOnProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionOnProfile  ::=  ENUMERATED {activate(0), deactivate(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ActionOnProfile {
    activate = 0,
    deactivate = 1,
}

/**
 * @summary ActionOnProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionOnProfile  ::=  ENUMERATED {activate(0), deactivate(1)}
 * ```
 * 
 * @enum {number}
 */
export
type ActionOnProfile = _enum_for_ActionOnProfile;

/**
 * @summary ActionOnProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionOnProfile  ::=  ENUMERATED {activate(0), deactivate(1)}
 * ```
 * 
 * @enum {number}
 */
export
const ActionOnProfile = _enum_for_ActionOnProfile;

/**
 * @summary ActionOnProfile_activate
 * @constant
 * @type {number}
 */
export
const ActionOnProfile_activate: ActionOnProfile = ActionOnProfile.activate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activate
 * @constant
 * @type {number}
 */
export
const activate: ActionOnProfile = ActionOnProfile.activate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ActionOnProfile_deactivate
 * @constant
 * @type {number}
 */
export
const ActionOnProfile_deactivate: ActionOnProfile = ActionOnProfile.deactivate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deactivate
 * @constant
 * @type {number}
 */
export
const deactivate: ActionOnProfile = ActionOnProfile.deactivate; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ActionOnProfile: $.ASN1Decoder<ActionOnProfile> = $._decodeEnumerated;

export
const _encode_ActionOnProfile: $.ASN1Encoder<ActionOnProfile> = $._encodeEnumerated;

/* eslint-enable */
