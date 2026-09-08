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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";


/**
 * @summary CSTAObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAObject  ::=  CHOICE
 * {    deviceObject DeviceID,
 *     callObject   ConnectionID }
 * ```
 */
export
type CSTAObject =
    { deviceObject: DeviceID } /* CHOICE_ALT_ROOT */
    | { callObject: ConnectionID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CSTAObject: $.ASN1Decoder<CSTAObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAObject (el: _Element): CSTAObject {
    if (!_cached_decoder_for_CSTAObject) { _cached_decoder_for_CSTAObject = $._decode_inextensible_choice<CSTAObject>({
    "UNIVERSAL 16": [ "deviceObject", _decode_DeviceID ],
    "APPLICATION 11": [ "callObject", _decode_ConnectionID ]
}); }
    return _cached_decoder_for_CSTAObject(el);
}

let _cached_encoder_for_CSTAObject: $.ASN1Encoder<CSTAObject> | null = null;

/**
 * @summary Encodes a(n) CSTAObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAObject, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAObject (value: CSTAObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAObject) { _cached_encoder_for_CSTAObject = $._encode_choice<CSTAObject>({
    "deviceObject": _encode_DeviceID,
    "callObject": _encode_ConnectionID,
}, $.BER); }
    return _cached_encoder_for_CSTAObject(value, elGetter);
}


/* eslint-enable */
