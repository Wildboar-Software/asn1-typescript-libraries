import {
    OPTIONAL,
    OCTET_STRING,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MessageID_text
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 messageContent			[0] IA5String (SIZE(
 bound.&minMessageContentLength .. bound.&maxMessageContentLength)),
 attributes				[1] OCTET STRING (SIZE(
 bound.&minAttributesLength .. bound.&maxAttributesLength))		OPTIONAL
 }
 * ```
 *
 */
export class MessageID_text {
    constructor (
        readonly messageContent: IA5String,
        readonly attributes: OPTIONAL<OCTET_STRING>,
    ) {}

    public static _from_object (_o: { [_K in keyof (MessageID_text)]: (MessageID_text)[_K] }): MessageID_text {
        return new MessageID_text(_o.messageContent, _o.attributes);
    }
}

export const _root_component_type_list_1_spec_for_MessageID_text: $.ComponentSpec[] = [
    new $.ComponentSpec("messageContent", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_MessageID_text: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_MessageID_text: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageID_text: $.ASN1Decoder<MessageID_text> | null = null;
export function _decode_MessageID_text (el: _Element): MessageID_text {
    if (!_cached_decoder_for_MessageID_text) {
        _cached_decoder_for_MessageID_text = function (el: _Element): MessageID_text {
    let messageContent!: IA5String;
    let attributes: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "messageContent": (_el: _Element): void => { messageContent = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageID_text,
        _extension_additions_list_spec_for_MessageID_text,
        _root_component_type_list_2_spec_for_MessageID_text,
        undefined,
    );
    return new MessageID_text(
        messageContent,
        attributes
    );
        };
    }
    return _cached_decoder_for_MessageID_text(el);
}

let _cached_encoder_for_MessageID_text: $.ASN1Encoder<MessageID_text> | null = null;
export function _encode_MessageID_text (value: MessageID_text, elGetter: $.ASN1Encoder<MessageID_text>): _Element {
    if (!_cached_encoder_for_MessageID_text) {
        _cached_encoder_for_MessageID_text = function (value: MessageID_text): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.messageContent, $.BER),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.attributes, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_MessageID_text(value, elGetter);
}
