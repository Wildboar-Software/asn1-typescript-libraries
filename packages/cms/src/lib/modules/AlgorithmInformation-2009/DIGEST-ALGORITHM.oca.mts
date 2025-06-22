/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";

/**
 * @summary DIGEST_ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DIGEST-ALGORITHM ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence ]
 * }
 * ```
 *
 * @interface
 */
export interface DIGEST_ALGORITHM<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DIGEST-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Decoder<
                DIGEST_ALGORITHM<Params>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof DIGEST_ALGORITHM<Params>]: $.ASN1Encoder<
                DIGEST_ALGORITHM<Params>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
}

/* eslint-enable */
