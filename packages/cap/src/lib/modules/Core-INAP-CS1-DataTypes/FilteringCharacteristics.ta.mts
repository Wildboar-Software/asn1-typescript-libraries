/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";


/**
 * @summary FilteringCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteringCharacteristics      ::=  CHOICE {
 *      interval      [0] INTEGER (-1..32000),
 *      numberOfCalls      [1] Integer4
 *      }
 * ```
 */
export
type FilteringCharacteristics =
    { interval: INTEGER } /* CHOICE_ALT_ROOT */
    | { numberOfCalls: Integer4 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FilteringCharacteristics: $.ASN1Decoder<FilteringCharacteristics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteringCharacteristics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteringCharacteristics (el: _Element): FilteringCharacteristics {
    if (!_cached_decoder_for_FilteringCharacteristics) { _cached_decoder_for_FilteringCharacteristics = $._decode_inextensible_choice<FilteringCharacteristics>({
    "CONTEXT 0": [ "interval", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < -1n || value > 32000n) : (value < -1 || value > 32000))) {
        throw new ASN1OverflowError("FilteringCharacteristics.interval violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "numberOfCalls", $._decode_implicit<Integer4>(() => _decode_Integer4) ]
}); }
    return _cached_decoder_for_FilteringCharacteristics(el);
}

let _cached_encoder_for_FilteringCharacteristics: $.ASN1Encoder<FilteringCharacteristics> | null = null;

/**
 * @summary Encodes a(n) FilteringCharacteristics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteringCharacteristics, encoded as an ASN.1 Element.
 */
export
function _encode_FilteringCharacteristics (value: FilteringCharacteristics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteringCharacteristics) { _cached_encoder_for_FilteringCharacteristics = $._encode_choice<FilteringCharacteristics>({
    "interval": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "numberOfCalls": $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER),
}, $.BER); }
    return _cached_encoder_for_FilteringCharacteristics(value, elGetter);
}


/* eslint-enable */
