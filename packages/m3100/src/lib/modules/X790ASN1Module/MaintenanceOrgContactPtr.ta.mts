/* eslint-disable */
import {
    NULL,
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
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary MaintenanceOrgContactPtr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaintenanceOrgContactPtr  ::=  CHOICE {
 *   null     NULL,
 *   contact  ObjectInstance,
 *   ...
 * }
 * ```
 */
export type MaintenanceOrgContactPtr =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { contact: ObjectInstance } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_MaintenanceOrgContactPtr: $.ASN1Decoder<MaintenanceOrgContactPtr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) MaintenanceOrgContactPtr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaintenanceOrgContactPtr} The decoded data structure.
 */
export function _decode_MaintenanceOrgContactPtr(el: _Element): MaintenanceOrgContactPtr {
    if (!_cached_decoder_for_MaintenanceOrgContactPtr) {
        _cached_decoder_for_MaintenanceOrgContactPtr = $._decode_extensible_choice<MaintenanceOrgContactPtr>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'CONTEXT 2': ['contact', _decode_ObjectInstance],
                'CONTEXT 3': ['contact', _decode_ObjectInstance],
                'CONTEXT 4': ['contact', _decode_ObjectInstance],
            }
        );
    }
    return _cached_decoder_for_MaintenanceOrgContactPtr(el);
}


let _cached_encoder_for_MaintenanceOrgContactPtr: $.ASN1Encoder<MaintenanceOrgContactPtr> | null = null;


/**
 * @summary Encodes a(n) MaintenanceOrgContactPtr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaintenanceOrgContactPtr, encoded as an ASN.1 Element.
 */
export function _encode_MaintenanceOrgContactPtr(
    value: MaintenanceOrgContactPtr,
    elGetter: $.ASN1Encoder<MaintenanceOrgContactPtr>
): _Element {
    if (!_cached_encoder_for_MaintenanceOrgContactPtr) {
        _cached_encoder_for_MaintenanceOrgContactPtr = $._encode_choice<MaintenanceOrgContactPtr>(
            {
                null_: $._encodeNull,
                contact: _encode_ObjectInstance,
            },
            $.BER
        );
    }
    return _cached_encoder_for_MaintenanceOrgContactPtr(value, elGetter);
}


/* eslint-enable */
