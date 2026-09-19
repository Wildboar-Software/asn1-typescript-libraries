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
import { IMSCCPDUPayload, _decode_IMSCCPDUPayload, _encode_IMSCCPDUPayload } from "../TS33128Payloads/IMSCCPDUPayload.ta.mjs";
// export { IMSCCPDUPayload, _decode_IMSCCPDUPayload, _encode_IMSCCPDUPayload } from "../TS33128Payloads/IMSCCPDUPayload.ta.mjs";


/**
 * @summary IMSCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSCCPDU ::= SEQUENCE
 * {
 *     payload [1] IMSCCPDUPayload,
 *     sDPInfo [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSCCPDU {
    constructor (
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: IMSCCPDUPayload,
        /**
         * @summary `sDPInfo`.
         * @public
         * @readonly
         */
        readonly sDPInfo: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a IMSCCPDU
     * @description
     * 
     * This takes an `object` and converts it to a `IMSCCPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSCCPDU`.
     * @returns {IMSCCPDU}
     */
    public static _from_object (_o: { [_K in keyof (IMSCCPDU)]: (IMSCCPDU)[_K] }): IMSCCPDU {
        return new IMSCCPDU(_o.payload, _o.sDPInfo);
    }


}

/**
 * @summary The Leading Root Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sDPInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSCCPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSCCPDU: $.ASN1Decoder<IMSCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSCCPDU (el: _Element): IMSCCPDU {
    if (!_cached_decoder_for_IMSCCPDU) { _cached_decoder_for_IMSCCPDU = function (el: _Element): IMSCCPDU {
    let payload!: IMSCCPDUPayload;
    let sDPInfo: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_implicit<IMSCCPDUPayload>(() => _decode_IMSCCPDUPayload)(_el); },
        "sDPInfo": (_el: _Element): void => { sDPInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSCCPDU,
        _extension_additions_list_spec_for_IMSCCPDU,
        _root_component_type_list_2_spec_for_IMSCCPDU,
        undefined,
    );
    return new IMSCCPDU(
        payload,
        sDPInfo
    );
}; }
    return _cached_decoder_for_IMSCCPDU(el);
}

let _cached_encoder_for_IMSCCPDU: $.ASN1Encoder<IMSCCPDU> | null = null;

/**
 * @summary Encodes a(n) IMSCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_IMSCCPDU (value: IMSCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSCCPDU) { _cached_encoder_for_IMSCCPDU = function (value: IMSCCPDU, elGetter: $.ASN1Encoder<IMSCCPDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSCCPDUPayload, $.BER)(value.payload, $.BER),
            /* IF_ABSENT  */ ((value.sDPInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.sDPInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSCCPDU(value, elGetter);
}


/* eslint-enable */
