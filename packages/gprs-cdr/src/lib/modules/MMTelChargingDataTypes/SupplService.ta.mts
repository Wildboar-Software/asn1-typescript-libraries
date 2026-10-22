/* eslint-disable */
import {
    GraphicString,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceType, _decode_ServiceType, _encode_ServiceType } from "../MMTelChargingDataTypes/ServiceType.ta.mjs";
import { ServiceMode, _decode_ServiceMode, _encode_ServiceMode } from "../MMTelChargingDataTypes/ServiceMode.ta.mjs";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../MMTelChargingDataTypes/InvolvedParty.ta.mjs";
import { ParticipantActionType, _decode_ParticipantActionType, _encode_ParticipantActionType, _enum_for_ParticipantActionType } from "../MMTelChargingDataTypes/ParticipantActionType.ta.mjs";
import { AoCInformation, _decode_AoCInformation, _encode_AoCInformation } from "../MMTelChargingDataTypes/AoCInformation.ta.mjs";


/**
 * @summary SupplService
 * @description
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
     * @public
     * @readonly
     */
    readonly serviceType: ServiceType;
    /**
     * @summary `serviceMode`.
     * @public
     * @readonly
     */
    readonly serviceMode: OPTIONAL<ServiceMode>;
    /**
     * @summary `numberOfDiversions`.
     * @public
     * @readonly
     */
    readonly numberOfDiversions: OPTIONAL<INTEGER>;
    /**
     * @summary `associated_Party_Address`.
     * @public
     * @readonly
     */
    readonly associated_Party_Address: OPTIONAL<InvolvedParty>;
    /**
     * @summary `serviceId`.
     * @public
     * @readonly
     */
    readonly serviceId: OPTIONAL<GraphicString>;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `numberOfParticipants`.
     * @public
     * @readonly
     */
    readonly numberOfParticipants: OPTIONAL<INTEGER>;
    /**
     * @summary `participantActionType`.
     * @public
     * @readonly
     */
    readonly participantActionType: OPTIONAL<ParticipantActionType>;
    /**
     * @summary `cUGInformation`.
     * @public
     * @readonly
     */
    readonly cUGInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `aoCInformation`.
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
        numberOfParticipants: OPTIONAL<INTEGER>,
        participantActionType: OPTIONAL<ParticipantActionType>,
        cUGInformation: OPTIONAL<OCTET_STRING>,
        aoCInformation: OPTIONAL<AoCInformation[]>
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

    public static _enum_for_participantActionType = _enum_for_ParticipantActionType;
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
