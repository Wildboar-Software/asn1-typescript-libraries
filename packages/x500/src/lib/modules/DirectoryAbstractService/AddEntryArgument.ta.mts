/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AddEntryArgumentData,
    _decode_AddEntryArgumentData,
    _encode_AddEntryArgumentData,
} from "../DirectoryAbstractService/AddEntryArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary AddEntryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddEntryArgument  ::=  OPTIONALLY-PROTECTED { AddEntryArgumentData }
 * ```
 */
export type AddEntryArgument = OPTIONALLY_PROTECTED<AddEntryArgumentData>; // DefinedType

let _cached_decoder_for_AddEntryArgument: $.ASN1Decoder<AddEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddEntryArgument} The decoded data structure.
 */
export function _decode_AddEntryArgument(el: _Element): AddEntryArgument {
    if (!_cached_decoder_for_AddEntryArgument) {
        _cached_decoder_for_AddEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<AddEntryArgumentData>(
            _decode_AddEntryArgumentData
        );
    }
    return _cached_decoder_for_AddEntryArgument(el);
}

let _cached_encoder_for_AddEntryArgument: $.ASN1Encoder<AddEntryArgument> | null = null;

/**
 * @summary Encodes a(n) AddEntryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryArgument, encoded as an ASN.1 Element.
 */
export function _encode_AddEntryArgument(
    value: AddEntryArgument,
    elGetter: $.ASN1Encoder<AddEntryArgument>
): _Element {
    if (!_cached_encoder_for_AddEntryArgument) {
        _cached_encoder_for_AddEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<AddEntryArgumentData>(
            _encode_AddEntryArgumentData
        );
    }
    return _cached_encoder_for_AddEntryArgument(value, elGetter);
}


/* eslint-enable */
