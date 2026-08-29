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
    PDUSequence,
    _decode_PDUSequence,
    _encode_PDUSequence,
} from '../TestCategories-ASN1Module/PDUSequence.ta.mjs';
import {
    PDUReception,
    _decode_PDUReception,
    _encode_PDUReception,
} from '../TestCategories-ASN1Module/PDUReception.ta.mjs';
import {
    WaitingInterval,
    _decode_WaitingInterval,
    _encode_WaitingInterval,
} from '../TestCategories-ASN1Module/WaitingInterval.ta.mjs';
import {
    StartTime,
    _decode_StartTime,
    _encode_StartTime,
} from '@wildboar/attribute-asn1module';
import {
    StopTime,
    _decode_StopTime,
    _encode_StopTime,
} from '@wildboar/attribute-asn1module';
/**
 * @summary ProtocolIntegrityTestInfo
 * @description
 *
 * Initiation info for a protocol integrity test: whether
 * the MORT can conduct proper protocol interactions with an AO
 * (no logging of exchanges; use a log of notifications for that).
 * Generally non-intrusive. The whole value is optional on the
 * request. Exactly one of `pDUReception` or `waitingInterval`
 * shall be present. ACTION-INFO (A.5.15). Uncontrolled requests
 * must also specify X.745 time-out. ITU-T Rec. X.737 (11/95)
 * [§7.5.1](https://www.itu.int/rec/T-REC-X.737-199511-I), §7.5.6, A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolIntegrityTestInfo ::= SEQUENCE { -- This ProtocolIntegrityTestInfo is optional.
 *   pDUSequence      [0]  PDUSequence,
 *   pDUReception     [1]  PDUReception OPTIONAL, -- one, and only one, of the pDUReception
 *   waitingInterval  [2]  WaitingInterval OPTIONAL, -- and the waitingInterval shall be present
 *   startTime        [3]  StartTime OPTIONAL,
 *   stopTime         [4]  StopTime OPTIONAL
 * }
 * ```
 *
 */
export class ProtocolIntegrityTestInfo {
    constructor(
        /**
         * @summary `pDUSequence`.
         * @description
         *
         * PDU to transmit (type, parameters, continuation). X.737 §7.5.6.
         * @public
         * @readonly
         */
        readonly pDUSequence: PDUSequence,
        /**
         * @summary `pDUReception`.
         * @description
         *
         * Expected response PDU and when to
         * proceed. Optional; mutually exclusive with `waitingInterval`.
         * X.737 §7.5.6, A.7 comment.
         * @public
         * @readonly
         */
        readonly pDUReception?: OPTIONAL<PDUReception>,
        /**
         * @summary `waitingInterval`.
         * @description
         *
         * Fixed wait after the last emitted
         * element before the next. Optional; mutually exclusive with
         * `pDUReception`. X.737 §8.1.25, §7.5.6.
         * @public
         * @readonly
         */
        readonly waitingInterval?: OPTIONAL<WaitingInterval>,
        /**
         * @summary `startTime`.
         * @description
         *
         * When the first protocol element is sent.
         * Optional. X.737 §7.5.2.
         * @public
         * @readonly
         */
        readonly startTime?: OPTIONAL<StartTime>,
        /**
         * @summary `stopTime`.
         * @description
         *
         * Optional stop time. Listed in Annex F; not detailed in §7.5.6.
         * @public
         * @readonly
         */
        readonly stopTime?: OPTIONAL<StopTime>
    ) {}

