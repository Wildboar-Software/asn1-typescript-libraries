/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ALGORITHM_ID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM-ID ::= CLASS {
 * &id    OBJECT IDENTIFIER UNIQUE,
 * &Type OPTIONAL
 * }
 * WITH SYNTAX { OID &id [PARMS &Type] }
 * ```
 *
 * @interface
 */
export interface ALGORITHM_ID<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM-ID";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM_ID<Type>]: $.ASN1Decoder<
                ALGORITHM_ID<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM_ID<Type>]: $.ASN1Encoder<
                ALGORITHM_ID<Type>[_K]
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
