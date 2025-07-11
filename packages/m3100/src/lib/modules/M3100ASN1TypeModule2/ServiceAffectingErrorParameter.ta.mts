/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_ServiceAffectingErrorParameter {
    affectingExistingService = 0,
}


/**
 * @summary ServiceAffectingErrorParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceAffectingErrorParameter  ::=  ENUMERATED {affectingExistingService(0), ...
 *                                                }
 * ```
 *
 * @enum {number}
 */
export type ServiceAffectingErrorParameter =
    | _enum_for_ServiceAffectingErrorParameter
    | ENUMERATED;


/**
 * @summary ServiceAffectingErrorParameter_affectingExistingService
 * @constant
 * @type {number}
 */
export const ServiceAffectingErrorParameter_affectingExistingService: ServiceAffectingErrorParameter = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary affectingExistingService
 * @constant
 * @type {number}
 */
export const affectingExistingService: ServiceAffectingErrorParameter = ServiceAffectingErrorParameter_affectingExistingService; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_ServiceAffectingErrorParameter: $.ASN1Decoder<ServiceAffectingErrorParameter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAffectingErrorParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceAffectingErrorParameter} The decoded data structure.
 */
export function _decode_ServiceAffectingErrorParameter(el: _Element): ServiceAffectingErrorParameter {
    if (!_cached_decoder_for_ServiceAffectingErrorParameter) {
        _cached_decoder_for_ServiceAffectingErrorParameter =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ServiceAffectingErrorParameter(el);
}


let _cached_encoder_for_ServiceAffectingErrorParameter: $.ASN1Encoder<ServiceAffectingErrorParameter> | null = null;


/**
 * @summary Encodes a(n) ServiceAffectingErrorParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAffectingErrorParameter, encoded as an ASN.1 Element.
 */
export function _encode_ServiceAffectingErrorParameter(
    value: ServiceAffectingErrorParameter,
    elGetter: $.ASN1Encoder<ServiceAffectingErrorParameter>
): _Element {
    if (!_cached_encoder_for_ServiceAffectingErrorParameter) {
        _cached_encoder_for_ServiceAffectingErrorParameter =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ServiceAffectingErrorParameter(value, elGetter);
}


/* eslint-enable */
