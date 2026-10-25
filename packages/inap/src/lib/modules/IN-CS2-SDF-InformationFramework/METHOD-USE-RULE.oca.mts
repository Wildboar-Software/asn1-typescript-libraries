/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { type METHOD } from "../IN-CS2-SDF-InformationFramework/METHOD.oca.mjs";
// export { METHOD } from "../IN-CS2-SDF-InformationFramework/METHOD.oca.mjs";


/**
 * @summary METHOD_USE_RULE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * METHOD-USE-RULE ::= CLASS {
 *   &objectClassType  OBJECT-CLASS.&id UNIQUE,
 *   &Mandatory        METHOD
 * }WITH SYNTAX {OBJECT-CLASS TYPE &objectClassType
 *               METHODS &Mandatory
 * }
 * ```
 * 
 * @interface
 */
export
interface METHOD_USE_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "METHOD-USE-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof METHOD_USE_RULE]: $.ASN1Decoder<METHOD_USE_RULE[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof METHOD_USE_RULE]: $.ASN1Encoder<METHOD_USE_RULE[_K]>;
    }>;
    /**
     * @summary &objectClassType
     */
    readonly "&objectClassType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Mandatory
     */
    readonly "&Mandatory"?: METHOD[];
};

/* eslint-enable */
