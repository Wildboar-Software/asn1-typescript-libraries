/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";
// export { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";
import { Target_Information, _decode_Target_Information, _encode_Target_Information } from "../ThreeGPP-HI1NotificationOperations/Target-Information.ta.mjs";
// export { Target_Information, _decode_Target_Information, _encode_Target_Information } from "../ThreeGPP-HI1NotificationOperations/Target-Information.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { type BroadcastStatus, _decode_BroadcastStatus, _encode_BroadcastStatus, _enum_for_BroadcastStatus } from "../ThreeGPP-HI1NotificationOperations/BroadcastStatus.ta.mjs";
// export { BroadcastStatus, _enum_for_BroadcastStatus, BroadcastStatus_succesfull /* IMPORTED_LONG_ENUMERATION_ITEM */, succesfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, BroadcastStatus_unsuccesfull /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccesfull /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BroadcastStatus, _encode_BroadcastStatus } from "../ThreeGPP-HI1NotificationOperations/BroadcastStatus.ta.mjs";


/**
 * @summary Notification
 * @description
 * 
 * Activation, deactivation, or modification notification. Informative annex M:
 * report the warrant elements, except that flows containing target identities
 * may have to be limited, and manual entry by accredited operator staff is
 * recommended. Individual parameters are sent with BER. The annex is
 * informative. 3GPP TS 33.108, annex M.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification ::= SEQUENCE
 * {
 *     domainID                        [0] OBJECT IDENTIFIER OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     lawfulInterceptionIdentifier    [1] LawfulInterceptionIdentifier,
 *     -- This identifier is the LIID identity provided with the lawful authorization for each
 *     -- target.
 *     communicationIdentifier            [2] CommunicationIdentifier OPTIONAL,
 *         -- Only the NO/AP/SP Identifier is provided (the one provided with the Lawful
 *         -- authorization) in CS domain.        
 *     timeStamp                        [3] TimeStamp,
 *     -- date and time of the report.
 *     threeGPP-National-HI1-ASN1parameters        [5] ThreeGPP-National-HI1-ASN1parameters OPTIONAL,
 *     target-Information                [6] Target-Information OPTIONAL,
 *     network-Identifier                [7] Network-Identifier OPTIONAL,
 *         -- Same definition of annexes B3, B8, B9, B.11.1. It is recommended to use the same value
 *         -- than those decided by the CSP and the LEA as the NWO/PA/SvPIdentifier of
 *         -- communicationIdentifier used in CS domain.
 *     broadcastStatus                    [8] BroadcastStatus OPTIONAL,
 * ...}
 * ```
 * 
 * @class
 */
