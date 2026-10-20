/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";


/**
 * @summary OBJECT_CLASS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OBJECT-CLASS ::= CLASS {
 *   &Superclasses         OBJECT-CLASS OPTIONAL,
 *   &kind                 ObjectClassKind DEFAULT structural,
 *   &MandatoryAttributes  ATTRIBUTE OPTIONAL,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE
 * }
 * WITH SYNTAX {
 *   [SUBCLASS OF &Superclasses]
 *   [KIND &kind]
 *   [MUST CONTAIN &MandatoryAttributes]
 *   [MAY CONTAIN &OptionalAttributes]
 *   ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface OBJECT_CLASS {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OBJECT-CLASS";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof OBJECT_CLASS]: $.ASN1Decoder<OBJECT_CLASS[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof OBJECT_CLASS]: $.ASN1Encoder<OBJECT_CLASS[_K]>;
    }>;
    /**
     * @summary &Superclasses
     */
    readonly "&Superclasses"?: OBJECT_CLASS[];
    /**
     * @summary &kind
     */
    readonly "&kind"?: ObjectClassKind;
    /**
     * @summary &MandatoryAttributes
     */
    readonly "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    readonly "&OptionalAttributes"?: ATTRIBUTE[];
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
};

/* eslint-enable */
