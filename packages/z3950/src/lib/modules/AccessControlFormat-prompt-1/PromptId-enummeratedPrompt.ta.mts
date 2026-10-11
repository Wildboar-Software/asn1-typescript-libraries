/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PromptId_enummeratedPrompt_type, _decode_PromptId_enummeratedPrompt_type, _encode_PromptId_enummeratedPrompt_type } from "../AccessControlFormat-prompt-1/PromptId-enummeratedPrompt-type.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary PromptId_enummeratedPrompt
 * @description
 * 
 * A registered prompt id (ASN1.9.1). The standard spells the name
 * enummeratedPrompt.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptId-enummeratedPrompt ::= SEQUENCE {
 *     type [1] IMPLICIT INTEGER {
 *         groupId (0),
 *         userId (1),
 *         password (2),
 *         newPassword (3),
 *         copyright (4),
 *         -- See comment 7
 *         sessionId (5)
 *     },
 *     suggestedString [2] IMPLICIT InternationalString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PromptId_enummeratedPrompt {
    /**
     * @summary `type_`.
     * @description
     * 
     * Which registered prompt. Copyright and newPassword have further rules;
     * the others are names only.
     * 
     * @public
     * @readonly
     */
    readonly type_: PromptId_enummeratedPrompt_type;
    /**
     * @summary `suggestedString`.
     * @description
     * 
     * ASN1.9.1 includes this and does not say how the client uses it.
     * 
     * @public
     * @readonly
     */
    readonly suggestedString: OPTIONAL<InternationalString>;

    constructor (
        type_: PromptId_enummeratedPrompt_type,
        suggestedString: OPTIONAL<InternationalString>
    ) {
        this.type_ = type_;
        this.suggestedString = suggestedString;
    }

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
    new $.ComponentSpec("suggestedString", true, $.hasTag(_TagClass.context, 2))
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
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PromptId_enummeratedPrompt_type, $.BER)(value.type_, $.BER);
    if (value.suggestedString !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.suggestedString, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PromptId_enummeratedPrompt(value, elGetter);
}


/* eslint-enable */
