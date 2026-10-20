/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type Code, type OPERATION } from "@wildboar/rose";

/**
 * @summary makeConfirm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * makeConfirm{OPERATION:operation, Code:code} OPERATION ::= {
 *   ARGUMENT         operation.&ArgumentType
 *   OPTIONAL         operation.&argumentTypeOptional
 *   RESULT           NULL
 *   ERRORS           {operation.&Errors}
 *   ALWAYS RESPONDS  TRUE
 *   CODE             code
 * }
 * ```
 *
 * @param operation The operation whose argument and errors are reused.
 * @param code The operation code of the confirmed form.
 * @returns A confirmed operation that returns NULL.
 * @function
 */
export function makeConfirm(operation: OPERATION, code: Code): OPERATION {
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": operation.decoderFor["&ArgumentType"],
            "&ResultType": $._decodeNull,
        },
        encoderFor: {
            "&ArgumentType": operation.encoderFor["&ArgumentType"],
            "&ResultType": $._encodeNull,
        },
        "&argumentTypeOptional": operation["&argumentTypeOptional"],
        "&Errors": operation["&Errors"],
        "&alwaysReturns": true,
        "&operationCode": code,
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
}

export default makeConfirm;

/* eslint-enable */
