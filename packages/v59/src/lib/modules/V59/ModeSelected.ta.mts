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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";
// export { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";


/**
 * @summary ModeSelected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeSelected ::= SEQUENCE {modulationHistory  V59String
 * }
 * ```
 * 
 * @class
 */
export
class ModeSelected {
    constructor (
        /**
         * @summary `modulationHistory`.
         * @public
         * @readonly
         */
        readonly modulationHistory: V59String
    ) {}

    /**
     * @summary Restructures an object into a ModeSelected
     * @description
     * 
     * This takes an `object` and converts it to a `ModeSelected`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModeSelected`.
     * @returns {ModeSelected}
     */
    public static _from_object (_o: { [_K in keyof (ModeSelected)]: (ModeSelected)[_K] }): ModeSelected {
        return new ModeSelected(_o.modulationHistory);
    }


}

/**
 * @summary The Leading Root Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModeSelected: $.ComponentSpec[] = [
    new $.ComponentSpec("modulationHistory", false, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModeSelected: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModeSelected
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModeSelected: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModeSelected: $.ASN1Decoder<ModeSelected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeSelected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeSelected (el: _Element): ModeSelected {
    if (!_cached_decoder_for_ModeSelected) { _cached_decoder_for_ModeSelected = function (el: _Element): ModeSelected {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ModeSelected contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modulationHistory";
    let modulationHistory!: V59String;
    modulationHistory = _decode_V59String(sequence[0]);
    return new ModeSelected(
        modulationHistory,

    );
}; }
    return _cached_decoder_for_ModeSelected(el);
}

let _cached_encoder_for_ModeSelected: $.ASN1Encoder<ModeSelected> | null = null;

/**
 * @summary Encodes a(n) ModeSelected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeSelected, encoded as an ASN.1 Element.
 */
export
function _encode_ModeSelected (value: ModeSelected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeSelected) { _cached_encoder_for_ModeSelected = function (value: ModeSelected, elGetter: $.ASN1Encoder<ModeSelected>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.modulationHistory, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModeSelected(value, elGetter);
}


/* eslint-enable */
