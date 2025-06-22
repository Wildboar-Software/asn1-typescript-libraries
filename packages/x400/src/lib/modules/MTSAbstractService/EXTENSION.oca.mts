/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
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
 *   &recommended  Criticality DEFAULT {}
 * }
 * WITH SYNTAX {
 *   [&Type
 *    [IF ABSENT &absent],]
 *   [RECOMMENDED CRITICALITY &recommended,]
 *   IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface EXTENSION<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'EXTENSION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENSION<Type>]: $.ASN1Decoder<EXTENSION<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENSION<Type>]: $.ASN1Encoder<EXTENSION<Type>[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: ExtensionType;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
    /**
     * @summary &absent
     */
    readonly '&absent'?: EXTENSION['&Type'];
    /**
     * @summary &recommended
     */
    readonly '&recommended'?: Criticality;
}

/* eslint-enable */
