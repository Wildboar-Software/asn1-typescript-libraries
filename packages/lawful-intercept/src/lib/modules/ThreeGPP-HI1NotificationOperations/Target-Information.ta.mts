/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
import { TargetType, _decode_TargetType, _encode_TargetType, _enum_for_TargetType } from "../ThreeGPP-HI1NotificationOperations/TargetType.ta.mjs";
// export { TargetType, _enum_for_TargetType, TargetType_mSISDN /* IMPORTED_LONG_ENUMERATION_ITEM */, mSISDN /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_iMSI /* IMPORTED_LONG_ENUMERATION_ITEM */, iMSI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_iMEI /* IMPORTED_LONG_ENUMERATION_ITEM */, iMEI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_e164_Format /* IMPORTED_LONG_ENUMERATION_ITEM */, e164_Format /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_nAI /* IMPORTED_LONG_ENUMERATION_ITEM */, nAI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_sip_URI /* IMPORTED_LONG_ENUMERATION_ITEM */, sip_URI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_tel_URI /* IMPORTED_LONG_ENUMERATION_ITEM */, tel_URI /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_iMPU /* IMPORTED_LONG_ENUMERATION_ITEM */, iMPU /* IMPORTED_SHORT_ENUMERATION_ITEM */, TargetType_iMPI /* IMPORTED_LONG_ENUMERATION_ITEM */, iMPI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TargetType, _encode_TargetType } from "../ThreeGPP-HI1NotificationOperations/TargetType.ta.mjs";
import { DeliveryInformation, _decode_DeliveryInformation, _encode_DeliveryInformation } from "../ThreeGPP-HI1NotificationOperations/DeliveryInformation.ta.mjs";
// export { DeliveryInformation, _decode_DeliveryInformation, _encode_DeliveryInformation } from "../ThreeGPP-HI1NotificationOperations/DeliveryInformation.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { InterceptionType, _decode_InterceptionType, _encode_InterceptionType, _enum_for_InterceptionType } from "../ThreeGPP-HI1NotificationOperations/InterceptionType.ta.mjs";
// export { InterceptionType, _enum_for_InterceptionType, InterceptionType_voiceIriCc /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceIriCc /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterceptionType_voiceIriOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceIriOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterceptionType_dataIriCc /* IMPORTED_LONG_ENUMERATION_ITEM */, dataIriCc /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterceptionType_dataIriOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, dataIriOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterceptionType_voiceAndDataIriCc /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceAndDataIriCc /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterceptionType_voiceAndDataIriOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceAndDataIriOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InterceptionType, _encode_InterceptionType } from "../ThreeGPP-HI1NotificationOperations/InterceptionType.ta.mjs";


/**
 * @summary Target_Information
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Target-Information ::= SEQUENCE
 * {
 *     communicationIdentifier    [0] CommunicationIdentifier OPTIONAL,
 *         -- Only the NO/AP/SP Identifier is provided (the one provided with the
 *         -- Lawful authorization)
 *     network-Identifier    [1] Network-Identifier OPTIONAL,
 *         -- the NO/PA/SPIdentifier,
 *         -- Same definition of annexes B3, B8, B9, B.11.1
 *     broadcastArea        [2] OCTET STRING (SIZE (1..256)) OPTIONAL,
 *         -- A Broadcast Area is used to select the group of NEs (network elements) which an
 *         -- interception applies to. This group may be built on the basis of network type, technology
 *         -- type or geographic details to fit national regulation and jurisdiction. The pre-defined
 *         -- values may be decided by the CSP and the LEA to determinate the specific part of the
 *         -- network or plateform on which the target identity(ies) has to be activated or
 *         -- desactivated.
 *     targetType            [3] TargetType OPTIONAL,
 *     deliveryInformation    [4] DeliveryInformation OPTIONAL,
 *     liActivatedTime        [5] TimeStamp OPTIONAL,
 *     liDeactivatedTime    [6] TimeStamp OPTIONAL,
 *     liModificationTime    [7] TimeStamp OPTIONAL,
 *     interceptionType    [8] InterceptionType OPTIONAL,
 * ...,
 *     liSetUpTime        [9] TimeStamp OPTIONAL
 *     -- date and time when the warrant is entered into the ADMF
 * }
 * ```
 * 
 * @class
 */
