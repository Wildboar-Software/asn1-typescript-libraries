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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


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
export type MaintenanceOrgContactTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { contact: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_MaintenanceOrgContactTime: $.ASN1Decoder<MaintenanceOrgContactTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MaintenanceOrgContactTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaintenanceOrgContactTime} The decoded data structure.
 */
export function _decode_MaintenanceOrgContactTime(el: _Element) {
    if (!_cached_decoder_for_MaintenanceOrgContactTime) {
        _cached_decoder_for_MaintenanceOrgContactTime = $._decode_extensible_choice<MaintenanceOrgContactTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['contact', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_MaintenanceOrgContactTime(el);
}


let _cached_encoder_for_MaintenanceOrgContactTime: $.ASN1Encoder<MaintenanceOrgContactTime> | null = null;


/**
 * @summary Encodes a(n) MaintenanceOrgContactTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaintenanceOrgContactTime, encoded as an ASN.1 Element.
 */
export function _encode_MaintenanceOrgContactTime(
    value: MaintenanceOrgContactTime,
    elGetter: $.ASN1Encoder<MaintenanceOrgContactTime>
) {
    if (!_cached_encoder_for_MaintenanceOrgContactTime) {
        _cached_encoder_for_MaintenanceOrgContactTime = $._encode_choice<MaintenanceOrgContactTime>(
            {
                null_: $._encodeNull,
                contact: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MaintenanceOrgContactTime(value, elGetter);
}


/* eslint-enable */
