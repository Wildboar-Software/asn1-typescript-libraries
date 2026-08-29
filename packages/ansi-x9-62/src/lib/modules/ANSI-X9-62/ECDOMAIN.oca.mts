/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ECDOMAIN
 * @description
 *
 * Class for named EC domain parameters. Not in ANSI X9.62-1998
 * (that edition used `CURVES` / `CurveNames`). Used with
 * `ANSIX9NamedDomains`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDOMAIN ::= CLASS {
 * &id OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { ID &id }
 * ```
 *
 * @interface
 */
export interface ECDOMAIN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ECDOMAIN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ECDOMAIN]: $.ASN1Decoder<ECDOMAIN[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ECDOMAIN]: $.ASN1Encoder<ECDOMAIN[_K]>;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of a named EC domain in `ANSIX9NamedDomains`.
     * Not in ANSI X9.62-1998 (that edition used `CURVES`).
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
