/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaCapabilities_ipaSupportedProtocols
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities-ipaSupportedProtocols ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaCapabilities_ipaSupportedProtocols = BIT_STRING;

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveHttps
 * @constant
 */
export
const ipaRetrieveHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveCoaps
 * @constant
 */
export
const ipaRetrieveCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectHttps
 * @constant
 */
export
const ipaInjectHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectCoaps
 * @constant
 */
export
const ipaInjectCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaProprietary
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ipaProprietary
 * @constant
 */
export
const ipaProprietary: number = IpaCapabilities_ipaSupportedProtocols_ipaProprietary; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IpaCapabilities_ipaSupportedProtocols: $.ASN1Decoder<IpaCapabilities_ipaSupportedProtocols> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaCapabilities_ipaSupportedProtocols
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaCapabilities_ipaSupportedProtocols (el: _Element): IpaCapabilities_ipaSupportedProtocols {
    if (!_cached_decoder_for_IpaCapabilities_ipaSupportedProtocols) { _cached_decoder_for_IpaCapabilities_ipaSupportedProtocols = $._decodeBitString; }
    return _cached_decoder_for_IpaCapabilities_ipaSupportedProtocols(el);
}

let _cached_encoder_for_IpaCapabilities_ipaSupportedProtocols: $.ASN1Encoder<IpaCapabilities_ipaSupportedProtocols> | null = null;

/**
 * @summary Encodes a(n) IpaCapabilities_ipaSupportedProtocols into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaCapabilities_ipaSupportedProtocols, encoded as an ASN.1 Element.
 */
export
function _encode_IpaCapabilities_ipaSupportedProtocols (value: IpaCapabilities_ipaSupportedProtocols, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaCapabilities_ipaSupportedProtocols) { _cached_encoder_for_IpaCapabilities_ipaSupportedProtocols = $._encodeBitString; }
    return _cached_encoder_for_IpaCapabilities_ipaSupportedProtocols(value, elGetter);
}


/* eslint-enable */
