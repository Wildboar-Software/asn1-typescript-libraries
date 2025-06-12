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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ECParameters */
/**
 * @summary ECParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters  ::=  CHOICE {
 * namedCurve      CURVE.&id({NamedCurve})
 * -- implicitCurve   NULL
 * -- implicitCurve MUST NOT be used in PKIX
 * -- specifiedCurve  SpecifiedCurve
 * -- specifiedCurve MUST NOT be used in PKIX
 * -- Details for specifiedCurve can be found in [X9.62]
 * -- Any future additions to this CHOICE should be coordinated
 * -- with ANSI X.9.
 * }
 * ```
 */
export
type ECParameters =
    { namedCurve: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ECParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters */
let _cached_decoder_for_ECParameters: $.ASN1Decoder<ECParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ECParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters} The decoded data structure.
 */
export
function _decode_ECParameters (el: _Element) {
    if (!_cached_decoder_for_ECParameters) { _cached_decoder_for_ECParameters = $._decode_inextensible_choice<ECParameters>({
    "UNIVERSAL 6": [ "namedCurve", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_ECParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters */
let _cached_encoder_for_ECParameters: $.ASN1Encoder<ECParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ECParameters */
/**
 * @summary Encodes a(n) ECParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ECParameters (value: ECParameters, elGetter: $.ASN1Encoder<ECParameters>) {
    if (!_cached_encoder_for_ECParameters) { _cached_encoder_for_ECParameters = $._encode_choice<ECParameters>({
    "namedCurve": $._encodeObjectIdentifier,
}, $.BER); }
    return _cached_encoder_for_ECParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECParameters */

/* eslint-enable */
