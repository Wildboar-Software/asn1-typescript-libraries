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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LCLS_ConfigurationPreference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCLS-ConfigurationPreference ::=  BIT STRING {
 *     forward-data-sending-indicator    (0),
 *     backward-data-sending-indicator    (1),
 *     forward-data-reception-indicator    (2),
 *     backward-data-reception-indicator    (3)} (SIZE (4..8))
 * ```
 */
export
type LCLS_ConfigurationPreference = BIT_STRING;

/**
 * @summary LCLS_ConfigurationPreference_forward_data_sending_indicator
 * @constant
 */
export
const LCLS_ConfigurationPreference_forward_data_sending_indicator: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forward_data_sending_indicator
 * @constant
 */
export
const forward_data_sending_indicator: number = LCLS_ConfigurationPreference_forward_data_sending_indicator; /* SHORT_NAMED_BIT */

/**
 * @summary LCLS_ConfigurationPreference_backward_data_sending_indicator
 * @constant
 */
export
const LCLS_ConfigurationPreference_backward_data_sending_indicator: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary backward_data_sending_indicator
 * @constant
 */
export
const backward_data_sending_indicator: number = LCLS_ConfigurationPreference_backward_data_sending_indicator; /* SHORT_NAMED_BIT */

/**
 * @summary LCLS_ConfigurationPreference_forward_data_reception_indicator
 * @constant
 */
export
const LCLS_ConfigurationPreference_forward_data_reception_indicator: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary forward_data_reception_indicator
 * @constant
 */
export
const forward_data_reception_indicator: number = LCLS_ConfigurationPreference_forward_data_reception_indicator; /* SHORT_NAMED_BIT */

/**
 * @summary LCLS_ConfigurationPreference_backward_data_reception_indicator
 * @constant
 */
export
const LCLS_ConfigurationPreference_backward_data_reception_indicator: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary backward_data_reception_indicator
 * @constant
 */
export
const backward_data_reception_indicator: number = LCLS_ConfigurationPreference_backward_data_reception_indicator; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) LCLS_ConfigurationPreference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCLS_ConfigurationPreference = (el: _Element): LCLS_ConfigurationPreference => {
    const value = $._decodeBitString(el);
    if (value.length < 4 || value.length > 8) {
        throw new ASN1SizeError("LCLS_ConfigurationPreference violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LCLS_ConfigurationPreference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCLS_ConfigurationPreference, encoded as an ASN.1 Element.
 */
export const _encode_LCLS_ConfigurationPreference = $._encodeBitString;


/* eslint-enable */
