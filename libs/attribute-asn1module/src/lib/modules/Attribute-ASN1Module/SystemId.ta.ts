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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION SystemId */
/**
 * @summary SystemId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SystemId  ::=  CHOICE {name     GraphicString,
 *                      number   INTEGER,
 *                      nothing  NULL
 * }
 * ```
 */
export
type SystemId =
    { name: GraphicString } /* CHOICE_ALT_ROOT */
    | { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { nothing: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SystemId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemId */
let _cached_decoder_for_SystemId: $.ASN1Decoder<SystemId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemId */

/* START_OF_SYMBOL_DEFINITION _decode_SystemId */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemId} The decoded data structure.
 */
export
function _decode_SystemId (el: _Element) {
    if (!_cached_decoder_for_SystemId) { _cached_decoder_for_SystemId = $._decode_inextensible_choice<SystemId>({
    "UNIVERSAL 25": [ "name", $._decodeGraphicString ],
    "UNIVERSAL 2": [ "number_", $._decodeInteger ],
    "UNIVERSAL 5": [ "nothing", $._decodeNull ]
}); }
    return _cached_decoder_for_SystemId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemId */
let _cached_encoder_for_SystemId: $.ASN1Encoder<SystemId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemId */

/* START_OF_SYMBOL_DEFINITION _encode_SystemId */
/**
 * @summary Encodes a(n) SystemId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemId, encoded as an ASN.1 Element.
 */
export
function _encode_SystemId (value: SystemId, elGetter: $.ASN1Encoder<SystemId>) {
    if (!_cached_encoder_for_SystemId) { _cached_encoder_for_SystemId = $._encode_choice<SystemId>({
    "name": $._encodeGraphicString,
    "number_": $._encodeInteger,
    "nothing": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SystemId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemId */

/* eslint-enable */
