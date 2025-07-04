/* eslint-disable */
import {
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
 * @summary ListOfTPs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfTPs  ::=  SET OF ObjectInstance
 * ```
 */
export type ListOfTPs = ObjectInstance[]; // SetOfType


let _cached_decoder_for_ListOfTPs: $.ASN1Decoder<ListOfTPs> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ListOfTPs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfTPs} The decoded data structure.
 */
export function _decode_ListOfTPs(el: _Element): ListOfTPs {
    if (!_cached_decoder_for_ListOfTPs) {
        _cached_decoder_for_ListOfTPs = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ListOfTPs(el);
}


let _cached_encoder_for_ListOfTPs: $.ASN1Encoder<ListOfTPs> | null = null;


/**
 * @summary Encodes a(n) ListOfTPs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfTPs, encoded as an ASN.1 Element.
 */
export function _encode_ListOfTPs(
    value: ListOfTPs,
    elGetter: $.ASN1Encoder<ListOfTPs>
): _Element {
    if (!_cached_encoder_for_ListOfTPs) {
        _cached_encoder_for_ListOfTPs = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ListOfTPs(value, elGetter);
}


/* eslint-enable */
