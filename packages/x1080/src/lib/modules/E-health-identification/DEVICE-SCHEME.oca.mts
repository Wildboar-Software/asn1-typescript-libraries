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
import {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from '../E-health-identification/Supported-formats.ta.mjs';

/**
 * @summary DEVICE_SCHEME
 * @description
 *
 * Medical-device scheme: unique `&id`, optional `&name`,
 * `&Manufacturer` (optional if the device is a generic term such as
 * "scalpel"), `&Device` (generic or full product ref), and
 * `&supportedFormats` (typically OIDs of data formats). Sensor or
 * intervention device. Scheme establishment is out of scope. ITU-T
 * X.1080.1 (05/2018) §8.9.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
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
     * @description
     *
     * Unique OID of the medical-device identification scheme.
     */
    readonly '&id'?: OBJECT_IDENTIFIER;
    /**
     * @summary &name
     * @description
     *
     * Optional `SchemeName`: ISO646String (not necessarily unique) or
     * OID.
     */
    readonly '&name'?: SchemeName;
    /**
     * @summary &Manufacturer
     * @description
     *
     * Manufacturer identification. Optional if a generic term for the
     * device (e.g. "scalpel") is used in `&Device`. Otherwise
     * typically name, HQ location, and perhaps a company number.
     */
    readonly '&Manufacturer': Manufacturer;
    /**
     * @summary &Device
     * @description
     *
     * Generic description of the device, or a complete product
     * reference from the specified manufacturer.
     */
    readonly '&Device': Device;
    /**
     * @summary &supportedFormats
     * @description
     *
     * Data formats for communication with the device. Typically OIDs
     * of available formats. Device may be a sensor or an intervention
     * device.
     */
    readonly '&supportedFormats'?: Supported_formats;
}

/* eslint-enable */
