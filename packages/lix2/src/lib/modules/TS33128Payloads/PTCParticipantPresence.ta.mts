/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";
// export { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";


/**
 * @summary PTCParticipantPresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCParticipantPresence ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCParticipantPresenceStatus  [2] PTCParticipantPresenceStatus
 * }
 * ```
 * 
 * @class
 */
export
class PTCParticipantPresence {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCParticipantPresenceStatus`.
         * @public
         * @readonly
         */
        readonly pTCParticipantPresenceStatus: PTCParticipantPresenceStatus
    ) {}

    /**
     * @summary Restructures an object into a PTCParticipantPresence
     * @description
     * 
     * This takes an `object` and converts it to a `PTCParticipantPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCParticipantPresence`.
     * @returns {PTCParticipantPresence}
     */
    public static _from_object (_o: { [_K in keyof (PTCParticipantPresence)]: (PTCParticipantPresence)[_K] }): PTCParticipantPresence {
        return new PTCParticipantPresence(_o.pTCTargetInformation, _o.pTCParticipantPresenceStatus);
    }


}

/**
 * @summary The Leading Root Component Types of PTCParticipantPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCParticipantPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCParticipantPresenceStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PTCParticipantPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCParticipantPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCParticipantPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCParticipantPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCParticipantPresence: $.ASN1Decoder<PTCParticipantPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCParticipantPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCParticipantPresence (el: _Element): PTCParticipantPresence {
    if (!_cached_decoder_for_PTCParticipantPresence) { _cached_decoder_for_PTCParticipantPresence = function (el: _Element): PTCParticipantPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PTCParticipantPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCParticipantPresenceStatus";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCParticipantPresenceStatus!: PTCParticipantPresenceStatus;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCParticipantPresenceStatus = $._decode_implicit<PTCParticipantPresenceStatus>(() => _decode_PTCParticipantPresenceStatus)(sequence[1]);
    return new PTCParticipantPresence(
        pTCTargetInformation,
        pTCParticipantPresenceStatus,

    );
}; }
    return _cached_decoder_for_PTCParticipantPresence(el);
}

let _cached_encoder_for_PTCParticipantPresence: $.ASN1Encoder<PTCParticipantPresence> | null = null;

/**
 * @summary Encodes a(n) PTCParticipantPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCParticipantPresence, encoded as an ASN.1 Element.
 */
export
function _encode_PTCParticipantPresence (value: PTCParticipantPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCParticipantPresence) { _cached_encoder_for_PTCParticipantPresence = function (value: PTCParticipantPresence, elGetter: $.ASN1Encoder<PTCParticipantPresence>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCParticipantPresenceStatus, $.BER)(value.pTCParticipantPresenceStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCParticipantPresence(value, elGetter);
}


/* eslint-enable */
