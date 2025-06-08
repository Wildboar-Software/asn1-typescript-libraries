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
import { PerceivedSeverity, _enum_for_PerceivedSeverity, PerceivedSeverity_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_critical /* IMPORTED_LONG_ENUMERATION_ITEM */, critical /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_major /* IMPORTED_LONG_ENUMERATION_ITEM */, major /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_minor /* IMPORTED_LONG_ENUMERATION_ITEM */, minor /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_warning /* IMPORTED_LONG_ENUMERATION_ITEM */, warning /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_cleared /* IMPORTED_LONG_ENUMERATION_ITEM */, cleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PerceivedSeverity, _encode_PerceivedSeverity } from "../Attribute-ASN1Module/PerceivedSeverity.ta";
export { PerceivedSeverity, _enum_for_PerceivedSeverity, PerceivedSeverity_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_critical /* IMPORTED_LONG_ENUMERATION_ITEM */, critical /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_major /* IMPORTED_LONG_ENUMERATION_ITEM */, major /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_minor /* IMPORTED_LONG_ENUMERATION_ITEM */, minor /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_warning /* IMPORTED_LONG_ENUMERATION_ITEM */, warning /* IMPORTED_SHORT_ENUMERATION_ITEM */, PerceivedSeverity_cleared /* IMPORTED_LONG_ENUMERATION_ITEM */, cleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PerceivedSeverity, _encode_PerceivedSeverity } from "../Attribute-ASN1Module/PerceivedSeverity.ta";


/* START_OF_SYMBOL_DEFINITION SecurityAlarmSeverity */
/**
 * @summary SecurityAlarmSeverity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityAlarmSeverity  ::= 
 *   PerceivedSeverity(indeterminate | critical | major | minor | warning)
 * ```
 */
export
type SecurityAlarmSeverity = PerceivedSeverity; // DefinedType
/* END_OF_SYMBOL_DEFINITION SecurityAlarmSeverity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmSeverity */
let _cached_decoder_for_SecurityAlarmSeverity: $.ASN1Decoder<SecurityAlarmSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityAlarmSeverity */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityAlarmSeverity */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityAlarmSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityAlarmSeverity} The decoded data structure.
 */
export
function _decode_SecurityAlarmSeverity (el: _Element) {
    if (!_cached_decoder_for_SecurityAlarmSeverity) { _cached_decoder_for_SecurityAlarmSeverity = _decode_PerceivedSeverity; }
    return _cached_decoder_for_SecurityAlarmSeverity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityAlarmSeverity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmSeverity */
let _cached_encoder_for_SecurityAlarmSeverity: $.ASN1Encoder<SecurityAlarmSeverity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityAlarmSeverity */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityAlarmSeverity */
/**
 * @summary Encodes a(n) SecurityAlarmSeverity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityAlarmSeverity, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityAlarmSeverity (value: SecurityAlarmSeverity, elGetter: $.ASN1Encoder<SecurityAlarmSeverity>) {
    if (!_cached_encoder_for_SecurityAlarmSeverity) { _cached_encoder_for_SecurityAlarmSeverity = _encode_PerceivedSeverity; }
    return _cached_encoder_for_SecurityAlarmSeverity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityAlarmSeverity */

/* eslint-enable */
