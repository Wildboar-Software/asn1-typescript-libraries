/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Q821_ATTRIBUTE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Q821-ATTRIBUTE ::= CLASS {&id    OBJECT IDENTIFIER,
 *                           &Type
 * }WITH SYNTAX {ID &id
 *               TYPE &Type
 * }
 * ```
 * 
 * @interface
 */
export
interface Q821_ATTRIBUTE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "Q821-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof Q821_ATTRIBUTE<Type>]: $.ASN1Decoder<Q821_ATTRIBUTE<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof Q821_ATTRIBUTE<Type>]: $.ASN1Encoder<Q821_ATTRIBUTE<Type>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
};

/* eslint-enable */
