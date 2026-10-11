/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AuthenticationHeader, _decode_AuthenticationHeader, _encode_AuthenticationHeader } from "../MEDIA-GATEWAY-CONTROL/AuthenticationHeader.ta.mjs";
import { Message, _decode_Message, _encode_Message } from "../MEDIA-GATEWAY-CONTROL/Message.ta.mjs";


/**
 * @summary MegacoMessage
 * @description
 * 
 * Top-level PDU. An optional interim authentication header followed by one
 * `Message`.
 *
 * The interim header is the application-level stand-in for IPsec AH when the
 * stack cannot insert AH itself. It is not used when the network layer already
 * provides IPsec, and IPv6 implementations do not use it. It does not protect
 * against eavesdropping or replay (ITU-T Rec. H.248.1 (03/2013) clauses 8.3 and
 * 10.2, Annex A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MegacoMessage ::= SEQUENCE
 *     {
 *         authHeader        [0] AuthenticationHeader OPTIONAL,
 *         mess            [1] Message
 *     }
 * ```
 * 
 * @class
 */
export
class MegacoMessage {
    constructor (
        /**
         * @summary `authHeader`.
         * @description
         *
         * Interim AH header: security parameters index, sequence number, and
         * authentication data, with the same field meanings as the transport
         * mode of IETF RFC 2402. The integrity check covers the concatenated
         * transactions prefixed by a synthesized header of source address,
         * destination address, and destination port (ITU-T Rec. H.248.1
         * (03/2013) clause 10.2).
         *
         * @public
         * @readonly
         */
        readonly authHeader: OPTIONAL<AuthenticationHeader>,
        /**
         * @summary `mess`.
         * @description
         *
         * Protocol message: version, sender identity, and either a
         * message-level error or one or more independent transactions (ITU-T
         * Rec. H.248.1 (03/2013) clause 8.3).
         *
         * @public
         * @readonly
         */
        readonly mess: Message
    ) {}

    /**
     * @summary Restructures an object into a MegacoMessage
     * @description
     * 
     * This takes an `object` and converts it to a `MegacoMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MegacoMessage`.
     * @returns {MegacoMessage}
     */
    public static _from_object (_o: { [_K in keyof (MegacoMessage)]: (MegacoMessage)[_K] }): MegacoMessage {
        return new MegacoMessage(_o.authHeader, _o.mess);
    }


}

/**
 * @summary The Leading Root Component Types of MegacoMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MegacoMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("authHeader", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mess", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MegacoMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MegacoMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MegacoMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MegacoMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MegacoMessage: $.ASN1Decoder<MegacoMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MegacoMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MegacoMessage (el: _Element): MegacoMessage {
    if (!_cached_decoder_for_MegacoMessage) { _cached_decoder_for_MegacoMessage = function (el: _Element): MegacoMessage {
    let authHeader: OPTIONAL<AuthenticationHeader>;
    let mess!: Message;
    const callbacks: $.DecodingMap = {
        "authHeader": (_el: _Element): void => { authHeader = $._decode_implicit<AuthenticationHeader>(() => _decode_AuthenticationHeader)(_el); },
        "mess": (_el: _Element): void => { mess = $._decode_implicit<Message>(() => _decode_Message)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MegacoMessage,
        _extension_additions_list_spec_for_MegacoMessage,
        _root_component_type_list_2_spec_for_MegacoMessage,
        undefined,
    );
    return new MegacoMessage(
        authHeader,
        mess
    );
}; }
    return _cached_decoder_for_MegacoMessage(el);
}

let _cached_encoder_for_MegacoMessage: $.ASN1Encoder<MegacoMessage> | null = null;

/**
 * @summary Encodes a(n) MegacoMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MegacoMessage, encoded as an ASN.1 Element.
 */
export
function _encode_MegacoMessage (value: MegacoMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MegacoMessage) { _cached_encoder_for_MegacoMessage = function (value: MegacoMessage, elGetter: $.ASN1Encoder<MegacoMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.authHeader === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AuthenticationHeader, $.BER)(value.authHeader, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Message, $.BER)(value.mess, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MegacoMessage(value, elGetter);
}


/* eslint-enable */
