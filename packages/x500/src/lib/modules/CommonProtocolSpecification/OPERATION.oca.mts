/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
import { type ERROR } from "../CommonProtocolSpecification/ERROR.oca.mjs";
/**
 * @summary OPERATION
 * @description
 *
 * Ties a request to optional result/errors via `&operationCode`. Absent
 * `&ResultType` ⇒ no result; absent `&Errors` ⇒ no error; absent
 * `&operationCode` ⇒ Bind (no InvokeId). Codes are UNIQUE within a
 * protocol, not across DAP/DSP vs DISP vs DOP. Does not imply sequencing:
 * sync vs async is a property of the association / application-context.
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
     * @description
     *
     * Open type for the request. Absent ⇒ no argument.
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &ResultType
     * @description
     *
     * Open type for a successful reply. Absent ⇒ no result.
     */
    readonly "&ResultType": ResultType;
    /**
     * @summary &Errors
     * @description
     *
     * Errors that may be returned instead of a result. Absent ⇒ no error
     * associated with the operation.
     */
    readonly "&Errors"?: ERROR[];
    /**
     * @summary &operationCode
     * @description
     *
     * UNIQUE within the protocol. Absent for Bind. Directory uses `local`
     * integers; the same integer may mean different ops in DAP vs DISP.
     */
    readonly "&operationCode"?: Code;
}

/* eslint-enable */
