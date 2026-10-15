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
 * @summary PTCTargetPresence
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCTargetPresence record when the IRI-POI present in the PTC server detects
 * that the PTC server publishes network presence information to the Presence
 * server on behalf of the PTC target. Accordingly, the IRI-POI in the PTC
 * server generates the xIRI when the following event is detected:
 *
 * - when the PTC server sends a SIP PUBLISH message to the Presence server
 *   based on the PTC target’s PTC session involvement.
 *
 * NOTE: The pTCTargetInformation choice PTCChatGroupID is not applicable for
 * this xIRI.
 *
 * 3GPP TS 33.128, clause 7.5.2.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCTargetPresence ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCTargetPresenceStatus       [2] PTCParticipantPresenceStatus
 * }
 * ```
 * 
 * @class
 */
export
class PTCTargetPresence {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN shall be provided for PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.15.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCTargetPresenceStatus`.
     * @description
     *
     * Shall provide the PTC target presence status, which is a list of:
     *
     * - PresenceID: Identity of PTC client(s) or PTC group, when known.
     *
     * - PresenceType: Identifies type of ID [PTC client(s) or PTC group].
     *
     * - PresenceStatus: Presence state of each ID. True indicates PTC target is
     *   available, while false indicates PTC target is unavailable.
     *
     * 3GPP TS 33.128, clause 7.5.2.15.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetPresenceStatus: PTCParticipantPresenceStatus;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCTargetPresenceStatus: PTCParticipantPresenceStatus,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCTargetPresenceStatus = pTCTargetPresenceStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCTargetPresence
     * @description
     * 
     * This takes an `object` and converts it to a `PTCTargetPresence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCTargetPresence`.
     * @returns {PTCTargetPresence}
     */
    public static _from_object (_o: { [_K in keyof (PTCTargetPresence)]: (PTCTargetPresence)[_K] }): PTCTargetPresence {
        return new PTCTargetPresence(_o.pTCTargetInformation, _o.pTCTargetPresenceStatus, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCTargetPresenceStatus", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCTargetPresence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCTargetPresence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCTargetPresence: $.ASN1Decoder<PTCTargetPresence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCTargetPresence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCTargetPresence (el: _Element): PTCTargetPresence {
    if (!_cached_decoder_for_PTCTargetPresence) { _cached_decoder_for_PTCTargetPresence = function (el: _Element): PTCTargetPresence {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PTCTargetPresence contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCTargetPresenceStatus";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCTargetPresenceStatus!: PTCParticipantPresenceStatus;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCTargetPresenceStatus = $._decode_implicit<PTCParticipantPresenceStatus>(() => _decode_PTCParticipantPresenceStatus)(sequence[1]);
    return new PTCTargetPresence(
        pTCTargetInformation,
        pTCTargetPresenceStatus,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_PTCTargetPresence(el);
}

let _cached_encoder_for_PTCTargetPresence: $.ASN1Encoder<PTCTargetPresence> | null = null;

/**
 * @summary Encodes a(n) PTCTargetPresence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCTargetPresence, encoded as an ASN.1 Element.
 */
export
function _encode_PTCTargetPresence (value: PTCTargetPresence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCTargetPresence) { _cached_encoder_for_PTCTargetPresence = function (value: PTCTargetPresence, elGetter: $.ASN1Encoder<PTCTargetPresence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCParticipantPresenceStatus, $.BER)(value.pTCTargetPresenceStatus, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCTargetPresence(value, elGetter);
}


/* eslint-enable */
