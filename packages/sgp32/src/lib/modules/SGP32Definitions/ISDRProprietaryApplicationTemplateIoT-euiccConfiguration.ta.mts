/* eslint-disable */
import {
    type ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration
 * @description
 * 
 * Bits returned at ISD-R selection. `ipaeSupported` set to 1 means the eUICC
 * supports IPA inside the eUICC. `enabledProfile` is described by the
 * specification comment on the bit: the eUICC contains an enabled Profile.
 * Section 3.8.4 does not add a further procedure for `enabledProfile`. SGP.32
 * v1.2, section 3.8.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplateIoT-euiccConfiguration ::= BIT STRING {
 *     ipaeSupported(0), -- IPA in the eUICC (IPAe) supported
 *     enabledProfile(1) -- eUICC contains an Enabled Profile
 * }
 * ```
 */
export
type ISDRProprietaryApplicationTemplateIoT_euiccConfiguration = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported
 * @description
 * Set to 1 when the eUICC supports IPAe. The IoT Device MAY then activate IPAe
 * if it supports Annex A.2. SGP.32 v1.2, section 3.8.4.
 * @constant
 */
export
const ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ipaeSupported
 * @description
 * Set to 1 when the eUICC supports IPAe. SGP.32 v1.2, section 3.8.4.
 * @constant
 */
export
const ipaeSupported: number = ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile
 * @description
 * Set to 1 when the eUICC contains an enabled Profile, as stated by the
 * comment on this bit. SGP.32 v1.2 section 3.8.4 does not add a further
 * procedure for it.
 * @constant
 */
export
const ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enabledProfile
 * @description
 * Set to 1 when the eUICC contains an enabled Profile. SGP.32 v1.2, section
 * 3.8.4.
 * @constant
 */
export
const enabledProfile: number = ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile; /* SHORT_NAMED_BIT */
export const _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Decoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> = $._decodeBitString;
export const _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Encoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> = $._encodeBitString;


/* eslint-enable */
