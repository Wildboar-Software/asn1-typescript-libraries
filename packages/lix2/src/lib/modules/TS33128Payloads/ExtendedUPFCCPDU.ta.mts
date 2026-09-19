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
import { UPFCCPDUPayload, _decode_UPFCCPDUPayload, _encode_UPFCCPDUPayload } from "../TS33128Payloads/UPFCCPDUPayload.ta.mjs";
// export { UPFCCPDUPayload, _decode_UPFCCPDUPayload, _encode_UPFCCPDUPayload } from "../TS33128Payloads/UPFCCPDUPayload.ta.mjs";
import { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";
// export { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";


/**
 * @summary ExtendedUPFCCPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedUPFCCPDU ::= SEQUENCE
 * {
 *     payload [1] UPFCCPDUPayload,
 *     qFI     [2] QFI OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedUPFCCPDU {
    constructor (
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: UPFCCPDUPayload,
        /**
         * @summary `qFI`.
         * @public
         * @readonly
         */
        readonly qFI: OPTIONAL<QFI>
    ) {}

    /**
     * @summary Restructures an object into a ExtendedUPFCCPDU
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedUPFCCPDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedUPFCCPDU`.
     * @returns {ExtendedUPFCCPDU}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedUPFCCPDU)]: (ExtendedUPFCCPDU)[_K] }): ExtendedUPFCCPDU {
        return new ExtendedUPFCCPDU(_o.payload, _o.qFI);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qFI", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedUPFCCPDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedUPFCCPDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedUPFCCPDU: $.ASN1Decoder<ExtendedUPFCCPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedUPFCCPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedUPFCCPDU (el: _Element): ExtendedUPFCCPDU {
    if (!_cached_decoder_for_ExtendedUPFCCPDU) { _cached_decoder_for_ExtendedUPFCCPDU = function (el: _Element): ExtendedUPFCCPDU {
    let payload!: UPFCCPDUPayload;
    let qFI: OPTIONAL<QFI>;
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_explicit<UPFCCPDUPayload>(() => _decode_UPFCCPDUPayload)(_el); },
        "qFI": (_el: _Element): void => { qFI = $._decode_implicit<QFI>(() => _decode_QFI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedUPFCCPDU,
        _extension_additions_list_spec_for_ExtendedUPFCCPDU,
        _root_component_type_list_2_spec_for_ExtendedUPFCCPDU,
        undefined,
    );
    return new ExtendedUPFCCPDU(
        payload,
        qFI
    );
}; }
    return _cached_decoder_for_ExtendedUPFCCPDU(el);
}

let _cached_encoder_for_ExtendedUPFCCPDU: $.ASN1Encoder<ExtendedUPFCCPDU> | null = null;

/**
 * @summary Encodes a(n) ExtendedUPFCCPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedUPFCCPDU, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedUPFCCPDU (value: ExtendedUPFCCPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedUPFCCPDU) { _cached_encoder_for_ExtendedUPFCCPDU = function (value: ExtendedUPFCCPDU, elGetter: $.ASN1Encoder<ExtendedUPFCCPDU>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_UPFCCPDUPayload, $.BER)(value.payload, $.BER),
            /* IF_ABSENT  */ ((value.qFI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_QFI, $.BER)(value.qFI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtendedUPFCCPDU(value, elGetter);
}


/* eslint-enable */
