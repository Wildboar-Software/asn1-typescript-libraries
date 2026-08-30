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
import { UESBI_IuA, _decode_UESBI_IuA, _encode_UESBI_IuA } from "../MAP-MS-DataTypes/UESBI-IuA.ta.mjs";
// export { UESBI_IuA, _decode_UESBI_IuA, _encode_UESBI_IuA } from "../MAP-MS-DataTypes/UESBI-IuA.ta.mjs";
import { UESBI_IuB, _decode_UESBI_IuB, _encode_UESBI_IuB } from "../MAP-MS-DataTypes/UESBI-IuB.ta.mjs";
// export { UESBI_IuB, _decode_UESBI_IuB, _encode_UESBI_IuB } from "../MAP-MS-DataTypes/UESBI-IuB.ta.mjs";


/**
 * @summary UESBI_Iu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UESBI-Iu ::= SEQUENCE {
 *     uesbi-IuA    [0] UESBI-IuA    OPTIONAL,
 *     uesbi-IuB    [1] UESBI-IuB    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class UESBI_Iu {
    constructor (
        /**
         * @summary `uesbi_IuA`.
         * @public
         * @readonly
         */
        readonly uesbi_IuA: OPTIONAL<UESBI_IuA>,
        /**
         * @summary `uesbi_IuB`.
         * @public
         * @readonly
         */
        readonly uesbi_IuB: OPTIONAL<UESBI_IuB>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UESBI_Iu
     * @description
     * 
     * This takes an `object` and converts it to a `UESBI_Iu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UESBI_Iu`.
     * @returns {UESBI_Iu}
     */
    public static _from_object (_o: { [_K in keyof (UESBI_Iu)]: (UESBI_Iu)[_K] }): UESBI_Iu {
        return new UESBI_Iu(_o.uesbi_IuA, _o.uesbi_IuB, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UESBI_Iu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UESBI_Iu: $.ComponentSpec[] = [
    new $.ComponentSpec("uesbi-IuA", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("uesbi-IuB", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UESBI_Iu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UESBI_Iu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UESBI_Iu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UESBI_Iu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UESBI_Iu: $.ASN1Decoder<UESBI_Iu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UESBI_Iu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UESBI_Iu (el: _Element): UESBI_Iu {
    if (!_cached_decoder_for_UESBI_Iu) { _cached_decoder_for_UESBI_Iu = function (el: _Element): UESBI_Iu {
    let uesbi_IuA: OPTIONAL<UESBI_IuA>;
    let uesbi_IuB: OPTIONAL<UESBI_IuB>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uesbi-IuA": (_el: _Element): void => { uesbi_IuA = $._decode_implicit<UESBI_IuA>(() => _decode_UESBI_IuA)(_el); },
        "uesbi-IuB": (_el: _Element): void => { uesbi_IuB = $._decode_implicit<UESBI_IuB>(() => _decode_UESBI_IuB)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UESBI_Iu,
        _extension_additions_list_spec_for_UESBI_Iu,
        _root_component_type_list_2_spec_for_UESBI_Iu,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UESBI_Iu(
        uesbi_IuA,
        uesbi_IuB,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UESBI_Iu(el);
}

let _cached_encoder_for_UESBI_Iu: $.ASN1Encoder<UESBI_Iu> | null = null;

/**
 * @summary Encodes a(n) UESBI_Iu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UESBI_Iu, encoded as an ASN.1 Element.
 */
export
function _encode_UESBI_Iu (value: UESBI_Iu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UESBI_Iu) { _cached_encoder_for_UESBI_Iu = function (value: UESBI_Iu, elGetter: $.ASN1Encoder<UESBI_Iu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uesbi_IuA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_UESBI_IuA, $.BER)(value.uesbi_IuA, $.BER)),
            /* IF_ABSENT  */ ((value.uesbi_IuB === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_UESBI_IuB, $.BER)(value.uesbi_IuB, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UESBI_Iu(value, elGetter);
}


/* eslint-enable */
