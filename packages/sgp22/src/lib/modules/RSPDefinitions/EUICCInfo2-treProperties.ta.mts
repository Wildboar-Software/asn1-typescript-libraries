/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUICCInfo2_treProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-treProperties ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EUICCInfo2_treProperties = BIT_STRING;

/**
 * @summary EUICCInfo2_treProperties_isDiscrete
 * @constant
 */
export
const EUICCInfo2_treProperties_isDiscrete: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary isDiscrete
 * @constant
 */
export
const isDiscrete: number = EUICCInfo2_treProperties_isDiscrete; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_isIntegrated
 * @constant
 */
export
const EUICCInfo2_treProperties_isIntegrated: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary isIntegrated
 * @constant
 */
export
const isIntegrated: number = EUICCInfo2_treProperties_isIntegrated; /* SHORT_NAMED_BIT */

/**
 * @summary EUICCInfo2_treProperties_usesRemoteMemory
 * @constant
 */
export
const EUICCInfo2_treProperties_usesRemoteMemory: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary usesRemoteMemory
 * @constant
 */
export
const usesRemoteMemory: number = EUICCInfo2_treProperties_usesRemoteMemory; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EUICCInfo2_treProperties: $.ASN1Decoder<EUICCInfo2_treProperties> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCInfo2_treProperties
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCInfo2_treProperties (el: _Element): EUICCInfo2_treProperties {
    if (!_cached_decoder_for_EUICCInfo2_treProperties) { _cached_decoder_for_EUICCInfo2_treProperties = $._decodeBitString; }
    return _cached_decoder_for_EUICCInfo2_treProperties(el);
}

let _cached_encoder_for_EUICCInfo2_treProperties: $.ASN1Encoder<EUICCInfo2_treProperties> | null = null;

/**
 * @summary Encodes a(n) EUICCInfo2_treProperties into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCInfo2_treProperties, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCInfo2_treProperties (value: EUICCInfo2_treProperties, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCInfo2_treProperties) { _cached_encoder_for_EUICCInfo2_treProperties = $._encodeBitString; }
    return _cached_encoder_for_EUICCInfo2_treProperties(value, elGetter);
}


/* eslint-enable */
