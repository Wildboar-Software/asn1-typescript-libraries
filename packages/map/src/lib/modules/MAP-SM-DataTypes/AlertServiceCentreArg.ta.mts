/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../MAP-CommonDataTypes/Time.ta.mjs";
import { SmsGmsc_Alert_Event, _enum_for_SmsGmsc_Alert_Event, SmsGmsc_Alert_Event_msAvailableForMtSms /* IMPORTED_LONG_ENUMERATION_ITEM */, msAvailableForMtSms /* IMPORTED_SHORT_ENUMERATION_ITEM */, SmsGmsc_Alert_Event_msUnderNewServingNode /* IMPORTED_LONG_ENUMERATION_ITEM */, msUnderNewServingNode /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SmsGmsc_Alert_Event, _encode_SmsGmsc_Alert_Event } from "../MAP-SM-DataTypes/SmsGmsc-Alert-Event.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary AlertServiceCentreArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertServiceCentreArg ::= SEQUENCE {
 *     msisdn    ISDN-AddressString,
 *     serviceCentreAddress    AddressString,
 *     ...,
 *     imsi    IMSI    OPTIONAL,
 *     correlationID    CorrelationID    OPTIONAL,
 *     maximumUeAvailabilityTime    [0] Time    OPTIONAL,
 *     smsGmscAlertEvent    [1] SmsGmsc-Alert-Event    OPTIONAL,
 *     smsGmscDiameterAddress    [2] NetworkNodeDiameterAddress    OPTIONAL,
 *     newSGSNNumber    [3] ISDN-AddressString    OPTIONAL,
 *     newSGSNDiameterAddress    [4] NetworkNodeDiameterAddress    OPTIONAL,
 *     newMMENumber    [5] ISDN-AddressString    OPTIONAL,
 *     newMMEDiameterAddress    [6] NetworkNodeDiameterAddress    OPTIONAL,
 *     newMSCNumber    [7] ISDN-AddressString    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AlertServiceCentreArg {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `serviceCentreAddress`.
         * @public
         * @readonly
         */
        readonly serviceCentreAddress: AddressString,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `maximumUeAvailabilityTime`.
         * @public
         * @readonly
         */
        readonly maximumUeAvailabilityTime: OPTIONAL<Time>,
        /**
         * @summary `smsGmscAlertEvent`.
         * @public
         * @readonly
         */
        readonly smsGmscAlertEvent: OPTIONAL<SmsGmsc_Alert_Event>,
        /**
         * @summary `smsGmscDiameterAddress`.
         * @public
         * @readonly
         */
        readonly smsGmscDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `newSGSNNumber`.
         * @public
         * @readonly
         */
        readonly newSGSNNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `newSGSNDiameterAddress`.
         * @public
         * @readonly
         */
        readonly newSGSNDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `newMMENumber`.
         * @public
         * @readonly
         */
        readonly newMMENumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `newMMEDiameterAddress`.
         * @public
         * @readonly
         */
        readonly newMMEDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `newMSCNumber`.
         * @public
         * @readonly
         */
        readonly newMSCNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AlertServiceCentreArg
     * @description
     * 
     * This takes an `object` and converts it to a `AlertServiceCentreArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlertServiceCentreArg`.
     * @returns {AlertServiceCentreArg}
     */
    public static _from_object (_o: { [_K in keyof (AlertServiceCentreArg)]: (AlertServiceCentreArg)[_K] }): AlertServiceCentreArg {
        return new AlertServiceCentreArg(_o.msisdn, _o.serviceCentreAddress, _o.imsi, _o.correlationID, _o.maximumUeAvailabilityTime, _o.smsGmscAlertEvent, _o.smsGmscDiameterAddress, _o.newSGSNNumber, _o.newSGSNDiameterAddress, _o.newMMENumber, _o.newMMEDiameterAddress, _o.newMSCNumber, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `smsGmscAlertEvent`
         * @public
         * @static
         */

    public static _enum_for_smsGmscAlertEvent = _enum_for_SmsGmsc_Alert_Event;
}

/**
 * @summary The Leading Root Component Types of AlertServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlertServiceCentreArg: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("serviceCentreAddress", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of AlertServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlertServiceCentreArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlertServiceCentreArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlertServiceCentreArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("maximumUeAvailabilityTime", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("smsGmscAlertEvent", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("smsGmscDiameterAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("newSGSNNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("newSGSNDiameterAddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("newMMENumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("newMMEDiameterAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("newMSCNumber", true, $.hasTag(_TagClass.context, 7))
];

let _cached_decoder_for_AlertServiceCentreArg: $.ASN1Decoder<AlertServiceCentreArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertServiceCentreArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlertServiceCentreArg (el: _Element): AlertServiceCentreArg {
    if (!_cached_decoder_for_AlertServiceCentreArg) { _cached_decoder_for_AlertServiceCentreArg = function (el: _Element): AlertServiceCentreArg {
    let msisdn!: ISDN_AddressString;
    let serviceCentreAddress!: AddressString;
    let imsi: OPTIONAL<IMSI> = undefined;
    let correlationID: OPTIONAL<CorrelationID> = undefined;
    let maximumUeAvailabilityTime: OPTIONAL<Time> = undefined;
    let smsGmscAlertEvent: OPTIONAL<SmsGmsc_Alert_Event> = undefined;
    let smsGmscDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress> = undefined;
    let newSGSNNumber: OPTIONAL<ISDN_AddressString> = undefined;
    let newSGSNDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress> = undefined;
    let newMMENumber: OPTIONAL<ISDN_AddressString> = undefined;
    let newMMEDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress> = undefined;
    let newMSCNumber: OPTIONAL<ISDN_AddressString> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = _decode_ISDN_AddressString(_el); },
        "serviceCentreAddress": (_el: _Element): void => { serviceCentreAddress = _decode_AddressString(_el); },
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "correlationID": (_el: _Element): void => { correlationID = _decode_CorrelationID(_el); },
        "maximumUeAvailabilityTime": (_el: _Element): void => { maximumUeAvailabilityTime = $._decode_implicit<Time>(() => _decode_Time)(_el); },
        "smsGmscAlertEvent": (_el: _Element): void => { smsGmscAlertEvent = $._decode_implicit<SmsGmsc_Alert_Event>(() => _decode_SmsGmsc_Alert_Event)(_el); },
        "smsGmscDiameterAddress": (_el: _Element): void => { smsGmscDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "newSGSNNumber": (_el: _Element): void => { newSGSNNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "newSGSNDiameterAddress": (_el: _Element): void => { newSGSNDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "newMMENumber": (_el: _Element): void => { newMMENumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "newMMEDiameterAddress": (_el: _Element): void => { newMMEDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "newMSCNumber": (_el: _Element): void => { newMSCNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlertServiceCentreArg,
        _extension_additions_list_spec_for_AlertServiceCentreArg,
        _root_component_type_list_2_spec_for_AlertServiceCentreArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AlertServiceCentreArg(
        msisdn,
        serviceCentreAddress,
        imsi,
        correlationID,
        maximumUeAvailabilityTime,
        smsGmscAlertEvent,
        smsGmscDiameterAddress,
        newSGSNNumber,
        newSGSNDiameterAddress,
        newMMENumber,
        newMMEDiameterAddress,
        newMSCNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AlertServiceCentreArg(el);
}

let _cached_encoder_for_AlertServiceCentreArg: $.ASN1Encoder<AlertServiceCentreArg> | null = null;

/**
 * @summary Encodes a(n) AlertServiceCentreArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertServiceCentreArg, encoded as an ASN.1 Element.
 */
export
function _encode_AlertServiceCentreArg (value: AlertServiceCentreArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlertServiceCentreArg) { _cached_encoder_for_AlertServiceCentreArg = function (value: AlertServiceCentreArg, elGetter: $.ASN1Encoder<AlertServiceCentreArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.msisdn, $.BER),
            /* REQUIRED   */ _encode_AddressString(value.serviceCentreAddress, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : _encode_IMSI(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : _encode_CorrelationID(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.maximumUeAvailabilityTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Time, $.BER)(value.maximumUeAvailabilityTime, $.BER)),
            /* IF_ABSENT  */ ((value.smsGmscAlertEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SmsGmsc_Alert_Event, $.BER)(value.smsGmscAlertEvent, $.BER)),
            /* IF_ABSENT  */ ((value.smsGmscDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.smsGmscDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.newSGSNNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.newSGSNNumber, $.BER)),
            /* IF_ABSENT  */ ((value.newSGSNDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.newSGSNDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.newMMENumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ISDN_AddressString, $.BER)(value.newMMENumber, $.BER)),
            /* IF_ABSENT  */ ((value.newMMEDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.newMMEDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.newMSCNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ISDN_AddressString, $.BER)(value.newMSCNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlertServiceCentreArg(value, elGetter);
}


/* eslint-enable */
