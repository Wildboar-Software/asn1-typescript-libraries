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
import { Destination, _decode_Destination, _encode_Destination } from "../Attribute-ASN1Module/Destination.ta.js";
export { Destination, _decode_Destination, _encode_Destination } from "../Attribute-ASN1Module/Destination.ta.js";


/* START_OF_SYMBOL_DEFINITION ActiveDestination */
/**
 * @summary ActiveDestination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActiveDestination  ::= 
 *   Destination(WITH COMPONENTS {
 *                 single    PRESENT,
 *                 multiple  ABSENT
 *               })
 * ```
 */
export
type ActiveDestination = Destination; // DefinedType
/* END_OF_SYMBOL_DEFINITION ActiveDestination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActiveDestination */
let _cached_decoder_for_ActiveDestination: $.ASN1Decoder<ActiveDestination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActiveDestination */

/* START_OF_SYMBOL_DEFINITION _decode_ActiveDestination */
/**
 * @summary Decodes an ASN.1 element into a(n) ActiveDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActiveDestination} The decoded data structure.
 */
export
function _decode_ActiveDestination (el: _Element) {
    if (!_cached_decoder_for_ActiveDestination) { _cached_decoder_for_ActiveDestination = _decode_Destination; }
    return _cached_decoder_for_ActiveDestination(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActiveDestination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActiveDestination */
let _cached_encoder_for_ActiveDestination: $.ASN1Encoder<ActiveDestination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActiveDestination */

/* START_OF_SYMBOL_DEFINITION _encode_ActiveDestination */
/**
 * @summary Encodes a(n) ActiveDestination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActiveDestination, encoded as an ASN.1 Element.
 */
export
function _encode_ActiveDestination (value: ActiveDestination, elGetter: $.ASN1Encoder<ActiveDestination>) {
    if (!_cached_encoder_for_ActiveDestination) { _cached_encoder_for_ActiveDestination = _encode_Destination; }
    return _cached_encoder_for_ActiveDestination(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActiveDestination */

/* eslint-enable */
