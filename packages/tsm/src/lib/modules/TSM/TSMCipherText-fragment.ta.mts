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
import { GenericStreamCipher, _decode_GenericStreamCipher, _encode_GenericStreamCipher } from "../TSM/GenericStreamCipher.ta.mjs";
// export { GenericStreamCipher, _decode_GenericStreamCipher, _encode_GenericStreamCipher } from "../TSM/GenericStreamCipher.ta.mjs";
import { GenericBlockCipher, _decode_GenericBlockCipher, _encode_GenericBlockCipher } from "../TSM/GenericBlockCipher.ta.mjs";
// export { GenericBlockCipher, _decode_GenericBlockCipher, _encode_GenericBlockCipher } from "../TSM/GenericBlockCipher.ta.mjs";


/**
 * @summary TSMCipherText_fragment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMCipherText-fragment ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TSMCipherText_fragment =
    { stream: GenericStreamCipher } /* CHOICE_ALT_ROOT */
    | { block: GenericBlockCipher } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSMCipherText_fragment: $.ASN1Decoder<TSMCipherText_fragment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMCipherText_fragment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMCipherText_fragment (el: _Element): TSMCipherText_fragment {
    if (!_cached_decoder_for_TSMCipherText_fragment) { _cached_decoder_for_TSMCipherText_fragment = $._decode_inextensible_choice<TSMCipherText_fragment>({
    "CONTEXT 0": [ "stream", _decode_GenericStreamCipher ],
    "CONTEXT 1": [ "block", _decode_GenericBlockCipher ]
}); }
    return _cached_decoder_for_TSMCipherText_fragment(el);
}

let _cached_encoder_for_TSMCipherText_fragment: $.ASN1Encoder<TSMCipherText_fragment> | null = null;

/**
 * @summary Encodes a(n) TSMCipherText_fragment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMCipherText_fragment, encoded as an ASN.1 Element.
 */
export
function _encode_TSMCipherText_fragment (value: TSMCipherText_fragment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMCipherText_fragment) { _cached_encoder_for_TSMCipherText_fragment = $._encode_choice<TSMCipherText_fragment>({
    "stream": _encode_GenericStreamCipher,
    "block": _encode_GenericBlockCipher,
}, $.BER); }
    return _cached_encoder_for_TSMCipherText_fragment(value, elGetter);
}


/* eslint-enable */
