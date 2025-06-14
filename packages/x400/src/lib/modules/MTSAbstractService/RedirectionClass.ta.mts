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
    MessageClass,
    _decode_MessageClass,
    _encode_MessageClass,
} from '../MTSAbstractService/MessageClass.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RedirectionClass */
/**
 * @summary RedirectionClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionClass  ::=  MessageClass
 * ```
 */
export type RedirectionClass = MessageClass; // DefinedType
/* END_OF_SYMBOL_DEFINITION RedirectionClass */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionClass */
let _cached_decoder_for_RedirectionClass: $.ASN1Decoder<RedirectionClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RedirectionClass */

/* START_OF_SYMBOL_DEFINITION _decode_RedirectionClass */
/**
 * @summary Decodes an ASN.1 element into a(n) RedirectionClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RedirectionClass} The decoded data structure.
 */
export function _decode_RedirectionClass(el: _Element) {
    if (!_cached_decoder_for_RedirectionClass) {
        _cached_decoder_for_RedirectionClass = _decode_MessageClass;
    }
    return _cached_decoder_for_RedirectionClass(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RedirectionClass */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionClass */
let _cached_encoder_for_RedirectionClass: $.ASN1Encoder<RedirectionClass> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RedirectionClass */

/* START_OF_SYMBOL_DEFINITION _encode_RedirectionClass */
/**
 * @summary Encodes a(n) RedirectionClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RedirectionClass, encoded as an ASN.1 Element.
 */
export function _encode_RedirectionClass(
    value: RedirectionClass,
    elGetter: $.ASN1Encoder<RedirectionClass>
) {
    if (!_cached_encoder_for_RedirectionClass) {
        _cached_encoder_for_RedirectionClass = _encode_MessageClass;
    }
    return _cached_encoder_for_RedirectionClass(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RedirectionClass */

/* eslint-enable */
