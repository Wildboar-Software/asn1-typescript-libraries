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
import { OtherHashValue, _decode_OtherHashValue, _encode_OtherHashValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashValue.ta.mjs";
export { OtherHashValue, _decode_OtherHashValue, _encode_OtherHashValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashValue.ta.mjs";
import { OtherHashAlgAndValue, _decode_OtherHashAlgAndValue, _encode_OtherHashAlgAndValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashAlgAndValue.ta.mjs";
export { OtherHashAlgAndValue, _decode_OtherHashAlgAndValue, _encode_OtherHashAlgAndValue } from "../ETS-ElectronicSignatureFormats-ExplicitSyntax97/OtherHashAlgAndValue.ta.mjs";


/* START_OF_SYMBOL_DEFINITION OtherHash */
/**
 * @summary OtherHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherHash  ::=  CHOICE {
 *     sha1Hash    OtherHashValue, -- This contains a SHA-1 hash
 *     otherHash   OtherHashAlgAndValue }
 * ```
 */
export
type OtherHash =
    { sha1Hash: OtherHashValue } /* CHOICE_ALT_ROOT */
    | { otherHash: OtherHashAlgAndValue } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OtherHash */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherHash */
let _cached_decoder_for_OtherHash: $.ASN1Decoder<OtherHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherHash */

/* START_OF_SYMBOL_DEFINITION _decode_OtherHash */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherHash
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherHash} The decoded data structure.
 */
export
function _decode_OtherHash (el: _Element) {
    if (!_cached_decoder_for_OtherHash) { _cached_decoder_for_OtherHash = $._decode_inextensible_choice<OtherHash>({
    "UNIVERSAL 4": [ "sha1Hash", _decode_OtherHashValue ],
    "UNIVERSAL 16": [ "otherHash", _decode_OtherHashAlgAndValue ]
}); }
    return _cached_decoder_for_OtherHash(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherHash */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherHash */
let _cached_encoder_for_OtherHash: $.ASN1Encoder<OtherHash> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherHash */

/* START_OF_SYMBOL_DEFINITION _encode_OtherHash */
/**
 * @summary Encodes a(n) OtherHash into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherHash, encoded as an ASN.1 Element.
 */
export
function _encode_OtherHash (value: OtherHash, elGetter: $.ASN1Encoder<OtherHash>) {
    if (!_cached_encoder_for_OtherHash) { _cached_encoder_for_OtherHash = $._encode_choice<OtherHash>({
    "sha1Hash": _encode_OtherHashValue,
    "otherHash": _encode_OtherHashAlgAndValue,
}, $.BER); }
    return _cached_encoder_for_OtherHash(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherHash */

/* eslint-enable */
