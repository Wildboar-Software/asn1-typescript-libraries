/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileDownloadData, _decode_ProfileDownloadData, _encode_ProfileDownloadData } from "../SGP32Definitions/ProfileDownloadData.ta.mjs";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary ProfileDownloadTriggerRequest
 * @description
 * 
 * eIM Package that tells the IPA to start a Profile download or an event
 * retrieval. The eIM sends an empty request, with profileDownloadData absent,
 * only when the IPA advertises eimDownloadDataHandling and the eIM wants the
 * IPA to call ESipa.InitiateAuthentication. The IPA then continues the
 * indirect Profile download or event retrieval. In every other case
 * profileDownloadData is present and the IPA continues the direct or indirect
 * procedure that matches its capability. SGP.32 v1.2, section 2.11.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerRequest ::= [84] SEQUENCE { -- Tag 'BF54'
 *     profileDownloadData [0] ProfileDownloadData OPTIONAL,
 *     eimTransactionId [2] TransactionId OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileDownloadTriggerRequest {
    /**
     * @summary `profileDownloadData`.
     * @description
     * Activation Code, a request to contact the default SM-DP+ address already in
     * the IoT Device, or a request to contact an SM-DS. Absent only for the empty
     * trigger described on this type: the IPA has eimDownloadDataHandling and the
     * eIM wants ESipa.InitiateAuthentication. contactSmds with smdsAddress absent
     * uses the SM-DS address in the IoT Device; with smdsAddress present it uses
     * the address from the eIM. That contact retrieves the SM-DP+ address and
     * EventID over ES11 as defined in SGP.22 section 3.6.2, or over ESipa and
     * ES11' as defined in SGP.32 section 3.9.2.2. SGP.32 v1.2, section 2.11.1.3.
     * @public
     * @readonly
     */
    public readonly profileDownloadData?: OPTIONAL<ProfileDownloadData>;
    /**
     * @summary `eimTransactionId`.
     * @description
     * Optional correlator. It may link this request to a ProfileInstallationResult
     * in a direct Profile download, or identify the IoT Device in an indirect
     * Profile download. When the eIM includes it, the IPA returns the same value
     * in ProfileDownloadTriggerResult. SGP.32 v1.2, sections 2.11.1.3 and
     * 2.11.2.3.
     * @public
     * @readonly
     */
    public readonly eimTransactionId?: OPTIONAL<TransactionId>;

    constructor (
        profileDownloadData?: OPTIONAL<ProfileDownloadData>,
        eimTransactionId?: OPTIONAL<TransactionId>
    ) {
        this.profileDownloadData = profileDownloadData;
        this.eimTransactionId = eimTransactionId;
    }

    /**
     * @summary Restructures an object into a ProfileDownloadTriggerRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileDownloadTriggerRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileDownloadTriggerRequest`.
     * @returns {ProfileDownloadTriggerRequest}
     */
    public static _from_object (_o: { [_K in keyof (ProfileDownloadTriggerRequest)]: (ProfileDownloadTriggerRequest)[_K] }): ProfileDownloadTriggerRequest {
        return new ProfileDownloadTriggerRequest(_o.profileDownloadData, _o.eimTransactionId);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileDownloadTriggerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileDownloadTriggerRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("profileDownloadData", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ProfileDownloadTriggerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileDownloadTriggerRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileDownloadTriggerRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileDownloadTriggerRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileDownloadTriggerRequest: $.ASN1Decoder<ProfileDownloadTriggerRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadTriggerRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadTriggerRequest (el: _Element): ProfileDownloadTriggerRequest {
    if (!_cached_decoder_for_ProfileDownloadTriggerRequest) { _cached_decoder_for_ProfileDownloadTriggerRequest = $._decode_implicit<ProfileDownloadTriggerRequest>(() => function (el: _Element): ProfileDownloadTriggerRequest {
    let profileDownloadData: OPTIONAL<ProfileDownloadData>;
    let eimTransactionId: OPTIONAL<TransactionId>;
    const callbacks: $.DecodingMap = {
        "profileDownloadData": (_el: _Element): void => { profileDownloadData = $._decode_explicit<ProfileDownloadData>(() => _decode_ProfileDownloadData)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileDownloadTriggerRequest,
        _extension_additions_list_spec_for_ProfileDownloadTriggerRequest,
        _root_component_type_list_2_spec_for_ProfileDownloadTriggerRequest,
        undefined,
    );
    return new ProfileDownloadTriggerRequest(
        profileDownloadData,
        eimTransactionId
    );
}); }
    return _cached_decoder_for_ProfileDownloadTriggerRequest(el);
}

let _cached_encoder_for_ProfileDownloadTriggerRequest: $.ASN1Encoder<ProfileDownloadTriggerRequest> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadTriggerRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadTriggerRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadTriggerRequest (value: ProfileDownloadTriggerRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadTriggerRequest) { _cached_encoder_for_ProfileDownloadTriggerRequest = $._encode_implicit(_TagClass.context, 84, () => function (value: ProfileDownloadTriggerRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.profileDownloadData === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ProfileDownloadData, $.BER)(value.profileDownloadData, $.BER)),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileDownloadTriggerRequest(value, elGetter);
}


/* eslint-enable */
