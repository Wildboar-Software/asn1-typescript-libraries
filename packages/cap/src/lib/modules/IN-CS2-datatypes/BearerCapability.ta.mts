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



/**
 * @summary BearerCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerCapability{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   bearerCap  [0]  OCTET STRING(SIZE (2..bound.&maxBearerCapabilityLength)),
 *   tmr        [1]  OCTET STRING(SIZE (1))
 * }
 * ```
 */
export
type BearerCapability =
    { bearerCap: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { tmr: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BearerCapability: $.ASN1Decoder<BearerCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BearerCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BearerCapability (el: _Element): BearerCapability {
    if (!_cached_decoder_for_BearerCapability) { _cached_decoder_for_BearerCapability = $._decode_inextensible_choice<BearerCapability>({
    "CONTEXT 0": [ "bearerCap", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "tmr", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_BearerCapability(el);
}

let _cached_encoder_for_BearerCapability: $.ASN1Encoder<BearerCapability> | null = null;

/**
 * @summary Encodes a(n) BearerCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BearerCapability, encoded as an ASN.1 Element.
 */
export
function _encode_BearerCapability (value: BearerCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BearerCapability) { _cached_encoder_for_BearerCapability = $._encode_choice<BearerCapability>({
    "bearerCap": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "tmr": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_BearerCapability(value, elGetter);
}


/* eslint-enable */
