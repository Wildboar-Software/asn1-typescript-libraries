/* eslint-disable */
import {
    type BIT_STRING,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";
import { SystemType, _decode_SystemType, _encode_SystemType, _enum_for_SystemType } from "../CSChargingDataTypes/SystemType.ta.mjs";
import { CAMELSMSInformation, _decode_CAMELSMSInformation, _encode_CAMELSMSInformation } from "../CSChargingDataTypes/CAMELSMSInformation.ta.mjs";


/**
 * @summary MTSMSRecord
 * @description
 *
 * Mobile-terminated short-message CDR. When enabled, the terminating MSC
 * produces one for each short message received by a mobile subscriber.
 * `deliveryTime` is when the MSC sent the message to the MS.
 *
 * SMS over SGs uses the same E-UTRAN location split as SMS-MO: 16 least
 * significant cell-identity bits in the location, the tracking area code in
 * the location area, and the 12 most significant bits in
 * `locationExtension`. `systemType` is `unknown` for E-UTRAN, and it is
 * omitted for a GSM air interface. `msClassmark` is mandatory in 2G and
 * conditional in 3G and for SMS over SGs.
 *
 * `cAMELSMSInformation` is present only if CAMEL is applied. Where this MSC
 * is also the gateway MSC, an SMS-MT gateway CDR is generated as well.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.16 and 6.1.3.14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTSMSRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    serviceCentre         [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    servedIMSI            [2] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedIMEI            [3] IMPLICIT OCTET STRING ( SIZE( 8 ) ) OPTIONAL,
 *    servedMSISDN          [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    msClassmark           [5] IMPLICIT OCTET STRING,
 *    recordingEntity       [6] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    location              [7] IMPLICIT LocationAreaAndCell OPTIONAL,
 *    deliveryTime          [8] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    smsResult             [9] HLRIntResult OPTIONAL,
 *    recordExtensions      [10] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL,
 *    systemType            [11] IMPLICIT SystemType OPTIONAL,
 *    cAMELSMSInformation   [12] IMPLICIT CAMELSMSInformation OPTIONAL,
 *    locationExtension     [13] IMPLICIT BIT STRING ( SIZE( 12 ) ) OPTIONAL}
 * ```
 * @class
 */
export
class MTSMSRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. SMS-Mobile Terminated.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * @summary `serviceCentre`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The E.164 address of the SMS centre.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly serviceCentre: OCTET_STRING;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The IMSI of the receiving party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * the receiving party, if available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * 2G, 3G, and SMS over SGs operator-provisionable mandatory. The MSISDN of
     * the receiving party.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * 2G mandatory, 3G conditional, SMS over SGs conditional. The mobile
     * station classmark.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly msClassmark: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. The E.164 number of the visited MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * Area Code and Cell Identity /Service Area Code and MCC+MNC to which the
     * message was delivered. The Cell Identity contains the 16 least
     * significant bits and the Tracking Area Code is placed in the Location
     * Area Code filed if E-UTRAN is used to deliver the SMS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<LocationAreaAndCell>;
    /**
     * @summary `deliveryTime`.
     * @description
     *
     * 2G, 3G, and SMS over SGs mandatory. Delivery time: time at which message
     * was sent to the MS by the MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly deliveryTime: OCTET_STRING;
    /**
     * @summary `smsResult`.
     * @description
     *
     * 2G, 3G, and SMS over SGs conditional. The result of the attempted
     * delivery if unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * @summary `systemType`.
     * @description
     *
     * 2G conditional, 3G mandatory, SMS over SGs mandatory. This field is
     * present when either the UTRAN or GERAN air-interface is used. It is
     * omitted when the service is provided by a GSM air interface. The field
     * shall be set to "unknown" for SMS delivery using E-UTRAN.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
     * @summary `cAMELSMSInformation`.
     * @description
     *
     * 2G, 3G, and SMS over SGs conditional. Set of CAMEL information IEs. Each
     * of these IEs contains information related to CAMEL call leg related for
     * the SMS. Shall be present only if CAMEL is applied.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
     *
     * @public
     * @readonly
     */
    readonly cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    /**
     * @summary `locationExtension`.
     * @description
     *
     * 2G not applicable, 3G not applicable, SMS over SGs operator-provisionable
     * mandatory. The 12 most significant bits of the E-UTRAN Cell Identity are
     * included if E-UTRAN is used to deliver the SMS.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.14.
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
        serviceCentre: OCTET_STRING,
        servedIMSI: OCTET_STRING,
        servedIMEI: OPTIONAL<OCTET_STRING>,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        msClassmark: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        location: OPTIONAL<LocationAreaAndCell>,
        deliveryTime: OCTET_STRING,
        smsResult?: OPTIONAL<HLRIntResult>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>,
        systemType?: OPTIONAL<SystemType>,
        cAMELSMSInformation?: OPTIONAL<CAMELSMSInformation>,
        locationExtension?: OPTIONAL<BIT_STRING>
    ) {
        this.recordType = recordType;
        this.serviceCentre = serviceCentre;
        this.servedIMSI = servedIMSI;
        this.servedIMEI = servedIMEI;
        this.servedMSISDN = servedMSISDN;
        this.msClassmark = msClassmark;
        this.recordingEntity = recordingEntity;
        this.location = location;
        this.deliveryTime = deliveryTime;
        this.smsResult = smsResult;
        this.recordExtensions = recordExtensions;
        this.systemType = systemType;
        this.cAMELSMSInformation = cAMELSMSInformation;
        this.locationExtension = locationExtension;
    
        if ((this.serviceCentre.length < 1 || this.serviceCentre.length > 20)) {
            throw new ASN1SizeError("MTSMSRecord.serviceCentre violates SIZE constraint");
        }
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("MTSMSRecord.servedIMSI violates SIZE constraint");
        }
        if (this.servedIMEI !== undefined && (this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("MTSMSRecord.servedIMEI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("MTSMSRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("MTSMSRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.deliveryTime.length !== 9)) {
            throw new ASN1SizeError("MTSMSRecord.deliveryTime violates SIZE constraint");
        }
        if (this.locationExtension !== undefined && (this.locationExtension.length !== 12)) {
            throw new ASN1SizeError("MTSMSRecord.locationExtension violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a MTSMSRecord
     * @description
     *
     * This takes an `object` and converts it to a `MTSMSRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MTSMSRecord`.
     * @returns {MTSMSRecord}
     */
    public static _from_object (_o: { [_K in keyof (MTSMSRecord)]: (MTSMSRecord)[_K] }): MTSMSRecord {
        return new MTSMSRecord(_o.recordType, _o.serviceCentre, _o.servedIMSI, _o.servedIMEI, _o.servedMSISDN, _o.msClassmark, _o.recordingEntity, _o.location, _o.deliveryTime, _o.smsResult, _o.recordExtensions, _o.systemType, _o.cAMELSMSInformation, _o.locationExtension);
    }

        /**
         * @summary The enum used as the type of the component `systemType`
         * @public
         * @static
         */

    public static _enum_for_systemType = _enum_for_SystemType;
}

