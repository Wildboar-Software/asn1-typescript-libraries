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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta.mjs';
import {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from '../E-health-identification/Supported-formats.ta.mjs';

/**
 * @summary DEVICE_SCHEME
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DEVICE-SCHEME ::= CLASS {
 *   &id                 OBJECT IDENTIFIER UNIQUE,
 *   &name               SchemeName OPTIONAL,
 *   &Manufacturer,
 *   &Device,
 *   &supportedFormats   Supported-formats }
 * WITH SYNTAX {
 *   SCHEME [NAME &name] IDENTIFIED BY &id FOR &Manufacturer
 *   PRODUCING &Device SUPPORTING &supportedFormats}
 * ```
 *
 * @interface
 */
export interface DEVICE_SCHEME<
    Manufacturer = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Device = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'DEVICE-SCHEME';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof DEVICE_SCHEME<Manufacturer, Device>]: $.ASN1Decoder<
                DEVICE_SCHEME<Manufacturer, Device>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof DEVICE_SCHEME<Manufacturer, Device>]: $.ASN1Encoder<
                DEVICE_SCHEME<Manufacturer, Device>[_K]
            >;
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
     * @summary &Device
     */
    readonly '&Device': Device;
    /**
     * @summary &supportedFormats
     */
    readonly '&supportedFormats'?: Supported_formats;
}

/* eslint-enable */
