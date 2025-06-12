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
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "@wildboar/x500/src/lib/modules/InformationFramework/RelativeDistinguishedName.ta.js";


/* START_OF_SYMBOL_DEFINITION ApplicationProcessTitle */
/**
 * @summary ApplicationProcessTitle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationProcessTitle  ::=  CHOICE {
 *   directory  [0]  SEQUENCE OF RelativeDistinguishedName,
 *   oid        [1]  OBJECT IDENTIFIER,
 *   notKnown   NULL
 * }
 * ```
 */
export
type ApplicationProcessTitle =
    { directory: RelativeDistinguishedName[] } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { notKnown: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ApplicationProcessTitle */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationProcessTitle */
let _cached_decoder_for_ApplicationProcessTitle: $.ASN1Decoder<ApplicationProcessTitle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationProcessTitle */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationProcessTitle */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationProcessTitle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationProcessTitle} The decoded data structure.
 */
export
function _decode_ApplicationProcessTitle (el: _Element) {
    if (!_cached_decoder_for_ApplicationProcessTitle) { _cached_decoder_for_ApplicationProcessTitle = $._decode_inextensible_choice<ApplicationProcessTitle>({
    "CONTEXT 0": [ "directory", $._decode_implicit<RelativeDistinguishedName[]>(() => $._decodeSequenceOf<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName)) ],
    "CONTEXT 1": [ "oid", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "UNIVERSAL 5": [ "notKnown", $._decodeNull ]
}); }
    return _cached_decoder_for_ApplicationProcessTitle(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationProcessTitle */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationProcessTitle */
let _cached_encoder_for_ApplicationProcessTitle: $.ASN1Encoder<ApplicationProcessTitle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationProcessTitle */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationProcessTitle */
/**
 * @summary Encodes a(n) ApplicationProcessTitle into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationProcessTitle, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationProcessTitle (value: ApplicationProcessTitle, elGetter: $.ASN1Encoder<ApplicationProcessTitle>) {
    if (!_cached_encoder_for_ApplicationProcessTitle) { _cached_encoder_for_ApplicationProcessTitle = $._encode_choice<ApplicationProcessTitle>({
    "directory": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<RelativeDistinguishedName>(() => _encode_RelativeDistinguishedName, $.BER), $.BER),
    "oid": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "notKnown": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ApplicationProcessTitle(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationProcessTitle */

/* eslint-enable */
