/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MessageReference, _decode_MessageReference, _encode_MessageReference } from "../Short-Message-Service-Operations-asn1-97/MessageReference.ta.mjs";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { DischargeTime, _decode_DischargeTime, _encode_DischargeTime } from "../Short-Message-Service-Operations-asn1-97/DischargeTime.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { Status, _decode_Status, _encode_Status } from "../Short-Message-Service-Operations-asn1-97/Status.ta.mjs";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary SmsStatusReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsStatusReportArg ::= SEQUENCE {
 *     messageReference MessageReference,
 *     serviceCentreTimeStamp ServiceCentreTimeStamp,
 *     dischargeTime DischargeTime,
 *     recipientAddress PartyNumber,
 *     recipientName [10] Name OPTIONAL,
 *     destinationAddress PartyNumber,
 *     status Status,
 *     priority [11] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     moreMessagesToSend [12] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     statusReportQualifier [13] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     protocolIdentifier ProtocolIdentifier OPTIONAL,
 *     userData UserData OPTIONAL,
 *     smsExtension SmsExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SmsStatusReportArg {
    /**
     * @summary `messageReference`.
     * @public
     * @readonly
     */
    readonly messageReference: MessageReference;
    /**
     * @summary `serviceCentreTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `dischargeTime`.
     * @public
     * @readonly
     */
    readonly dischargeTime: DischargeTime;
    /**
     * @summary `recipientAddress`.
     * @public
     * @readonly
     */
    readonly recipientAddress: PartyNumber;
    /**
     * @summary `recipientName`.
     * @public
     * @readonly
     */
    readonly recipientName: OPTIONAL<Name>;
    /**
     * @summary `destinationAddress`.
     * @public
     * @readonly
     */
    readonly destinationAddress: PartyNumber;
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: Status;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<BOOLEAN>;
    /**
     * @summary `moreMessagesToSend`.
     * @public
     * @readonly
     */
    readonly moreMessagesToSend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `statusReportQualifier`.
     * @public
     * @readonly
     */
    readonly statusReportQualifier: OPTIONAL<BOOLEAN>;
    /**
     * @summary `protocolIdentifier`.
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @public
     * @readonly
     */
    readonly userData: OPTIONAL<UserData>;
    /**
     * @summary `smsExtension`.
     * @public
     * @readonly
     */
    readonly smsExtension: OPTIONAL<SmsExtension>;

    constructor (
        messageReference: MessageReference,
        serviceCentreTimeStamp: ServiceCentreTimeStamp,
        dischargeTime: DischargeTime,
        recipientAddress: PartyNumber,
        recipientName: OPTIONAL<Name>,
        destinationAddress: PartyNumber,
        status: Status,
        priority: OPTIONAL<BOOLEAN>,
        moreMessagesToSend: OPTIONAL<BOOLEAN>,
        statusReportQualifier: OPTIONAL<BOOLEAN>,
        protocolIdentifier: OPTIONAL<ProtocolIdentifier>,
        userData: OPTIONAL<UserData>,
        smsExtension: OPTIONAL<SmsExtension>
    ) {
        this.messageReference = messageReference;
        this.serviceCentreTimeStamp = serviceCentreTimeStamp;
        this.dischargeTime = dischargeTime;
        this.recipientAddress = recipientAddress;
        this.recipientName = recipientName;
        this.destinationAddress = destinationAddress;
        this.status = status;
        this.priority = priority;
        this.moreMessagesToSend = moreMessagesToSend;
        this.statusReportQualifier = statusReportQualifier;
        this.protocolIdentifier = protocolIdentifier;
        this.userData = userData;
        this.smsExtension = smsExtension;
    }

    /**
     * @summary Restructures an object into a SmsStatusReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `SmsStatusReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmsStatusReportArg`.
     * @returns {SmsStatusReportArg}
     */
    public static _from_object (_o: { [_K in keyof (SmsStatusReportArg)]: (SmsStatusReportArg)[_K] }): SmsStatusReportArg {
        return new SmsStatusReportArg(_o.messageReference, _o.serviceCentreTimeStamp, _o.dischargeTime, _o.recipientAddress, _o.recipientName, _o.destinationAddress, _o.status, _o.priority, _o.moreMessagesToSend, _o.statusReportQualifier, _o.protocolIdentifier, _o.userData, _o.smsExtension);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return false; }
    /**
     * @summary Getter that returns the default value for `moreMessagesToSend`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreMessagesToSend () { return false; }
    /**
     * @summary Getter that returns the default value for `statusReportQualifier`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_statusReportQualifier () { return false; }
}

/**
 * @summary The Leading Root Component Types of SmsStatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmsStatusReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("dischargeTime", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("recipientAddress", false, $.hasAnyTag),
    new $.ComponentSpec("recipientName", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("destinationAddress", false, $.hasAnyTag),
    new $.ComponentSpec("status", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("moreMessagesToSend", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("statusReportQualifier", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("protocolIdentifier", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smsExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of SmsStatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmsStatusReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmsStatusReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmsStatusReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmsStatusReportArg: $.ASN1Decoder<SmsStatusReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsStatusReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsStatusReportArg (el: _Element): SmsStatusReportArg {
    if (!_cached_decoder_for_SmsStatusReportArg) { _cached_decoder_for_SmsStatusReportArg = function (el: _Element): SmsStatusReportArg {
    let messageReference!: MessageReference;
    let serviceCentreTimeStamp!: ServiceCentreTimeStamp;
    let dischargeTime!: DischargeTime;
    let recipientAddress!: PartyNumber;
    let recipientName: OPTIONAL<Name>;
    let destinationAddress!: PartyNumber;
    let status!: Status;
    let priority: OPTIONAL<BOOLEAN> = SmsStatusReportArg._default_value_for_priority;
    let moreMessagesToSend: OPTIONAL<BOOLEAN> = SmsStatusReportArg._default_value_for_moreMessagesToSend;
    let statusReportQualifier: OPTIONAL<BOOLEAN> = SmsStatusReportArg._default_value_for_statusReportQualifier;
    let protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    let userData: OPTIONAL<UserData>;
    let smsExtension: OPTIONAL<SmsExtension>;
    const callbacks: $.DecodingMap = {
        "messageReference": (_el: _Element): void => { messageReference = _decode_MessageReference(_el); },
        "serviceCentreTimeStamp": (_el: _Element): void => { serviceCentreTimeStamp = _decode_ServiceCentreTimeStamp(_el); },
        "dischargeTime": (_el: _Element): void => { dischargeTime = _decode_DischargeTime(_el); },
        "recipientAddress": (_el: _Element): void => { recipientAddress = _decode_PartyNumber(_el); },
        "recipientName": (_el: _Element): void => { recipientName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_PartyNumber(_el); },
        "status": (_el: _Element): void => { status = _decode_Status(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "moreMessagesToSend": (_el: _Element): void => { moreMessagesToSend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "statusReportQualifier": (_el: _Element): void => { statusReportQualifier = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = _decode_ProtocolIdentifier(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "smsExtension": (_el: _Element): void => { smsExtension = _decode_SmsExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmsStatusReportArg,
        _extension_additions_list_spec_for_SmsStatusReportArg,
        _root_component_type_list_2_spec_for_SmsStatusReportArg,
        undefined,
    );
    return new SmsStatusReportArg(
        messageReference,
        serviceCentreTimeStamp,
        dischargeTime,
        recipientAddress,
        recipientName,
        destinationAddress,
        status,
        priority,
        moreMessagesToSend,
        statusReportQualifier,
        protocolIdentifier,
        userData,
        smsExtension
    );
}; }
    return _cached_decoder_for_SmsStatusReportArg(el);
}

let _cached_encoder_for_SmsStatusReportArg: $.ASN1Encoder<SmsStatusReportArg> | null = null;

/**
 * @summary Encodes a(n) SmsStatusReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsStatusReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_SmsStatusReportArg (value: SmsStatusReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsStatusReportArg) { _cached_encoder_for_SmsStatusReportArg = function (value: SmsStatusReportArg, _elGetter: $.ASN1Encoder<SmsStatusReportArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_MessageReference(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ _encode_ServiceCentreTimeStamp(value.serviceCentreTimeStamp, $.BER));
    _components.push(/* REQUIRED   */ _encode_DischargeTime(value.dischargeTime, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.recipientAddress, $.BER));
    if (value.recipientName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_Name, $.BER)(value.recipientName, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.destinationAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_Status(value.status, $.BER));
    if (value.priority !== undefined && !$.deepEq(value.priority, SmsStatusReportArg._default_value_for_priority)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.priority, $.BER));
    }
    if (value.moreMessagesToSend !== undefined && !$.deepEq(value.moreMessagesToSend, SmsStatusReportArg._default_value_for_moreMessagesToSend)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.moreMessagesToSend, $.BER));
    }
    if (value.statusReportQualifier !== undefined && !$.deepEq(value.statusReportQualifier, SmsStatusReportArg._default_value_for_statusReportQualifier)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.statusReportQualifier, $.BER));
    }
    if (value.protocolIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER));
    }
    if (value.userData !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UserData(value.userData, $.BER));
    }
    if (value.smsExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SmsExtension(value.smsExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmsStatusReportArg(value, elGetter);
}

/* eslint-enable */
