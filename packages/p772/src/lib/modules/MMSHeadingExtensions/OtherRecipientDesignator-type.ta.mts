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
 * @summary OtherRecipientDesignator_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientDesignator-type ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type OtherRecipientDesignator_type = INTEGER;

/**
 * @summary OtherRecipientDesignator_type_primary
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_primary: OtherRecipientDesignator_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_primary
 * @constant
 * @type {number}
 */
export
const primary: OtherRecipientDesignator_type = OtherRecipientDesignator_type_primary; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_copy: OtherRecipientDesignator_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @constant
 * @type {number}
 */
export
const copy: OtherRecipientDesignator_type = OtherRecipientDesignator_type_copy; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_OtherRecipientDesignator_type: $.ASN1Decoder<OtherRecipientDesignator_type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientDesignator_type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherRecipientDesignator_type (el: _Element): OtherRecipientDesignator_type {
    if (!_cached_decoder_for_OtherRecipientDesignator_type) { _cached_decoder_for_OtherRecipientDesignator_type = $._decodeInteger; }
    return _cached_decoder_for_OtherRecipientDesignator_type(el);
}

let _cached_encoder_for_OtherRecipientDesignator_type: $.ASN1Encoder<OtherRecipientDesignator_type> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientDesignator_type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientDesignator_type, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRecipientDesignator_type (value: OtherRecipientDesignator_type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherRecipientDesignator_type) { _cached_encoder_for_OtherRecipientDesignator_type = $._encodeInteger; }
    return _cached_encoder_for_OtherRecipientDesignator_type(value, elGetter);
}


/* eslint-enable */
