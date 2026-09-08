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
 * @summary GetDoNotDisturb
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDoNotDisturb  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     callOriginParameterInAck         ( 1),     -- optional parameters
 *     callOriginInternInAck             ( 2),     -- optional parameters
 *     callOriginExternInAck             ( 3),     -- optional parameters
 *     callingDeviceListInAck             ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type GetDoNotDisturb = BIT_STRING;

/**
 * @summary GetDoNotDisturb_privateData
 * @constant
 */
export
const GetDoNotDisturb_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetDoNotDisturb_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginParameterInAck
 * @constant
 */
export
const GetDoNotDisturb_callOriginParameterInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary callOriginParameterInAck
 * @constant
 */
export
const callOriginParameterInAck: number = GetDoNotDisturb_callOriginParameterInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginInternInAck
 * @constant
 */
export
const GetDoNotDisturb_callOriginInternInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary callOriginInternInAck
 * @constant
 */
export
const callOriginInternInAck: number = GetDoNotDisturb_callOriginInternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callOriginExternInAck
 * @constant
 */
export
const GetDoNotDisturb_callOriginExternInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callOriginExternInAck
 * @constant
 */
export
const callOriginExternInAck: number = GetDoNotDisturb_callOriginExternInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_callingDeviceListInAck
 * @constant
 */
export
const GetDoNotDisturb_callingDeviceListInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callingDeviceListInAck
 * @constant
 */
export
const callingDeviceListInAck: number = GetDoNotDisturb_callingDeviceListInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetDoNotDisturb_privateDataInAck
 * @constant
 */
export
const GetDoNotDisturb_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetDoNotDisturb_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetDoNotDisturb: $.ASN1Decoder<GetDoNotDisturb> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDoNotDisturb
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDoNotDisturb (el: _Element): GetDoNotDisturb {
    if (!_cached_decoder_for_GetDoNotDisturb) { _cached_decoder_for_GetDoNotDisturb = $._decodeBitString; }
    return _cached_decoder_for_GetDoNotDisturb(el);
}

let _cached_encoder_for_GetDoNotDisturb: $.ASN1Encoder<GetDoNotDisturb> | null = null;

/**
 * @summary Encodes a(n) GetDoNotDisturb into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDoNotDisturb, encoded as an ASN.1 Element.
 */
export
function _encode_GetDoNotDisturb (value: GetDoNotDisturb, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDoNotDisturb) { _cached_encoder_for_GetDoNotDisturb = $._encodeBitString; }
    return _cached_encoder_for_GetDoNotDisturb(value, elGetter);
}


/* eslint-enable */
