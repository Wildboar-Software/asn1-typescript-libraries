/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { type InvokeId, _decode_InvokeId, _encode_InvokeId } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/InvokeId.ta.mjs";
import { type SleScheduleStatusReportReturn_result, _decode_SleScheduleStatusReportReturn_result, _encode_SleScheduleStatusReportReturn_result } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-PDUS/SleScheduleStatusReportReturn-result.ta.mjs";


/**
 * @summary SleScheduleStatusReportReturn
 * @description
 * 
 * Return from SCHEDULE-STATUS-REPORT. A positive result applies the requested
 * reporting change. A negative result leaves the previous reporting setting in
 * effect. The provider state does not change.
 * 
 * CCSDS 911.1-B-5, sections 3.8.2.7, 3.8.3, and annex A2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SleScheduleStatusReportReturn ::= SEQUENCE
 * { performerCredentials           Credentials
 * , invokeId                       InvokeId
 * , result                          CHOICE
 *    { positiveResult           [0]    NULL
 *    , negativeResult           [1]    DiagnosticScheduleStatusReport
 *    }
 * }
 * ```
 * 
 * @class
 */
export
class SleScheduleStatusReportReturn {
    /**
     * @summary `performerCredentials`.
     * @description
     * 
     * Information with which the invoker authenticates this return. When the
     * return is unauthenticated, the value should be `unused`.
     *
     * CCSDS 911.1-B-5, sections 3.8.2.3 and 3.1.5.
     * @public
     * @readonly
     */
    readonly performerCredentials: Credentials;
    /**
     * @summary `invokeId`.
     * @description
     * 
     * The invoke ID from the invocation, returned unchanged.
     *
     * CCSDS 911.1-B-5, sections 3.8.2.4 and 3.1.6.
     * @public
     * @readonly
     */
    readonly invokeId: InvokeId;
    /**
     * @summary `result`.
     * @description
     * 
     * `positiveResult` applies the requested reporting change. `negativeResult`
     * carries the diagnostic and leaves the previous reporting setting in
     * effect.
     *
     * CCSDS 911.1-B-5, sections 3.8.2.7 and 3.8.2.8.
     * @public
     * @readonly
     */
    readonly result: SleScheduleStatusReportReturn_result;

    constructor (
        performerCredentials: Credentials,
        invokeId: InvokeId,
        result: SleScheduleStatusReportReturn_result
    ) {
        this.performerCredentials = performerCredentials;
        this.invokeId = invokeId;
        this.result = result;
    }

    /**
     * @summary Restructures an object into a SleScheduleStatusReportReturn
     * @description
     * 
     * This takes an `object` and converts it to a `SleScheduleStatusReportReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SleScheduleStatusReportReturn`.
     * @returns {SleScheduleStatusReportReturn}
     */
    public static _from_object (_o: { [_K in keyof (SleScheduleStatusReportReturn)]: (SleScheduleStatusReportReturn)[_K] }): SleScheduleStatusReportReturn {
        return new SleScheduleStatusReportReturn(_o.performerCredentials, _o.invokeId, _o.result);
    }


}

/**
 * @summary The Leading Root Component Types of SleScheduleStatusReportReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SleScheduleStatusReportReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("performerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("invokeId", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("result", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SleScheduleStatusReportReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SleScheduleStatusReportReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SleScheduleStatusReportReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SleScheduleStatusReportReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SleScheduleStatusReportReturn: $.ASN1Decoder<SleScheduleStatusReportReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SleScheduleStatusReportReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SleScheduleStatusReportReturn (el: _Element): SleScheduleStatusReportReturn {
    if (!_cached_decoder_for_SleScheduleStatusReportReturn) { _cached_decoder_for_SleScheduleStatusReportReturn = function (el: _Element): SleScheduleStatusReportReturn {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SleScheduleStatusReportReturn contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "performerCredentials";
    sequence[1].name = "invokeId";
    sequence[2].name = "result";
    let performerCredentials!: Credentials;
    let invokeId!: InvokeId;
    let result!: SleScheduleStatusReportReturn_result;
    performerCredentials = _decode_Credentials(sequence[0]);
    invokeId = _decode_InvokeId(sequence[1]);
    result = _decode_SleScheduleStatusReportReturn_result(sequence[2]);
    return new SleScheduleStatusReportReturn(
        performerCredentials,
        invokeId,
        result,

    );
}; }
    return _cached_decoder_for_SleScheduleStatusReportReturn(el);
}

let _cached_encoder_for_SleScheduleStatusReportReturn: $.ASN1Encoder<SleScheduleStatusReportReturn> | null = null;

/**
 * @summary Encodes a(n) SleScheduleStatusReportReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SleScheduleStatusReportReturn, encoded as an ASN.1 Element.
 */
export
function _encode_SleScheduleStatusReportReturn (value: SleScheduleStatusReportReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SleScheduleStatusReportReturn) { _cached_encoder_for_SleScheduleStatusReportReturn = function (value: SleScheduleStatusReportReturn, _elGetter: $.ASN1Encoder<SleScheduleStatusReportReturn>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.performerCredentials, $.BER),
        /* REQUIRED   */ _encode_InvokeId(value.invokeId, $.BER),
        /* REQUIRED   */ _encode_SleScheduleStatusReportReturn_result(value.result, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SleScheduleStatusReportReturn(value, elGetter);
}


/* eslint-enable */
