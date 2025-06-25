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
    OctetString,
    _decode_OctetString,
    _encode_OctetString,
} from '../NLM/OctetString.ta.mjs';

/**
 * @summary NUI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NUI  ::=  OctetString(SIZE (0..255))
 * ```
 */
export type NUI = OctetString; // DefinedType


let _cached_decoder_for_NUI: $.ASN1Decoder<NUI> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NUI
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NUI} The decoded data structure.
 */
export function _decode_NUI(el: _Element): NUI {
    if (!_cached_decoder_for_NUI) {
        _cached_decoder_for_NUI = _decode_OctetString;
    }
    return _cached_decoder_for_NUI(el);
}


let _cached_encoder_for_NUI: $.ASN1Encoder<NUI> | null = null;


/**
 * @summary Encodes a(n) NUI into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NUI, encoded as an ASN.1 Element.
 */
export function _encode_NUI(value: NUI, elGetter: $.ASN1Encoder<NUI>): _Element {
    if (!_cached_encoder_for_NUI) {
        _cached_encoder_for_NUI = _encode_OctetString;
    }
    return _cached_encoder_for_NUI(value, elGetter);
}


/* eslint-enable */
