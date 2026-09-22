/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_PromptId_enummeratedPrompt_type, _encode_PromptId_enummeratedPrompt_type, PromptId_enummeratedPrompt_type } from "../AccessControlFormat-Prompt-1/PromptId-enummeratedPrompt-type.ta.mjs";
// export { PromptId_enummeratedPrompt_type, PromptId_enummeratedPrompt_type_groupId /* IMPORTED_LONG_NAMED_INTEGER */, groupId /* IMPORTED_SHORT_NAMED_INTEGER */, PromptId_enummeratedPrompt_type_userId /* IMPORTED_LONG_NAMED_INTEGER */, userId /* IMPORTED_SHORT_NAMED_INTEGER */, PromptId_enummeratedPrompt_type_password /* IMPORTED_LONG_NAMED_INTEGER */, password /* IMPORTED_SHORT_NAMED_INTEGER */, PromptId_enummeratedPrompt_type_newPassword /* IMPORTED_LONG_NAMED_INTEGER */, newPassword /* IMPORTED_SHORT_NAMED_INTEGER */, PromptId_enummeratedPrompt_type_copyright /* IMPORTED_LONG_NAMED_INTEGER */, copyright /* IMPORTED_SHORT_NAMED_INTEGER */, PromptId_enummeratedPrompt_type_sessionId /* IMPORTED_LONG_NAMED_INTEGER */, sessionId /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PromptId_enummeratedPrompt_type, _encode_PromptId_enummeratedPrompt_type } from "../AccessControlFormat-Prompt-1/PromptId-enummeratedPrompt-type.ta.mjs";


/**
 * @summary PromptId_enummeratedPrompt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId-enummeratedPrompt ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PromptId_enummeratedPrompt {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: PromptId_enummeratedPrompt_type,
        /**
         * @summary `suggestedString`.
         * @public
         * @readonly
         */
        readonly suggestedString: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a PromptId_enummeratedPrompt
     * @description
     * 
     * This takes an `object` and converts it to a `PromptId_enummeratedPrompt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PromptId_enummeratedPrompt`.
     * @returns {PromptId_enummeratedPrompt}
     */
    public static _from_object (_o: { [_K in keyof (PromptId_enummeratedPrompt)]: (PromptId_enummeratedPrompt)[_K] }): PromptId_enummeratedPrompt {
        return new PromptId_enummeratedPrompt(_o.type_, _o.suggestedString);
    }


}

/**
 * @summary The Leading Root Component Types of PromptId_enummeratedPrompt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PromptId_enummeratedPrompt: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: suggestedString COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of PromptId_enummeratedPrompt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PromptId_enummeratedPrompt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PromptId_enummeratedPrompt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PromptId_enummeratedPrompt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PromptId_enummeratedPrompt: $.ASN1Decoder<PromptId_enummeratedPrompt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptId_enummeratedPrompt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptId_enummeratedPrompt (el: _Element): PromptId_enummeratedPrompt {
    if (!_cached_decoder_for_PromptId_enummeratedPrompt) { _cached_decoder_for_PromptId_enummeratedPrompt = function (el: _Element): PromptId_enummeratedPrompt {
    let type_!: PromptId_enummeratedPrompt_type;
    let suggestedString: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<PromptId_enummeratedPrompt_type>(() => _decode_PromptId_enummeratedPrompt_type)(_el); },
        "suggestedString": (_el: _Element): void => { suggestedString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PromptId_enummeratedPrompt,
        _extension_additions_list_spec_for_PromptId_enummeratedPrompt,
        _root_component_type_list_2_spec_for_PromptId_enummeratedPrompt,
        undefined,
    );
    return new PromptId_enummeratedPrompt(
        type_,
        suggestedString
    );
}; }
    return _cached_decoder_for_PromptId_enummeratedPrompt(el);
}

let _cached_encoder_for_PromptId_enummeratedPrompt: $.ASN1Encoder<PromptId_enummeratedPrompt> | null = null;

/**
 * @summary Encodes a(n) PromptId_enummeratedPrompt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptId_enummeratedPrompt, encoded as an ASN.1 Element.
 */
export
function _encode_PromptId_enummeratedPrompt (value: PromptId_enummeratedPrompt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptId_enummeratedPrompt) { _cached_encoder_for_PromptId_enummeratedPrompt = function (value: PromptId_enummeratedPrompt, elGetter: $.ASN1Encoder<PromptId_enummeratedPrompt>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PromptId_enummeratedPrompt_type, $.BER)(value.type_, $.BER),
            /* IF_ABSENT  */ ((value.suggestedString === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.suggestedString, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PromptId_enummeratedPrompt(value, elGetter);
}


/* eslint-enable */
