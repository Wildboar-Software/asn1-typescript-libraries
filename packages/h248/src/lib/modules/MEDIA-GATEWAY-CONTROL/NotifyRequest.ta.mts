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
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { ObservedEventsDescriptor, _decode_ObservedEventsDescriptor, _encode_ObservedEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/ObservedEventsDescriptor.ta.mjs";
// export { ObservedEventsDescriptor, _decode_ObservedEventsDescriptor, _encode_ObservedEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/ObservedEventsDescriptor.ta.mjs";
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";


/**
 * @summary NotifyRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyRequest ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         observedEventsDescriptor    [1] ObservedEventsDescriptor,
 *         errorDescriptor                [2] ErrorDescriptor OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class NotifyRequest {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
        /**
         * @summary `observedEventsDescriptor`.
         * @public
         * @readonly
         */
        readonly observedEventsDescriptor: ObservedEventsDescriptor,
        /**
         * @summary `errorDescriptor`.
         * @public
         * @readonly
         */
        readonly errorDescriptor: OPTIONAL<ErrorDescriptor>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotifyRequest
     * @description
     * 
     * This takes an `object` and converts it to a `NotifyRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotifyRequest`.
     * @returns {NotifyRequest}
     */
    public static _from_object (_o: { [_K in keyof (NotifyRequest)]: (NotifyRequest)[_K] }): NotifyRequest {
        return new NotifyRequest(_o.terminationID, _o.observedEventsDescriptor, _o.errorDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotifyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotifyRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("observedEventsDescriptor", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("errorDescriptor", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NotifyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotifyRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotifyRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotifyRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotifyRequest: $.ASN1Decoder<NotifyRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyRequest (el: _Element): NotifyRequest {
    if (!_cached_decoder_for_NotifyRequest) { _cached_decoder_for_NotifyRequest = function (el: _Element): NotifyRequest {
    let terminationID!: TerminationIDList;
    let observedEventsDescriptor!: ObservedEventsDescriptor;
    let errorDescriptor: OPTIONAL<ErrorDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationID": (_el: _Element): void => { terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(_el); },
        "observedEventsDescriptor": (_el: _Element): void => { observedEventsDescriptor = $._decode_implicit<ObservedEventsDescriptor>(() => _decode_ObservedEventsDescriptor)(_el); },
        "errorDescriptor": (_el: _Element): void => { errorDescriptor = $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotifyRequest,
        _extension_additions_list_spec_for_NotifyRequest,
        _root_component_type_list_2_spec_for_NotifyRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotifyRequest(
        terminationID,
        observedEventsDescriptor,
        errorDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotifyRequest(el);
}

let _cached_encoder_for_NotifyRequest: $.ASN1Encoder<NotifyRequest> | null = null;

/**
 * @summary Encodes a(n) NotifyRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyRequest, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyRequest (value: NotifyRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyRequest) { _cached_encoder_for_NotifyRequest = function (value: NotifyRequest, elGetter: $.ASN1Encoder<NotifyRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ObservedEventsDescriptor, $.BER)(value.observedEventsDescriptor, $.BER),
            /* IF_ABSENT  */ ((value.errorDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ErrorDescriptor, $.BER)(value.errorDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotifyRequest(value, elGetter);
}


/* eslint-enable */
