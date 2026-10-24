/* eslint-disable */
import {
    type IA5String,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGQoSInformation, _decode_FiveGQoSInformation, _encode_FiveGQoSInformation } from "../CHFChargingDataTypes/FiveGQoSInformation.ta.mjs";
import { PresenceReportingAreaInfo, _decode_PresenceReportingAreaInfo, _encode_PresenceReportingAreaInfo } from "../CHFChargingDataTypes/PresenceReportingAreaInfo.ta.mjs";
import { ServingNetworkFunctionID, _decode_ServingNetworkFunctionID, _encode_ServingNetworkFunctionID } from "../CHFChargingDataTypes/ServingNetworkFunctionID.ta.mjs";
import { ThreeGPPPSDataOffStatus, _decode_ThreeGPPPSDataOffStatus, _encode_ThreeGPPPSDataOffStatus, _enum_for_ThreeGPPPSDataOffStatus } from "../CHFChargingDataTypes/ThreeGPPPSDataOffStatus.ta.mjs";


/**
 * @summary PDUContainerInformation
 * @description
 *
 * This field holds the 5G data connectivity specific information described
 * in TS 32.255 [15].
 *
 * 3GPP TS 32.298 V20.1.0 table 5.1.5.0.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUContainerInformation ::= SEQUENCE {
 *    chargingRuleBaseName                 [0] IMPLICIT IA5String  OPTIONAL,
 *    aFCorrelationInformation             [1] IMPLICIT OCTET STRING OPTIONAL,
 *    timeOfFirstUsage                     [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    timeOfLastUsage                      [3] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    qoSInformation                       [4] IMPLICIT FiveGQoSInformation OPTIONAL,
 *    userLocationInformation              [5] IMPLICIT OCTET STRING OPTIONAL,
 *    presenceReportingAreaInfo            [6] IMPLICIT PresenceReportingAreaInfo OPTIONAL,
 *    rATType                              [7] IMPLICIT INTEGER ( 0 .. 255 ) OPTIONAL,
 *    sponsorIdentity                      [8] IMPLICIT OCTET STRING OPTIONAL,
 *    applicationServiceProviderIdentity   [9] IMPLICIT OCTET STRING OPTIONAL,
 *    servingNetworkFunctionID             [10] IMPLICIT SEQUENCE  OF
 *       ServingNetworkFunctionID OPTIONAL,
 *    uETimeZone                           [11] IMPLICIT OCTET STRING ( SIZE( 2 ) ) OPTIONAL,
 *    threeGPPPSDataOffStatus              [12] IMPLICIT ThreeGPPPSDataOffStatus OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PDUContainerInformation {
    /**
     * @summary `chargingRuleBaseName`.
     * @public
     * @readonly
     */
    readonly chargingRuleBaseName: OPTIONAL<IA5String>;
    /**
     * @summary `aFCorrelationInformation`.
     * @public
     * @readonly
     */
    readonly aFCorrelationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfFirstUsage`.
     * @public
     * @readonly
     */
    readonly timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `timeOfLastUsage`.
     * @public
     * @readonly
     */
    readonly timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qoSInformation`.
     * @public
     * @readonly
     */
    readonly qoSInformation: OPTIONAL<FiveGQoSInformation>;
    /**
     * @summary `userLocationInformation`.
     * @description
     *
     * This field contains the User Location as described in TS 29.571 [249].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.15.
     *
     * @public
     * @readonly
     */
    readonly userLocationInformation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `presenceReportingAreaInfo`.
     * @public
     * @readonly
     */
    readonly presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    /**
     * @summary `rATType`.
     * @description
     *
     * This field contains the Radio Access Technology (RAT) type used, as
     * provided to CHF, it's based on the RatType specified in TS 29.571 [249]
     * with 3GPP RAT Type specified in TS 29.061 [216] added for backwards
     * compatibility.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.17.
     *
     * @public
     * @readonly
     */
    readonly rATType: OPTIONAL<INTEGER>;
    /**
     * @summary `sponsorIdentity`.
     * @public
     * @readonly
     */
    readonly sponsorIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `applicationServiceProviderIdentity`.
     * @public
     * @readonly
     */
    readonly applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servingNetworkFunctionID`.
     * @public
     * @readonly
     */
    readonly servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    /**
     * @summary `uETimeZone`.
     * @public
     * @readonly
     */
    readonly uETimeZone: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `threeGPPPSDataOffStatus`.
     * @public
     * @readonly
     */
    readonly threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;

    constructor (
        chargingRuleBaseName?: OPTIONAL<IA5String>,
        aFCorrelationInformation?: OPTIONAL<OCTET_STRING>,
        timeOfFirstUsage?: OPTIONAL<OCTET_STRING>,
        timeOfLastUsage?: OPTIONAL<OCTET_STRING>,
        qoSInformation?: OPTIONAL<FiveGQoSInformation>,
        userLocationInformation?: OPTIONAL<OCTET_STRING>,
        presenceReportingAreaInfo?: OPTIONAL<PresenceReportingAreaInfo>,
        rATType?: OPTIONAL<INTEGER>,
        sponsorIdentity?: OPTIONAL<OCTET_STRING>,
        applicationServiceProviderIdentity?: OPTIONAL<OCTET_STRING>,
        servingNetworkFunctionID?: OPTIONAL<ServingNetworkFunctionID[]>,
        uETimeZone?: OPTIONAL<OCTET_STRING>,
        threeGPPPSDataOffStatus?: OPTIONAL<ThreeGPPPSDataOffStatus>
    ) {
        this.chargingRuleBaseName = chargingRuleBaseName;
        this.aFCorrelationInformation = aFCorrelationInformation;
        this.timeOfFirstUsage = timeOfFirstUsage;
        this.timeOfLastUsage = timeOfLastUsage;
        this.qoSInformation = qoSInformation;
        this.userLocationInformation = userLocationInformation;
        this.presenceReportingAreaInfo = presenceReportingAreaInfo;
        this.rATType = rATType;
        this.sponsorIdentity = sponsorIdentity;
        this.applicationServiceProviderIdentity = applicationServiceProviderIdentity;
        this.servingNetworkFunctionID = servingNetworkFunctionID;
        this.uETimeZone = uETimeZone;
        this.threeGPPPSDataOffStatus = threeGPPPSDataOffStatus;
    
        if (this.timeOfFirstUsage !== undefined && (this.timeOfFirstUsage.length !== 9)) {
            throw new ASN1SizeError("PDUContainerInformation.timeOfFirstUsage violates SIZE constraint");
        }
        if (this.timeOfLastUsage !== undefined && (this.timeOfLastUsage.length !== 9)) {
            throw new ASN1SizeError("PDUContainerInformation.timeOfLastUsage violates SIZE constraint");
        }
        if (this.rATType !== undefined && (this.rATType < 0 || this.rATType > 255)) {
            throw new ASN1OverflowError("PDUContainerInformation.rATType violates INTEGER range");
        }
        if (this.uETimeZone !== undefined && (this.uETimeZone.length !== 2)) {
            throw new ASN1SizeError("PDUContainerInformation.uETimeZone violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a PDUContainerInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PDUContainerInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUContainerInformation`.
     * @returns {PDUContainerInformation}
     */
    public static _from_object (_o: { [_K in keyof (PDUContainerInformation)]: (PDUContainerInformation)[_K] }): PDUContainerInformation {
        return new PDUContainerInformation(_o.chargingRuleBaseName, _o.aFCorrelationInformation, _o.timeOfFirstUsage, _o.timeOfLastUsage, _o.qoSInformation, _o.userLocationInformation, _o.presenceReportingAreaInfo, _o.rATType, _o.sponsorIdentity, _o.applicationServiceProviderIdentity, _o.servingNetworkFunctionID, _o.uETimeZone, _o.threeGPPPSDataOffStatus);
    }

        /**
         * @summary The enum used as the type of the component `threeGPPPSDataOffStatus`
         * @public
         * @static
         */

    public static _enum_for_threeGPPPSDataOffStatus = _enum_for_ThreeGPPPSDataOffStatus;
}

