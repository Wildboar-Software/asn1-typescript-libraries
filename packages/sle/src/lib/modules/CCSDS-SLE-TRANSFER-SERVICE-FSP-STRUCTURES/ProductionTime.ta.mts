/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";


/**
 * @summary ProductionTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProductionTime           ::=    CHOICE
 * {  unspecified       [0]   NULL
 * ,  specified         [1]   Time
 * }
 * ```
 */
export
type ProductionTime =
    { unspecified: NULL } /* CHOICE_ALT_ROOT */
    | { specified: Time } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProductionTime: $.ASN1Decoder<ProductionTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProductionTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProductionTime (el: _Element): ProductionTime {
    if (!_cached_decoder_for_ProductionTime) { _cached_decoder_for_ProductionTime = $._decode_inextensible_choice<ProductionTime>({
    "CONTEXT 0": [ "unspecified", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "specified", $._decode_explicit<Time>(() => _decode_Time) ]
}); }
    return _cached_decoder_for_ProductionTime(el);
}

let _cached_encoder_for_ProductionTime: $.ASN1Encoder<ProductionTime> | null = null;

/**
 * @summary Encodes a(n) ProductionTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProductionTime, encoded as an ASN.1 Element.
 */
export
function _encode_ProductionTime (value: ProductionTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProductionTime) { _cached_encoder_for_ProductionTime = $._encode_choice<ProductionTime>({
    "unspecified": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "specified": $._encode_explicit(_TagClass.context, 1, () => _encode_Time, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProductionTime(value, elGetter);
}


/* eslint-enable */
