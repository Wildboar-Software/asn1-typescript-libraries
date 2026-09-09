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
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../IN-CS2-datatypes/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../IN-CS2-datatypes/CollectedDigits.ta.mjs";


/**
 * @summary CollectedInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectedInfo  ::=  CHOICE {
 *   collectedDigits  [0]  CollectedDigits,
 *   iA5Information   [1]  BOOLEAN
 * }
 * ```
 */
export
type CollectedInfo =
    { collectedDigits: CollectedDigits } /* CHOICE_ALT_ROOT */
    | { iA5Information: BOOLEAN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CollectedInfo: $.ASN1Decoder<CollectedInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectedInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectedInfo (el: _Element): CollectedInfo {
    if (!_cached_decoder_for_CollectedInfo) { _cached_decoder_for_CollectedInfo = $._decode_inextensible_choice<CollectedInfo>({
    "CONTEXT 0": [ "collectedDigits", $._decode_implicit<CollectedDigits>(() => _decode_CollectedDigits) ],
    "CONTEXT 1": [ "iA5Information", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ]
}); }
    return _cached_decoder_for_CollectedInfo(el);
}

let _cached_encoder_for_CollectedInfo: $.ASN1Encoder<CollectedInfo> | null = null;

/**
 * @summary Encodes a(n) CollectedInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectedInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CollectedInfo (value: CollectedInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectedInfo) { _cached_encoder_for_CollectedInfo = $._encode_choice<CollectedInfo>({
    "collectedDigits": $._encode_implicit(_TagClass.context, 0, () => _encode_CollectedDigits, $.BER),
    "iA5Information": $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER),
}, $.BER); }
    return _cached_encoder_for_CollectedInfo(value, elGetter);
}


/* eslint-enable */
