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
import { ContextID, _decode_ContextID, _encode_ContextID } from "../MEDIA-GATEWAY-CONTROL/ContextID.ta.mjs";
// export { ContextID, _decode_ContextID, _encode_ContextID } from "../MEDIA-GATEWAY-CONTROL/ContextID.ta.mjs";
import { ContextRequest, _decode_ContextRequest, _encode_ContextRequest } from "../MEDIA-GATEWAY-CONTROL/ContextRequest.ta.mjs";
// export { ContextRequest, _decode_ContextRequest, _encode_ContextRequest } from "../MEDIA-GATEWAY-CONTROL/ContextRequest.ta.mjs";
import { ContextAttrAuditRequest, _decode_ContextAttrAuditRequest, _encode_ContextAttrAuditRequest } from "../MEDIA-GATEWAY-CONTROL/ContextAttrAuditRequest.ta.mjs";
// export { ContextAttrAuditRequest, _decode_ContextAttrAuditRequest, _encode_ContextAttrAuditRequest } from "../MEDIA-GATEWAY-CONTROL/ContextAttrAuditRequest.ta.mjs";
import { CommandRequest, _decode_CommandRequest, _encode_CommandRequest } from "../MEDIA-GATEWAY-CONTROL/CommandRequest.ta.mjs";
// export { CommandRequest, _decode_CommandRequest, _encode_CommandRequest } from "../MEDIA-GATEWAY-CONTROL/CommandRequest.ta.mjs";


/**
 * @summary ActionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActionRequest ::= SEQUENCE
 *     {
 *         contextId                [0] ContextID,
 *         contextRequest            [1] ContextRequest OPTIONAL,
 *         contextAttrAuditReq        [2] ContextAttrAuditRequest OPTIONAL,
 *         commandRequests            [3] SEQUENCE OF CommandRequest
 *     }
 * ```
 * 
 * @class
 */
export
class ActionRequest {
    constructor (
        /**
         * @summary `contextId`.
         * @public
         * @readonly
         */
        readonly contextId: ContextID,
        /**
         * @summary `contextRequest`.
         * @public
         * @readonly
         */
        readonly contextRequest: OPTIONAL<ContextRequest>,
        /**
         * @summary `contextAttrAuditReq`.
         * @public
         * @readonly
         */
        readonly contextAttrAuditReq: OPTIONAL<ContextAttrAuditRequest>,
        /**
         * @summary `commandRequests`.
         * @public
         * @readonly
         */
        readonly commandRequests: CommandRequest[]
    ) {}

    /**
     * @summary Restructures an object into a ActionRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ActionRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActionRequest`.
     * @returns {ActionRequest}
     */
    public static _from_object (_o: { [_K in keyof (ActionRequest)]: (ActionRequest)[_K] }): ActionRequest {
        return new ActionRequest(_o.contextId, _o.contextRequest, _o.contextAttrAuditReq, _o.commandRequests);
    }


}

/**
 * @summary The Leading Root Component Types of ActionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActionRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("contextId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("contextRequest", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("contextAttrAuditReq", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("commandRequests", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ActionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActionRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActionRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActionRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActionRequest: $.ASN1Decoder<ActionRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActionRequest (el: _Element): ActionRequest {
    if (!_cached_decoder_for_ActionRequest) { _cached_decoder_for_ActionRequest = function (el: _Element): ActionRequest {
    let contextId!: ContextID;
    let contextRequest: OPTIONAL<ContextRequest>;
    let contextAttrAuditReq: OPTIONAL<ContextAttrAuditRequest>;
    let commandRequests!: CommandRequest[];
    const callbacks: $.DecodingMap = {
        "contextId": (_el: _Element): void => { contextId = $._decode_implicit<ContextID>(() => _decode_ContextID)(_el); },
        "contextRequest": (_el: _Element): void => { contextRequest = $._decode_implicit<ContextRequest>(() => _decode_ContextRequest)(_el); },
        "contextAttrAuditReq": (_el: _Element): void => { contextAttrAuditReq = $._decode_implicit<ContextAttrAuditRequest>(() => _decode_ContextAttrAuditRequest)(_el); },
        "commandRequests": (_el: _Element): void => { commandRequests = $._decode_implicit<CommandRequest[]>(() => $._decodeSequenceOf<CommandRequest>(() => _decode_CommandRequest))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActionRequest,
        _extension_additions_list_spec_for_ActionRequest,
        _root_component_type_list_2_spec_for_ActionRequest,
        undefined,
    );
    return new ActionRequest(
        contextId,
        contextRequest,
        contextAttrAuditReq,
        commandRequests
    );
}; }
    return _cached_decoder_for_ActionRequest(el);
}

let _cached_encoder_for_ActionRequest: $.ASN1Encoder<ActionRequest> | null = null;

/**
 * @summary Encodes a(n) ActionRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ActionRequest (value: ActionRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActionRequest) { _cached_encoder_for_ActionRequest = function (value: ActionRequest, elGetter: $.ASN1Encoder<ActionRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ContextID, $.BER)(value.contextId, $.BER),
            /* IF_ABSENT  */ ((value.contextRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ContextRequest, $.BER)(value.contextRequest, $.BER)),
            /* IF_ABSENT  */ ((value.contextAttrAuditReq === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ContextAttrAuditRequest, $.BER)(value.contextAttrAuditReq, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<CommandRequest>(() => _encode_CommandRequest, $.BER), $.BER)(value.commandRequests, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActionRequest(value, elGetter);
}


/* eslint-enable */
