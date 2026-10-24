/* eslint-disable */
import {
    type INTEGER,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { VoipCorrelationNumber, _decode_VoipCorrelationNumber, _encode_VoipCorrelationNumber } from "../VoIP-HI3-IMS/VoipCorrelationNumber.ta.mjs";
// export { VoipCorrelationNumber, _decode_VoipCorrelationNumber, _encode_VoipCorrelationNumber } from "../VoIP-HI3-IMS/VoipCorrelationNumber.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { TPDU_direction, _decode_TPDU_direction, _encode_TPDU_direction, _enum_for_TPDU_direction } from "../VoIP-HI3-IMS/TPDU-direction.ta.mjs";
// export { TPDU_direction, _enum_for_TPDU_direction, TPDU_direction_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_to_target /* IMPORTED_LONG_ENUMERATION_ITEM */, to_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, TPDU_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_TPDU_direction, _encode_TPDU_direction } from "../VoIP-HI3-IMS/TPDU-direction.ta.mjs";
import { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
// export { National_HI3_ASN1parameters, _decode_National_HI3_ASN1parameters, _encode_National_HI3_ASN1parameters } from "../Eps-HI3-PS/National-HI3-ASN1parameters.ta.mjs";
import { ICE_type, _decode_ICE_type, _encode_ICE_type, _enum_for_ICE_type } from "../VoIP-HI3-IMS/ICE-type.ta.mjs";
// export { ICE_type, _enum_for_ICE_type, ICE_type_ggsn /* IMPORTED_LONG_ENUMERATION_ITEM */, ggsn /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_pDN_GW /* IMPORTED_LONG_ENUMERATION_ITEM */, pDN_GW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_aGW /* IMPORTED_LONG_ENUMERATION_ITEM */, aGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_trGW /* IMPORTED_LONG_ENUMERATION_ITEM */, trGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_mGW /* IMPORTED_LONG_ENUMERATION_ITEM */, mGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, ICE_type_mRF /* IMPORTED_LONG_ENUMERATION_ITEM */, mRF /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_lmISF /* IMPORTED_LONG_ENUMERATION_ITEM */, lmISF /* IMPORTED_SHORT_ENUMERATION_ITEM */, ICE_type_sGW /* IMPORTED_LONG_ENUMERATION_ITEM */, sGW /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ICE_type, _encode_ICE_type } from "../VoIP-HI3-IMS/ICE-type.ta.mjs";
import { Payload_description, _decode_Payload_description, _encode_Payload_description } from "../VoIP-HI3-IMS/Payload-description.ta.mjs";
// export { Payload_description, _decode_Payload_description, _encode_Payload_description } from "../VoIP-HI3-IMS/Payload-description.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";


/**
 * @summary VoipLIC_header
 * @description
 * 
 * BER-encoded correlation header for IMS-based VoIP CC. PTC CC uses the same
 * module (clause 17.1.4). For a VoIP session the correlation number is unique
 * and ties CC to IRI and ties IRI records and CC within that session (clause
 * 12.1.4).
 * 
 * 3GPP TS 33.108, annex K.2 and clause 12.6.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoipLIC-header ::= SEQUENCE
 * {
 *     hi3voipDomainId            [0]    OBJECT IDENTIFIER,  -- 3GPP VoIP HI3 Domain
 *     lIID                    [2] LawfulInterceptionIdentifier OPTIONAL,
 *     voipCorrelationNumber    [3]    VoipCorrelationNumber,
 *                               -- For VoIP, contains the same contents as the
 *                               -- cc parameter contained within an IRI-to-CC-Correlation parameter
 *                               -- which is contained in the IMS-VoIP-Correlation parameter in the
 *                               -- IRI [HI2]; For PTC, contains the same contents as the cc parameter
 *                               -- contained within an IRI-to-CC-Correlation parameter which is
 *                               -- contained in the CorrelationValues parameter in the IRI [HI2]
 * 
 *     timeStamp                [4]    TimeStamp OPTIONAL,
 *     sequence-number            [5]    INTEGER (0..65535),
 *     t-PDU-direction            [6] TPDU-direction,
 *     national-HI3-ASN1parameters        [7] National-HI3-ASN1parameters OPTIONAL,
 *     --  encoded per national requirements
 *     ice-type                [8] ICE-type OPTIONAL,
 *         -- The ICE-type indicates the applicable Intercepting Control Element in which
 *         -- the VoIP CC is intercepted.
 *     ...,
 *     payload-description        [9] Payload-description OPTIONAL,
 *         -- When this option is implemented, shall be used to provide the RTP payload description
 *         -- as soon as it is available at DF3 (initial one or each time the DF3 is notified of a
 *         -- change)
 *     networkIdentifier        [10] Network-Identifier OPTIONAL,
 *         -- Mandatory when used for PTC
 *         -- Identifies the network element that is reporting the CC
 *     pTCSessionInfo          [11] UTF8String OPTIONAL
 *         -- Mandatory when used for PTC
 *         -- Identifies the PTC Session. Together with the 'voipCorrelationNumber', uniquely
 *         -- identifies a specific PTC talk burst.
 * }
 * ```
 * 
 * @class
 */
export
class VoipLIC_header {
    /**
     * @summary `hi3voipDomainId`.
     * @description
     * 
     * 3GPP VoIP HI3 domain identifier in this header (`hi3voip` under
     * `threeGPPSUBDomainId`). 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly hi3voipDomainId: OBJECT_IDENTIFIER;
    /**
     * @summary `lIID`.
     * @description
     * 
     * Lawful interception identifier. Handling is a national requirement. 3GPP
     * TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `voipCorrelationNumber`.
     * @description
     * 
     * For VoIP, the same contents as the CC value inside IRI-to-CC-Correlation
     * inside IMS-VoIP-Correlation on HI2. For PTC, the same contents as the CC
     * value inside IRI-to-CC-Correlation inside CorrelationValues on HI2.
     * Unique per VoIP session (clause 12.1.4). The LEMF correlates CC to IRI
     * with it. 3GPP TS 33.108, annex K.2 and annex K.4.
     * @public
     * @readonly
     */
    readonly voipCorrelationNumber: VoipCorrelationNumber;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Handling is a national requirement. 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `sequence_number`.
     * @description
     * 
     * Integer incremented each time a T-PDU is delivered. Handling is a
     * national requirement. 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly sequence_number: INTEGER;
    /**
     * @summary `t_PDU_direction`.
     * @description
     * 
     * Direction of the T-PDU: from the target, to the target, combined, or
     * unknown. 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly t_PDU_direction: TPDU_direction;
    /**
     * @summary `national_HI3_ASN1parameters`.
     * @description
     * 
     * Encoded per national requirements. 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    /**
     * @summary `ice_type`.
     * @description
     * 
     * Node that intercepted the T-PDU, when the delivery or mediation function
     * has it. 3GPP TS 33.108, annex K.2. For VPLMN S8HR, use `lmISF` or `sGW`
     * (clause 12.7.3).
     * @public
     * @readonly
     */
    readonly ice_type: OPTIONAL<ICE_type>;
    /**
     * @summary `payload_description`.
     * @description
     * 
     * Optional description of the payload so the LEMF can process HI3 without
     * waiting for media information from HI2. When implemented, send the RTP
     * payload description as soon as DF3 has it, and again on each later
     * change. 3GPP TS 33.108, annex K.2.
     * @public
     * @readonly
     */
    readonly payload_description: OPTIONAL<Payload_description>;
    /**
     * @summary `networkIdentifier`.
     * @description
     * 
     * Network element reporting the CC. The module states this is mandatory
     * when used for PTC. 3GPP TS 33.108, clause 17.1.4 and annex B.12.
     * @public
     * @readonly
     */
    readonly networkIdentifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     * 
     * PTC session. With the VoIP correlation number, identifies one PTC talk
     * burst. The module states this is mandatory when used for PTC. PTC is Push
     * to Talk over Cellular (PoC or MCPTT). 3GPP TS 33.108, clause 17 and
     * clause 17.1.4.
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions not named in this module.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        hi3voipDomainId: OBJECT_IDENTIFIER,
        lIID: OPTIONAL<LawfulInterceptionIdentifier>,
        voipCorrelationNumber: VoipCorrelationNumber,
        timeStamp: OPTIONAL<TimeStamp>,
        sequence_number: INTEGER,
        t_PDU_direction: TPDU_direction,
        national_HI3_ASN1parameters?: OPTIONAL<National_HI3_ASN1parameters>,
        ice_type?: OPTIONAL<ICE_type>,
        payload_description?: OPTIONAL<Payload_description>,
        networkIdentifier?: OPTIONAL<Network_Identifier>,
        pTCSessionInfo?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.hi3voipDomainId = hi3voipDomainId;
        this.lIID = lIID;
        this.voipCorrelationNumber = voipCorrelationNumber;
        this.timeStamp = timeStamp;
        this.sequence_number = sequence_number;
        this.t_PDU_direction = t_PDU_direction;
        this.national_HI3_ASN1parameters = national_HI3_ASN1parameters;
        this.ice_type = ice_type;
        this.payload_description = payload_description;
        this.networkIdentifier = networkIdentifier;
        this.pTCSessionInfo = pTCSessionInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a VoipLIC_header
     * @description
     * 
     * This takes an `object` and converts it to a `VoipLIC_header`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoipLIC_header`.
     * @returns {VoipLIC_header}
     */
    public static _from_object (_o: { [_K in keyof (VoipLIC_header)]: (VoipLIC_header)[_K] }): VoipLIC_header {
        return new VoipLIC_header(_o.hi3voipDomainId, _o.lIID, _o.voipCorrelationNumber, _o.timeStamp, _o.sequence_number, _o.t_PDU_direction, _o.national_HI3_ASN1parameters, _o.ice_type, _o.payload_description, _o.networkIdentifier, _o.pTCSessionInfo, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_PDU_direction`
         * @public
         * @static
         */

    public static _enum_for_t_PDU_direction = _enum_for_TPDU_direction;        /**
         * @summary The enum used as the type of the component `ice_type`
         * @public
         * @static
         */

    public static _enum_for_ice_type = _enum_for_ICE_type;
}

/**
 * @summary The Leading Root Component Types of VoipLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoipLIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("hi3voipDomainId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lIID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("voipCorrelationNumber", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sequence-number", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("t-PDU-direction", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("national-HI3-ASN1parameters", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("ice-type", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of VoipLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoipLIC_header: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoipLIC_header
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoipLIC_header: $.ComponentSpec[] = [
    new $.ComponentSpec("payload-description", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("networkIdentifier", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("pTCSessionInfo", true, $.hasTag(_TagClass.context, 11))
];

let _cached_decoder_for_VoipLIC_header: $.ASN1Decoder<VoipLIC_header> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoipLIC_header
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoipLIC_header (el: _Element): VoipLIC_header {
    if (!_cached_decoder_for_VoipLIC_header) { _cached_decoder_for_VoipLIC_header = function (el: _Element): VoipLIC_header {
    let hi3voipDomainId!: OBJECT_IDENTIFIER;
    let lIID: OPTIONAL<LawfulInterceptionIdentifier>;
    let voipCorrelationNumber!: VoipCorrelationNumber;
    let timeStamp: OPTIONAL<TimeStamp>;
    let sequence_number!: INTEGER;
    let t_PDU_direction!: TPDU_direction;
    let national_HI3_ASN1parameters: OPTIONAL<National_HI3_ASN1parameters>;
    let ice_type: OPTIONAL<ICE_type>;
    let payload_description: OPTIONAL<Payload_description>;
    let networkIdentifier: OPTIONAL<Network_Identifier>;
    let pTCSessionInfo: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hi3voipDomainId": (_el: _Element): void => { hi3voipDomainId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lIID": (_el: _Element): void => { lIID = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "voipCorrelationNumber": (_el: _Element): void => { voipCorrelationNumber = $._decode_implicit<VoipCorrelationNumber>(() => _decode_VoipCorrelationNumber)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "sequence-number": (_el: _Element): void => {
            sequence_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequence_number === "bigint" ? sequence_number : BigInt(sequence_number);
            if (_n < 0n || _n > 65535n) {
                throw new ASN1OverflowError("VoipLIC_header.sequence_number violates INTEGER range");
            }
        },
        "t-PDU-direction": (_el: _Element): void => { t_PDU_direction = $._decode_implicit<TPDU_direction>(() => _decode_TPDU_direction)(_el); },
        "national-HI3-ASN1parameters": (_el: _Element): void => { national_HI3_ASN1parameters = $._decode_implicit<National_HI3_ASN1parameters>(() => _decode_National_HI3_ASN1parameters)(_el); },
        "ice-type": (_el: _Element): void => { ice_type = $._decode_implicit<ICE_type>(() => _decode_ICE_type)(_el); },
        "payload-description": (_el: _Element): void => { payload_description = $._decode_implicit<Payload_description>(() => _decode_Payload_description)(_el); },
        "networkIdentifier": (_el: _Element): void => { networkIdentifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoipLIC_header,
        _extension_additions_list_spec_for_VoipLIC_header,
        _root_component_type_list_2_spec_for_VoipLIC_header,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new VoipLIC_header(
        hi3voipDomainId,
        lIID,
        voipCorrelationNumber,
        timeStamp,
        sequence_number,
        t_PDU_direction,
        national_HI3_ASN1parameters,
        ice_type,
        payload_description,
        networkIdentifier,
        pTCSessionInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_VoipLIC_header(el);
}

let _cached_encoder_for_VoipLIC_header: $.ASN1Encoder<VoipLIC_header> | null = null;

/**
 * @summary Encodes a(n) VoipLIC_header into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoipLIC_header, encoded as an ASN.1 Element.
 */
export
function _encode_VoipLIC_header (value: VoipLIC_header, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoipLIC_header) { _cached_encoder_for_VoipLIC_header = function (value: VoipLIC_header, elGetter: $.ASN1Encoder<VoipLIC_header>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.hi3voipDomainId, $.BER);
    if (value.lIID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lIID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_VoipCorrelationNumber, $.BER)(value.voipCorrelationNumber, $.BER);
    if (value.timeStamp !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.sequence_number, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_TPDU_direction, $.BER)(value.t_PDU_direction, $.BER);
    if (value.national_HI3_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_National_HI3_ASN1parameters, $.BER)(value.national_HI3_ASN1parameters, $.BER);
    }
    if (value.ice_type !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ICE_type, $.BER)(value.ice_type, $.BER);
    }
    if (value.payload_description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Payload_description, $.BER)(value.payload_description, $.BER);
    }
    if (value.networkIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Network_Identifier, $.BER)(value.networkIdentifier, $.BER);
    }
    if (value.pTCSessionInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.pTCSessionInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_VoipLIC_header(value, elGetter);
}


/* eslint-enable */
