/* eslint-disable */
import {
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
    TriggerId,
    _decode_TriggerId,
    _encode_TriggerId,
} from '../CSModule/TriggerId.ta.mjs';
import {
    ExecutionParameterList,
    _decode_ExecutionParameterList,
    _encode_ExecutionParameterList,
} from '../CSModule/ExecutionParameterList.ta.mjs';
/**
 * @summary TriggerParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerParameters ::= SEQUENCE {
 *   triggerId               TriggerId,
 *   executionParameterList  ExecutionParameterList
 * }
 * ```
 *
 */
export class TriggerParameters {
    constructor(
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerId,
        /**
         * @summary `executionParameterList`.
         * @public
         * @readonly
         */
        readonly executionParameterList: ExecutionParameterList
    ) {}

    /**
     * @summary Restructures an object into a TriggerParameters
     * @description
     *
     * This takes an `object` and converts it to a `TriggerParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerParameters`.
     * @returns {TriggerParameters}
     */
    public static _from_object(
        _o: { [_K in keyof TriggerParameters]: TriggerParameters[_K] }
    ): TriggerParameters {
        return new TriggerParameters(_o.triggerId, _o.executionParameterList);
    }
}

/**
 * @summary The Leading Root Component Types of TriggerParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TriggerParameters: $.ComponentSpec[] = [
    new $.ComponentSpec('triggerId', false, $.hasAnyTag),
    new $.ComponentSpec(
        'executionParameterList',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of TriggerParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TriggerParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TriggerParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TriggerParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_TriggerParameters: $.ASN1Decoder<TriggerParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerParameters} The decoded data structure.
 */
export function _decode_TriggerParameters(el: _Element): TriggerParameters {
    if (!_cached_decoder_for_TriggerParameters) {
        _cached_decoder_for_TriggerParameters = function (
            el: _Element
        ): TriggerParameters {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TriggerParameters contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'triggerId';
            sequence[1].name = 'executionParameterList';
            let triggerId!: TriggerId;
            let executionParameterList!: ExecutionParameterList;
            triggerId = _decode_TriggerId(sequence[0]);
            executionParameterList = _decode_ExecutionParameterList(
                sequence[1]
            );
            return new TriggerParameters(triggerId, executionParameterList);
        };
    }
    return _cached_decoder_for_TriggerParameters(el);
}

let _cached_encoder_for_TriggerParameters: $.ASN1Encoder<TriggerParameters> | null = null;

/**
 * @summary Encodes a(n) TriggerParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerParameters, encoded as an ASN.1 Element.
 */
export function _encode_TriggerParameters(
    value: TriggerParameters,
    elGetter: $.ASN1Encoder<TriggerParameters>
): _Element {
    if (!_cached_encoder_for_TriggerParameters) {
        _cached_encoder_for_TriggerParameters = function (
            value: TriggerParameters        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TriggerId(
                            value.triggerId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ExecutionParameterList(
                            value.executionParameterList,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TriggerParameters(value, elGetter);
}


/* eslint-enable */
