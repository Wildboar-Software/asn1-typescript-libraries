/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    TriggerId,
    _decode_TriggerId,
    _encode_TriggerId,
} from '../CSModule/TriggerId.ta.mjs';
export {
    TriggerId,
    _decode_TriggerId,
    _encode_TriggerId,
} from '../CSModule/TriggerId.ta.mjs';
import {
    TriggerResultInfo_resultType,
    _decode_TriggerResultInfo_resultType,
    _encode_TriggerResultInfo_resultType,
} from '../CSModule/TriggerResultInfo-resultType.ta.mjs';
export {
    TriggerResultInfo_resultType,
    _decode_TriggerResultInfo_resultType,
    _encode_TriggerResultInfo_resultType,
} from '../CSModule/TriggerResultInfo-resultType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TriggerResultInfo */
/**
 * @summary TriggerResultInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerResultInfo ::= SEQUENCE {
 *   triggerId   TriggerId,
 *   resultType
 *     CHOICE {singleTriggerResult      ResultInfoFromThread,
 *             sequentialTriggerResult  [1]  SEQUENCE OF ResultInfoFromThread,
 *             parallelTriggerResult    SET OF ResultInfoFromThread}
 * }
 * ```
 *
 * @class
 */
export class TriggerResultInfo {
    constructor(
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerId,
        /**
         * @summary `resultType`.
         * @public
         * @readonly
         */
        readonly resultType: TriggerResultInfo_resultType
    ) {}

    /**
     * @summary Restructures an object into a TriggerResultInfo
     * @description
     *
     * This takes an `object` and converts it to a `TriggerResultInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerResultInfo`.
     * @returns {TriggerResultInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TriggerResultInfo]: TriggerResultInfo[_K] }
    ): TriggerResultInfo {
        return new TriggerResultInfo(_o.triggerId, _o.resultType);
    }
}
/* END_OF_SYMBOL_DEFINITION TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TriggerResultInfo */
/**
 * @summary The Leading Root Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TriggerResultInfo: $.ComponentSpec[] = [
    new $.ComponentSpec('triggerId', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec('resultType', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TriggerResultInfo */
/**
 * @summary The Trailing Root Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TriggerResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TriggerResultInfo */
/**
 * @summary The Extension Addition Component Types of TriggerResultInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TriggerResultInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerResultInfo */
let _cached_decoder_for_TriggerResultInfo: $.ASN1Decoder<TriggerResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TriggerResultInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResultInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerResultInfo} The decoded data structure.
 */
export function _decode_TriggerResultInfo(el: _Element) {
    if (!_cached_decoder_for_TriggerResultInfo) {
        _cached_decoder_for_TriggerResultInfo = function (
            el: _Element
        ): TriggerResultInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TriggerResultInfo contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'triggerId';
            sequence[1].name = 'resultType';
            let triggerId!: TriggerId;
            let resultType!: TriggerResultInfo_resultType;
            triggerId = _decode_TriggerId(sequence[0]);
            resultType = _decode_TriggerResultInfo_resultType(sequence[1]);
            return new TriggerResultInfo(triggerId, resultType);
        };
    }
    return _cached_decoder_for_TriggerResultInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerResultInfo */
let _cached_encoder_for_TriggerResultInfo: $.ASN1Encoder<TriggerResultInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerResultInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TriggerResultInfo */
/**
 * @summary Encodes a(n) TriggerResultInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResultInfo, encoded as an ASN.1 Element.
 */
export function _encode_TriggerResultInfo(
    value: TriggerResultInfo,
    elGetter: $.ASN1Encoder<TriggerResultInfo>
) {
    if (!_cached_encoder_for_TriggerResultInfo) {
        _cached_encoder_for_TriggerResultInfo = function (
            value: TriggerResultInfo,
            elGetter: $.ASN1Encoder<TriggerResultInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TriggerId(
                            value.triggerId,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TriggerResultInfo_resultType(
                            value.resultType,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TriggerResultInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TriggerResultInfo */

/* eslint-enable */
