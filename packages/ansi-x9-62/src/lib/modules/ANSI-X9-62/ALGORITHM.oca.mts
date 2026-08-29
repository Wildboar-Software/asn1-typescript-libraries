/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ALGORITHM
 * @description
 *
 * Information object class for algorithm identifiers. ANSI
 * X9.62-1998 §6.4 defined `ALGORITHM ::= TYPE-IDENTIFIER`. This
 * package uses the later `{ OID &id [PARMS &Type] }` syntax
 * (aligned with ANSI X9.63-2001).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM ::= CLASS {
 * &id        OBJECT IDENTIFIER UNIQUE,
 * &Type    OPTIONAL
 * }
 * WITH SYNTAX { OID &id [PARMS &Type] }
 * ```
 *
 * @interface
 */
export interface ALGORITHM<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
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
            [_K in keyof ALGORITHM<Type>]: $.ASN1Decoder<ALGORITHM<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM<Type>]: $.ASN1Encoder<ALGORITHM<Type>[_K]>;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Algorithm OID. Tightly bound to `&Type` in an
     * `AlgorithmIdentifier`. ANSI X9.62-1998 §6.4.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     * @description
     *
     * Parameters type for this algorithm (optional). ANSI
     * X9.62-1998 used TYPE-IDENTIFIER `&Type`; this class uses
     * the later optional PARMS syntax.
     */
    readonly "&Type": Type;
}

/* eslint-enable */
