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
import { BusinessGroup, _decode_BusinessGroup, _encode_BusinessGroup } from "../AIN-Parameters/BusinessGroup.ta.mjs";
// export { BusinessGroup, _decode_BusinessGroup, _encode_BusinessGroup } from "../AIN-Parameters/BusinessGroup.ta.mjs";


/**
 * @summary CallingPartyBGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingPartyBGID  ::=  [17] IMPLICIT BusinessGroup
 * ```
 */
export
type CallingPartyBGID = BusinessGroup; // DefinedType

let _cached_decoder_for_CallingPartyBGID: $.ASN1Decoder<CallingPartyBGID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingPartyBGID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingPartyBGID (el: _Element): CallingPartyBGID {
    if (!_cached_decoder_for_CallingPartyBGID) { _cached_decoder_for_CallingPartyBGID = $._decode_implicit<CallingPartyBGID>(() => _decode_BusinessGroup); }
    return _cached_decoder_for_CallingPartyBGID(el);
}

let _cached_encoder_for_CallingPartyBGID: $.ASN1Encoder<CallingPartyBGID> | null = null;

/**
 * @summary Encodes a(n) CallingPartyBGID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingPartyBGID, encoded as an ASN.1 Element.
 */
export
function _encode_CallingPartyBGID (value: CallingPartyBGID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingPartyBGID) { _cached_encoder_for_CallingPartyBGID = $._encode_implicit(_TagClass.context, 17, () => _encode_BusinessGroup, $.BER); }
    return _cached_encoder_for_CallingPartyBGID(value, elGetter);
}


/* eslint-enable */
