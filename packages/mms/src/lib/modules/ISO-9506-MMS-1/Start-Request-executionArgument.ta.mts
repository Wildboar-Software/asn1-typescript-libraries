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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Start_Request_executionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Start-Request-executionArgument ::= CHOICE {
 *     simpleString [1] IMPLICIT MMSString,
 *     encodedString EXTERNAL,
 *     embeddedString EMBEDDED PDV
 * }
 * ```
 */
export
type Start_Request_executionArgument =
    { simpleString: MMSString } /* CHOICE_ALT_ROOT */
    | { encodedString: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { embeddedString: EMBEDDED_PDV } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Start_Request_executionArgument: $.ASN1Decoder<Start_Request_executionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Start_Request_executionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Start_Request_executionArgument (el: _Element): Start_Request_executionArgument {
    if (!_cached_decoder_for_Start_Request_executionArgument) { _cached_decoder_for_Start_Request_executionArgument = $._decode_inextensible_choice<Start_Request_executionArgument>({
    "CONTEXT 1": [ "simpleString", $._decode_explicit<MMSString>(() => _decode_MMSString) ],
    "UNIVERSAL 8": [ "encodedString", $._decodeExternal ],
    "UNIVERSAL 11": [ "embeddedString", $._decodeEmbeddedPDV ]
}); }
    return _cached_decoder_for_Start_Request_executionArgument(el);
}

let _cached_encoder_for_Start_Request_executionArgument: $.ASN1Encoder<Start_Request_executionArgument> | null = null;

/**
 * @summary Encodes a(n) Start_Request_executionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Start_Request_executionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_Start_Request_executionArgument (value: Start_Request_executionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Start_Request_executionArgument) { _cached_encoder_for_Start_Request_executionArgument = $._encode_choice<Start_Request_executionArgument>({
    "simpleString": $._encode_explicit(_TagClass.context, 1, () => _encode_MMSString, $.BER),
    "encodedString": $._encodeExternal,
    "embeddedString": $._encodeEmbeddedPDV,
}, $.BER); }
    return _cached_encoder_for_Start_Request_executionArgument(value, elGetter);
}


/* eslint-enable */
