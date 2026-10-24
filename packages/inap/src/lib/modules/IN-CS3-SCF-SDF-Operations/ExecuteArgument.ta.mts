/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ExecuteArgument_Type, _decode_ExecuteArgument_Type, _encode_ExecuteArgument_Type } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument-Type.ta.mjs";
// export { ExecuteArgument_Type, _decode_ExecuteArgument_Type, _encode_ExecuteArgument_Type } from "../IN-CS3-SCF-SDF-Operations/ExecuteArgument-Type.ta.mjs";


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
 *                                  type OPTIONAL,
 *                              valuesWithContext
 *                                [0]  SET OF
 *                                       METHOD.&InputAttributes.&Type
 *                                         ({SupportedMethods}{@method-id, @.type})
 *                                  type OPTIONAL,
 *                              contextList        [1]  SET OF Context} OPTIONAL,
 *           --EDITOR: there is no way (at the moment) in ASN.1
 *           --to reference a component through a SET OF or SEQUENCE OF type.
 *           --The inner SEQUENCE has been removed for compilation purpose.
 *           --Align the descriptive text/comments accordingly.
 *           specific-input
 *             [3]  METHOD.&SpecificInput({SupportedMethods}{@method-id})
 *               type OPTIONAL,
 *           COMPONENTS OF CommonArguments}}
 * ```
 */
export
type ExecuteArgument = OPTIONALLY_PROTECTED<ExecuteArgument_Type>; // DefinedType

let _cached_decoder_for_ExecuteArgument: $.ASN1Decoder<ExecuteArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteArgument (el: _Element): ExecuteArgument {
    if (!_cached_decoder_for_ExecuteArgument) { _cached_decoder_for_ExecuteArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ExecuteArgument_Type>(_decode_ExecuteArgument_Type); }
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
    if (!_cached_encoder_for_ExecuteArgument) { _cached_encoder_for_ExecuteArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ExecuteArgument_Type>(_encode_ExecuteArgument_Type); }
    return _cached_encoder_for_ExecuteArgument(value, elGetter);
}


/* eslint-enable */
