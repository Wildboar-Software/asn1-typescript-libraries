/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import { HandshakeType, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";



/**
 * @summary Handshake
 * @description
 *
 * One TLS-style handshake message: `type` selects a `HANDSHAKE` information
 * object and `value` is that object's `&Type`. TSM adds
 * `biometric-client-hello` and `biometric-server-hello` after the usual TLS
 * handshake types. ITU-T Rec. X.1084 (05/2008) §10.1.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Handshake ::= SEQUENCE {
 *     type    HANDSHAKE.&id({Handshakes}),
 *     value    HANDSHAKE.&Type({Handshakes}{@type})
 * }
 * ```
 * 
 * @class
 */
export
class Handshake {
    constructor (
        /**
         * @summary `type_`.
         * @description
         *
         * `HANDSHAKE.&id` from `{Handshakes}`. TLS types 0–20 plus TSM
         * biometric hellos 100 and 101 (Annex A).
         *
         * @public
         * @readonly
         */
        readonly type_: HandshakeType,
        /**
         * @summary `value`.
         * @description
         *
         * Open type `HANDSHAKE.&Type({Handshakes}{@type})`. Decode with the
         * information object selected by `type_`.
         *
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a Handshake
     * @description
     * 
     * This takes an `object` and converts it to a `Handshake`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Handshake`.
     * @returns {Handshake}
     */
    public static _from_object (_o: { [_K in keyof (Handshake)]: (Handshake)[_K] }): Handshake {
        return new Handshake(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of Handshake
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Handshake: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Handshake
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Handshake: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Handshake
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Handshake: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Handshake: $.ASN1Decoder<Handshake> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Handshake
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Handshake (el: _Element): Handshake {
    if (!_cached_decoder_for_Handshake) { _cached_decoder_for_Handshake = function (el: _Element): Handshake {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Handshake contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: HandshakeType;
    let value!: _Element;
    type_ = _decode_HandshakeType(sequence[0]);
    value = $._decodeAny(sequence[1]);
    return new Handshake(
        type_,
        value,

    );
}; }
    return _cached_decoder_for_Handshake(el);
}

let _cached_encoder_for_Handshake: $.ASN1Encoder<Handshake> | null = null;

/**
 * @summary Encodes a(n) Handshake into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Handshake, encoded as an ASN.1 Element.
 */
export
function _encode_Handshake (value: Handshake, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Handshake) { _cached_encoder_for_Handshake = function (value: Handshake): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_HandshakeType(value.type_, $.BER),
            /* REQUIRED   */ $._encodeAny(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Handshake(value, elGetter);
}


/* eslint-enable */
