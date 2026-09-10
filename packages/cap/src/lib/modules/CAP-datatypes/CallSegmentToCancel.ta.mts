import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvokeID, _decode_InvokeID, _encode_InvokeID } from "./InvokeID.ta.mjs";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "./CallSegmentID.ta.mjs";

/**
 * @summary CallSegmentToCancel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CallSegmentToCancel {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  invokeID				[0]	InvokeID				OPTIONAL,
 *  callSegmentID			[1]	CallSegmentID {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class CallSegmentToCancel {
    constructor (
        readonly invokeID: OPTIONAL<InvokeID>,
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (CallSegmentToCancel)]: (CallSegmentToCancel)[_K] }): CallSegmentToCancel {
        return new CallSegmentToCancel(_o.invokeID, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_CallSegmentToCancel: $.ComponentSpec[] = [
    new $.ComponentSpec("invokeID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_CallSegmentToCancel: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CallSegmentToCancel: $.ComponentSpec[] = [];

let _cached_decoder_for_CallSegmentToCancel: $.ASN1Decoder<CallSegmentToCancel> | null = null;
export function _decode_CallSegmentToCancel (el: _Element): CallSegmentToCancel {
    if (!_cached_decoder_for_CallSegmentToCancel) {
        _cached_decoder_for_CallSegmentToCancel = function (el: _Element): CallSegmentToCancel {
    let invokeID: OPTIONAL<InvokeID>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "invokeID": (_el: _Element): void => { invokeID = $._decode_implicit<InvokeID>(() => _decode_InvokeID)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallSegmentToCancel,
        _extension_additions_list_spec_for_CallSegmentToCancel,
        _root_component_type_list_2_spec_for_CallSegmentToCancel,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallSegmentToCancel(
        invokeID,
        callSegmentID,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_CallSegmentToCancel(el);
}

let _cached_encoder_for_CallSegmentToCancel: $.ASN1Encoder<CallSegmentToCancel> | null = null;
export function _encode_CallSegmentToCancel (value: CallSegmentToCancel, elGetter: $.ASN1Encoder<CallSegmentToCancel>): _Element {
    if (!_cached_encoder_for_CallSegmentToCancel) {
        _cached_encoder_for_CallSegmentToCancel = function (value: CallSegmentToCancel): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.invokeID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InvokeID, $.BER)(value.invokeID, $.BER)),
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CallSegmentToCancel(value, elGetter);
}
