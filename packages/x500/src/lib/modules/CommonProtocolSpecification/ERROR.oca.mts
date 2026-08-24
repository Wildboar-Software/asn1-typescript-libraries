/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { Code } from "../CommonProtocolSpecification/Code.ta.mjs";
/**
 * @summary ERROR
 * @description
 *
 * Unsuccessful outcome of an operation. `&ParameterType` is required.
 * `&errorCode` is UNIQUE within a protocol. Local integers are reused
 * across protocols (`shadowError` is local:1, same as DAP
 * `attributeError`). Unknown error types/problems are not protocol
 * violations (ignore / pass through; do not abort).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR ::= CLASS {
 *   &ParameterType,
 *   &errorCode      Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   PARAMETER       &ParameterType
 *   [CODE           &errorCode] }
 * ```
 *
 * @interface
 */
export interface ERROR<
    ParameterType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ERROR";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Decoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Encoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary &ParameterType
     * @description
     *
     * Required. Nature of the error; unknown problems/parameters shall not
     * be treated as a protocol violation.
     */
    readonly "&ParameterType": ParameterType;
    /**
     * @summary &errorCode
     * @description
     *
     * UNIQUE within the protocol. Directory uses `local` integers;
     * `referral` (4) is DAP-only, `dsaReferral` (9) is DSP-only.
     */
    readonly "&errorCode"?: Code;
}

/* eslint-enable */
