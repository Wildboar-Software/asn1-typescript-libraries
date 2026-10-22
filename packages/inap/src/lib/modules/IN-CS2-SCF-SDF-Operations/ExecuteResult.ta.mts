/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { ExecuteResult_Type, _decode_ExecuteResult_Type, _encode_ExecuteResult_Type } from "../IN-CS2-SCF-SDF-Operations/ExecuteResult-Type.ta.mjs";
// export { ExecuteResult_Type, _decode_ExecuteResult_Type, _encode_ExecuteResult_Type } from "../IN-CS2-SCF-SDF-Operations/ExecuteResult-Type.ta.mjs";


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
 *                                    ({SupportedMethods}{@method-id}) OPTIONAL,
 *                              valuesWithContext
 *                                [0]  SET OF
 *                                       SEQUENCE {value
 *                                                   [0]  METHOD.
 *                                                          &OutputAttributes.
 *                                                            &Type
 *                                                          ({SupportedMethods}
 *                                                             {@method-id})
 *                                                     OPTIONAL,
 *                                                 contextList
 *                                                   [1]  SET OF Context
 *                                       } OPTIONAL} OPTIONAL,
 *           COMPONENTS OF CommonResults}}
 * ```
 */
export
type ExecuteResult = OPTIONALLY_PROTECTED<ExecuteResult_Type>; // DefinedType

let _cached_decoder_for_ExecuteResult: $.ASN1Decoder<ExecuteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteResult (el: _Element): ExecuteResult {
    if (!_cached_decoder_for_ExecuteResult) { _cached_decoder_for_ExecuteResult = _get_decoder_for_OPTIONALLY_PROTECTED<ExecuteResult_Type>(_decode_ExecuteResult_Type); }
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
    if (!_cached_encoder_for_ExecuteResult) { _cached_encoder_for_ExecuteResult = _get_encoder_for_OPTIONALLY_PROTECTED<ExecuteResult_Type>(_encode_ExecuteResult_Type); }
    return _cached_encoder_for_ExecuteResult(value, elGetter);
}


/* eslint-enable */
