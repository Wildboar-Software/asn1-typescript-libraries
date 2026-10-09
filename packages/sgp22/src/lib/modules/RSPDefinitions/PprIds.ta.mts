/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PprIds
 * @description
 * 
 * Profile Policy Rules of one Profile, and also the PPR identifier inside a
 * Profile Policy Authorisation Rule. PPR1 forbids disabling the Profile. PPR2
 * forbids deleting it. `pprUpdateControl` has no meaning in ES8+.StoreMetadata;
 * on ES6.UpdateMetadata it must be zero, and the stored PPR bits are ANDed with
 * the bits in the request, so this version of the specification only unsets
 * rules. A Test Profile should not carry PPRs. Rules may be set only on a
 * Profile that contains EFIMSI. SGP.22 v3.1 §2.9.1, §4.4.2, and §5.4.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PprIds  ::=  BIT STRING {-- Definition of Profile Policy Rules identifiers
 *     pprUpdateControl(0), -- defines how to update PPRs via ES6
 *     ppr1(1), -- Indicator for PPR1 'Disabling of this Profile is not allowed'
 *     ppr2(2) -- Indicator for PPR2 'Deletion of this Profile is not allowed'
 * }
 * ```
 */
export
type PprIds = BIT_STRING;

/**
 * @summary PprIds_pprUpdateControl
 * @description
 * 
 * Controls ES6 updates of PPRs. Must be 0 in UpdateMetadata; the stored bits
 * are then ANDed with the request, which only clears rules. Has no meaning in
 * StoreMetadata. SGP.22 v3.1 §4.4.2 and §5.4.1.
 * 
 * @constant
 */
export
const PprIds_pprUpdateControl: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pprUpdateControl
 * @description
 * 
 * Controls ES6 updates of PPRs. Must be 0 in UpdateMetadata; the stored bits
 * are then ANDed with the request, which only clears rules. Has no meaning in
 * StoreMetadata. SGP.22 v3.1 §4.4.2 and §5.4.1.
 * 
 * @constant
 */
export
const pprUpdateControl: number = PprIds_pprUpdateControl; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr1
 * @description
 * 
 * PPR1: disabling this Profile is not allowed. Not enforced against a Test
 * Profile, and a Provisioning Profile may still be enabled. An MEP-capable
 * eUICC has no RAT rule for PPR1. SGP.22 v3.1 §2.9.1 and §2.4.5.
 * 
 * @constant
 */
export
const PprIds_ppr1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ppr1
 * @description
 * 
 * PPR1: disabling this Profile is not allowed. Not enforced against a Test
 * Profile, and a Provisioning Profile may still be enabled. An MEP-capable
 * eUICC has no RAT rule for PPR1. SGP.22 v3.1 §2.9.1 and §2.4.5.
 * 
 * @constant
 */
export
const ppr1: number = PprIds_ppr1; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr2
 * @description
 * 
 * PPR2: deletion of this Profile is not allowed. SGP.22 v3.1 §2.9.1.
 * 
 * @constant
 */
export
const PprIds_ppr2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ppr2
 * @description
 * 
 * PPR2: deletion of this Profile is not allowed. SGP.22 v3.1 §2.9.1.
 * 
 * @constant
 */
export
const ppr2: number = PprIds_ppr2; /* SHORT_NAMED_BIT */
export const _decode_PprIds = $._decodeBitString;
export const _encode_PprIds = $._encodeBitString;


/* eslint-enable */
