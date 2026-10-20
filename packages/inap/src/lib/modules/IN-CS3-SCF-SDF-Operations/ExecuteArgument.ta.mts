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
// export { METHOD } from "../IN-CS3-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-CS3-SCF-SDF-Classes/SupportedMethods.osa.mjs";
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
 *                                       METHOD.&InputAttributes.&Type
 *                                         ({SupportedMethods}{@method-id, @.type})
 *                                  OPTIONAL,
 *                              contextList        [1]  SET OF Context} OPTIONAL,
 *           --EDITOR: there is no way (at the moment) in ASN.1
 *           --to reference a component through a SET OF or SEQUENCE OF type.
 *           --The inner SEQUENCE has been removed for compilation purpose.
 *           --Align the descriptive text/comments accordingly.
 *           specific-input
 *             [3]  METHOD.&SpecificInput({SupportedMethods}{@method-id})
 *               OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ExecuteArgument = OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_input: _Element; _componentsOf: CommonArguments }>; // DefinedType

let _cached_decoder_for_ExecuteArgument: $.ASN1Decoder<ExecuteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteArgument (el: _Element): ExecuteArgument {
    if (!_cached_decoder_for_ExecuteArgument) { _cached_decoder_for_ExecuteArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_input: _Element; _componentsOf: CommonArguments }>(function (el: _Element): any {
    // FIXME: COULD_NOT_COMPILE_TYPE_DECODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_DECODER");
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
    if (!_cached_encoder_for_ExecuteArgument) { _cached_encoder_for_ExecuteArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ object: OPTIONAL<Name>; method_id: OPTIONAL<OBJECT_IDENTIFIER>; input_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: _Element[]; contextList: OPTIONAL<Context[]> }[]; specific_input: _Element; _componentsOf: CommonArguments }>(function (value: any, elGetter: $.ASN1Encoder<any>): _Element {
    // FIXME: COULD_NOT_COMPILE_TYPE_ENCODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_ENCODER");
}); }
    return _cached_encoder_for_ExecuteArgument(value, elGetter);
}


/* eslint-enable */
