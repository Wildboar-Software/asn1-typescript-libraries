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
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta.mjs';
/**
 * @summary PrimaryObjectSpecified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryObjectSpecified  ::=  OptionalObject
 * ```
 */
export type PrimaryObjectSpecified = OptionalObject; // DefinedType

let _cached_decoder_for_PrimaryObjectSpecified: $.ASN1Decoder<PrimaryObjectSpecified> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryObjectSpecified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryObjectSpecified} The decoded data structure.
 */
export function _decode_PrimaryObjectSpecified(el: _Element): PrimaryObjectSpecified {
    if (!_cached_decoder_for_PrimaryObjectSpecified) {
        _cached_decoder_for_PrimaryObjectSpecified = _decode_OptionalObject;
    }
    return _cached_decoder_for_PrimaryObjectSpecified(el);
}

let _cached_encoder_for_PrimaryObjectSpecified: $.ASN1Encoder<PrimaryObjectSpecified> | null = null;

/**
 * @summary Encodes a(n) PrimaryObjectSpecified into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryObjectSpecified, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryObjectSpecified(
    value: PrimaryObjectSpecified,
    elGetter: $.ASN1Encoder<PrimaryObjectSpecified>
): _Element {
    if (!_cached_encoder_for_PrimaryObjectSpecified) {
        _cached_encoder_for_PrimaryObjectSpecified = _encode_OptionalObject;
    }
    return _cached_encoder_for_PrimaryObjectSpecified(value, elGetter);
}


/* eslint-enable */
