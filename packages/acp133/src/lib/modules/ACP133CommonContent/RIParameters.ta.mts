/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "@wildboar/pki-stub";
import { RIParametersDeprecated, _decode_RIParametersDeprecated, _encode_RIParametersDeprecated } from "../ACP133CommonContent/RIParametersDeprecated.ta.mjs";


/**
 * @summary RIParameters
 * @description
 *
 * `ri-parameters` uses {@link UnboundedDirectoryString}. In ASN.1 that
 * component is `DirectoryString`, the same CHOICE with a size parameter that
 * this encoding does not carry.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParameters  ::=  CHOICE {
 *     ri-parameters             DirectoryString,
 *     ri-parameters-deprecated  RIParametersDeprecated
 * }
 * ```
 */
export
type RIParameters =
    { ri_parameters: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { ri_parameters_deprecated: RIParametersDeprecated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RIParameters: $.ASN1Decoder<RIParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIParameters (el: _Element): RIParameters {
    if (!_cached_decoder_for_RIParameters) { _cached_decoder_for_RIParameters = $._decode_inextensible_choice<RIParameters>({
    "UNIVERSAL 20": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 19": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 30": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 28": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 12": [ "ri_parameters", _decode_UnboundedDirectoryString ],
    "UNIVERSAL 17": [ "ri_parameters_deprecated", _decode_RIParametersDeprecated ]
}); }
    return _cached_decoder_for_RIParameters(el);
}

let _cached_encoder_for_RIParameters: $.ASN1Encoder<RIParameters> | null = null;

/**
 * @summary Encodes a(n) RIParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIParameters, encoded as an ASN.1 Element.
 */
export
function _encode_RIParameters (value: RIParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIParameters) { _cached_encoder_for_RIParameters = $._encode_choice<RIParameters>({
    "ri_parameters": _encode_UnboundedDirectoryString,
    "ri_parameters_deprecated": _encode_RIParametersDeprecated,
}, $.BER); }
    return _cached_encoder_for_RIParameters(value, elGetter);
}


/* eslint-enable */
