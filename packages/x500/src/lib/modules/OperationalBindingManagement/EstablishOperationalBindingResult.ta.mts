/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import {
    EstablishOperationalBindingResultData,
    _decode_EstablishOperationalBindingResultData,
    _encode_EstablishOperationalBindingResultData,
} from "../OperationalBindingManagement/EstablishOperationalBindingResultData.ta.mjs";
/**
 * @summary EstablishOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResult  ::=  OPTIONALLY-PROTECTED-SEQ { EstablishOperationalBindingResultData }
 * ```
 */
export type EstablishOperationalBindingResult = OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>; // DefinedType

let _cached_decoder_for_EstablishOperationalBindingResult: $.ASN1Decoder<EstablishOperationalBindingResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResult} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResult(el: _Element): EstablishOperationalBindingResult {
    if (!_cached_decoder_for_EstablishOperationalBindingResult) {
        _cached_decoder_for_EstablishOperationalBindingResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>(
            _decode_EstablishOperationalBindingResultData
        );
    }
    return _cached_decoder_for_EstablishOperationalBindingResult(el);
}

let _cached_encoder_for_EstablishOperationalBindingResult: $.ASN1Encoder<EstablishOperationalBindingResult> | null = null;

/**
 * @summary Encodes a(n) EstablishOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResult(
    value: EstablishOperationalBindingResult,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResult>
): _Element {
    if (!_cached_encoder_for_EstablishOperationalBindingResult) {
        _cached_encoder_for_EstablishOperationalBindingResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>(
            _encode_EstablishOperationalBindingResultData
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResult(
        value,
        elGetter
    );
}


/* eslint-enable */
