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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { AlternateAccessSelection, _decode_AlternateAccessSelection, _encode_AlternateAccessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection.ta.mjs";
// export { AlternateAccessSelection, _decode_AlternateAccessSelection, _encode_AlternateAccessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection.ta.mjs";


/**
 * @summary AlternateAccess_Item_named
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccess-Item-named ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class AlternateAccess_Item_named {
    constructor (
        /**
         * @summary `componentName`.
         * @public
         * @readonly
         */
        readonly componentName: Identifier,
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: AlternateAccessSelection
    ) {}

    /**
     * @summary Restructures an object into a AlternateAccess_Item_named
     * @description
     * 
     * This takes an `object` and converts it to a `AlternateAccess_Item_named`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlternateAccess_Item_named`.
     * @returns {AlternateAccess_Item_named}
     */
    public static _from_object (_o: { [_K in keyof (AlternateAccess_Item_named)]: (AlternateAccess_Item_named)[_K] }): AlternateAccess_Item_named {
        return new AlternateAccess_Item_named(_o.componentName, _o.access);
    }


}

/**
 * @summary The Leading Root Component Types of AlternateAccess_Item_named
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AlternateAccess_Item_named: $.ComponentSpec[] = [
    new $.ComponentSpec("componentName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("access", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AlternateAccess_Item_named
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AlternateAccess_Item_named: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AlternateAccess_Item_named
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AlternateAccess_Item_named: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AlternateAccess_Item_named: $.ASN1Decoder<AlternateAccess_Item_named> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccess_Item_named
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccess_Item_named (el: _Element): AlternateAccess_Item_named {
    if (!_cached_decoder_for_AlternateAccess_Item_named) { _cached_decoder_for_AlternateAccess_Item_named = function (el: _Element): AlternateAccess_Item_named {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AlternateAccess-Item-named contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "componentName";
    sequence[1].name = "access";
    let componentName!: Identifier;
    let access!: AlternateAccessSelection;
    componentName = $._decode_explicit<Identifier>(() => _decode_Identifier)(sequence[0]);
    access = _decode_AlternateAccessSelection(sequence[1]);
    return new AlternateAccess_Item_named(
        componentName,
        access,

    );
}; }
    return _cached_decoder_for_AlternateAccess_Item_named(el);
}

let _cached_encoder_for_AlternateAccess_Item_named: $.ASN1Encoder<AlternateAccess_Item_named> | null = null;

/**
 * @summary Encodes a(n) AlternateAccess_Item_named into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccess_Item_named, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccess_Item_named (value: AlternateAccess_Item_named, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccess_Item_named) { _cached_encoder_for_AlternateAccess_Item_named = function (value: AlternateAccess_Item_named, elGetter: $.ASN1Encoder<AlternateAccess_Item_named>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.componentName, $.BER),
            /* REQUIRED   */ _encode_AlternateAccessSelection(value.access, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AlternateAccess_Item_named(value, elGetter);
}


/* eslint-enable */
