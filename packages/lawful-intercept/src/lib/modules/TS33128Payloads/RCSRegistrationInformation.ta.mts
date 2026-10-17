/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RCSSIPRegistrationExchange, _decode_RCSSIPRegistrationExchange, _encode_RCSSIPRegistrationExchange } from "../TS33128Payloads/RCSSIPRegistrationExchange.ta.mjs";
// export { RCSSIPRegistrationExchange, _decode_RCSSIPRegistrationExchange, _encode_RCSSIPRegistrationExchange } from "../TS33128Payloads/RCSSIPRegistrationExchange.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary RCSRegistrationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSRegistrationInformation  ::=  CHOICE
 * {
 *     sIPRegistration  [1] RCSSIPRegistrationExchange,
 *     userProfile      [2] XMLType,
 *     multiDevice      [3] XMLType,
 *     presenceDocument [4] XMLType
 * }
 * ```
 */
export
type RCSRegistrationInformation =
    /**
     * @description
     *
     * Contains the last SIP REGISTER request received at and SIP REGISTER
     * response sent by the RCS Server. Shall be chosen if the RCS Server
     * maintains a history of the SIP registration messages.
     *
     * 3GPP TS 33.128, clause 7.13.3.6.2.1.
     */
    { sIPRegistration: RCSSIPRegistrationExchange } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Contains the IMS user profile for the RCS user as described in TS 29.228
     * [130] clause 7.7. Shall be present if the RCS Server maintains context
     * for the user in the format described in TS 29.228 [130]. As there is no
     * namespace defined for the userProfile schema defined in 29.228, the
     * .XMLType.namespace parameter shall be populated with the string
     * "TS29.228_CxData_Type_Rel17.xsd".
     *
     * 3GPP TS 33.128, clause 7.13.3.6.2.1.
     */
    | { userProfile: XMLType } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Contains the multi-device profile for the individual instance of the RCS
     * User being reported. Shall be present if the RCS Server contains a
     * multi-device context for the user in the format described in TS 24.174
     * [131]. The .XMLType.namespace parameter shall be populated with
     * "http://uri.etsi.org/ngn/params/xml/simservs/xcap".
     *
     * 3GPP TS 33.128, clause 7.13.3.6.2.1.
     */
    | { multiDevice: XMLType } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Contains the presence information for the RCS user in the format of a
     * PIDF as described in GSMA RCC.07 [78]. The .XMLType.namespace parameter
     * shall be populated with "urn:ietf:params:xml:ns:pidf".
     *
     * 3GPP TS 33.128, clause 7.13.3.6.2.1.
     */
    | { presenceDocument: XMLType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RCSRegistrationInformation: $.ASN1Decoder<RCSRegistrationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSRegistrationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSRegistrationInformation (el: _Element): RCSRegistrationInformation {
    if (!_cached_decoder_for_RCSRegistrationInformation) { _cached_decoder_for_RCSRegistrationInformation = $._decode_extensible_choice<RCSRegistrationInformation>({
    "CONTEXT 1": [ "sIPRegistration", $._decode_implicit<RCSSIPRegistrationExchange>(() => _decode_RCSSIPRegistrationExchange) ],
    "CONTEXT 2": [ "userProfile", $._decode_implicit<XMLType>(() => _decode_XMLType) ],
    "CONTEXT 3": [ "multiDevice", $._decode_implicit<XMLType>(() => _decode_XMLType) ],
    "CONTEXT 4": [ "presenceDocument", $._decode_implicit<XMLType>(() => _decode_XMLType) ]
}); }
    return _cached_decoder_for_RCSRegistrationInformation(el);
}

let _cached_encoder_for_RCSRegistrationInformation: $.ASN1Encoder<RCSRegistrationInformation> | null = null;

/**
 * @summary Encodes a(n) RCSRegistrationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSRegistrationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RCSRegistrationInformation (value: RCSRegistrationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSRegistrationInformation) { _cached_encoder_for_RCSRegistrationInformation = $._encode_choice<RCSRegistrationInformation>({
    "sIPRegistration": $._encode_implicit(_TagClass.context, 1, () => _encode_RCSSIPRegistrationExchange, $.BER),
    "userProfile": $._encode_implicit(_TagClass.context, 2, () => _encode_XMLType, $.BER),
    "multiDevice": $._encode_implicit(_TagClass.context, 3, () => _encode_XMLType, $.BER),
    "presenceDocument": $._encode_implicit(_TagClass.context, 4, () => _encode_XMLType, $.BER),
}, $.BER); }
    return _cached_encoder_for_RCSRegistrationInformation(value, elGetter);
}


/* eslint-enable */
