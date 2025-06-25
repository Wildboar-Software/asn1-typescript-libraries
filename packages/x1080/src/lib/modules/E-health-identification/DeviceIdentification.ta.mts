/* eslint-disable */
import {
    OPTIONAL,
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
} from './SchemeName.ta.mjs';
import {
    Supported_formats,
    _decode_Supported_formats,
    _encode_Supported_formats,
} from "./Supported-formats.ta.mjs";


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
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'schemeName',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'manufacturerId',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'device',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'formats',
        false,
        $.hasTag(_TagClass.context, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of DeviceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeviceIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DeviceIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeviceIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_DeviceIdentification: $.ASN1Decoder<DeviceIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeviceIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeviceIdentification} The decoded data structure.
 */
export function _decode_DeviceIdentification(el: _Element): DeviceIdentification {
    if (!_cached_decoder_for_DeviceIdentification) {
        _cached_decoder_for_DeviceIdentification = function (
            el: _Element
        ): DeviceIdentification {
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId: OPTIONAL<_Element>;
            let device!: _Element;
            let formats!: Supported_formats;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeviceIdentification,
                _extension_additions_list_spec_for_DeviceIdentification,
                _root_component_type_list_2_spec_for_DeviceIdentification,
                undefined
            );
            return new DeviceIdentification (
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


let _cached_encoder_for_DeviceIdentification: $.ASN1Encoder<DeviceIdentification> | null = null;


/**
 * @summary Encodes a(n) DeviceIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceIdentification, encoded as an ASN.1 Element.
 */
export function _encode_DeviceIdentification(
    value: DeviceIdentification,
    elGetter: $.ASN1Encoder<DeviceIdentification>
): _Element {
    if (!_cached_encoder_for_DeviceIdentification) {
        _cached_encoder_for_DeviceIdentification = function (
            value: DeviceIdentification        ): _Element {
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


/* eslint-enable */
