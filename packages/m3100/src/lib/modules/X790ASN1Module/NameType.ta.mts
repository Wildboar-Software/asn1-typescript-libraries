/* eslint-disable */
import {
    INTEGER,
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
 * @summary NameType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameType  ::=  CHOICE {number   INTEGER,
 *                      pString  PrintableString,
 *                      ...
 * }
 * ```
 */
export type NameType =
    | { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { pString: PrintableString } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_NameType: $.ASN1Decoder<NameType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NameType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameType} The decoded data structure.
 */
export function _decode_NameType(el: _Element): NameType {
    if (!_cached_decoder_for_NameType) {
        _cached_decoder_for_NameType = $._decode_extensible_choice<NameType>({
            'UNIVERSAL 2': ['number_', $._decodeInteger],
            'UNIVERSAL 19': ['pString', $._decodePrintableString],
        });
    }
    return _cached_decoder_for_NameType(el);
}


let _cached_encoder_for_NameType: $.ASN1Encoder<NameType> | null = null;


/**
 * @summary Encodes a(n) NameType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameType, encoded as an ASN.1 Element.
 */
export function _encode_NameType(
    value: NameType,
    elGetter: $.ASN1Encoder<NameType>
): _Element {
    if (!_cached_encoder_for_NameType) {
        _cached_encoder_for_NameType = $._encode_choice<NameType>(
            {
                number_: $._encodeInteger,
                pString: $._encodePrintableString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NameType(value, elGetter);
}


/* eslint-enable */
