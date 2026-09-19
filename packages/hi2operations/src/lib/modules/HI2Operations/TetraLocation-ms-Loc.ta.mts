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



/**
 * @summary TetraLocation_ms_Loc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TetraLocation-ms-Loc ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TetraLocation_ms_Loc {
    constructor (
        /**
         * @summary `mcc`.
         * @public
         * @readonly
         */
        readonly mcc: INTEGER,
        /**
         * @summary `mnc`.
         * @public
         * @readonly
         */
        readonly mnc: INTEGER,
        /**
         * @summary `lai`.
         * @public
         * @readonly
         */
        readonly lai: INTEGER,
        /**
         * @summary `ci`.
         * @public
         * @readonly
         */
        readonly ci: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a TetraLocation_ms_Loc
     * @description
     * 
     * This takes an `object` and converts it to a `TetraLocation_ms_Loc`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TetraLocation_ms_Loc`.
     * @returns {TetraLocation_ms_Loc}
     */
    public static _from_object (_o: { [_K in keyof (TetraLocation_ms_Loc)]: (TetraLocation_ms_Loc)[_K] }): TetraLocation_ms_Loc {
        return new TetraLocation_ms_Loc(_o.mcc, _o.mnc, _o.lai, _o.ci);
    }


}

/**
 * @summary The Leading Root Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    new $.ComponentSpec("mcc", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mnc", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("lai", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ci", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TetraLocation_ms_Loc
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TetraLocation_ms_Loc: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TetraLocation_ms_Loc: $.ASN1Decoder<TetraLocation_ms_Loc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TetraLocation_ms_Loc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TetraLocation_ms_Loc (el: _Element): TetraLocation_ms_Loc {
    if (!_cached_decoder_for_TetraLocation_ms_Loc) { _cached_decoder_for_TetraLocation_ms_Loc = function (el: _Element): TetraLocation_ms_Loc {
    let mcc!: INTEGER;
    let mnc!: INTEGER;
    let lai!: INTEGER;
    let ci: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "mcc": (_el: _Element): void => { mcc = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mnc": (_el: _Element): void => { mnc = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "lai": (_el: _Element): void => { lai = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ci": (_el: _Element): void => { ci = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TetraLocation_ms_Loc,
        _extension_additions_list_spec_for_TetraLocation_ms_Loc,
        _root_component_type_list_2_spec_for_TetraLocation_ms_Loc,
        undefined,
    );
    return new TetraLocation_ms_Loc(
        mcc,
        mnc,
        lai,
        ci
    );
}; }
    return _cached_decoder_for_TetraLocation_ms_Loc(el);
}

let _cached_encoder_for_TetraLocation_ms_Loc: $.ASN1Encoder<TetraLocation_ms_Loc> | null = null;

/**
 * @summary Encodes a(n) TetraLocation_ms_Loc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TetraLocation_ms_Loc, encoded as an ASN.1 Element.
 */
export
function _encode_TetraLocation_ms_Loc (value: TetraLocation_ms_Loc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TetraLocation_ms_Loc) { _cached_encoder_for_TetraLocation_ms_Loc = function (value: TetraLocation_ms_Loc, elGetter: $.ASN1Encoder<TetraLocation_ms_Loc>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mcc, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.mnc, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.lai, $.BER),
            /* IF_ABSENT  */ ((value.ci === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.ci, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TetraLocation_ms_Loc(value, elGetter);
}


/* eslint-enable */
