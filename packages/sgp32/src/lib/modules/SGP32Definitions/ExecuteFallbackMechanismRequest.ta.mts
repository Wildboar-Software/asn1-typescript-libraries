/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExecuteFallbackMechanismRequest
 * @description
 * 
 * ES10b.ExecuteFallbackMechanism command data. Optional for the eUICC. The IPA
 * uses it to enable the Profile that has the Fallback Attribute and to disable
 * the currently enabled Profile (SGP.32 v1.2, section 5.9.20). Tag 'BF5D'.
 *
 * The command is atomic: an error leaves both Profiles unchanged. It is
 * rejected with ecallActive while the Emergency Profile is enabled (sections
 * 5.9.20 and 2.11.2.1), with commandError when no Profile is enabled, with
 * fallbackNotAvailable when no Profile has the Fallback Attribute, and with
 * profileNotInDisabledState when the Fallback Profile is already enabled.
 *
 * refreshFlag clear swaps the Profiles inside this command, after closing
 * channels of the current Profile and resetting PIN status, and clears any
 * Rollback authorisation. refreshFlag set marks the current Profile "to be
 * disabled" and the Fallback Profile "to be enabled", returns ok, and sends
 * REFRESH in "eUICC Profile State Change" mode when the IoT Device supports
 * it, otherwise "UICC Reset". The swap completes on a successful TERMINAL
 * RESPONSE or on eUICC reset. A temporary or permanent problem in the TERMINAL
 * RESPONSE leaves both Profiles unchanged. An open proactive session may yield
 * catBusy; otherwise the eUICC ends that session. Each Profile that is
 * actually disabled or enabled generates the OtherSignedNotification entries
 * configured in its metadata.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExecuteFallbackMechanismRequest ::= [93] SEQUENCE { -- Tag 'BF5D'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ExecuteFallbackMechanismRequest {
    /**
     * @summary `refreshFlag`.
     * @description
     * When set, the Fallback swap is finished by a REFRESH proactive command. When
     * clear, the eUICC disables the enabled Profile and enables the Fallback
     * Profile inside this command (SGP.32 v1.2, section 5.9.20).
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
     * @summary Restructures an object into a ExecuteFallbackMechanismRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ExecuteFallbackMechanismRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExecuteFallbackMechanismRequest`.
     * @returns {ExecuteFallbackMechanismRequest}
     */
    public static _from_object (_o: { [_K in keyof (ExecuteFallbackMechanismRequest)]: (ExecuteFallbackMechanismRequest)[_K] }): ExecuteFallbackMechanismRequest {
        return new ExecuteFallbackMechanismRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExecuteFallbackMechanismRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExecuteFallbackMechanismRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExecuteFallbackMechanismRequest: $.ASN1Decoder<ExecuteFallbackMechanismRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExecuteFallbackMechanismRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExecuteFallbackMechanismRequest (el: _Element): ExecuteFallbackMechanismRequest {
    if (!_cached_decoder_for_ExecuteFallbackMechanismRequest) { _cached_decoder_for_ExecuteFallbackMechanismRequest = $._decode_implicit<ExecuteFallbackMechanismRequest>(() => function (el: _Element): ExecuteFallbackMechanismRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ExecuteFallbackMechanismRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    const refreshFlag: BOOLEAN = $._decodeBoolean(sequence[0]);
    return new ExecuteFallbackMechanismRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ExecuteFallbackMechanismRequest(el);
}

let _cached_encoder_for_ExecuteFallbackMechanismRequest: $.ASN1Encoder<ExecuteFallbackMechanismRequest> | null = null;

/**
 * @summary Encodes a(n) ExecuteFallbackMechanismRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExecuteFallbackMechanismRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ExecuteFallbackMechanismRequest (value: ExecuteFallbackMechanismRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExecuteFallbackMechanismRequest) { _cached_encoder_for_ExecuteFallbackMechanismRequest = $._encode_implicit(_TagClass.context, 93, () => function (value: ExecuteFallbackMechanismRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ExecuteFallbackMechanismRequest(value, elGetter);
}


/* eslint-enable */
