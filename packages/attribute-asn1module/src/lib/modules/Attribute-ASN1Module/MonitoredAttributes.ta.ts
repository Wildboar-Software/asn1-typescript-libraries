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
import { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.js";
export { Attribute, _decode_Attribute, _encode_Attribute } from "@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.js";


/* START_OF_SYMBOL_DEFINITION MonitoredAttributes */
/**
 * @summary MonitoredAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonitoredAttributes  ::=  SET OF Attribute
 * ```
 */
export
type MonitoredAttributes = Attribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MonitoredAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MonitoredAttributes */
let _cached_decoder_for_MonitoredAttributes: $.ASN1Decoder<MonitoredAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MonitoredAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_MonitoredAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) MonitoredAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MonitoredAttributes} The decoded data structure.
 */
export
function _decode_MonitoredAttributes (el: _Element) {
    if (!_cached_decoder_for_MonitoredAttributes) { _cached_decoder_for_MonitoredAttributes = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_MonitoredAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MonitoredAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MonitoredAttributes */
let _cached_encoder_for_MonitoredAttributes: $.ASN1Encoder<MonitoredAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MonitoredAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_MonitoredAttributes */
/**
 * @summary Encodes a(n) MonitoredAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoredAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoredAttributes (value: MonitoredAttributes, elGetter: $.ASN1Encoder<MonitoredAttributes>) {
    if (!_cached_encoder_for_MonitoredAttributes) { _cached_encoder_for_MonitoredAttributes = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_MonitoredAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MonitoredAttributes */

/* eslint-enable */
