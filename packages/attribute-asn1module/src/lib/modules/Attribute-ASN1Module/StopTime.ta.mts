/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
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
 * @summary StopTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopTime  ::=  CHOICE {specific   GeneralizedTime,
 *                      continual  NULL
 * }
 * ```
 */
export
type StopTime =
    { specific: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { continual: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StopTime: $.ASN1Decoder<StopTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StopTime} The decoded data structure.
 */
export
function _decode_StopTime (el: _Element) {
    if (!_cached_decoder_for_StopTime) { _cached_decoder_for_StopTime = $._decode_inextensible_choice<StopTime>({
    "UNIVERSAL 24": [ "specific", $._decodeGeneralizedTime ],
    "UNIVERSAL 5": [ "continual", $._decodeNull ]
}); }
    return _cached_decoder_for_StopTime(el);
}

let _cached_encoder_for_StopTime: $.ASN1Encoder<StopTime> | null = null;

/**
 * @summary Encodes a(n) StopTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopTime, encoded as an ASN.1 Element.
 */
export
function _encode_StopTime (value: StopTime, elGetter: $.ASN1Encoder<StopTime>) {
    if (!_cached_encoder_for_StopTime) { _cached_encoder_for_StopTime = $._encode_choice<StopTime>({
    "specific": $._encodeGeneralizedTime,
    "continual": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_StopTime(value, elGetter);
}


/* eslint-enable */
