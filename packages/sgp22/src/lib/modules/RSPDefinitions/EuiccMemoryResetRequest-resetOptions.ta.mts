/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccMemoryResetRequest_resetOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccMemoryResetRequest-resetOptions ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EuiccMemoryResetRequest_resetOptions = BIT_STRING;

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary deleteOperationalProfiles
 * @constant
 */
export
const deleteOperationalProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteOperationalProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deleteFieldLoadedTestProfiles
 * @constant
 */
export
const deleteFieldLoadedTestProfiles: number = EuiccMemoryResetRequest_resetOptions_deleteFieldLoadedTestProfiles; /* SHORT_NAMED_BIT */

/**
 * @summary EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress
 * @constant
 */
export
const EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary resetDefaultSmdpAddress
 * @constant
 */
export
const resetDefaultSmdpAddress: number = EuiccMemoryResetRequest_resetOptions_resetDefaultSmdpAddress; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EuiccMemoryResetRequest_resetOptions: $.ASN1Decoder<EuiccMemoryResetRequest_resetOptions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccMemoryResetRequest_resetOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccMemoryResetRequest_resetOptions (el: _Element): EuiccMemoryResetRequest_resetOptions {
    if (!_cached_decoder_for_EuiccMemoryResetRequest_resetOptions) { _cached_decoder_for_EuiccMemoryResetRequest_resetOptions = $._decodeBitString; }
    return _cached_decoder_for_EuiccMemoryResetRequest_resetOptions(el);
}

let _cached_encoder_for_EuiccMemoryResetRequest_resetOptions: $.ASN1Encoder<EuiccMemoryResetRequest_resetOptions> | null = null;

/**
 * @summary Encodes a(n) EuiccMemoryResetRequest_resetOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccMemoryResetRequest_resetOptions, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccMemoryResetRequest_resetOptions (value: EuiccMemoryResetRequest_resetOptions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccMemoryResetRequest_resetOptions) { _cached_encoder_for_EuiccMemoryResetRequest_resetOptions = $._encodeBitString; }
    return _cached_encoder_for_EuiccMemoryResetRequest_resetOptions(value, elGetter);
}


/* eslint-enable */
