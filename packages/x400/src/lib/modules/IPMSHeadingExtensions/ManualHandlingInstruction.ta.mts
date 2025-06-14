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
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ManualHandlingInstruction */
/**
 * @summary ManualHandlingInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualHandlingInstruction  ::=
 *   UniversalOrBMPString{ub-manual-handling-instruction-length}
 * ```
 */
export type ManualHandlingInstruction = UniversalOrBMPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstruction */
let _cached_decoder_for_ManualHandlingInstruction: $.ASN1Decoder<ManualHandlingInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstruction */
/**
 * @summary Decodes an ASN.1 element into a(n) ManualHandlingInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualHandlingInstruction} The decoded data structure.
 */
export function _decode_ManualHandlingInstruction(el: _Element) {
    if (!_cached_decoder_for_ManualHandlingInstruction) {
        _cached_decoder_for_ManualHandlingInstruction = _decode_UniversalOrBMPString;
    }
    return _cached_decoder_for_ManualHandlingInstruction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstruction */
let _cached_encoder_for_ManualHandlingInstruction: $.ASN1Encoder<ManualHandlingInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManualHandlingInstruction */

/* START_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstruction */
/**
 * @summary Encodes a(n) ManualHandlingInstruction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualHandlingInstruction, encoded as an ASN.1 Element.
 */
export function _encode_ManualHandlingInstruction(
    value: ManualHandlingInstruction,
    elGetter: $.ASN1Encoder<ManualHandlingInstruction>
) {
    if (!_cached_encoder_for_ManualHandlingInstruction) {
        _cached_encoder_for_ManualHandlingInstruction = _encode_UniversalOrBMPString;
    }
    return _cached_encoder_for_ManualHandlingInstruction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManualHandlingInstruction */

/* eslint-enable */
