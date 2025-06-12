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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta.mjs';
export {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from '../TestCategories-ASN1Module/DataType.ta.mjs';
import {
    DataCategory,
    DataCategory_bits /* IMPORTED_LONG_NAMED_INTEGER */,
    bits /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_octets /* IMPORTED_LONG_NAMED_INTEGER */,
    octets /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_blocks /* IMPORTED_LONG_NAMED_INTEGER */,
    blocks /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_packets /* IMPORTED_LONG_NAMED_INTEGER */,
    packets /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DataCategory,
    _encode_DataCategory,
} from '../TestCategories-ASN1Module/DataCategory.ta.mjs';
export {
    DataCategory,
    DataCategory_bits /* IMPORTED_LONG_NAMED_INTEGER */,
    bits /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_octets /* IMPORTED_LONG_NAMED_INTEGER */,
    octets /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_blocks /* IMPORTED_LONG_NAMED_INTEGER */,
    blocks /* IMPORTED_SHORT_NAMED_INTEGER */,
    DataCategory_packets /* IMPORTED_LONG_NAMED_INTEGER */,
    packets /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DataCategory,
    _encode_DataCategory,
} from '../TestCategories-ASN1Module/DataCategory.ta.mjs';
import {
    DataSize,
    _decode_DataSize,
    _encode_DataSize,
} from '../TestCategories-ASN1Module/DataSize.ta.mjs';
export {
    DataSize,
    _decode_DataSize,
    _encode_DataSize,
} from '../TestCategories-ASN1Module/DataSize.ta.mjs';
import {
    UnitsTotal,
    _decode_UnitsTotal,
    _encode_UnitsTotal,
} from '../TestCategories-ASN1Module/UnitsTotal.ta.mjs';
export {
    UnitsTotal,
    _decode_UnitsTotal,
    _encode_UnitsTotal,
} from '../TestCategories-ASN1Module/UnitsTotal.ta.mjs';
import {
    DataRate,
    _decode_DataRate,
    _encode_DataRate,
} from '../TestCategories-ASN1Module/DataRate.ta.mjs';
export {
    DataRate,
    _decode_DataRate,
    _encode_DataRate,
} from '../TestCategories-ASN1Module/DataRate.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DataUnits */
/**
 * @summary DataUnits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataUnits ::= SEQUENCE {
 *   dataType      [0] EXPLICIT DataType,
 *   dataCategory  [1]  DataCategory OPTIONAL,
 *   dataSize      [2]  DataSize OPTIONAL,
 *   dataNumber    [3]  UnitsTotal OPTIONAL,
 *   dataRate      [4] EXPLICIT DataRate OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DataUnits {
    constructor(
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: DataType,
        /**
         * @summary `dataCategory`.
         * @public
         * @readonly
         */
        readonly dataCategory: OPTIONAL<DataCategory>,
        /**
         * @summary `dataSize`.
         * @public
         * @readonly
         */
        readonly dataSize: OPTIONAL<DataSize>,
        /**
         * @summary `dataNumber`.
         * @public
         * @readonly
         */
        readonly dataNumber: OPTIONAL<UnitsTotal>,
        /**
         * @summary `dataRate`.
         * @public
         * @readonly
         */
        readonly dataRate: OPTIONAL<DataRate>
    ) {}

    /**
     * @summary Restructures an object into a DataUnits
     * @description
     *
     * This takes an `object` and converts it to a `DataUnits`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataUnits`.
     * @returns {DataUnits}
     */
    public static _from_object(
        _o: { [_K in keyof DataUnits]: DataUnits[_K] }
    ): DataUnits {
        return new DataUnits(
            _o.dataType,
            _o.dataCategory,
            _o.dataSize,
            _o.dataNumber,
            _o.dataRate
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DataUnits */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataUnits */
/**
 * @summary The Leading Root Component Types of DataUnits
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataUnits: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dataType',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataCategory',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataSize',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataNumber',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'dataRate',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataUnits */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataUnits */
/**
 * @summary The Trailing Root Component Types of DataUnits
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataUnits: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataUnits */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataUnits */
/**
 * @summary The Extension Addition Component Types of DataUnits
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataUnits: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataUnits */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataUnits */
let _cached_decoder_for_DataUnits: $.ASN1Decoder<DataUnits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataUnits */

/* START_OF_SYMBOL_DEFINITION _decode_DataUnits */
/**
 * @summary Decodes an ASN.1 element into a(n) DataUnits
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataUnits} The decoded data structure.
 */
export function _decode_DataUnits(el: _Element) {
    if (!_cached_decoder_for_DataUnits) {
        _cached_decoder_for_DataUnits = function (el: _Element): DataUnits {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let dataType!: DataType;
            let dataCategory: OPTIONAL<DataCategory>;
            let dataSize: OPTIONAL<DataSize>;
            let dataNumber: OPTIONAL<UnitsTotal>;
            let dataRate: OPTIONAL<DataRate>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                dataType: (_el: _Element): void => {
                    dataType = $._decode_explicit<DataType>(
                        () => _decode_DataType
                    )(_el);
                },
                dataCategory: (_el: _Element): void => {
                    dataCategory = $._decode_implicit<DataCategory>(
                        () => _decode_DataCategory
                    )(_el);
                },
                dataSize: (_el: _Element): void => {
                    dataSize = $._decode_implicit<DataSize>(
                        () => _decode_DataSize
                    )(_el);
                },
                dataNumber: (_el: _Element): void => {
                    dataNumber = $._decode_implicit<UnitsTotal>(
                        () => _decode_UnitsTotal
                    )(_el);
                },
                dataRate: (_el: _Element): void => {
                    dataRate = $._decode_explicit<DataRate>(
                        () => _decode_DataRate
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataUnits,
                _extension_additions_list_spec_for_DataUnits,
                _root_component_type_list_2_spec_for_DataUnits,
                undefined
            );
            return new DataUnits /* SEQUENCE_CONSTRUCTOR_CALL */(
                dataType,
                dataCategory,
                dataSize,
                dataNumber,
                dataRate
            );
        };
    }
    return _cached_decoder_for_DataUnits(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataUnits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataUnits */
let _cached_encoder_for_DataUnits: $.ASN1Encoder<DataUnits> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataUnits */

/* START_OF_SYMBOL_DEFINITION _encode_DataUnits */
/**
 * @summary Encodes a(n) DataUnits into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataUnits, encoded as an ASN.1 Element.
 */
export function _encode_DataUnits(
    value: DataUnits,
    elGetter: $.ASN1Encoder<DataUnits>
) {
    if (!_cached_encoder_for_DataUnits) {
        _cached_encoder_for_DataUnits = function (
            value: DataUnits,
            elGetter: $.ASN1Encoder<DataUnits>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_DataType,
                            $.BER
                        )(value.dataType, $.BER),
                        /* IF_ABSENT  */ value.dataCategory === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DataCategory,
                                  $.BER
                              )(value.dataCategory, $.BER),
                        /* IF_ABSENT  */ value.dataSize === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_DataSize,
                                  $.BER
                              )(value.dataSize, $.BER),
                        /* IF_ABSENT  */ value.dataNumber === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UnitsTotal,
                                  $.BER
                              )(value.dataNumber, $.BER),
                        /* IF_ABSENT  */ value.dataRate === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_DataRate,
                                  $.BER
                              )(value.dataRate, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataUnits(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataUnits */

/* eslint-enable */
