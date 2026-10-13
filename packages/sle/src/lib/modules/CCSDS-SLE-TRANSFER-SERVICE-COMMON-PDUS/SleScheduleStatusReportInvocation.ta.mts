/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { ReportRequestType, _decode_ReportRequestType, _encode_ReportRequestType } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/ReportRequestType.ta.mjs";


/**
 * @summary SleScheduleStatusReportInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleScheduleStatusReportInvocation ::= SEQUENCE
 * { invokerCredentials                     Credentials
 * , invokeId                               InvokeId
 * , reportRequestType                      ReportRequestType
 * }
 * ```
 * 
 * @class
 */
export
class SleScheduleStatusReportInvocation {
    /**
     * @summary `invokerCredentials`.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `reportRequestType`.
     * @public
     * @readonly
     */
    readonly reportRequestType: ReportRequestType;

    constructor (
        invokerCredentials: Credentials,
        invokeId: InvokeId,
        reportRequestType: ReportRequestType
    ) {
        this.invokerCredentials = invokerCredentials;
        this.invokeId = invokeId;
        this.reportRequestType = reportRequestType;
    }

    /**
     * @summary Restructures an object into a SleScheduleStatusReportInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `SleScheduleStatusReportInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleScheduleStatusReportInvocation`.
     * @returns {SleScheduleStatusReportInvocation}
     */
    public static _from_object (_o: { [_K in keyof (SleScheduleStatusReportInvocation)]: (SleScheduleStatusReportInvocation)[_K] }): SleScheduleStatusReportInvocation {
        return new SleScheduleStatusReportInvocation(_o.invokerCredentials, _o.invokeId, _o.reportRequestType);
    }


}

/**
 * @summary The Leading Root Component Types of SleScheduleStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleScheduleStatusReportInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("reportRequestType", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SleScheduleStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleScheduleStatusReportInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleScheduleStatusReportInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleScheduleStatusReportInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleScheduleStatusReportInvocation: $.ASN1Decoder<SleScheduleStatusReportInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleScheduleStatusReportInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleScheduleStatusReportInvocation (el: _Element): SleScheduleStatusReportInvocation {
    if (!_cached_decoder_for_SleScheduleStatusReportInvocation) { _cached_decoder_for_SleScheduleStatusReportInvocation = function (el: _Element): SleScheduleStatusReportInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SleScheduleStatusReportInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "reportRequestType";
    let invokerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let reportRequestType!: ReportRequestType;
    invokerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    reportRequestType = _decode_ReportRequestType(sequence[2]);
    return new SleScheduleStatusReportInvocation(
        invokerCredentials,
        invokeId,
        reportRequestType,

    );
}; }
    return _cached_decoder_for_SleScheduleStatusReportInvocation(el);
}

let _cached_encoder_for_SleScheduleStatusReportInvocation: $.ASN1Encoder<SleScheduleStatusReportInvocation> | null = null;

/**
 * @summary Encodes a(n) SleScheduleStatusReportInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleScheduleStatusReportInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_SleScheduleStatusReportInvocation (value: SleScheduleStatusReportInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleScheduleStatusReportInvocation) { _cached_encoder_for_SleScheduleStatusReportInvocation = function (value: SleScheduleStatusReportInvocation, elGetter: $.ASN1Encoder<SleScheduleStatusReportInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_ReportRequestType(value.reportRequestType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleScheduleStatusReportInvocation(value, elGetter);
}


/* eslint-enable */
