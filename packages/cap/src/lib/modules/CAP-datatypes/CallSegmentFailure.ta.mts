import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "./CallSegmentID.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary CallSegmentFailure
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallSegmentFailure {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 callSegmentID			[0] CallSegmentID {bound}			OPTIONAL,
 cause				[2]	Cause {bound}				OPTIONAL,
 ...
 }
 * ```
 *
 */
export class CallSegmentFailure {
    constructor (
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        readonly cause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CallSegmentFailure)]: (CallSegmentFailure)[_K] }): CallSegmentFailure {
        return new CallSegmentFailure(_o.callSegmentID, _o.cause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_CallSegmentFailure: $.ComponentSpec[] = [
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_CallSegmentFailure: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CallSegmentFailure: $.ComponentSpec[] = [];

let _cached_decoder_for_CallSegmentFailure: $.ASN1Decoder<CallSegmentFailure> | null = null;
export function _decode_CallSegmentFailure (el: _Element): CallSegmentFailure {
    if (!_cached_decoder_for_CallSegmentFailure) {
        _cached_decoder_for_CallSegmentFailure = function (el: _Element): CallSegmentFailure {
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let cause: OPTIONAL<Cause>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "cause": (_el: _Element): void => { cause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallSegmentFailure,
        _extension_additions_list_spec_for_CallSegmentFailure,
        _root_component_type_list_2_spec_for_CallSegmentFailure,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallSegmentFailure(
        callSegmentID,
        cause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CallSegmentFailure(el);
}

let _cached_encoder_for_CallSegmentFailure: $.ASN1Encoder<CallSegmentFailure> | null = null;
export function _encode_CallSegmentFailure (value: CallSegmentFailure, elGetter: $.ASN1Encoder<CallSegmentFailure>): _Element {
    if (!_cached_encoder_for_CallSegmentFailure) {
        _cached_encoder_for_CallSegmentFailure = function (value: CallSegmentFailure, elGetter: $.ASN1Encoder<CallSegmentFailure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Cause, $.BER)(value.cause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CallSegmentFailure(value, elGetter);
}
