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
 * @summary NoSuchMORT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchMORT  ::=  SET OF ObjectInstance
 * ```
 */
export type NoSuchMORT = ObjectInstance[]; // SetOfType

let _cached_decoder_for_NoSuchMORT: $.ASN1Decoder<NoSuchMORT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchMORT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchMORT} The decoded data structure.
 */
export function _decode_NoSuchMORT(el: _Element): NoSuchMORT {
    if (!_cached_decoder_for_NoSuchMORT) {
        _cached_decoder_for_NoSuchMORT = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_NoSuchMORT(el);
}

let _cached_encoder_for_NoSuchMORT: $.ASN1Encoder<NoSuchMORT> | null = null;

/**
 * @summary Encodes a(n) NoSuchMORT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchMORT, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchMORT(
    value: NoSuchMORT,
    elGetter: $.ASN1Encoder<NoSuchMORT>
): _Element {
    if (!_cached_encoder_for_NoSuchMORT) {
        _cached_encoder_for_NoSuchMORT = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_NoSuchMORT(value, elGetter);
}


/* eslint-enable */
