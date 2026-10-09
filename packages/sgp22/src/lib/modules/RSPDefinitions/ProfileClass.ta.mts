/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProfileClass
 * @description
 * 
 * Which rules apply to the Profile. `operational` is the default in
 * StoreMetadata. `provisioning` profiles are not shown in the LUI and cannot be
 * deleted by the End User, including by eUICC Memory Reset; they can still be
 * enabled while PPR1 is set. `test` profiles use a restricted
 * network-authentication key (§2.4.5.3) and do not generate notifications.
 * SGP.22 v3.1 §2.4.5 and §4.4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileClass  ::=  INTEGER {test(0), provisioning(1), operational(2)}
 * ```
 */
export
type ProfileClass = INTEGER;

/**
 * @summary ProfileClass_test
 * @description
 * 
 * Test Profile. Network-authentication keys must meet §2.4.5.3. Should not
 * carry PPRs. Does not generate notifications. SGP.22 v3.1 §2.4.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileClass_test: ProfileClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_test
 * @description
 * 
 * Test Profile. Network-authentication keys must meet §2.4.5.3. Should not
 * carry PPRs. Does not generate notifications. SGP.22 v3.1 §2.4.5.3.
 * 
 * @constant
 * @type {number}
 */
export
const test: ProfileClass = ProfileClass_test; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @description
 * 
 * Provisioning Profile. Hidden from the End User, not selectable or deletable
 * by the user, including by memory reset. Can be enabled even when PPR1 is set
 * on the current operational Profile. SGP.22 v3.1 §2.4.5.2.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileClass_provisioning: ProfileClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_provisioning
 * @description
 * 
 * Provisioning Profile. Hidden from the End User, not selectable or deletable
 * by the user, including by memory reset. Can be enabled even when PPR1 is set
 * on the current operational Profile. SGP.22 v3.1 §2.4.5.2.
 * 
 * @constant
 * @type {number}
 */
export
const provisioning: ProfileClass = ProfileClass_provisioning; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @description
 * 
 * Operational Profile. Default class in StoreMetadata. SGP.22 v3.1 §2.4.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const ProfileClass_operational: ProfileClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProfileClass_operational
 * @description
 * 
 * Operational Profile. Default class in StoreMetadata. SGP.22 v3.1 §2.4.5.1.
 * 
 * @constant
 * @type {number}
 */
export
const operational: ProfileClass = ProfileClass_operational; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProfileClass = $._decodeInteger;
export const _encode_ProfileClass = $._encodeInteger;


/* eslint-enable */
