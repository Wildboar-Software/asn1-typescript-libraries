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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary Entry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Entry  ::=  CHOICE {
 *   agreements       [0]  OBJECT IDENTIFIER,
 *   networkSpecific  [1]  Integer4
 * }
 * ```
 */
export
type Entry =
    { agreements: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { networkSpecific: Integer4 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Entry: $.ASN1Decoder<Entry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Entry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Entry (el: _Element): Entry {
    if (!_cached_decoder_for_Entry) { _cached_decoder_for_Entry = $._decode_inextensible_choice<Entry>({
    "CONTEXT 0": [ "agreements", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "networkSpecific", $._decode_implicit<Integer4>(() => _decode_Integer4) ]
}); }
    return _cached_decoder_for_Entry(el);
}

let _cached_encoder_for_Entry: $.ASN1Encoder<Entry> | null = null;

/**
 * @summary Encodes a(n) Entry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry, encoded as an ASN.1 Element.
 */
export
function _encode_Entry (value: Entry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Entry) { _cached_encoder_for_Entry = $._encode_choice<Entry>({
    "agreements": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "networkSpecific": $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER),
}, $.BER); }
    return _cached_encoder_for_Entry(value, elGetter);
}


/* eslint-enable */
