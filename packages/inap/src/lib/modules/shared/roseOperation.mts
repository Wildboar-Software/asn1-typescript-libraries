import { INTEGER, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type * as $ from "@wildboar/asn1/functional";
import { type Code, type ERROR, type OPERATION } from "@wildboar/rose";

/**
 * Directory `OPERATION` / `ERROR` values use the X.519 information object
 * classes. IN modules place those same values in X.880 `OPERATION` and
 * `ERROR` object sets. These helpers copy the codecs and the code onto
 * an X.880 information object.
 */

interface DirectoryError<Parameter> {
    readonly "&ParameterType": Parameter;
    readonly decoderFor: {
        readonly "&ParameterType"?: $.ASN1Decoder<Parameter>;
    };
    readonly encoderFor: {
        readonly "&ParameterType"?: $.ASN1Encoder<Parameter>;
    };
    readonly "&errorCode"?: object;
    readonly "&parameterTypeOptional"?: boolean;
}

interface DirectoryOperation<Argument, Result> {
    readonly "&ArgumentType": Argument;
    readonly "&ResultType": Result;
    readonly decoderFor: {
        readonly "&ArgumentType"?: $.ASN1Decoder<Argument>;
        readonly "&ResultType"?: $.ASN1Decoder<Result>;
    };
    readonly encoderFor: {
        readonly "&ArgumentType"?: $.ASN1Encoder<Argument>;
        readonly "&ResultType"?: $.ASN1Encoder<Result>;
    };
    readonly "&operationCode"?: object;
    readonly "&Errors"?: readonly DirectoryError<any>[];
    readonly "&argumentTypeOptional"?: boolean;
    readonly "&returnResult"?: boolean;
    readonly "&resultTypeOptional"?: boolean;
    readonly "&synchronous"?: boolean;
    readonly "&alwaysReturns"?: boolean;
}

function isLocalCode(value: object): value is { local: INTEGER } {
    if (!("local" in value)) {
        return false;
    }
    const local = (value as { local?: unknown }).local;
    return typeof local === "number" || typeof local === "bigint";
}

function isGlobalCode(value: object): value is { global: OBJECT_IDENTIFIER } {
    if (!("global" in value)) {
        return false;
    }
    const global = (value as { global?: unknown }).global;
    return typeof global === "object" && global !== null && "nodes" in global;
}

export function roseCode(code: object): Code {
    if (isLocalCode(code)) {
        return { local: code.local };
    }
    if (isGlobalCode(code)) {
        return { global: code.global };
    }
    throw new Error("Expected an ASN.1 local or global code");
}

export function roseError<Parameter>(err: DirectoryError<Parameter>): ERROR<Parameter> {
    return {
        class: "ERROR",
        decoderFor: {
            "&ParameterType": err.decoderFor["&ParameterType"],
        },
        encoderFor: {
            "&ParameterType": err.encoderFor["&ParameterType"],
        },
        "&errorCode": err["&errorCode"] === undefined ? undefined : roseCode(err["&errorCode"]),
        "&parameterTypeOptional": err["&parameterTypeOptional"],
        "&ParameterType": 0 as never,
    };
}

export function roseOperation<Argument, Result>(
    op: DirectoryOperation<Argument, Result>,
): OPERATION<Argument, Result> {
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": op.decoderFor["&ArgumentType"],
            "&ResultType": op.decoderFor["&ResultType"],
        },
        encoderFor: {
            "&ArgumentType": op.encoderFor["&ArgumentType"],
            "&ResultType": op.encoderFor["&ResultType"],
        },
        "&Errors": op["&Errors"]?.map((err) => roseError(err)),
        "&operationCode": op["&operationCode"] === undefined ? undefined : roseCode(op["&operationCode"]),
        "&argumentTypeOptional": op["&argumentTypeOptional"],
        "&returnResult": op["&returnResult"],
        "&resultTypeOptional": op["&resultTypeOptional"],
        "&synchronous": op["&synchronous"],
        "&alwaysReturns": op["&alwaysReturns"],
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
}
