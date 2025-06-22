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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    SchemeName,
    _decode_SchemeName,
    _encode_SchemeName,
} from './SchemeName.ta.mjs';


/**
 * @summary ManufacturerIdentification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManufacturerIdentification ::= SEQUENCE {
 *   scheme         MANUFACTURER-SCHEME.&id ({ManufacturerSchemes}),
 *   schemeName     MANUFACTURER-SCHEME.&name ({ManufacturerSchemes}{@.scheme}) OPTIONAL,
 *   manufacturerId MANUFACTURER-SCHEME.&Manufacturer ({ManufacturerSchemes}{@.scheme}),
 *   drugId         MANUFACTURER-SCHEME.&Drug ({ManufacturerSchemes}{@.scheme})}
 * ```
 *
 * @class
 */
export class ManufacturerIdentification {
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
        readonly manufacturerId: _Element,
        /**
         * @summary `drugId`.
         * @public
         * @readonly
         */
        readonly drugId: _Element
    ) {}

    /**
     * @summary Restructures an object into a ManufacturerIdentification
     * @description
     *
     * This takes an `object` and converts it to a `ManufacturerIdentification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManufacturerIdentification`.
     * @returns {ManufacturerIdentification}
     */
    public static _from_object(
        _o: {
            [_K in keyof ManufacturerIdentification]: ManufacturerIdentification[_K];
        }
    ): ManufacturerIdentification {
        return new ManufacturerIdentification(
            _o.scheme,
            _o.schemeName,
            _o.manufacturerId,
            _o.drugId
        );
    }
}


/**
 * @summary The Leading Root Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [
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
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'drugId',
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ManufacturerIdentification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ManufacturerIdentification: $.ComponentSpec[] = [];


let _cached_decoder_for_ManufacturerIdentification: $.ASN1Decoder<ManufacturerIdentification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManufacturerIdentification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManufacturerIdentification} The decoded data structure.
 */
export function _decode_ManufacturerIdentification(el: _Element) {
    if (!_cached_decoder_for_ManufacturerIdentification) {
        _cached_decoder_for_ManufacturerIdentification = function (
            el: _Element
        ): ManufacturerIdentification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scheme!: OBJECT_IDENTIFIER;
            let schemeName: OPTIONAL<SchemeName>;
            let manufacturerId!: _Element;
            let drugId!: _Element;
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
                drugId: (_el: _Element): void => {
                    drugId = $._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ManufacturerIdentification,
                _extension_additions_list_spec_for_ManufacturerIdentification,
                _root_component_type_list_2_spec_for_ManufacturerIdentification,
                undefined
            );
            return new ManufacturerIdentification /* SEQUENCE_CONSTRUCTOR_CALL */(
                scheme,
                schemeName,
                manufacturerId,
                drugId
            );
        };
    }
    return _cached_decoder_for_ManufacturerIdentification(el);
}


let _cached_encoder_for_ManufacturerIdentification: $.ASN1Encoder<ManufacturerIdentification> | null = null;


/**
 * @summary Encodes a(n) ManufacturerIdentification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManufacturerIdentification, encoded as an ASN.1 Element.
 */
export function _encode_ManufacturerIdentification(
    value: ManufacturerIdentification,
    elGetter: $.ASN1Encoder<ManufacturerIdentification>
) {
    if (!_cached_encoder_for_ManufacturerIdentification) {
        _cached_encoder_for_ManufacturerIdentification = function (
            value: ManufacturerIdentification        ): _Element {
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
                        /* REQUIRED   */ $._encodeAny(
                            value.manufacturerId,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.drugId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ManufacturerIdentification(value, elGetter);
}


/* eslint-enable */
