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
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-SCF-SDF-Classes/SupportedMethods.osa.mjs";
import { Context, _decode_Context } from "../InformationFramework/Context.ta.mjs";
// export { Context, _decode_Context, _encode_Context } from "../InformationFramework/Context.ta.mjs";
import { CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";
// export { CommonArguments, _decode_CommonArguments, _encode_CommonArguments } from "../DirectoryAbstractService/CommonArguments.ta.mjs";


/**
 * @summary ExecuteArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SET {object            [0]  Name,
 *           method-id         [1]  METHOD.&id({SupportedMethods}),
 *           input-assertions
 *             [2]  SEQUENCE OF
 *                    SEQUENCE {type
 *                                METHOD.&InputAttributes.&id
 *                                  ({SupportedMethods}{@method-id}),
 *                              values
 *                                SET OF
 *                                  METHOD.&InputAttributes.&Type
 *                                    ({SupportedMethods}{@method-id, @.type})
 *                                  OPTIONAL,
 *                              valuesWithContext
 *                                [0]  SET OF
 *                                       SEQUENCE {value
 *                                                   [0]  METHOD.
 *                                                          &InputAttributes.
 *                                                            &Type
 *                                                          ({SupportedMethods}
 *                                                             {@method-id, @...
 *                                                                     type})
 *                                                     OPTIONAL,
 *                                                 contextList
 *                                                   [1]  SET OF Context
 *                                       } OPTIONAL} OPTIONAL,
 *           specific-input
 *             [3]  METHOD.&SpecificInput({SupportedMethods}{@method-id})
 *               OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ExecuteArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_input: _Element; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_ExecuteArgument: $.ASN1Decoder<ExecuteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteArgument (el: _Element): ExecuteArgument {
    if (!_cached_decoder_for_ExecuteArgument) { _cached_decoder_for_ExecuteArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_input: _Element; _componentsOf: CommonArguments }>(function (el: _Element): OPTIONALLY_PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let object!: Name;
    let method_id!: OBJECT_IDENTIFIER;
    let input_assertions: OPTIONAL<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]>;
    let specific_input: OPTIONAL<_Element>;
    let _componentsOf!: CommonArguments;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "object": (_el: _Element): void => { object = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "method-id": (_el: _Element): void => { method_id = $._decode_explicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "input-assertions": (_el: _Element): void => { input_assertions = $._decode_explicit<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]>(() => $._decodeSequenceOf<{ type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }>(() => function (el: _Element): input_assertions {
    let type_!: _Element;
    let values: OPTIONAL<_Element[]>;
    let valuesWithContext: OPTIONAL<{ value: _Element; contextList: OPTIONAL<Context[]> }[]>;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decodeAny(_el); },
        "values": (_el: _Element): void => { values = $._decodeSetOf<_Element>(() => $._decodeAny)(_el); },
        "valuesWithContext": (_el: _Element): void => { valuesWithContext = $._decode_explicit<{ value: _Element; contextList: OPTIONAL<Context[]> }[]>(() => $._decodeSetOf<{ value: _Element; contextList: OPTIONAL<Context[]> }>(() => function (el: _Element): valuesWithContext {
    let value: OPTIONAL<_Element>;
    let contextList!: Context[];
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
        "contextList": (_el: _Element): void => { contextList = $._decode_explicit<Context[]>(() => $._decodeSetOf<Context>(() => _decode_Context))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_valuesWithContext,
        _extension_additions_list_spec_for_valuesWithContext,
        _root_component_type_list_2_spec_for_valuesWithContext,
        undefined,
    );
    return new valuesWithContext(
        value,
        contextList
    );
}))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_input_assertions,
        _extension_additions_list_spec_for_input_assertions,
        _root_component_type_list_2_spec_for_input_assertions,
        undefined,
    );
    return new input_assertions(
        type_,
        values,
        valuesWithContext
    );
}))(_el); },
        "specific-input": (_el: _Element): void => { specific_input = $._decode_explicit<_Element>(() => $._decodeAny)(_el); },
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
        object,
        method_id,
        input_assertions,
        specific_input,
        _componentsOf
    );
}); }
    return _cached_decoder_for_ExecuteArgument(el);
}

let _cached_encoder_for_ExecuteArgument: $.ASN1Encoder<ExecuteArgument> | null = null;

/**
 * @summary Encodes a(n) ExecuteArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteArgument (value: ExecuteArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteArgument) { _cached_encoder_for_ExecuteArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_input: _Element; _componentsOf: CommonArguments }>(function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.object, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.method_id, $.BER));
    /* FIXME: input-assertions COULD_NOT_COMPILE_TYPE_ENCODER */
    if (value.specific_input !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeAny, $.BER)(value.specific_input, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}); }
    return _cached_encoder_for_ExecuteArgument(value, elGetter);
}


/* eslint-enable */
