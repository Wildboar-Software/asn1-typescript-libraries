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
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";
// export { SupportedMethods } from "../IN-SCF-SDF-Classes/SupportedMethods.osa.mjs";
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
 *                                       SEQUENCE {value
 *                                                   [0]  METHOD.
 *                                                          &OutputAttributes.
 *                                                            &Type
 *                                                          ({SupportedMethods}
 *                                                             {@method-id, @...
 *                                                                     type})
 *                                                     OPTIONAL,
 *                                                 contextList
 *                                                   [1]  SET OF Context
 *                                       } OPTIONAL} OPTIONAL,
 *           specific-output
 *             [3]  METHOD.&SpecificOutput({SupportedMethods}{@method-id})
 *               OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 * ```
 */
export
type ExecuteResult = OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_output: _Element; _componentsOf: CommonResults }>; // DefinedType

let _cached_decoder_for_ExecuteResult: $.ASN1Decoder<ExecuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteResult (el: _Element): ExecuteResult {
    if (!_cached_decoder_for_ExecuteResult) { _cached_decoder_for_ExecuteResult = _get_decoder_for_OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_output: _Element; _componentsOf: CommonResults }>(function (el: _Element): any {
    // FIXME: COULD_NOT_COMPILE_TYPE_DECODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_DECODER");
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
    if (!_cached_encoder_for_ExecuteResult) { _cached_encoder_for_ExecuteResult = _get_encoder_for_OPTIONALLY_PROTECTED<{ method_id: OPTIONAL<OBJECT_IDENTIFIER>; output_assertions: { type_: OPTIONAL<_Element>; values: _Element[]; valuesWithContext: { value: _Element; contextList: OPTIONAL<Context[]> }[] }[]; specific_output: _Element; _componentsOf: CommonResults }>(function (value: any, elGetter: $.ASN1Encoder<any>): _Element {
    // FIXME: COULD_NOT_COMPILE_TYPE_ENCODER
    throw new Error("FIXME: COULD_NOT_COMPILE_TYPE_ENCODER");
}); }
    return _cached_encoder_for_ExecuteResult(value, elGetter);
}


/* eslint-enable */
