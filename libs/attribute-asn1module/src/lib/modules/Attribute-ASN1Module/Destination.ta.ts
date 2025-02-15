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
import { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta";
export { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta";


/* START_OF_SYMBOL_DEFINITION Destination */
/**
 * @summary Destination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Destination  ::=  CHOICE {single    AE-title,
 *                         multiple  SET OF AE-title
 * }
 * ```
 */
export
type Destination =
    { single: AE_title } /* CHOICE_ALT_ROOT */
    | { multiple: AE_title[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Destination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Destination */
let _cached_decoder_for_Destination: $.ASN1Decoder<Destination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Destination */

/* START_OF_SYMBOL_DEFINITION _decode_Destination */
/**
 * @summary Decodes an ASN.1 element into a(n) Destination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Destination} The decoded data structure.
 */
export
function _decode_Destination (el: _Element) {
    if (!_cached_decoder_for_Destination) { _cached_decoder_for_Destination = $._decode_inextensible_choice<Destination>({
    "UNIVERSAL 6": [ "single", _decode_AE_title ],
    "UNIVERSAL 17": [ "multiple", $._decodeSetOf<AE_title>(() => _decode_AE_title) ]
}); }
    return _cached_decoder_for_Destination(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Destination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Destination */
let _cached_encoder_for_Destination: $.ASN1Encoder<Destination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Destination */

/* START_OF_SYMBOL_DEFINITION _encode_Destination */
/**
 * @summary Encodes a(n) Destination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Destination, encoded as an ASN.1 Element.
 */
export
function _encode_Destination (value: Destination, elGetter: $.ASN1Encoder<Destination>) {
    if (!_cached_encoder_for_Destination) { _cached_encoder_for_Destination = $._encode_choice<Destination>({
    "single": _encode_AE_title,
    "multiple": $._encodeSetOf<AE_title>(() => _encode_AE_title, $.BER),
}, $.BER); }
    return _cached_encoder_for_Destination(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Destination */

/* eslint-enable */
