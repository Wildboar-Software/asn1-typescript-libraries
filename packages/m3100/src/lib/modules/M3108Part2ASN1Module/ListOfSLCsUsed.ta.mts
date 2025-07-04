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
 * @summary ListOfSLCsUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfSLCsUsed  ::=  SEQUENCE OF ObjectInstance
 * ```
 */
export type ListOfSLCsUsed = ObjectInstance[]; // SequenceOfType


let _cached_decoder_for_ListOfSLCsUsed: $.ASN1Decoder<ListOfSLCsUsed> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ListOfSLCsUsed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfSLCsUsed} The decoded data structure.
 */
export function _decode_ListOfSLCsUsed(el: _Element): ListOfSLCsUsed {
    if (!_cached_decoder_for_ListOfSLCsUsed) {
        _cached_decoder_for_ListOfSLCsUsed = $._decodeSequenceOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ListOfSLCsUsed(el);
}


let _cached_encoder_for_ListOfSLCsUsed: $.ASN1Encoder<ListOfSLCsUsed> | null = null;


/**
 * @summary Encodes a(n) ListOfSLCsUsed into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfSLCsUsed, encoded as an ASN.1 Element.
 */
export function _encode_ListOfSLCsUsed(
    value: ListOfSLCsUsed,
    elGetter: $.ASN1Encoder<ListOfSLCsUsed>
): _Element {
    if (!_cached_encoder_for_ListOfSLCsUsed) {
        _cached_encoder_for_ListOfSLCsUsed = $._encodeSequenceOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ListOfSLCsUsed(value, elGetter);
}


/* eslint-enable */
