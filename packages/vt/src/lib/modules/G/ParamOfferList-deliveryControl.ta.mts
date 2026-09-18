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
 * @summary ParamOfferList_deliveryControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParamOfferList-deliveryControl ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParamOfferList_deliveryControl = BIT_STRING;

/**
 * @summary ParamOfferList_deliveryControl_none
 * @constant
 */
export
const ParamOfferList_deliveryControl_none: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary none
 * @constant
 */
export
const none: number = ParamOfferList_deliveryControl_none; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_simple
 * @constant
 */
export
const ParamOfferList_deliveryControl_simple: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary simple
 * @constant
 */
export
const simple: number = ParamOfferList_deliveryControl_simple; /* SHORT_NAMED_BIT */

/**
 * @summary ParamOfferList_deliveryControl_quarantine
 * @constant
 */
export
const ParamOfferList_deliveryControl_quarantine: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary quarantine
 * @constant
 */
export
const quarantine: number = ParamOfferList_deliveryControl_quarantine; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParamOfferList_deliveryControl: $.ASN1Decoder<ParamOfferList_deliveryControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParamOfferList_deliveryControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParamOfferList_deliveryControl (el: _Element): ParamOfferList_deliveryControl {
    if (!_cached_decoder_for_ParamOfferList_deliveryControl) { _cached_decoder_for_ParamOfferList_deliveryControl = $._decodeBitString; }
    return _cached_decoder_for_ParamOfferList_deliveryControl(el);
}

let _cached_encoder_for_ParamOfferList_deliveryControl: $.ASN1Encoder<ParamOfferList_deliveryControl> | null = null;

/**
 * @summary Encodes a(n) ParamOfferList_deliveryControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParamOfferList_deliveryControl, encoded as an ASN.1 Element.
 */
export
function _encode_ParamOfferList_deliveryControl (value: ParamOfferList_deliveryControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParamOfferList_deliveryControl) { _cached_encoder_for_ParamOfferList_deliveryControl = $._encodeBitString; }
    return _cached_encoder_for_ParamOfferList_deliveryControl(value, elGetter);
}


/* eslint-enable */
