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
import { DEVICE_SCHEME } from '../E-health-identification/DEVICE-SCHEME.oca';
export { DEVICE_SCHEME } from '../E-health-identification/DEVICE-SCHEME.oca';
import { DeviceSchemes } from '../E-health-identification/DeviceSchemes.osa';
export { DeviceSchemes } from '../E-health-identification/DeviceSchemes.osa';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta';
import {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from "./Supported-formats.ta";

/* START_OF_SYMBOL_DEFINITION DeviceIdentification */
/**
 * @summary DeviceIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeviceIdentification ::= SEQUENCE {
 *   scheme         DEVICE-SCHEME.&id({DeviceSchemes}),
 *   schemeName     DEVICE-SCHEME.&name ({DeviceSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId DEVICE-SCHEME.&Manufacturer ({DeviceSchemes}{@.scheme})
 *                    OPTIONAL,
 *   device         DEVICE-SCHEME.&Device ({DeviceSchemes}{@.scheme}),
 *   formats        DEVICE-SCHEME.&supportedFormats ({DeviceSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class DeviceIdentification {
    constructor(
        /**
         * @summary `scheme`.
         * @public
         * @readonly
         */
        readonly scheme: OBJECT_IDENTIFIER,
        /**
         * @summary `schemeName`.
         * @public
         * @readonly
         */
        readonly schemeName: OPTIONAL<SchemeName>,
        /**
         * @summary `manufacturerId`.
         * @public
         * @readonly
         */
        readonly manufacturerId: OPTIONAL<_Element>,
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: _Element,
        /**
         * @summary `formats`.
         * @public
         * @readonly
         */
        readonly formats: Supported_formats
    ) {}

    /**
     * @summary Restructures an object into a DeviceIdentification
     * @description
     *
     * This takes an `object` and converts it to a `DeviceIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceIdentification`.
     * @returns {DeviceIdentification}
     */
    public static _from_object(
        _o: { [_K in keyof DeviceIdentification]: DeviceIdentification[_K] }
    ): DeviceIdentification {
        return new DeviceIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.device,
            _o.formats
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeviceIdentification */
/**
 * @summary The Leading Root Component Types of DeviceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeviceIdentification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scheme',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'schemeName',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'manufacturerId',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'device',
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'formats',
        false,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeviceIdentification */
/**
 * @summary The Trailing Root Component Types of DeviceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeviceIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeviceIdentification */
/**
 * @summary The Extension Addition Component Types of DeviceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeviceIdentification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeviceIdentification */
let _cached_decoder_for_DeviceIdentification: $.ASN1Decoder<DeviceIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _decode_DeviceIdentification */
/**
 * @summary Decodes an ASN.1 element into a(n) DeviceIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeviceIdentification} The decoded data structure.
 */
export function _decode_DeviceIdentification(el: _Element) {
    if (!_cached_decoder_for_DeviceIdentification) {
        _cached_decoder_for_DeviceIdentification = function (
            el: _Element
        ): DeviceIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId: OPTIONAL<_Element>;
            let device!: _Element;
            let formats!: Supported_formats;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scheme: (_el: _Element): void => {
                    scheme = $._decodeObjectIdentifier(_el);
                },
                schemeName: (_el: _Element): void => {
                    schemeName = _decode_SchemeName(_el);
                },
                manufacturerId: (_el: _Element): void => {
                    manufacturerId = $._decodeAny(_el);
                },
                device: (_el: _Element): void => {
                    device = $._decodeAny(_el);
                },
                formats: (_el: _Element): void => {
                    formats = _decode_Supported_formats(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeviceIdentification,
                _extension_additions_list_spec_for_DeviceIdentification,
                _root_component_type_list_2_spec_for_DeviceIdentification,
                undefined
            );
            return new DeviceIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                manufacturerId,
                device,
                formats
            );
        };
    }
    return _cached_decoder_for_DeviceIdentification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeviceIdentification */
let _cached_encoder_for_DeviceIdentification: $.ASN1Encoder<DeviceIdentification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeviceIdentification */

/* START_OF_SYMBOL_DEFINITION _encode_DeviceIdentification */
/**
 * @summary Encodes a(n) DeviceIdentification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceIdentification, encoded as an ASN.1 Element.
 */
export function _encode_DeviceIdentification(
    value: DeviceIdentification,
    elGetter: $.ASN1Encoder<DeviceIdentification>
) {
    if (!_cached_encoder_for_DeviceIdentification) {
        _cached_encoder_for_DeviceIdentification = function (
            value: DeviceIdentification,
            elGetter: $.ASN1Encoder<DeviceIdentification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.scheme,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.schemeName === undefined
                            ? undefined
                            : _encode_SchemeName(value.schemeName, $.BER),
                        /* IF_ABSENT  */ value.manufacturerId === undefined
                            ? undefined
                            : $._encodeAny(value.manufacturerId, $.BER),
                        /* REQUIRED   */ $._encodeAny(value.device, $.BER),
                        /* REQUIRED   */ _encode_Supported_formats(
                            value.formats,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeviceIdentification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeviceIdentification */

/* eslint-enable */
