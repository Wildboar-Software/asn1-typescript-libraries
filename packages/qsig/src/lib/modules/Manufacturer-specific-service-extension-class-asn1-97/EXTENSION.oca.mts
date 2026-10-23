/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EXTENSION
 * @description
 *
 * Class of a manufacturer-specific addition to a standardised operation
 * (ECMA-165 §9.2, Table 14). The object identifier identifies the addition.
 * Supplementary-service standards leave a placeholder that can carry one
 * Extension or a sequence of them.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
     * @description
     *
     * Manufacturer-specific payload identified by `&extensionId` (ECMA-165
     * §9.2, Table 14).
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &extensionId
     * @description
     *
     * Object identifier that uniquely identifies this manufacturer-specific
     * information (ECMA-165 §9.2). The receiver discards an Extension whose
     * identifier it does not recognise.
     */
    readonly "&extensionId"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
