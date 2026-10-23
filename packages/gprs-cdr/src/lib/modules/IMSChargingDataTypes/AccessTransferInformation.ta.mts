/* eslint-disable */
import {
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessTransferType, _decode_AccessTransferType, _encode_AccessTransferType, _enum_for_AccessTransferType } from "../IMSChargingDataTypes/AccessTransferType.ta.mjs";
import { NodeAddress, _decode_NodeAddress, _encode_NodeAddress } from "../IMSChargingDataTypes/NodeAddress.ta.mjs";
import { SubscriberEquipmentNumber, _decode_SubscriberEquipmentNumber, _encode_SubscriberEquipmentNumber } from "../IMSChargingDataTypes/SubscriberEquipmentNumber.ta.mjs";


/**
 * @summary AccessTransferInformation
 * @description
 *
 * One access transfer performed by an AS or an ATCF for IMS service
 * continuity (clause 5.1.11 and clause 5.1.13). The AS and the ATCF send
 * it with Access Network Information, Additional Access Network
 * Information, and Cellular Network Information. Requested Party Address
 * on the CDR then holds the transfer address when one is available: the
 * original target, the STN-SR for PS to CS, or the STI-SR for CS to PS.
 *
 * 3GPP TS 32.260 V20.1.0 clause 5.1.11.
 *
 * This grouped field may occur several times in the CDR and each occurrence
 * holds information on a particular access transfer. The field is present
 * only if access transfer procedure has been performed for IMS service
 * continuity. Each element of the list represents an access transfer and may
 * include the following fields: Access Transfer Type; Inter-UE Transfer;
 * Access Network Information; Additional Access Network Information;
 * Subscriber Equipment Number; Instance Id; Related IMS Charging Identifier;
 * Related IMS Charging Identifier Generation Node; Access Transfer Time.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.21D.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessTransferInformation ::= SEQUENCE {
 *    accessTransferType                   [0] IMPLICIT AccessTransferType OPTIONAL,
 *    accessNetworkInformation             [1] IMPLICIT OCTET STRING OPTIONAL,
 *    additionalAccessNetworkInformation   [2] IMPLICIT OCTET STRING OPTIONAL,
 *    inter-UE-Transfer                    [3] IMPLICIT NULL OPTIONAL,
 *    relatedICID                          [4] IMPLICIT OCTET STRING OPTIONAL,
 *    relatedICIDGenerationNode            [5] NodeAddress OPTIONAL,
 *    accessTransferTime                   [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    subscriberEquipmentNumber            [7] IMPLICIT SubscriberEquipmentNumber OPTIONAL,
 *    instanceId                           [8] IMPLICIT OCTET STRING OPTIONAL,
 *    cellularNetworkInformation           [9] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AccessTransferInformation {
    /**
     * @summary `accessTransferType`.
     * @description
     *
     * Access technologies of this transfer: PS to CS, CS to PS, PS to PS, or
     * CS to CS (clause 5.1.11). Present only when a transfer occurred..
     *
     * @public
     * @readonly
     */
    readonly accessTransferType: OPTIONAL<AccessTransferType>;
    /**
     * @summary `accessNetworkInformation`.
     * @description
     *
     * P-Access-Network-Info available along this access transfer
     * (3GPP TS 32.260 V20.1.0 clause 5.1.11 and clause 5.1.13).
     *
     * @public
     * @readonly
     */
    readonly accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `additionalAccessNetworkInformation`.
     * @description
     *
     * The other P-Access-Network-Info header available along this
     * access transfer (3GPP TS 32.260 V20.1.0 clause 5.1.11).
     *
     * @public
     * @readonly
     */
    readonly additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `inter_UE_Transfer`.
     * @description
     *
     * Present when the SCC AS performed an inter-UE access transfer, as
     * defined in TS 24.337 (clause 5.1.11). Absent when the transfer was not
     * between two UEs.
     *
     * @public
     * @readonly
     */
    readonly inter_UE_Transfer: OPTIONAL<NULL>;
    /**
     * @summary `relatedICID`.
     * @description
     *
     * ICID of the other access leg, used to correlate source and target legs
     * when the user is roaming. During SRVCC the Enhanced MSC server or the
     * P-CSCF generates an ICID for the target access leg. The SCC AS and the
     * ATCF put the source-leg ICID here. When OneChargingSession applies, the
     * original ICID stays on the CDR and this field instead holds the
     * target-leg ICID (clause 5.1.2.2A).
     *
     * @public
     * @readonly
     */
    readonly relatedICID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `relatedICIDGenerationNode`.
     * @description
     *
     * Identifier of the server that generated the Related ICID (clause
     * 6.3.1.2). Populated by the P-CSCF, the AS, and the ATCF..
     *
     * @public
     * @readonly
     */
    readonly relatedICIDGenerationNode: OPTIONAL<NodeAddress>;
    /**
     * @summary `accessTransferTime`.
     * @description
     *
     * Time at which this session transfer was performed (clause 6.1.3.9). 3GPP
     * TS 32.260 V20.1.0.
     *
     * @public
     * @readonly
     */
    readonly accessTransferTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `subscriberEquipmentNumber`.
     * @description
     *
     * Identification of the UE after the transfer, for example the IMEI
     * (clause 5.1.6 and clause 5.1.11).
     *
     * @public
     * @readonly
     */
    readonly subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    /**
     * @summary `instanceId`.
     * @description
     *
     * URN from the sip.instance feature tag of the Contact header, identifying
     * the device after the transfer (clause 5.1.6).
     *
     * @public
     * @readonly
     */
    readonly instanceId: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cellularNetworkInformation`.
     * @description
     *
     * Holds the content of one SIP header "Cellular-Network-Info". As per TS
     * 24.229 [210], a User Agent (UA) supporting one or more cellular radio
     * access technology (e.g. E-UTRAN) but using a non-cellular IP-CAN to access
     * the IM CN subsystem can use this header field to relay information to its
     * service provider about the radio cell identity of the cellular radio
     * access network on which the UE most recently camped.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.11A.
     *
     * 3GPP TS 32.260 V20.1.0 clause 5.1.11.
     *
     * @public
     * @readonly
     */
    readonly cellularNetworkInformation: OPTIONAL<OCTET_STRING>;

    constructor (
        accessTransferType: OPTIONAL<AccessTransferType>,
        accessNetworkInformation: OPTIONAL<OCTET_STRING>,
        additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>,
        inter_UE_Transfer: OPTIONAL<NULL>,
        relatedICID: OPTIONAL<OCTET_STRING>,
        relatedICIDGenerationNode: OPTIONAL<NodeAddress>,
        accessTransferTime: OPTIONAL<OCTET_STRING>,
        subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>,
        instanceId: OPTIONAL<OCTET_STRING>,
        cellularNetworkInformation: OPTIONAL<OCTET_STRING>
    ) {
        this.accessTransferType = accessTransferType;
        this.accessNetworkInformation = accessNetworkInformation;
        this.additionalAccessNetworkInformation = additionalAccessNetworkInformation;
        this.inter_UE_Transfer = inter_UE_Transfer;
        this.relatedICID = relatedICID;
        this.relatedICIDGenerationNode = relatedICIDGenerationNode;
        this.accessTransferTime = accessTransferTime;
        this.subscriberEquipmentNumber = subscriberEquipmentNumber;
        this.instanceId = instanceId;
        this.cellularNetworkInformation = cellularNetworkInformation;
    
        if (this.accessTransferTime !== undefined && (this.accessTransferTime.length !== 9)) {
            throw new ASN1SizeError("AccessTransferInformation.accessTransferTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a AccessTransferInformation
     * @description
     * 
     * This takes an `object` and converts it to a `AccessTransferInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessTransferInformation`.
     * @returns {AccessTransferInformation}
     */
    public static _from_object (_o: { [_K in keyof (AccessTransferInformation)]: (AccessTransferInformation)[_K] }): AccessTransferInformation {
        return new AccessTransferInformation(_o.accessTransferType, _o.accessNetworkInformation, _o.additionalAccessNetworkInformation, _o.inter_UE_Transfer, _o.relatedICID, _o.relatedICIDGenerationNode, _o.accessTransferTime, _o.subscriberEquipmentNumber, _o.instanceId, _o.cellularNetworkInformation);
    }

        /**
         * @summary The enum used as the type of the component `accessTransferType`
         * @public
         * @static
         */

    public static _enum_for_accessTransferType = _enum_for_AccessTransferType;
}

/**
 * @summary The Leading Root Component Types of AccessTransferInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessTransferInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessTransferType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalAccessNetworkInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("inter-UE-Transfer", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("relatedICID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("relatedICIDGenerationNode", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("accessTransferTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("subscriberEquipmentNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("instanceId", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of AccessTransferInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessTransferInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessTransferInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessTransferInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessTransferInformation: $.ASN1Decoder<AccessTransferInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessTransferInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessTransferInformation (el: _Element): AccessTransferInformation {
    if (!_cached_decoder_for_AccessTransferInformation) { _cached_decoder_for_AccessTransferInformation = function (el: _Element): AccessTransferInformation {
    let accessTransferType: OPTIONAL<AccessTransferType>;
    let accessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let additionalAccessNetworkInformation: OPTIONAL<OCTET_STRING>;
    let inter_UE_Transfer: OPTIONAL<NULL>;
    let relatedICID: OPTIONAL<OCTET_STRING>;
    let relatedICIDGenerationNode: OPTIONAL<NodeAddress>;
    let accessTransferTime: OPTIONAL<OCTET_STRING>;
    let subscriberEquipmentNumber: OPTIONAL<SubscriberEquipmentNumber>;
    let instanceId: OPTIONAL<OCTET_STRING>;
    let cellularNetworkInformation: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "accessTransferType": (_el: _Element): void => { accessTransferType = $._decode_implicit<AccessTransferType>(() => _decode_AccessTransferType)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "additionalAccessNetworkInformation": (_el: _Element): void => { additionalAccessNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "inter-UE-Transfer": (_el: _Element): void => { inter_UE_Transfer = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "relatedICID": (_el: _Element): void => { relatedICID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "relatedICIDGenerationNode": (_el: _Element): void => { relatedICIDGenerationNode = $._decode_explicit<NodeAddress>(() => _decode_NodeAddress)(_el); },
        "accessTransferTime": (_el: _Element): void => { accessTransferTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "subscriberEquipmentNumber": (_el: _Element): void => { subscriberEquipmentNumber = $._decode_implicit<SubscriberEquipmentNumber>(() => _decode_SubscriberEquipmentNumber)(_el); },
        "instanceId": (_el: _Element): void => { instanceId = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessTransferInformation,
        _extension_additions_list_spec_for_AccessTransferInformation,
        _root_component_type_list_2_spec_for_AccessTransferInformation,
        undefined,
    );
    return new AccessTransferInformation(
        accessTransferType,
        accessNetworkInformation,
        additionalAccessNetworkInformation,
        inter_UE_Transfer,
        relatedICID,
        relatedICIDGenerationNode,
        accessTransferTime,
        subscriberEquipmentNumber,
        instanceId,
        cellularNetworkInformation
    );
}; }
    return _cached_decoder_for_AccessTransferInformation(el);
}

let _cached_encoder_for_AccessTransferInformation: $.ASN1Encoder<AccessTransferInformation> | null = null;

/**
 * @summary Encodes a(n) AccessTransferInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessTransferInformation, encoded as an ASN.1 Element.
 */
export
function _encode_AccessTransferInformation (value: AccessTransferInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessTransferInformation) { _cached_encoder_for_AccessTransferInformation = function (value: AccessTransferInformation, _elGetter: $.ASN1Encoder<AccessTransferInformation>): _Element {
    const _components: _Element[] = [];
    if (value.accessTransferType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessTransferType, $.BER)(value.accessTransferType, $.BER));
    }
    if (value.accessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.accessNetworkInformation, $.BER));
    }
    if (value.additionalAccessNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.additionalAccessNetworkInformation, $.BER));
    }
    if (value.inter_UE_Transfer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.inter_UE_Transfer, $.BER));
    }
    if (value.relatedICID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.relatedICID, $.BER));
    }
    if (value.relatedICIDGenerationNode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_NodeAddress, $.BER)(value.relatedICIDGenerationNode, $.BER));
    }
    if (value.accessTransferTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.accessTransferTime, $.BER));
    }
    if (value.subscriberEquipmentNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SubscriberEquipmentNumber, $.BER)(value.subscriberEquipmentNumber, $.BER));
    }
    if (value.instanceId !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.instanceId, $.BER));
    }
    if (value.cellularNetworkInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.cellularNetworkInformation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AccessTransferInformation(value, elGetter);
}


/* eslint-enable */
