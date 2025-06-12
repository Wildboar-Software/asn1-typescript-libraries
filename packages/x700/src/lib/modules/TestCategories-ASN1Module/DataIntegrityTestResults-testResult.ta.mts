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
    EstablishmentTime,
    _decode_EstablishmentTime,
    _encode_EstablishmentTime,
} from '../TestCategories-ASN1Module/EstablishmentTime.ta.mjs';
export {
    EstablishmentTime,
    _decode_EstablishmentTime,
    _encode_EstablishmentTime,
} from '../TestCategories-ASN1Module/EstablishmentTime.ta.mjs';
import {
    DataUnits,
    _decode_DataUnits,
    _encode_DataUnits,
} from '../TestCategories-ASN1Module/DataUnits.ta.mjs';
export {
    DataUnits,
    _decode_DataUnits,
    _encode_DataUnits,
} from '../TestCategories-ASN1Module/DataUnits.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DataIntegrityTestResults_testResult */
/**
 * @summary DataIntegrityTestResults_testResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataIntegrityTestResults-testResult ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class DataIntegrityTestResults_testResult {
    constructor(
        /**
         * @summary `establishmentTime`.
         * @public
         * @readonly
         */
        readonly establishmentTime: OPTIONAL<EstablishmentTime>,
        /**
         * @summary `originalData`.
         * @public
         * @readonly
         */
        readonly originalData: DataUnits,
        /**
         * @summary `corruptedData`.
         * @public
         * @readonly
         */
        readonly corruptedData: OPTIONAL<DataUnits>
    ) {}

    /**
     * @summary Restructures an object into a DataIntegrityTestResults_testResult
     * @description
     *
     * This takes an `object` and converts it to a `DataIntegrityTestResults_testResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DataIntegrityTestResults_testResult`.
     * @returns {DataIntegrityTestResults_testResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof DataIntegrityTestResults_testResult]: DataIntegrityTestResults_testResult[_K];
        }
    ): DataIntegrityTestResults_testResult {
        return new DataIntegrityTestResults_testResult(
            _o.establishmentTime,
            _o.originalData,
            _o.corruptedData
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataIntegrityTestResults_testResult */
/**
 * @summary The Leading Root Component Types of DataIntegrityTestResults_testResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DataIntegrityTestResults_testResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'establishmentTime',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originalData',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'corruptedData',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult */
/**
 * @summary The Trailing Root Component Types of DataIntegrityTestResults_testResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataIntegrityTestResults_testResult */
/**
 * @summary The Extension Addition Component Types of DataIntegrityTestResults_testResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataIntegrityTestResults_testResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestResults_testResult */
let _cached_decoder_for_DataIntegrityTestResults_testResult: $.ASN1Decoder<DataIntegrityTestResults_testResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestResults_testResult */
/**
 * @summary Decodes an ASN.1 element into a(n) DataIntegrityTestResults_testResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataIntegrityTestResults_testResult} The decoded data structure.
 */
export function _decode_DataIntegrityTestResults_testResult(el: _Element) {
    if (!_cached_decoder_for_DataIntegrityTestResults_testResult) {
        _cached_decoder_for_DataIntegrityTestResults_testResult = function (
            el: _Element
        ): DataIntegrityTestResults_testResult {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let establishmentTime: OPTIONAL<EstablishmentTime>;
            let originalData!: DataUnits;
            let corruptedData: OPTIONAL<DataUnits>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                establishmentTime: (_el: _Element): void => {
                    establishmentTime = $._decode_explicit<EstablishmentTime>(
                        () => _decode_EstablishmentTime
                    )(_el);
                },
                originalData: (_el: _Element): void => {
                    originalData = $._decode_implicit<DataUnits>(
                        () => _decode_DataUnits
                    )(_el);
                },
                corruptedData: (_el: _Element): void => {
                    corruptedData = $._decode_implicit<DataUnits>(
                        () => _decode_DataUnits
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataIntegrityTestResults_testResult,
                _extension_additions_list_spec_for_DataIntegrityTestResults_testResult,
                _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult,
                undefined
            );
            return new DataIntegrityTestResults_testResult /* SEQUENCE_CONSTRUCTOR_CALL */(
                establishmentTime,
                originalData,
                corruptedData
            );
        };
    }
    return _cached_decoder_for_DataIntegrityTestResults_testResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestResults_testResult */
let _cached_encoder_for_DataIntegrityTestResults_testResult: $.ASN1Encoder<DataIntegrityTestResults_testResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataIntegrityTestResults_testResult */

/* START_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestResults_testResult */
/**
 * @summary Encodes a(n) DataIntegrityTestResults_testResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataIntegrityTestResults_testResult, encoded as an ASN.1 Element.
 */
export function _encode_DataIntegrityTestResults_testResult(
    value: DataIntegrityTestResults_testResult,
    elGetter: $.ASN1Encoder<DataIntegrityTestResults_testResult>
) {
    if (!_cached_encoder_for_DataIntegrityTestResults_testResult) {
        _cached_encoder_for_DataIntegrityTestResults_testResult = function (
            value: DataIntegrityTestResults_testResult,
            elGetter: $.ASN1Encoder<DataIntegrityTestResults_testResult>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.establishmentTime === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EstablishmentTime,
                                  $.BER
                              )(value.establishmentTime, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_DataUnits,
                            $.BER
                        )(value.originalData, $.BER),
                        /* IF_ABSENT  */ value.corruptedData === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_DataUnits,
                                  $.BER
                              )(value.corruptedData, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DataIntegrityTestResults_testResult(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DataIntegrityTestResults_testResult */

/* eslint-enable */
