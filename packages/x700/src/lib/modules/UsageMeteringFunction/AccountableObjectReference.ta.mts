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
/* START_OF_SYMBOL_DEFINITION AccountableObjectReference */
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
/* END_OF_SYMBOL_DEFINITION AccountableObjectReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountableObjectReference */
let _cached_decoder_for_AccountableObjectReference: $.ASN1Decoder<AccountableObjectReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccountableObjectReference */

/* START_OF_SYMBOL_DEFINITION _decode_AccountableObjectReference */
/**
 * @summary Decodes an ASN.1 element into a(n) AccountableObjectReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccountableObjectReference} The decoded data structure.
 */
export function _decode_AccountableObjectReference(el: _Element) {
    if (!_cached_decoder_for_AccountableObjectReference) {
        _cached_decoder_for_AccountableObjectReference = _decode_ObjectInstance;
    }
    return _cached_decoder_for_AccountableObjectReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccountableObjectReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountableObjectReference */
let _cached_encoder_for_AccountableObjectReference: $.ASN1Encoder<AccountableObjectReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccountableObjectReference */

/* START_OF_SYMBOL_DEFINITION _encode_AccountableObjectReference */
/**
 * @summary Encodes a(n) AccountableObjectReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountableObjectReference, encoded as an ASN.1 Element.
 */
export function _encode_AccountableObjectReference(
    value: AccountableObjectReference,
    elGetter: $.ASN1Encoder<AccountableObjectReference>
) {
    if (!_cached_encoder_for_AccountableObjectReference) {
        _cached_encoder_for_AccountableObjectReference = _encode_ObjectInstance;
    }
    return _cached_encoder_for_AccountableObjectReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AccountableObjectReference */

/* eslint-enable */
