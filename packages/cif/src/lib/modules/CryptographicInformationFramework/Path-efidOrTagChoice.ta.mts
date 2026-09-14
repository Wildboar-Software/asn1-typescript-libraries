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
import { Path_efidOrTagChoice_tagRef, _decode_Path_efidOrTagChoice_tagRef, _encode_Path_efidOrTagChoice_tagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-tagRef.ta.mjs";
// export { Path_efidOrTagChoice_tagRef, _decode_Path_efidOrTagChoice_tagRef, _encode_Path_efidOrTagChoice_tagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-tagRef.ta.mjs";
import { Path_efidOrTagChoice_appFileRef, _decode_Path_efidOrTagChoice_appFileRef, _encode_Path_efidOrTagChoice_appFileRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appFileRef.ta.mjs";
// export { Path_efidOrTagChoice_appFileRef, _decode_Path_efidOrTagChoice_appFileRef, _encode_Path_efidOrTagChoice_appFileRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appFileRef.ta.mjs";
import { Path_efidOrTagChoice_appTagRef, _decode_Path_efidOrTagChoice_appTagRef, _encode_Path_efidOrTagChoice_appTagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appTagRef.ta.mjs";
// export { Path_efidOrTagChoice_appTagRef, _decode_Path_efidOrTagChoice_appTagRef, _encode_Path_efidOrTagChoice_appTagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appTagRef.ta.mjs";


/**
 * @summary Path_efidOrTagChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-efidOrTagChoice ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Path_efidOrTagChoice =
    { efidOrPath: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { tagRef: Path_efidOrTagChoice_tagRef } /* CHOICE_ALT_ROOT */
    | { appFileRef: Path_efidOrTagChoice_appFileRef } /* CHOICE_ALT_ROOT */
    | { appTagRef: Path_efidOrTagChoice_appTagRef } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Path_efidOrTagChoice: $.ASN1Decoder<Path_efidOrTagChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_efidOrTagChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_efidOrTagChoice (el: _Element): Path_efidOrTagChoice {
    if (!_cached_decoder_for_Path_efidOrTagChoice) { _cached_decoder_for_Path_efidOrTagChoice = $._decode_inextensible_choice<Path_efidOrTagChoice>({
    "UNIVERSAL 4": [ "efidOrPath", $._decodeOctetString ],
    "CONTEXT 0": [ "tagRef", $._decode_implicit<Path_efidOrTagChoice_tagRef>(() => _decode_Path_efidOrTagChoice_tagRef) ],
    "CONTEXT 1": [ "appFileRef", $._decode_implicit<Path_efidOrTagChoice_appFileRef>(() => _decode_Path_efidOrTagChoice_appFileRef) ],
    "CONTEXT 2": [ "appTagRef", $._decode_implicit<Path_efidOrTagChoice_appTagRef>(() => _decode_Path_efidOrTagChoice_appTagRef) ]
}); }
    return _cached_decoder_for_Path_efidOrTagChoice(el);
}

let _cached_encoder_for_Path_efidOrTagChoice: $.ASN1Encoder<Path_efidOrTagChoice> | null = null;

/**
 * @summary Encodes a(n) Path_efidOrTagChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_efidOrTagChoice, encoded as an ASN.1 Element.
 */
export
function _encode_Path_efidOrTagChoice (value: Path_efidOrTagChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_efidOrTagChoice) { _cached_encoder_for_Path_efidOrTagChoice = $._encode_choice<Path_efidOrTagChoice>({
    "efidOrPath": $._encodeOctetString,
    "tagRef": $._encode_implicit(_TagClass.context, 0, () => _encode_Path_efidOrTagChoice_tagRef, $.BER),
    "appFileRef": $._encode_implicit(_TagClass.context, 1, () => _encode_Path_efidOrTagChoice_appFileRef, $.BER),
    "appTagRef": $._encode_implicit(_TagClass.context, 2, () => _encode_Path_efidOrTagChoice_appTagRef, $.BER),
}, $.BER); }
    return _cached_encoder_for_Path_efidOrTagChoice(value, elGetter);
}


/* eslint-enable */
