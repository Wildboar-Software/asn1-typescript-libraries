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
    RefusedOperation_refused_argument,
    _decode_RefusedOperation_refused_argument,
    _encode_RefusedOperation_refused_argument,
} from '../MTSAbstractService/RefusedOperation-refused-argument.ta.mjs';
import {
    RefusalReason,
    _decode_RefusalReason,
    _encode_RefusalReason,
} from '../MTSAbstractService/RefusalReason.ta.mjs';
/**
 * @summary RefusedOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefusedOperation ::= SET {
 *   refused-argument
 *     CHOICE {built-in-argument  [1]  RefusedArgument,
 *             refused-extension  EXTENSION.&id},
 *   refusal-reason    [2]  RefusalReason
 * }
 * ```
 *
 */
export class RefusedOperation {
    constructor(
        /**
         * @summary `refused_argument`.
         * @public
         * @readonly
         */
        readonly refused_argument: RefusedOperation_refused_argument,
        /**
         * @summary `refusal_reason`.
         * @public
         * @readonly
         */
        readonly refusal_reason: RefusalReason
    ) {}

    /**
     * @summary Restructures an object into a RefusedOperation
     * @description
     *
     * This takes an `object` and converts it to a `RefusedOperation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RefusedOperation`.
     * @returns {RefusedOperation}
     */
    public static _from_object(
        _o: { [_K in keyof RefusedOperation]: RefusedOperation[_K] }
    ): RefusedOperation {
        return new RefusedOperation(_o.refused_argument, _o.refusal_reason);
    }
}

/**
 * @summary The Leading Root Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RefusedOperation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'refused-argument',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'refusal-reason',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RefusedOperation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RefusedOperation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RefusedOperation: $.ComponentSpec[] = [];

let _cached_decoder_for_RefusedOperation: $.ASN1Decoder<RefusedOperation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RefusedOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefusedOperation} The decoded data structure.
 */
export function _decode_RefusedOperation(el: _Element): RefusedOperation {
    if (!_cached_decoder_for_RefusedOperation) {
        _cached_decoder_for_RefusedOperation = function (
            el: _Element
        ): RefusedOperation {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let refused_argument!: RefusedOperation_refused_argument;
            let refusal_reason!: RefusalReason;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'refused-argument': (_el: _Element): void => {
                    refused_argument = _decode_RefusedOperation_refused_argument(
                        _el
                    );
                },
                'refusal-reason': (_el: _Element): void => {
                    refusal_reason = $._decode_implicit<RefusalReason>(
                        () => _decode_RefusalReason
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RefusedOperation,
                _extension_additions_list_spec_for_RefusedOperation,
                _root_component_type_list_2_spec_for_RefusedOperation,
                undefined
            );
            return new RefusedOperation /* SET_CONSTRUCTOR_CALL */(
                refused_argument,
                refusal_reason
            );
        };
    }
    return _cached_decoder_for_RefusedOperation(el);
}

let _cached_encoder_for_RefusedOperation: $.ASN1Encoder<RefusedOperation> | null = null;

/**
 * @summary Encodes a(n) RefusedOperation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefusedOperation, encoded as an ASN.1 Element.
 */
export function _encode_RefusedOperation(
    value: RefusedOperation,
    elGetter: $.ASN1Encoder<RefusedOperation>
): _Element {
    if (!_cached_encoder_for_RefusedOperation) {
        _cached_encoder_for_RefusedOperation = function (
            value: RefusedOperation        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RefusedOperation_refused_argument(
                            value.refused_argument,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_RefusalReason,
                            $.BER
                        )(value.refusal_reason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RefusedOperation(value, elGetter);
}


/* eslint-enable */
