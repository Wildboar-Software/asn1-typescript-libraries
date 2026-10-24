/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecordType, _decode_RecordType, _encode_RecordType } from "../CSChargingDataTypes/RecordType.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService } from "../CSChargingDataTypes/BasicService.ta.mjs";
import { RoutingNumber, _decode_RoutingNumber, _encode_RoutingNumber } from "../CSChargingDataTypes/RoutingNumber.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../CSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary HLRIntRecord
 * @description
 *
 * HLR interrogation CDR. When enabled, one record is created for each
 * interrogation of a mobile subscriber, either in the HLR or in the
 * interrogating MSC. `routingNumber` carries the MSRN or forwarding number
 * when the interrogation succeeds. `basicService` is present only for
 * teleservice 21 (SMS-MT). `interrogationResult` is present when the request
 * is unsuccessful. `numberOfForwarding` is present when ISUP supplies the
 * forwarding count.
 *
 * Categories are M, C, OM, and OC as in TS 32.240 clause 5.4.
 *
 * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HLRIntRecord ::= SET {
 *    recordType            [0] IMPLICIT RecordType,
 *    servedIMSI            [1] IMPLICIT OCTET STRING ( SIZE( 3 .. 8 ) ),
 *    servedMSISDN          [2] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ),
 *    recordingEntity       [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    basicService          [4] BasicService OPTIONAL,
 *    routingNumber         [5] RoutingNumber,
 *    interrogationTime     [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    numberOfForwarding    [7] IMPLICIT INTEGER ( 1 .. 5 ) OPTIONAL,
 *    interrogationResult   [8] HLRIntResult OPTIONAL,
 *    recordExtensions      [9] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * @class
 */
export
class HLRIntRecord {
    /**
     * @summary `recordType`.
     * @description
     *
     * 2G and 3G mandatory. HLR interrogation.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
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
     * 2G and 3G conditional. The IMSI of the party being interrogated, if
     * successful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
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
     * 2G and 3G mandatory. The MSISDN of the subscriber being interrogated.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
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
    readonly servedMSISDN: OCTET_STRING;
    /**
     * @summary `recordingEntity`.
     * @description
     *
     * 2G and 3G mandatory. The E.164 Number of the HLR / MSC.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
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
     * @summary `basicService`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. Only for teleservice 21
     * (SMS-MT).
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
     *
     * @public
     * @readonly
     */
    readonly basicService: OPTIONAL<BasicService>;
    /**
     * @summary `routingNumber`.
     * @description
     *
     * 2G and 3G conditional. Routing number (MSRN, forwarding number) provided
     * by the HLR if the interrogation was successful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
     *
     * The routing number field of the HLR interrogation record contains either
     * a mobile station roaming number or, in case of call forwarding, a
     * forwarded-to number.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.76.
     *
     * @public
     * @readonly
     */
    readonly routingNumber: RoutingNumber;
    /**
     * @summary `interrogationTime`.
     * @description
     *
     * 2G and 3G mandatory. Time at which the interrogation was invoked.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
     *
     * @public
     * @readonly
     */
    readonly interrogationTime: OCTET_STRING;
    /**
     * @summary `numberOfForwarding`.
     * @description
     *
     * 2G and 3G conditional. The number of times the call has been forwarded if
     * provided by ISUP.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
     *
     * This field, if provided via ISUP signalling, contains the number of times
     * a call has been forwarded prior to the interrogation of the HLR and is
     * defined in TS 29.002 [214].
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.62.
     *
     * @public
     * @readonly
     */
    readonly numberOfForwarding: OPTIONAL<INTEGER>;
    /**
     * @summary `interrogationResult`.
     * @description
     *
     * 2G and 3G conditional. The result of the interrogation request if
     * unsuccessful.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
     *
     * This field contains the result of the HLR interrogation attempt as
     * defined in the MAP (TS 29.002 [214]). NOTE: This field is only provided
     * if the attempted interrogation was unsuccessful.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.32.
     *
     * @public
     * @readonly
     */
    readonly interrogationResult: OPTIONAL<HLRIntResult>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * 2G and 3G operator-provisionable conditional. A set of network/
     * manufacturer specific extensions to the record, when available.
     *
     * 3GPP TS 32.250 V19.0.0 clause 6.1.3.10.
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
        recordType: RecordType,
        servedIMSI: OCTET_STRING,
        servedMSISDN: OCTET_STRING,
        recordingEntity: OCTET_STRING,
        basicService: OPTIONAL<BasicService>,
        routingNumber: RoutingNumber,
        interrogationTime: OCTET_STRING,
        numberOfForwarding?: OPTIONAL<INTEGER>,
        interrogationResult?: OPTIONAL<HLRIntResult>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.servedIMSI = servedIMSI;
        this.servedMSISDN = servedMSISDN;
        this.recordingEntity = recordingEntity;
        this.basicService = basicService;
        this.routingNumber = routingNumber;
        this.interrogationTime = interrogationTime;
        this.numberOfForwarding = numberOfForwarding;
        this.interrogationResult = interrogationResult;
        this.recordExtensions = recordExtensions;
    
        if ((this.servedIMSI.length < 3 || this.servedIMSI.length > 8)) {
            throw new ASN1SizeError("HLRIntRecord.servedIMSI violates SIZE constraint");
        }
        if ((this.servedMSISDN.length < 1 || this.servedMSISDN.length > 9)) {
            throw new ASN1SizeError("HLRIntRecord.servedMSISDN violates SIZE constraint");
        }
        if ((this.recordingEntity.length < 1 || this.recordingEntity.length > 20)) {
            throw new ASN1SizeError("HLRIntRecord.recordingEntity violates SIZE constraint");
        }
        if ((this.interrogationTime.length !== 9)) {
            throw new ASN1SizeError("HLRIntRecord.interrogationTime violates SIZE constraint");
        }
        if (this.numberOfForwarding !== undefined && (this.numberOfForwarding < 1 || this.numberOfForwarding > 5)) {
            throw new ASN1OverflowError("HLRIntRecord.numberOfForwarding violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a HLRIntRecord
     * @description
     *
     * This takes an `object` and converts it to a `HLRIntRecord`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HLRIntRecord`.
     * @returns {HLRIntRecord}
     */
    public static _from_object (_o: { [_K in keyof (HLRIntRecord)]: (HLRIntRecord)[_K] }): HLRIntRecord {
        return new HLRIntRecord(_o.recordType, _o.servedIMSI, _o.servedMSISDN, _o.recordingEntity, _o.basicService, _o.routingNumber, _o.interrogationTime, _o.numberOfForwarding, _o.interrogationResult, _o.recordExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of HLRIntRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("servedIMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servedMSISDN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recordingEntity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("routingNumber", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("interrogationTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("numberOfForwarding", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("interrogationResult", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of HLRIntRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HLRIntRecord
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_HLRIntRecord: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HLRIntRecord: $.ASN1Decoder<HLRIntRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HLRIntRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HLRIntRecord (el: _Element): HLRIntRecord {
    if (!_cached_decoder_for_HLRIntRecord) { _cached_decoder_for_HLRIntRecord = function (el: _Element): HLRIntRecord {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let servedIMSI!: OCTET_STRING;
    let servedMSISDN!: OCTET_STRING;
    let recordingEntity!: OCTET_STRING;
    let basicService: OPTIONAL<BasicService>;
    let routingNumber!: RoutingNumber;
    let interrogationTime!: OCTET_STRING;
    let numberOfForwarding: OPTIONAL<INTEGER>;
    let interrogationResult: OPTIONAL<HLRIntResult>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "servedIMSI": (_el: _Element): void => { servedIMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "servedMSISDN": (_el: _Element): void => { servedMSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "recordingEntity": (_el: _Element): void => { recordingEntity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<BasicService>(() => _decode_BasicService)(_el); },
        "routingNumber": (_el: _Element): void => { routingNumber = $._decode_explicit<RoutingNumber>(() => _decode_RoutingNumber)(_el); },
        "interrogationTime": (_el: _Element): void => { interrogationTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "numberOfForwarding": (_el: _Element): void => { numberOfForwarding = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interrogationResult": (_el: _Element): void => { interrogationResult = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_HLRIntRecord,
        _extension_additions_list_spec_for_HLRIntRecord,
        _root_component_type_list_2_spec_for_HLRIntRecord,
        undefined,
    );
    return new HLRIntRecord( /* SET_CONSTRUCTOR_CALL */
        recordType,
        servedIMSI,
        servedMSISDN,
        recordingEntity,
        basicService,
        routingNumber,
        interrogationTime,
        numberOfForwarding,
        interrogationResult,
        recordExtensions
    );
}; }
    return _cached_decoder_for_HLRIntRecord(el);
}

let _cached_encoder_for_HLRIntRecord: $.ASN1Encoder<HLRIntRecord> | null = null;

/**
 * @summary Encodes a(n) HLRIntRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HLRIntRecord, encoded as an ASN.1 Element.
 */
export
function _encode_HLRIntRecord (value: HLRIntRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HLRIntRecord) { _cached_encoder_for_HLRIntRecord = function (value: HLRIntRecord, _elGetter: $.ASN1Encoder<HLRIntRecord>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.servedIMSI, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.servedMSISDN, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.recordingEntity, $.BER));
    if (value.basicService !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_BasicService, $.BER)(value.basicService, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_RoutingNumber, $.BER)(value.routingNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.interrogationTime, $.BER));
    if (value.numberOfForwarding !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.numberOfForwarding, $.BER));
    }
    if (value.interrogationResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_HLRIntResult, $.BER)(value.interrogationResult, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_HLRIntRecord(value, elGetter);
}


/* eslint-enable */
