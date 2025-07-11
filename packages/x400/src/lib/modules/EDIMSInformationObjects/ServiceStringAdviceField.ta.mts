/* eslint-disable */
import {
    OPTIONAL,
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
    ComponentDataElementSeparator,
    _decode_ComponentDataElementSeparator,
    _encode_ComponentDataElementSeparator,
} from '../EDIMSInformationObjects/ComponentDataElementSeparator.ta.mjs';
import {
    DataElementSeparator,
    _decode_DataElementSeparator,
    _encode_DataElementSeparator,
} from '../EDIMSInformationObjects/DataElementSeparator.ta.mjs';
import {
    DecimalNotation,
    _decode_DecimalNotation,
    _encode_DecimalNotation,
} from '../EDIMSInformationObjects/DecimalNotation.ta.mjs';
import {
    ReleaseIndicator,
    _decode_ReleaseIndicator,
    _encode_ReleaseIndicator,
} from '../EDIMSInformationObjects/ReleaseIndicator.ta.mjs';
import {
    Reserved,
    _decode_Reserved,
    _encode_Reserved,
} from '../EDIMSInformationObjects/Reserved.ta.mjs';
import {
    SegmentTerminator,
    _decode_SegmentTerminator,
    _encode_SegmentTerminator,
} from '../EDIMSInformationObjects/SegmentTerminator.ta.mjs';
/**
 * @summary ServiceStringAdviceField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceStringAdviceField ::= SEQUENCE {
 *   component-data-element-separator  [0]  ComponentDataElementSeparator,
 *   data-element-separator            [1]  DataElementSeparator,
 *   decimal-notation                  [2]  DecimalNotation,
 *   release-indicator                 [3]  ReleaseIndicator OPTIONAL,
 *   reserved                          [4]  Reserved OPTIONAL,
 *   segment-terminator                [5]  SegmentTerminator
 * }
 * ```
 *
 */
export class ServiceStringAdviceField {
    constructor(
        /**
         * @summary `component_data_element_separator`.
         * @public
         * @readonly
         */
        readonly component_data_element_separator: ComponentDataElementSeparator,
        /**
         * @summary `data_element_separator`.
         * @public
         * @readonly
         */
        readonly data_element_separator: DataElementSeparator,
        /**
         * @summary `decimal_notation`.
         * @public
         * @readonly
         */
        readonly decimal_notation: DecimalNotation,
        /**
         * @summary `release_indicator`.
         * @public
         * @readonly
         */
        readonly release_indicator: OPTIONAL<ReleaseIndicator>,
        /**
         * @summary `reserved`.
         * @public
         * @readonly
         */
        readonly reserved: OPTIONAL<Reserved>,
        /**
         * @summary `segment_terminator`.
         * @public
         * @readonly
         */
        readonly segment_terminator: SegmentTerminator
    ) {}

    /**
     * @summary Restructures an object into a ServiceStringAdviceField
     * @description
     *
     * This takes an `object` and converts it to a `ServiceStringAdviceField`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceStringAdviceField`.
     * @returns {ServiceStringAdviceField}
     */
    public static _from_object(
        _o: {
            [_K in keyof ServiceStringAdviceField]: ServiceStringAdviceField[_K];
        }
    ): ServiceStringAdviceField {
        return new ServiceStringAdviceField(
            _o.component_data_element_separator,
            _o.data_element_separator,
            _o.decimal_notation,
            _o.release_indicator,
            _o.reserved,
            _o.segment_terminator
        );
    }
}

/**
 * @summary The Leading Root Component Types of ServiceStringAdviceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceStringAdviceField: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'component-data-element-separator',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'data-element-separator',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'decimal-notation',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'release-indicator',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'reserved',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'segment-terminator',
        false,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of ServiceStringAdviceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceStringAdviceField: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ServiceStringAdviceField
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceStringAdviceField: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceStringAdviceField: $.ASN1Decoder<ServiceStringAdviceField> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceStringAdviceField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceStringAdviceField} The decoded data structure.
 */
export function _decode_ServiceStringAdviceField(el: _Element): ServiceStringAdviceField {
    if (!_cached_decoder_for_ServiceStringAdviceField) {
        _cached_decoder_for_ServiceStringAdviceField = function (
            el: _Element
        ): ServiceStringAdviceField {
            let component_data_element_separator!: ComponentDataElementSeparator;
            let data_element_separator!: DataElementSeparator;
            let decimal_notation!: DecimalNotation;
            let release_indicator: OPTIONAL<ReleaseIndicator>;
            let reserved: OPTIONAL<Reserved>;
            let segment_terminator!: SegmentTerminator;
            const callbacks: $.DecodingMap = {
                'component-data-element-separator': (_el: _Element): void => {
                    component_data_element_separator = $._decode_implicit<ComponentDataElementSeparator>(
                        () => _decode_ComponentDataElementSeparator
                    )(_el);
                },
                'data-element-separator': (_el: _Element): void => {
                    data_element_separator = $._decode_implicit<DataElementSeparator>(
                        () => _decode_DataElementSeparator
                    )(_el);
                },
                'decimal-notation': (_el: _Element): void => {
                    decimal_notation = $._decode_implicit<DecimalNotation>(
                        () => _decode_DecimalNotation
                    )(_el);
                },
                'release-indicator': (_el: _Element): void => {
                    release_indicator = $._decode_implicit<ReleaseIndicator>(
                        () => _decode_ReleaseIndicator
                    )(_el);
                },
                reserved: (_el: _Element): void => {
                    reserved = $._decode_implicit<Reserved>(
                        () => _decode_Reserved
                    )(_el);
                },
                'segment-terminator': (_el: _Element): void => {
                    segment_terminator = $._decode_implicit<SegmentTerminator>(
                        () => _decode_SegmentTerminator
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceStringAdviceField,
                _extension_additions_list_spec_for_ServiceStringAdviceField,
                _root_component_type_list_2_spec_for_ServiceStringAdviceField,
                undefined
            );
            return new ServiceStringAdviceField (
                component_data_element_separator,
                data_element_separator,
                decimal_notation,
                release_indicator,
                reserved,
                segment_terminator
            );
        };
    }
    return _cached_decoder_for_ServiceStringAdviceField(el);
}

let _cached_encoder_for_ServiceStringAdviceField: $.ASN1Encoder<ServiceStringAdviceField> | null = null;

/**
 * @summary Encodes a(n) ServiceStringAdviceField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceStringAdviceField, encoded as an ASN.1 Element.
 */
export function _encode_ServiceStringAdviceField(
    value: ServiceStringAdviceField,
    elGetter: $.ASN1Encoder<ServiceStringAdviceField>
): _Element {
    if (!_cached_encoder_for_ServiceStringAdviceField) {
        _cached_encoder_for_ServiceStringAdviceField = function (
            value: ServiceStringAdviceField        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_ComponentDataElementSeparator,
                            $.BER
                        )(value.component_data_element_separator, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_DataElementSeparator,
                            $.BER
                        )(value.data_element_separator, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_DecimalNotation,
                            $.BER
                        )(value.decimal_notation, $.BER),
                        /* IF_ABSENT  */ value.release_indicator === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_ReleaseIndicator,
                                  $.BER
                              )(value.release_indicator, $.BER),
                        /* IF_ABSENT  */ value.reserved === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_Reserved,
                                  $.BER
                              )(value.reserved, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            5,
                            () => _encode_SegmentTerminator,
                            $.BER
                        )(value.segment_terminator, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceStringAdviceField(value, elGetter);
}


/* eslint-enable */
