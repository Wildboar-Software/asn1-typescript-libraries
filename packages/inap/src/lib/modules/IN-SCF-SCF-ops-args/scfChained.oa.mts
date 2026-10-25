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
    ChainingArgument,
    _decode_ChainingArgument,
    _encode_ChainingArgument,
} from "../IN-SCF-SCF-ops-args/ChainingArgument.ta.mjs";
import {
    ChainingResult,
    _decode_ChainingResult,
    _encode_ChainingResult,
} from "../IN-SCF-SCF-ops-args/ChainingResult.ta.mjs";
import { chainingRefused } from "../IN-errortypes/chainingRefused.oa.mjs";
import { securityError } from "../DirectoryAbstractService/securityError.oa.mjs";
import { scfReferral } from "../IN-errortypes/scfReferral.oa.mjs";

/**
 * @summary ScfChainedArgument
 * @description
 *
 * Inner SEQUENCE of `scfChained{operation}` ARGUMENT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {chainedArgument  ChainingArgument,
 *           argument         [0]  operation.&ArgumentType OPTIONAL
 * }
 * ```
 */
export interface ScfChainedArgument<Argument = any> {
    chainedArgument: ChainingArgument;
    argument?: Argument;
}

/**
 * @summary ScfChainedResult
 * @description
 *
 * Inner SEQUENCE of `scfChained{operation}` RESULT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {chainedResult  ChainingResult,
 *           result         [0]  operation.&ResultType OPTIONAL
 * }
 * ```
 */
export interface ScfChainedResult<Result = any> {
    chainedResult: ChainingResult;
    result?: Result;
}

const _arg_root: $.ComponentSpec[] = [
    new $.ComponentSpec("chainedArgument", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("argument", true, $.hasTag(_TagClass.context, 0)),
];

const _res_root: $.ComponentSpec[] = [
    new $.ComponentSpec("chainedResult", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("result", true, $.hasTag(_TagClass.context, 0)),
];

function _decode_ScfChainedArgument<Argument>(
    decodeArgument: $.ASN1Decoder<Argument> | undefined,
): $.ASN1Decoder<ScfChainedArgument<Argument>> {
    return (el: _Element): ScfChainedArgument<Argument> => {
        let chainedArgument!: ChainingArgument;
        let argument: Argument | undefined;
        const callbacks: $.DecodingMap = {
            "chainedArgument": (_el: _Element): void => {
                chainedArgument = _decode_ChainingArgument(_el);
            },
            "argument": (_el: _Element): void => {
                if (decodeArgument) {
                    argument = $._decode_explicit<Argument>(() => decodeArgument)(_el);
                }
            },
        };
        $._parse_sequence(el, callbacks, _arg_root, [], []);
        return { chainedArgument, argument };
    };
}

function _encode_ScfChainedArgument<Argument>(
    encodeArgument: $.ASN1Encoder<Argument> | undefined,
): $.ASN1Encoder<ScfChainedArgument<Argument>> {
    return (value: ScfChainedArgument<Argument>, elGetter: $.ASN1Encoder<ScfChainedArgument<Argument>>): _Element => {
        const components: _Element[] = [
            _encode_ChainingArgument(value.chainedArgument, elGetter),
        ];
        if (value.argument !== undefined && encodeArgument) {
            components.push(
                $._encode_explicit(_TagClass.context, 0, () => encodeArgument, $.BER)(value.argument, $.BER),
            );
        }
        return $._encodeSequence(components, $.BER);
    };
}

function _decode_ScfChainedResult<Result>(
    decodeResult: $.ASN1Decoder<Result> | undefined,
): $.ASN1Decoder<ScfChainedResult<Result>> {
    return (el: _Element): ScfChainedResult<Result> => {
        let chainedResult!: ChainingResult;
        let result: Result | undefined;
        const callbacks: $.DecodingMap = {
            "chainedResult": (_el: _Element): void => {
                chainedResult = _decode_ChainingResult(_el);
            },
            "result": (_el: _Element): void => {
                if (decodeResult) {
                    result = $._decode_explicit<Result>(() => decodeResult)(_el);
                }
            },
        };
        $._parse_sequence(el, callbacks, _res_root, [], []);
        return { chainedResult, result };
    };
}

function _encode_ScfChainedResult<Result>(
    encodeResult: $.ASN1Encoder<Result> | undefined,
): $.ASN1Encoder<ScfChainedResult<Result>> {
    return (value: ScfChainedResult<Result>, elGetter: $.ASN1Encoder<ScfChainedResult<Result>>): _Element => {
        const components: _Element[] = [
            _encode_ChainingResult(value.chainedResult, elGetter),
        ];
        if (value.result !== undefined && encodeResult) {
            components.push(
                $._encode_explicit(_TagClass.context, 0, () => encodeResult, $.BER)(value.result, $.BER),
            );
        }
        return $._encodeSequence(components, $.BER);
    };
}

/**
 * @summary scfChained
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scfChained{OPERATION:operation} OPERATION ::= {
 *   ARGUMENT OPTIONALLY-PROTECTED
 *     {SEQUENCE {chainedArgument  ChainingArgument,
 *                argument         [0]  operation.&ArgumentType OPTIONAL
 *      }}
 *   RESULT OPTIONALLY-PROTECTED
 *     {SEQUENCE {chainedResult  ChainingResult,
 *                result         [0]  operation.&ResultType OPTIONAL
 *      }}
 *   ERRORS
 *     {operation.&Errors | chainingRefused | securityError | scfReferral}
 *   CODE                           operation.&operationCode
 * }
 * ```
 *
 * @param operation The SCF-SCF operation to chain.
 * @returns The chained form of `operation`.
 * @function
 */
export function scfChained(operation: OPERATION): OPERATION {
    const decodeArgument = operation.decoderFor["&ArgumentType"];
    const encodeArgument = operation.encoderFor["&ArgumentType"];
    const decodeResult = operation.decoderFor["&ResultType"];
    const encodeResult = operation.encoderFor["&ResultType"];
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": _get_decoder_for_OPTIONALLY_PROTECTED(
                _decode_ScfChainedArgument(decodeArgument),
            ),
            "&ResultType": _get_decoder_for_OPTIONALLY_PROTECTED(
                _decode_ScfChainedResult(decodeResult),
            ),
        },
        encoderFor: {
            "&ArgumentType": _get_encoder_for_OPTIONALLY_PROTECTED(
                _encode_ScfChainedArgument(encodeArgument),
            ),
            "&ResultType": _get_encoder_for_OPTIONALLY_PROTECTED(
                _encode_ScfChainedResult(encodeResult),
            ),
        },
        "&Errors": [
            ...(operation["&Errors"] ?? []),
            chainingRefused,
            securityError,
            scfReferral,
        ],
        "&operationCode": operation["&operationCode"],
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
}

export default scfChained;

/* eslint-enable */
