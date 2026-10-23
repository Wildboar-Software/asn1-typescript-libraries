/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { ExtensionType } from "../IN-CS-1-Datatypes/ExtensionType.ta.mjs";
// export { ExtensionType, _decode_ExtensionType, _encode_ExtensionType } from "../IN-CS-1-Datatypes/ExtensionType.ta.mjs";
import { Criticality } from "../IN-CS-1-Datatypes/Criticality.ta.mjs";
// export { Criticality, _enum_for_Criticality, Criticality_ignored /* IMPORTED_LONG_ENUMERATION_ITEM */, ignored /* IMPORTED_SHORT_ENUMERATION_ITEM */, Criticality_abort /* IMPORTED_LONG_ENUMERATION_ITEM */, abort /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Criticality, _encode_Criticality } from "../IN-CS-1-Datatypes/Criticality.ta.mjs";


/**
 * @summary EXTENSION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXTENSION ::= CLASS {
 *   &id           ExtensionType UNIQUE,
 *   &Type         OPTIONAL,
 *   &absent       &Type OPTIONAL,
 *   &criticality  Criticality DEFAULT ignored
 * }
 * WITH SYNTAX {
 *   [EXTENSION-SYNTAX &Type
 *    [IF ABSENT &absent]]
 *   [CRITICALITY &criticality]
 *   IDENTIFIED BY &id
 * }
 * ```
 * 
 * @interface
 */
export
interface EXTENSION<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof EXTENSION<Type>]: $.ASN1Decoder<EXTENSION<Type>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof EXTENSION<Type>]: $.ASN1Encoder<EXTENSION<Type>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: ExtensionType;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &absent
     */
    readonly "&absent"?: EXTENSION["&Type"];
    /**
     * @summary &criticality
     */
    readonly "&criticality"?: Criticality;
};

/* eslint-enable */
