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
import { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
// export { NSSAI, _decode_NSSAI, _encode_NSSAI } from "../TS33128Payloads/NSSAI.ta.mjs";
import { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";
// export { CAGID, _decode_CAGID, _encode_CAGID } from "../TS33128Payloads/CAGID.ta.mjs";


/**
 * @summary ServiceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceID ::= SEQUENCE
 * {
 *     nSSAI                     [1] NSSAI OPTIONAL,
 *     cAGID                     [2] SEQUENCE OF CAGID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceID {
    constructor (
        /**
         * @summary `nSSAI`.
         * @public
         * @readonly
         */
        readonly nSSAI: OPTIONAL<NSSAI>,
        /**
         * @summary `cAGID`.
         * @public
         * @readonly
         */
        readonly cAGID: OPTIONAL<CAGID[]>
    ) {}

    /**
     * @summary Restructures an object into a ServiceID
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceID`.
     * @returns {ServiceID}
     */
    public static _from_object (_o: { [_K in keyof (ServiceID)]: (ServiceID)[_K] }): ServiceID {
        return new ServiceID(_o.nSSAI, _o.cAGID);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceID: $.ComponentSpec[] = [
    new $.ComponentSpec("nSSAI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cAGID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ServiceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceID: $.ASN1Decoder<ServiceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceID (el: _Element): ServiceID {
    if (!_cached_decoder_for_ServiceID) { _cached_decoder_for_ServiceID = function (el: _Element): ServiceID {
    let nSSAI: OPTIONAL<NSSAI>;
    let cAGID: OPTIONAL<CAGID[]>;
    const callbacks: $.DecodingMap = {
        "nSSAI": (_el: _Element): void => { nSSAI = $._decode_implicit<NSSAI>(() => _decode_NSSAI)(_el); },
        "cAGID": (_el: _Element): void => { cAGID = $._decode_implicit<CAGID[]>(() => $._decodeSequenceOf<CAGID>(() => _decode_CAGID))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceID,
        _extension_additions_list_spec_for_ServiceID,
        _root_component_type_list_2_spec_for_ServiceID,
        undefined,
    );
    return new ServiceID(
        nSSAI,
        cAGID
    );
}; }
    return _cached_decoder_for_ServiceID(el);
}

let _cached_encoder_for_ServiceID: $.ASN1Encoder<ServiceID> | null = null;

/**
 * @summary Encodes a(n) ServiceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceID, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceID (value: ServiceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceID) { _cached_encoder_for_ServiceID = function (value: ServiceID, elGetter: $.ASN1Encoder<ServiceID>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.nSSAI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NSSAI, $.BER)(value.nSSAI, $.BER)),
            /* IF_ABSENT  */ ((value.cAGID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<CAGID>(() => _encode_CAGID, $.BER), $.BER)(value.cAGID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceID(value, elGetter);
}


/* eslint-enable */
