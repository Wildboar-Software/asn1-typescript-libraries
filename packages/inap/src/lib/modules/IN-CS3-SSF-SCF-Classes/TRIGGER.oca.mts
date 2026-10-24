/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TRIGGER
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRIGGER ::= CLASS {&Parameter  OPTIONAL,
 *                    &id         INTEGER UNIQUE
 * }WITH SYNTAX {[PARAMETER &Parameter]
 *               IDENTIFIED BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface TRIGGER<
    Parameter = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "TRIGGER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof TRIGGER<Parameter>]: $.ASN1Decoder<TRIGGER<Parameter>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof TRIGGER<Parameter>]: $.ASN1Encoder<TRIGGER<Parameter>[_K]>;
    }>;
    /**
     * @summary &Parameter
     */
    readonly "&Parameter": Parameter;
    /**
     * @summary &id
     */
    readonly "&id"?: INTEGER;
};

/* eslint-enable */
