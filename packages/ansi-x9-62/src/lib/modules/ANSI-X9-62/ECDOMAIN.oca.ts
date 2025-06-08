/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ECDOMAIN */
/**
 * @summary ECDOMAIN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDOMAIN ::= CLASS {
 * &id OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { ID &id }
 * ```
 *
 * @interface
 */
export interface ECDOMAIN {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ECDOMAIN";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ECDOMAIN]: $.ASN1Decoder<ECDOMAIN[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ECDOMAIN]: $.ASN1Encoder<ECDOMAIN[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION ECDOMAIN */

/* eslint-enable */