    /**
     * @summary Restructures an object into a ProtocolIntegrityTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ProtocolIntegrityTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtocolIntegrityTestInfo`.
     * @returns {ProtocolIntegrityTestInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof ProtocolIntegrityTestInfo]: ProtocolIntegrityTestInfo[_K];
        }
    ): ProtocolIntegrityTestInfo {
        return new ProtocolIntegrityTestInfo(
            _o.pDUSequence,
            _o.pDUReception,
            _o.waitingInterval,
            _o.startTime,
            _o.stopTime
        );
    }
}

/**
 * @summary The Leading Root Component Types of ProtocolIntegrityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtocolIntegrityTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'pDUSequence',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'pDUReception',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'waitingInterval',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'startTime',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'stopTime',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of ProtocolIntegrityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtocolIntegrityTestInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ProtocolIntegrityTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtocolIntegrityTestInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ProtocolIntegrityTestInfo: $.ASN1Decoder<ProtocolIntegrityTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolIntegrityTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolIntegrityTestInfo} The decoded data structure.
 */
export function _decode_ProtocolIntegrityTestInfo(el: _Element): ProtocolIntegrityTestInfo {
    if (!_cached_decoder_for_ProtocolIntegrityTestInfo) {
        _cached_decoder_for_ProtocolIntegrityTestInfo = function (
            el: _Element
        ): ProtocolIntegrityTestInfo {
            let pDUSequence!: PDUSequence;
            let pDUReception: OPTIONAL<PDUReception>;
            let waitingInterval: OPTIONAL<WaitingInterval>;
            let startTime: OPTIONAL<StartTime>;
            let stopTime: OPTIONAL<StopTime>;
            const callbacks: $.DecodingMap = {
                pDUSequence: (_el: _Element): void => {
                    pDUSequence = $._decode_implicit<PDUSequence>(
                        () => _decode_PDUSequence
                    )(_el);
                },
                pDUReception: (_el: _Element): void => {
                    pDUReception = $._decode_implicit<PDUReception>(
                        () => _decode_PDUReception
                    )(_el);
                },
                waitingInterval: (_el: _Element): void => {
                    waitingInterval = $._decode_explicit<WaitingInterval>(
                        () => _decode_WaitingInterval
                    )(_el);
                },
                startTime: (_el: _Element): void => {
                    startTime = $._decode_implicit<StartTime>(
                        () => _decode_StartTime
                    )(_el);
                },
                stopTime: (_el: _Element): void => {
                    stopTime = $._decode_explicit<StopTime>(
                        () => _decode_StopTime
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtocolIntegrityTestInfo,
                _extension_additions_list_spec_for_ProtocolIntegrityTestInfo,
                _root_component_type_list_2_spec_for_ProtocolIntegrityTestInfo,
                undefined
            );
            return new ProtocolIntegrityTestInfo (
                pDUSequence,
                pDUReception,
                waitingInterval,
                startTime,
                stopTime
            );
        };
    }
    return _cached_decoder_for_ProtocolIntegrityTestInfo(el);
}

let _cached_encoder_for_ProtocolIntegrityTestInfo: $.ASN1Encoder<ProtocolIntegrityTestInfo> | null = null;

/**
 * @summary Encodes a(n) ProtocolIntegrityTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolIntegrityTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolIntegrityTestInfo(
    value: ProtocolIntegrityTestInfo,
    elGetter: $.ASN1Encoder<ProtocolIntegrityTestInfo>
): _Element {
    if (!_cached_encoder_for_ProtocolIntegrityTestInfo) {
        _cached_encoder_for_ProtocolIntegrityTestInfo = function (
            value: ProtocolIntegrityTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_PDUSequence,
                            $.BER
                        )(value.pDUSequence, $.BER),
                        /* IF_ABSENT  */ value.pDUReception === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_PDUReception,
                                  $.BER
                              )(value.pDUReception, $.BER),
                        /* IF_ABSENT  */ value.waitingInterval === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_WaitingInterval,
                                  $.BER
                              )(value.waitingInterval, $.BER),
                        /* IF_ABSENT  */ value.startTime === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_StartTime,
                                  $.BER
                              )(value.startTime, $.BER),
                        /* IF_ABSENT  */ value.stopTime === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_StopTime,
                                  $.BER
                              )(value.stopTime, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ProtocolIntegrityTestInfo(value, elGetter);
}


/* eslint-enable */
