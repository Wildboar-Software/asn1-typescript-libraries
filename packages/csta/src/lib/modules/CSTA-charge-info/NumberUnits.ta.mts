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
import { NumberOfChargingUnits, _decode_NumberOfChargingUnits, _encode_NumberOfChargingUnits } from "../CSTA-charge-info/NumberOfChargingUnits.ta.mjs";
// export { NumberOfChargingUnits, _decode_NumberOfChargingUnits, _encode_NumberOfChargingUnits } from "../CSTA-charge-info/NumberOfChargingUnits.ta.mjs";
import { NumberOfCurrencyUnits, _decode_NumberOfCurrencyUnits, _encode_NumberOfCurrencyUnits } from "../CSTA-charge-info/NumberOfCurrencyUnits.ta.mjs";
// export { NumberOfCurrencyUnits, _decode_NumberOfCurrencyUnits, _encode_NumberOfCurrencyUnits } from "../CSTA-charge-info/NumberOfCurrencyUnits.ta.mjs";


/**
 * @summary NumberUnits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberUnits  ::=  CHOICE
 * {     numberOfChargeUnits         [0] IMPLICIT     NumberOfChargingUnits,
 *     numberOfCurrencyUnits         [1] IMPLICIT     NumberOfCurrencyUnits }
 * ```
 */
export
type NumberUnits =
    { numberOfChargeUnits: NumberOfChargingUnits } /* CHOICE_ALT_ROOT */
    | { numberOfCurrencyUnits: NumberOfCurrencyUnits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NumberUnits: $.ASN1Decoder<NumberUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberUnits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberUnits (el: _Element): NumberUnits {
    if (!_cached_decoder_for_NumberUnits) { _cached_decoder_for_NumberUnits = $._decode_inextensible_choice<NumberUnits>({
    "CONTEXT 0": [ "numberOfChargeUnits", $._decode_implicit<NumberOfChargingUnits>(() => _decode_NumberOfChargingUnits) ],
    "CONTEXT 1": [ "numberOfCurrencyUnits", $._decode_implicit<NumberOfCurrencyUnits>(() => _decode_NumberOfCurrencyUnits) ]
}); }
    return _cached_decoder_for_NumberUnits(el);
}

let _cached_encoder_for_NumberUnits: $.ASN1Encoder<NumberUnits> | null = null;

/**
 * @summary Encodes a(n) NumberUnits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberUnits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberUnits (value: NumberUnits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberUnits) { _cached_encoder_for_NumberUnits = $._encode_choice<NumberUnits>({
    "numberOfChargeUnits": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberOfChargingUnits, $.BER),
    "numberOfCurrencyUnits": $._encode_implicit(_TagClass.context, 1, () => _encode_NumberOfCurrencyUnits, $.BER),
}, $.BER); }
    return _cached_encoder_for_NumberUnits(value, elGetter);
}


/* eslint-enable */
