/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import {
    EstablishOperationalBindingArgumentData,
    _decode_EstablishOperationalBindingArgumentData,
    _encode_EstablishOperationalBindingArgumentData,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgumentData.ta.mjs";
/**
 * @summary EstablishOperationalBindingArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingArgument  ::=
 *   OPTIONALLY-PROTECTED-SEQ { EstablishOperationalBindingArgumentData }
 * ```
 */
export type EstablishOperationalBindingArgument = OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingArgumentData>; // DefinedType

let _cached_decoder_for_EstablishOperationalBindingArgument: $.ASN1Decoder<EstablishOperationalBindingArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingArgument} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingArgument(el: _Element): EstablishOperationalBindingArgument {
    if (!_cached_decoder_for_EstablishOperationalBindingArgument) {
        _cached_decoder_for_EstablishOperationalBindingArgument = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingArgumentData>(
            _decode_EstablishOperationalBindingArgumentData
        );
    }
    return _cached_decoder_for_EstablishOperationalBindingArgument(el);
}

let _cached_encoder_for_EstablishOperationalBindingArgument: $.ASN1Encoder<EstablishOperationalBindingArgument> | null = null;

/**
 * @summary Encodes a(n) EstablishOperationalBindingArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingArgument, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingArgument(
    value: EstablishOperationalBindingArgument,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingArgument>
): _Element {
    if (!_cached_encoder_for_EstablishOperationalBindingArgument) {
        _cached_encoder_for_EstablishOperationalBindingArgument = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingArgumentData>(
            _encode_EstablishOperationalBindingArgumentData
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingArgument(
        value,
        elGetter
    );
}


/* eslint-enable */
