/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta';
export {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from '../E-health-identification/SchemeName.ta';
import {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from '../E-health-identification/Supported-formats.ta';
export {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from '../E-health-identification/Supported-formats.ta';

/* START_OF_SYMBOL_DEFINITION DEVICE_SCHEME */
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
/* END_OF_SYMBOL_DEFINITION DEVICE_SCHEME */

/* eslint-enable */
