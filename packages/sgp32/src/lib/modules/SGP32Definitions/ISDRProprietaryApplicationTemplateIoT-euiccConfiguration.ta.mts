/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDRProprietaryApplicationTemplateIoT-euiccConfiguration ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ISDRProprietaryApplicationTemplateIoT_euiccConfiguration = BIT_STRING;

/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported
 * @constant
 */
export
const ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ipaeSupported
 * @constant
 */
export
const ipaeSupported: number = ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_ipaeSupported; /* SHORT_NAMED_BIT */

/**
 * @summary ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile
 * @constant
 */
export
const ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary enabledProfile
 * @constant
 */
export
const enabledProfile: number = ISDRProprietaryApplicationTemplateIoT_euiccConfiguration_enabledProfile; /* SHORT_NAMED_BIT */
export const _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Decoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> = $._decodeBitString;
export const _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Encoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> = $._encodeBitString;


/* eslint-enable */
