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
    RelatedObjectInstance,
    _decode_RelatedObjectInstance,
    _encode_RelatedObjectInstance,
} from '../ASN1DefinedTypesModule/RelatedObjectInstance.ta.mjs';


/**
 * @summary ConnectivityPointer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectivityPointer  ::=  RelatedObjectInstance
 * ```
 */
export type ConnectivityPointer = RelatedObjectInstance; // DefinedType


let _cached_decoder_for_ConnectivityPointer: $.ASN1Decoder<ConnectivityPointer> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConnectivityPointer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectivityPointer} The decoded data structure.
 */
export function _decode_ConnectivityPointer(el: _Element): ConnectivityPointer {
    if (!_cached_decoder_for_ConnectivityPointer) {
        _cached_decoder_for_ConnectivityPointer = _decode_RelatedObjectInstance;
    }
    return _cached_decoder_for_ConnectivityPointer(el);
}


let _cached_encoder_for_ConnectivityPointer: $.ASN1Encoder<ConnectivityPointer> | null = null;


/**
 * @summary Encodes a(n) ConnectivityPointer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectivityPointer, encoded as an ASN.1 Element.
 */
export function _encode_ConnectivityPointer(
    value: ConnectivityPointer,
    elGetter: $.ASN1Encoder<ConnectivityPointer>
): _Element {
    if (!_cached_encoder_for_ConnectivityPointer) {
        _cached_encoder_for_ConnectivityPointer = _encode_RelatedObjectInstance;
    }
    return _cached_encoder_for_ConnectivityPointer(value, elGetter);
}


/* eslint-enable */
