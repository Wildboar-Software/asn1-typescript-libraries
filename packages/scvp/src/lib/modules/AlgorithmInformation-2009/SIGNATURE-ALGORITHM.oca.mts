/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { PUBLIC_KEY } from "../AlgorithmInformation-2009/PUBLIC-KEY.oca.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
/**
 * @summary SIGNATURE_ALGORITHM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNATURE-ALGORITHM ::= CLASS {
 * &id             OBJECT IDENTIFIER UNIQUE,
 * &Value          OPTIONAL,
 * &Params         OPTIONAL,
 * &paramPresence  ParamOptions DEFAULT absent,
 * &HashSet        DIGEST-ALGORITHM OPTIONAL,
 * &PublicKeySet   PUBLIC-KEY OPTIONAL,
 * &smimeCaps      SMIME-CAPS OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [VALUE &Value]
 * [PARAMS [TYPE &Params] ARE &paramPresence ]
 * [HASHES &HashSet]
 * [PUBLIC-KEYS &PublicKeySet]
 * [SMIME-CAPS &smimeCaps]
 * }
 * ```
 *
 * @interface
 */
export interface SIGNATURE_ALGORITHM<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SIGNATURE-ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SIGNATURE_ALGORITHM<Value, Params>]: $.ASN1Decoder<
                SIGNATURE_ALGORITHM<Value, Params>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SIGNATURE_ALGORITHM<Value, Params>]: $.ASN1Encoder<
                SIGNATURE_ALGORITHM<Value, Params>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Value
     */
    readonly "&Value": Value;
    /**
     * @summary &Params
     */
    readonly "&Params": Params;
    /**
     * @summary &paramPresence
     */
    readonly "&paramPresence"?: ParamOptions;
    /**
     * @summary &HashSet
     */
    readonly "&HashSet"?: DIGEST_ALGORITHM[];
    /**
     * @summary &PublicKeySet
     */
    readonly "&PublicKeySet"?: PUBLIC_KEY[];
    /**
     * @summary &smimeCaps
     */
    readonly "&smimeCaps"?: SMIME_CAPS;
}

/* eslint-enable */
