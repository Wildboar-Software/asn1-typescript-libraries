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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary MORTNotAvailable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MORTNotAvailable  ::=  SET OF ObjectInstance
 * ```
 */
export type MORTNotAvailable = ObjectInstance[]; // SetOfType

let _cached_decoder_for_MORTNotAvailable: $.ASN1Decoder<MORTNotAvailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MORTNotAvailable
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MORTNotAvailable} The decoded data structure.
 */
export function _decode_MORTNotAvailable(el: _Element) {
    if (!_cached_decoder_for_MORTNotAvailable) {
        _cached_decoder_for_MORTNotAvailable = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_MORTNotAvailable(el);
}

let _cached_encoder_for_MORTNotAvailable: $.ASN1Encoder<MORTNotAvailable> | null = null;

/**
 * @summary Encodes a(n) MORTNotAvailable into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MORTNotAvailable, encoded as an ASN.1 Element.
 */
export function _encode_MORTNotAvailable(
    value: MORTNotAvailable,
    elGetter: $.ASN1Encoder<MORTNotAvailable>
) {
    if (!_cached_encoder_for_MORTNotAvailable) {
        _cached_encoder_for_MORTNotAvailable = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_MORTNotAvailable(value, elGetter);
}


/* eslint-enable */
