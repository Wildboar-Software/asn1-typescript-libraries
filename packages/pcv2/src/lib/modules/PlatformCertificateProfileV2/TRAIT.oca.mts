/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TRAIT
 * @description
 *
 * Information object class for a platform-certificate trait, analogous to
 * `EXTENSION`. `&id` is the `traitId` and `&TraitValueType` is the ASN.1 syntax
 * DER-encoded in `traitValue`. New traits can be added without changing the
 * certificate's other ASN.1.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
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
     * @description
     *
     * Object identifier of this trait syntax. A `Trait` copies it into
     * `traitId`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &TraitValueType
     * @description
     *
     * ASN.1 type DER-encoded in `traitValue` when `traitId` is this object's
     * `&id`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     */
    readonly "&TraitValueType": TraitValueType;
};

/* eslint-enable */