/**
 * @summary The Leading Root Component Types of PDUContainerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDUContainerInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingRuleBaseName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aFCorrelationInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeOfFirstUsage", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfLastUsage", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("qoSInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("userLocationInformation", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("presenceReportingAreaInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sponsorIdentity", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("applicationServiceProviderIdentity", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("servingNetworkFunctionID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("uETimeZone", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("threeGPPPSDataOffStatus", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of PDUContainerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDUContainerInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDUContainerInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDUContainerInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDUContainerInformation: $.ASN1Decoder<PDUContainerInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUContainerInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUContainerInformation (el: _Element): PDUContainerInformation {
    if (!_cached_decoder_for_PDUContainerInformation) { _cached_decoder_for_PDUContainerInformation = function (el: _Element): PDUContainerInformation {
    let chargingRuleBaseName: OPTIONAL<IA5String>;
    let aFCorrelationInformation: OPTIONAL<OCTET_STRING>;
    let timeOfFirstUsage: OPTIONAL<OCTET_STRING>;
    let timeOfLastUsage: OPTIONAL<OCTET_STRING>;
    let qoSInformation: OPTIONAL<FiveGQoSInformation>;
    let userLocationInformation: OPTIONAL<OCTET_STRING>;
    let presenceReportingAreaInfo: OPTIONAL<PresenceReportingAreaInfo>;
    let rATType: OPTIONAL<INTEGER>;
    let sponsorIdentity: OPTIONAL<OCTET_STRING>;
    let applicationServiceProviderIdentity: OPTIONAL<OCTET_STRING>;
    let servingNetworkFunctionID: OPTIONAL<ServingNetworkFunctionID[]>;
    let uETimeZone: OPTIONAL<OCTET_STRING>;
    let threeGPPPSDataOffStatus: OPTIONAL<ThreeGPPPSDataOffStatus>;
    const callbacks: $.DecodingMap = {
        "chargingRuleBaseName": (_el: _Element): void => { chargingRuleBaseName = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "aFCorrelationInformation": (_el: _Element): void => { aFCorrelationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfFirstUsage": (_el: _Element): void => { timeOfFirstUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "timeOfLastUsage": (_el: _Element): void => { timeOfLastUsage = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qoSInformation": (_el: _Element): void => { qoSInformation = $._decode_implicit<FiveGQoSInformation>(() => _decode_FiveGQoSInformation)(_el); },
        "userLocationInformation": (_el: _Element): void => { userLocationInformation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "presenceReportingAreaInfo": (_el: _Element): void => { presenceReportingAreaInfo = $._decode_implicit<PresenceReportingAreaInfo>(() => _decode_PresenceReportingAreaInfo)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sponsorIdentity": (_el: _Element): void => { sponsorIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "applicationServiceProviderIdentity": (_el: _Element): void => { applicationServiceProviderIdentity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servingNetworkFunctionID": (_el: _Element): void => { servingNetworkFunctionID = $._decode_implicit<ServingNetworkFunctionID[]>(() => $._decodeSequenceOf<ServingNetworkFunctionID>(() => _decode_ServingNetworkFunctionID))(_el); },
        "uETimeZone": (_el: _Element): void => { uETimeZone = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "threeGPPPSDataOffStatus": (_el: _Element): void => { threeGPPPSDataOffStatus = $._decode_implicit<ThreeGPPPSDataOffStatus>(() => _decode_ThreeGPPPSDataOffStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDUContainerInformation,
        _extension_additions_list_spec_for_PDUContainerInformation,
        _root_component_type_list_2_spec_for_PDUContainerInformation,
        undefined,
    );
    return new PDUContainerInformation(
        chargingRuleBaseName,
        aFCorrelationInformation,
        timeOfFirstUsage,
        timeOfLastUsage,
        qoSInformation,
        userLocationInformation,
        presenceReportingAreaInfo,
        rATType,
        sponsorIdentity,
        applicationServiceProviderIdentity,
        servingNetworkFunctionID,
        uETimeZone,
        threeGPPPSDataOffStatus
    );
}; }
    return _cached_decoder_for_PDUContainerInformation(el);
}

let _cached_encoder_for_PDUContainerInformation: $.ASN1Encoder<PDUContainerInformation> | null = null;

/**
 * @summary Encodes a(n) PDUContainerInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUContainerInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PDUContainerInformation (value: PDUContainerInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUContainerInformation) { _cached_encoder_for_PDUContainerInformation = function (value: PDUContainerInformation, _elGetter: $.ASN1Encoder<PDUContainerInformation>): _Element {
    const _components: _Element[] = [];
    if (value.chargingRuleBaseName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER)(value.chargingRuleBaseName, $.BER));
    }
    if (value.aFCorrelationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.aFCorrelationInformation, $.BER));
    }
    if (value.timeOfFirstUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.timeOfFirstUsage, $.BER));
    }
    if (value.timeOfLastUsage !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.timeOfLastUsage, $.BER));
    }
    if (value.qoSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FiveGQoSInformation, $.BER)(value.qoSInformation, $.BER));
    }
    if (value.userLocationInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.userLocationInformation, $.BER));
    }
    if (value.presenceReportingAreaInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PresenceReportingAreaInfo, $.BER)(value.presenceReportingAreaInfo, $.BER));
    }
    if (value.rATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.rATType, $.BER));
    }
    if (value.sponsorIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.sponsorIdentity, $.BER));
    }
    if (value.applicationServiceProviderIdentity !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.applicationServiceProviderIdentity, $.BER));
    }
    if (value.servingNetworkFunctionID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ServingNetworkFunctionID>(() => _encode_ServingNetworkFunctionID, $.BER), $.BER)(value.servingNetworkFunctionID, $.BER));
    }
    if (value.uETimeZone !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.uETimeZone, $.BER));
    }
    if (value.threeGPPPSDataOffStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ThreeGPPPSDataOffStatus, $.BER)(value.threeGPPPSDataOffStatus, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDUContainerInformation(value, elGetter);
}


/* eslint-enable */
