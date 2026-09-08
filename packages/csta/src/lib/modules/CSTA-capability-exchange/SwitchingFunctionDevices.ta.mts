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
 * @summary SwitchingFunctionDevices
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchingFunctionDevices  ::=  BIT STRING
 * {     segmentID                 ( 0),
 *     deviceListDeviceCategory         ( 1),
 *     deviceListNamedDeviceTypes         ( 2),
 *     deviceListDeviceAttributes         ( 3),
 *     deviceListDeviceModelName         ( 4),
 *     deviceListNidGroup            ( 6),
 *     privateData                 ( 5) }
 * ```
 */
export
type SwitchingFunctionDevices = BIT_STRING;

/**
 * @summary SwitchingFunctionDevices_segmentID
 * @constant
 */
export
const SwitchingFunctionDevices_segmentID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary segmentID
 * @constant
 */
export
const segmentID: number = SwitchingFunctionDevices_segmentID; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_deviceListDeviceCategory
 * @constant
 */
export
const SwitchingFunctionDevices_deviceListDeviceCategory: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary deviceListDeviceCategory
 * @constant
 */
export
const deviceListDeviceCategory: number = SwitchingFunctionDevices_deviceListDeviceCategory; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_deviceListNamedDeviceTypes
 * @constant
 */
export
const SwitchingFunctionDevices_deviceListNamedDeviceTypes: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary deviceListNamedDeviceTypes
 * @constant
 */
export
const deviceListNamedDeviceTypes: number = SwitchingFunctionDevices_deviceListNamedDeviceTypes; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_deviceListDeviceAttributes
 * @constant
 */
export
const SwitchingFunctionDevices_deviceListDeviceAttributes: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary deviceListDeviceAttributes
 * @constant
 */
export
const deviceListDeviceAttributes: number = SwitchingFunctionDevices_deviceListDeviceAttributes; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_deviceListDeviceModelName
 * @constant
 */
export
const SwitchingFunctionDevices_deviceListDeviceModelName: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary deviceListDeviceModelName
 * @constant
 */
export
const deviceListDeviceModelName: number = SwitchingFunctionDevices_deviceListDeviceModelName; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_deviceListNidGroup
 * @constant
 */
export
const SwitchingFunctionDevices_deviceListNidGroup: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary deviceListNidGroup
 * @constant
 */
export
const deviceListNidGroup: number = SwitchingFunctionDevices_deviceListNidGroup; /* SHORT_NAMED_BIT */

/**
 * @summary SwitchingFunctionDevices_privateData
 * @constant
 */
export
const SwitchingFunctionDevices_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SwitchingFunctionDevices_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwitchingFunctionDevices: $.ASN1Decoder<SwitchingFunctionDevices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwitchingFunctionDevices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwitchingFunctionDevices (el: _Element): SwitchingFunctionDevices {
    if (!_cached_decoder_for_SwitchingFunctionDevices) { _cached_decoder_for_SwitchingFunctionDevices = $._decodeBitString; }
    return _cached_decoder_for_SwitchingFunctionDevices(el);
}

let _cached_encoder_for_SwitchingFunctionDevices: $.ASN1Encoder<SwitchingFunctionDevices> | null = null;

/**
 * @summary Encodes a(n) SwitchingFunctionDevices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchingFunctionDevices, encoded as an ASN.1 Element.
 */
export
function _encode_SwitchingFunctionDevices (value: SwitchingFunctionDevices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwitchingFunctionDevices) { _cached_encoder_for_SwitchingFunctionDevices = $._encodeBitString; }
    return _cached_encoder_for_SwitchingFunctionDevices(value, elGetter);
}


/* eslint-enable */
