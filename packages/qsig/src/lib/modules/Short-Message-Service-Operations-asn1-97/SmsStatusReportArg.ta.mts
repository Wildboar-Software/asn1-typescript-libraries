/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MessageReference, _decode_MessageReference, _encode_MessageReference } from "../Short-Message-Service-Operations-asn1-97/MessageReference.ta.mjs";
import { type ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";
import { type DischargeTime, _decode_DischargeTime, _encode_DischargeTime } from "../Short-Message-Service-Operations-asn1-97/DischargeTime.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type Status, _decode_Status, _encode_Status } from "../Short-Message-Service-Operations-asn1-97/Status.ta.mjs";
import { type ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../Short-Message-Service-Operations-asn1-97/UserData.ta.mjs";
import { type SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary SmsStatusReportArg
 * @description
 *
 * Argument of `smsStatusReport` (ECMA-325 §6.5.3.1.3, Annex E.7). Reports the
 * outcome of an earlier `smsSubmit` or `smsCommand`. Tags on the name and the
 * three booleans are the 25 September 2001 errata, so they stay distinct from
 * `PartyNumber` and from each other.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
     * @description
     *
     * Reference of the `smsSubmit` or `smsCommand` this report is about. For an
     * Enquiry it is that command's `messageNumber`, the original Short Message
     * reference, not the command's own reference (ECMA-325 §E.7.1, §6.5.3.1.3).
     * @public
     * @readonly
     */
    readonly messageReference: MessageReference;
    /**
     * @summary `serviceCentreTimeStamp`.
     * @description
     *
     * Time stamp of the Short Message this report is about, so the Sending User
     * can match the report to the submit (ECMA-325 §E.7.2).
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `dischargeTime`.
     * @description
     *
     * When the Short Message was delivered, delivery was attempted, or the
     * Service Centre disposed of it. For a completed transaction, the
     * completion time. While the Service Centre is still trying, the last
     * attempt. For a permanent or temporary error with no further attempts,
     * either the last attempt or the time the Service Centre disposed of the
     * Short Message, following `status` (ECMA-325 §E.7.3).
     * @public
     * @readonly
     */
    readonly dischargeTime: DischargeTime;
    /**
     * @summary `recipientAddress`.
     * @description
     *
     * Address of the Receiving User of the previously submitted Short Message
     * (ECMA-325 §E.7.4).
     * @public
     * @readonly
     */
    readonly recipientAddress: PartyNumber;
    /**
     * @summary `recipientName`.
     * @description
     *
     * Name of that Receiving User, when the Service Centre has it and name
     * restriction allows it (ECMA-325 §E.7.5).
     * @public
     * @readonly
     */
    readonly recipientName: OPTIONAL<Name>;
    /**
     * @summary `destinationAddress`.
     * @description
     *
     * Present in the argument (ECMA-325 §6.3.1). Annex E.7 defines the other
     * elements and is silent on this one.
     * @public
     * @readonly
     */
    readonly destinationAddress: PartyNumber;
    /**
     * @summary `status`.
     * @description
     *
     * Outcome of the previous Short Message or Command (ECMA-325 §E.7.6).
     * Defined integers are on `Status`. §6.5 also names
     * `smValidityPeriodExpired` and `errorInSme`, which Table E.5 does not list
     * as those spellings.
     * @public
     * @readonly
     */
    readonly status: Status;
    /**
     * @summary `priority`.
     * @description
     *
     * Same rule as on `smsDeliver` (ECMA-325 §E.7.7, §E.4.2.3). Default FALSE:
     * transfer should stop when the Service Centre address is already in Short
     * Message Waiting Data.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<BOOLEAN>;
    /**
     * @summary `moreMessagesToSend`.
     * @description
     *
     * Same rule as on `smsDeliver` (ECMA-325 §E.7.8, §E.4.2.4). Default FALSE.
     * TRUE means more Short Messages or Status Reports are waiting in this
     * Service Centre.
     * @public
     * @readonly
     */
    readonly moreMessagesToSend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `statusReportQualifier`.
     * @description
     *
     * Default FALSE: this report comes from a Short Message. TRUE: it comes
     * from a Command, for example an Enquiry (ECMA-325 §E.7.9).
     * @public
     * @readonly
     */
    readonly statusReportQualifier: OPTIONAL<BOOLEAN>;
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * The `protocolIdentifier` of the related `smsSubmit` (ECMA-325 §E.7.10).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: OPTIONAL<ProtocolIdentifier>;
    /**
     * @summary `userData`.
     * @description
     *
     * When present, includes `userData` from the `smsDeliver` return result.
     * The Service Centre may add headers after a `dataHeaderSourceIndicator`
     * (ECMA-325 §E.7.11).
     * @public
     * @readonly
     */
    readonly userData: OPTIONAL<UserData>;
    /**
     * @summary `smsExtension`.
     * @description
     *
     * Manufacturer-specific extension. This edition defines none in `SmsExtSet`
     * (ECMA-325 §6.3.1).
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
        priority?: OPTIONAL<BOOLEAN>,
        moreMessagesToSend?: OPTIONAL<BOOLEAN>,
        statusReportQualifier?: OPTIONAL<BOOLEAN>,
        protocolIdentifier?: OPTIONAL<ProtocolIdentifier>,
        userData?: OPTIONAL<UserData>,
        smsExtension?: OPTIONAL<SmsExtension>
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
