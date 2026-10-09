/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RspCapability
 * @description
 * 
 * RSP features the eUICC implements. SGP.22 v3.1 Annex H names this type
 * `EuiccRspCapability`. Bits 0-5 and 19 match that bitmap (bit 1 is called
 * `loadCrlSupport` in v3.1 and is supported only before v3). v3.1 assigns bits
 * 6-18 and 20-24, which this module reserves. This module also names bits
 * 26-28, which v3.1 does not. A v3 eUICC reports the same bitmap in
 * `EUICCInfo1` and `EUICCInfo2`. §4.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RspCapability  ::=  BIT STRING {
 *     additionalProfile(0), -- at least one more Profile can be installed
 *     crlSupport(1), -- CRL
 *     rpmSupport(2), -- Remote Profile Management
 *     testProfileSupport (3), -- support for test profile
 *     deviceInfoExtensibilitySupport (4),  -- support for ASN.1 extensibility in the Device Info
 *     serviceSpecificDataSupport (5),  -- support for Service Specific Data in the Profile Metadata
 *     -- bits 6 to 18 are reserved values
 *     osUpdateSupport (19), -- support for eUICC OS Update
 *     -- bits 20 to (25) are reserved values
 *     iotSpecificMetadataSupport (26), -- support for iotSpecificMetadata and iotSpecificProfileInfo defined in SGP.32 [97]
 *     mslCheckSupport (27), -- support for eUICC Minimum Security Level Check
 *     rspServerTestProfileAllowlistCheckSupport (28) -- support for RSP Server Test Profile Allow-list Check
 * }
 * ```
 */
export
type RspCapability = BIT_STRING;

/**
 * @summary RspCapability_additionalProfile
 * @description
 * 
 * At least one more Profile can be installed. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const RspCapability_additionalProfile: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary additionalProfile
 * @description
 * 
 * At least one more Profile can be installed. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const additionalProfile: number = RspCapability_additionalProfile; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_crlSupport
 * @description
 * 
 * Bit 1. v3.1 names it `loadCrlSupport` and says it indicates the pre-v3
 * ES10b.LoadCRL function, which v3 no longer supports. A v3 eUICC sets this bit
 * to 0. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const RspCapability_crlSupport: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary crlSupport
 * @description
 * 
 * Bit 1. v3.1 names it `loadCrlSupport` and says it indicates the pre-v3
 * ES10b.LoadCRL function, which v3 no longer supports. A v3 eUICC sets this bit
 * to 0. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const crlSupport: number = RspCapability_crlSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_rpmSupport
 * @description
 * 
 * eUICC supports Remote Profile Management. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const RspCapability_rpmSupport: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary rpmSupport
 * @description
 * 
 * eUICC supports Remote Profile Management. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const rpmSupport: number = RspCapability_rpmSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_testProfileSupport
 * @description
 * 
 * eUICC supports Test Profiles. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const RspCapability_testProfileSupport: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary testProfileSupport
 * @description
 * 
 * eUICC supports Test Profiles. SGP.22 v3.1 §4.3.
 * 
 * @constant
 */
export
const testProfileSupport: number = RspCapability_testProfileSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_deviceInfoExtensibilitySupport
 * @description
 * 
 * eUICC accepts the extensible DeviceInfo fields (NR, LPA SVN, CAT classes,
 * form factor, and the later additions). SGP.22 v3.1 §4.2 and §4.3.
 * 
 * @constant
 */
export
const RspCapability_deviceInfoExtensibilitySupport: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deviceInfoExtensibilitySupport
 * @description
 * 
 * eUICC accepts the extensible DeviceInfo fields (NR, LPA SVN, CAT classes,
 * form factor, and the later additions). SGP.22 v3.1 §4.2 and §4.3.
 * 
 * @constant
 */
export
const deviceInfoExtensibilitySupport: number = RspCapability_deviceInfoExtensibilitySupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_serviceSpecificDataSupport
 * @description
 * 
 * eUICC accepts service-specific data in Profile Metadata. The SM-DP+ must not
 * send that data otherwise. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const RspCapability_serviceSpecificDataSupport: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary serviceSpecificDataSupport
 * @description
 * 
 * eUICC accepts service-specific data in Profile Metadata. The SM-DP+ must not
 * send that data otherwise. SGP.22 v3.1 §5.5.3.
 * 
 * @constant
 */
export
const serviceSpecificDataSupport: number = RspCapability_serviceSpecificDataSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_osUpdateSupport
 * @description
 * 
 * eUICC supports OS update. Bit 19 in both this module and SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const RspCapability_osUpdateSupport: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary osUpdateSupport
 * @description
 * 
 * eUICC supports OS update. Bit 19 in both this module and SGP.22 v3.1 Annex H.
 * 
 * @constant
 */
export
const osUpdateSupport: number = RspCapability_osUpdateSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_iotSpecificMetadataSupport
 * @description
 * 
 * Bit 26 in this module: support for the SGP.32 IoT metadata and profile-info
 * placeholders. SGP.22 v3.1 Annex H does not assign this bit.
 * 
 * @constant
 */
export
const RspCapability_iotSpecificMetadataSupport: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary iotSpecificMetadataSupport
 * @description
 * 
 * Bit 26 in this module: support for the SGP.32 IoT metadata and profile-info
 * placeholders. SGP.22 v3.1 Annex H does not assign this bit.
 * 
 * @constant
 */
export
const iotSpecificMetadataSupport: number = RspCapability_iotSpecificMetadataSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_mslCheckSupport
 * @description
 * 
 * Bit 27 in this module: support for the eUICC minimum-security-level check.
 * SGP.22 v3.1 Annex H does not assign this bit or define that check.
 * 
 * @constant
 */
export
const RspCapability_mslCheckSupport: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary mslCheckSupport
 * @description
 * 
 * Bit 27 in this module: support for the eUICC minimum-security-level check.
 * SGP.22 v3.1 Annex H does not assign this bit or define that check.
 * 
 * @constant
 */
export
const mslCheckSupport: number = RspCapability_mslCheckSupport; /* SHORT_NAMED_BIT */

/**
 * @summary RspCapability_rspServerTestProfileAllowlistCheckSupport
 * @description
 * 
 * Bit 28 in this module: support for an RSP-server test-profile allow-list
 * check. SGP.22 v3.1 Annex H does not assign this bit.
 * 
 * @constant
 */
export
const RspCapability_rspServerTestProfileAllowlistCheckSupport: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary rspServerTestProfileAllowlistCheckSupport
 * @description
 * 
 * Bit 28 in this module: support for an RSP-server test-profile allow-list
 * check. SGP.22 v3.1 Annex H does not assign this bit.
 * 
 * @constant
 */
export
const rspServerTestProfileAllowlistCheckSupport: number = RspCapability_rspServerTestProfileAllowlistCheckSupport; /* SHORT_NAMED_BIT */
export const _decode_RspCapability = $._decodeBitString;
export const _encode_RspCapability = $._encodeBitString;


/* eslint-enable */
