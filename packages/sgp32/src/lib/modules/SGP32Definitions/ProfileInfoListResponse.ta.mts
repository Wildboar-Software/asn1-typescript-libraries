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
import { ProfileInfo, _decode_ProfileInfo, _encode_ProfileInfo } from "../SGP32Definitions/ProfileInfo.ta.mjs";
// export { ProfileInfo, _decode_ProfileInfo, _encode_ProfileInfo } from "../SGP32Definitions/ProfileInfo.ta.mjs";
import { ProfileInfoListError, ProfileInfoListError_incorrectInputValues /* IMPORTED_LONG_NAMED_INTEGER */, incorrectInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileInfoListError_profileChangeOngoing /* IMPORTED_LONG_NAMED_INTEGER */, profileChangeOngoing /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileInfoListError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileInfoListError, _encode_ProfileInfoListError } from "../SGP32Definitions/ProfileInfoListError.ta.mjs";
// export { ProfileInfoListError, ProfileInfoListError_incorrectInputValues /* IMPORTED_LONG_NAMED_INTEGER */, incorrectInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileInfoListError_profileChangeOngoing /* IMPORTED_LONG_NAMED_INTEGER */, profileChangeOngoing /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileInfoListError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileInfoListError, _encode_ProfileInfoListError } from "../SGP32Definitions/ProfileInfoListError.ta.mjs";


/**
 * @summary ProfileInfoListResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListResponse  ::=  [45] CHOICE {
 *     profileInfoListOk SEQUENCE OF ProfileInfo, -- see SGP.22
 *     profileInfoListError ProfileInfoListError
 * }
 * ```
 */
export
type ProfileInfoListResponse =
    { profileInfoListOk: ProfileInfo[] } /* CHOICE_ALT_ROOT */
    | { profileInfoListError: ProfileInfoListError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileInfoListResponse: $.ASN1Decoder<ProfileInfoListResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfoListResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfoListResponse (el: _Element): ProfileInfoListResponse {
    if (!_cached_decoder_for_ProfileInfoListResponse) { _cached_decoder_for_ProfileInfoListResponse = $._decode_explicit<ProfileInfoListResponse>(() => $._decode_inextensible_choice<ProfileInfoListResponse>({
    "CONTEXT 0": [ "profileInfoListOk", $._decodeSequenceOf<ProfileInfo>(() => _decode_ProfileInfo) ],
    "CONTEXT 1": [ "profileInfoListError", _decode_ProfileInfoListError ]
})); }
    return _cached_decoder_for_ProfileInfoListResponse(el);
}

let _cached_encoder_for_ProfileInfoListResponse: $.ASN1Encoder<ProfileInfoListResponse> | null = null;

/**
 * @summary Encodes a(n) ProfileInfoListResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfoListResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfoListResponse (value: ProfileInfoListResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfoListResponse) { _cached_encoder_for_ProfileInfoListResponse = $._encode_explicit(_TagClass.context, 45, () => $._encode_choice<ProfileInfoListResponse>({
    "profileInfoListOk": $._encodeSequenceOf<ProfileInfo>(() => _encode_ProfileInfo, $.BER),
    "profileInfoListError": _encode_ProfileInfoListError,
}, $.BER), $.BER); }
    return _cached_encoder_for_ProfileInfoListResponse(value, elGetter);
}


/* eslint-enable */
