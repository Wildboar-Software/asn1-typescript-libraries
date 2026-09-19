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
import { MIMEPartIdentifier, _decode_MIMEPartIdentifier, _encode_MIMEPartIdentifier } from "../TS33128Payloads/MIMEPartIdentifier.ta.mjs";
// export { MIMEPartIdentifier, _decode_MIMEPartIdentifier, _encode_MIMEPartIdentifier } from "../TS33128Payloads/MIMEPartIdentifier.ta.mjs";


/**
 * @summary MIMEBody
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEBody  ::=  CHOICE
 * {
 *     fullBody [1] NULL,
 *     bodyPart [2] MIMEPartIdentifier
 * }
 * ```
 */
export
type MIMEBody =
    { fullBody: NULL } /* CHOICE_ALT_ROOT */
    | { bodyPart: MIMEPartIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MIMEBody: $.ASN1Decoder<MIMEBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIMEBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIMEBody (el: _Element): MIMEBody {
    if (!_cached_decoder_for_MIMEBody) { _cached_decoder_for_MIMEBody = $._decode_inextensible_choice<MIMEBody>({
    "CONTEXT 1": [ "fullBody", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "bodyPart", $._decode_explicit<MIMEPartIdentifier>(() => _decode_MIMEPartIdentifier) ]
}); }
    return _cached_decoder_for_MIMEBody(el);
}

let _cached_encoder_for_MIMEBody: $.ASN1Encoder<MIMEBody> | null = null;

/**
 * @summary Encodes a(n) MIMEBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIMEBody, encoded as an ASN.1 Element.
 */
export
function _encode_MIMEBody (value: MIMEBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIMEBody) { _cached_encoder_for_MIMEBody = $._encode_choice<MIMEBody>({
    "fullBody": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "bodyPart": $._encode_explicit(_TagClass.context, 2, () => _encode_MIMEPartIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_MIMEBody(value, elGetter);
}


/* eslint-enable */
