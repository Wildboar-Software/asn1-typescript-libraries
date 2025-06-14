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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ExecutionType,
    _decode_ExecutionType,
    _encode_ExecutionType,
} from '../CSModule/ExecutionType.ta.mjs';
import {
    ErrorCode,
    _decode_ErrorCode,
    _encode_ErrorCode,
} from '../CSModule/ErrorCode.ta.mjs';
import {
    ExecutionResultType,
    _decode_ExecutionResultType,
    _encode_ExecutionResultType,
} from '../CSModule/ExecutionResultType.ta.mjs';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ResultInfoFromThread */
/**
 * @summary ResultInfoFromThread
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultInfoFromThread ::= SEQUENCE {
 *   executionType        ExecutionType,
 *   errorCode            ErrorCode,
 *   executionResultType  ExecutionResultType,
 *   executionResult      SET OF Attribute
 * }
 * ```
 *
 * @class
 */
export class ResultInfoFromThread {
    constructor(
        /**
         * @summary `executionType`.
         * @public
         * @readonly
         */
        readonly executionType: ExecutionType,
        /**
         * @summary `errorCode`.
         * @public
         * @readonly
         */
        readonly errorCode: ErrorCode,
        /**
         * @summary `executionResultType`.
         * @public
         * @readonly
         */
        readonly executionResultType: ExecutionResultType,
        /**
         * @summary `executionResult`.
         * @public
         * @readonly
         */
        readonly executionResult: Attribute[]
    ) {}

    /**
     * @summary Restructures an object into a ResultInfoFromThread
     * @description
     *
     * This takes an `object` and converts it to a `ResultInfoFromThread`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultInfoFromThread`.
     * @returns {ResultInfoFromThread}
     */
    public static _from_object(
        _o: { [_K in keyof ResultInfoFromThread]: ResultInfoFromThread[_K] }
    ): ResultInfoFromThread {
        return new ResultInfoFromThread(
            _o.executionType,
            _o.errorCode,
            _o.executionResultType,
            _o.executionResult
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResultInfoFromThread */
/**
 * @summary The Leading Root Component Types of ResultInfoFromThread
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResultInfoFromThread: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'executionType',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'errorCode',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'executionResultType',
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'executionResult',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResultInfoFromThread */
/**
 * @summary The Trailing Root Component Types of ResultInfoFromThread
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResultInfoFromThread: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResultInfoFromThread */
/**
 * @summary The Extension Addition Component Types of ResultInfoFromThread
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResultInfoFromThread: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInfoFromThread */
let _cached_decoder_for_ResultInfoFromThread: $.ASN1Decoder<ResultInfoFromThread> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _decode_ResultInfoFromThread */
/**
 * @summary Decodes an ASN.1 element into a(n) ResultInfoFromThread
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultInfoFromThread} The decoded data structure.
 */
export function _decode_ResultInfoFromThread(el: _Element) {
    if (!_cached_decoder_for_ResultInfoFromThread) {
        _cached_decoder_for_ResultInfoFromThread = function (
            el: _Element
        ): ResultInfoFromThread {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'ResultInfoFromThread contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'executionType';
            sequence[1].name = 'errorCode';
            sequence[2].name = 'executionResultType';
            sequence[3].name = 'executionResult';
            let executionType!: ExecutionType;
            let errorCode!: ErrorCode;
            let executionResultType!: ExecutionResultType;
            let executionResult!: Attribute[];
            executionType = _decode_ExecutionType(sequence[0]);
            errorCode = _decode_ErrorCode(sequence[1]);
            executionResultType = _decode_ExecutionResultType(sequence[2]);
            executionResult = $._decodeSetOf<Attribute>(
                () => _decode_Attribute
            )(sequence[3]);
            return new ResultInfoFromThread(
                executionType,
                errorCode,
                executionResultType,
                executionResult
            );
        };
    }
    return _cached_decoder_for_ResultInfoFromThread(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInfoFromThread */
let _cached_encoder_for_ResultInfoFromThread: $.ASN1Encoder<ResultInfoFromThread> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInfoFromThread */

/* START_OF_SYMBOL_DEFINITION _encode_ResultInfoFromThread */
/**
 * @summary Encodes a(n) ResultInfoFromThread into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultInfoFromThread, encoded as an ASN.1 Element.
 */
export function _encode_ResultInfoFromThread(
    value: ResultInfoFromThread,
    elGetter: $.ASN1Encoder<ResultInfoFromThread>
) {
    if (!_cached_encoder_for_ResultInfoFromThread) {
        _cached_encoder_for_ResultInfoFromThread = function (
            value: ResultInfoFromThread        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ExecutionType(
                            value.executionType,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ErrorCode(
                            value.errorCode,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ExecutionResultType(
                            value.executionResultType,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        )(value.executionResult, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResultInfoFromThread(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResultInfoFromThread */

/* eslint-enable */
