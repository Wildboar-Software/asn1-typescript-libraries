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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CapacityAlarmThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CapacityAlarmThreshold  ::=  SET OF INTEGER(0..100)
 * ```
 */
export
type CapacityAlarmThreshold = INTEGER[]; // SetOfType

let _cached_decoder_for_CapacityAlarmThreshold: $.ASN1Decoder<CapacityAlarmThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CapacityAlarmThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CapacityAlarmThreshold} The decoded data structure.
 */
export
function _decode_CapacityAlarmThreshold (el: _Element): CapacityAlarmThreshold {
    if (!_cached_decoder_for_CapacityAlarmThreshold) { _cached_decoder_for_CapacityAlarmThreshold = $._decodeSetOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_CapacityAlarmThreshold(el);
}

let _cached_encoder_for_CapacityAlarmThreshold: $.ASN1Encoder<CapacityAlarmThreshold> | null = null;

/**
 * @summary Encodes a(n) CapacityAlarmThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapacityAlarmThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_CapacityAlarmThreshold (value: CapacityAlarmThreshold, elGetter: $.ASN1Encoder<CapacityAlarmThreshold>): _Element {
    if (!_cached_encoder_for_CapacityAlarmThreshold) { _cached_encoder_for_CapacityAlarmThreshold = $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_CapacityAlarmThreshold(value, elGetter);
}


/* eslint-enable */
