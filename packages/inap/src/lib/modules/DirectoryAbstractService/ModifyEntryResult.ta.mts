/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
// export { OPTIONALLY_PROTECTED_SEQ, _get_decoder_for_OPTIONALLY_PROTECTED_SEQ, _get_encoder_for_OPTIONALLY_PROTECTED_SEQ } from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
// export { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DirectoryAbstractService/EntryInformation.ta.mjs";
import { CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";
// export { CommonResultsSeq, _decode_CommonResultsSeq, _encode_CommonResultsSeq } from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";


/**
 * @summary ModifyEntryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyEntryResult  ::=  CHOICE {
 *   null         NULL,
 *   information
 *     OPTIONALLY-PROTECTED-SEQ{SEQUENCE {entry  [0]  EntryInformation OPTIONAL,
 *                                        COMPONENTS OF CommonResultsSeq
 *       }}
 * }
 * ```
 */
export
type ModifyEntryResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: OPTIONALLY_PROTECTED_SEQ<{ entry: EntryInformation; _componentsOf: CommonResultsSeq }> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ModifyEntryResult: $.ASN1Decoder<ModifyEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyEntryResult (el: _Element): ModifyEntryResult {
    if (!_cached_decoder_for_ModifyEntryResult) { _cached_decoder_for_ModifyEntryResult = $._decode_inextensible_choice<ModifyEntryResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 0": [ "information", _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<{ entry: EntryInformation; _componentsOf: CommonResultsSeq }>(function (el: _Element): OPTIONALLY_PROTECTED_SEQ {
    let entry: OPTIONAL<EntryInformation>;
    let _componentsOf!: CommonResultsSeq;
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<EntryInformation>(() => _decode_EntryInformation)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED_SEQ,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED_SEQ,
        undefined,
    );
    return new OPTIONALLY_PROTECTED_SEQ(
        entry,
        _componentsOf
    );
}) ]
}); }
    return _cached_decoder_for_ModifyEntryResult(el);
}

let _cached_encoder_for_ModifyEntryResult: $.ASN1Encoder<ModifyEntryResult> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryResult, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyEntryResult (value: ModifyEntryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyEntryResult) { _cached_encoder_for_ModifyEntryResult = $._encode_choice<ModifyEntryResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<{ entry: EntryInformation; _componentsOf: CommonResultsSeq }>(function (value: OPTIONALLY_PROTECTED_SEQ, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED_SEQ>): _Element {
    const _components: _Element[] = [];
    if (value.entry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_EntryInformation, $.BER)(value.entry, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSequence(_components, $.BER);
}),
}, $.BER); }
    return _cached_encoder_for_ModifyEntryResult(value, elGetter);
}


/* eslint-enable */
