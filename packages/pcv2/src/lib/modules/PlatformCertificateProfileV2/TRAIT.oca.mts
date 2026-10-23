/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TRAIT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRAIT ::= CLASS {
 *     &id OBJECT IDENTIFIER UNIQUE,
 *     &TraitValueType
 * }
 * WITH SYNTAX {
 *     SYNTAX &TraitValueType
 *     IDENTIFIED BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface TRAIT<
    TraitValueType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "TRAIT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof TRAIT<TraitValueType>]: $.ASN1Decoder<TRAIT<TraitValueType>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof TRAIT<TraitValueType>]: $.ASN1Encoder<TRAIT<TraitValueType>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &TraitValueType
     */
    readonly "&TraitValueType": TraitValueType;
};

/* eslint-enable */
