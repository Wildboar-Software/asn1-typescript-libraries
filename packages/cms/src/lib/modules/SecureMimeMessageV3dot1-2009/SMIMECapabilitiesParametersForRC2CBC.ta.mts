/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SMIMECapabilitiesParametersForRC2CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SMIMECapabilitiesParametersForRC2CBC  ::=  INTEGER (40 | 128, ...)
 * ```
 */
export type SMIMECapabilitiesParametersForRC2CBC = INTEGER;


let _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC: $.ASN1Decoder<SMIMECapabilitiesParametersForRC2CBC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapabilitiesParametersForRC2CBC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapabilitiesParametersForRC2CBC} The decoded data structure.
 */
export function _decode_SMIMECapabilitiesParametersForRC2CBC(el: _Element): SMIMECapabilitiesParametersForRC2CBC {
    if (!_cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC =
            $._decodeInteger;
    }
    return _cached_decoder_for_SMIMECapabilitiesParametersForRC2CBC(el);
}


let _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC: $.ASN1Encoder<SMIMECapabilitiesParametersForRC2CBC> | null = null;


/**
 * @summary Encodes a(n) SMIMECapabilitiesParametersForRC2CBC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapabilitiesParametersForRC2CBC, encoded as an ASN.1 Element.
 */
export function _encode_SMIMECapabilitiesParametersForRC2CBC(
    value: SMIMECapabilitiesParametersForRC2CBC,
    elGetter: $.ASN1Encoder<SMIMECapabilitiesParametersForRC2CBC>
): _Element {
    if (!_cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC) {
        _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC =
            $._encodeInteger;
    }
    return _cached_encoder_for_SMIMECapabilitiesParametersForRC2CBC(
        value,
        elGetter
    );
}


/* eslint-enable */
