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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary ObservedValue
 * @description
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
function _decode_ObservedValue (el: _Element) {
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
function _encode_ObservedValue (value: ObservedValue, elGetter: $.ASN1Encoder<ObservedValue>) {
    if (!_cached_encoder_for_ObservedValue) { _cached_encoder_for_ObservedValue = $._encode_choice<ObservedValue>({
    "integer": $._encodeInteger,
    "real": $._encodeReal,
}, $.BER); }
    return _cached_encoder_for_ObservedValue(value, elGetter);
}


/* eslint-enable */
