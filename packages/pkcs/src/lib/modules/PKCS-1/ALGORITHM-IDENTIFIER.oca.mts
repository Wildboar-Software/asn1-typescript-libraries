/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ALGORITHM_IDENTIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ALGORITHM-IDENTIFIER ::= CLASS {
 *     &id    OBJECT IDENTIFIER  UNIQUE,
 *     &Type  OPTIONAL
 * }
 *     WITH SYNTAX { OID &id [PARAMETERS &Type] }
 * ```
 *
 * @interface
 */
export interface ALGORITHM_IDENTIFIER<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ALGORITHM-IDENTIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ALGORITHM_IDENTIFIER<Type>]: $.ASN1Decoder<
                ALGORITHM_IDENTIFIER<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ALGORITHM_IDENTIFIER<Type>]: $.ASN1Encoder<
                ALGORITHM_IDENTIFIER<Type>[_K]
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
