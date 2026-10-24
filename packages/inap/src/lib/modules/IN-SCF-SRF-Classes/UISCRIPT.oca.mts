/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary UISCRIPT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UISCRIPT ::= CLASS {
 *   &SpecificInfo  OPTIONAL,
 *   &Result        type OPTIONAL,
 *   &id            Code
 * }
 * WITH SYNTAX {
 *   [WITH-SPECIFICINFO &SpecificInfo]
 *   [WITH-RESULT &Result]
 *   IDENTIFIED BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface UISCRIPT<
    SpecificInfo = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Result = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "UISCRIPT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof UISCRIPT<SpecificInfo,Result>]: $.ASN1Decoder<UISCRIPT<SpecificInfo,Result>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof UISCRIPT<SpecificInfo,Result>]: $.ASN1Encoder<UISCRIPT<SpecificInfo,Result>[_K]>;
    }>;
    /**
     * @summary &SpecificInfo
     */
    readonly "&SpecificInfo": SpecificInfo;
    /**
     * @summary &Result
     */
    readonly "&Result": Result;
    /**
     * @summary &id
     */
    readonly "&id"?: Code;
};

/* eslint-enable */
