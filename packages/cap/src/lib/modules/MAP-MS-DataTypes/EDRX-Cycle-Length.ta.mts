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
import { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
// export { Used_RAT_Type, _enum_for_Used_RAT_Type, Used_RAT_Type_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_geran /* IMPORTED_LONG_ENUMERATION_ITEM */, geran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_gan /* IMPORTED_LONG_ENUMERATION_ITEM */, gan /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_i_hspa_evolution /* IMPORTED_LONG_ENUMERATION_ITEM */, i_hspa_evolution /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_e_utran /* IMPORTED_LONG_ENUMERATION_ITEM */, e_utran /* IMPORTED_SHORT_ENUMERATION_ITEM */, Used_RAT_Type_nb_iot /* IMPORTED_LONG_ENUMERATION_ITEM */, nb_iot /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Used_RAT_Type, _encode_Used_RAT_Type } from "../MAP-MS-DataTypes/Used-RAT-Type.ta.mjs";
import { EDRX_Cycle_Length_Value, _decode_EDRX_Cycle_Length_Value, _encode_EDRX_Cycle_Length_Value } from "../MAP-MS-DataTypes/EDRX-Cycle-Length-Value.ta.mjs";
// export { EDRX_Cycle_Length_Value, _decode_EDRX_Cycle_Length_Value, _encode_EDRX_Cycle_Length_Value } from "../MAP-MS-DataTypes/EDRX-Cycle-Length-Value.ta.mjs";


/**
 * @summary EDRX_Cycle_Length
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDRX-Cycle-Length ::= SEQUENCE {
 *     rat-Type    [0]    Used-RAT-Type,
 *     eDRX-Cycle-Length-Value    [1]    EDRX-Cycle-Length-Value,
 *     ...}
 * ```
 * 
 * @class
 */
export
class EDRX_Cycle_Length {
    constructor (
        /**
         * @summary `rat_Type`.
         * @public
         * @readonly
         */
        readonly rat_Type: Used_RAT_Type,
        /**
         * @summary `eDRX_Cycle_Length_Value`.
         * @public
         * @readonly
         */
        readonly eDRX_Cycle_Length_Value: EDRX_Cycle_Length_Value,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EDRX_Cycle_Length
     * @description
     * 
     * This takes an `object` and converts it to a `EDRX_Cycle_Length`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EDRX_Cycle_Length`.
     * @returns {EDRX_Cycle_Length}
     */
    public static _from_object (_o: { [_K in keyof (EDRX_Cycle_Length)]: (EDRX_Cycle_Length)[_K] }): EDRX_Cycle_Length {
        return new EDRX_Cycle_Length(_o.rat_Type, _o.eDRX_Cycle_Length_Value, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `rat_Type`
         * @public
         * @static
         */

    public static _enum_for_rat_Type = _enum_for_Used_RAT_Type;
}

/**
 * @summary The Leading Root Component Types of EDRX_Cycle_Length
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EDRX_Cycle_Length: $.ComponentSpec[] = [
    new $.ComponentSpec("rat-Type", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("eDRX-Cycle-Length-Value", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EDRX_Cycle_Length
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EDRX_Cycle_Length: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EDRX_Cycle_Length
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EDRX_Cycle_Length: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EDRX_Cycle_Length: $.ASN1Decoder<EDRX_Cycle_Length> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDRX_Cycle_Length
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDRX_Cycle_Length (el: _Element): EDRX_Cycle_Length {
    if (!_cached_decoder_for_EDRX_Cycle_Length) { _cached_decoder_for_EDRX_Cycle_Length = function (el: _Element): EDRX_Cycle_Length {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EDRX-Cycle-Length contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "rat-Type";
    sequence[1].name = "eDRX-Cycle-Length-Value";
    let rat_Type!: Used_RAT_Type;
    let eDRX_Cycle_Length_Value!: EDRX_Cycle_Length_Value;
    rat_Type = $._decode_implicit<Used_RAT_Type>(() => _decode_Used_RAT_Type)(sequence[0]);
    eDRX_Cycle_Length_Value = $._decode_implicit<EDRX_Cycle_Length_Value>(() => _decode_EDRX_Cycle_Length_Value)(sequence[1]);
    return new EDRX_Cycle_Length(
        rat_Type,
        eDRX_Cycle_Length_Value,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_EDRX_Cycle_Length(el);
}

let _cached_encoder_for_EDRX_Cycle_Length: $.ASN1Encoder<EDRX_Cycle_Length> | null = null;

/**
 * @summary Encodes a(n) EDRX_Cycle_Length into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDRX_Cycle_Length, encoded as an ASN.1 Element.
 */
export
function _encode_EDRX_Cycle_Length (value: EDRX_Cycle_Length, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDRX_Cycle_Length) { _cached_encoder_for_EDRX_Cycle_Length = function (value: EDRX_Cycle_Length, elGetter: $.ASN1Encoder<EDRX_Cycle_Length>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Used_RAT_Type, $.BER)(value.rat_Type, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EDRX_Cycle_Length_Value, $.BER)(value.eDRX_Cycle_Length_Value, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EDRX_Cycle_Length(value, elGetter);
}


/* eslint-enable */
