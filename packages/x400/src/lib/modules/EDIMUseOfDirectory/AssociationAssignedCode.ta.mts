/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION AssociationAssignedCode */
/**
 * @summary AssociationAssignedCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationAssignedCode  ::=
 *   TeletexString(SIZE (1..ub-edi-association-assigned-code))
 * ```
 */
export type AssociationAssignedCode = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION AssociationAssignedCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationAssignedCode */
let _cached_decoder_for_AssociationAssignedCode: $.ASN1Decoder<AssociationAssignedCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationAssignedCode */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationAssignedCode */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationAssignedCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationAssignedCode} The decoded data structure.
 */
export function _decode_AssociationAssignedCode(el: _Element) {
    if (!_cached_decoder_for_AssociationAssignedCode) {
        _cached_decoder_for_AssociationAssignedCode = $._decodeTeletexString;
    }
    return _cached_decoder_for_AssociationAssignedCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociationAssignedCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationAssignedCode */
let _cached_encoder_for_AssociationAssignedCode: $.ASN1Encoder<AssociationAssignedCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationAssignedCode */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationAssignedCode */
/**
 * @summary Encodes a(n) AssociationAssignedCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationAssignedCode, encoded as an ASN.1 Element.
 */
export function _encode_AssociationAssignedCode(
    value: AssociationAssignedCode,
    elGetter: $.ASN1Encoder<AssociationAssignedCode>
) {
    if (!_cached_encoder_for_AssociationAssignedCode) {
        _cached_encoder_for_AssociationAssignedCode = $._encodeTeletexString;
    }
    return _cached_encoder_for_AssociationAssignedCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociationAssignedCode */

/* eslint-enable */
