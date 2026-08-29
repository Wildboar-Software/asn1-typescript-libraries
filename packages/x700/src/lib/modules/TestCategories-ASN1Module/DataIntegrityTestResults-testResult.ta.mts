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
    EstablishmentTime,
    _decode_EstablishmentTime,
    _encode_EstablishmentTime,
} from '../TestCategories-ASN1Module/EstablishmentTime.ta.mjs';
import {
    DataUnits,
    _decode_DataUnits,
    _encode_DataUnits,
} from '../TestCategories-ASN1Module/DataUnits.ta.mjs';
/**
 * @summary DataIntegrityTestResults_testResult
 * @description
 *
 * Inner SEQUENCE of `DataIntegrityTestResults.testResult`.
 * Pass includes establishment time and original data; Fail due to
 * received data includes `corruptedData`. ITU-T Rec. X.737 (11/95)
 * [§7.3.8](https://www.itu.int/rec/T-REC-X.737-199511-I), §8.1.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataIntegrityTestResults-testResult ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class DataIntegrityTestResults_testResult {
    constructor(
        /**
         * @summary `establishmentTime`.
         * @description
         *
         * Time for the data exchange (Pass)
         * or time until fail/termination (Fail). Optional. X.737 §7.3.8.
         * @public
         * @readonly
         */
        readonly establishmentTime: OPTIONAL<EstablishmentTime>,
        /**
         * @summary `originalData`.
         * @description
         *
         * Data units used. Required in this
         * alternative; returned if they were not supplied in the request
         * and the test failed due to received data. X.737 §7.3.8, §8.1.5.
         * @public
         * @readonly
         */
        readonly originalData: DataUnits,
        /**
         * @summary `corruptedData`.
         * @description
         *
         * Data actually received when the test
         * failed because of received data. Optional. X.737 §7.3.8.
         * @public
         * @readonly
         */
        readonly corruptedData?: OPTIONAL<DataUnits>
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
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'originalData',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'corruptedData',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of DataIntegrityTestResults_testResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DataIntegrityTestResults_testResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DataIntegrityTestResults_testResult: $.ComponentSpec[] = [];

let _cached_decoder_for_DataIntegrityTestResults_testResult: $.ASN1Decoder<DataIntegrityTestResults_testResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataIntegrityTestResults_testResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataIntegrityTestResults_testResult} The decoded data structure.
 */
export function _decode_DataIntegrityTestResults_testResult(el: _Element): DataIntegrityTestResults_testResult {
    if (!_cached_decoder_for_DataIntegrityTestResults_testResult) {
        _cached_decoder_for_DataIntegrityTestResults_testResult = function (
            el: _Element
        ): DataIntegrityTestResults_testResult {
            let establishmentTime: OPTIONAL<EstablishmentTime>;
            let originalData!: DataUnits;
            let corruptedData: OPTIONAL<DataUnits>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DataIntegrityTestResults_testResult,
                _extension_additions_list_spec_for_DataIntegrityTestResults_testResult,
                _root_component_type_list_2_spec_for_DataIntegrityTestResults_testResult,
                undefined
            );
            return new DataIntegrityTestResults_testResult (
                establishmentTime,
                originalData,
                corruptedData
            );
        };
    }
    return _cached_decoder_for_DataIntegrityTestResults_testResult(el);
}

let _cached_encoder_for_DataIntegrityTestResults_testResult: $.ASN1Encoder<DataIntegrityTestResults_testResult> | null = null;

/**
 * @summary Encodes a(n) DataIntegrityTestResults_testResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataIntegrityTestResults_testResult, encoded as an ASN.1 Element.
 */
export function _encode_DataIntegrityTestResults_testResult(
    value: DataIntegrityTestResults_testResult,
    elGetter: $.ASN1Encoder<DataIntegrityTestResults_testResult>
): _Element {
    if (!_cached_encoder_for_DataIntegrityTestResults_testResult) {
        _cached_encoder_for_DataIntegrityTestResults_testResult = function (
            value: DataIntegrityTestResults_testResult        ): _Element {
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


/* eslint-enable */
