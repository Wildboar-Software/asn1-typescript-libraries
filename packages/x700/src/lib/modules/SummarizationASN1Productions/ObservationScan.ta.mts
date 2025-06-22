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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeMeasure,
    _decode_AttributeMeasure,
    _encode_AttributeMeasure,
} from '../SummarizationASN1Productions/AttributeMeasure.ta.mjs';
import {
    NumericMeasure,
    _decode_NumericMeasure,
    _encode_NumericMeasure,
} from '../SummarizationASN1Productions/NumericMeasure.ta.mjs';
/**
 * @summary ObservationScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObservationScan ::= SEQUENCE {
 *   observedObjectInstance  ObjectInstance OPTIONAL,
 *   attributeMeasureList    [0]  SET OF AttributeMeasure OPTIONAL,
 *   numericValueArray       [1]  SEQUENCE OF NumericMeasure OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ObservationScan {
    constructor(
        /**
         * @summary `observedObjectInstance`.
         * @public
         * @readonly
         */
        readonly observedObjectInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `attributeMeasureList`.
         * @public
         * @readonly
         */
        readonly attributeMeasureList: OPTIONAL<AttributeMeasure[]>,
        /**
         * @summary `numericValueArray`.
         * @public
         * @readonly
         */
        readonly numericValueArray: OPTIONAL<NumericMeasure[]>
    ) {}

    /**
     * @summary Restructures an object into a ObservationScan
     * @description
     *
     * This takes an `object` and converts it to a `ObservationScan`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObservationScan`.
     * @returns {ObservationScan}
     */
    public static _from_object(
        _o: { [_K in keyof ObservationScan]: ObservationScan[_K] }
    ): ObservationScan {
        return new ObservationScan(
            _o.observedObjectInstance,
            _o.attributeMeasureList,
            _o.numericValueArray
        );
    }
}

/**
 * @summary The Leading Root Component Types of ObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObservationScan: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'observedObjectInstance',
        true,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'attributeMeasureList',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'numericValueArray',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObservationScan: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ObservationScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObservationScan: $.ComponentSpec[] = [];

let _cached_decoder_for_ObservationScan: $.ASN1Decoder<ObservationScan> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservationScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservationScan} The decoded data structure.
 */
export function _decode_ObservationScan(el: _Element) {
    if (!_cached_decoder_for_ObservationScan) {
        _cached_decoder_for_ObservationScan = function (
            el: _Element
        ): ObservationScan {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let observedObjectInstance: OPTIONAL<ObjectInstance>;
            let attributeMeasureList: OPTIONAL<AttributeMeasure[]>;
            let numericValueArray: OPTIONAL<NumericMeasure[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                observedObjectInstance: (_el: _Element): void => {
                    observedObjectInstance = _decode_ObjectInstance(_el);
                },
                attributeMeasureList: (_el: _Element): void => {
                    attributeMeasureList = $._decode_implicit<
                        AttributeMeasure[]
                    >(() =>
                        $._decodeSetOf<AttributeMeasure>(
                            () => _decode_AttributeMeasure
                        )
                    )(_el);
                },
                numericValueArray: (_el: _Element): void => {
                    numericValueArray = $._decode_implicit<NumericMeasure[]>(
                        () =>
                            $._decodeSequenceOf<NumericMeasure>(
                                () => _decode_NumericMeasure
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObservationScan,
                _extension_additions_list_spec_for_ObservationScan,
                _root_component_type_list_2_spec_for_ObservationScan,
                undefined
            );
            return new ObservationScan /* SEQUENCE_CONSTRUCTOR_CALL */(
                observedObjectInstance,
                attributeMeasureList,
                numericValueArray
            );
        };
    }
    return _cached_decoder_for_ObservationScan(el);
}

let _cached_encoder_for_ObservationScan: $.ASN1Encoder<ObservationScan> | null = null;

/**
 * @summary Encodes a(n) ObservationScan into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservationScan, encoded as an ASN.1 Element.
 */
export function _encode_ObservationScan(
    value: ObservationScan,
    elGetter: $.ASN1Encoder<ObservationScan>
) {
    if (!_cached_encoder_for_ObservationScan) {
        _cached_encoder_for_ObservationScan = function (
            value: ObservationScan        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.observedObjectInstance ===
                        undefined
                            ? undefined
                            : _encode_ObjectInstance(
                                  value.observedObjectInstance,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeMeasureList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AttributeMeasure>(
                                          () => _encode_AttributeMeasure,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.attributeMeasureList, $.BER),
                        /* IF_ABSENT  */ value.numericValueArray === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<NumericMeasure>(
                                          () => _encode_NumericMeasure,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.numericValueArray, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObservationScan(value, elGetter);
}


/* eslint-enable */
