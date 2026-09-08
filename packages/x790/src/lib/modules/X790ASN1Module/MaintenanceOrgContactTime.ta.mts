/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaintenanceOrgContactTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaintenanceOrgContactTime  ::=  CHOICE {
 *   null     NULL,
 *   contact  GeneralizedTime,
 *   ...
 * }
 * ```
 */
export
type MaintenanceOrgContactTime =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { contact: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MaintenanceOrgContactTime: $.ASN1Decoder<MaintenanceOrgContactTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaintenanceOrgContactTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaintenanceOrgContactTime (el: _Element): MaintenanceOrgContactTime {
    if (!_cached_decoder_for_MaintenanceOrgContactTime) { _cached_decoder_for_MaintenanceOrgContactTime = $._decode_extensible_choice<MaintenanceOrgContactTime>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "UNIVERSAL 24": [ "contact", $._decodeGeneralizedTime ]
}); }
    return _cached_decoder_for_MaintenanceOrgContactTime(el);
}

let _cached_encoder_for_MaintenanceOrgContactTime: $.ASN1Encoder<MaintenanceOrgContactTime> | null = null;

/**
 * @summary Encodes a(n) MaintenanceOrgContactTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaintenanceOrgContactTime, encoded as an ASN.1 Element.
 */
export
function _encode_MaintenanceOrgContactTime (value: MaintenanceOrgContactTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaintenanceOrgContactTime) { _cached_encoder_for_MaintenanceOrgContactTime = $._encode_choice<MaintenanceOrgContactTime>({
    "null_": $._encodeNull,
    "contact": $._encodeGeneralizedTime,
}, $.BER); }
    return _cached_encoder_for_MaintenanceOrgContactTime(value, elGetter);
}


/* eslint-enable */
