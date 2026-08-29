/* eslint-disable */
import {
    INTEGER,
    REAL,
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



/**
 * @summary ObservedValue
 * @description
 * 
 * Syntax of the generic gauge attribute: integer or real current value of a
 * dynamic variable. May move up or down by arbitrary amounts; it does not wrap
 * — values that would exceed the specified min/max stay at that bound. GET-only
 * so multiple managers can share it. MATCHES FOR EQUALITY, ORDERING. At most
 * one (possibly multi-level) `GaugeThreshold` and one min plus one max
 * tide-mark. ITU-T Rec. X.721 (02/92) §9.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedValue  ::=  CHOICE {integer  INTEGER,
 *                           real     REAL
 * }
 * ```
 */
export
type ObservedValue =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { real: REAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObservedValue: $.ASN1Decoder<ObservedValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservedValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservedValue} The decoded data structure.
 */
export
function _decode_ObservedValue (el: _Element): ObservedValue {
    if (!_cached_decoder_for_ObservedValue) { _cached_decoder_for_ObservedValue = $._decode_inextensible_choice<ObservedValue>({
    "UNIVERSAL 2": [ "integer", $._decodeInteger ],
    "UNIVERSAL 9": [ "real", $._decodeReal ]
}); }
    return _cached_decoder_for_ObservedValue(el);
}

let _cached_encoder_for_ObservedValue: $.ASN1Encoder<ObservedValue> | null = null;

/**
 * @summary Encodes a(n) ObservedValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservedValue, encoded as an ASN.1 Element.
 */
export
function _encode_ObservedValue (value: ObservedValue, elGetter: $.ASN1Encoder<ObservedValue>): _Element {
    if (!_cached_encoder_for_ObservedValue) { _cached_encoder_for_ObservedValue = $._encode_choice<ObservedValue>({
    "integer": $._encodeInteger,
    "real": $._encodeReal,
}, $.BER); }
    return _cached_encoder_for_ObservedValue(value, elGetter);
}


/* eslint-enable */
