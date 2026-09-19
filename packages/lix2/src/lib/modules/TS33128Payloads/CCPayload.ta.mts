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
import { CCPDU, _decode_CCPDU, _encode_CCPDU } from "../TS33128Payloads/CCPDU.ta.mjs";
// export { CCPDU, _decode_CCPDU, _encode_CCPDU } from "../TS33128Payloads/CCPDU.ta.mjs";


/**
 * @summary CCPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCPayload ::= SEQUENCE
 * {
 *     cCPayloadOID         [1] RELATIVE-OID,
 *     pDU                  [2] CCPDU
 * }
 * ```
 * 
 * @class
 */
export
class CCPayload {
    constructor (
        /**
         * @summary `cCPayloadOID`.
         * @public
         * @readonly
         */
        readonly cCPayloadOID: RELATIVE_OID,
        /**
         * @summary `pDU`.
         * @public
         * @readonly
         */
        readonly pDU: CCPDU
    ) {}

    /**
     * @summary Restructures an object into a CCPayload
     * @description
     * 
     * This takes an `object` and converts it to a `CCPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCPayload`.
     * @returns {CCPayload}
     */
    public static _from_object (_o: { [_K in keyof (CCPayload)]: (CCPayload)[_K] }): CCPayload {
        return new CCPayload(_o.cCPayloadOID, _o.pDU);
    }


}

/**
 * @summary The Leading Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("cCPayloadOID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pDU", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCPayload: $.ASN1Decoder<CCPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCPayload (el: _Element): CCPayload {
    if (!_cached_decoder_for_CCPayload) { _cached_decoder_for_CCPayload = function (el: _Element): CCPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CCPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "cCPayloadOID";
    sequence[1].name = "pDU";
    let cCPayloadOID!: RELATIVE_OID;
    let pDU!: CCPDU;
    cCPayloadOID = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(sequence[0]);
    pDU = $._decode_explicit<CCPDU>(() => _decode_CCPDU)(sequence[1]);
    return new CCPayload(
        cCPayloadOID,
        pDU,

    );
}; }
    return _cached_decoder_for_CCPayload(el);
}

let _cached_encoder_for_CCPayload: $.ASN1Encoder<CCPayload> | null = null;

/**
 * @summary Encodes a(n) CCPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCPayload, encoded as an ASN.1 Element.
 */
export
function _encode_CCPayload (value: CCPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCPayload) { _cached_encoder_for_CCPayload = function (value: CCPayload, elGetter: $.ASN1Encoder<CCPayload>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeRelativeOID, $.BER)(value.cCPayloadOID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_CCPDU, $.BER)(value.pDU, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCPayload(value, elGetter);
}


/* eslint-enable */
