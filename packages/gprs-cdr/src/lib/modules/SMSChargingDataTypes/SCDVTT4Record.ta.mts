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
import { type RecordType, _decode_RecordType, _encode_RecordType } from "../SMSChargingDataTypes/RecordType.ta.mjs";
import { OriginatorInfo, _decode_OriginatorInfo, _encode_OriginatorInfo } from "../SMSChargingDataTypes/OriginatorInfo.ta.mjs";
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../SMSChargingDataTypes/RecipientInfo.ta.mjs";
import { SMDeviceTriggerIndicator, _decode_SMDeviceTriggerIndicator, _encode_SMDeviceTriggerIndicator, _enum_for_SMDeviceTriggerIndicator } from "../SMSChargingDataTypes/SMDeviceTriggerIndicator.ta.mjs";
import { SMDeviceTriggerInformation, _decode_SMDeviceTriggerInformation, _encode_SMDeviceTriggerInformation } from "../SMSChargingDataTypes/SMDeviceTriggerInformation.ta.mjs";
import { type SMSResult, _decode_SMSResult, _encode_SMSResult } from "../SMSChargingDataTypes/SMSResult.ta.mjs";
import { ManagementExtension, _decode_ManagementExtension, _encode_ManagementExtension } from "../SMSChargingDataTypes/ManagementExtension.ta.mjs";


