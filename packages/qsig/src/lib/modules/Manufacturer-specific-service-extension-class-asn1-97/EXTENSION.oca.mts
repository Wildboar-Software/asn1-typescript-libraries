/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EXTENSION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXTENSION ::= CLASS {
 *     &ArgumentType,
 *     &extensionId OBJECT IDENTIFIER
 * }
 * WITH SYNTAX {
 *     ARGUMENT &ArgumentType
 *     IDENTIFIER &extensionId
 * }
 * ```
 * 
 * @interface
 */
export
interface EXTENSION<
    ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EXTENSION<ArgumentType>]: $.ASN1Decoder<EXTENSION<ArgumentType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EXTENSION<ArgumentType>]: $.ASN1Encoder<EXTENSION<ArgumentType>[_K]>;
    }>;
    /**
     * @summary &ArgumentType
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &extensionId
     */
    readonly "&extensionId"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
