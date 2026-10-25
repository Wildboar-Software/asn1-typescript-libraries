/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
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
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCParticipantPresence record when the IRI-POI present in the PTC server
 * (when it supports the Presence functionality and assumes the role of the
 * Watcher on behalf of the PTC target) detects that the PTC server receives
 * presence status notifications from the Presence servers after having
 * subscribed to the PTC presence status of other PTC participants (i.e.
 * participants in communication with the PTC target). Accordingly, the IRI-POI
 * in the PTC server generates the xIRI when the following event is detected:
 *
 * - when the PTC server receives a SIP NOTIFY in response to a SIP SUBSCRIBE
 *   updating presence information for a participant.
 *
 * NOTE: The pTCTargetInformation choice PTCChatGroupID is not applicable for
 * this xIRI.
 *
 * 3GPP TS 33.128, clause 7.5.2.16.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN shall be provided for PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.16.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCParticipantPresenceStatus`.
     * @description
     *
     * Shall provide the Participant Presence Status, which is a list of:
     *
     * - PresenceID: Identity of PTC client(s) or PTC group, when known.
     *
     * - PresenceType: Identifies type of ID [PTC client(s) or PTC group].
     *
     * - PresenceStatus: Presence state of each ID. True indicates PTC client is
     *   available, while false indicates PTC client is unavailable. Report when
     *   the Presence functionality is supported by the PTC server and the PTC
     *   server assumes the role of the watcher on behalf of the PTC target.
     *
     * 3GPP TS 33.128, clause 7.5.2.16.
     *
     * @public
     * @readonly
     */
    readonly pTCParticipantPresenceStatus: PTCParticipantPresenceStatus;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCParticipantPresenceStatus: PTCParticipantPresenceStatus,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCParticipantPresenceStatus = pTCParticipantPresenceStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new PTCParticipantPresence(_o.pTCTargetInformation, _o.pTCParticipantPresenceStatus, _o._unrecognizedExtensionsList);
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
        sequence.slice(2),
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCParticipantPresenceStatus, $.BER)(value.pTCParticipantPresenceStatus, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCParticipantPresence(value, elGetter);
}


/* eslint-enable */
