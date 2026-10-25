/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeFunctionRole
 * @description
 *
 * Which PLMN the ProSe Function that produced the CDR is in: HPLMN, VPLMN, or
 * local PLMN. The HPLMN ProSe Function collects online and offline charging.
 * The VPLMN and local PLMN ProSe Functions collect offline charging. Local PLMN
 * does not apply to WLAN-based ProSe Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.2.1.1, 6.1.3.2, and 6.3.1.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.36.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProSeFunctionRole {
    hPLMN = 0,
    vPLMN = 1,
    localPLMN = 2,
}

/**
 * @summary ProSeFunctionRole
 * @description
 *
 * Which PLMN the ProSe Function that produced the CDR is in: HPLMN, VPLMN, or
 * local PLMN. The HPLMN ProSe Function collects online and offline charging.
 * The VPLMN and local PLMN ProSe Functions collect offline charging. Local PLMN
 * does not apply to WLAN-based ProSe Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.2.1.1, 6.1.3.2, and 6.3.1.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.36.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ProSeFunctionRole = _enum_for_ProSeFunctionRole;

/**
 * @summary ProSeFunctionRole
 * @description
 *
 * Which PLMN the ProSe Function that produced the CDR is in: HPLMN, VPLMN, or
 * local PLMN. The HPLMN ProSe Function collects online and offline charging.
 * The VPLMN and local PLMN ProSe Functions collect offline charging. Local PLMN
 * does not apply to WLAN-based ProSe Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1, 5.2.1.1, 6.1.3.2, and 6.3.1.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.36.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeFunctionRole  ::=  ENUMERATED {
 *    hPLMN        ( 0 ),
 *    vPLMN        ( 1 ),
 *    localPLMN    ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ProSeFunctionRole = _enum_for_ProSeFunctionRole;

/**
 * @summary ProSeFunctionRole_hPLMN
 * @description
 *
 * The ProSe Function is in the UE's HPLMN.
 *
 * 3GPP TS 32.277 V19.2.0 clause 6.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_hPLMN = ProSeFunctionRole.hPLMN satisfies ProSeFunctionRole; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hPLMN
 * @description
 *
 * HPLMN ProSe Function. See `ProSeFunctionRole_hPLMN`.
 *
 * @constant
 * @type {number}
 */
export
const hPLMN = ProSeFunctionRole.hPLMN satisfies ProSeFunctionRole; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeFunctionRole_vPLMN
 * @description
 *
 * The ProSe Function is in the visited PLMN. It collects offline charging for
 * the UE.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and annex A.1.
 *
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_vPLMN = ProSeFunctionRole.vPLMN satisfies ProSeFunctionRole; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vPLMN
 * @description
 *
 * VPLMN ProSe Function. See `ProSeFunctionRole_vPLMN`.
 *
 * @constant
 * @type {number}
 */
export
const vPLMN = ProSeFunctionRole.vPLMN satisfies ProSeFunctionRole; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProSeFunctionRole_localPLMN
 * @description
 *
 * The ProSe Function is in a local PLMN, neither the HPLMN nor the VPLMN. Used
 * for offline charging of Monitor and Match. This role does not apply to
 * WLAN-based ProSe Direct Discovery.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.1 and 5.2.1.1.
 *
 * @constant
 * @type {number}
 */
export
const ProSeFunctionRole_localPLMN = ProSeFunctionRole.localPLMN satisfies ProSeFunctionRole; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localPLMN
 * @description
 *
 * Local PLMN ProSe Function. See `ProSeFunctionRole_localPLMN`.
 *
 * @constant
 * @type {number}
 */
export
const localPLMN = ProSeFunctionRole.localPLMN satisfies ProSeFunctionRole; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ProSeFunctionRole: $.ASN1Decoder<ProSeFunctionRole> = $._decodeEnumerated;

export
const _encode_ProSeFunctionRole: $.ASN1Encoder<ProSeFunctionRole> = $._encodeEnumerated;

/* eslint-enable */
