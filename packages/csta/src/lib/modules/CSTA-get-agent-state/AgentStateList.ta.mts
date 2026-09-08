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
import { AgentStateEntry, _decode_AgentStateEntry, _encode_AgentStateEntry } from "../CSTA-get-agent-state/AgentStateEntry.ta.mjs";
// export { AgentStateEntry, _decode_AgentStateEntry, _encode_AgentStateEntry } from "../CSTA-get-agent-state/AgentStateEntry.ta.mjs";


/**
 * @summary AgentStateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgentStateList  ::=  SEQUENCE SIZE (1..32) OF AgentStateEntry
 * ```
 */
export
type AgentStateList = AgentStateEntry[]; // SequenceOfType

let _cached_decoder_for_AgentStateList: $.ASN1Decoder<AgentStateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AgentStateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AgentStateList (el: _Element): AgentStateList {
    if (!_cached_decoder_for_AgentStateList) { _cached_decoder_for_AgentStateList = $._decodeSequenceOf<AgentStateEntry>(() => _decode_AgentStateEntry); }
    return _cached_decoder_for_AgentStateList(el);
}

let _cached_encoder_for_AgentStateList: $.ASN1Encoder<AgentStateList> | null = null;

/**
 * @summary Encodes a(n) AgentStateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgentStateList, encoded as an ASN.1 Element.
 */
export
function _encode_AgentStateList (value: AgentStateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AgentStateList) { _cached_encoder_for_AgentStateList = $._encodeSequenceOf<AgentStateEntry>(() => _encode_AgentStateEntry, $.BER); }
    return _cached_encoder_for_AgentStateList(value, elGetter);
}


/* eslint-enable */
