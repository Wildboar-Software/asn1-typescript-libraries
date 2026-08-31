/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { type SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
/**
 * @summary ALGORITHM
 * @description
 *
 * Generic algorithm information object class
 * ([RFC 5911 §2](https://datatracker.ietf.org/doc/html/rfc5911#section-2)).
 * Used where an algorithm of unknown specialized type appears; prefer a
 * more complete class (`DIGEST-ALGORITHM`, `SIGNATURE-ALGORITHM`, etc.)
 * or `TYPE-IDENTIFIER` when possible. Fields `&id` and `&Params` must be
 * present on objects used with parameterized `AlgorithmIdentifier`.
 * Also in [RFC 5912 §3](https://datatracker.ietf.org/doc/html/rfc5912#section-3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 * &id OBJECT   IDENTIFIER UNIQUE,
 * &Params      OPTIONAL,
 * &paramPresence ParamOptions DEFAULT absent,
 * &smimeCaps   SMIME-CAPS OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [SMIME-CAPS &smimeCaps]
 * }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM<Params>]: $.ASN1Decoder<
                ALGORITHM<Params>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Params>]: $.ASN1Encoder<
                ALGORITHM<Params>[_K]
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
    /**
     * @summary &smimeCaps
     */
    readonly "&smimeCaps"?: SMIME_CAPS;
}

/* eslint-enable */