/**
 * @summary SCDVTT4Record
 * @description
 *
 * SC-DVT-T4 CDR: device trigger over T4. The CDF creates it when the SMS-SC
 * reports reception of a Device Trigger Request from the MTC-IWF, including
 * replace and recall (clauses 5.2.2.4.1, 5.2.2.4.4, and 5.2.2.4.5). Delivery
 * of that trigger toward the UE is an SC-SMT CDR (clause 5.2.2.4.2). The
 * delivery report the SMS-SC then sends to the MTC-IWF is not itself a
 * charging event (clause 5.2.2.4.3).
 *
 * A replace applies only while a trigger identified by the external identifier
 * or MSISDN, the SCS identifier, and the old reference number is still
 * pending; otherwise the replace fails. A recall deletes that pending trigger.
 * Online charging reports a recall as a failure when nothing is pending
 * (clause 5.3.2.11.5).
 *
 * 3GPP TS 32.274 V19.1.0 clause 6.1.3.5, table 6.1.3.5.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCDVTT4Record ::= SET {
 *    recordType                   [0] IMPLICIT RecordType,
 *    sMSNodeAddress               [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ),
 *    eventtimestamp               [2] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    originatorInfo               [3] IMPLICIT OriginatorInfo OPTIONAL,
 *    recipientInfo                [4] IMPLICIT RecipientInfo OPTIONAL,
 *    sMDeviceTriggerIndicator     [5] IMPLICIT SMDeviceTriggerIndicator OPTIONAL,
 *    sMDeviceTriggerInformation   [6] IMPLICIT SMDeviceTriggerInformation OPTIONAL,
 *    sMSResult                    [7] SMSResult OPTIONAL,
 *    localSequenceNumber          [9] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    recordExtensions             [10] IMPLICIT SET  OF
 *       ManagementExtension OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SCDVTT4Record {
    /**
     * @summary `recordType`.
     * @description
     *
     * Device trigger over T4.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly recordType: RecordType;
    /**
     * @summary `sMSNodeAddress`.
     * @description
     *
     * Address, for example E.164, of the SMS-SC that sent the Charging Data
     * Request used to produce this record (SMSC Address).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly sMSNodeAddress: OCTET_STRING;
    /**
     * @summary `eventtimestamp`.
     * @description
     *
     * When the Device Trigger request arrived at the SMS-SC.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly eventtimestamp: OCTET_STRING;
    /**
     * @summary `originatorInfo`.
     * @description
     *
     * Originator of the device trigger. The other address is the SME address
     * of the Service Capability Server requesting the trigger (TS 29.337).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly originatorInfo: OPTIONAL<OriginatorInfo>;
    /**
     * @summary `recipientInfo`.
     * @description
     *
     * Recipient of the short message to be delivered. The IMSI, and if
     * available the MSISDN and the external identifier, are those received in
     * the User Identifier from the MTC-IWF (TS 29.337).
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly recipientInfo: OPTIONAL<RecipientInfo>;
    /**
     * @summary `sMDeviceTriggerIndicator`.
     * @description
     *
     * Whether this submission is a trigger, a replace, or a recall.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly sMDeviceTriggerIndicator: OPTIONAL<SMDeviceTriggerIndicator>;
    /**
     * @summary `sMDeviceTriggerInformation`.
     * @description
     *
     * The device-trigger submission: MTC-IWF address, reference number,
     * serving node, validity period, priority, and application port
     * identifier, where available. The old reference number is required for
     * replace and recall; see `SMDeviceTriggerInformation`.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly sMDeviceTriggerInformation: OPTIONAL<SMDeviceTriggerInformation>;
    /**
     * @summary `sMSResult`.
     * @description
     *
     * Result of the Device Trigger request at the SMS-SC. Mandatory in this
     * table, which names the field Result.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly sMSResult: OPTIONAL<SMSResult>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * TS 32.274 V19.1.0 clause 6.1.3 does not list this field. TS 32.298
     * clause 5.1.4.6.2 describes it as a unique record number created by this
     * node. The number is allocated sequentially across CDR types, is unique
     * within the CDF, and can be used to detect missing records.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `recordExtensions`.
     * @description
     *
     * Network- or manufacturer-specific extensions to the record, when
     * available.
     *
     * 3GPP TS 32.274 V19.1.0 table 6.1.3.5.1.
     *
     * @public
     * @readonly
     */
    readonly recordExtensions: OPTIONAL<ManagementExtension[]>;

    constructor (
        recordType: RecordType,
        sMSNodeAddress: OCTET_STRING,
        eventtimestamp: OCTET_STRING,
        originatorInfo?: OPTIONAL<OriginatorInfo>,
        recipientInfo?: OPTIONAL<RecipientInfo>,
        sMDeviceTriggerIndicator?: OPTIONAL<SMDeviceTriggerIndicator>,
        sMDeviceTriggerInformation?: OPTIONAL<SMDeviceTriggerInformation>,
        sMSResult?: OPTIONAL<SMSResult>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        recordExtensions?: OPTIONAL<ManagementExtension[]>
    ) {
        this.recordType = recordType;
        this.sMSNodeAddress = sMSNodeAddress;
        this.eventtimestamp = eventtimestamp;
        this.originatorInfo = originatorInfo;
        this.recipientInfo = recipientInfo;
        this.sMDeviceTriggerIndicator = sMDeviceTriggerIndicator;
        this.sMDeviceTriggerInformation = sMDeviceTriggerInformation;
        this.sMSResult = sMSResult;
        this.localSequenceNumber = localSequenceNumber;
        this.recordExtensions = recordExtensions;
    
        if ((this.sMSNodeAddress.length < 1 || this.sMSNodeAddress.length > 20)) {
            throw new ASN1SizeError("SCDVTT4Record.sMSNodeAddress violates SIZE constraint");
        }
        if ((this.eventtimestamp.length !== 9)) {
            throw new ASN1SizeError("SCDVTT4Record.eventtimestamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("SCDVTT4Record.localSequenceNumber violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a SCDVTT4Record
     * @description
     * 
     * This takes an `object` and converts it to a `SCDVTT4Record`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCDVTT4Record`.
     * @returns {SCDVTT4Record}
     */
    public static _from_object (_o: { [_K in keyof (SCDVTT4Record)]: (SCDVTT4Record)[_K] }): SCDVTT4Record {
        return new SCDVTT4Record(_o.recordType, _o.sMSNodeAddress, _o.eventtimestamp, _o.originatorInfo, _o.recipientInfo, _o.sMDeviceTriggerIndicator, _o.sMDeviceTriggerInformation, _o.sMSResult, _o.localSequenceNumber, _o.recordExtensions);
    }

        /**
         * @summary The enum used as the type of the component `sMDeviceTriggerIndicator`
         * @public
         * @static
         */

    public static _enum_for_sMDeviceTriggerIndicator = _enum_for_SMDeviceTriggerIndicator;
}

/**
 * @summary The Leading Root Component Types of SCDVTT4Record
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCDVTT4Record: $.ComponentSpec[] = [
    new $.ComponentSpec("recordType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sMSNodeAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eventtimestamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originatorInfo", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("recipientInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sMDeviceTriggerIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("sMDeviceTriggerInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("sMSResult", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("recordExtensions", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of SCDVTT4Record
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCDVTT4Record: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCDVTT4Record
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCDVTT4Record: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCDVTT4Record: $.ASN1Decoder<SCDVTT4Record> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCDVTT4Record
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCDVTT4Record (el: _Element): SCDVTT4Record {
    if (!_cached_decoder_for_SCDVTT4Record) { _cached_decoder_for_SCDVTT4Record = function (el: _Element): SCDVTT4Record {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let recordType!: RecordType;
    let sMSNodeAddress!: OCTET_STRING;
    let eventtimestamp!: OCTET_STRING;
    let originatorInfo: OPTIONAL<OriginatorInfo>;
    let recipientInfo: OPTIONAL<RecipientInfo>;
    let sMDeviceTriggerIndicator: OPTIONAL<SMDeviceTriggerIndicator>;
    let sMDeviceTriggerInformation: OPTIONAL<SMDeviceTriggerInformation>;
    let sMSResult: OPTIONAL<SMSResult>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let recordExtensions: OPTIONAL<ManagementExtension[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "recordType": (_el: _Element): void => { recordType = $._decode_implicit<RecordType>(() => _decode_RecordType)(_el); },
        "sMSNodeAddress": (_el: _Element): void => { sMSNodeAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventtimestamp": (_el: _Element): void => { eventtimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originatorInfo": (_el: _Element): void => { originatorInfo = $._decode_implicit<OriginatorInfo>(() => _decode_OriginatorInfo)(_el); },
        "recipientInfo": (_el: _Element): void => { recipientInfo = $._decode_implicit<RecipientInfo>(() => _decode_RecipientInfo)(_el); },
        "sMDeviceTriggerIndicator": (_el: _Element): void => { sMDeviceTriggerIndicator = $._decode_implicit<SMDeviceTriggerIndicator>(() => _decode_SMDeviceTriggerIndicator)(_el); },
        "sMDeviceTriggerInformation": (_el: _Element): void => { sMDeviceTriggerInformation = $._decode_implicit<SMDeviceTriggerInformation>(() => _decode_SMDeviceTriggerInformation)(_el); },
        "sMSResult": (_el: _Element): void => { sMSResult = $._decode_explicit<SMSResult>(() => _decode_SMSResult)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "recordExtensions": (_el: _Element): void => { recordExtensions = $._decode_implicit<ManagementExtension[]>(() => $._decodeSetOf<ManagementExtension>(() => _decode_ManagementExtension))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SCDVTT4Record,
        _extension_additions_list_spec_for_SCDVTT4Record,
        _root_component_type_list_2_spec_for_SCDVTT4Record,
        undefined,
    );
    return new SCDVTT4Record( /* SET_CONSTRUCTOR_CALL */
        recordType,
        sMSNodeAddress,
        eventtimestamp,
        originatorInfo,
        recipientInfo,
        sMDeviceTriggerIndicator,
        sMDeviceTriggerInformation,
        sMSResult,
        localSequenceNumber,
        recordExtensions
    );
}; }
    return _cached_decoder_for_SCDVTT4Record(el);
}

let _cached_encoder_for_SCDVTT4Record: $.ASN1Encoder<SCDVTT4Record> | null = null;

/**
 * @summary Encodes a(n) SCDVTT4Record into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCDVTT4Record, encoded as an ASN.1 Element.
 */
export
function _encode_SCDVTT4Record (value: SCDVTT4Record, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCDVTT4Record) { _cached_encoder_for_SCDVTT4Record = function (value: SCDVTT4Record, _elGetter: $.ASN1Encoder<SCDVTT4Record>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RecordType, $.BER)(value.recordType, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.sMSNodeAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.eventtimestamp, $.BER));
    if (value.originatorInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_OriginatorInfo, $.BER)(value.originatorInfo, $.BER));
    }
    if (value.recipientInfo !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_RecipientInfo, $.BER)(value.recipientInfo, $.BER));
    }
    if (value.sMDeviceTriggerIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SMDeviceTriggerIndicator, $.BER)(value.sMDeviceTriggerIndicator, $.BER));
    }
    if (value.sMDeviceTriggerInformation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_SMDeviceTriggerInformation, $.BER)(value.sMDeviceTriggerInformation, $.BER));
    }
    if (value.sMSResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_SMSResult, $.BER)(value.sMSResult, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.recordExtensions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<ManagementExtension>(() => _encode_ManagementExtension, $.BER), $.BER)(value.recordExtensions, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SCDVTT4Record(value, elGetter);
}


/* eslint-enable */
