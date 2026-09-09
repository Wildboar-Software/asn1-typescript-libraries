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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary RequestReportGPRSEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportGPRSEventArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gPRSEvent                [0] SEQUENCE SIZE (1..bound.&numOfGPRSEvents) OF GPRSEvent,
 *     pDPID                [1]    PDPID                    OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class RequestReportGPRSEventArg {
    constructor (
        /**
         * @summary `gPRSEvent`.
         * @public
         * @readonly
         */
        readonly gPRSEvent: GPRSEvent[],
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestReportGPRSEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportGPRSEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportGPRSEventArg`.
     * @returns {RequestReportGPRSEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportGPRSEventArg)]: (RequestReportGPRSEventArg)[_K] }): RequestReportGPRSEventArg {
        return new RequestReportGPRSEventArg(_o.gPRSEvent, _o.pDPID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestReportGPRSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportGPRSEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gPRSEvent", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    /* FIXME: pDPID COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of RequestReportGPRSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportGPRSEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportGPRSEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportGPRSEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportGPRSEventArg: $.ASN1Decoder<RequestReportGPRSEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportGPRSEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportGPRSEventArg (el: _Element): RequestReportGPRSEventArg {
    if (!_cached_decoder_for_RequestReportGPRSEventArg) { _cached_decoder_for_RequestReportGPRSEventArg = function (el: _Element): RequestReportGPRSEventArg {
    let gPRSEvent!: GPRSEvent[];
    let pDPID: OPTIONAL<PDPID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gPRSEvent": (_el: _Element): void => { gPRSEvent = $._decode_implicit<GPRSEvent[]>(() => $._decodeSequenceOf<GPRSEvent>(() => _decode_GPRSEvent))(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportGPRSEventArg,
        _extension_additions_list_spec_for_RequestReportGPRSEventArg,
        _root_component_type_list_2_spec_for_RequestReportGPRSEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportGPRSEventArg(
        gPRSEvent,
        pDPID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportGPRSEventArg(el);
}

let _cached_encoder_for_RequestReportGPRSEventArg: $.ASN1Encoder<RequestReportGPRSEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportGPRSEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportGPRSEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportGPRSEventArg (value: RequestReportGPRSEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportGPRSEventArg) { _cached_encoder_for_RequestReportGPRSEventArg = function (value: RequestReportGPRSEventArg, elGetter: $.ASN1Encoder<RequestReportGPRSEventArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<GPRSEvent>(() => _encode_GPRSEvent, $.BER), $.BER)(value.gPRSEvent, $.BER),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestReportGPRSEventArg(value, elGetter);
}


/* eslint-enable */
