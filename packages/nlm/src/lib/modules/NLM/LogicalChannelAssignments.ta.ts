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
import {
    LogicalChannelRange,
    _decode_LogicalChannelRange,
    _encode_LogicalChannelRange,
} from '../NLM/LogicalChannelRange.ta';
export {
    LogicalChannelRange,
    _decode_LogicalChannelRange,
    _encode_LogicalChannelRange,
} from '../NLM/LogicalChannelRange.ta';

/* START_OF_SYMBOL_DEFINITION LogicalChannelAssignments */
/**
 * @summary LogicalChannelAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalChannelAssignments ::= SEQUENCE {
 *   pVC       [0]  SET OF LogicalChannelId,
 *   incoming  [1]  LogicalChannelRange OPTIONAL,
 *   twoWay    [2]  LogicalChannelRange OPTIONAL,
 *   outgoing  [3]  LogicalChannelRange OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class LogicalChannelAssignments {
    constructor(
        /**
         * @summary `pVC`.
         * @public
         * @readonly
         */
        readonly pVC: LogicalChannelId[],
        /**
         * @summary `incoming`.
         * @public
         * @readonly
         */
        readonly incoming: OPTIONAL<LogicalChannelRange>,
        /**
         * @summary `twoWay`.
         * @public
         * @readonly
         */
        readonly twoWay: OPTIONAL<LogicalChannelRange>,
        /**
         * @summary `outgoing`.
         * @public
         * @readonly
         */
        readonly outgoing: OPTIONAL<LogicalChannelRange>
    ) {}

    /**
     * @summary Restructures an object into a LogicalChannelAssignments
     * @description
     *
     * This takes an `object` and converts it to a `LogicalChannelAssignments`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogicalChannelAssignments`.
     * @returns {LogicalChannelAssignments}
     */
    public static _from_object(
        _o: {
            [_K in keyof LogicalChannelAssignments]: LogicalChannelAssignments[_K];
        }
    ): LogicalChannelAssignments {
        return new LogicalChannelAssignments(
            _o.pVC,
            _o.incoming,
            _o.twoWay,
            _o.outgoing
        );
    }
}
/* END_OF_SYMBOL_DEFINITION LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalChannelAssignments */
/**
 * @summary The Leading Root Component Types of LogicalChannelAssignments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LogicalChannelAssignments: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pVC',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'incoming',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'twoWay',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'outgoing',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalChannelAssignments */
/**
 * @summary The Trailing Root Component Types of LogicalChannelAssignments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LogicalChannelAssignments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalChannelAssignments */
/**
 * @summary The Extension Addition Component Types of LogicalChannelAssignments
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LogicalChannelAssignments: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelAssignments */
let _cached_decoder_for_LogicalChannelAssignments: $.ASN1Decoder<LogicalChannelAssignments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _decode_LogicalChannelAssignments */
/**
 * @summary Decodes an ASN.1 element into a(n) LogicalChannelAssignments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogicalChannelAssignments} The decoded data structure.
 */
export function _decode_LogicalChannelAssignments(el: _Element) {
    if (!_cached_decoder_for_LogicalChannelAssignments) {
        _cached_decoder_for_LogicalChannelAssignments = function (
            el: _Element
        ): LogicalChannelAssignments {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pVC!: LogicalChannelId[];
            let incoming: OPTIONAL<LogicalChannelRange>;
            let twoWay: OPTIONAL<LogicalChannelRange>;
            let outgoing: OPTIONAL<LogicalChannelRange>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pVC: (_el: _Element): void => {
                    pVC = $._decode_implicit<LogicalChannelId[]>(() =>
                        $._decodeSetOf<LogicalChannelId>(
                            () => _decode_LogicalChannelId
                        )
                    )(_el);
                },
                incoming: (_el: _Element): void => {
                    incoming = $._decode_implicit<LogicalChannelRange>(
                        () => _decode_LogicalChannelRange
                    )(_el);
                },
                twoWay: (_el: _Element): void => {
                    twoWay = $._decode_implicit<LogicalChannelRange>(
                        () => _decode_LogicalChannelRange
                    )(_el);
                },
                outgoing: (_el: _Element): void => {
                    outgoing = $._decode_implicit<LogicalChannelRange>(
                        () => _decode_LogicalChannelRange
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LogicalChannelAssignments,
                _extension_additions_list_spec_for_LogicalChannelAssignments,
                _root_component_type_list_2_spec_for_LogicalChannelAssignments,
                undefined
            );
            return new LogicalChannelAssignments /* SEQUENCE_CONSTRUCTOR_CALL */(
                pVC,
                incoming,
                twoWay,
                outgoing
            );
        };
    }
    return _cached_decoder_for_LogicalChannelAssignments(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelAssignments */
let _cached_encoder_for_LogicalChannelAssignments: $.ASN1Encoder<LogicalChannelAssignments> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogicalChannelAssignments */

/* START_OF_SYMBOL_DEFINITION _encode_LogicalChannelAssignments */
/**
 * @summary Encodes a(n) LogicalChannelAssignments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalChannelAssignments, encoded as an ASN.1 Element.
 */
export function _encode_LogicalChannelAssignments(
    value: LogicalChannelAssignments,
    elGetter: $.ASN1Encoder<LogicalChannelAssignments>
) {
    if (!_cached_encoder_for_LogicalChannelAssignments) {
        _cached_encoder_for_LogicalChannelAssignments = function (
            value: LogicalChannelAssignments,
            elGetter: $.ASN1Encoder<LogicalChannelAssignments>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () =>
                                $._encodeSetOf<LogicalChannelId>(
                                    () => _encode_LogicalChannelId,
                                    $.BER
                                ),
                            $.BER
                        )(value.pVC, $.BER),
                        /* IF_ABSENT  */ value.incoming === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_LogicalChannelRange,
                                  $.BER
                              )(value.incoming, $.BER),
                        /* IF_ABSENT  */ value.twoWay === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_LogicalChannelRange,
                                  $.BER
                              )(value.twoWay, $.BER),
                        /* IF_ABSENT  */ value.outgoing === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_LogicalChannelRange,
                                  $.BER
                              )(value.outgoing, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LogicalChannelAssignments(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogicalChannelAssignments */

/* eslint-enable */
