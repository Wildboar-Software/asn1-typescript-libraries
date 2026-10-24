/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ATTRIBUTE
 * @description
 * 
 * Object class of a service-instance attribute. `&id` is the object
 * identifier carried in `ServiceInstanceAttribute`. The module
 * comments state the printable name of each attribute.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ATTRIBUTE ::= CLASS
 * {  &id                  OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { ID  &id }
 * ```
 * 
 * @interface
 */
export
interface ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof ATTRIBUTE]: $.ASN1Decoder<ATTRIBUTE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof ATTRIBUTE]: $.ASN1Encoder<ATTRIBUTE[_K]>;
    }>;
    /**
     * @summary &id
     * @description
     * Object identifier of the attribute.
     * CCSDS 911.1-B-5, section A2.4.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
