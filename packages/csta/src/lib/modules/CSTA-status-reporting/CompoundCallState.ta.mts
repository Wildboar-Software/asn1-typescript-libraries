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
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";


/**
 * @summary CompoundCallState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundCallState  ::=  SEQUENCE OF LocalConnectionState
 * ```
 */
export
type CompoundCallState = LocalConnectionState[]; // SequenceOfType

let _cached_decoder_for_CompoundCallState: $.ASN1Decoder<CompoundCallState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundCallState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundCallState (el: _Element): CompoundCallState {
    if (!_cached_decoder_for_CompoundCallState) { _cached_decoder_for_CompoundCallState = $._decodeSequenceOf<LocalConnectionState>(() => _decode_LocalConnectionState); }
    return _cached_decoder_for_CompoundCallState(el);
}

let _cached_encoder_for_CompoundCallState: $.ASN1Encoder<CompoundCallState> | null = null;

/**
 * @summary Encodes a(n) CompoundCallState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundCallState, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundCallState (value: CompoundCallState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundCallState) { _cached_encoder_for_CompoundCallState = $._encodeSequenceOf<LocalConnectionState>(() => _encode_LocalConnectionState, $.BER); }
    return _cached_encoder_for_CompoundCallState(value, elGetter);
}


/* eslint-enable */
