/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
// export { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
import { CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";
// export { CommonResultsSeq, _decode_CommonResultsSeq, _encode_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";


/**
 * @summary AbandonResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonResult  ::=  CHOICE {
 *   null         NULL,
 *   information
 *     OPTIONALLY-PROTECTED-SEQ{SEQUENCE {invokeID  InvokeId,
 *                                        COMPONENTS OF CommonResultsSeq
 *       }}
 * }
 * ```
 */
export
type AbandonResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId>; _componentsOf: CommonResultsSeq }> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AbandonResult: $.ASN1Decoder<AbandonResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AbandonResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AbandonResult (el: _Element): AbandonResult {
    if (!_cached_decoder_for_AbandonResult) { _cached_decoder_for_AbandonResult = $._decode_inextensible_choice<AbandonResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 0": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId>; _componentsOf: CommonResultsSeq }>(function (el: _Element): OPTIONALLY_PROTECTED_SEQ {
    let invokeID!: InvokeId;
    let _componentsOf!: CommonResultsSeq;
    const callbacks: $.DecodingMap = {
        "invokeID": (_el: _Element): void => { invokeID = _decode_InvokeId(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED_SEQ,
        undefined,
    );
    return new OPTIONALLY_PROTECTED_SEQ(
        invokeID,
        _componentsOf
    );
}) ]
}); }
    return _cached_decoder_for_AbandonResult(el);
}

let _cached_encoder_for_AbandonResult: $.ASN1Encoder<AbandonResult> | null = null;

/**
 * @summary Encodes a(n) AbandonResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonResult, encoded as an ASN.1 Element.
 */
export
function _encode_AbandonResult (value: AbandonResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AbandonResult) { _cached_encoder_for_AbandonResult = $._encode_choice<AbandonResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<{ invokeID: OPTIONAL<InvokeId>; _componentsOf: CommonResultsSeq }>(function (value: OPTIONALLY_PROTECTED_SEQ, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED_SEQ>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_InvokeId(value.invokeID, $.BER),
        /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    ], $.BER);
}),
}, $.BER); }
    return _cached_encoder_for_AbandonResult(value, elGetter);
}


/* eslint-enable */
