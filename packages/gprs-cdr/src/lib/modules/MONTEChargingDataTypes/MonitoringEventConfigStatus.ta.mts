/* eslint-disable */
import {
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceResult, _decode_ServiceResult, _encode_ServiceResult } from "../MONTEChargingDataTypes/ServiceResult.ta.mjs";


/**
 * @summary MonitoringEventConfigStatus
 * @description
 *
 * Whether a Monitoring Event configuration request succeeded.
 * Category M on the ME-CO-CDR. On Rf the category is Oc: when
 * the request did not succeed, a specific value indicates the
 * error from handling the requested action. Sent for
 * configuration only. Bound to Monitoring-Event-Config-Status.
 *
 * The sequence also carries an SCEF reference ID and an SCEF
 * Id. TS 32.278 does not describe those two components of the
 * status. The request identity on `MECORecord` is that same
 * pair.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2, 6.3.1.2 and 6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitoringEventConfigStatus ::= SEQUENCE {
 *    serviceResult     [0] IMPLICIT ServiceResult OPTIONAL,
 *    sCEFReferenceID   [1] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    sCEFID            [2] IMPLICIT OCTET STRING OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MonitoringEventConfigStatus {
    /**
     * @summary `serviceResult`.
     * @description
     *
     * Outcome of the requested configuration action. TS 32.278
     * says that a failed request uses a specific value for the
     * error, and does not define the `ServiceResult` integers.
     *
     * 3GPP TS 32.278 V19.0.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly serviceResult: OPTIONAL<ServiceResult>;
    /**
     * @summary `sCEFReferenceID`.
     * @description
     *
     * TS 32.278 does not describe this component of the config
     * status. On the CDR, SCEF Reference ID is the identifier
     * the SCEF assigned to the Monitoring Request.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly sCEFReferenceID: OPTIONAL<INTEGER>;
    /**
     * @summary `sCEFID`.
     * @description
     *
     * TS 32.278 does not describe this component of the config
     * status. On the CDR, SCEF Id is the SCEF to which the
     * Monitoring Indication is sent.
     *
     * 3GPP TS 32.278 V19.0.0 clauses 6.1.3.2 and 6.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly sCEFID: OPTIONAL<OCTET_STRING>;

    constructor (
        serviceResult?: OPTIONAL<ServiceResult>,
        sCEFReferenceID?: OPTIONAL<INTEGER>,
        sCEFID?: OPTIONAL<OCTET_STRING>
    ) {
        this.serviceResult = serviceResult;
        this.sCEFReferenceID = sCEFReferenceID;
        this.sCEFID = sCEFID;
    
        if (this.sCEFReferenceID !== undefined && (this.sCEFReferenceID < 0 || this.sCEFReferenceID > 4294967295)) {
            throw new ASN1OverflowError("MonitoringEventConfigStatus.sCEFReferenceID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a MonitoringEventConfigStatus
     * @description
     * 
     * This takes an `object` and converts it to a `MonitoringEventConfigStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitoringEventConfigStatus`.
     * @returns {MonitoringEventConfigStatus}
     */
    public static _from_object (_o: { [_K in keyof (MonitoringEventConfigStatus)]: (MonitoringEventConfigStatus)[_K] }): MonitoringEventConfigStatus {
        return new MonitoringEventConfigStatus(_o.serviceResult, _o.sCEFReferenceID, _o.sCEFID);
    }


}

/**
 * @summary The Leading Root Component Types of MonitoringEventConfigStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitoringEventConfigStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceResult", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sCEFReferenceID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sCEFID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MonitoringEventConfigStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitoringEventConfigStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitoringEventConfigStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitoringEventConfigStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitoringEventConfigStatus: $.ASN1Decoder<MonitoringEventConfigStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitoringEventConfigStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitoringEventConfigStatus (el: _Element): MonitoringEventConfigStatus {
    if (!_cached_decoder_for_MonitoringEventConfigStatus) { _cached_decoder_for_MonitoringEventConfigStatus = function (el: _Element): MonitoringEventConfigStatus {
    let serviceResult: OPTIONAL<ServiceResult>;
    let sCEFReferenceID: OPTIONAL<INTEGER>;
    let sCEFID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "serviceResult": (_el: _Element): void => { serviceResult = $._decode_implicit<ServiceResult>(() => _decode_ServiceResult)(_el); },
        "sCEFReferenceID": (_el: _Element): void => { sCEFReferenceID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "sCEFID": (_el: _Element): void => { sCEFID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitoringEventConfigStatus,
        _extension_additions_list_spec_for_MonitoringEventConfigStatus,
        _root_component_type_list_2_spec_for_MonitoringEventConfigStatus,
        undefined,
    );
    return new MonitoringEventConfigStatus(
        serviceResult,
        sCEFReferenceID,
        sCEFID
    );
}; }
    return _cached_decoder_for_MonitoringEventConfigStatus(el);
}

let _cached_encoder_for_MonitoringEventConfigStatus: $.ASN1Encoder<MonitoringEventConfigStatus> | null = null;

/**
 * @summary Encodes a(n) MonitoringEventConfigStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitoringEventConfigStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MonitoringEventConfigStatus (value: MonitoringEventConfigStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitoringEventConfigStatus) { _cached_encoder_for_MonitoringEventConfigStatus = function (value: MonitoringEventConfigStatus, _elGetter: $.ASN1Encoder<MonitoringEventConfigStatus>): _Element {
    const _components: _Element[] = [];
    if (value.serviceResult !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceResult, $.BER)(value.serviceResult, $.BER));
    }
    if (value.sCEFReferenceID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.sCEFReferenceID, $.BER));
    }
    if (value.sCEFID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sCEFID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MonitoringEventConfigStatus(value, elGetter);
}


/* eslint-enable */
