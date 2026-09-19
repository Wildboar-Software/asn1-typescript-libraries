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
import { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
// export { AMFID, _decode_AMFID, _encode_AMFID } from "../TS33128Payloads/AMFID.ta.mjs";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";


/**
 * @summary GUAMI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GUAMI ::= SEQUENCE
 * {
 *     aMFID       [1] AMFID,
 *     pLMNID      [2] PLMNID
 * }
 * ```
 * 
 * @class
 */
export
class GUAMI {
    constructor (
        /**
         * @summary `aMFID`.
         * @public
         * @readonly
         */
        readonly aMFID: AMFID,
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID
    ) {}

    /**
     * @summary Restructures an object into a GUAMI
     * @description
     * 
     * This takes an `object` and converts it to a `GUAMI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GUAMI`.
     * @returns {GUAMI}
     */
    public static _from_object (_o: { [_K in keyof (GUAMI)]: (GUAMI)[_K] }): GUAMI {
        return new GUAMI(_o.aMFID, _o.pLMNID);
    }


}

/**
 * @summary The Leading Root Component Types of GUAMI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GUAMI: $.ComponentSpec[] = [
    new $.ComponentSpec("aMFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GUAMI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GUAMI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GUAMI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GUAMI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GUAMI: $.ASN1Decoder<GUAMI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GUAMI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GUAMI (el: _Element): GUAMI {
    if (!_cached_decoder_for_GUAMI) { _cached_decoder_for_GUAMI = function (el: _Element): GUAMI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GUAMI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aMFID";
    sequence[1].name = "pLMNID";
    let aMFID!: AMFID;
    let pLMNID!: PLMNID;
    aMFID = $._decode_implicit<AMFID>(() => _decode_AMFID)(sequence[0]);
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[1]);
    return new GUAMI(
        aMFID,
        pLMNID,

    );
}; }
    return _cached_decoder_for_GUAMI(el);
}

let _cached_encoder_for_GUAMI: $.ASN1Encoder<GUAMI> | null = null;

/**
 * @summary Encodes a(n) GUAMI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUAMI, encoded as an ASN.1 Element.
 */
export
function _encode_GUAMI (value: GUAMI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GUAMI) { _cached_encoder_for_GUAMI = function (value: GUAMI, elGetter: $.ASN1Encoder<GUAMI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFID, $.BER)(value.aMFID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GUAMI(value, elGetter);
}


/* eslint-enable */
