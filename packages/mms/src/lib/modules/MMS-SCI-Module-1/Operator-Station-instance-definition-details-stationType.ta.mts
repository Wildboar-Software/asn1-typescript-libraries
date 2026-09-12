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
 * @summary Operator_Station_instance_definition_details_stationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance-definition-details-stationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Operator_Station_instance_definition_details_stationType {
    entry = 0,
    display = 1,
    entry_display = 2,
}

/**
 * @summary Operator_Station_instance_definition_details_stationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance-definition-details-stationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Operator_Station_instance_definition_details_stationType = _enum_for_Operator_Station_instance_definition_details_stationType;

/**
 * @summary Operator_Station_instance_definition_details_stationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Operator-Station-instance-definition-details-stationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Operator_Station_instance_definition_details_stationType = _enum_for_Operator_Station_instance_definition_details_stationType;

/**
 * @summary Operator_Station_instance_definition_details_stationType_entry
 * @constant
 * @type {number}
 */
export
const Operator_Station_instance_definition_details_stationType_entry: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.entry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entry
 * @constant
 * @type {number}
 */
export
const entry: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.entry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Operator_Station_instance_definition_details_stationType_display
 * @constant
 * @type {number}
 */
export
const Operator_Station_instance_definition_details_stationType_display: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.display; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary display
 * @constant
 * @type {number}
 */
export
const display: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.display; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Operator_Station_instance_definition_details_stationType_entry_display
 * @constant
 * @type {number}
 */
export
const Operator_Station_instance_definition_details_stationType_entry_display: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.entry_display; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary entry_display
 * @constant
 * @type {number}
 */
export
const entry_display: Operator_Station_instance_definition_details_stationType = Operator_Station_instance_definition_details_stationType.entry_display; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Operator_Station_instance_definition_details_stationType: $.ASN1Decoder<Operator_Station_instance_definition_details_stationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Operator_Station_instance_definition_details_stationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Operator_Station_instance_definition_details_stationType (el: _Element): Operator_Station_instance_definition_details_stationType {
    if (!_cached_decoder_for_Operator_Station_instance_definition_details_stationType) { _cached_decoder_for_Operator_Station_instance_definition_details_stationType = $._decodeEnumerated; }
    return _cached_decoder_for_Operator_Station_instance_definition_details_stationType(el);
}

let _cached_encoder_for_Operator_Station_instance_definition_details_stationType: $.ASN1Encoder<Operator_Station_instance_definition_details_stationType> | null = null;

/**
 * @summary Encodes a(n) Operator_Station_instance_definition_details_stationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Operator_Station_instance_definition_details_stationType, encoded as an ASN.1 Element.
 */
export
function _encode_Operator_Station_instance_definition_details_stationType (value: Operator_Station_instance_definition_details_stationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Operator_Station_instance_definition_details_stationType) { _cached_encoder_for_Operator_Station_instance_definition_details_stationType = $._encodeEnumerated; }
    return _cached_encoder_for_Operator_Station_instance_definition_details_stationType(value, elGetter);
}


/* eslint-enable */
