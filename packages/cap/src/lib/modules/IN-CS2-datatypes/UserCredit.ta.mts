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
import { Credit, _decode_Credit, _encode_Credit } from "../IN-CS2-datatypes/Credit.ta.mjs";
// export { Credit, _decode_Credit, _encode_Credit } from "../IN-CS2-datatypes/Credit.ta.mjs";


/**
 * @summary UserCredit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCredit{PARAMETERS-BOUND:bound}  ::= 
 *   Credit{bound}
 * ```
 */
export
type UserCredit = Credit; // DefinedType

let _cached_decoder_for_UserCredit: $.ASN1Decoder<UserCredit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserCredit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserCredit (el: _Element): UserCredit {
    if (!_cached_decoder_for_UserCredit) { _cached_decoder_for_UserCredit = _decode_Credit; }
    return _cached_decoder_for_UserCredit(el);
}

let _cached_encoder_for_UserCredit: $.ASN1Encoder<UserCredit> | null = null;

/**
 * @summary Encodes a(n) UserCredit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserCredit, encoded as an ASN.1 Element.
 */
export
function _encode_UserCredit (value: UserCredit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserCredit) { _cached_encoder_for_UserCredit = _encode_Credit; }
    return _cached_encoder_for_UserCredit(value, elGetter);
}


/* eslint-enable */
