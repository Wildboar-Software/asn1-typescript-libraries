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
    ProcessedLevel,
    _enum_for_ProcessedLevel,
    _decode_ProcessedLevel,
    _encode_ProcessedLevel,
} from '../AuthenticationContextForBiometrics/ProcessedLevel.ta.mjs';
import {
    Purpose,
    _enum_for_Purpose,
    _decode_Purpose,
    _encode_Purpose,
} from '../AuthenticationContextForBiometrics/Purpose.ta.mjs';

/**
 * @summary DataType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataType ::= SEQUENCE {
 *     processedLevel  ProcessedLevel,
 *     purpose         Purpose OPTIONAL }
 * ```
 *
 */
export class DataType {
    constructor(
        /**
         * @summary `processedLevel`.
         * @public
         * @readonly
         */
        readonly processedLevel: ProcessedLevel,
        /**
         * @summary `purpose`.
         * @public
         * @readonly
         */
        readonly purpose: OPTIONAL<Purpose>
    ) {}

    /**
     * @summary Restructures an object into a DataType
     * @description
     *
     * This takes an `object` and converts it to a `DataType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataType`.
     * @returns {DataType}
     */
    public static _from_object(
        _o: { [_K in keyof DataType]: DataType[_K] }
    ): DataType {
        return new DataType(_o.processedLevel, _o.purpose);
    }

    /**
     * @summary The enum used as the type of the component `processedLevel`
     * @public
     * @static
     */

    public static _enum_for_processedLevel = _enum_for_ProcessedLevel;
    /**
     * @summary The enum used as the type of the component `purpose`
     * @public
     * @static
     */

    public static _enum_for_purpose = _enum_for_Purpose;
}


/**
 * @summary The Leading Root Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'processedLevel',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'purpose',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DataType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataType: $.ComponentSpec[] = [];


let _cached_decoder_for_DataType: $.ASN1Decoder<DataType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DataType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataType} The decoded data structure.
 */
export function _decode_DataType(el: _Element): DataType {
    if (!_cached_decoder_for_DataType) {
        _cached_decoder_for_DataType = function (el: _Element): DataType {
            let processedLevel!: ProcessedLevel;
            let purpose: OPTIONAL<Purpose>;
            const callbacks: $.DecodingMap = {
                processedLevel: (_el: _Element): void => {
                    processedLevel = _decode_ProcessedLevel(_el);
                },
                purpose: (_el: _Element): void => {
                    purpose = _decode_Purpose(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataType,
                _extension_additions_list_spec_for_DataType,
                _root_component_type_list_2_spec_for_DataType,
                undefined
            );
            return new DataType (
                processedLevel,
                purpose
            );
        };
    }
    return _cached_decoder_for_DataType(el);
}


let _cached_encoder_for_DataType: $.ASN1Encoder<DataType> | null = null;


/**
 * @summary Encodes a(n) DataType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataType, encoded as an ASN.1 Element.
 */
export function _encode_DataType(
    value: DataType,
    elGetter: $.ASN1Encoder<DataType>
): _Element {
    if (!_cached_encoder_for_DataType) {
        _cached_encoder_for_DataType = function (
            value: DataType        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ProcessedLevel(
                            value.processedLevel,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.purpose === undefined
                            ? undefined
                            : _encode_Purpose(value.purpose, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataType(value, elGetter);
}


/* eslint-enable */
