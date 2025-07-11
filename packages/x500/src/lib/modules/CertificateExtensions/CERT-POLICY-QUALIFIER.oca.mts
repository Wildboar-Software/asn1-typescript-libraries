/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CERT_POLICY_QUALIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CERT-POLICY-QUALIFIER ::= CLASS {
 *   &id                  OBJECT IDENTIFIER UNIQUE,
 *   &Qualifier           OPTIONAL }
 * WITH SYNTAX {
 *   POLICY-QUALIFIER-ID &id
 *   [QUALIFIER-TYPE     &Qualifier] }
 * ```
 *
 * @interface
 */
export interface CERT_POLICY_QUALIFIER<
    Qualifier = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CERT-POLICY-QUALIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Decoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Encoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Qualifier
     */
    readonly "&Qualifier": Qualifier;
}

/* eslint-enable */