export
class Notification {
    /**
     * @summary `domainID`.
     * @description
     * 
     * Object identifier, included when FTP delivery is used. Informative annex
     * M says the HI1 IRI may include the OID. Which OID is placed here is not
     * stated. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID supplied with the lawful authorization for the target. Informative
     * annex M: the LIID may be provided by the LEA or, by default, by the CSP.
     * The annex recommends limiting any flow that includes target identities.
     * 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `communicationIdentifier`.
     * @description
     * 
     * Only the operator / access-provider / service-provider identifier from
     * the lawful authorization, in the CS domain. The communication identity
     * number is not described for this notification. 3GPP TS 33.108, annex M
     * (informative) and the accompanying schema.
     * 
     * @public
     * @readonly
     */
    readonly communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the report. 3GPP TS 33.108, annex M (informative) and
     * the accompanying schema.
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `threeGPP_National_HI1_ASN1parameters`.
     * @description
     * 
     * National HI1 parameters, if national regulation requests them. The layout
     * after the country code is national and is not defined here. 3GPP TS
     * 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly threeGPP_National_HI1_ASN1parameters: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>;
    /**
     * @summary `target_Information`.
     * @description
     * 
     * Warrant details other than a direct statement of the target identity:
     * broadcast area, delivery addresses, interception type, and the
     * activation, deactivation, modification, and setup times. Target identity
     * type may be included; the informative annex still says target identities
     * should be limited. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly target_Information: OPTIONAL<Target_Information>;
    /**
     * @summary `network_Identifier`.
     * @description
     * 
     * Operator, or the part of the operator's network, that sends the IRI. The
     * value may be set by national regulation. Same notion as the network
     * identifier in annexes B.3, B.8, B.9, and B.11.1. Recommended to reuse the
     * operator identifier used as the CS-domain communication identifier. 3GPP
     * TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly network_Identifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `broadcastStatus`.
     * @description
     * 
     * Outcome of a broadcast command. Informative annex M lists a
     * broadcast-status system as for further study. The schema comments
     * illustrate a successful and an unsuccessful case; those comments are not
     * requirements of a normative procedure. 3GPP TS 33.108, annex M
     * (informative).
     * 
     * @public
     * @readonly
     */
    readonly broadcastStatus: OPTIONAL<BroadcastStatus>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        timeStamp: TimeStamp,
        threeGPP_National_HI1_ASN1parameters?: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>,
        target_Information?: OPTIONAL<Target_Information>,
        network_Identifier?: OPTIONAL<Network_Identifier>,
        broadcastStatus?: OPTIONAL<BroadcastStatus>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.threeGPP_National_HI1_ASN1parameters = threeGPP_National_HI1_ASN1parameters;
        this.target_Information = target_Information;
        this.network_Identifier = network_Identifier;
        this.broadcastStatus = broadcastStatus;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Notification
     * @description
     * 
     * This takes an `object` and converts it to a `Notification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Notification`.
     * @returns {Notification}
     */
    public static _from_object (_o: { [_K in keyof (Notification)]: (Notification)[_K] }): Notification {
        return new Notification(_o.domainID, _o.lawfulInterceptionIdentifier, _o.communicationIdentifier, _o.timeStamp, _o.threeGPP_National_HI1_ASN1parameters, _o.target_Information, _o.network_Identifier, _o.broadcastStatus, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `broadcastStatus`
         * @public
         * @static
         */

    public static _enum_for_broadcastStatus: typeof _enum_for_BroadcastStatus = _enum_for_BroadcastStatus;
}

/**
 * @summary The Leading Root Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Notification: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("communicationIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("threeGPP-National-HI1-ASN1parameters", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("target-Information", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("network-Identifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("broadcastStatus", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Notification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Notification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Notification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Notification: $.ASN1Decoder<Notification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Notification (el: _Element): Notification {
    if (!_cached_decoder_for_Notification) { _cached_decoder_for_Notification = function (el: _Element): Notification {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    let timeStamp!: TimeStamp;
    let threeGPP_National_HI1_ASN1parameters: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>;
    let target_Information: OPTIONAL<Target_Information>;
    let network_Identifier: OPTIONAL<Network_Identifier>;
    let broadcastStatus: OPTIONAL<BroadcastStatus>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => { domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "threeGPP-National-HI1-ASN1parameters": (_el: _Element): void => { threeGPP_National_HI1_ASN1parameters = $._decode_implicit<ThreeGPP_National_HI1_ASN1parameters>(() => _decode_ThreeGPP_National_HI1_ASN1parameters)(_el); },
        "target-Information": (_el: _Element): void => { target_Information = $._decode_implicit<Target_Information>(() => _decode_Target_Information)(_el); },
        "network-Identifier": (_el: _Element): void => { network_Identifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "broadcastStatus": (_el: _Element): void => { broadcastStatus = $._decode_implicit<BroadcastStatus>(() => _decode_BroadcastStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Notification,
        _extension_additions_list_spec_for_Notification,
        _root_component_type_list_2_spec_for_Notification,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Notification(
        domainID,
        lawfulInterceptionIdentifier,
        communicationIdentifier,
        timeStamp,
        threeGPP_National_HI1_ASN1parameters,
        target_Information,
        network_Identifier,
        broadcastStatus,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Notification(el);
}

let _cached_encoder_for_Notification: $.ASN1Encoder<Notification> | null = null;

/**
 * @summary Encodes a(n) Notification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notification, encoded as an ASN.1 Element.
 */
export
function _encode_Notification (value: Notification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Notification) { _cached_encoder_for_Notification = function (value: Notification, elGetter: $.ASN1Encoder<Notification>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    if (value.communicationIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.threeGPP_National_HI1_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ThreeGPP_National_HI1_ASN1parameters, $.BER)(value.threeGPP_National_HI1_ASN1parameters, $.BER);
    }
    if (value.target_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Target_Information, $.BER)(value.target_Information, $.BER);
    }
    if (value.network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Network_Identifier, $.BER)(value.network_Identifier, $.BER);
    }
    if (value.broadcastStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_BroadcastStatus, $.BER)(value.broadcastStatus, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */
