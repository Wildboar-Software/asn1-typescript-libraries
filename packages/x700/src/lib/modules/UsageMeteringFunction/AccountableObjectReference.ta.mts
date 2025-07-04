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
 * @summary AccountableObjectReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccountableObjectReference  ::=  ObjectInstance
 * ```
 */
export type AccountableObjectReference = ObjectInstance; // DefinedType

let _cached_decoder_for_AccountableObjectReference: $.ASN1Decoder<AccountableObjectReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccountableObjectReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccountableObjectReference} The decoded data structure.
 */
export function _decode_AccountableObjectReference(el: _Element): AccountableObjectReference {
    if (!_cached_decoder_for_AccountableObjectReference) {
        _cached_decoder_for_AccountableObjectReference = _decode_ObjectInstance;
    }
    return _cached_decoder_for_AccountableObjectReference(el);
}

let _cached_encoder_for_AccountableObjectReference: $.ASN1Encoder<AccountableObjectReference> | null = null;

/**
 * @summary Encodes a(n) AccountableObjectReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountableObjectReference, encoded as an ASN.1 Element.
 */
export function _encode_AccountableObjectReference(
    value: AccountableObjectReference,
    elGetter: $.ASN1Encoder<AccountableObjectReference>
): _Element {
    if (!_cached_encoder_for_AccountableObjectReference) {
        _cached_encoder_for_AccountableObjectReference = _encode_ObjectInstance;
    }
    return _cached_encoder_for_AccountableObjectReference(value, elGetter);
}


/* eslint-enable */
