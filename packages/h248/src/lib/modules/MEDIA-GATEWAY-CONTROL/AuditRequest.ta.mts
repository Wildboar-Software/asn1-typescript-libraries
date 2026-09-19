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
import { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
// export { TerminationID, _decode_TerminationID, _encode_TerminationID } from "../MEDIA-GATEWAY-CONTROL/TerminationID.ta.mjs";
import { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
// export { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";


/**
 * @summary AuditRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditRequest ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationID,
 *         auditDescriptor                [1] AuditDescriptor,
 *         ...,
 *         terminationIDList            [3] TerminationIDList OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class AuditRequest {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationID,
        /**
         * @summary `auditDescriptor`.
         * @public
         * @readonly
         */
        readonly auditDescriptor: AuditDescriptor,
        /**
         * @summary `terminationIDList`.
         * @public
         * @readonly
         */
        readonly terminationIDList: OPTIONAL<TerminationIDList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuditRequest
     * @description
     * 
     * This takes an `object` and converts it to a `AuditRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditRequest`.
     * @returns {AuditRequest}
     */
    public static _from_object (_o: { [_K in keyof (AuditRequest)]: (AuditRequest)[_K] }): AuditRequest {
        return new AuditRequest(_o.terminationID, _o.auditDescriptor, _o.terminationIDList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuditRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("auditDescriptor", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuditRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuditRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationIDList", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_AuditRequest: $.ASN1Decoder<AuditRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditRequest (el: _Element): AuditRequest {
    if (!_cached_decoder_for_AuditRequest) { _cached_decoder_for_AuditRequest = function (el: _Element): AuditRequest {
    let terminationID!: TerminationID;
    let auditDescriptor!: AuditDescriptor;
    let terminationIDList: OPTIONAL<TerminationIDList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationID": (_el: _Element): void => { terminationID = $._decode_implicit<TerminationID>(() => _decode_TerminationID)(_el); },
        "auditDescriptor": (_el: _Element): void => { auditDescriptor = $._decode_implicit<AuditDescriptor>(() => _decode_AuditDescriptor)(_el); },
        "terminationIDList": (_el: _Element): void => { terminationIDList = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuditRequest,
        _extension_additions_list_spec_for_AuditRequest,
        _root_component_type_list_2_spec_for_AuditRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuditRequest(
        terminationID,
        auditDescriptor,
        terminationIDList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AuditRequest(el);
}

let _cached_encoder_for_AuditRequest: $.ASN1Encoder<AuditRequest> | null = null;

/**
 * @summary Encodes a(n) AuditRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditRequest, encoded as an ASN.1 Element.
 */
export
function _encode_AuditRequest (value: AuditRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditRequest) { _cached_encoder_for_AuditRequest = function (value: AuditRequest, elGetter: $.ASN1Encoder<AuditRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationID, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AuditDescriptor, $.BER)(value.auditDescriptor, $.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.terminationIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TerminationIDList, $.BER)(value.terminationIDList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuditRequest(value, elGetter);
}


/* eslint-enable */
