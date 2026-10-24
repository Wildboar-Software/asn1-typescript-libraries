/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { ProfileDownloadTriggerResult_profileDownloadTriggerResultData, _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData, _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData } from "../SGP32Definitions/ProfileDownloadTriggerResult-profileDownloadTriggerResultData.ta.mjs";


/**
 * @summary ProfileDownloadTriggerResult
 * @description
 * 
 * IPA report of a direct Profile download that an eIM requested. The IPA sends
 * it to the eIM. When the request carried eimTransactionId, this result
 * carries the same value; otherwise eimTransactionId is absent. When the
 * Emergency Profile is enabled, the IPA stops and returns profileDownloadError
 * with ecallActive. A successful ES10b.LoadBoundProfilePackage yields
 * profileInstallationResult. Any other outcome yields profileDownloadError.
 * SGP.32 v1.2, section 2.11.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerResult ::= [84] SEQUENCE { -- tag 'BF54'
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     profileDownloadTriggerResultData CHOICE {
 *         profileInstallationResult [55] ProfileInstallationResult, -- see SGP.22 [4]
 *         profileDownloadError SEQUENCE {
 *             profileDownloadErrorReason [0] INTEGER {
 *                 ecallActive (104),
 *                 undefinedError(127)
 *             },
 *             errorResponse OCTET STRING OPTIONAL
 *         }
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ProfileDownloadTriggerResult {
    /**
     * @summary `eimTransactionId`.
     * @description
     * Same transaction identifier the eIM put in ProfileDownloadTriggerRequest.
     * Absent when the request omitted it. SGP.32 v1.2, section 2.11.2.3.
     * @public
     * @readonly
     */
    public readonly eimTransactionId: OPTIONAL<TransactionId>;
    /**
     * @summary `profileDownloadTriggerResultData`.
     * @description
     * Either the Profile Installation Result from ES10b.LoadBoundProfilePackage,
     * or profileDownloadError. SGP.32 v1.2, section 2.11.2.3.
     * @public
     * @readonly
     */
    public readonly profileDownloadTriggerResultData: ProfileDownloadTriggerResult_profileDownloadTriggerResultData;

    constructor (
        eimTransactionId: OPTIONAL<TransactionId>,
        profileDownloadTriggerResultData: ProfileDownloadTriggerResult_profileDownloadTriggerResultData
    ) {
        this.eimTransactionId = eimTransactionId;
        this.profileDownloadTriggerResultData = profileDownloadTriggerResultData;
    }

    /**
     * @summary Restructures an object into a ProfileDownloadTriggerResult
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileDownloadTriggerResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileDownloadTriggerResult`.
     * @returns {ProfileDownloadTriggerResult}
     */
    public static _from_object (_o: { [_K in keyof (ProfileDownloadTriggerResult)]: (ProfileDownloadTriggerResult)[_K] }): ProfileDownloadTriggerResult {
        return new ProfileDownloadTriggerResult(_o.eimTransactionId, _o.profileDownloadTriggerResultData);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileDownloadTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileDownloadTriggerResult: $.ComponentSpec[] = [
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("profileDownloadTriggerResultData", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ProfileDownloadTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileDownloadTriggerResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileDownloadTriggerResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileDownloadTriggerResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileDownloadTriggerResult: $.ASN1Decoder<ProfileDownloadTriggerResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadTriggerResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadTriggerResult (el: _Element): ProfileDownloadTriggerResult {
    if (!_cached_decoder_for_ProfileDownloadTriggerResult) { _cached_decoder_for_ProfileDownloadTriggerResult = $._decode_implicit<ProfileDownloadTriggerResult>(() => function (el: _Element): ProfileDownloadTriggerResult {
    let eimTransactionId: OPTIONAL<TransactionId>;
    let profileDownloadTriggerResultData!: ProfileDownloadTriggerResult_profileDownloadTriggerResultData;
    const callbacks: $.DecodingMap = {
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "profileDownloadTriggerResultData": (_el: _Element): void => { profileDownloadTriggerResultData = _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileDownloadTriggerResult,
        _extension_additions_list_spec_for_ProfileDownloadTriggerResult,
        _root_component_type_list_2_spec_for_ProfileDownloadTriggerResult,
        undefined,
    );
    return new ProfileDownloadTriggerResult(
        eimTransactionId,
        profileDownloadTriggerResultData
    );
}); }
    return _cached_decoder_for_ProfileDownloadTriggerResult(el);
}

let _cached_encoder_for_ProfileDownloadTriggerResult: $.ASN1Encoder<ProfileDownloadTriggerResult> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadTriggerResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadTriggerResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadTriggerResult (value: ProfileDownloadTriggerResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadTriggerResult) { _cached_encoder_for_ProfileDownloadTriggerResult = $._encode_implicit(_TagClass.context, 84, () => function (value: ProfileDownloadTriggerResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData(value.profileDownloadTriggerResultData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileDownloadTriggerResult(value, elGetter);
}


/* eslint-enable */
