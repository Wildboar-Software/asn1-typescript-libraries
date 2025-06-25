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
    ScanAttributeIdList,
    _decode_ScanAttributeIdList,
    _encode_ScanAttributeIdList,
} from '../SummarizationASN1Productions/ScanAttributeIdList.ta.mjs';
import {
    NumericAttributeIdArray,
    _decode_NumericAttributeIdArray,
    _encode_NumericAttributeIdArray,
} from '../SummarizationASN1Productions/NumericAttributeIdArray.ta.mjs';
import {
    DynamicSimpleScanArgument_scopeOrListChoice,
    _decode_DynamicSimpleScanArgument_scopeOrListChoice,
    _encode_DynamicSimpleScanArgument_scopeOrListChoice,
} from '../SummarizationASN1Productions/DynamicSimpleScanArgument-scopeOrListChoice.ta.mjs';
import {
    SuppressObjectInstance,
    _decode_SuppressObjectInstance,
    _encode_SuppressObjectInstance,
} from '../SummarizationASN1Productions/SuppressObjectInstance.ta.mjs';
import {
    OnceReportAttributeIdList,
    _decode_OnceReportAttributeIdList,
    _encode_OnceReportAttributeIdList,
} from '../SummarizationASN1Productions/OnceReportAttributeIdList.ta.mjs';
import {
    TimeStampReportMode,
    _enum_for_TimeStampReportMode,
    _decode_TimeStampReportMode,
    _encode_TimeStampReportMode,
} from '../SummarizationASN1Productions/TimeStampReportMode.ta.mjs';
/**
 * @summary DynamicSimpleScanArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DynamicSimpleScanArgument ::= SEQUENCE {
 *   scanAttributeIdList        [0]  ScanAttributeIdList OPTIONAL,
 *   numericAttributeIdArray    [1]  NumericAttributeIdArray OPTIONAL,
 *   -- at least one should be present
 *   scopeOrListChoice
 *     CHOICE {scopedSelection
 *               [2]  SEQUENCE {baseManagedObject  ObjectInstance,
 *                              scope              Scope,
 *                              scanningFilter     CMISFilter},
 *             objectList       [3]  ObjectList},
 *   suppressObjectInstance     SuppressObjectInstance OPTIONAL,
 *   onceReportAttributeIdList  OnceReportAttributeIdList OPTIONAL,
 *   timeStampReportMode        TimeStampReportMode OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DynamicSimpleScanArgument {
    constructor(
        /**
         * @summary `scanAttributeIdList`.
         * @public
         * @readonly
         */
        readonly scanAttributeIdList: OPTIONAL<ScanAttributeIdList>,
        /**
         * @summary `numericAttributeIdArray`.
         * @public
         * @readonly
         */
        readonly numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>,
        /**
         * @summary `scopeOrListChoice`.
         * @public
         * @readonly
         */
        readonly scopeOrListChoice: DynamicSimpleScanArgument_scopeOrListChoice,
        /**
         * @summary `suppressObjectInstance`.
         * @public
         * @readonly
         */
        readonly suppressObjectInstance: OPTIONAL<SuppressObjectInstance>,
        /**
         * @summary `onceReportAttributeIdList`.
         * @public
         * @readonly
         */
        readonly onceReportAttributeIdList: OPTIONAL<OnceReportAttributeIdList>,
        /**
         * @summary `timeStampReportMode`.
         * @public
         * @readonly
         */
        readonly timeStampReportMode: OPTIONAL<TimeStampReportMode>
    ) {}

    /**
     * @summary Restructures an object into a DynamicSimpleScanArgument
     * @description
     *
     * This takes an `object` and converts it to a `DynamicSimpleScanArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DynamicSimpleScanArgument`.
     * @returns {DynamicSimpleScanArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof DynamicSimpleScanArgument]: DynamicSimpleScanArgument[_K];
        }
    ): DynamicSimpleScanArgument {
        return new DynamicSimpleScanArgument(
            _o.scanAttributeIdList,
            _o.numericAttributeIdArray,
            _o.scopeOrListChoice,
            _o.suppressObjectInstance,
            _o.onceReportAttributeIdList,
            _o.timeStampReportMode
        );
    }

    /**
     * @summary The enum used as the type of the component `timeStampReportMode`
     * @public
     * @static
     */

    public static _enum_for_timeStampReportMode = _enum_for_TimeStampReportMode;
}

