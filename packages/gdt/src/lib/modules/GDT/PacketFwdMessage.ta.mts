/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PayloadType, _decode_PayloadType, _encode_PayloadType } from "../GDT/PayloadType.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary PacketFwdMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketFwdMessage ::= SEQUENCE {
 *     payload-type    PayloadType,
 *     payload         OCTET STRING OPTIONAL,
 *     params          Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PacketFwdMessage {
    constructor (
        /**
         * @summary `payload_type`.
         * @public
         * @readonly
         */
        readonly payload_type: PayloadType,
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PacketFwdMessage
     * @description
     * 
     * This takes an `object` and converts it to a `PacketFwdMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PacketFwdMessage`.
     * @returns {PacketFwdMessage}
     */
    public static _from_object (_o: { [_K in keyof (PacketFwdMessage)]: (PacketFwdMessage)[_K] }): PacketFwdMessage {
        return new PacketFwdMessage(_o.payload_type, _o.payload, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("payload-type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("payload", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PacketFwdMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PacketFwdMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PacketFwdMessage: $.ASN1Decoder<PacketFwdMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketFwdMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketFwdMessage (el: _Element): PacketFwdMessage {
    if (!_cached_decoder_for_PacketFwdMessage) { _cached_decoder_for_PacketFwdMessage = function (el: _Element): PacketFwdMessage {
    let payload_type!: PayloadType;
    let payload: OPTIONAL<OCTET_STRING>;
    let params: OPTIONAL<Parameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "payload-type": (_el: _Element): void => { payload_type = _decode_PayloadType(_el); },
        "payload": (_el: _Element): void => { payload = $._decodeOctetString(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PacketFwdMessage,
        _extension_additions_list_spec_for_PacketFwdMessage,
        _root_component_type_list_2_spec_for_PacketFwdMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PacketFwdMessage(
        payload_type,
        payload,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PacketFwdMessage(el);
}

let _cached_encoder_for_PacketFwdMessage: $.ASN1Encoder<PacketFwdMessage> | null = null;

/**
 * @summary Encodes a(n) PacketFwdMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketFwdMessage, encoded as an ASN.1 Element.
 */
export
function _encode_PacketFwdMessage (value: PacketFwdMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketFwdMessage) { _cached_encoder_for_PacketFwdMessage = function (value: PacketFwdMessage): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PayloadType(value.payload_type, $.BER),
            /* IF_ABSENT  */ ((value.payload === undefined) ? undefined : $._encodeOctetString(value.payload, $.BER)),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PacketFwdMessage(value, elGetter);
}


/* eslint-enable */
