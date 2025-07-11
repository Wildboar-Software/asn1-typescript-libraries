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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../SEC1-v1-9/AlgorithmIdentifier.ta.mjs";
/**
 * @summary MessageAuthenticationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageAuthenticationCode  ::=  AlgorithmIdentifier {{MACSet}}
 * ```
 */
export
type MessageAuthenticationCode = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_MessageAuthenticationCode: $.ASN1Decoder<MessageAuthenticationCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageAuthenticationCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAuthenticationCode} The decoded data structure.
 */
export
function _decode_MessageAuthenticationCode (el: _Element): MessageAuthenticationCode {
    if (!_cached_decoder_for_MessageAuthenticationCode) { _cached_decoder_for_MessageAuthenticationCode = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_MessageAuthenticationCode(el);
}

let _cached_encoder_for_MessageAuthenticationCode: $.ASN1Encoder<MessageAuthenticationCode> | null = null;

/**
 * @summary Encodes a(n) MessageAuthenticationCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAuthenticationCode, encoded as an ASN.1 Element.
 */
export
function _encode_MessageAuthenticationCode (value: MessageAuthenticationCode, elGetter: $.ASN1Encoder<MessageAuthenticationCode>): _Element {
    if (!_cached_encoder_for_MessageAuthenticationCode) { _cached_encoder_for_MessageAuthenticationCode = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_MessageAuthenticationCode(value, elGetter);
}


/* eslint-enable */
