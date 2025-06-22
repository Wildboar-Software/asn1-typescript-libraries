/* eslint-disable */
import { OBJECT_IDENTIFIER, UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SYNTAX_NAME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SYNTAX-NAME ::= CLASS {
 *   &ldapDesc               UTF8String,
 *   &Type                   OPTIONAL,
 *   &id                     OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   LDAP-DESC               &ldapDesc
 *   [DIRECTORY SYNTAX       &Type]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface SYNTAX_NAME<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "SYNTAX-NAME";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SYNTAX_NAME<Type>]: $.ASN1Decoder<
                SYNTAX_NAME<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SYNTAX_NAME<Type>]: $.ASN1Encoder<
                SYNTAX_NAME<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &ldapDesc
     */
    readonly "&ldapDesc"?: UTF8String;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &id
     */
    readonly "&id": OBJECT_IDENTIFIER;
}

/* eslint-enable */
