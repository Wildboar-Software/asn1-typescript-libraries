/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { METHOD } from "../IN-CS3-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-CS3-SCF-SDF-Classes/SupportedMethods.osa.mjs";
import { Context, _decode_Context } from "../InformationFramework/Context.ta.mjs";
// export { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


/**
 * @summary ExecuteResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteResult  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {method-id          [1]  METHOD.&id({SupportedMethods}),
 *           output-assertions
 *             [2]  SEQUENCE OF
 *                    SEQUENCE {type
 *                                METHOD.&OutputAttributes.&id
 *                                  ({SupportedMethods}{@method-id}),
 *                              values
 *                                SET OF
 *                                  METHOD.&OutputAttributes.&Type
 *                                    ({SupportedMethods}{@method-id, @.type})
 *                                  OPTIONAL,
 *                              valuesWithContext
 *                                [0]  SET OF
 *                                       METHOD.&OutputAttributes.&Type
 *                                         ({SupportedMethods}{@method-id, @.type})
 *                                  OPTIONAL,
 *                              contextList        [1]  SET OF Context} OPTIONAL,
 *           --EDITOR: there is no way (at the moment) in ASN.1 to reference a component
 *           --through a SET OF or SEQUENCE OF type. The inner SEQUENCE has been removed
 *           --for compilation purpose. Align the descriptive text/comments accordingly.
 *           specific-output
 *             [3]  METHOD.&SpecificOutput({SupportedMethods}{@method-id})
 *               OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 * ```
 */
export
type ExecuteResult = OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_output: _Element; _componentsOf: CommonResults }>; // DefinedType

let _cached_decoder_for_ExecuteResult: $.ASN1Decoder<ExecuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteResult (el: _Element): ExecuteResult {
    if (!_cached_decoder_for_ExecuteResult) { _cached_decoder_for_ExecuteResult = _get_decoder_for_OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_output: _Element; _componentsOf: CommonResults }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let method_id!: OBJECT_IDENTIFIER;
    let output_assertions: OPTIONAL<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]>;
    let specific_output: OPTIONAL<_Element>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "method-id": (_el: _Element): void => { method_id = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "output-assertions": (_el: _Element): void => { output_assertions = $._decode_explicit<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]>(() => $._decodeSequenceOf<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }>(() => function (el: _Element): output_assertions {
    let type_!: _Element;
    let values: OPTIONAL<_Element[]>;
    let valuesWithContext: OPTIONAL<_Element[]>;
    let contextList!: Context[];
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeAny(_el); },
        "values": (_el: _Element): void => { values = $._decodeSetOf<_Element>(() => $._decodeAny)(_el); },
        "valuesWithContext": (_el: _Element): void => { valuesWithContext = $._decode_explicit<_Element[]>(() => $._decodeSetOf<_Element>(() => $._decodeAny))(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decode_explicit<Context[]>(() => $._decodeSetOf<Context>(() => _decode_Context))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_output_assertions,
        _extension_additions_list_spec_for_output_assertions,
        _root_component_type_list_2_spec_for_output_assertions,
        undefined,
    );
    return new output_assertions(
        type_,
        values,
        valuesWithContext,
        contextList
    );
}))(_el); },
        "specific-output": (_el: _Element): void => { specific_output = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED( /* SET_CONSTRUCTOR_CALL */
        method_id,
        output_assertions,
        specific_output,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ExecuteResult(el);
}

let _cached_encoder_for_ExecuteResult: $.ASN1Encoder<ExecuteResult> | null = null;

/**
 * @summary Encodes a(n) ExecuteResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteResult, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteResult (value: ExecuteResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteResult) { _cached_encoder_for_ExecuteResult = _get_encoder_for_OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_output: _Element; _componentsOf: CommonResults }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.method_id, $.BER));
    /* FIXME: output-assertions COULD_NOT_COMPILE_TYPE_ENCODER */
    if (value.specific_output !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeAny, $.BER)(value.specific_output, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ExecuteResult(value, elGetter);
}


/* eslint-enable */
