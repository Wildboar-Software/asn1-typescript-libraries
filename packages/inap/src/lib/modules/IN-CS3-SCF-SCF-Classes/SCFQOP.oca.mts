/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PROTECTION_MAPPING } from "../Notation/PROTECTION-MAPPING.oca.mjs";
// export { PROTECTION_MAPPING } from "../Notation/PROTECTION-MAPPING.oca.mjs";


/**
 * @summary SCFQOP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFQOP ::= CLASS {
 *   &scfqop-id        OBJECT IDENTIFIER UNIQUE,
 *   &scfBindErrorQOP  PROTECTION-MAPPING,
 *   &scfErrorsQOP     PROTECTION-MAPPING,
 *   &scfArgumentQOP   PROTECTION-MAPPING,
 *   &scfResultQOP     PROTECTION-MAPPING
 * }
 * WITH SYNTAX {
 *   SCFQOP-ID &scfqop-id,
 *   SCFBINDERROR-QOP &scfBindErrorQOP,
 *   SCFERRORS-QOP &scfErrorsQOP,
 *   SCFOPARG-QOP &scfArgumentQOP,
 *   SCFOPRES-QOP &scfResultQOP
 * }
 * ```
 * 
 * @interface
 */
export
interface SCFQOP {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SCFQOP";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof SCFQOP]: $.ASN1Decoder<SCFQOP[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof SCFQOP]: $.ASN1Encoder<SCFQOP[_K]>;
    }>;
    /**
     * @summary &scfqop-id
     */
    readonly "&scfqop-id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &scfBindErrorQOP
     */
    readonly "&scfBindErrorQOP"?: PROTECTION_MAPPING;
    /**
     * @summary &scfErrorsQOP
     */
    readonly "&scfErrorsQOP"?: PROTECTION_MAPPING;
    /**
     * @summary &scfArgumentQOP
     */
    readonly "&scfArgumentQOP"?: PROTECTION_MAPPING;
    /**
     * @summary &scfResultQOP
     */
    readonly "&scfResultQOP"?: PROTECTION_MAPPING;
};

/* eslint-enable */
