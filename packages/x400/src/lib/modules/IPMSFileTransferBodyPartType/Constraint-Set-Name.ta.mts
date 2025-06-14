/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION Constraint_Set_Name */
/**
 * @summary Constraint_Set_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Constraint-Set-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Constraint_Set_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Constraint_Set_Name */
let _cached_decoder_for_Constraint_Set_Name: $.ASN1Decoder<Constraint_Set_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Constraint_Set_Name */
/**
 * @summary Decodes an ASN.1 element into a(n) Constraint_Set_Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Constraint_Set_Name} The decoded data structure.
 */
export function _decode_Constraint_Set_Name(el: _Element) {
    if (!_cached_decoder_for_Constraint_Set_Name) {
        _cached_decoder_for_Constraint_Set_Name = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_Constraint_Set_Name(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Constraint_Set_Name */
let _cached_encoder_for_Constraint_Set_Name: $.ASN1Encoder<Constraint_Set_Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Constraint_Set_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Constraint_Set_Name */
/**
 * @summary Encodes a(n) Constraint_Set_Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Constraint_Set_Name, encoded as an ASN.1 Element.
 */
export function _encode_Constraint_Set_Name(
    value: Constraint_Set_Name,
    elGetter: $.ASN1Encoder<Constraint_Set_Name>
) {
    if (!_cached_encoder_for_Constraint_Set_Name) {
        _cached_encoder_for_Constraint_Set_Name = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_Constraint_Set_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Constraint_Set_Name */

/* eslint-enable */