/**
 * @summary The Leading Root Component Types of DynamicSimpleScanArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DynamicSimpleScanArgument: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scanAttributeIdList',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'numericAttributeIdArray',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'scopeOrListChoice',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'suppressObjectInstance',
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
    new $.ComponentSpec(
        'onceReportAttributeIdList',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'timeStampReportMode',
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
];

/**
 * @summary The Trailing Root Component Types of DynamicSimpleScanArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DynamicSimpleScanArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DynamicSimpleScanArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DynamicSimpleScanArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_DynamicSimpleScanArgument: $.ASN1Decoder<DynamicSimpleScanArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DynamicSimpleScanArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DynamicSimpleScanArgument} The decoded data structure.
 */
export function _decode_DynamicSimpleScanArgument(el: _Element): DynamicSimpleScanArgument {
    if (!_cached_decoder_for_DynamicSimpleScanArgument) {
        _cached_decoder_for_DynamicSimpleScanArgument = function (
            el: _Element
        ): DynamicSimpleScanArgument {
            let scanAttributeIdList: OPTIONAL<ScanAttributeIdList>;
            let numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>;
            let scopeOrListChoice!: DynamicSimpleScanArgument_scopeOrListChoice;
            let suppressObjectInstance: OPTIONAL<SuppressObjectInstance>;
            let onceReportAttributeIdList: OPTIONAL<OnceReportAttributeIdList>;
            let timeStampReportMode: OPTIONAL<TimeStampReportMode>;
            const callbacks: $.DecodingMap = {
                scanAttributeIdList: (_el: _Element): void => {
                    scanAttributeIdList = $._decode_implicit<ScanAttributeIdList>(
                        () => _decode_ScanAttributeIdList
                    )(_el);
                },
                numericAttributeIdArray: (_el: _Element): void => {
                    numericAttributeIdArray = $._decode_implicit<NumericAttributeIdArray>(
                        () => _decode_NumericAttributeIdArray
                    )(_el);
                },
                scopeOrListChoice: (_el: _Element): void => {
                    scopeOrListChoice = _decode_DynamicSimpleScanArgument_scopeOrListChoice(
                        _el
                    );
                },
                suppressObjectInstance: (_el: _Element): void => {
                    suppressObjectInstance = _decode_SuppressObjectInstance(
                        _el
                    );
                },
                onceReportAttributeIdList: (_el: _Element): void => {
                    onceReportAttributeIdList = _decode_OnceReportAttributeIdList(
                        _el
                    );
                },
                timeStampReportMode: (_el: _Element): void => {
                    timeStampReportMode = _decode_TimeStampReportMode(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DynamicSimpleScanArgument,
                _extension_additions_list_spec_for_DynamicSimpleScanArgument,
                _root_component_type_list_2_spec_for_DynamicSimpleScanArgument,
                undefined
            );
            return new DynamicSimpleScanArgument (
                scanAttributeIdList,
                numericAttributeIdArray,
                scopeOrListChoice,
                suppressObjectInstance,
                onceReportAttributeIdList,
                timeStampReportMode
            );
        };
    }
    return _cached_decoder_for_DynamicSimpleScanArgument(el);
}

let _cached_encoder_for_DynamicSimpleScanArgument: $.ASN1Encoder<DynamicSimpleScanArgument> | null = null;

/**
 * @summary Encodes a(n) DynamicSimpleScanArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DynamicSimpleScanArgument, encoded as an ASN.1 Element.
 */
export function _encode_DynamicSimpleScanArgument(
    value: DynamicSimpleScanArgument,
    elGetter: $.ASN1Encoder<DynamicSimpleScanArgument>
): _Element {
    if (!_cached_encoder_for_DynamicSimpleScanArgument) {
        _cached_encoder_for_DynamicSimpleScanArgument = function (
            value: DynamicSimpleScanArgument        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.scanAttributeIdList === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ScanAttributeIdList,
                                  $.BER
                              )(value.scanAttributeIdList, $.BER),
                        /* IF_ABSENT  */ value.numericAttributeIdArray ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_NumericAttributeIdArray,
                                  $.BER
                              )(value.numericAttributeIdArray, $.BER),
                        /* REQUIRED   */ _encode_DynamicSimpleScanArgument_scopeOrListChoice(
                            value.scopeOrListChoice,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.suppressObjectInstance ===
                        undefined
                            ? undefined
                            : _encode_SuppressObjectInstance(
                                  value.suppressObjectInstance,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.onceReportAttributeIdList ===
                        undefined
                            ? undefined
                            : _encode_OnceReportAttributeIdList(
                                  value.onceReportAttributeIdList,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.timeStampReportMode === undefined
                            ? undefined
                            : _encode_TimeStampReportMode(
                                  value.timeStampReportMode,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DynamicSimpleScanArgument(value, elGetter);
}


/* eslint-enable */
