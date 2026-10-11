/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileState
 * @description
 * 
 * Whether the Profile is disabled or enabled. Enabling one Profile disables the
 * Profile that was enabled on the target port. While a state change still needs
 * a REFRESH, GetProfilesInfo that asks for this field is rejected. SGP.22 v3.1
 * §5.7.15 and §5.7.16.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileState  ::=  INTEGER {disabled(0), enabled(1)}
 * ```
 */
export
type ProfileState = INTEGER;

/**
 * @summary ProfileState_disabled
 * @description
 * 
 * The Profile cannot be selected by the Device. Remote management of its
 * components over ES6 is not possible. SGP.22 v3.1 §2.4.5.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileState_disabled: ProfileState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_disabled
 * @description
 * 
 * The Profile cannot be selected by the Device. Remote management of its
 * components over ES6 is not possible. SGP.22 v3.1 §2.4.5.
 * 
 * @constant
 * @type {number}
 */
export
const disabled: ProfileState = ProfileState_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @description
 * 
 * The Profile behaves as a UICC toward the Device. Enabling it disables the
 * Profile that was enabled on that port. SGP.22 v3.1 §2.4.5 and §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileState_enabled: ProfileState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileState_enabled
 * @description
 * 
 * The Profile behaves as a UICC toward the Device. Enabling it disables the
 * Profile that was enabled on that port. SGP.22 v3.1 §2.4.5 and §5.7.16.
 * 
 * @constant
 * @type {number}
 */
export
const enabled: ProfileState = ProfileState_enabled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileState = $._decodeInteger;
export const _encode_ProfileState = $._encodeInteger;


/* eslint-enable */
