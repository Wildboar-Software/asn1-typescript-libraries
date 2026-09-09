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
import { CurrencyValue, _decode_CurrencyValue, _encode_CurrencyValue } from "../IN-CS2-datatypes/CurrencyValue.ta.mjs";
// export { CurrencyValue, _decode_CurrencyValue, _encode_CurrencyValue } from "../IN-CS2-datatypes/CurrencyValue.ta.mjs";
import { CreditUnit, _decode_CreditUnit, _encode_CreditUnit } from "../IN-CS2-datatypes/CreditUnit.ta.mjs";
// export { CreditUnit, _decode_CreditUnit, _encode_CreditUnit } from "../IN-CS2-datatypes/CreditUnit.ta.mjs";


/**
 * @summary Credit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Credit{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   currency  CurrencyValue{bound},
 *   units     CreditUnit
 * }
 * ```
 */
export
type Credit =
    { currency: CurrencyValue } /* CHOICE_ALT_ROOT */
    | { units: CreditUnit } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Credit: $.ASN1Decoder<Credit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Credit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Credit (el: _Element): Credit {
    if (!_cached_decoder_for_Credit) { _cached_decoder_for_Credit = $._decode_inextensible_choice<Credit>({
    "UNIVERSAL 16": [ "currency", _decode_CurrencyValue ],
    "UNIVERSAL 2": [ "units", _decode_CreditUnit ]
}); }
    return _cached_decoder_for_Credit(el);
}

let _cached_encoder_for_Credit: $.ASN1Encoder<Credit> | null = null;

/**
 * @summary Encodes a(n) Credit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Credit, encoded as an ASN.1 Element.
 */
export
function _encode_Credit (value: Credit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Credit) { _cached_encoder_for_Credit = $._encode_choice<Credit>({
    "currency": _encode_CurrencyValue,
    "units": _encode_CreditUnit,
}, $.BER); }
    return _cached_encoder_for_Credit(value, elGetter);
}


/* eslint-enable */
