/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DMI_TYPE_IDENTIFIER
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DMI-TYPE-IDENTIFIER ::= CLASS {
 *   &id     OBJECT IDENTIFIER UNIQUE,
 *   &Value
 * }WITH SYNTAX {TYPE &Value
 *               ID &id
 * }
 * ```
 * 
 * @interface
 */
export
interface DMI_TYPE_IDENTIFIER<
    Value = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "DMI-TYPE-IDENTIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<{ // For decoding types supplied in type fields
        [_K in keyof DMI_TYPE_IDENTIFIER<Value>]: $.ASN1Decoder<DMI_TYPE_IDENTIFIER<Value>[_K]>;
    }>;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<{ // For encoding types supplied in type fields
        [_K in keyof DMI_TYPE_IDENTIFIER<Value>]: $.ASN1Encoder<DMI_TYPE_IDENTIFIER<Value>[_K]>;
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
