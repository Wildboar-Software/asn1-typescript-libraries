/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { DefinedIDs } from "../WTM-Authentication-Operations-asn1-97/DefinedIDs.ta.mjs";

/**
 * @summary AUTH_ALG
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AUTH-ALG ::= CLASS {
 *     &id DefinedIDs UNIQUE,
 *     &Type OPTIONAL
 * }
 * ```
 * 
 * @interface
 */
export
interface AUTH_ALG<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "AUTH-ALG";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof AUTH_ALG<Type>]: $.ASN1Decoder<AUTH_ALG<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof AUTH_ALG<Type>]: $.ASN1Encoder<AUTH_ALG<Type>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: DefinedIDs;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
};

/* eslint-enable */
