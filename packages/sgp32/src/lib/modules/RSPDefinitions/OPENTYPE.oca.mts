/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OPENTYPE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OPENTYPE ::= CLASS {
 *     &typeId OBJECT IDENTIFIER,
 *     &Type
 * }
 * ```
 * 
 * @interface
 */
export
interface OPENTYPE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPENTYPE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OPENTYPE<Type>]: $.ASN1Decoder<OPENTYPE<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OPENTYPE<Type>]: $.ASN1Encoder<OPENTYPE<Type>[_K]>;
    }>;
    /**
     * @summary &typeId
     */
    readonly "&typeId"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
};

/* eslint-enable */
