/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Incoming, _decode_Incoming, _encode_Incoming } from "../AIN-Parameters/Incoming.ta.mjs";
// export { Incoming, _decode_Incoming, _encode_Incoming } from "../AIN-Parameters/Incoming.ta.mjs";
import { Outgoing, _decode_Outgoing, _encode_Outgoing } from "../AIN-Parameters/Outgoing.ta.mjs";
// export { Outgoing, _decode_Outgoing, _encode_Outgoing } from "../AIN-Parameters/Outgoing.ta.mjs";


/**
 * @summary MemorySlot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MemorySlot ::= SEQUENCE{
 *         incoming [1] IMPLICIT Incoming OPTIONAL,
 *         outgoing [2] IMPLICIT Outgoing OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class MemorySlot {
    constructor (
        /**
         * @summary `incoming`.
         * @public
         * @readonly
         */
        readonly incoming: OPTIONAL<Incoming>,
        /**
         * @summary `outgoing`.
         * @public
         * @readonly
         */
        readonly outgoing: OPTIONAL<Outgoing>
    ) {}

    /**
     * @summary Restructures an object into a MemorySlot
     * @description
     * 
     * This takes an `object` and converts it to a `MemorySlot`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MemorySlot`.
     * @returns {MemorySlot}
     */
    public static _from_object (_o: { [_K in keyof (MemorySlot)]: (MemorySlot)[_K] }): MemorySlot {
        return new MemorySlot(_o.incoming, _o.outgoing);
    }


}

/**
 * @summary The Leading Root Component Types of MemorySlot
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MemorySlot: $.ComponentSpec[] = [
    new $.ComponentSpec("incoming", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("outgoing", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MemorySlot
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MemorySlot: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MemorySlot
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MemorySlot: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MemorySlot: $.ASN1Decoder<MemorySlot> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MemorySlot
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MemorySlot (el: _Element): MemorySlot {
    if (!_cached_decoder_for_MemorySlot) { _cached_decoder_for_MemorySlot = function (el: _Element): MemorySlot {
    let incoming: OPTIONAL<Incoming>;
    let outgoing: OPTIONAL<Outgoing>;
    const callbacks: $.DecodingMap = {
        "incoming": (_el: _Element): void => { incoming = $._decode_implicit<Incoming>(() => _decode_Incoming)(_el); },
        "outgoing": (_el: _Element): void => { outgoing = $._decode_implicit<Outgoing>(() => _decode_Outgoing)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MemorySlot,
        _extension_additions_list_spec_for_MemorySlot,
        _root_component_type_list_2_spec_for_MemorySlot,
        undefined,
    );
    return new MemorySlot(
        incoming,
        outgoing
    );
}; }
    return _cached_decoder_for_MemorySlot(el);
}

let _cached_encoder_for_MemorySlot: $.ASN1Encoder<MemorySlot> | null = null;

/**
 * @summary Encodes a(n) MemorySlot into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MemorySlot, encoded as an ASN.1 Element.
 */
export
function _encode_MemorySlot (value: MemorySlot, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MemorySlot) { _cached_encoder_for_MemorySlot = function (value: MemorySlot, elGetter: $.ASN1Encoder<MemorySlot>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.incoming === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Incoming, $.BER)(value.incoming, $.BER)),
            /* IF_ABSENT  */ ((value.outgoing === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Outgoing, $.BER)(value.outgoing, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MemorySlot(value, elGetter);
}


/* eslint-enable */
