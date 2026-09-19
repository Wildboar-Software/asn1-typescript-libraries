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
import { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";
// export { ErrorDescriptor, _decode_ErrorDescriptor, _encode_ErrorDescriptor } from "../MEDIA-GATEWAY-CONTROL/ErrorDescriptor.ta.mjs";


/**
 * @summary NotifyReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyReply ::= SEQUENCE
 *     {
 *         terminationID                [0] TerminationIDList,
 *         errorDescriptor                [1] ErrorDescriptor OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class NotifyReply {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationIDList,
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
     * @summary Restructures an object into a NotifyReply
     * @description
     * 
     * This takes an `object` and converts it to a `NotifyReply`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotifyReply`.
     * @returns {NotifyReply}
     */
    public static _from_object (_o: { [_K in keyof (NotifyReply)]: (NotifyReply)[_K] }): NotifyReply {
        return new NotifyReply(_o.terminationID, _o.errorDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotifyReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotifyReply: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorDescriptor", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NotifyReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotifyReply: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotifyReply
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotifyReply: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotifyReply: $.ASN1Decoder<NotifyReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotifyReply (el: _Element): NotifyReply {
    if (!_cached_decoder_for_NotifyReply) { _cached_decoder_for_NotifyReply = function (el: _Element): NotifyReply {
    let terminationID!: TerminationIDList;
    let errorDescriptor: OPTIONAL<ErrorDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "terminationID": (_el: _Element): void => { terminationID = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(_el); },
        "errorDescriptor": (_el: _Element): void => { errorDescriptor = $._decode_implicit<ErrorDescriptor>(() => _decode_ErrorDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotifyReply,
        _extension_additions_list_spec_for_NotifyReply,
        _root_component_type_list_2_spec_for_NotifyReply,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotifyReply(
        terminationID,
        errorDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotifyReply(el);
}

let _cached_encoder_for_NotifyReply: $.ASN1Encoder<NotifyReply> | null = null;

/**
 * @summary Encodes a(n) NotifyReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyReply, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyReply (value: NotifyReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotifyReply) { _cached_encoder_for_NotifyReply = function (value: NotifyReply, elGetter: $.ASN1Encoder<NotifyReply>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationID, $.BER),
            /* IF_ABSENT  */ ((value.errorDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ErrorDescriptor, $.BER)(value.errorDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotifyReply(value, elGetter);
}


/* eslint-enable */
