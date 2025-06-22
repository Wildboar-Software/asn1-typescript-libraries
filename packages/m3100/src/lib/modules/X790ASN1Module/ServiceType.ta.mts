/* eslint-disable */
import {
    INTEGER,
    OBJECT_IDENTIFIER,
    PrintableString,
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


/**
 * @summary ServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceType  ::=  CHOICE {
 *   int     INTEGER,
 *   string  PrintableString,
 *   oid     OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type ServiceType =
    | { int: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ServiceType: $.ASN1Decoder<ServiceType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceType} The decoded data structure.
 */
export function _decode_ServiceType(el: _Element) {
    if (!_cached_decoder_for_ServiceType) {
        _cached_decoder_for_ServiceType = $._decode_extensible_choice<ServiceType>(
            {
                'UNIVERSAL 2': ['int', $._decodeInteger],
                'UNIVERSAL 19': ['string_', $._decodePrintableString],
                'UNIVERSAL 6': ['oid', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_ServiceType(el);
}


let _cached_encoder_for_ServiceType: $.ASN1Encoder<ServiceType> | null = null;


/**
 * @summary Encodes a(n) ServiceType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceType, encoded as an ASN.1 Element.
 */
export function _encode_ServiceType(
    value: ServiceType,
    elGetter: $.ASN1Encoder<ServiceType>
) {
    if (!_cached_encoder_for_ServiceType) {
        _cached_encoder_for_ServiceType = $._encode_choice<ServiceType>(
            {
                int: $._encodeInteger,
                string_: $._encodePrintableString,
                oid: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ServiceType(value, elGetter);
}


/* eslint-enable */