/**
 * @summary The Leading Root Component Types of MTSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MTSMSRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceCentre", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedIMEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("msClassmark", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deliveryTime", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("smsResult", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("systemType", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cAMELSMSInformation", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("locationExtension", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of MTSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MTSMSRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MTSMSRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_MTSMSRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MTSMSRecord: $.ASN1Decoder<MTSMSRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTSMSRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MTSMSRecord (el: _Element): MTSMSRecord {
    if (!_cached_decoder_for_MTSMSRecord) { _cached_decoder_for_MTSMSRecord = function (el: _Element): MTSMSRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let serviceCentre!: OCTET_STRING;
    let servedIMSI!: OCTET_STRING;
    let servedIMEI: OPTIONAL<OCTET_STRING>;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let msClassmark!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let location: OPTIONAL<LocationAreaAndCell>;
    let deliveryTime!: OCTET_STRING;
    let smsResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    let systemType: OPTIONAL<SystemType>;
    let cAMELSMSInformation: OPTIONAL<CAMELSMSInformation>;
    let locationExtension: OPTIONAL<BIT_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "serviceCentre": (_el: _Element): void => { serviceCentre = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "msClassmark": (_el: _Element): void => { msClassmark = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "deliveryTime": (_el: _Element): void => { deliveryTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "smsResult": (_el: _Element): void => { smsResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); },
        "systemType": (_el: _Element): void => { systemType = $._decode_implicit<SystemType>(() => _decode_SystemType)(_el); },
        "cAMELSMSInformation": (_el: _Element): void => { cAMELSMSInformation = $._decode_implicit<CAMELSMSInformation>(() => _decode_CAMELSMSInformation)(_el); },
        "locationExtension": (_el: _Element): void => { locationExtension = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MTSMSRecord,
        _extension_additions_list_spec_for_MTSMSRecord,
        _root_component_type_list_2_spec_for_MTSMSRecord,
        undefined,
    );
    return new MTSMSRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        serviceCentre,
        servedIMSI,
        servedIMEI,
        servedMSISDN,
        msClassmark,
        recordingEntity,
        location,
        deliveryTime,
        smsResult,
        recordExtensions,
        systemType,
        cAMELSMSInformation,
        locationExtension
    );
}; }
    return _cached_decoder_for_MTSMSRecord(el);
}

let _cached_encoder_for_MTSMSRecord: $.ASN1Encoder<MTSMSRecord> | null = null;

/**
 * @summary Encodes a(n) MTSMSRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTSMSRecord, encoded as an ASN.1 Element.
 */
export
function _encode_MTSMSRecord (value: MTSMSRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MTSMSRecord) { _cached_encoder_for_MTSMSRecord = function (value: MTSMSRecord, _elGetter: $.ASN1Encoder<MTSMSRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.serviceCentre, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedIMEI !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    }
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.msClassmark, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.location !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.deliveryTime, $.BER));
    if (value.smsResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_HLRIntResult, $.BER)(value.smsResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    if (value.systemType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_SystemType, $.BER)(value.systemType, $.BER));
    }
    if (value.cAMELSMSInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CAMELSMSInformation, $.BER)(value.cAMELSMSInformation, $.BER));
    }
    if (value.locationExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBitString, $.BER)(value.locationExtension, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_MTSMSRecord(value, elGetter);
}


/* eslint-enable */
