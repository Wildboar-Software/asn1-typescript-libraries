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
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
// export { LAC, _decode_LAC, _encode_LAC } from "../TS33128Payloads/LAC.ta.mjs";
import { SAC, _decode_SAC, _encode_SAC } from "../TS33128Payloads/SAC.ta.mjs";
// export { SAC, _decode_SAC, _encode_SAC } from "../TS33128Payloads/SAC.ta.mjs";


/**
 * @summary SAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAI ::= SEQUENCE
 * {
 *     pLMNID [1] PLMNID,
 *     lAC    [2] LAC,
 *     sAC    [3] SAC
 * }
 * ```
 * 
 * @class
 */
export
class SAI {
    constructor (
        /**
         * @summary `pLMNID`.
         * @public
         * @readonly
         */
        readonly pLMNID: PLMNID,
        /**
         * @summary `lAC`.
         * @public
         * @readonly
         */
        readonly lAC: LAC,
        /**
         * @summary `sAC`.
         * @public
         * @readonly
         */
        readonly sAC: SAC
    ) {}

    /**
     * @summary Restructures an object into a SAI
     * @description
     * 
     * This takes an `object` and converts it to a `SAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SAI`.
     * @returns {SAI}
     */
    public static _from_object (_o: { [_K in keyof (SAI)]: (SAI)[_K] }): SAI {
        return new SAI(_o.pLMNID, _o.lAC, _o.sAC);
    }


}

/**
 * @summary The Leading Root Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SAI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sAC", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SAI: $.ASN1Decoder<SAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SAI (el: _Element): SAI {
    if (!_cached_decoder_for_SAI) { _cached_decoder_for_SAI = function (el: _Element): SAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "lAC";
    sequence[2].name = "sAC";
    let pLMNID!: PLMNID;
    let lAC!: LAC;
    let sAC!: SAC;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    lAC = $._decode_implicit<LAC>(() => _decode_LAC)(sequence[1]);
    sAC = $._decode_implicit<SAC>(() => _decode_SAC)(sequence[2]);
    return new SAI(
        pLMNID,
        lAC,
        sAC,

    );
}; }
    return _cached_decoder_for_SAI(el);
}

let _cached_encoder_for_SAI: $.ASN1Encoder<SAI> | null = null;

/**
 * @summary Encodes a(n) SAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SAI, encoded as an ASN.1 Element.
 */
export
function _encode_SAI (value: SAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SAI) { _cached_encoder_for_SAI = function (value: SAI, elGetter: $.ASN1Encoder<SAI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LAC, $.BER)(value.lAC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_SAC, $.BER)(value.sAC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SAI(value, elGetter);
}


/* eslint-enable */
