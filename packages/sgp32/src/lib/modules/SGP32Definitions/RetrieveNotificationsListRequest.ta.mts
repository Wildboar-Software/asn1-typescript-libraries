/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RetrieveNotificationsListRequest_searchCriteria, _decode_RetrieveNotificationsListRequest_searchCriteria, _encode_RetrieveNotificationsListRequest_searchCriteria } from "../SGP32Definitions/RetrieveNotificationsListRequest-searchCriteria.ta.mjs";
// export { RetrieveNotificationsListRequest_searchCriteria, _decode_RetrieveNotificationsListRequest_searchCriteria, _encode_RetrieveNotificationsListRequest_searchCriteria } from "../SGP32Definitions/RetrieveNotificationsListRequest-searchCriteria.ta.mjs";


/**
 * @summary RetrieveNotificationsListRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListRequest ::= [43] SEQUENCE { -- Tag 'BF2B'
 *     searchCriteria CHOICE {
 *         seqNumber [0] INTEGER,
 *         profileManagementOperation [1] NotificationEvent,
 *         euiccPackageResults [2] NULL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RetrieveNotificationsListRequest {
    constructor (
        /**
         * @summary `searchCriteria`.
         * @public
         * @readonly
         */
        readonly searchCriteria: OPTIONAL<RetrieveNotificationsListRequest_searchCriteria>
    ) {}

    /**
     * @summary Restructures an object into a RetrieveNotificationsListRequest
     * @description
     * 
     * This takes an `object` and converts it to a `RetrieveNotificationsListRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RetrieveNotificationsListRequest`.
     * @returns {RetrieveNotificationsListRequest}
     */
    public static _from_object (_o: { [_K in keyof (RetrieveNotificationsListRequest)]: (RetrieveNotificationsListRequest)[_K] }): RetrieveNotificationsListRequest {
        return new RetrieveNotificationsListRequest(_o.searchCriteria);
    }


}

/**
 * @summary The Leading Root Component Types of RetrieveNotificationsListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RetrieveNotificationsListRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("searchCriteria", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of RetrieveNotificationsListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RetrieveNotificationsListRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RetrieveNotificationsListRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RetrieveNotificationsListRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RetrieveNotificationsListRequest: $.ASN1Decoder<RetrieveNotificationsListRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveNotificationsListRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveNotificationsListRequest (el: _Element): RetrieveNotificationsListRequest {
    if (!_cached_decoder_for_RetrieveNotificationsListRequest) { _cached_decoder_for_RetrieveNotificationsListRequest = $._decode_implicit<RetrieveNotificationsListRequest>(() => function (el: _Element): RetrieveNotificationsListRequest {
    let searchCriteria: OPTIONAL<RetrieveNotificationsListRequest_searchCriteria>;
    const callbacks: $.DecodingMap = {
        "searchCriteria": (_el: _Element): void => { searchCriteria = _decode_RetrieveNotificationsListRequest_searchCriteria(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RetrieveNotificationsListRequest,
        _extension_additions_list_spec_for_RetrieveNotificationsListRequest,
        _root_component_type_list_2_spec_for_RetrieveNotificationsListRequest,
        undefined,
    );
    return new RetrieveNotificationsListRequest(
        searchCriteria
    );
}); }
    return _cached_decoder_for_RetrieveNotificationsListRequest(el);
}

let _cached_encoder_for_RetrieveNotificationsListRequest: $.ASN1Encoder<RetrieveNotificationsListRequest> | null = null;

/**
 * @summary Encodes a(n) RetrieveNotificationsListRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveNotificationsListRequest, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveNotificationsListRequest (value: RetrieveNotificationsListRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveNotificationsListRequest) { _cached_encoder_for_RetrieveNotificationsListRequest = $._encode_implicit(_TagClass.context, 43, () => function (value: RetrieveNotificationsListRequest, elGetter: $.ASN1Encoder<RetrieveNotificationsListRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.searchCriteria === undefined) ? undefined : _encode_RetrieveNotificationsListRequest_searchCriteria(value.searchCriteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_RetrieveNotificationsListRequest(value, elGetter);
}


/* eslint-enable */
