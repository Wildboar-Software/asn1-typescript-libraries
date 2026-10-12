/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ImmediateEnableRequest
 * @description
 * 
 * ES10b.ImmediateEnable command. The IPA requests immediate enabling of the
 * Profile just installed, without eIM involvement. The eUICC MAY be configured
 * to support that. The eUICC rejects the command with `noSessionContext`
 * unless, ignoring Notification retrieval, the previous ES10 function was
 * ES10b.LoadBoundProfilePackage. It rejects with `immediateEnableNotAvailable`
 * when immediate enabling was not granted for that Profile, or when the target
 * is an Emergency Profile with `ecallIndication` TRUE. SGP.32 v1.2, section
 * 5.9.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableRequest ::= [90] SEQUENCE { -- Tag 'BF5A'
 *     refreshFlag BOOLEAN -- indicating whether REFRESH is required
 * }
 * ```
 * 
 * @class
 */
export
class ImmediateEnableRequest {
    constructor (
        /**
         * @summary `refreshFlag`.
         * @description
         * When false, the eUICC closes logical channels of the currently enabled
         * Profile, resets PIN status, disables that Profile, enables the downloaded
         * Profile, clears any Profile Rollback authorisation, selects the MF, and
         * returns `ok`. When true, it marks the current Profile to be disabled and the
         * downloaded Profile to be enabled, clears Rollback authorisation, returns
         * `ok`, and sends REFRESH in "eUICC Profile State Change" mode when the IoT
         * Device supports it, otherwise in "UICC Reset" mode (ETSI TS 102 223). A
         * Terminal Response of "temporary problem with executing command" or
         * "permanent problem with executing command" leaves both Profiles unchanged.
         * SGP.32 v1.2, section 5.9.15.
         * @public
         * @readonly
         */
        readonly refreshFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a ImmediateEnableRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ImmediateEnableRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImmediateEnableRequest`.
     * @returns {ImmediateEnableRequest}
     */
    public static _from_object (_o: { [_K in keyof (ImmediateEnableRequest)]: (ImmediateEnableRequest)[_K] }): ImmediateEnableRequest {
        return new ImmediateEnableRequest(_o.refreshFlag);
    }


}

/**
 * @summary The Leading Root Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("refreshFlag", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ImmediateEnableRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImmediateEnableRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ImmediateEnableRequest: $.ASN1Decoder<ImmediateEnableRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImmediateEnableRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ImmediateEnableRequest (el: _Element): ImmediateEnableRequest {
    if (!_cached_decoder_for_ImmediateEnableRequest) { _cached_decoder_for_ImmediateEnableRequest = $._decode_implicit<ImmediateEnableRequest>(() => function (el: _Element): ImmediateEnableRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ImmediateEnableRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "refreshFlag";
    const refreshFlag: BOOLEAN = $._decodeBoolean(sequence[0]);
    return new ImmediateEnableRequest(
        refreshFlag,

    );
}); }
    return _cached_decoder_for_ImmediateEnableRequest(el);
}

let _cached_encoder_for_ImmediateEnableRequest: $.ASN1Encoder<ImmediateEnableRequest> | null = null;

/**
 * @summary Encodes a(n) ImmediateEnableRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImmediateEnableRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ImmediateEnableRequest (value: ImmediateEnableRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ImmediateEnableRequest) { _cached_encoder_for_ImmediateEnableRequest = $._encode_implicit(_TagClass.context, 90, () => function (value: ImmediateEnableRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeBoolean(value.refreshFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ImmediateEnableRequest(value, elGetter);
}


/* eslint-enable */
