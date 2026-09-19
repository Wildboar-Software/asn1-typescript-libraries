/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
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
    { sIPRegistration: RCSSIPRegistrationExchange } /* CHOICE_ALT_ROOT */
    | { userProfile: XMLType } /* CHOICE_ALT_ROOT */
    | { multiDevice: XMLType } /* CHOICE_ALT_ROOT */
    | { presenceDocument: XMLType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RCSRegistrationInformation: $.ASN1Decoder<RCSRegistrationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSRegistrationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSRegistrationInformation (el: _Element): RCSRegistrationInformation {
    if (!_cached_decoder_for_RCSRegistrationInformation) { _cached_decoder_for_RCSRegistrationInformation = $._decode_inextensible_choice<RCSRegistrationInformation>({
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
