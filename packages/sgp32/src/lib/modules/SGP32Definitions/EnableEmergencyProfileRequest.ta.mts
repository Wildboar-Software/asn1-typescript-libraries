/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnableEmergencyProfileRequest
 * @description
 * 
 * ES10b.EnableEmergencyProfile command data. Optional for the eUICC and the
 * IPA. It disables the currently enabled Profile and enables the Emergency
 * Profile whose ecallIndication is TRUE (SGP.32 v1.2, section 5.9.22). Tag
 * 'BF5B'.
 *
 * The command is atomic: an error leaves the Profiles in their prior states.
 * Enabling the Emergency Profile generates no Notifications. The Emergency
 * Profile stays enabled across an IoT Device restart until
 * ES10b.DisableEmergencyProfile. While it is enabled, the eUICC rejects an
 * EuiccPackageRequest with ecallActive (sections 5.9.22 and 2.11.2.1).
 *
 * refreshFlag clear performs the swap inside this command, after closing
 * channels of the current Profile and resetting PIN status. refreshFlag set
 * marks the current Profile "to be disabled" and the Emergency Profile "to be
 * enabled", returns ok, then sends REFRESH in "eUICC Profile State Change"
 * mode when the IoT Device supports it, otherwise "UICC Reset". The swap
 * completes on a successful TERMINAL RESPONSE or on eUICC reset. A temporary
 * or permanent problem in the TERMINAL RESPONSE leaves both Profiles
 * unchanged. An open proactive session may yield catBusy; otherwise the eUICC
 * ends that session.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableEmergencyProfileRequest ::= [91] SEQUENCE { -- Tag 'BF5B'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class EnableEmergencyProfileRequest {
    /**
     * @summary `refreshFlag`.
     * @description
     * When set, the Profile swap is finished by a REFRESH proactive command. When
     * clear, the eUICC disables the current Profile and enables the Emergency
     * Profile inside this command (SGP.32 v1.2, section 5.9.22).
     * @public
     * @readonly
     */
    public readonly refreshFlag: BOOLEAN;

    constructor (
        refreshFlag: BOOLEAN
    ) {
        this.refreshFlag = refreshFlag;
    }

    /**
     * @summary Restructures an object into a EnableEmergencyProfileRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EnableEmergencyProfileRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnableEmergencyProfileRequest`.
     * @returns {EnableEmergencyProfileRequest}
     */
    public static _from_object (_o: { [_K in keyof (EnableEmergencyProfileRequest)]: (EnableEmergencyProfileRequest)[_K] }): EnableEmergencyProfileRequest {
        return new EnableEmergencyProfileRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of EnableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnableEmergencyProfileRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EnableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnableEmergencyProfileRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnableEmergencyProfileRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnableEmergencyProfileRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnableEmergencyProfileRequest: $.ASN1Decoder<EnableEmergencyProfileRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableEmergencyProfileRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableEmergencyProfileRequest (el: _Element): EnableEmergencyProfileRequest {
    if (!_cached_decoder_for_EnableEmergencyProfileRequest) { _cached_decoder_for_EnableEmergencyProfileRequest = $._decode_implicit<EnableEmergencyProfileRequest>(() => function (el: _Element): EnableEmergencyProfileRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("EnableEmergencyProfileRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    const refreshFlag: BOOLEAN = $._decodeBoolean(sequence[0]);
    return new EnableEmergencyProfileRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_EnableEmergencyProfileRequest(el);
}

let _cached_encoder_for_EnableEmergencyProfileRequest: $.ASN1Encoder<EnableEmergencyProfileRequest> | null = null;

/**
 * @summary Encodes a(n) EnableEmergencyProfileRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableEmergencyProfileRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EnableEmergencyProfileRequest (value: EnableEmergencyProfileRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableEmergencyProfileRequest) { _cached_encoder_for_EnableEmergencyProfileRequest = $._encode_implicit(_TagClass.context, 91, () => function (value: EnableEmergencyProfileRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EnableEmergencyProfileRequest(value, elGetter);
}


/* eslint-enable */
