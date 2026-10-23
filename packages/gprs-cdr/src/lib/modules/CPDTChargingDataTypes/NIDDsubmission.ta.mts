/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_NIDDsubmission_serviceChangeCondition, _encode_NIDDsubmission_serviceChangeCondition, NIDDsubmission_serviceChangeCondition } from "../CPDTChargingDataTypes/NIDDsubmission-serviceChangeCondition.ta.mjs";


/**
 * @summary NIDDsubmission
 * @description
 *
 * One Non-IP Data Delivery (NIDD) submission charged against a PDN
 * connection. These containers form `listOfNIDDsubmission` in a
 * CPDT-SCE-CDR or CPDT-SNN-CDR. Each container is time stamped and
 * holds the octets submitted, the result, and why the container was
 * added.
 *
 * The SCEF adds a container on NIDD submit-response receipt, on NIDD
 * submit-response sending, or on submission timeout. The IWK-SCEF adds
 * one on response receipt or response sending. The MME adds one on
 * response receipt, delivery to the UE, submission timeout, or an error
 * on delivery from the UE. All fields are optional in table 6.1.3.4.1.
 *
 * 3GPP TS 32.253 V19.0.0 clauses 5.2.3.2.2, 5.2.3.3.2, and 5.2.3.4.2,
 * and clause 6.1.3.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDsubmission ::= SEQUENCE {
 *    submissionTimestamp      [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL, 
 *    eventTimestamp           [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL, 
 *    dataVolumeGPRSUplink     [2] IMPLICIT INTEGER OPTIONAL, 
 *    dataVolumeGPRSDownlink   [3] IMPLICIT INTEGER OPTIONAL, 
 *    submissionResultCode     [4] IMPLICIT INTEGER OPTIONAL, 
 *    serviceChangeCondition   [5] IMPLICIT BIT STRING {
 *       nIDDsubmissionResponseReceipt  (0 ), 
 *       nIDDsubmissionResponseSending  (1 ), 
 *       nIDDdeliveryToUE  (2 ), 
 *       nIDDdeliveryFromUEerror  (3 ), 
 *       nIDDsubmissionTimeout  (4 )} OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NIDDsubmission {
    /**
     * @summary `submissionTimestamp`.
     * @description
     *
     * Time stamp when the NIDD submission was submitted to the CPCN.
     * TS 32.253 does not define the nine-octet layout. Table 6.4.1
     * binds this field to the Submission-Timestamp AVP.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly submissionTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimestamp`.
     * @description
     *
     * Time stamp of the event that caused the CPCN to generate charging
     * information for this NIDD submission. TS 32.253 does not define
     * the nine-octet layout. Table 6.4.1 binds this field to the
     * Event-Timestamp AVP.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeGPRSUplink`.
     * @description
     *
     * Number of octets transmitted during this NIDD submission in the
     * uplink direction. Clause 5.1 requires the MO and MT volumes per
     * NIDD submission. Table 6.4.1 binds uplink volume to the
     * Accounting-Output-Octets AVP.
     *
     * 3GPP TS 32.253 V19.0.0 clause 5.1, table 6.1.3.4.1, and
     * table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeGPRSDownlink`.
     * @description
     *
     * Number of octets transmitted during this NIDD submission in the
     * downlink direction. Table 6.4.1 binds downlink volume to the
     * Accounting-Input-Octets AVP.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `submissionResultCode`.
     * @description
     *
     * Result of the NIDD submission. TS 32.253 does not define the
     * integer values. Table 6.4.1 binds this field to the Result-Code
     * AVP. See `SubmissionResultCode`.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly submissionResultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceChangeCondition`.
     * @description
     *
     * Why this container was added: NIDD submit-response receipt,
     * submit-response sending, delivery to the UE, delivery from the UE
     * error, or submission timeout. Which of those a node records
     * depends on the CPCN. See `ServiceChangeCondition`. Table 6.4.1
     * binds this field to the Change-Condition AVP of the NIDD
     * submission, which is separate from the Change-Condition that
     * closes the CDR.
     *
     * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
     *
     * @public
     * @readonly
     */
    readonly serviceChangeCondition: OPTIONAL<NIDDsubmission_serviceChangeCondition>;

    constructor (
        submissionTimestamp?: OPTIONAL<OCTET_STRING>,
        eventTimestamp?: OPTIONAL<OCTET_STRING>,
        dataVolumeGPRSUplink?: OPTIONAL<INTEGER>,
        dataVolumeGPRSDownlink?: OPTIONAL<INTEGER>,
        submissionResultCode?: OPTIONAL<INTEGER>,
        serviceChangeCondition?: OPTIONAL<NIDDsubmission_serviceChangeCondition>
    ) {
        this.submissionTimestamp = submissionTimestamp;
        this.eventTimestamp = eventTimestamp;
        this.dataVolumeGPRSUplink = dataVolumeGPRSUplink;
        this.dataVolumeGPRSDownlink = dataVolumeGPRSDownlink;
        this.submissionResultCode = submissionResultCode;
        this.serviceChangeCondition = serviceChangeCondition;
    
        if (this.submissionTimestamp !== undefined && (this.submissionTimestamp.length !== 9)) {
            throw new ASN1SizeError("NIDDsubmission.submissionTimestamp violates SIZE constraint");
        }
        if (this.eventTimestamp !== undefined && (this.eventTimestamp.length !== 9)) {
            throw new ASN1SizeError("NIDDsubmission.eventTimestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a NIDDsubmission
     * @description
     * 
     * This takes an `object` and converts it to a `NIDDsubmission`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NIDDsubmission`.
     * @returns {NIDDsubmission}
     */
    public static _from_object (_o: { [_K in keyof (NIDDsubmission)]: (NIDDsubmission)[_K] }): NIDDsubmission {
        return new NIDDsubmission(_o.submissionTimestamp, _o.eventTimestamp, _o.dataVolumeGPRSUplink, _o.dataVolumeGPRSDownlink, _o.submissionResultCode, _o.serviceChangeCondition);
    }


}

/**
 * @summary The Leading Root Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    new $.ComponentSpec("submissionTimestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dataVolumeGPRSUplink", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeGPRSDownlink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("submissionResultCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceChangeCondition", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NIDDsubmission: $.ASN1Decoder<NIDDsubmission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NIDDsubmission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NIDDsubmission (el: _Element): NIDDsubmission {
    if (!_cached_decoder_for_NIDDsubmission) { _cached_decoder_for_NIDDsubmission = function (el: _Element): NIDDsubmission {
    let submissionTimestamp: OPTIONAL<OCTET_STRING>;
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    let dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    let submissionResultCode: OPTIONAL<INTEGER>;
    let serviceChangeCondition: OPTIONAL<NIDDsubmission_serviceChangeCondition>;
    const callbacks: $.DecodingMap = {
        "submissionTimestamp": (_el: _Element): void => { submissionTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeGPRSUplink": (_el: _Element): void => { dataVolumeGPRSUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeGPRSDownlink": (_el: _Element): void => { dataVolumeGPRSDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "submissionResultCode": (_el: _Element): void => { submissionResultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeCondition": (_el: _Element): void => { serviceChangeCondition = $._decode_implicit<NIDDsubmission_serviceChangeCondition>(() => _decode_NIDDsubmission_serviceChangeCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NIDDsubmission,
        _extension_additions_list_spec_for_NIDDsubmission,
        _root_component_type_list_2_spec_for_NIDDsubmission,
        undefined,
    );
    return new NIDDsubmission(
        submissionTimestamp,
        eventTimestamp,
        dataVolumeGPRSUplink,
        dataVolumeGPRSDownlink,
        submissionResultCode,
        serviceChangeCondition
    );
}; }
    return _cached_decoder_for_NIDDsubmission(el);
}

let _cached_encoder_for_NIDDsubmission: $.ASN1Encoder<NIDDsubmission> | null = null;

/**
 * @summary Encodes a(n) NIDDsubmission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NIDDsubmission, encoded as an ASN.1 Element.
 */
export
function _encode_NIDDsubmission (value: NIDDsubmission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NIDDsubmission) { _cached_encoder_for_NIDDsubmission = function (value: NIDDsubmission, _elGetter: $.ASN1Encoder<NIDDsubmission>): _Element {
    const _components: _Element[] = [];
    if (value.submissionTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.submissionTimestamp, $.BER));
    }
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.dataVolumeGPRSUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSUplink, $.BER));
    }
    if (value.dataVolumeGPRSDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSDownlink, $.BER));
    }
    if (value.submissionResultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.submissionResultCode, $.BER));
    }
    if (value.serviceChangeCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_NIDDsubmission_serviceChangeCondition, $.BER)(value.serviceChangeCondition, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NIDDsubmission(value, elGetter);
}


/* eslint-enable */
