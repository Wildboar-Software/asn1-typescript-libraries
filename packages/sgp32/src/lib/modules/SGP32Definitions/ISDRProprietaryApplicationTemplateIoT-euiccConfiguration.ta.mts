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

let _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Decoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDRProprietaryApplicationTemplateIoT_euiccConfiguration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration (el: _Element): ISDRProprietaryApplicationTemplateIoT_euiccConfiguration {
    if (!_cached_decoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration) { _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration = $._decodeBitString; }
    return _cached_decoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration(el);
}

let _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration: $.ASN1Encoder<ISDRProprietaryApplicationTemplateIoT_euiccConfiguration> | null = null;

/**
 * @summary Encodes a(n) ISDRProprietaryApplicationTemplateIoT_euiccConfiguration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, encoded as an ASN.1 Element.
 */
export
function _encode_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration (value: ISDRProprietaryApplicationTemplateIoT_euiccConfiguration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration) { _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration = $._encodeBitString; }
    return _cached_encoder_for_ISDRProprietaryApplicationTemplateIoT_euiccConfiguration(value, elGetter);
}


/* eslint-enable */
