/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GetBoundProfilePackageOkEsipa, _decode_GetBoundProfilePackageOkEsipa, _encode_GetBoundProfilePackageOkEsipa } from "../SGP32Definitions/GetBoundProfilePackageOkEsipa.ta.mjs";
// export { GetBoundProfilePackageOkEsipa, _decode_GetBoundProfilePackageOkEsipa, _encode_GetBoundProfilePackageOkEsipa } from "../SGP32Definitions/GetBoundProfilePackageOkEsipa.ta.mjs";
import { GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa, _decode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa, _encode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa } from "../SGP32Definitions/GetBoundProfilePackageResponseEsipa-getBoundProfilePackageErrorEsipa.ta.mjs";
// export { GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeMissing /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeMissing /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRefused /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_confirmationCodeRetriesExceeded /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRetriesExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_bppRebindingRefused /* IMPORTED_LONG_NAMED_INTEGER */, bppRebindingRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_deprecated /* IMPORTED_LONG_NAMED_INTEGER */, deprecated /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_metadataMismatch /* IMPORTED_LONG_NAMED_INTEGER */, metadataMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa, _encode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa } from "../SGP32Definitions/GetBoundProfilePackageResponseEsipa-getBoundProfilePackageErrorEsipa.ta.mjs";


/**
 * @summary GetBoundProfilePackageResponseEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageResponseEsipa  ::=  [58] CHOICE { -- Tag 'BF3A'
 *     getBoundProfilePackageOkEsipa GetBoundProfilePackageOkEsipa,
 *     getBoundProfilePackageErrorEsipa INTEGER {
 *         euiccSignatureInvalid(1),
 *         confirmationCodeMissing(2),
 *         confirmationCodeRefused(3),
 *         confirmationCodeRetriesExceeded(4),
 *         bppRebindingRefused(5),
 *         deprecated(6), -- this value is no longer used
 *         metadataMismatch(50),
 *         invalidTransactionId(95),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type GetBoundProfilePackageResponseEsipa =
    { getBoundProfilePackageOkEsipa: GetBoundProfilePackageOkEsipa } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageErrorEsipa: GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetBoundProfilePackageResponseEsipa: $.ASN1Decoder<GetBoundProfilePackageResponseEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBoundProfilePackageResponseEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetBoundProfilePackageResponseEsipa (el: _Element): GetBoundProfilePackageResponseEsipa {
    if (!_cached_decoder_for_GetBoundProfilePackageResponseEsipa) { _cached_decoder_for_GetBoundProfilePackageResponseEsipa = $._decode_explicit<GetBoundProfilePackageResponseEsipa>(() => $._decode_inextensible_choice<GetBoundProfilePackageResponseEsipa>({
    "CONTEXT 0": [ "getBoundProfilePackageOkEsipa", _decode_GetBoundProfilePackageOkEsipa ],
    "CONTEXT 1": [ "getBoundProfilePackageErrorEsipa", _decode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa ]
})); }
    return _cached_decoder_for_GetBoundProfilePackageResponseEsipa(el);
}

let _cached_encoder_for_GetBoundProfilePackageResponseEsipa: $.ASN1Encoder<GetBoundProfilePackageResponseEsipa> | null = null;

/**
 * @summary Encodes a(n) GetBoundProfilePackageResponseEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBoundProfilePackageResponseEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_GetBoundProfilePackageResponseEsipa (value: GetBoundProfilePackageResponseEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetBoundProfilePackageResponseEsipa) { _cached_encoder_for_GetBoundProfilePackageResponseEsipa = $._encode_explicit(_TagClass.context, 58, () => $._encode_choice<GetBoundProfilePackageResponseEsipa>({
    "getBoundProfilePackageOkEsipa": _encode_GetBoundProfilePackageOkEsipa,
    "getBoundProfilePackageErrorEsipa": _encode_GetBoundProfilePackageResponseEsipa_getBoundProfilePackageErrorEsipa,
}, $.BER), $.BER); }
    return _cached_encoder_for_GetBoundProfilePackageResponseEsipa(value, elGetter);
}


/* eslint-enable */
