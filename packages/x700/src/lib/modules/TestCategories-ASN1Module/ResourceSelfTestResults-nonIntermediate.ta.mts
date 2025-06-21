/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    PrintableString,
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
/**
 * @summary ResourceSelfTestResults_nonIntermediate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceSelfTestResults-nonIntermediate ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ResourceSelfTestResults_nonIntermediate {
    constructor(
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
        readonly timeoutPeriod: TimeoutPeriod,
        /**
         * @summary `finalResponse`.
         * @public
         * @readonly
         */
        readonly finalResponse: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a ResourceSelfTestResults_nonIntermediate
     * @description
     *
     * This takes an `object` and converts it to a `ResourceSelfTestResults_nonIntermediate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceSelfTestResults_nonIntermediate`.
     * @returns {ResourceSelfTestResults_nonIntermediate}
     */
    public static _from_object(
        _o: {
            [_K in keyof ResourceSelfTestResults_nonIntermediate]: ResourceSelfTestResults_nonIntermediate[_K];
        }
    ): ResourceSelfTestResults_nonIntermediate {
        return new ResourceSelfTestResults_nonIntermediate(
            _o.phases,
            _o.iteration,
            _o.timeoutPeriod,
            _o.finalResponse
        );
    }
}

/**
 * @summary The Leading Root Component Types of ResourceSelfTestResults_nonIntermediate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResourceSelfTestResults_nonIntermediate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'phases',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'iteration',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'timeoutPeriod',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'finalResponse',
        true,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of ResourceSelfTestResults_nonIntermediate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceSelfTestResults_nonIntermediate: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResourceSelfTestResults_nonIntermediate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceSelfTestResults_nonIntermediate: $.ComponentSpec[] = [];

let _cached_decoder_for_ResourceSelfTestResults_nonIntermediate: $.ASN1Decoder<ResourceSelfTestResults_nonIntermediate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceSelfTestResults_nonIntermediate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceSelfTestResults_nonIntermediate} The decoded data structure.
 */
export function _decode_ResourceSelfTestResults_nonIntermediate(el: _Element) {
    if (!_cached_decoder_for_ResourceSelfTestResults_nonIntermediate) {
        _cached_decoder_for_ResourceSelfTestResults_nonIntermediate = function (
            el: _Element
        ): ResourceSelfTestResults_nonIntermediate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let phases!: INTEGER[];
            let iteration!: INTEGER;
            let timeoutPeriod!: TimeoutPeriod;
            let finalResponse: OPTIONAL<PrintableString>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
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
                finalResponse: (_el: _Element): void => {
                    finalResponse = $._decodePrintableString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceSelfTestResults_nonIntermediate,
                _extension_additions_list_spec_for_ResourceSelfTestResults_nonIntermediate,
                _root_component_type_list_2_spec_for_ResourceSelfTestResults_nonIntermediate,
                undefined
            );
            return new ResourceSelfTestResults_nonIntermediate /* SEQUENCE_CONSTRUCTOR_CALL */(
                phases,
                iteration,
                timeoutPeriod,
                finalResponse
            );
        };
    }
    return _cached_decoder_for_ResourceSelfTestResults_nonIntermediate(el);
}

let _cached_encoder_for_ResourceSelfTestResults_nonIntermediate: $.ASN1Encoder<ResourceSelfTestResults_nonIntermediate> | null = null;

/**
 * @summary Encodes a(n) ResourceSelfTestResults_nonIntermediate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceSelfTestResults_nonIntermediate, encoded as an ASN.1 Element.
 */
export function _encode_ResourceSelfTestResults_nonIntermediate(
    value: ResourceSelfTestResults_nonIntermediate,
    elGetter: $.ASN1Encoder<ResourceSelfTestResults_nonIntermediate>
) {
    if (!_cached_encoder_for_ResourceSelfTestResults_nonIntermediate) {
        _cached_encoder_for_ResourceSelfTestResults_nonIntermediate = function (
            value: ResourceSelfTestResults_nonIntermediate        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSetOf<INTEGER>(
                            () => $._encodeInteger,
                            $.BER
                        )(value.phases, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.iteration, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_TimeoutPeriod,
                            $.BER
                        )(value.timeoutPeriod, $.BER),
                        /* IF_ABSENT  */ value.finalResponse === undefined
                            ? undefined
                            : $._encodePrintableString(
                                  value.finalResponse,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResourceSelfTestResults_nonIntermediate(
        value,
        elGetter
    );
}


/* eslint-enable */
