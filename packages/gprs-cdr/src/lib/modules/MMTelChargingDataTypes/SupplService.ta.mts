/* eslint-disable */
import {
    type GraphicString,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ServiceType, _decode_ServiceType, _encode_ServiceType } from "../MMTelChargingDataTypes/ServiceType.ta.mjs";
import { type ServiceMode, _decode_ServiceMode, _encode_ServiceMode } from "../MMTelChargingDataTypes/ServiceMode.ta.mjs";
import { type InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../MMTelChargingDataTypes/InvolvedParty.ta.mjs";
import { ParticipantActionType, _decode_ParticipantActionType, _encode_ParticipantActionType, _enum_for_ParticipantActionType } from "../MMTelChargingDataTypes/ParticipantActionType.ta.mjs";
import { AoCInformation, _decode_AoCInformation, _encode_AoCInformation } from "../MMTelChargingDataTypes/AoCInformation.ta.mjs";


/**
 * @summary SupplService
 * @description
 *
 * One supplementary service inside `MMTelInformation`. The same AS
 * may report several services together, so the enclosing sequence
 * holds one entry per service that is active in parallel.
 *
 * `serviceType` selects the service. The other fields are used as
 * that service requires: CDIV uses `serviceMode`,
 * `numberOfDiversions` and the forwarding party; CONF uses
 * `serviceId`, `changeTime`, `numberOfParticipants` and
 * `participantActionType`; ECT and FA also use the associated
 * party; CUG uses `cUGInformation`; AoC uses `aoCInformation`.
 *
 * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupplService ::= SET {
 *    serviceType                [0] IMPLICIT ServiceType,
 *    serviceMode                [1] IMPLICIT ServiceMode OPTIONAL,
 *    numberOfDiversions         [2] IMPLICIT INTEGER OPTIONAL,
 *    associated-Party-Address   [3] InvolvedParty OPTIONAL,
 *    serviceId                  [4] IMPLICIT GraphicString OPTIONAL,
 *    changeTime                 [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    numberOfParticipants       [6] IMPLICIT INTEGER OPTIONAL,
 *    participantActionType      [7] IMPLICIT ParticipantActionType OPTIONAL,
 *    cUGInformation             [8] IMPLICIT OCTET STRING OPTIONAL,
 *    aoCInformation             [9] IMPLICIT SEQUENCE  OF
 *       AoCInformation OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SupplService {
    /**
     * @summary `serviceType`.
     * @description
     *
     * Which MMTel supplementary service this entry records. The value
     * determines which of the optional fields apply and whether
     * offline, online or converged charging is used. Obtained from
     * the MMTel-SService-Type AVP. Values 1024 and above are reserved
     * for network or manufacturer variants.
     *
     * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.6.
     *
     * @public
     * @readonly
     */
    readonly serviceType: ServiceType;
    /**
     * @summary `serviceMode`.
     * @description
     *
     * Behaviour of `serviceType` when the service has more than one.
     * CDIV: CFU, CFB, CFNR, CFNRc, CFNL or communication deflection.
     * CB: ACR, ICB or OCB. ECT: blind or consultative transfer.
     * CONF: three-party. AoC: at set-up, during the communication,
     * or at the end. Obtained from the Service-Mode AVP. Values
     * 1024 and above are reserved for network or manufacturer
     * variants.
     *
     * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.5.
     *
     * @public
     * @readonly
     */
    readonly serviceMode: OPTIONAL<ServiceMode>;
    /**
     * @summary `numberOfDiversions`.
     * @description
     *
     * How many diversions have been applied for CDIV. Every diversion
     * type is counted. When a diverted-to user diverts again, that
     * user becomes the diverting user of the next leg and is charged
     * for it.
     *
     * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.7 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.3.
     *
     * @public
     * @readonly
     */
    readonly numberOfDiversions: OPTIONAL<INTEGER>;
    /**
     * @summary `associated_Party_Address`.
     * @description
     *
     * Extra party identity needed to charge the service. For CDIV this
     * is the forwarding party (the diverting user; in the CFNR flow,
     * user B). For ECT it is the transferor. For flexible alerting
     * it is the Pilot Identity the call was placed to. For
     * three-party it is the initiator. Obtained from the
     * Associated-Party-Address AVP.
     *
     * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.1.
     *
     * @public
     * @readonly
     */
    readonly associated_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `serviceId`.
     * @description
     *
     * Conference identity for CONF. The CONF AS allocates a conference
     * URI when the conference is created; this field holds that
     * conference ID. Converged charging calls the same element
     * Conference Id. For an MRFC the field identifies the service
     * the MRFC is hosting.
     *
     * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.1 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.56.
     *
     * @public
     * @readonly
     */
    readonly serviceId: OPTIONAL<GraphicString>;
    /**
     * @summary `changeTime`.
     * @description
     *
     * Time of the CONF action in `participantActionType`, and the
     * timestamp for the CONF parameters in this entry. When the
     * action is CREATE, this is the start of the conference. When
     * the action is QUIT and `numberOfParticipants` is 0, this is
     * the end of the conference.
     *
     * Clause 6.3.1.2 gives the category operator conditional. In
     * this module the component is present on every `SupplService`.
     *
     * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `numberOfParticipants`.
     * @description
     *
     * How many parties are attached to the conference at
     * `changeTime`. Charging of the conference owner may be based
     * on this count. Under online session charging with unit
     * reservation the AS requests new units when the count changes
     * because a user joins, is invited, or leaves.
     *
     * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.11, 5.3.2.1.4 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly numberOfParticipants: OPTIONAL<INTEGER>;
    /**
     * @summary `participantActionType`.
     * @description
     *
     * What the participant did in the conference at `changeTime`:
     * create, join, be invited, or quit. Obtained from the
     * Participants-Action-Type AVP. The charging information names
     * the invited-into-conference action INVITE_CONF.
     *
     * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.4.
     *
     * @public
     * @readonly
     */
    readonly participantActionType: OPTIONAL<ParticipantActionType>;
    /**
     * @summary `cUGInformation`.
     * @description
     *
     * CUG interlock code conveyed by the network. It identifies the
     * CUG communication. The AS includes it when the subscriber's
     * CUG profile allows the communication. If the checks result in
     * non-CUG behaviour, such as outgoing access or an incoming call
     * from a non-member, the code is omitted and non-CUG charging
     * applies.
     *
     * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.17 and 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly cUGInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aoCInformation`.
     * @description
     *
     * Advice of Charge information conveyed to the CDF, as defined in
     * TS 32.280. More than one entry may be present, for example
     * when AoC at communication set-up is sent more than once.
     *
     * 3GPP TS 32.275 V19.0.0 clauses 5.1.1.21 and 6.3.1.2.
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.3A.
     *
     * @public
     * @readonly
     */
    readonly aoCInformation: OPTIONAL<AoCInformation[]>;

    constructor (
        serviceType: ServiceType,
        serviceMode: OPTIONAL<ServiceMode>,
        numberOfDiversions: OPTIONAL<INTEGER>,
        associated_Party_Address: OPTIONAL<InvolvedParty>,
        serviceId: OPTIONAL<GraphicString>,
        changeTime: OCTET_STRING,
        numberOfParticipants?: OPTIONAL<INTEGER>,
        participantActionType?: OPTIONAL<ParticipantActionType>,
        cUGInformation?: OPTIONAL<OCTET_STRING>,
        aoCInformation?: OPTIONAL<AoCInformation[]>
    ) {
        this.serviceType = serviceType;
        this.serviceMode = serviceMode;
        this.numberOfDiversions = numberOfDiversions;
        this.associated_Party_Address = associated_Party_Address;
        this.serviceId = serviceId;
        this.changeTime = changeTime;
        this.numberOfParticipants = numberOfParticipants;
        this.participantActionType = participantActionType;
        this.cUGInformation = cUGInformation;
        this.aoCInformation = aoCInformation;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("SupplService.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SupplService
     * @description
     * 
     * This takes an `object` and converts it to a `SupplService`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplService`.
     * @returns {SupplService}
     */
    public static _from_object (_o: { [_K in keyof (SupplService)]: (SupplService)[_K] }): SupplService {
        return new SupplService(_o.serviceType, _o.serviceMode, _o.numberOfDiversions, _o.associated_Party_Address, _o.serviceId, _o.changeTime, _o.numberOfParticipants, _o.participantActionType, _o.cUGInformation, _o.aoCInformation);
    }

        /**
         * @summary The enum used as the type of the component `participantActionType`
         * @public
         * @static
         */

    public static _enum_for_participantActionType: typeof _enum_for_ParticipantActionType = _enum_for_ParticipantActionType;
}

/**
 * @summary The Leading Root Component Types of SupplService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupplService: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceMode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfDiversions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("associated-Party-Address", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceId", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("numberOfParticipants", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("participantActionType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cUGInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("aoCInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SupplService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupplService: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupplService
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupplService: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SupplService: $.ASN1Decoder<SupplService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupplService (el: _Element): SupplService {
    if (!_cached_decoder_for_SupplService) { _cached_decoder_for_SupplService = function (el: _Element): SupplService {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let serviceType!: ServiceType;
    let serviceMode: OPTIONAL<ServiceMode>;
    let numberOfDiversions: OPTIONAL<INTEGER>;
    let associated_Party_Address: OPTIONAL<InvolvedParty>;
    let serviceId: OPTIONAL<GraphicString>;
    let changeTime!: OCTET_STRING;
    let numberOfParticipants: OPTIONAL<INTEGER>;
    let participantActionType: OPTIONAL<ParticipantActionType>;
    let cUGInformation: OPTIONAL<OCTET_STRING>;
    let aoCInformation: OPTIONAL<AoCInformation[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "serviceType": (_el: _Element): void => { serviceType = $._decode_implicit<ServiceType>(() => _decode_ServiceType)(_el); },
        "serviceMode": (_el: _Element): void => { serviceMode = $._decode_implicit<ServiceMode>(() => _decode_ServiceMode)(_el); },
        "numberOfDiversions": (_el: _Element): void => { numberOfDiversions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "associated-Party-Address": (_el: _Element): void => { associated_Party_Address = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); },
        "serviceId": (_el: _Element): void => { serviceId = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberOfParticipants": (_el: _Element): void => { numberOfParticipants = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "participantActionType": (_el: _Element): void => { participantActionType = $._decode_implicit<ParticipantActionType>(() => _decode_ParticipantActionType)(_el); },
        "cUGInformation": (_el: _Element): void => { cUGInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "aoCInformation": (_el: _Element): void => { aoCInformation = $._decode_implicit<AoCInformation[]>(() => $._decodeSequenceOf<AoCInformation>(() => _decode_AoCInformation))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SupplService,
        _extension_additions_list_spec_for_SupplService,
        _root_component_type_list_2_spec_for_SupplService,
        undefined,
    );
    return new SupplService( /* SET_CONSTRUCTOR_CALL */
        serviceType,
        serviceMode,
        numberOfDiversions,
        associated_Party_Address,
        serviceId,
        changeTime,
        numberOfParticipants,
        participantActionType,
        cUGInformation,
        aoCInformation
    );
}; }
    return _cached_decoder_for_SupplService(el);
}

let _cached_encoder_for_SupplService: $.ASN1Encoder<SupplService> | null = null;

/**
 * @summary Encodes a(n) SupplService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplService, encoded as an ASN.1 Element.
 */
export
function _encode_SupplService (value: SupplService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupplService) { _cached_encoder_for_SupplService = function (value: SupplService, _elGetter: $.ASN1Encoder<SupplService>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceType, $.BER)(value.serviceType, $.BER));
    if (value.serviceMode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceMode, $.BER)(value.serviceMode, $.BER));
    }
    if (value.numberOfDiversions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfDiversions, $.BER));
    }
    if (value.associated_Party_Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_InvolvedParty, $.BER)(value.associated_Party_Address, $.BER));
    }
    if (value.serviceId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeGraphicString, $.BER)(value.serviceId, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.numberOfParticipants !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.numberOfParticipants, $.BER));
    }
    if (value.participantActionType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ParticipantActionType, $.BER)(value.participantActionType, $.BER));
    }
    if (value.cUGInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.cUGInformation, $.BER));
    }
    if (value.aoCInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<AoCInformation>(() => _encode_AoCInformation, $.BER), $.BER)(value.aoCInformation, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SupplService(value, elGetter);
}


/* eslint-enable */
