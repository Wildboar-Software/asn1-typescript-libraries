/* eslint-disable */
import * as $ from "asn1-ts/dist/functional.mjs";
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
/**
 * @summary OPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATION ::= CLASS {
 *   &ArgumentType   OPTIONAL,
 *   &ResultType     OPTIONAL,
 *   &Errors         ERROR OPTIONAL,
 *   &operationCode  Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   [ARGUMENT       &ArgumentType]
 *   [RESULT         &ResultType]
 *   [ERRORS         &Errors]
 *   [CODE           &operationCode] }
 * ```
 *
 * @interface
 */
export interface OPERATION<
    ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    ResultType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPERATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Decoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Encoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary &ArgumentType
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &ResultType
     */
    readonly "&ResultType": ResultType;
    /**
     * @summary &Errors
     */
    readonly "&Errors"?: ERROR[];
    /**
     * @summary &operationCode
     */
    readonly "&operationCode"?: Code;
}

/* eslint-enable */
