/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { RetrieveNotificationsListRequest_searchCriteria, _decode_RetrieveNotificationsListRequest_searchCriteria, _encode_RetrieveNotificationsListRequest_searchCriteria } from "../RSPDefinitions/RetrieveNotificationsListRequest-searchCriteria.ta.mjs";
// export { RetrieveNotificationsListRequest_searchCriteria, _decode_RetrieveNotificationsListRequest_searchCriteria, _encode_RetrieveNotificationsListRequest_searchCriteria } from "../RSPDefinitions/RetrieveNotificationsListRequest-searchCriteria.ta.mjs";


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
 *         profileManagementOperation [1] NotificationEvent
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
