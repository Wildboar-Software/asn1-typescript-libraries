/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary ApplicationResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationResponse  ::=  CHOICE
 * {
 *     getRootApplicationResponse          [1] SBIType,
 *     getDCApplicationProfileListResponse [2] SBIType
 * }
 * ```
 */
export
type ApplicationResponse =
    /**
     * @description
     *
     * Contains the entire payload of the Get root application response sent
     * from the the DCSF or the MMTel Enabler Server to the MMTel Enabler Client
     * target UE. The SBIReference for this parameter shall be populated with
     * 'TS24392_[Get Root application response schema]' where [Get Root
     * application response schema] is
     * "http://json-schema.org/draft-07/schema#", as specified in TS 24.392
     * [166] clause 7.2.1.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     */
    { getRootApplicationResponse: SBIType } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Contains the entire payload of the Get DC Application Profile List
     * response sent from the the DCSF or the MMTel Enabler Server to the MMTel
     * Enabler Client target UE. The SBIReference for this parameter shall be
     * populated with 'TS24392_[Get DC application profile List response
     * schema]' where [Get DC application profile List response schema] is
     * "http://json-schema.org/draft-07/schema#", as specified in TS 24.392
     * [166] clause 7.2.2.
     *
     * 3GPP TS 33.128, clause 7.12.4.2.8.
     */
    | { getDCApplicationProfileListResponse: SBIType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ApplicationResponse: $.ASN1Decoder<ApplicationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationResponse (el: _Element): ApplicationResponse {
    if (!_cached_decoder_for_ApplicationResponse) { _cached_decoder_for_ApplicationResponse = $._decode_extensible_choice<ApplicationResponse>({
    "CONTEXT 1": [ "getRootApplicationResponse", $._decode_implicit<SBIType>(() => _decode_SBIType) ],
    "CONTEXT 2": [ "getDCApplicationProfileListResponse", $._decode_implicit<SBIType>(() => _decode_SBIType) ]
}); }
    return _cached_decoder_for_ApplicationResponse(el);
}

let _cached_encoder_for_ApplicationResponse: $.ASN1Encoder<ApplicationResponse> | null = null;

/**
 * @summary Encodes a(n) ApplicationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationResponse (value: ApplicationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationResponse) { _cached_encoder_for_ApplicationResponse = $._encode_choice<ApplicationResponse>({
    "getRootApplicationResponse": $._encode_implicit(_TagClass.context, 1, () => _encode_SBIType, $.BER),
    "getDCApplicationProfileListResponse": $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER),
}, $.BER); }
    return _cached_encoder_for_ApplicationResponse(value, elGetter);
}


/* eslint-enable */
