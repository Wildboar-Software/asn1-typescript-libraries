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



/**
 * @summary ModemIdentity_Item_multimediaMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemIdentity-Item-multimediaMode ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ModemIdentity_Item_multimediaMode = BIT_STRING;

/**
 * @summary ModemIdentity_Item_multimediaMode_dataMode
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_dataMode: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary dataMode
 * @constant
 */
export
const dataMode: number = ModemIdentity_Item_multimediaMode_dataMode; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_faxT30
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_faxT30: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary faxT30
 * @constant
 */
export
const faxT30: number = ModemIdentity_Item_multimediaMode_faxT30; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_faxT30C
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_faxT30C: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary faxT30C
 * @constant
 */
export
const faxT30C: number = ModemIdentity_Item_multimediaMode_faxT30C; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_fAXT30F
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_fAXT30F: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary fAXT30F
 * @constant
 */
export
const fAXT30F: number = ModemIdentity_Item_multimediaMode_fAXT30F; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_voiceV253
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_voiceV253: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary voiceV253
 * @constant
 */
export
const voiceV253: number = ModemIdentity_Item_multimediaMode_voiceV253; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_sVDV70
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_sVDV70: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary sVDV70
 * @constant
 */
export
const sVDV70: number = ModemIdentity_Item_multimediaMode_sVDV70; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_sVDV61
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_sVDV61: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary sVDV61
 * @constant
 */
export
const sVDV61: number = ModemIdentity_Item_multimediaMode_sVDV61; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_vidTelH324
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_vidTelH324: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary vidTelH324
 * @constant
 */
export
const vidTelH324: number = ModemIdentity_Item_multimediaMode_vidTelH324; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_v80other
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_v80other: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary v80other
 * @constant
 */
export
const v80other: number = ModemIdentity_Item_multimediaMode_v80other; /* SHORT_NAMED_BIT */

/**
 * @summary ModemIdentity_Item_multimediaMode_v18Text
 * @constant
 */
export
const ModemIdentity_Item_multimediaMode_v18Text: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary v18Text
 * @constant
 */
export
const v18Text: number = ModemIdentity_Item_multimediaMode_v18Text; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ModemIdentity_Item_multimediaMode: $.ASN1Decoder<ModemIdentity_Item_multimediaMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemIdentity_Item_multimediaMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemIdentity_Item_multimediaMode (el: _Element): ModemIdentity_Item_multimediaMode {
    if (!_cached_decoder_for_ModemIdentity_Item_multimediaMode) { _cached_decoder_for_ModemIdentity_Item_multimediaMode = $._decodeBitString; }
    return _cached_decoder_for_ModemIdentity_Item_multimediaMode(el);
}

let _cached_encoder_for_ModemIdentity_Item_multimediaMode: $.ASN1Encoder<ModemIdentity_Item_multimediaMode> | null = null;

/**
 * @summary Encodes a(n) ModemIdentity_Item_multimediaMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemIdentity_Item_multimediaMode, encoded as an ASN.1 Element.
 */
export
function _encode_ModemIdentity_Item_multimediaMode (value: ModemIdentity_Item_multimediaMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemIdentity_Item_multimediaMode) { _cached_encoder_for_ModemIdentity_Item_multimediaMode = $._encodeBitString; }
    return _cached_encoder_for_ModemIdentity_Item_multimediaMode(value, elGetter);
}


/* eslint-enable */
