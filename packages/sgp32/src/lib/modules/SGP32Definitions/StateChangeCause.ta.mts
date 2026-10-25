/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StateChangeCause
 * @description
 * 
 * Cause of the eUICC state change that the IPA reports with notifyStateChange
 * on ESipa.GetEimPackage. Mandatory when notifyStateChange is present. The eIM
 * should refresh its view of the eUICC, such as the Profile list and Profile
 * states. SGP.32 v1.2, sections 5.14.5 and 6.3.2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateChangeCause  ::=  INTEGER { 
 *     otherEim(0), -- for change(s) requested by another registered eIM 
 *     fallback(1), -- for change(s) following fallback requested by IPA 
 *     emergencyProfile(2), -- for change(s) following Emergency Profile swap requested by IPA
 *     local(3), -- for change(s) applied locally (RFU, not supported in this version) 
 *     reset(4), -- for change(s) following an euicc reset
 *     immediateEnableProfile(5), -- for change(s) following immediate Profile enabling requested by IPA  
 *     deviceChange(6), -- for change(s) detected by IPAe following a IoT Device change (removable eSIMs)
 *     undefined(127)  -- unknown cause  
 * }
 * ```
 */
export
type StateChangeCause = INTEGER;

/**
 * @summary StateChangeCause_otherEim
 * @description
 * State change requested by another registered eIM. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_otherEim = 0 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_otherEim
 * @description
 * Change requested by another registered eIM. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const otherEim = StateChangeCause_otherEim satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_fallback
 * @description
 * State change following fallback requested by the IPA. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_fallback = 1 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_fallback
 * @description
 * Change following fallback requested by the IPA. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const fallback = StateChangeCause_fallback satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_emergencyProfile
 * @description
 * State change following an Emergency Profile swap requested by the IPA.
 * SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_emergencyProfile = 2 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_emergencyProfile
 * @description
 * Change following an Emergency Profile swap requested by the IPA. SGP.32
 * v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const emergencyProfile = StateChangeCause_emergencyProfile satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_local
 * @description
 * State change applied locally. Reserved, and unsupported in this version of
 * SGP.32. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_local = 3 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_local
 * @description
 * Local change. Reserved and unsupported in this version. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const local = StateChangeCause_local satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_reset
 * @description
 * State change following an eUICC reset. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_reset = 4 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_reset
 * @description
 * Change following an eUICC reset. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const reset = StateChangeCause_reset satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_immediateEnableProfile
 * @description
 * State change following immediate Profile enabling requested by the IPA.
 * SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_immediateEnableProfile = 5 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_immediateEnableProfile
 * @description
 * Change following immediate Profile enabling requested by the IPA. SGP.32
 * v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const immediateEnableProfile = StateChangeCause_immediateEnableProfile satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_deviceChange
 * @description
 * State change detected by an IPAe after the IoT Device changed, for a
 * removable eSIM. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_deviceChange = 6 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_deviceChange
 * @description
 * IPAe detected a change after the IoT Device changed. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const deviceChange = StateChangeCause_deviceChange satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_undefined
 * @description
 * The cause of the notified state change is unknown. SGP.32 v1.2, section
 * 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const StateChangeCause_undefined = 127 satisfies StateChangeCause; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateChangeCause_undefined
 * @description
 * Unknown cause of the notified state change. SGP.32 v1.2, section 6.3.2.6.
 * @constant
 * @type {number}
 */
export
const undefined = StateChangeCause_undefined satisfies StateChangeCause; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_StateChangeCause: $.ASN1Decoder<StateChangeCause> = $._decodeInteger;
export const _encode_StateChangeCause: $.ASN1Encoder<StateChangeCause> = $._encodeInteger;


/* eslint-enable */
