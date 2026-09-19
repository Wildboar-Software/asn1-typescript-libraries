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


/**
 * @summary LAI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAI ::= SEQUENCE
 * {
 *     pLMNID [1] PLMNID,
 *     lAC    [2] LAC
 * }
 * ```
 * 
 * @class
 */
export
class LAI {
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
        readonly lAC: LAC
    ) {}

    /**
     * @summary Restructures an object into a LAI
     * @description
     * 
     * This takes an `object` and converts it to a `LAI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LAI`.
     * @returns {LAI}
     */
    public static _from_object (_o: { [_K in keyof (LAI)]: (LAI)[_K] }): LAI {
        return new LAI(_o.pLMNID, _o.lAC);
    }


}

/**
 * @summary The Leading Root Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LAI: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lAC", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LAI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LAI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LAI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LAI: $.ASN1Decoder<LAI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LAI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LAI (el: _Element): LAI {
    if (!_cached_decoder_for_LAI) { _cached_decoder_for_LAI = function (el: _Element): LAI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LAI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pLMNID";
    sequence[1].name = "lAC";
    let pLMNID!: PLMNID;
    let lAC!: LAC;
    pLMNID = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(sequence[0]);
    lAC = $._decode_implicit<LAC>(() => _decode_LAC)(sequence[1]);
    return new LAI(
        pLMNID,
        lAC,

    );
}; }
    return _cached_decoder_for_LAI(el);
}

let _cached_encoder_for_LAI: $.ASN1Encoder<LAI> | null = null;

/**
 * @summary Encodes a(n) LAI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LAI, encoded as an ASN.1 Element.
 */
export
function _encode_LAI (value: LAI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LAI) { _cached_encoder_for_LAI = function (value: LAI, elGetter: $.ASN1Encoder<LAI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_LAC, $.BER)(value.lAC, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LAI(value, elGetter);
}


/* eslint-enable */
