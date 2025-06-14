/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    TimeoutPeriod,
    _decode_TimeoutPeriod,
    _encode_TimeoutPeriod,
} from '../Test-ASN1Module/TimeoutPeriod.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ResourceSelfTestInfo */
/**
 * @summary ResourceSelfTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSelfTestInfo ::= SEQUENCE {
 *   diagnosticType  [0]  INTEGER OPTIONAL, --type of diagnostic to be run
 *   phases          SET OF INTEGER, -- phases to be run
 *   iteration       [1]  INTEGER, -- number of iterations for each type
 *   timeoutPeriod   [2]  TimeoutPeriod
 * }
 * ```
 *
 * @class
 */
export class ResourceSelfTestInfo {
    constructor(
        /**
         * @summary `diagnosticType`.
         * @public
         * @readonly
         */
        readonly diagnosticType: OPTIONAL<INTEGER>,
        /**
         * @summary `phases`.
         * @public
         * @readonly
         */
        readonly phases: INTEGER[],
        /**
         * @summary `iteration`.
         * @public
         * @readonly
         */
        readonly iteration: INTEGER,
        /**
         * @summary `timeoutPeriod`.
         * @public
         * @readonly
         */
        readonly timeoutPeriod: TimeoutPeriod
    ) {}

    /**
     * @summary Restructures an object into a ResourceSelfTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ResourceSelfTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceSelfTestInfo`.
     * @returns {ResourceSelfTestInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ResourceSelfTestInfo]: ResourceSelfTestInfo[_K] }
    ): ResourceSelfTestInfo {
        return new ResourceSelfTestInfo(
            _o.diagnosticType,
            _o.phases,
            _o.iteration,
            _o.timeoutPeriod
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceSelfTestInfo */
/**
 * @summary The Leading Root Component Types of ResourceSelfTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResourceSelfTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'diagnosticType',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'phases',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'iteration',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'timeoutPeriod',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceSelfTestInfo */
/**
 * @summary The Trailing Root Component Types of ResourceSelfTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceSelfTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceSelfTestInfo */
/**
 * @summary The Extension Addition Component Types of ResourceSelfTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceSelfTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSelfTestInfo */
let _cached_decoder_for_ResourceSelfTestInfo: $.ASN1Decoder<ResourceSelfTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceSelfTestInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSelfTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSelfTestInfo} The decoded data structure.
 */
export function _decode_ResourceSelfTestInfo(el: _Element) {
    if (!_cached_decoder_for_ResourceSelfTestInfo) {
        _cached_decoder_for_ResourceSelfTestInfo = function (
            el: _Element
        ): ResourceSelfTestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let diagnosticType: OPTIONAL<INTEGER>;
            let phases!: INTEGER[];
            let iteration!: INTEGER;
            let timeoutPeriod!: TimeoutPeriod;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                diagnosticType: (_el: _Element): void => {
                    diagnosticType = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                phases: (_el: _Element): void => {
                    phases = $._decodeSetOf<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                iteration: (_el: _Element): void => {
                    iteration = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                timeoutPeriod: (_el: _Element): void => {
                    timeoutPeriod = $._decode_explicit<TimeoutPeriod>(
                        () => _decode_TimeoutPeriod
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceSelfTestInfo,
                _extension_additions_list_spec_for_ResourceSelfTestInfo,
                _root_component_type_list_2_spec_for_ResourceSelfTestInfo,
                undefined
            );
            return new ResourceSelfTestInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                diagnosticType,
                phases,
                iteration,
                timeoutPeriod
            );
        };
    }
    return _cached_decoder_for_ResourceSelfTestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSelfTestInfo */
let _cached_encoder_for_ResourceSelfTestInfo: $.ASN1Encoder<ResourceSelfTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceSelfTestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceSelfTestInfo */
/**
 * @summary Encodes a(n) ResourceSelfTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSelfTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSelfTestInfo(
    value: ResourceSelfTestInfo,
    elGetter: $.ASN1Encoder<ResourceSelfTestInfo>
) {
    if (!_cached_encoder_for_ResourceSelfTestInfo) {
        _cached_encoder_for_ResourceSelfTestInfo = function (
            value: ResourceSelfTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.diagnosticType === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.diagnosticType, $.BER),
                        /* REQUIRED   */ $._encodeSetOf<INTEGER>(
                            () => $._encodeInteger,
                            $.BER
                        )(value.phases, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.iteration, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => _encode_TimeoutPeriod,
                            $.BER
                        )(value.timeoutPeriod, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResourceSelfTestInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResourceSelfTestInfo */

/* eslint-enable */
