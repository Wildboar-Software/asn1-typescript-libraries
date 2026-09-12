/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StatusResponse_vmdLogicalStatus, _decode_StatusResponse_vmdLogicalStatus, _encode_StatusResponse_vmdLogicalStatus } from "../ISO-9506-MMS-1/StatusResponse-vmdLogicalStatus.ta.mjs";
// export { StatusResponse_vmdLogicalStatus, StatusResponse_vmdLogicalStatus_state_changes_allowed /* IMPORTED_LONG_NAMED_INTEGER */, state_changes_allowed /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdLogicalStatus_no_state_changes_allowed /* IMPORTED_LONG_NAMED_INTEGER */, no_state_changes_allowed /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdLogicalStatus_limited_services_permitted /* IMPORTED_LONG_NAMED_INTEGER */, limited_services_permitted /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdLogicalStatus_support_services_allowed /* IMPORTED_LONG_NAMED_INTEGER */, support_services_allowed /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StatusResponse_vmdLogicalStatus, _encode_StatusResponse_vmdLogicalStatus } from "../ISO-9506-MMS-1/StatusResponse-vmdLogicalStatus.ta.mjs";
import { StatusResponse_vmdPhysicalStatus, _decode_StatusResponse_vmdPhysicalStatus, _encode_StatusResponse_vmdPhysicalStatus } from "../ISO-9506-MMS-1/StatusResponse-vmdPhysicalStatus.ta.mjs";
// export { StatusResponse_vmdPhysicalStatus, StatusResponse_vmdPhysicalStatus_operational /* IMPORTED_LONG_NAMED_INTEGER */, operational /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdPhysicalStatus_partially_operational /* IMPORTED_LONG_NAMED_INTEGER */, partially_operational /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdPhysicalStatus_inoperable /* IMPORTED_LONG_NAMED_INTEGER */, inoperable /* IMPORTED_SHORT_NAMED_INTEGER */, StatusResponse_vmdPhysicalStatus_needs_commissioning /* IMPORTED_LONG_NAMED_INTEGER */, needs_commissioning /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StatusResponse_vmdPhysicalStatus, _encode_StatusResponse_vmdPhysicalStatus } from "../ISO-9506-MMS-1/StatusResponse-vmdPhysicalStatus.ta.mjs";


/**
 * @summary StatusResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatusResponse ::= SEQUENCE {
 *    vmdLogicalStatus           [0] IMPLICIT INTEGER {
 *        state-changes-allowed         (0),
 *        no-state-changes-allowed      (1),
 *        limited-services-permitted    (2),
 *        support-services-allowed      (3)
 *        } (0..3),
 *    vmdPhysicalStatus          [1] IMPLICIT INTEGER {
 *        operational                   (0),
 *        partially-operational         (1),
 *        inoperable                    (2),
 *        needs-commissioning           (3)
 *        } (0..3),
 *    localDetail                [2] IMPLICIT BIT STRING (SIZE(0..128)) OPTIONAL
 *    }
 * ```
 * 
 * @class
 */
export
class StatusResponse {
    constructor (
        /**
         * @summary `vmdLogicalStatus`.
         * @public
         * @readonly
         */
        readonly vmdLogicalStatus: StatusResponse_vmdLogicalStatus,
        /**
         * @summary `vmdPhysicalStatus`.
         * @public
         * @readonly
         */
        readonly vmdPhysicalStatus: StatusResponse_vmdPhysicalStatus,
        /**
         * @summary `localDetail`.
         * @public
         * @readonly
         */
        readonly localDetail: OPTIONAL<BIT_STRING>
    ) {
        if (localDetail && localDetail.length > 128) {
            throw new ASN1SizeError("StatusResponse.localDetail violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a StatusResponse
     * @description
     * 
     * This takes an `object` and converts it to a `StatusResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatusResponse`.
     * @returns {StatusResponse}
     */
    public static _from_object (_o: { [_K in keyof (StatusResponse)]: (StatusResponse)[_K] }): StatusResponse {
        return new StatusResponse(_o.vmdLogicalStatus, _o.vmdPhysicalStatus, _o.localDetail);
    }


}

/**
 * @summary The Leading Root Component Types of StatusResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StatusResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("vmdLogicalStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("vmdPhysicalStatus", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("localDetail", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StatusResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StatusResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StatusResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StatusResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StatusResponse: $.ASN1Decoder<StatusResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatusResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatusResponse (el: _Element): StatusResponse {
    if (!_cached_decoder_for_StatusResponse) { _cached_decoder_for_StatusResponse = function (el: _Element): StatusResponse {
    let vmdLogicalStatus!: StatusResponse_vmdLogicalStatus;
    let vmdPhysicalStatus!: StatusResponse_vmdPhysicalStatus;
    let localDetail: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "vmdLogicalStatus": (_el: _Element): void => { vmdLogicalStatus = $._decode_implicit<StatusResponse_vmdLogicalStatus>(() => _decode_StatusResponse_vmdLogicalStatus)(_el); },
        "vmdPhysicalStatus": (_el: _Element): void => { vmdPhysicalStatus = $._decode_implicit<StatusResponse_vmdPhysicalStatus>(() => _decode_StatusResponse_vmdPhysicalStatus)(_el); },
        "localDetail": (_el: _Element): void => { localDetail = $._decode_implicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StatusResponse,
        _extension_additions_list_spec_for_StatusResponse,
        _root_component_type_list_2_spec_for_StatusResponse,
        undefined,
    );
    return new StatusResponse(
        vmdLogicalStatus,
        vmdPhysicalStatus,
        localDetail
    );
}; }
    return _cached_decoder_for_StatusResponse(el);
}

let _cached_encoder_for_StatusResponse: $.ASN1Encoder<StatusResponse> | null = null;

/**
 * @summary Encodes a(n) StatusResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusResponse, encoded as an ASN.1 Element.
 */
export
function _encode_StatusResponse (value: StatusResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatusResponse) { _cached_encoder_for_StatusResponse = function (value: StatusResponse): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_StatusResponse_vmdLogicalStatus, $.BER)(value.vmdLogicalStatus, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_StatusResponse_vmdPhysicalStatus, $.BER)(value.vmdPhysicalStatus, $.BER),
            /* IF_ABSENT  */ ((value.localDetail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER)(value.localDetail, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StatusResponse(value, elGetter);
}


/* eslint-enable */
