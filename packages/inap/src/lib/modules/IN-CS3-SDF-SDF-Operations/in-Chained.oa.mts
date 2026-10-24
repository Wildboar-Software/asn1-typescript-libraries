/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ERROR, type OPERATION } from "@wildboar/rose";
import {
    type OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import {
    type IN_ChainingArguments,
    _decode_IN_ChainingArguments,
    _encode_IN_ChainingArguments,
} from "../IN-CS3-SDF-SDF-Operations/IN-ChainingArguments.ta.mjs";
import {
    type IN_ChainingResults,
    _decode_IN_ChainingResults,
    _encode_IN_ChainingResults,
} from "../IN-CS3-SDF-SDF-Operations/IN-ChainingResults.ta.mjs";
import { referral } from "../DirectoryAbstractService/referral.oa.mjs";
import { in_DSAReferral } from "../IN-CS3-SDF-SDF-Operations/in-DSAReferral.oa.mjs";

/**
 * @summary InChainedArgument
 * @description
 *
 * Inner SET of `in-Chained{operation}` ARGUMENT. Tagging follows
 * IN-SDF-SDF-Operations, which is defined without an IMPLICIT TAGS clause,
 * so `[0]` is explicit.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SET {in-chainedArgument  IN-ChainingArguments,
 *      argument            [0]  operation.&ArgumentType}
 * ```
 */
export interface InChainedArgument<Argument = any> {
    in_chainedArgument: IN_ChainingArguments;
    argument: Argument;
}

/**
 * @summary InChainedResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SET {in-chainedResult  IN-ChainingResults,
 *      result            [0]  operation.&ResultType}
 * ```
 */
export interface InChainedResult<Result = any> {
    in_chainedResult: IN_ChainingResults;
    result: Result;
}

const _arg_root: $.ComponentSpec[] = [
    new $.ComponentSpec("in-chainedArgument", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argument", false, $.hasTag(_TagClass.context, 0)),
];

const _res_root: $.ComponentSpec[] = [
    new $.ComponentSpec("in-chainedResult", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("result", false, $.hasTag(_TagClass.context, 0)),
];

function _decode_InChainedArgument<Argument>(
    decodeArgument: $.ASN1Decoder<Argument> | undefined,
): $.ASN1Decoder<InChainedArgument<Argument>> {
    return (el: _Element): InChainedArgument<Argument> => {
        let in_chainedArgument!: IN_ChainingArguments;
        let argument!: Argument;
        const callbacks: $.DecodingMap = {
            "in-chainedArgument": (_el: _Element): void => {
                in_chainedArgument = _decode_IN_ChainingArguments(_el);
            },
            "argument": (_el: _Element): void => {
                if (decodeArgument) {
                    argument = $._decode_explicit<Argument>(() => decodeArgument)(_el);
                }
            },
        };
        $._parse_set(el, callbacks, _arg_root, [], []);
        return { in_chainedArgument, argument };
    };
}

function _encode_InChainedArgument<Argument>(
    encodeArgument: $.ASN1Encoder<Argument> | undefined,
): $.ASN1Encoder<InChainedArgument<Argument>> {
    return (value: InChainedArgument<Argument>, elGetter: $.ASN1Encoder<InChainedArgument<Argument>>): _Element => {
        const components: _Element[] = [
            _encode_IN_ChainingArguments(value.in_chainedArgument, elGetter as unknown as $.ASN1Encoder<IN_ChainingArguments>),
        ];
        if (encodeArgument) {
            components.push(
                $._encode_explicit(_TagClass.context, 0, () => encodeArgument, $.BER)(value.argument, $.BER),
            );
        }
        return $._encodeSet(components, $.BER);
    };
}

function _decode_InChainedResult<Result>(
    decodeResult: $.ASN1Decoder<Result> | undefined,
): $.ASN1Decoder<InChainedResult<Result>> {
    return (el: _Element): InChainedResult<Result> => {
        let in_chainedResult!: IN_ChainingResults;
        let result!: Result;
        const callbacks: $.DecodingMap = {
            "in-chainedResult": (_el: _Element): void => {
                in_chainedResult = _decode_IN_ChainingResults(_el);
            },
            "result": (_el: _Element): void => {
                if (decodeResult) {
                    result = $._decode_explicit<Result>(() => decodeResult)(_el);
                }
            },
        };
        $._parse_set(el, callbacks, _res_root, [], []);
        return { in_chainedResult, result };
    };
}

function _encode_InChainedResult<Result>(
    encodeResult: $.ASN1Encoder<Result> | undefined,
): $.ASN1Encoder<InChainedResult<Result>> {
    return (value: InChainedResult<Result>, elGetter: $.ASN1Encoder<InChainedResult<Result>>): _Element => {
        const components: _Element[] = [
            _encode_IN_ChainingResults(value.in_chainedResult, elGetter as unknown as $.ASN1Encoder<IN_ChainingResults>),
        ];
        if (encodeResult) {
            components.push(
                $._encode_explicit(_TagClass.context, 0, () => encodeResult, $.BER)(value.result, $.BER),
            );
        }
        return $._encodeSet(components, $.BER);
    };
}

/**
 * @summary in_Chained
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * in-Chained{OPERATION:operation} OPERATION ::= {
 *   ARGUMENT OPTIONALLY-PROTECTED
 *     {SET {in-chainedArgument  IN-ChainingArguments,
 *           argument            [0]  operation.&ArgumentType}}
 *   RESULT OPTIONALLY-PROTECTED
 *     {SET {in-chainedResult  IN-ChainingResults,
 *           result            [0]  operation.&ResultType}}
 *   ERRORS
 *     {operation.&Errors EXCEPT (referral | in-DSAReferral)}
 *   CODE                           operation.&operationCode
 * }
 * ```
 *
 * @param operation The SDF-SDF operation to chain.
 * @returns The chained form of `operation`.
 * @function
 */
export function in_Chained(operation: OPERATION): OPERATION {
    const decodeArgument = operation.decoderFor["&ArgumentType"];
    const encodeArgument = operation.encoderFor["&ArgumentType"];
    const decodeResult = operation.decoderFor["&ResultType"];
    const encodeResult = operation.encoderFor["&ResultType"];
    const errors = (operation["&Errors"] ?? []).filter(
        (err: ERROR): boolean => err !== (referral) && err !== in_DSAReferral,
    );
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": _get_decoder_for_OPTIONALLY_PROTECTED(
                _decode_InChainedArgument(decodeArgument),
            ),
            "&ResultType": _get_decoder_for_OPTIONALLY_PROTECTED(
                _decode_InChainedResult(decodeResult),
            ),
        },
        encoderFor: {
            "&ArgumentType": _get_encoder_for_OPTIONALLY_PROTECTED(
                _encode_InChainedArgument(encodeArgument),
            ),
            "&ResultType": _get_encoder_for_OPTIONALLY_PROTECTED(
                _encode_InChainedResult(encodeResult),
            ),
        },
        "&Errors": errors,
        "&operationCode": operation["&operationCode"],
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
}

export default in_Chained;

/* eslint-enable */
