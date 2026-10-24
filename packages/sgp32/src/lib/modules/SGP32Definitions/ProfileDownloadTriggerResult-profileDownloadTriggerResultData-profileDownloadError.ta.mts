/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason, _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason, type ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason } from "../SGP32Definitions/ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError-profileDownloadErrorReason.ta.mjs";


/**
 * @summary ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
 * @description
 * 
 * Failure of a Profile download triggered by the eIM. Used when the IPA has no
 * Profile Installation Result from ES10b.LoadBoundProfilePackage, and when the
 * Emergency Profile is enabled. SGP.32 v1.2, section 2.11.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileDownloadTriggerResult-profileDownloadTriggerResultData-profileDownloadError ::= SEQUENCE {
 *     profileDownloadErrorReason [0] INTEGER {
 *         ecallActive(104),
 *         undefinedError(127)
 *     },
 *     errorResponse OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError {
    /**
     * @summary `profileDownloadErrorReason`.
     * @description
     * ecallActive(104) when the Emergency Profile is enabled. The only other named
     * value is undefinedError(127). SGP.32 v1.2, section 2.11.2.3.
     * @public
     * @readonly
     */
    public readonly profileDownloadErrorReason: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason;
    /**
     * @summary `errorResponse`.
     * @description
     * When present, the error response of an ES10b function or of an ES9+ function
     * with ASN.1 binding that the IPA hit during the download. SGP.32 v1.2 says
     * the error response of an ES9+ function with JSON binding is for further
     * study. SGP.32 v1.2, section 2.11.2.3.
     * @public
     * @readonly
     */
    public readonly errorResponse?: OPTIONAL<OCTET_STRING>;

    constructor (
        profileDownloadErrorReason: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason,
        errorResponse?: OPTIONAL<OCTET_STRING>
    ) {
        this.profileDownloadErrorReason = profileDownloadErrorReason;
        this.errorResponse = errorResponse;
    }

    /**
     * @summary Restructures an object into a ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError`.
     * @returns {ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError}
     */
    public static _from_object (_o: { [_K in keyof (ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError)]: (ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError)[_K] }): ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError {
        return new ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError(_o.profileDownloadErrorReason, _o.errorResponse);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError: $.ComponentSpec[] = [
    new $.ComponentSpec("profileDownloadErrorReason", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorResponse", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError: $.ASN1Decoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError (el: _Element): ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError {
    if (!_cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError) { _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError = function (el: _Element): ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError {
    let profileDownloadErrorReason!: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason;
    let errorResponse: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "profileDownloadErrorReason": (_el: _Element): void => { profileDownloadErrorReason = $._decode_implicit<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason>(() => _decode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason)(_el); },
        "errorResponse": (_el: _Element): void => { errorResponse = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError,
        _extension_additions_list_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError,
        _root_component_type_list_2_spec_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError,
        undefined,
    );
    return new ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError(
        profileDownloadErrorReason,
        errorResponse
    );
}; }
    return _cached_decoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError(el);
}

let _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError: $.ASN1Encoder<ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError> | null = null;

/**
 * @summary Encodes a(n) ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError (value: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError) { _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError = function (value: ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError_profileDownloadErrorReason, $.BER)(value.profileDownloadErrorReason, $.BER),
            /* IF_ABSENT  */ ((value.errorResponse === undefined) ? undefined : $._encodeOctetString(value.errorResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProfileDownloadTriggerResult_profileDownloadTriggerResultData_profileDownloadError(value, elGetter);
}


/* eslint-enable */
