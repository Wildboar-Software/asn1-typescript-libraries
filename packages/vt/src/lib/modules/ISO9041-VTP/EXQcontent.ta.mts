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
import { EXQcontent_exceptionType, _decode_EXQcontent_exceptionType, _encode_EXQcontent_exceptionType } from "../ISO9041-VTP/EXQcontent-exceptionType.ta.mjs";
// export { EXQcontent_exceptionType, _decode_EXQcontent_exceptionType, _encode_EXQcontent_exceptionType } from "../ISO9041-VTP/EXQcontent-exceptionType.ta.mjs";
import { EXQcontent_standard, _decode_EXQcontent_standard, _encode_EXQcontent_standard } from "../ISO9041-VTP/EXQcontent-standard.ta.mjs";
// export { EXQcontent_standard, _decode_EXQcontent_standard, _encode_EXQcontent_standard } from "../ISO9041-VTP/EXQcontent-standard.ta.mjs";
import { EXQcontent_profile_Item, _decode_EXQcontent_profile_Item, _encode_EXQcontent_profile_Item } from "../ISO9041-VTP/EXQcontent-profile-Item.ta.mjs";
// export { EXQcontent_profile_Item, _decode_EXQcontent_profile_Item, _encode_EXQcontent_profile_Item } from "../ISO9041-VTP/EXQcontent-profile-Item.ta.mjs";


/**
 * @summary EXQcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent ::= SEQUENCE {
 *     exceptionType [0] CHOICE {
 *         stdException [0] IMPLICIT INTEGER {
 *             rioFull (0),
 *             tooManyFields (1),
 *             tooManyFieldElements (2),
 *             tooManyFERs (3),
 *             tooManyFEIs (4)
 *         },
 *         proException [1] IMPLICIT INTEGER
 *     },
 *     standard [1] IMPLICIT SEQUENCE {
 *         pointer    [0] IMPLICIT G.ExplicitPointer OPTIONAL,
 *         logPointer [1] IMPLICIT G.LogExpPointer OPTIONAL
 *     } OPTIONAL,
 *     profile [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         ptag INTEGER,
 *         pvalue OCTET STRING
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EXQcontent {
    constructor (
        /**
         * @summary `exceptionType`.
         * @public
         * @readonly
         */
        readonly exceptionType: EXQcontent_exceptionType,
        /**
         * @summary `standard`.
         * @public
         * @readonly
         */
        readonly standard: OPTIONAL<EXQcontent_standard>,
        /**
         * @summary `profile`.
         * @public
         * @readonly
         */
        readonly profile: OPTIONAL<EXQcontent_profile_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a EXQcontent
     * @description
     * 
     * This takes an `object` and converts it to a `EXQcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EXQcontent`.
     * @returns {EXQcontent}
     */
    public static _from_object (_o: { [_K in keyof (EXQcontent)]: (EXQcontent)[_K] }): EXQcontent {
        return new EXQcontent(_o.exceptionType, _o.standard, _o.profile);
    }


}

/**
 * @summary The Leading Root Component Types of EXQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EXQcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("exceptionType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("standard", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("profile", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EXQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EXQcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EXQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EXQcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EXQcontent: $.ASN1Decoder<EXQcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXQcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXQcontent (el: _Element): EXQcontent {
    if (!_cached_decoder_for_EXQcontent) { _cached_decoder_for_EXQcontent = function (el: _Element): EXQcontent {
    let exceptionType!: EXQcontent_exceptionType;
    let standard: OPTIONAL<EXQcontent_standard>;
    let profile: OPTIONAL<EXQcontent_profile_Item[]>;
    const callbacks: $.DecodingMap = {
        "exceptionType": (_el: _Element): void => { exceptionType = $._decode_explicit<EXQcontent_exceptionType>(() => _decode_EXQcontent_exceptionType)(_el); },
        "standard": (_el: _Element): void => { standard = $._decode_implicit<EXQcontent_standard>(() => _decode_EXQcontent_standard)(_el); },
        "profile": (_el: _Element): void => { profile = $._decode_implicit<EXQcontent_profile_Item[]>(() => $._decodeSequenceOf<EXQcontent_profile_Item>(() => _decode_EXQcontent_profile_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EXQcontent,
        _extension_additions_list_spec_for_EXQcontent,
        _root_component_type_list_2_spec_for_EXQcontent,
        undefined,
    );
    return new EXQcontent(
        exceptionType,
        standard,
        profile
    );
}; }
    return _cached_decoder_for_EXQcontent(el);
}

let _cached_encoder_for_EXQcontent: $.ASN1Encoder<EXQcontent> | null = null;

/**
 * @summary Encodes a(n) EXQcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXQcontent, encoded as an ASN.1 Element.
 */
export
function _encode_EXQcontent (value: EXQcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXQcontent) { _cached_encoder_for_EXQcontent = function (value: EXQcontent, elGetter: $.ASN1Encoder<EXQcontent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_EXQcontent_exceptionType, $.BER)(value.exceptionType, $.BER),
            /* IF_ABSENT  */ ((value.standard === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EXQcontent_standard, $.BER)(value.standard, $.BER)),
            /* IF_ABSENT  */ ((value.profile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<EXQcontent_profile_Item>(() => _encode_EXQcontent_profile_Item, $.BER), $.BER)(value.profile, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EXQcontent(value, elGetter);
}


/* eslint-enable */
