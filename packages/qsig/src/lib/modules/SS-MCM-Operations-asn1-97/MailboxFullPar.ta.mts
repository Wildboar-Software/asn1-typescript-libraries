/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageType, _decode_MessageType, _encode_MessageType, _enum_for_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";

/**
 * @summary MailboxFullPar
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailboxFullPar ::= SEQUENCE {
 *     messageType MessageType,
 *     capacityReached INTEGER (0..100) OPTIONAL
 *     -- percentage of storage capacity already used
 * }
 * ```
 * 
 * @class
 */
export
class MailboxFullPar {
    /**
     * @summary `messageType`.
     * @public
     * @readonly
     */
    readonly messageType: MessageType;
    /**
     * @summary `capacityReached`.
     * @public
     * @readonly
     */
    readonly capacityReached: OPTIONAL<INTEGER>;

    constructor (
        messageType: MessageType,
        capacityReached: OPTIONAL<INTEGER>
    ) {
        this.messageType = messageType;
        this.capacityReached = capacityReached;
    
        if (capacityReached !== undefined && (typeof capacityReached === "bigint" ? (capacityReached < 0n || capacityReached > 100n) : (capacityReached < 0 || capacityReached > 100))) {
            throw new ASN1OverflowError("MailboxFullPar.capacityReached violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a MailboxFullPar
     * @description
     * 
     * This takes an `object` and converts it to a `MailboxFullPar`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MailboxFullPar`.
     * @returns {MailboxFullPar}
     */
    public static _from_object (_o: { [_K in keyof (MailboxFullPar)]: (MailboxFullPar)[_K] }): MailboxFullPar {
        return new MailboxFullPar(_o.messageType, _o.capacityReached);
    }

        /**
         * @summary The enum used as the type of the component `messageType`
         * @public
         * @static
         */

    public static _enum_for_messageType = _enum_for_MessageType;
}

/**
 * @summary The Leading Root Component Types of MailboxFullPar
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MailboxFullPar: $.ComponentSpec[] = [
    new $.ComponentSpec("messageType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("capacityReached", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of MailboxFullPar
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MailboxFullPar: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MailboxFullPar
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MailboxFullPar: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MailboxFullPar: $.ASN1Decoder<MailboxFullPar> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MailboxFullPar
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MailboxFullPar (el: _Element): MailboxFullPar {
    if (!_cached_decoder_for_MailboxFullPar) { _cached_decoder_for_MailboxFullPar = function (el: _Element): MailboxFullPar {
    let messageType!: MessageType;
    let capacityReached: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "messageType": (_el: _Element): void => { messageType = _decode_MessageType(_el); },
        "capacityReached": (_el: _Element): void => { capacityReached = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MailboxFullPar,
        _extension_additions_list_spec_for_MailboxFullPar,
        _root_component_type_list_2_spec_for_MailboxFullPar,
        undefined,
    );
    return new MailboxFullPar(
        messageType,
        capacityReached
    );
}; }
    return _cached_decoder_for_MailboxFullPar(el);
}

let _cached_encoder_for_MailboxFullPar: $.ASN1Encoder<MailboxFullPar> | null = null;

/**
 * @summary Encodes a(n) MailboxFullPar into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MailboxFullPar, encoded as an ASN.1 Element.
 */
export
function _encode_MailboxFullPar (value: MailboxFullPar, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MailboxFullPar) { _cached_encoder_for_MailboxFullPar = function (value: MailboxFullPar, _elGetter: $.ASN1Encoder<MailboxFullPar>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_MessageType(value.messageType, $.BER));
    if (value.capacityReached !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeInteger(value.capacityReached, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MailboxFullPar(value, elGetter);
}

/* eslint-enable */
