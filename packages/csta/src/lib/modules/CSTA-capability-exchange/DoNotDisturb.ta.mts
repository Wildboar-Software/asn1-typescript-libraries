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
 * @summary DoNotDisturb
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DoNotDisturb  ::=  BIT STRING
 * {     callOriginationParameter         ( 0),     -- optional parameters
 *     callOriginationInternal         ( 1),     -- optional parameters
 *     callOriginationExternal         ( 2),     -- optional parameters
 *     callingDeviceList             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type DoNotDisturb = BIT_STRING;

/**
 * @summary DoNotDisturb_callOriginationParameter
 * @constant
 */
export
const DoNotDisturb_callOriginationParameter: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationParameter
 * @constant
 */
export
const callOriginationParameter: number = DoNotDisturb_callOriginationParameter; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callOriginationInternal
 * @constant
 */
export
const DoNotDisturb_callOriginationInternal: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationInternal
 * @constant
 */
export
const callOriginationInternal: number = DoNotDisturb_callOriginationInternal; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callOriginationExternal
 * @constant
 */
export
const DoNotDisturb_callOriginationExternal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callOriginationExternal
 * @constant
 */
export
const callOriginationExternal: number = DoNotDisturb_callOriginationExternal; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_callingDeviceList
 * @constant
 */
export
const DoNotDisturb_callingDeviceList: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceList
 * @constant
 */
export
const callingDeviceList: number = DoNotDisturb_callingDeviceList; /* SHORT_NAMED_BIT */

/**
 * @summary DoNotDisturb_privateData
 * @constant
 */
export
const DoNotDisturb_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DoNotDisturb_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DoNotDisturb: $.ASN1Decoder<DoNotDisturb> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DoNotDisturb
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DoNotDisturb (el: _Element): DoNotDisturb {
    if (!_cached_decoder_for_DoNotDisturb) { _cached_decoder_for_DoNotDisturb = $._decodeBitString; }
    return _cached_decoder_for_DoNotDisturb(el);
}

let _cached_encoder_for_DoNotDisturb: $.ASN1Encoder<DoNotDisturb> | null = null;

/**
 * @summary Encodes a(n) DoNotDisturb into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DoNotDisturb, encoded as an ASN.1 Element.
 */
export
function _encode_DoNotDisturb (value: DoNotDisturb, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DoNotDisturb) { _cached_encoder_for_DoNotDisturb = $._encodeBitString; }
    return _cached_encoder_for_DoNotDisturb(value, elGetter);
}


/* eslint-enable */
