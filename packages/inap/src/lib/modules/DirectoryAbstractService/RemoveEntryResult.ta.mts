/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
// export { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import { CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";
// export { CommonResultsSeq, _decode_CommonResultsSeq, _encode_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";


/**
 * @summary RemoveEntryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoveEntryResult  ::=  CHOICE {
 *   null         NULL,
 *   information
 *     OPTIONALLY-PROTECTED-SEQ{SEQUENCE {COMPONENTS OF CommonResultsSeq}}
 * }
 * ```
 */
export
type RemoveEntryResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<{ _componentsOf: CommonResultsSeq }> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RemoveEntryResult: $.ASN1Decoder<RemoveEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoveEntryResult (el: _Element): RemoveEntryResult {
    if (!_cached_decoder_for_RemoveEntryResult) { _cached_decoder_for_RemoveEntryResult = $._decode_inextensible_choice<RemoveEntryResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 0": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<{ _componentsOf: CommonResultsSeq }>(function (el: _Element): OPTIONALLY_PROTECTED_SEQ {
    let _componentsOf!: CommonResultsSeq;
    const callbacks: $.DecodingMap = {
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED_SEQ,
        undefined,
    );
    return new OPTIONALLY_PROTECTED_SEQ(
        _componentsOf
    );
}) ]
}); }
    return _cached_decoder_for_RemoveEntryResult(el);
}

let _cached_encoder_for_RemoveEntryResult: $.ASN1Encoder<RemoveEntryResult> | null = null;

/**
 * @summary Encodes a(n) RemoveEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEntryResult, encoded as an ASN.1 Element.
 */
export
function _encode_RemoveEntryResult (value: RemoveEntryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoveEntryResult) { _cached_encoder_for_RemoveEntryResult = $._encode_choice<RemoveEntryResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<{ _componentsOf: CommonResultsSeq }>(function (value: OPTIONALLY_PROTECTED_SEQ, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED_SEQ>): _Element {
    return $._encodeSequence([
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
}, $.BER); }
    return _cached_encoder_for_RemoveEntryResult(value, elGetter);
}


/* eslint-enable */
