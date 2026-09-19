/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerCriteriaFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerCriteriaFlag  ::=  [68] IMPLICIT OCTET STRING(SIZE(2))
 * ```
 */
export
type TriggerCriteriaFlag = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TriggerCriteriaFlag: $.ASN1Decoder<TriggerCriteriaFlag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerCriteriaFlag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerCriteriaFlag (el: _Element): TriggerCriteriaFlag {
    if (!_cached_decoder_for_TriggerCriteriaFlag) { _cached_decoder_for_TriggerCriteriaFlag = $._decode_implicit<TriggerCriteriaFlag>(() => $._decodeOctetString); }
    return _cached_decoder_for_TriggerCriteriaFlag(el);
}

let _cached_encoder_for_TriggerCriteriaFlag: $.ASN1Encoder<TriggerCriteriaFlag> | null = null;

/**
 * @summary Encodes a(n) TriggerCriteriaFlag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerCriteriaFlag, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerCriteriaFlag (value: TriggerCriteriaFlag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerCriteriaFlag) { _cached_encoder_for_TriggerCriteriaFlag = $._encode_implicit(_TagClass.context, 68, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_TriggerCriteriaFlag(value, elGetter);
}


/* eslint-enable */
