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
import { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
// export { LAI, _decode_LAI, _encode_LAI } from "../TS33128Payloads/LAI.ta.mjs";
import { CellID, _decode_CellID, _encode_CellID } from "../TS33128Payloads/CellID.ta.mjs";
// export { CellID, _decode_CellID, _encode_CellID } from "../TS33128Payloads/CellID.ta.mjs";


/**
 * @summary CGI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGI ::= SEQUENCE
 * {
 *     lAI    [1] LAI,
 *     cellID [2] CellID
 * }
 * ```
 * 
 * @class
 */
export
class CGI {
    constructor (
        /**
         * @summary `lAI`.
         * @public
         * @readonly
         */
        readonly lAI: LAI,
        /**
         * @summary `cellID`.
         * @public
         * @readonly
         */
        readonly cellID: CellID
    ) {}

    /**
     * @summary Restructures an object into a CGI
     * @description
     * 
     * This takes an `object` and converts it to a `CGI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CGI`.
     * @returns {CGI}
     */
    public static _from_object (_o: { [_K in keyof (CGI)]: (CGI)[_K] }): CGI {
        return new CGI(_o.lAI, _o.cellID);
    }


}

/**
 * @summary The Leading Root Component Types of CGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CGI: $.ComponentSpec[] = [
    new $.ComponentSpec("lAI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CGI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CGI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CGI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CGI: $.ASN1Decoder<CGI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CGI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CGI (el: _Element): CGI {
    if (!_cached_decoder_for_CGI) { _cached_decoder_for_CGI = function (el: _Element): CGI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CGI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lAI";
    sequence[1].name = "cellID";
    let lAI!: LAI;
    let cellID!: CellID;
    lAI = $._decode_implicit<LAI>(() => _decode_LAI)(sequence[0]);
    cellID = $._decode_implicit<CellID>(() => _decode_CellID)(sequence[1]);
    return new CGI(
        lAI,
        cellID,

    );
}; }
    return _cached_decoder_for_CGI(el);
}

let _cached_encoder_for_CGI: $.ASN1Encoder<CGI> | null = null;

/**
 * @summary Encodes a(n) CGI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CGI, encoded as an ASN.1 Element.
 */
export
function _encode_CGI (value: CGI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CGI) { _cached_encoder_for_CGI = function (value: CGI, elGetter: $.ASN1Encoder<CGI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LAI, $.BER)(value.lAI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CellID, $.BER)(value.cellID, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CGI(value, elGetter);
}


/* eslint-enable */
