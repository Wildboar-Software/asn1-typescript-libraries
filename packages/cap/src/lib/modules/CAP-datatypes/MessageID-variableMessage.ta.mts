import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type VariablePart, _decode_VariablePart, _encode_VariablePart } from "./VariablePart.ta.mjs";

/**
 * @summary MessageID_variableMessage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  elementaryMessageID			[0] Integer4,
 *  variableParts			[1] SEQUENCE SIZE (1..5) OF VariablePart {bound}
 *  }
 * ```
 *
 */
export class MessageID_variableMessage {
    constructor (
        readonly elementaryMessageID: INTEGER,
        readonly variableParts: VariablePart[],
    ) {
        if (variableParts.length < 1 || variableParts.length > 5) {
            throw new ASN1SizeError("MessageID_variableMessage.variableParts violates SIZE constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (MessageID_variableMessage)]: (MessageID_variableMessage)[_K] }): MessageID_variableMessage {
        return new MessageID_variableMessage(_o.elementaryMessageID, _o.variableParts);
    }
}

export const _root_component_type_list_1_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("elementaryMessageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("variableParts", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_MessageID_variableMessage: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageID_variableMessage: $.ASN1Decoder<MessageID_variableMessage> | null = null;
export function _decode_MessageID_variableMessage (el: _Element): MessageID_variableMessage {
    if (!_cached_decoder_for_MessageID_variableMessage) {
        _cached_decoder_for_MessageID_variableMessage = function (el: _Element): MessageID_variableMessage {
    let elementaryMessageID!: INTEGER;
    let variableParts!: VariablePart[];
    const callbacks: $.DecodingMap = {
        "elementaryMessageID": (_el: _Element): void => { elementaryMessageID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "variableParts": (_el: _Element): void => { variableParts = $._decode_implicit<VariablePart[]>(() => $._decodeSequenceOf<VariablePart>(() => _decode_VariablePart))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageID_variableMessage,
        _extension_additions_list_spec_for_MessageID_variableMessage,
        _root_component_type_list_2_spec_for_MessageID_variableMessage,
        undefined,
    );
    return new MessageID_variableMessage(
        elementaryMessageID,
        variableParts
    );
        };
    }
    return _cached_decoder_for_MessageID_variableMessage(el);
}

let _cached_encoder_for_MessageID_variableMessage: $.ASN1Encoder<MessageID_variableMessage> | null = null;
export function _encode_MessageID_variableMessage (value: MessageID_variableMessage, elGetter: $.ASN1Encoder<MessageID_variableMessage>): _Element {
    if (!_cached_encoder_for_MessageID_variableMessage) {
        _cached_encoder_for_MessageID_variableMessage = function (value: MessageID_variableMessage): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.elementaryMessageID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<VariablePart>(() => _encode_VariablePart, $.BER), $.BER)(value.variableParts, $.BER)
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_MessageID_variableMessage(value, elGetter);
}
