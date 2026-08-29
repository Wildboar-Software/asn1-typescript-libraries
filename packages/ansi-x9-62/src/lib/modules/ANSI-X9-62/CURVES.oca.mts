/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CURVES
 * @description
 *
 * Class for named example curves. Each object is a unique OID
 * from `CurveNames`. ANSI X9.62-1998 §6.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CURVES ::= CLASS {
 *     &id OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX { ID &id }
 * ```
 *
 * @interface
 */
export interface CURVES {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CURVES";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CURVES]: $.ASN1Decoder<CURVES[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CURVES]: $.ASN1Encoder<CURVES[_K]>;
        }
    >;
    /**
     * @summary &id
     * @description
     *
     * Unique OID of a named example curve in `CurveNames`.
     * ANSI X9.62-1998 §6.4.
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}

/* eslint-enable */
