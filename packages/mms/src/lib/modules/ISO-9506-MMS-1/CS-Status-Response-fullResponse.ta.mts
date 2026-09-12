/* eslint-disable */
import {
    OPTIONAL,
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
import { OperationState, _decode_OperationState, _encode_OperationState } from "../ISO-9506-MMS-1/OperationState.ta.mjs";
// export { OperationState, OperationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, OperationState_loaded /* IMPORTED_LONG_NAMED_INTEGER */, loaded /* IMPORTED_SHORT_NAMED_INTEGER */, OperationState_ready /* IMPORTED_LONG_NAMED_INTEGER */, ready /* IMPORTED_SHORT_NAMED_INTEGER */, OperationState_executing /* IMPORTED_LONG_NAMED_INTEGER */, executing /* IMPORTED_SHORT_NAMED_INTEGER */, OperationState_motion_paused /* IMPORTED_LONG_NAMED_INTEGER */, motion_paused /* IMPORTED_SHORT_NAMED_INTEGER */, OperationState_manualInterventionRequired /* IMPORTED_LONG_NAMED_INTEGER */, manualInterventionRequired /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_OperationState, _encode_OperationState } from "../ISO-9506-MMS-1/OperationState.ta.mjs";
import { ExtendedStatus, _decode_ExtendedStatus, _encode_ExtendedStatus } from "../ISO-9506-MMS-1/ExtendedStatus.ta.mjs";
// export { ExtendedStatus, ExtendedStatus_safetyInterlocksViolated /* IMPORTED_LONG_NAMED_BIT */, safetyInterlocksViolated /* IMPORTED_SHORT_NAMED_BIT */, ExtendedStatus_anyPhysicalResourcePowerOn /* IMPORTED_LONG_NAMED_BIT */, anyPhysicalResourcePowerOn /* IMPORTED_SHORT_NAMED_BIT */, ExtendedStatus_allPhysicalResourcesCalibrated /* IMPORTED_LONG_NAMED_BIT */, allPhysicalResourcesCalibrated /* IMPORTED_SHORT_NAMED_BIT */, ExtendedStatus_localControl /* IMPORTED_LONG_NAMED_BIT */, localControl /* IMPORTED_SHORT_NAMED_BIT */, _decode_ExtendedStatus, _encode_ExtendedStatus } from "../ISO-9506-MMS-1/ExtendedStatus.ta.mjs";
import { CS_Status_Response_fullResponse_selectedProgramInvocation, _decode_CS_Status_Response_fullResponse_selectedProgramInvocation, _encode_CS_Status_Response_fullResponse_selectedProgramInvocation } from "../ISO-9506-MMS-1/CS-Status-Response-fullResponse-selectedProgramInvocation.ta.mjs";
// export { CS_Status_Response_fullResponse_selectedProgramInvocation, _decode_CS_Status_Response_fullResponse_selectedProgramInvocation, _encode_CS_Status_Response_fullResponse_selectedProgramInvocation } from "../ISO-9506-MMS-1/CS-Status-Response-fullResponse-selectedProgramInvocation.ta.mjs";


/**
 * @summary CS_Status_Response_fullResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Status-Response-fullResponse ::= SEQUENCE {
 *     operationState [0] IMPLICIT OperationState,
 *     extendedStatus [1] IMPLICIT ExtendedStatus,
 *     extendedStatusMask [2] IMPLICIT ExtendedStatus DEFAULT '1111'B,
 *     selectedProgramInvocation CHOICE {
 *         programInvocation [3] IMPLICIT Identifier,
 *         noneSelected [4] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class CS_Status_Response_fullResponse {
    constructor (
        /**
         * @summary `operationState`.
         * @public
         * @readonly
         */
        readonly operationState: OperationState,
        /**
         * @summary `extendedStatus`.
         * @public
         * @readonly
         */
        readonly extendedStatus: ExtendedStatus,
        /**
         * @summary `extendedStatusMask`.
         * @public
         * @readonly
         */
        readonly extendedStatusMask: OPTIONAL<ExtendedStatus>,
        /**
         * @summary `selectedProgramInvocation`.
         * @public
         * @readonly
         */
        readonly selectedProgramInvocation: CS_Status_Response_fullResponse_selectedProgramInvocation
    ) {}

    /**
     * @summary Restructures an object into a CS_Status_Response_fullResponse
     * @description
     * 
     * This takes an `object` and converts it to a `CS_Status_Response_fullResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_Status_Response_fullResponse`.
     * @returns {CS_Status_Response_fullResponse}
     */
    public static _from_object (_o: { [_K in keyof (CS_Status_Response_fullResponse)]: (CS_Status_Response_fullResponse)[_K] }): CS_Status_Response_fullResponse {
        return new CS_Status_Response_fullResponse(_o.operationState, _o.extendedStatus, _o.extendedStatusMask, _o.selectedProgramInvocation);
    }

    /**
     * @summary Getter that returns the default value for `extendedStatusMask`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extendedStatusMask () { return new Uint8ClampedArray([ 1, 1, 1, 1 ]); }
}

/**
 * @summary The Leading Root Component Types of CS_Status_Response_fullResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_Status_Response_fullResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("operationState", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extendedStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extendedStatusMask", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("selectedProgramInvocation", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CS_Status_Response_fullResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_Status_Response_fullResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_Status_Response_fullResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_Status_Response_fullResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_Status_Response_fullResponse: $.ASN1Decoder<CS_Status_Response_fullResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Status_Response_fullResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Status_Response_fullResponse (el: _Element): CS_Status_Response_fullResponse {
    if (!_cached_decoder_for_CS_Status_Response_fullResponse) { _cached_decoder_for_CS_Status_Response_fullResponse = function (el: _Element): CS_Status_Response_fullResponse {
    let operationState!: OperationState;
    let extendedStatus!: ExtendedStatus;
    let extendedStatusMask: OPTIONAL<ExtendedStatus> = CS_Status_Response_fullResponse._default_value_for_extendedStatusMask;
    let selectedProgramInvocation!: CS_Status_Response_fullResponse_selectedProgramInvocation;
    const callbacks: $.DecodingMap = {
        "operationState": (_el: _Element): void => { operationState = $._decode_implicit<OperationState>(() => _decode_OperationState)(_el); },
        "extendedStatus": (_el: _Element): void => { extendedStatus = $._decode_implicit<ExtendedStatus>(() => _decode_ExtendedStatus)(_el); },
        "extendedStatusMask": (_el: _Element): void => { extendedStatusMask = $._decode_implicit<ExtendedStatus>(() => _decode_ExtendedStatus)(_el); },
        "selectedProgramInvocation": (_el: _Element): void => { selectedProgramInvocation = _decode_CS_Status_Response_fullResponse_selectedProgramInvocation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CS_Status_Response_fullResponse,
        _extension_additions_list_spec_for_CS_Status_Response_fullResponse,
        _root_component_type_list_2_spec_for_CS_Status_Response_fullResponse,
        undefined,
    );
    return new CS_Status_Response_fullResponse(
        operationState,
        extendedStatus,
        extendedStatusMask,
        selectedProgramInvocation
    );
}; }
    return _cached_decoder_for_CS_Status_Response_fullResponse(el);
}

let _cached_encoder_for_CS_Status_Response_fullResponse: $.ASN1Encoder<CS_Status_Response_fullResponse> | null = null;

/**
 * @summary Encodes a(n) CS_Status_Response_fullResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Status_Response_fullResponse, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Status_Response_fullResponse (value: CS_Status_Response_fullResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Status_Response_fullResponse) { _cached_encoder_for_CS_Status_Response_fullResponse = function (value: CS_Status_Response_fullResponse): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_OperationState, $.BER)(value.operationState, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ExtendedStatus, $.BER)(value.extendedStatus, $.BER),
            /* IF_DEFAULT */ (value.extendedStatusMask === undefined || $.deepEq(value.extendedStatusMask, CS_Status_Response_fullResponse._default_value_for_extendedStatusMask) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtendedStatus, $.BER)(value.extendedStatusMask, $.BER)),
            /* REQUIRED   */ _encode_CS_Status_Response_fullResponse_selectedProgramInvocation(value.selectedProgramInvocation, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_Status_Response_fullResponse(value, elGetter);
}


/* eslint-enable */
