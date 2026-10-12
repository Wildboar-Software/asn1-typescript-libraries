/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { IRI_Parameters_initiator, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator } from "../MBMSUmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
// export { IRI_Parameters_initiator, _enum_for_IRI_Parameters_initiator, IRI_Parameters_initiator_not_Available /* IMPORTED_LONG_ENUMERATION_ITEM */, not_Available /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_originating_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_network_initiated /* IMPORTED_LONG_ENUMERATION_ITEM */, network_initiated /* IMPORTED_SHORT_ENUMERATION_ITEM */, IRI_Parameters_initiator_off_online_action /* IMPORTED_LONG_ENUMERATION_ITEM */, off_online_action /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IRI_Parameters_initiator, _encode_IRI_Parameters_initiator } from "../MBMSUmtsHI2Operations/IRI-Parameters-initiator.ta.mjs";
import { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../MBMSUmtsHI2Operations/PartyInformation.ta.mjs";
// export { PartyInformation, _decode_PartyInformation, _encode_PartyInformation } from "../MBMSUmtsHI2Operations/PartyInformation.ta.mjs";
import { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
// export { National_Parameters, _decode_National_Parameters, _encode_National_Parameters } from "../HI2Operations/National-Parameters.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { MBMSEvent, _decode_MBMSEvent, _encode_MBMSEvent, _enum_for_MBMSEvent } from "../MBMSUmtsHI2Operations/MBMSEvent.ta.mjs";
// export { MBMSEvent, _enum_for_MBMSEvent, MBMSEvent_mBMSServiceJoining /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMSServiceJoining /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSEvent_mBMSServiceLeaving /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMSServiceLeaving /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSEvent_mBMSSubscriptionActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMSSubscriptionActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSEvent_mBMSSubscriptionModification /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMSSubscriptionModification /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSEvent_mBMSSubscriptionTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, mBMSSubscriptionTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, MBMSEvent_startofInterceptWithMBMSServiceActive /* IMPORTED_LONG_ENUMERATION_ITEM */, startofInterceptWithMBMSServiceActive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MBMSEvent, _encode_MBMSEvent } from "../MBMSUmtsHI2Operations/MBMSEvent.ta.mjs";
import { CorrelationNumber, _decode_CorrelationNumber, _encode_CorrelationNumber } from "../MBMSUmtsHI2Operations/CorrelationNumber.ta.mjs";
// export { CorrelationNumber, _decode_CorrelationNumber, _encode_CorrelationNumber } from "../MBMSUmtsHI2Operations/CorrelationNumber.ta.mjs";
import { MBMSinformation, _decode_MBMSinformation, _encode_MBMSinformation } from "../MBMSUmtsHI2Operations/MBMSinformation.ta.mjs";
// export { MBMSinformation, _decode_MBMSinformation, _encode_MBMSinformation } from "../MBMSUmtsHI2Operations/MBMSinformation.ta.mjs";
import { VisitedPLMNID, _decode_VisitedPLMNID, _encode_VisitedPLMNID } from "../MBMSUmtsHI2Operations/VisitedPLMNID.ta.mjs";
// export { VisitedPLMNID, _decode_VisitedPLMNID, _encode_VisitedPLMNID } from "../MBMSUmtsHI2Operations/VisitedPLMNID.ta.mjs";
import { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";
// export { National_HI2_ASN1parameters, _decode_National_HI2_ASN1parameters, _encode_National_HI2_ASN1parameters } from "../HI2Operations/National-HI2-ASN1parameters.ta.mjs";


/**
 * @summary IRI_Parameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-Parameters ::= SEQUENCE
 * {
 *     hi2mbmsDomainId                 [0]    OBJECT IDENTIFIER,  -- 3GPP HI2 MBMS domain
 *     lawfulInterceptionIdentifier    [2] LawfulInterceptionIdentifier,
 *         -- This identifier is associated to the target.
 *     timeStamp                [3] TimeStamp,
 *         -- date and time of the event triggering the report.
 *     initiator                 [4] ENUMERATED
 *     {
 *         not-Available        (0),
 *         originating-Target    (1),
 *             -- in case of MBMS, this indicates that the MBMS UE has initiated the MBMS session
 *             -- or initiated the subscription management event.
 *         network-initiated    (2),
 *             -- in case of MBMS, this indicates that the MBMS has initiated the MBMS session.
 *         off-online-action   (3),
 *             -- in case of MBMS, this indicates a subscription management event has occurred as the
 *             -- result of an MBMS operator customer services function or other subscription updates
 *             -- not initiated by the MBMS UE.
 *     ...
 *     } OPTIONAL,
 * 
 *     partyInformation         [5] SET SIZE (1..10) OF PartyInformation OPTIONAL,
 *         -- This parameter provides the concerned party, the identiy(ies) of the party
 *         -- and all the information provided by the party.
 * 
 *     national-Parameters        [6] National-Parameters OPTIONAL,
 *     networkIdentifier        [7] Network-Identifier OPTIONAL,
 *     mBMSevent                [8] MBMSEvent    OPTIONAL,
 *     correlationNumber        [9] CorrelationNumber OPTIONAL,
 *     mbmsInformation            [10] MBMSinformation OPTIONAL,
 *     visitedPLMNID            [11] VisitedPLMNID     OPTIONAL,
 *     national-HI2-ASN1parameters    [12]    National-HI2-ASN1parameters    OPTIONAL,
 * ...
 * }
 * ```
 * 
 * @class
 */
export
class IRI_Parameters {
    /**
     * @summary `hi2mbmsDomainId`.
     * @public
     * @readonly
     */
    readonly hi2mbmsDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `initiator`.
     * @public
     * @readonly
     */
    readonly initiator: OPTIONAL<IRI_Parameters_initiator>;
    /**
     * @summary `partyInformation`.
     * @public
     * @readonly
     */
    readonly partyInformation: OPTIONAL<PartyInformation[]>;
    /**
     * @summary `national_Parameters`.
     * @public
     * @readonly
     */
    readonly national_Parameters: OPTIONAL<National_Parameters>;
    /**
     * @summary `networkIdentifier`.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `mBMSevent`.
     * @public
     * @readonly
     */
    readonly mBMSevent: OPTIONAL<MBMSEvent>;
    /**
     * @summary `correlationNumber`.
     * @public
     * @readonly
     */
    readonly correlationNumber: OPTIONAL<CorrelationNumber>;
    /**
     * @summary `mbmsInformation`.
     * @public
     * @readonly
     */
    readonly mbmsInformation: OPTIONAL<MBMSinformation>;
    /**
     * @summary `visitedPLMNID`.
     * @public
     * @readonly
     */
    readonly visitedPLMNID: OPTIONAL<VisitedPLMNID>;
    /**
     * @summary `national_HI2_ASN1parameters`.
     * @public
     * @readonly
     */
    readonly national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi2mbmsDomainId: OBJECT_IDENTIFIER,
        lawfulInterceptionIdentifier: LawfulInterceptionIdentifier,
        timeStamp: TimeStamp,
        initiator: OPTIONAL<IRI_Parameters_initiator>,
        partyInformation: OPTIONAL<PartyInformation[]>,
        national_Parameters: OPTIONAL<National_Parameters>,
        networkIdentifier: OPTIONAL<Network_Identifier>,
        mBMSevent: OPTIONAL<MBMSEvent>,
        correlationNumber: OPTIONAL<CorrelationNumber>,
        mbmsInformation: OPTIONAL<MBMSinformation>,
        visitedPLMNID: OPTIONAL<VisitedPLMNID>,
        national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi2mbmsDomainId = hi2mbmsDomainId;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.timeStamp = timeStamp;
        this.initiator = initiator;
        this.partyInformation = partyInformation;
        this.national_Parameters = national_Parameters;
        this.networkIdentifier = networkIdentifier;
        this.mBMSevent = mBMSevent;
        this.correlationNumber = correlationNumber;
        this.mbmsInformation = mbmsInformation;
        this.visitedPLMNID = visitedPLMNID;
        this.national_HI2_ASN1parameters = national_HI2_ASN1parameters;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IRI_Parameters
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_Parameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_Parameters`.
     * @returns {IRI_Parameters}
     */
    public static _from_object (_o: { [_K in keyof (IRI_Parameters)]: (IRI_Parameters)[_K] }): IRI_Parameters {
        return new IRI_Parameters(_o.hi2mbmsDomainId, _o.lawfulInterceptionIdentifier, _o.timeStamp, _o.initiator, _o.partyInformation, _o.national_Parameters, _o.networkIdentifier, _o.mBMSevent, _o.correlationNumber, _o.mbmsInformation, _o.visitedPLMNID, _o.national_HI2_ASN1parameters, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_IRI_Parameters_initiator;        /**
         * @summary The enum used as the type of the component `mBMSevent`
         * @public
         * @static
         */

    public static _enum_for_mBMSevent = _enum_for_MBMSEvent;
}

/**
 * @summary The Leading Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    new $.ComponentSpec("hi2mbmsDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("initiator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("partyInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("national-Parameters", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("mBMSevent", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("correlationNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("mbmsInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("visitedPLMNID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("national-HI2-ASN1parameters", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_Parameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_Parameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_Parameters: $.ASN1Decoder<IRI_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_Parameters (el: _Element): IRI_Parameters {
    if (!_cached_decoder_for_IRI_Parameters) { _cached_decoder_for_IRI_Parameters = function (el: _Element): IRI_Parameters {
    let hi2mbmsDomainId!: OBJECT_IDENTIFIER;
    let lawfulInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let timeStamp!: TimeStamp;
    let initiator: OPTIONAL<IRI_Parameters_initiator>;
    let partyInformation: OPTIONAL<PartyInformation[]>;
    let national_Parameters: OPTIONAL<National_Parameters>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let mBMSevent: OPTIONAL<MBMSEvent>;
    let correlationNumber: OPTIONAL<CorrelationNumber>;
    let mbmsInformation: OPTIONAL<MBMSinformation>;
    let visitedPLMNID: OPTIONAL<VisitedPLMNID>;
    let national_HI2_ASN1parameters: OPTIONAL<National_HI2_ASN1parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi2mbmsDomainId": (_el: _Element): void => { hi2mbmsDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<IRI_Parameters_initiator>(() => _decode_IRI_Parameters_initiator)(_el); },
        "partyInformation": (_el: _Element): void => { partyInformation = $._decode_implicit<PartyInformation[]>(() => $._decodeSetOf<PartyInformation>(() => _decode_PartyInformation))(_el); },
        "national-Parameters": (_el: _Element): void => { national_Parameters = $._decode_implicit<National_Parameters>(() => _decode_National_Parameters)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "mBMSevent": (_el: _Element): void => { mBMSevent = $._decode_implicit<MBMSEvent>(() => _decode_MBMSEvent)(_el); },
        "correlationNumber": (_el: _Element): void => { correlationNumber = $._decode_implicit<CorrelationNumber>(() => _decode_CorrelationNumber)(_el); },
        "mbmsInformation": (_el: _Element): void => { mbmsInformation = $._decode_implicit<MBMSinformation>(() => _decode_MBMSinformation)(_el); },
        "visitedPLMNID": (_el: _Element): void => { visitedPLMNID = $._decode_implicit<VisitedPLMNID>(() => _decode_VisitedPLMNID)(_el); },
        "national-HI2-ASN1parameters": (_el: _Element): void => { national_HI2_ASN1parameters = $._decode_implicit<National_HI2_ASN1parameters>(() => _decode_National_HI2_ASN1parameters)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_Parameters,
        _extension_additions_list_spec_for_IRI_Parameters,
        _root_component_type_list_2_spec_for_IRI_Parameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IRI_Parameters(
        hi2mbmsDomainId,
        lawfulInterceptionIdentifier,
        timeStamp,
        initiator,
        partyInformation,
        national_Parameters,
        networkIdentifier,
        mBMSevent,
        correlationNumber,
        mbmsInformation,
        visitedPLMNID,
        national_HI2_ASN1parameters,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IRI_Parameters(el);
}

let _cached_encoder_for_IRI_Parameters: $.ASN1Encoder<IRI_Parameters> | null = null;

/**
 * @summary Encodes a(n) IRI_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_Parameters (value: IRI_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_Parameters) { _cached_encoder_for_IRI_Parameters = function (value: IRI_Parameters, elGetter: $.ASN1Encoder<IRI_Parameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi2mbmsDomainId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    if (value.initiator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_IRI_Parameters_initiator, $.BER)(value.initiator, $.BER);
    }
    if (value.partyInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSetOf<PartyInformation>(() => _encode_PartyInformation, $.BER), $.BER)(value.partyInformation, $.BER);
    }
    if (value.national_Parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_National_Parameters, $.BER)(value.national_Parameters, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    if (value.mBMSevent !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_MBMSEvent, $.BER)(value.mBMSevent, $.BER);
    }
    if (value.correlationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_CorrelationNumber, $.BER)(value.correlationNumber, $.BER);
    }
    if (value.mbmsInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_MBMSinformation, $.BER)(value.mbmsInformation, $.BER);
    }
    if (value.visitedPLMNID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_VisitedPLMNID, $.BER)(value.visitedPLMNID, $.BER);
    }
    if (value.national_HI2_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_National_HI2_ASN1parameters, $.BER)(value.national_HI2_ASN1parameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IRI_Parameters(value, elGetter);
}


/* eslint-enable */
