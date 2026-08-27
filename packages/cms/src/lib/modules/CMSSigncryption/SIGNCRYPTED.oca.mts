/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SIGNCRYPTED
 * @description
 *
 * Information object class for a signcrypted-parts manifest type
 * (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNCRYPTED ::= CLASS {
 * &id    OBJECT IDENTIFIER UNIQUE,
 * &Type    OPTIONAL
 * }
 * WITH SYNTAX {OID &id [PARMS &Type]}
 * ```
 *
 * @interface
 */
export interface SIGNCRYPTED<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SIGNCRYPTED";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SIGNCRYPTED<Type>]: $.ASN1Decoder<
                SIGNCRYPTED<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SIGNCRYPTED<Type>]: $.ASN1Encoder<
                SIGNCRYPTED<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
}

/* eslint-enable */
