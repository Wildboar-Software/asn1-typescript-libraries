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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    LogicalChannelId,
    _decode_LogicalChannelId,
    _encode_LogicalChannelId,
} from '../NLM/LogicalChannelId.ta';
export {
    LogicalChannelId,
    _decode_LogicalChannelId,
    _encode_LogicalChannelId,
} from '../NLM/LogicalChannelId.ta';

/* START_OF_SYMBOL_DEFINITION LogicalChannelRange */
/**
 * @summary LogicalChannelRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalChannelRange ::= SEQUENCE {
 *   low   [1]  LogicalChannelId,
 *   high  [2]  LogicalChannelId
 * }
 * ```
 *
 * @class
 */
export class LogicalChannelRange {
    constructor(
        /**
         * @summary `low`.
         * @public
         * @readonly
         */
        readonly low: LogicalChannelId,
        /**
         * @summary `high`.
         * @public
         * @readonly
         */
        readonly high: LogicalChannelId
    ) {}

    /**
     * @summary Restructures an object into a LogicalChannelRange
     * @description
     *
     * This takes an `object` and converts it to a `LogicalChannelRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalChannelRange`.
     * @returns {LogicalChannelRange}
     */
    public static _from_object(
        _o: { [_K in keyof LogicalChannelRange]: LogicalChannelRange[_K] }
    ): LogicalChannelRange {
        return new LogicalChannelRange(_o.low, _o.high);
    }
}
/* END_OF_SYMBOL_DEFINITION LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalChannelRange */
/**
 * @summary The Leading Root Component Types of LogicalChannelRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LogicalChannelRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'low',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'high',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalChannelRange */
/**
 * @summary The Trailing Root Component Types of LogicalChannelRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LogicalChannelRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalChannelRange */
/**
 * @summary The Extension Addition Component Types of LogicalChannelRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LogicalChannelRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelRange */
let _cached_decoder_for_LogicalChannelRange: $.ASN1Decoder<LogicalChannelRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _decode_LogicalChannelRange */
/**
 * @summary Decodes an ASN.1 element into a(n) LogicalChannelRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogicalChannelRange} The decoded data structure.
 */
export function _decode_LogicalChannelRange(el: _Element) {
    if (!_cached_decoder_for_LogicalChannelRange) {
        _cached_decoder_for_LogicalChannelRange = function (
            el: _Element
        ): LogicalChannelRange {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LogicalChannelRange contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'low';
            sequence[1].name = 'high';
            let low!: LogicalChannelId;
            let high!: LogicalChannelId;
            low = $._decode_implicit<LogicalChannelId>(
                () => _decode_LogicalChannelId
            )(sequence[0]);
            high = $._decode_implicit<LogicalChannelId>(
                () => _decode_LogicalChannelId
            )(sequence[1]);
            return new LogicalChannelRange(low, high);
        };
    }
    return _cached_decoder_for_LogicalChannelRange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelRange */
let _cached_encoder_for_LogicalChannelRange: $.ASN1Encoder<LogicalChannelRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelRange */

/* START_OF_SYMBOL_DEFINITION _encode_LogicalChannelRange */
/**
 * @summary Encodes a(n) LogicalChannelRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalChannelRange, encoded as an ASN.1 Element.
 */
export function _encode_LogicalChannelRange(
    value: LogicalChannelRange,
    elGetter: $.ASN1Encoder<LogicalChannelRange>
) {
    if (!_cached_encoder_for_LogicalChannelRange) {
        _cached_encoder_for_LogicalChannelRange = function (
            value: LogicalChannelRange,
            elGetter: $.ASN1Encoder<LogicalChannelRange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_LogicalChannelId,
                            $.BER
                        )(value.low, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_LogicalChannelId,
                            $.BER
                        )(value.high, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LogicalChannelRange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogicalChannelRange */

/* eslint-enable */
