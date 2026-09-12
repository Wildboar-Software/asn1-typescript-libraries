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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccessSelection-selectAlternateAccess-accessSelection-indexRange ::= SEQUENCE {
 *     lowIndex [0] IMPLICIT Unsigned32,
 *     numberOfElements [1] IMPLICIT Unsigned32
 * }
 * ```
 * 
 * @class
 */
export
class AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange {
    constructor (
        /**
         * @summary `lowIndex`.
         * @public
         * @readonly
         */
        readonly lowIndex: Unsigned32,
        /**
         * @summary `numberOfElements`.
         * @public
         * @readonly
         */
        readonly numberOfElements: Unsigned32
    ) {}

    /**
     * @summary Restructures an object into a AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
     * @description
     * 
     * This takes an `object` and converts it to a `AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange`.
     * @returns {AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange}
     */
    public static _from_object (_o: { [_K in keyof (AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange)]: (AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange)[_K] }): AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange {
        return new AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange(_o.lowIndex, _o.numberOfElements);
    }


}

/**
 * @summary The Leading Root Component Types of AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange: $.ComponentSpec[] = [
    new $.ComponentSpec("lowIndex", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfElements", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange: $.ASN1Decoder<AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange (el: _Element): AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange {
    if (!_cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange) { _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange = function (el: _Element): AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AlternateAccessSelection-selectAlternateAccess-accessSelection-indexRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lowIndex";
    sequence[1].name = "numberOfElements";
    let lowIndex!: Unsigned32;
    let numberOfElements!: Unsigned32;
    lowIndex = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[0]);
    numberOfElements = $._decode_implicit<Unsigned32>(() => _decode_Unsigned32)(sequence[1]);
    return new AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange(
        lowIndex,
        numberOfElements,

    );
}; }
    return _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange(el);
}

let _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange: $.ASN1Encoder<AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange> | null = null;

/**
 * @summary Encodes a(n) AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange (value: AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange) { _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange = function (value: AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange, elGetter: $.ASN1Encoder<AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned32, $.BER)(value.lowIndex, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned32, $.BER)(value.numberOfElements, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess_accessSelection_indexRange(value, elGetter);
}


/* eslint-enable */
