/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ParamOptions } from "../AlgorithmInformation-2009/ParamOptions.ta.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
/**
 * @summary KEY_DERIVATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEY-DERIVATION ::= CLASS {
 * &id                OBJECT IDENTIFIER UNIQUE,
 * &Params        OPTIONAL,
 * &paramPresence    ParamOptions DEFAULT absent,
 * &smimeCaps        SMIME-CAPS OPTIONAL
 * } WITH SYNTAX {
 * IDENTIFIER &id
 * [PARAMS [TYPE &Params] ARE &paramPresence]
 * [SMIME-CAPS &smimeCaps]
 * }
 * ```
 *
 * @interface
 */
export interface KEY_DERIVATION<
    Params = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "KEY-DERIVATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof KEY_DERIVATION<Params>]: $.ASN1Decoder<
                KEY_DERIVATION<Params>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof KEY_DERIVATION<Params>]: $.ASN1Encoder<
                KEY_DERIVATION<Params>[_K]
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
