/* eslint-disable */
import {
    type BIT_STRING,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { CAMELSMSInformation, _decode_CAMELSMSInformation, _encode_CAMELSMSInformation } from "../CSChargingDataTypes/CAMELSMSInformation.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";


/**
 * @summary MOSMSRecord
 * @description
 *
 * Mobile-originated short-message CDR. When enabled, the originating MSC
 * produces one for each short message a mobile subscriber sends. For an
 * MSISDN-less subscription, `servedMSISDN` holds the dummy MSISDN defined in
 * TS 23.003.
 *
 * SMS over SGs delivers the message in E-UTRAN NAS signalling via the SGs
 * interface between the MME and the MSC/VLR (clause 5.1.3.16). The cell
 * identity then holds the 16 least significant bits of the E-UTRAN cell
 * identity, the tracking area code is placed in the location-area field, and
 * the 12 most significant bits are `locationExtension`. `systemType` is
 * `unknown` for E-UTRAN delivery, and it is omitted when a GSM air interface
 * provides the service.
 *
 * `originationTime` is when the MSC received the message from the
 * subscriber. `cAMELSMSInformation` is present only if CAMEL is applied.
 * Where this MSC is also the interworking MSC, an SMS-MO interworking CDR is
 * generated as well.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.16 and 6.1.3.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOSMSRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    servedIMSI            [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI            [2] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN          [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msClassmark           [4] IMPLICIT OCTET STRING,
 *    serviceCentre         [5] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    recordingEntity       [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    location              [7] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    messageReference      [8] IMPLICIT OCTET STRING,
 *    originationTime       [9] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult             [10] HLRIntResult OPTIONAL,
 *    recordExtensions      [11] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    destinationNumber     [12] IMPLICIT OCTET STRING OPTIONAL,
 *    cAMELSMSInformation   [13] IMPLICIT CAMELSMSInformation OPTIONAL,
 *    systemType            [14] IMPLICIT SystemType OPTIONAL,
 *    locationExtension     [15] IMPLICIT BIT STRING ( SIZE( 12 ) ) OPTIONAL}
 * ```
 * @class
 */
export
class MOSMSRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. SMS-Mobile originated.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * The field identifies the type of the record e.g. mobile originated,
     * mobile terminated etc.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.72.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The IMSI of the subscriber sending
     * the short message.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This fields contains the international mobile subscriber identity (IMSI)
     * of the served party. The term "served" party is used to describe the
     * mobile subscriber involved in the transaction recorded e.g. the calling
     * subscriber in case of an MOC record. The structure of the IMSI is defined
     * in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.79.
     *
     * @public
     * @readonly
     */
    readonly servedIMSI: OCTET_STRING;
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * 2G, 3G, and SMS over SGs operator-provisionable conditional. The IMEI of
     * the ME sending the message, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This fields contains the international mobile equipment identity (IMEI)
     * or IMEISV of the equipment served. The term "served" equipment is used to
     * describe the ME involved in the transaction recorded e.g. the called ME
     * in case of an MTC record. The structure of the IMEI, IMEISV is specified
     * in TS 23.003 [200] and the encoding defined in TS 29.274 [223].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.78.
     *
     * @public
     * @readonly
     */
    readonly servedIMEI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G, 3G, and SMS over SGs operator-provisionable mandatory. The primary
     * MSISDN of the subscriber sending the message. For MSISDN-less
     * subscription, this field holds the Dummy MSISDN as defined in TS 23.003
     * [104].
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This fields contains the mobile station ISDN number (MSISDN) of the
     * served party. The term "served" party is used to describe the mobile
     * subscriber involved in the transaction recorded e.g. the called
     * subscriber in case of an MTC record. In case of multi-numbering the
     * MSISDN stored in a MOC record will be the primary MSISDN of the calling
     * party. The structure of the MSISDN is defined in TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.80.
     *
     * @public
     * @readonly
     */
    readonly servedMSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `msClassmark`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The mobile station classmark.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly msClassmark: OCTET_STRING;
    /**
     * @summary `serviceCentre`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The address (E.164) of the
     * SMS-service centre.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly serviceCentre: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The E.164 number of the visited MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This field contains the E.164 [308] number assigned to the entity (MSC,
     * VLR, HLR etc.) that produced the record. For further details concerning
     * the structure of MSC and location register numbers see TS 23.003 [200].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.73.
     *
     * @public
     * @readonly
     */
    readonly recordingEntity: OCTET_STRING;
    /**
     * @summary `location`.
     * @description
     *
     * 2G, 3G, and SMS over SGs operator-provisionable mandatory. The Location
     * Area Code and Cell Identity / Service Area Code and MCC+MNC from which
     * the message originated. The Cell Identity contains the 16 least
     * significant bits and the Tracking Area Code is placed in the Location
     * Area Code filed if E-UTRAN is used to deliver the SMS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `messageReference`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. A reference, provided by the MS
     * uniquely identifying this message.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This field contains a unique message reference number allocated by the
     * mobile station when transmitting a short message to the service centre.
     * This field corresponds to the TP-Message-Reference element of the
     * SMS_SUBMIT PDU defined in TS 23.040 [201].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.53.
     *
     * @public
     * @readonly
     */
    readonly messageReference: OCTET_STRING;
    /**
     * @summary `originationTime`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. Origination time: The time at which
     * the message was received by the MSC from the subscriber.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly originationTime: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @description
     *
     * 2G, 3G, and SMS over SGs conditional. The result of the attempted
     * delivery if unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly smsResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G, 3G, and SMS over SGs operator-provisionable conditional. A set of
     * network/ manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * The field enables network operators and/ or manufacturers to add their
     * own extensions to the standard record definitions.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.71.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;
    /**
     * @summary `destinationNumber`.
     * @description
     *
     * 2G, 3G, and SMS over SGs operator-provisionable mandatory. The
     * destination number dialled by the MS sending the short message.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly destinationNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `cAMELSMSInformation`.
     * @description
     *
     * 2G, 3G, and SMS over SGs conditional. Set of CAMEL information IEs. Each
     * of these IEs contains information related to CAMEL call leg related for
     * the SMS. Shall be present only if CAMEL is applied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * @public
     * @readonly
     */
    readonly cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    /**
     * @summary `systemType`.
     * @description
     *
     * 2G not applicable, 3G mandatory, SMS over SGs mandatory. This field is
     * present when either the UTRAN or GERAN air-interface is used. It is
     * omitted when the service is provided by a GSM air interface. The field
     * shall be set to "unknown" for SMS delivery using E-UTRAN.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * This field indicates the use of GERAN, UTRAN (or a value of unknown).
     * This field is present when either the UTRAN or GERAN air-interface is
     * used on call set-up. For an open CDR in a 2G NE (responsible for the
     * CDR), the field is not present (even if the call is handed off to a 3G
     * air interface). For a CDR in a 3G NE (responsible for the CDR), the value
     * unknown shall be used after handover.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.91.
     *
     * @public
     * @readonly
     */
    readonly systemType: OPTIONAL<SystemType>;
    /**
     * @summary `locationExtension`.
     * @description
     *
     * 2G not applicable, 3G not applicable, SMS over SGs operator-provisionable
     * mandatory. The 12 most significant bits of the E-UTRAN Cell Identity are
     * included if E-UTRAN is used to deliver the SMS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.13.
     *
     * The Location Extension field contains the 12 most significant bits from
     * the Cell Identity field. This is used when SMS over SGs (defined in TS
     * 36.413 [226]) is applied and the access is E-UTRAN.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.46.
     *
     * @public
     * @readonly
     */
    readonly locationExtension: OPTIONAL<BIT_STRING>;

    constructor (
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msClassmark: OCTET_STRING,
        serviceCentre: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        location: OPTIONAL<LocationAreaAndCell>,
        messageReference: OCTET_STRING,
        originationTime: OCTET_STRING,
        smsResult?: OPTIONAL<HLRIntResult>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        destinationNumber?: OPTIONAL<OCTET_STRING>,
        cAMELSMSInformation?: OPTIONAL<CAMELSMSInformation>,
        systemType?: OPTIONAL<SystemType>,
        locationExtension?: OPTIONAL<BIT_STRING>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msClassmark = msClassmark;
        this.serviceCentre = serviceCentre;
        this.recordingEntity = recordingEntity;
        this.location = location;
        this.messageReference = messageReference;
        this.originationTime = originationTime;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
        this.destinationNumber = destinationNumber;
        this.cAMELSMSInformation = cAMELSMSInformation;
        this.systemType = systemType;
        this.locationExtension = locationExtension;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MOSMSRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MOSMSRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MOSMSRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.serviceCentre.length < 1 || this.serviceCentre.length > 20)) {
            throw new ASN1SizeError("MOSMSRecord.serviceCentre violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MOSMSRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.originationTime.length !== 9)) {
            throw new ASN1SizeError("MOSMSRecord.originationTime violates SIZE constraint");
        }
        if (this.locationExtension !== undefined && (this.locationExtension.length !== 12)) {
            throw new ASN1SizeError("MOSMSRecord.locationExtension violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MOSMSRecord
     * @description
     *
     * This takes an `object` and converts it to a `MOSMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOSMSRecord`.
     * @returns {MOSMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (MOSMSRecord)]: (MOSMSRecord)[_K] }): MOSMSRecord {
        return new MOSMSRecord(_o.recordType, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msClassmark, _o.serviceCentre, _o.recordingEntity, _o.location, _o.messageReference, _o.originationTime, _o.smsResult, _o.recordExtensions, _o.destinationNumber, _o.cAMELSMSInformation, _o.systemType, _o.locationExtension);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of MOSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("msClassmark", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceCentre", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("messageReference", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("originationTime", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("destinationNumber", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("cAMELSMSInformation", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("locationExtension", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of MOSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_MOSMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOSMSRecord: $.ASN1Decoder<MOSMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOSMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOSMSRecord (el: _Element): MOSMSRecord {
    if (!_cached_decoder_for_MOSMSRecord) { _cached_decoder_for_MOSMSRecord = function (el: _Element): MOSMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msClassmark!: OCTET_STRING;
    let serviceCentre!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let location: OPTIONAL<LocationAreaAndCell>;
    let messageReference!: OCTET_STRING;
    let originationTime!: OCTET_STRING;
    let smsResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let destinationNumber: OPTIONAL<OCTET_STRING>;
    let cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    let systemType: OPTIONAL<SystemType>;
    let locationExtension: OPTIONAL<BIT_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "messageReference": (_el: _Element): void => { messageReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originationTime": (_el: _Element): void => { originationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "destinationNumber": (_el: _Element): void => { destinationNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cAMELSMSInformation": (_el: _Element): void => { cAMELSMSInformation = $._decode_implicit<CAMELSMSInformation>(() => _decode_CAMELSMSInformation)(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "locationExtension": (_el: _Element): void => { locationExtension = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MOSMSRecord,
        _extension_additions_list_spec_for_MOSMSRecord,
        _root_component_type_list_2_spec_for_MOSMSRecord,
        undefined,
    );
    return new MOSMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msClassmark,
        serviceCentre,
        recordingEntity,
        location,
        messageReference,
        originationTime,
        smsResult,
        recordExtensions,
        destinationNumber,
        cAMELSMSInformation,
        systemType,
        locationExtension
    );
}; }
    return _cached_decoder_for_MOSMSRecord(el);
}

let _cached_encoder_for_MOSMSRecord: $.ASN1Encoder<MOSMSRecord> | null = null;

/**
 * @summary Encodes a(n) MOSMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOSMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MOSMSRecord (value: MOSMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOSMSRecord) { _cached_encoder_for_MOSMSRecord = function (value: MOSMSRecord, _elGetter: $.ASN1Encoder<MOSMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.messageReference, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.originationTime, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_HLRIntResult, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.destinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.destinationNumber, $.BER));
    }
    if (value.cAMELSMSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_CAMELSMSInformation, $.BER)(value.cAMELSMSInformation, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.locationExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBitString, $.BER)(value.locationExtension, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MOSMSRecord(value, elGetter);
}


/* eslint-enable */
