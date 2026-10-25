/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary COMMON_BOUNDS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COMMON-BOUNDS ::= CLASS {&numOfExtensions  INTEGER OPTIONAL
 * }WITH SYNTAX {[NUM-OF-EXTENSIONS &numOfExtensions]
 * }
 * ```
 * 
 * @interface
 */
export
interface COMMON_BOUNDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "COMMON-BOUNDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof COMMON_BOUNDS]: $.ASN1Decoder<COMMON_BOUNDS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof COMMON_BOUNDS]: $.ASN1Encoder<COMMON_BOUNDS[_K]>;
    }>;
    /**
     * @summary &numOfExtensions
     */
    readonly "&numOfExtensions"?: INTEGER;
};

/* eslint-enable */
