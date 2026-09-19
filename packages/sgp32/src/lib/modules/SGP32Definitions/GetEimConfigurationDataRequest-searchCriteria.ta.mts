/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetEimConfigurationDataRequest_searchCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimConfigurationDataRequest-searchCriteria ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type GetEimConfigurationDataRequest_searchCriteria =
    { eimId: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetEimConfigurationDataRequest_searchCriteria: $.ASN1Decoder<GetEimConfigurationDataRequest_searchCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimConfigurationDataRequest_searchCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimConfigurationDataRequest_searchCriteria (el: _Element): GetEimConfigurationDataRequest_searchCriteria {
    if (!_cached_decoder_for_GetEimConfigurationDataRequest_searchCriteria) { _cached_decoder_for_GetEimConfigurationDataRequest_searchCriteria = $._decode_inextensible_choice<GetEimConfigurationDataRequest_searchCriteria>({
    "CONTEXT 0": [ "eimId", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_GetEimConfigurationDataRequest_searchCriteria(el);
}

let _cached_encoder_for_GetEimConfigurationDataRequest_searchCriteria: $.ASN1Encoder<GetEimConfigurationDataRequest_searchCriteria> | null = null;

/**
 * @summary Encodes a(n) GetEimConfigurationDataRequest_searchCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimConfigurationDataRequest_searchCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimConfigurationDataRequest_searchCriteria (value: GetEimConfigurationDataRequest_searchCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimConfigurationDataRequest_searchCriteria) { _cached_encoder_for_GetEimConfigurationDataRequest_searchCriteria = $._encode_choice<GetEimConfigurationDataRequest_searchCriteria>({
    "eimId": $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_GetEimConfigurationDataRequest_searchCriteria(value, elGetter);
}


/* eslint-enable */
