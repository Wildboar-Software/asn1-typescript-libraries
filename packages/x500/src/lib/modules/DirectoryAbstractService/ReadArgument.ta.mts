/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ReadArgumentData,
    _decode_ReadArgumentData,
    _encode_ReadArgumentData,
} from "../DirectoryAbstractService/ReadArgumentData.ta.mjs";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
/**
 * @summary ReadArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadArgument  ::=  OPTIONALLY-PROTECTED { ReadArgumentData }
 * ```
 */
export type ReadArgument = OPTIONALLY_PROTECTED<ReadArgumentData>; // DefinedType

let _cached_decoder_for_ReadArgument: $.ASN1Decoder<ReadArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadArgument} The decoded data structure.
 */
export function _decode_ReadArgument(el: _Element): ReadArgument {
    if (!_cached_decoder_for_ReadArgument) {
        _cached_decoder_for_ReadArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ReadArgumentData>(
            _decode_ReadArgumentData
        );
    }
    return _cached_decoder_for_ReadArgument(el);
}

let _cached_encoder_for_ReadArgument: $.ASN1Encoder<ReadArgument> | null = null;

/**
 * @summary Encodes a(n) ReadArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadArgument, encoded as an ASN.1 Element.
 */
export function _encode_ReadArgument(
    value: ReadArgument,
    elGetter: $.ASN1Encoder<ReadArgument>
): _Element {
    if (!_cached_encoder_for_ReadArgument) {
        _cached_encoder_for_ReadArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ReadArgumentData>(
            _encode_ReadArgumentData
        );
    }
    return _cached_encoder_for_ReadArgument(value, elGetter);
}


/* eslint-enable */