export
class Target_Information {
    /**
     * @summary `communicationIdentifier`.
     * @public
     * @readonly
     */
    readonly communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    /**
     * @summary `network_Identifier`.
     * @public
     * @readonly
     */
    readonly network_Identifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `broadcastArea`.
     * @public
     * @readonly
     */
    readonly broadcastArea: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `targetType`.
     * @public
     * @readonly
     */
    readonly targetType: OPTIONAL<TargetType>;
    /**
     * @summary `deliveryInformation`.
     * @public
     * @readonly
     */
    readonly deliveryInformation: OPTIONAL<DeliveryInformation>;
    /**
     * @summary `liActivatedTime`.
     * @public
     * @readonly
     */
    readonly liActivatedTime: OPTIONAL<TimeStamp>;
    /**
     * @summary `liDeactivatedTime`.
     * @public
     * @readonly
     */
    readonly liDeactivatedTime: OPTIONAL<TimeStamp>;
    /**
     * @summary `liModificationTime`.
     * @public
     * @readonly
     */
    readonly liModificationTime: OPTIONAL<TimeStamp>;
    /**
     * @summary `interceptionType`.
     * @public
     * @readonly
     */
    readonly interceptionType: OPTIONAL<InterceptionType>;
    /**
     * @summary `liSetUpTime`.
     * @public
     * @readonly
     */
    readonly liSetUpTime: OPTIONAL<TimeStamp>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        network_Identifier: OPTIONAL<Network_Identifier>,
        broadcastArea: OPTIONAL<OCTET_STRING>,
        targetType: OPTIONAL<TargetType>,
        deliveryInformation: OPTIONAL<DeliveryInformation>,
        liActivatedTime: OPTIONAL<TimeStamp>,
        liDeactivatedTime: OPTIONAL<TimeStamp>,
        liModificationTime: OPTIONAL<TimeStamp>,
        interceptionType: OPTIONAL<InterceptionType>,
        liSetUpTime: OPTIONAL<TimeStamp>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.communicationIdentifier = communicationIdentifier;
        this.network_Identifier = network_Identifier;
        this.broadcastArea = broadcastArea;
        this.targetType = targetType;
        this.deliveryInformation = deliveryInformation;
        this.liActivatedTime = liActivatedTime;
        this.liDeactivatedTime = liDeactivatedTime;
        this.liModificationTime = liModificationTime;
        this.interceptionType = interceptionType;
        this.liSetUpTime = liSetUpTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Target_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Target_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Target_Information`.
     * @returns {Target_Information}
     */
    public static _from_object (_o: { [_K in keyof (Target_Information)]: (Target_Information)[_K] }): Target_Information {
        return new Target_Information(_o.communicationIdentifier, _o.network_Identifier, _o.broadcastArea, _o.targetType, _o.deliveryInformation, _o.liActivatedTime, _o.liDeactivatedTime, _o.liModificationTime, _o.interceptionType, _o.liSetUpTime, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `targetType`
         * @public
         * @static
         */

    public static _enum_for_targetType = _enum_for_TargetType;        /**
         * @summary The enum used as the type of the component `interceptionType`
         * @public
         * @static
         */

    public static _enum_for_interceptionType = _enum_for_InterceptionType;
}

/**
 * @summary The Leading Root Component Types of Target_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Target_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("communicationIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("network-Identifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("broadcastArea", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deliveryInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("liActivatedTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("liDeactivatedTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("liModificationTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("interceptionType", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Target_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Target_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Target_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Target_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("liSetUpTime", true, $.hasTag(_TagClass.context, 9))
];

let _cached_decoder_for_Target_Information: $.ASN1Decoder<Target_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Target_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Target_Information (el: _Element): Target_Information {
    if (!_cached_decoder_for_Target_Information) { _cached_decoder_for_Target_Information = function (el: _Element): Target_Information {
    let communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    let network_Identifier: OPTIONAL<Network_Identifier>;
    let broadcastArea: OPTIONAL<OCTET_STRING>;
    let targetType: OPTIONAL<TargetType>;
    let deliveryInformation: OPTIONAL<DeliveryInformation>;
    let liActivatedTime: OPTIONAL<TimeStamp>;
    let liDeactivatedTime: OPTIONAL<TimeStamp>;
    let liModificationTime: OPTIONAL<TimeStamp>;
    let interceptionType: OPTIONAL<InterceptionType>;
    let liSetUpTime: OPTIONAL<TimeStamp>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "network-Identifier": (_el: _Element): void => { network_Identifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "broadcastArea": (_el: _Element): void => {
            broadcastArea = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (broadcastArea.length < 1 || broadcastArea.length > 256) {
                throw new ASN1SizeError("Target_Information.broadcastArea violates SIZE constraint");
            }
        },
        "targetType": (_el: _Element): void => { targetType = $._decode_implicit<TargetType>(() => _decode_TargetType)(_el); },
        "deliveryInformation": (_el: _Element): void => { deliveryInformation = $._decode_implicit<DeliveryInformation>(() => _decode_DeliveryInformation)(_el); },
        "liActivatedTime": (_el: _Element): void => { liActivatedTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "liDeactivatedTime": (_el: _Element): void => { liDeactivatedTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "liModificationTime": (_el: _Element): void => { liModificationTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "interceptionType": (_el: _Element): void => { interceptionType = $._decode_implicit<InterceptionType>(() => _decode_InterceptionType)(_el); },
        "liSetUpTime": (_el: _Element): void => { liSetUpTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Target_Information,
        _extension_additions_list_spec_for_Target_Information,
        _root_component_type_list_2_spec_for_Target_Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Target_Information(
        communicationIdentifier,
        network_Identifier,
        broadcastArea,
        targetType,
        deliveryInformation,
        liActivatedTime,
        liDeactivatedTime,
        liModificationTime,
        interceptionType,
        liSetUpTime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Target_Information(el);
}

let _cached_encoder_for_Target_Information: $.ASN1Encoder<Target_Information> | null = null;

/**
 * @summary Encodes a(n) Target_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Target_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Target_Information (value: Target_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Target_Information) { _cached_encoder_for_Target_Information = function (value: Target_Information, elGetter: $.ASN1Encoder<Target_Information>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.communicationIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    }
    if (value.network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Network_Identifier, $.BER)(value.network_Identifier, $.BER);
    }
    if (value.broadcastArea !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.broadcastArea, $.BER);
    }
    if (value.targetType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TargetType, $.BER)(value.targetType, $.BER);
    }
    if (value.deliveryInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_DeliveryInformation, $.BER)(value.deliveryInformation, $.BER);
    }
    if (value.liActivatedTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_TimeStamp, $.BER)(value.liActivatedTime, $.BER);
    }
    if (value.liDeactivatedTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_TimeStamp, $.BER)(value.liDeactivatedTime, $.BER);
    }
    if (value.liModificationTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_TimeStamp, $.BER)(value.liModificationTime, $.BER);
    }
    if (value.interceptionType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_InterceptionType, $.BER)(value.interceptionType, $.BER);
    }
    if (value.liSetUpTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_TimeStamp, $.BER)(value.liSetUpTime, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Target_Information(value, elGetter);
}


/* eslint-enable */
