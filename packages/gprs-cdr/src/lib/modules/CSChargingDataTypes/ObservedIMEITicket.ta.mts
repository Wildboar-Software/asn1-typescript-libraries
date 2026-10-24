/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMEIStatus, _decode_IMEIStatus, _encode_IMEIStatus, _enum_for_IMEIStatus } from "../CSChargingDataTypes/IMEIStatus.ta.mjs";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";
import { ObservedIMEITicket_imeiCheckEvent, _decode_ObservedIMEITicket_imeiCheckEvent, _encode_ObservedIMEITicket_imeiCheckEvent } from "../CSChargingDataTypes/ObservedIMEITicket-imeiCheckEvent.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary ObservedIMEITicket
 * @description
 *
 * Observed-IMEI ticket. The MSC that performs the IMEI check generates one
 * whenever tracklisted, blocklisted, or non-allow-listed equipment is
 * detected. The ticket links that equipment to the IMSI using it, and
 * records when and where it was used. `callReference` is present only when
 * the check was caused by an MOC or MTC, so the corresponding call record
 * can be found. `servedMSISDN` is available only when the triggering event
 * was an MOC, MTC, SMS-MO, or SMS-MT.
 *
 * This SET has no record type. Categories are M, C, OM, and OC as in TS
 * 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.11 and 6.1.3.19.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObservedIMEITicket ::= SET {
 *    servedIMEI         [0] IMPLICIT OCTET STRING ( SIZE( 8 ) ),
 *    imeiStatus         [1] IMPLICIT IMEIStatus,
 *    servedIMSI         [2] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    recordingEntity    [4] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    eventTime          [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    location           [6] IMPLICIT LocationAreaAndCell,
 *    imeiCheckEvent     [7] IMPLICIT INTEGER {
 *       mobileOriginatedCall    ( 0 ),
 *       mobileTerminatedCall    ( 1 ),
 *       smsMobileOriginating    ( 2 ),
 *       smsMobileTerminating    ( 3 ),
 *       ssAction                ( 4 ),
 *       locationUpdate          ( 5 )} OPTIONAL,
 *    callReference      [8] IMPLICIT OCTET STRING ( SIZE( 1 .. 8 ) ) OPTIONAL,
 *    recordExtensions   [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * @class
 */
export
class ObservedIMEITicket {
    /**
     * @summary `servedIMEI`.
     * @description
     *
     * 2G and 3G mandatory. IMEI of the observed mobile equipment.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
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
    readonly servedIMEI: OCTET_STRING;
    /**
     * @summary `imeiStatus`.
     * @description
     *
     * 2G and 3G mandatory. The result of the IMEI check e.g. blocklisted,
     * tracklisted, unknown.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
     *
     * This field contains the result of the IMEI checking procedure:
     * Tracklisted; Blocklisted; Non-allowlisted.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.34.
     *
     * @public
     * @readonly
     */
    readonly imeiStatus: IMEIStatus;
    /**
     * @summary `servedIMSI`.
     * @description
     *
     * 2G and 3G mandatory. The IMSI of the subscriber currently using the
     * mobile equipment.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
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
     * @summary `servedMSISDN`.
     * @description
     *
     * 2G and 3G conditional. The MSISDN of the subscriber currently using the
     * observed mobile equipment, only available if the event that triggered the
     * IMEI check was an MOC, MTC, SMS-MO or SMS-MT.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
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
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 number of the recording MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
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
     * @summary `eventTime`.
     * @description
     *
     * 2G and 3G mandatory. The time at which the IMEI check was performed.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
     *
     * @public
     * @readonly
     */
    readonly eventTime: OCTET_STRING;
    /**
     * @summary `location`.
     * @description
     *
     * 2G and 3G mandatory. The location area code and cell identity of the cell
     * and MCC+MNC from which the mobile equipment was used.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
     *
     * @public
     * @readonly
     */
    readonly location: LocationAreaAndCell;
    /**
     * @summary `imeiCheckEvent`.
     * @description
     *
     * 2G and 3G operator-provisionable mandatory. The event that caused IMEI
     * checking to take place.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
     *
     * This field identifies the type of event that caused the IMEI check to
     * take place: Mobile originating call attempt; Mobile terminating call
     * attempt; Mobile originating SMS; Mobile terminating SMS; Supplementary
     * service actions performed by the subscriber; Location update.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.33.
     *
     * @public
     * @readonly
     */
    readonly imeiCheckEvent: OPTIONAL<ObservedIMEITicket_imeiCheckEvent>;
    /**
     * @summary `callReference`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Only available if the IMEI
     * check was related to an MOC or MTC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
     *
     * This field uniquely identifies a call or transaction on one side of the
     * interface (i.e. 'A' or 'B' side) and is derived from the transaction
     * identifier of TS 24.008 [208]. It is also used to identify all partial
     * records and transactions belonging to the same connection. For the
     * avoidance of doubt, there is no global call reference defined within GSM
     * and the call reference field cannot be used to combine, for example, the
     * MOC and MTC records of a mobiletomobile connection.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.5.
     *
     * @public
     * @readonly
     */
    readonly callReference: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.19.
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

    constructor (
        servedIMEI: OCTET_STRING,
        imeiStatus: IMEIStatus,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OPTIONAL<OCTET_STRING>,
        recordingEntity: OCTET_STRING,
        eventTime: OCTET_STRING,
        location: LocationAreaAndCell,
        imeiCheckEvent?: OPTIONAL<ObservedIMEITicket_imeiCheckEvent>,
        callReference?: OPTIONAL<OCTET_STRING>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.servedIMEI = servedIMEI;
        this.imeiStatus = imeiStatus;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.eventTime = eventTime;
        this.location = location;
        this.imeiCheckEvent = imeiCheckEvent;
        this.callReference = callReference;
        this.recordExtensions = recordExtensions;
    
        if ((this.servedIMEI.length !== 8)) {
            throw new ASN1SizeError("ObservedIMEITicket.servedIMEI violates SIZE constraint");
        }
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("ObservedIMEITicket.servedIMSI violates SIZE constraint");
        }
        if (this.servedMSISDN !== undefined && (this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("ObservedIMEITicket.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("ObservedIMEITicket.recordingEntity violates SIZE constraint");
        }
        if ((this.eventTime.length !== 9)) {
            throw new ASN1SizeError("ObservedIMEITicket.eventTime violates SIZE constraint");
        }
        if (this.callReference !== undefined && (this.callReference.length < 1 || this.callReference.length > 8)) {
            throw new ASN1SizeError("ObservedIMEITicket.callReference violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ObservedIMEITicket
     * @description
     *
     * This takes an `object` and converts it to a `ObservedIMEITicket`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObservedIMEITicket`.
     * @returns {ObservedIMEITicket}
     */
    public static _from_object (_o: { [_K in keyof (ObservedIMEITicket)]: (ObservedIMEITicket)[_K] }): ObservedIMEITicket {
        return new ObservedIMEITicket(_o.servedIMEI, _o.imeiStatus, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.eventTime, _o.location, _o.imeiCheckEvent, _o.callReference, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `imeiStatus`
         * @public
         * @static
         */

    public static _enum_for_imeiStatus = _enum_for_IMEIStatus;
}

/**
 * @summary The Leading Root Component Types of ObservedIMEITicket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObservedIMEITicket: $.ComponentSpec[] = [
    new $.ComponentSpec("servedIMEI", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("imeiStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("servedMSISDN", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eventTime", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("imeiCheckEvent", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callReference", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ObservedIMEITicket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObservedIMEITicket: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObservedIMEITicket
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_ObservedIMEITicket: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObservedIMEITicket: $.ASN1Decoder<ObservedIMEITicket> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservedIMEITicket
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObservedIMEITicket (el: _Element): ObservedIMEITicket {
    if (!_cached_decoder_for_ObservedIMEITicket) { _cached_decoder_for_ObservedIMEITicket = function (el: _Element): ObservedIMEITicket {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let servedIMEI!: OCTET_STRING;
    let imeiStatus!: IMEIStatus;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN: OPTIONAL<OCTET_STRING>;
    let recordingEntity!: OCTET_STRING;
    let eventTime!: OCTET_STRING;
    let location!: LocationAreaAndCell;
    let imeiCheckEvent: OPTIONAL<ObservedIMEITicket_imeiCheckEvent>;
    let callReference: OPTIONAL<OCTET_STRING>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "servedIMEI": (_el: _Element): void => { servedIMEI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "imeiStatus": (_el: _Element): void => { imeiStatus = $._decode_implicit<IMEIStatus>(() => _decode_IMEIStatus)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTime": (_el: _Element): void => { eventTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(_el); },
        "imeiCheckEvent": (_el: _Element): void => { imeiCheckEvent = $._decode_implicit<ObservedIMEITicket_imeiCheckEvent>(() => _decode_ObservedIMEITicket_imeiCheckEvent)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ObservedIMEITicket,
        _extension_additions_list_spec_for_ObservedIMEITicket,
        _root_component_type_list_2_spec_for_ObservedIMEITicket,
        undefined,
    );
    return new ObservedIMEITicket( /* SET_CONSTRUCTOR_CALL */
        servedIMEI,
        imeiStatus,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        eventTime,
        location,
        imeiCheckEvent,
        callReference,
        recordExtensions
    );
}; }
    return _cached_decoder_for_ObservedIMEITicket(el);
}

let _cached_encoder_for_ObservedIMEITicket: $.ASN1Encoder<ObservedIMEITicket> | null = null;

/**
 * @summary Encodes a(n) ObservedIMEITicket into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservedIMEITicket, encoded as an ASN.1 Element.
 */
export
function _encode_ObservedIMEITicket (value: ObservedIMEITicket, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObservedIMEITicket) { _cached_encoder_for_ObservedIMEITicket = function (value: ObservedIMEITicket, _elGetter: $.ASN1Encoder<ObservedIMEITicket>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.servedIMEI, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMEIStatus, $.BER)(value.imeiStatus, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    if (value.servedMSISDN !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.eventTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER));
    if (value.imeiCheckEvent !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ObservedIMEITicket_imeiCheckEvent, $.BER)(value.imeiCheckEvent, $.BER));
    }
    if (value.callReference !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.callReference, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_ObservedIMEITicket(value, elGetter);
}


/* eslint-enable */
