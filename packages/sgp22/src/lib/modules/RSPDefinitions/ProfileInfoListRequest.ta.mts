/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInfoListRequest_searchCriteria, _decode_ProfileInfoListRequest_searchCriteria, _encode_ProfileInfoListRequest_searchCriteria } from "../RSPDefinitions/ProfileInfoListRequest-searchCriteria.ta.mjs";
// export { ProfileInfoListRequest_searchCriteria, _decode_ProfileInfoListRequest_searchCriteria, _encode_ProfileInfoListRequest_searchCriteria } from "../RSPDefinitions/ProfileInfoListRequest-searchCriteria.ta.mjs";


/**
 * @summary ProfileInfoListRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListRequest ::= [45] SEQUENCE { -- Tag 'BF2D'
 *     searchCriteria [0] CHOICE {
 *         isdpAid [APPLICATION 15] OctetTo16, -- AID of the ISD-P, tag '4F'
 *         iccid Iccid, -- ICCID, tag '5A'
 *         profileClass [21] ProfileClass -- Tag '95'
 *     } OPTIONAL,
 *     tagList [APPLICATION 28] OCTET STRING OPTIONAL, -- tag '5C'
 *     iotSpecificTagList [APPLICATION 29] OCTET STRING OPTIONAL -- tag '5D'
 * }
 * ```
 * 
 * @class
 */
export
class ProfileInfoListRequest {
    constructor (
        /**
         * @summary `searchCriteria`.
         * @public
         * @readonly
         */
        readonly searchCriteria: OPTIONAL<ProfileInfoListRequest_searchCriteria>,
        /**
         * @summary `tagList`.
         * @public
         * @readonly
         */
        readonly tagList: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `iotSpecificTagList`.
         * @public
         * @readonly
         */
        readonly iotSpecificTagList: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ProfileInfoListRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileInfoListRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileInfoListRequest`.
     * @returns {ProfileInfoListRequest}
     */
    public static _from_object (_o: { [_K in keyof (ProfileInfoListRequest)]: (ProfileInfoListRequest)[_K] }): ProfileInfoListRequest {
        return new ProfileInfoListRequest(_o.searchCriteria, _o.tagList, _o.iotSpecificTagList);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileInfoListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileInfoListRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("searchCriteria", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tagList", true, $.hasTag(_TagClass.application, 28)),
    new $.ComponentSpec("iotSpecificTagList", true, $.hasTag(_TagClass.application, 29))
];

/**
 * @summary The Trailing Root Component Types of ProfileInfoListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileInfoListRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileInfoListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileInfoListRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileInfoListRequest: $.ASN1Decoder<ProfileInfoListRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfoListRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfoListRequest (el: _Element): ProfileInfoListRequest {
    if (!_cached_decoder_for_ProfileInfoListRequest) { _cached_decoder_for_ProfileInfoListRequest = $._decode_implicit<ProfileInfoListRequest>(() => function (el: _Element): ProfileInfoListRequest {
    let searchCriteria: OPTIONAL<ProfileInfoListRequest_searchCriteria>;
    let tagList: OPTIONAL<OCTET_STRING>;
    let iotSpecificTagList: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "searchCriteria": (_el: _Element): void => { searchCriteria = $._decode_explicit<ProfileInfoListRequest_searchCriteria>(() => _decode_ProfileInfoListRequest_searchCriteria)(_el); },
        "tagList": (_el: _Element): void => { tagList = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iotSpecificTagList": (_el: _Element): void => { iotSpecificTagList = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProfileInfoListRequest,
        _extension_additions_list_spec_for_ProfileInfoListRequest,
        _root_component_type_list_2_spec_for_ProfileInfoListRequest,
        undefined,
    );
    return new ProfileInfoListRequest(
        searchCriteria,
        tagList,
        iotSpecificTagList
    );
}); }
    return _cached_decoder_for_ProfileInfoListRequest(el);
}

let _cached_encoder_for_ProfileInfoListRequest: $.ASN1Encoder<ProfileInfoListRequest> | null = null;

/**
 * @summary Encodes a(n) ProfileInfoListRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfoListRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfoListRequest (value: ProfileInfoListRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfoListRequest) { _cached_encoder_for_ProfileInfoListRequest = $._encode_implicit(_TagClass.context, 45, () => function (value: ProfileInfoListRequest, elGetter: $.ASN1Encoder<ProfileInfoListRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.searchCriteria === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ProfileInfoListRequest_searchCriteria, $.BER)(value.searchCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.tagList === undefined) ? undefined : $._encode_implicit(_TagClass.application, 28, () => $._encodeOctetString, $.BER)(value.tagList, $.BER)),
            /* IF_ABSENT  */ ((value.iotSpecificTagList === undefined) ? undefined : $._encode_implicit(_TagClass.application, 29, () => $._encodeOctetString, $.BER)(value.iotSpecificTagList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileInfoListRequest(value, elGetter);
}


/* eslint-enable */
