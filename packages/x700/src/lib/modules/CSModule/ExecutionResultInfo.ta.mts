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
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta.mjs';
import {
    ThreadId,
    _decode_ThreadId,
    _encode_ThreadId,
} from '../CSModule/ThreadId.ta.mjs';
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
/**
 * @summary ExecutionResultInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExecutionResultInfo ::= SEQUENCE {
 *   triggerId            TriggerId,
 *   scriptId             ScriptId,
 *   threadId             ThreadId,
 *   errorCode            ErrorCode,
 *   executionResultType  ExecutionResultType,
 *   executionResult      SET OF Attribute
 * }
 * ```
 *
 * @class
 */
export class ExecutionResultInfo {
    constructor(
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerId,
        /**
         * @summary `scriptId`.
         * @public
         * @readonly
         */
        readonly scriptId: ScriptId,
        /**
         * @summary `threadId`.
         * @public
         * @readonly
         */
        readonly threadId: ThreadId,
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
     * @summary Restructures an object into a ExecutionResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `ExecutionResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecutionResultInfo`.
     * @returns {ExecutionResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ExecutionResultInfo]: ExecutionResultInfo[_K] }
    ): ExecutionResultInfo {
        return new ExecutionResultInfo(
            _o.triggerId,
            _o.scriptId,
            _o.threadId,
            _o.errorCode,
            _o.executionResultType,
            _o.executionResult
        );
    }
}

/**
 * @summary The Leading Root Component Types of ExecutionResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExecutionResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec('triggerId', false, $.hasAnyTag),
    new $.ComponentSpec('scriptId', false, $.hasAnyTag),
    new $.ComponentSpec('threadId', false, $.hasAnyTag),
    new $.ComponentSpec(
        'errorCode',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'executionResultType',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'executionResult',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of ExecutionResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExecutionResultInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ExecutionResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExecutionResultInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ExecutionResultInfo: $.ASN1Decoder<ExecutionResultInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecutionResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExecutionResultInfo} The decoded data structure.
 */
export function _decode_ExecutionResultInfo(el: _Element) {
    if (!_cached_decoder_for_ExecutionResultInfo) {
        _cached_decoder_for_ExecutionResultInfo = function (
            el: _Element
        ): ExecutionResultInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 6) {
                throw new _ConstructionError(
                    'ExecutionResultInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'triggerId';
            sequence[1].name = 'scriptId';
            sequence[2].name = 'threadId';
            sequence[3].name = 'errorCode';
            sequence[4].name = 'executionResultType';
            sequence[5].name = 'executionResult';
            let triggerId!: TriggerId;
            let scriptId!: ScriptId;
            let threadId!: ThreadId;
            let errorCode!: ErrorCode;
            let executionResultType!: ExecutionResultType;
            let executionResult!: Attribute[];
            triggerId = _decode_TriggerId(sequence[0]);
            scriptId = _decode_ScriptId(sequence[1]);
            threadId = _decode_ThreadId(sequence[2]);
            errorCode = _decode_ErrorCode(sequence[3]);
            executionResultType = _decode_ExecutionResultType(sequence[4]);
            executionResult = $._decodeSetOf<Attribute>(
                () => _decode_Attribute
            )(sequence[5]);
            return new ExecutionResultInfo(
                triggerId,
                scriptId,
                threadId,
                errorCode,
                executionResultType,
                executionResult
            );
        };
    }
    return _cached_decoder_for_ExecutionResultInfo(el);
}

let _cached_encoder_for_ExecutionResultInfo: $.ASN1Encoder<ExecutionResultInfo> | null = null;

/**
 * @summary Encodes a(n) ExecutionResultInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecutionResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_ExecutionResultInfo(
    value: ExecutionResultInfo,
    elGetter: $.ASN1Encoder<ExecutionResultInfo>
) {
    if (!_cached_encoder_for_ExecutionResultInfo) {
        _cached_encoder_for_ExecutionResultInfo = function (
            value: ExecutionResultInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TriggerId(
                            value.triggerId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ScriptId(
                            value.scriptId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_ThreadId(
                            value.threadId,
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
    return _cached_encoder_for_ExecutionResultInfo(value, elGetter);
}


/* eslint-enable */
