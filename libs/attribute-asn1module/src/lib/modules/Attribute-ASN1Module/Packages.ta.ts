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



/* START_OF_SYMBOL_DEFINITION Packages */
/**
 * @summary Packages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Packages  ::=  SET OF OBJECT IDENTIFIER
 * ```
 */
export
type Packages = OBJECT_IDENTIFIER[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Packages */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Packages */
let _cached_decoder_for_Packages: $.ASN1Decoder<Packages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Packages */

/* START_OF_SYMBOL_DEFINITION _decode_Packages */
/**
 * @summary Decodes an ASN.1 element into a(n) Packages
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Packages} The decoded data structure.
 */
export
function _decode_Packages (el: _Element) {
    if (!_cached_decoder_for_Packages) { _cached_decoder_for_Packages = $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_Packages(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Packages */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Packages */
let _cached_encoder_for_Packages: $.ASN1Encoder<Packages> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Packages */

/* START_OF_SYMBOL_DEFINITION _encode_Packages */
/**
 * @summary Encodes a(n) Packages into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Packages, encoded as an ASN.1 Element.
 */
export
function _encode_Packages (value: Packages, elGetter: $.ASN1Encoder<Packages>) {
    if (!_cached_encoder_for_Packages) { _cached_encoder_for_Packages = $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_Packages(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Packages */

/* eslint-enable */
