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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";
// export { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";


/**
 * @summary TerminateDownloadSequence_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminateDownloadSequence-Request ::= SEQUENCE {
 *    domainName             [0] IMPLICIT Identifier,
 *    discard                [1] IMPLICIT ServiceError OPTIONAL }
 * ```
 * 
 * @class
 */
export
class TerminateDownloadSequence_Request {
    constructor (
        /**
         * @summary `domainName`.
         * @public
         * @readonly
         */
        readonly domainName: Identifier,
        /**
         * @summary `discard`.
         * @public
         * @readonly
         */
        readonly discard: OPTIONAL<ServiceError>
    ) {}

    /**
     * @summary Restructures an object into a TerminateDownloadSequence_Request
     * @description
     * 
     * This takes an `object` and converts it to a `TerminateDownloadSequence_Request`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateDownloadSequence_Request`.
     * @returns {TerminateDownloadSequence_Request}
     */
    public static _from_object (_o: { [_K in keyof (TerminateDownloadSequence_Request)]: (TerminateDownloadSequence_Request)[_K] }): TerminateDownloadSequence_Request {
        return new TerminateDownloadSequence_Request(_o.domainName, _o.discard);
    }


}

/**
 * @summary The Leading Root Component Types of TerminateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminateDownloadSequence_Request: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("discard", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TerminateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminateDownloadSequence_Request
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminateDownloadSequence_Request: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminateDownloadSequence_Request: $.ASN1Decoder<TerminateDownloadSequence_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateDownloadSequence_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminateDownloadSequence_Request (el: _Element): TerminateDownloadSequence_Request {
    if (!_cached_decoder_for_TerminateDownloadSequence_Request) { _cached_decoder_for_TerminateDownloadSequence_Request = function (el: _Element): TerminateDownloadSequence_Request {
    let domainName!: Identifier;
    let discard: OPTIONAL<ServiceError>;
    const callbacks: $.DecodingMap = {
        "domainName": (_el: _Element): void => { domainName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "discard": (_el: _Element): void => { discard = $._decode_implicit<ServiceError>(() => _decode_ServiceError)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminateDownloadSequence_Request,
        _extension_additions_list_spec_for_TerminateDownloadSequence_Request,
        _root_component_type_list_2_spec_for_TerminateDownloadSequence_Request,
        undefined,
    );
    return new TerminateDownloadSequence_Request(
        domainName,
        discard
    );
}; }
    return _cached_decoder_for_TerminateDownloadSequence_Request(el);
}

let _cached_encoder_for_TerminateDownloadSequence_Request: $.ASN1Encoder<TerminateDownloadSequence_Request> | null = null;

/**
 * @summary Encodes a(n) TerminateDownloadSequence_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateDownloadSequence_Request, encoded as an ASN.1 Element.
 */
export
function _encode_TerminateDownloadSequence_Request (value: TerminateDownloadSequence_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminateDownloadSequence_Request) { _cached_encoder_for_TerminateDownloadSequence_Request = function (value: TerminateDownloadSequence_Request, elGetter: $.ASN1Encoder<TerminateDownloadSequence_Request>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.domainName, $.BER),
            /* IF_ABSENT  */ ((value.discard === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceError, $.BER)(value.discard, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminateDownloadSequence_Request(value, elGetter);
}


/* eslint-enable */
