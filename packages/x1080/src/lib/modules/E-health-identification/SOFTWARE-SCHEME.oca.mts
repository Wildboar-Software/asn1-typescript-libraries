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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';

/**
 * @summary SOFTWARE_SCHEME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SOFTWARE-SCHEME ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &name         SchemeName OPTIONAL,
 *   &Manufacturer,
 *   &Software }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id FOR &Manufacturer
 *   PRODUCING &Software }
 * ```
 *
 * @interface
 */
export interface SOFTWARE_SCHEME<
    Manufacturer = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Software = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'SOFTWARE-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SOFTWARE_SCHEME<
                Manufacturer,
                Software
            >]: $.ASN1Decoder<SOFTWARE_SCHEME<Manufacturer, Software>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SOFTWARE_SCHEME<
                Manufacturer,
                Software
            >]: $.ASN1Encoder<SOFTWARE_SCHEME<Manufacturer, Software>[_K]>;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Manufacturer
     */
    readonly '&Manufacturer': Manufacturer;
    /**
     * @summary &Software
     */
    readonly '&Software': Software;
}

/* eslint-enable */
