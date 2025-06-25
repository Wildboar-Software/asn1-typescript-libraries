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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
import {
    NumericAttributeIdArray,
    _decode_NumericAttributeIdArray,
    _encode_NumericAttributeIdArray,
} from '../SummarizationASN1Productions/NumericAttributeIdArray.ta.mjs';
import {
    ReportTimeAttributeIdList,
    _decode_ReportTimeAttributeIdList,
    _encode_ReportTimeAttributeIdList,
} from '../SummarizationASN1Productions/ReportTimeAttributeIdList.ta.mjs';
/**
 * @summary BufferedObservationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationId ::= SEQUENCE {
 *   observedObject             ObjectInstance,
 *   scanAttributeIdList        [0]  SET OF AttributeId OPTIONAL,
 *   numericAttributeIdArray    [1]  NumericAttributeIdArray OPTIONAL,
 *   reportTimeAttributeIdList  [2]  ReportTimeAttributeIdList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BufferedObservationId {
    constructor(
        /**
         * @summary `observedObject`.
         * @public
         * @readonly
         */
        readonly observedObject: ObjectInstance,
        /**
         * @summary `scanAttributeIdList`.
         * @public
         * @readonly
         */
        readonly scanAttributeIdList: OPTIONAL<AttributeId[]>,
        /**
         * @summary `numericAttributeIdArray`.
         * @public
         * @readonly
         */
        readonly numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>,
        /**
         * @summary `reportTimeAttributeIdList`.
         * @public
         * @readonly
         */
        readonly reportTimeAttributeIdList: OPTIONAL<ReportTimeAttributeIdList>
    ) {}

    /**
     * @summary Restructures an object into a BufferedObservationId
     * @description
     *
     * This takes an `object` and converts it to a `BufferedObservationId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BufferedObservationId`.
     * @returns {BufferedObservationId}
     */
    public static _from_object(
        _o: { [_K in keyof BufferedObservationId]: BufferedObservationId[_K] }
    ): BufferedObservationId {
        return new BufferedObservationId(
            _o.observedObject,
            _o.scanAttributeIdList,
            _o.numericAttributeIdArray,
            _o.reportTimeAttributeIdList
        );
    }
}

/**
 * @summary The Leading Root Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BufferedObservationId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'observedObject',
        false,
        $.hasAnyTag
    ),
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
        'reportTimeAttributeIdList',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BufferedObservationId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BufferedObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BufferedObservationId: $.ComponentSpec[] = [];

let _cached_decoder_for_BufferedObservationId: $.ASN1Decoder<BufferedObservationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationId} The decoded data structure.
 */
export function _decode_BufferedObservationId(el: _Element): BufferedObservationId {
    if (!_cached_decoder_for_BufferedObservationId) {
        _cached_decoder_for_BufferedObservationId = function (
            el: _Element
        ): BufferedObservationId {
            let observedObject!: ObjectInstance;
            let scanAttributeIdList: OPTIONAL<AttributeId[]>;
            let numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>;
            let reportTimeAttributeIdList: OPTIONAL<ReportTimeAttributeIdList>;
            const callbacks: $.DecodingMap = {
                observedObject: (_el: _Element): void => {
                    observedObject = _decode_ObjectInstance(_el);
                },
                scanAttributeIdList: (_el: _Element): void => {
                    scanAttributeIdList = $._decode_implicit<AttributeId[]>(
                        () =>
                            $._decodeSetOf<AttributeId>(
                                () => _decode_AttributeId
                            )
                    )(_el);
                },
                numericAttributeIdArray: (_el: _Element): void => {
                    numericAttributeIdArray = $._decode_implicit<NumericAttributeIdArray>(
                        () => _decode_NumericAttributeIdArray
                    )(_el);
                },
                reportTimeAttributeIdList: (_el: _Element): void => {
                    reportTimeAttributeIdList = $._decode_implicit<ReportTimeAttributeIdList>(
                        () => _decode_ReportTimeAttributeIdList
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BufferedObservationId,
                _extension_additions_list_spec_for_BufferedObservationId,
                _root_component_type_list_2_spec_for_BufferedObservationId,
                undefined
            );
            return new BufferedObservationId (
                observedObject,
                scanAttributeIdList,
                numericAttributeIdArray,
                reportTimeAttributeIdList
            );
        };
    }
    return _cached_decoder_for_BufferedObservationId(el);
}

let _cached_encoder_for_BufferedObservationId: $.ASN1Encoder<BufferedObservationId> | null = null;

/**
 * @summary Encodes a(n) BufferedObservationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationId, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationId(
    value: BufferedObservationId,
    elGetter: $.ASN1Encoder<BufferedObservationId>
): _Element {
    if (!_cached_encoder_for_BufferedObservationId) {
        _cached_encoder_for_BufferedObservationId = function (
            value: BufferedObservationId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.observedObject,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.scanAttributeIdList === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<AttributeId>(
                                          () => _encode_AttributeId,
                                          $.BER
                                      ),
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
                        /* IF_ABSENT  */ value.reportTimeAttributeIdList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ReportTimeAttributeIdList,
                                  $.BER
                              )(value.reportTimeAttributeIdList, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BufferedObservationId(value, elGetter);
}


/* eslint-enable */
