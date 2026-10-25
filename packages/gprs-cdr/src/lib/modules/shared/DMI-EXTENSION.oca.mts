/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DMI_EXTENSION
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DMI-EXTENSION ::= CLASS {
 *     &id     OBJECT IDENTIFIER UNIQUE,
 *     &Value
 * }
 * WITH SYNTAX {
 *     TYPE &Value
 *     ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface DMI_EXTENSION<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DMI-EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DMI_EXTENSION<Value>]: $.ASN1Decoder<DMI_EXTENSION<Value>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DMI_EXTENSION<Value>]: $.ASN1Encoder<DMI_EXTENSION<Value>[_K]>;
    }>;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Value
     */
    readonly "&Value": Value;
};

/* eslint-enable */
