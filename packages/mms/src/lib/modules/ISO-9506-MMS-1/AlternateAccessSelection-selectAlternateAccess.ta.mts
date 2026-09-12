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
import { AlternateAccessSelection_selectAlternateAccess_accessSelection, _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection, _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess-accessSelection.ta.mjs";
// export { AlternateAccessSelection_selectAlternateAccess_accessSelection, _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection, _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAlternateAccess-accessSelection.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary AlternateAccessSelection_selectAlternateAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccessSelection-selectAlternateAccess ::= SEQUENCE {
 *     accessSelection CHOICE {
 *         component [0] IMPLICIT Identifier,
 *         component [0] IMPLICIT NULL,
 *         index [1] IMPLICIT Unsigned32,
 *         indexRange [2] IMPLICIT SEQUENCE {
 *             lowIndex [0] IMPLICIT Unsigned32,
 *             numberOfElements [1] IMPLICIT Unsigned32
 *         },
 *         index [1] IMPLICIT NULL,
 *         indexRange [2] IMPLICIT NULL,
 *         allElements [3] IMPLICIT NULL
 *     },
 *     alternateAccess AlternateAccess
 * }
 * ```
 * 
 * @class
 */
export
class AlternateAccessSelection_selectAlternateAccess {
    constructor (
        /**
         * @summary `accessSelection`.
         * @public
         * @readonly
         */
        readonly accessSelection: AlternateAccessSelection_selectAlternateAccess_accessSelection,
        /**
         * @summary `alternateAccess`.
         * @public
         * @readonly
         */
        readonly alternateAccess: AlternateAccess
    ) {}

    /**
     * @summary Restructures an object into a AlternateAccessSelection_selectAlternateAccess
     * @description
     * 
     * This takes an `object` and converts it to a `AlternateAccessSelection_selectAlternateAccess`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlternateAccessSelection_selectAlternateAccess`.
     * @returns {AlternateAccessSelection_selectAlternateAccess}
     */
    public static _from_object (_o: { [_K in keyof (AlternateAccessSelection_selectAlternateAccess)]: (AlternateAccessSelection_selectAlternateAccess)[_K] }): AlternateAccessSelection_selectAlternateAccess {
        return new AlternateAccessSelection_selectAlternateAccess(_o.accessSelection, _o.alternateAccess);
    }


}

/**
 * @summary The Leading Root Component Types of AlternateAccessSelection_selectAlternateAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlternateAccessSelection_selectAlternateAccess: $.ComponentSpec[] = [
    new $.ComponentSpec("accessSelection", false, $.hasAnyTag),
    new $.ComponentSpec("alternateAccess", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AlternateAccessSelection_selectAlternateAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlternateAccessSelection_selectAlternateAccess: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlternateAccessSelection_selectAlternateAccess
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlternateAccessSelection_selectAlternateAccess: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess: $.ASN1Decoder<AlternateAccessSelection_selectAlternateAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccessSelection_selectAlternateAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccessSelection_selectAlternateAccess (el: _Element): AlternateAccessSelection_selectAlternateAccess {
    if (!_cached_decoder_for_AlternateAccessSelection_selectAlternateAccess) { _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess = function (el: _Element): AlternateAccessSelection_selectAlternateAccess {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AlternateAccessSelection-selectAlternateAccess contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "accessSelection";
    sequence[1].name = "alternateAccess";
    let accessSelection!: AlternateAccessSelection_selectAlternateAccess_accessSelection;
    let alternateAccess!: AlternateAccess;
    accessSelection = _decode_AlternateAccessSelection_selectAlternateAccess_accessSelection(sequence[0]);
    alternateAccess = _decode_AlternateAccess(sequence[1]);
    return new AlternateAccessSelection_selectAlternateAccess(
        accessSelection,
        alternateAccess,

    );
}; }
    return _cached_decoder_for_AlternateAccessSelection_selectAlternateAccess(el);
}

let _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess: $.ASN1Encoder<AlternateAccessSelection_selectAlternateAccess> | null = null;

/**
 * @summary Encodes a(n) AlternateAccessSelection_selectAlternateAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccessSelection_selectAlternateAccess, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccessSelection_selectAlternateAccess (value: AlternateAccessSelection_selectAlternateAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccessSelection_selectAlternateAccess) { _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess = function (value: AlternateAccessSelection_selectAlternateAccess, elGetter: $.ASN1Encoder<AlternateAccessSelection_selectAlternateAccess>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlternateAccessSelection_selectAlternateAccess_accessSelection(value.accessSelection, $.BER),
            /* REQUIRED   */ _encode_AlternateAccess(value.alternateAccess, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlternateAccessSelection_selectAlternateAccess(value, elGetter);
}


/* eslint-enable */
