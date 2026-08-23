/* eslint-disable */
import { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
/**
 * @summary FRIENDS
 * @description
 *
 * Documents friend attributes of an anchor user attribute. Friends are
 * extra user attributes that may be selected or used in matching when the
 * anchor is requested; they need not appear in an object class. They do
 * not follow the anchor into an RDN. Operational attributes cannot be
 * friends. The anchor may be absent even if friends are present (unless
 * the anchor is mandatory).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FRIENDS ::= CLASS {
 *   &anchor   ATTRIBUTE.&id UNIQUE,
 *   &Friends  ATTRIBUTE }
 * WITH SYNTAX {
 *   ANCHOR    &anchor
 *   FRIENDS   &Friends }
 * ```
 *
 * @interface
 */
export interface FRIENDS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "FRIENDS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Decoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof FRIENDS]: $.ASN1Encoder<FRIENDS[_K]>;
        }
    >;
    /**
     * @summary &anchor
     */
    readonly "&anchor"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Friends
     */
    readonly "&Friends"?: ATTRIBUTE[];
}

/* eslint-enable */
