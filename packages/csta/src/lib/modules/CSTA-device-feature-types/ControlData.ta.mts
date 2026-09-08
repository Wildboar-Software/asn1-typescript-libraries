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
import { ControlData_gender, _enum_for_ControlData_gender, ControlData_gender_male /* IMPORTED_LONG_ENUMERATION_ITEM */, male /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlData_gender_female /* IMPORTED_LONG_ENUMERATION_ITEM */, female /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlData_gender, _encode_ControlData_gender } from "../CSTA-device-feature-types/ControlData-gender.ta.mjs";
// export { ControlData_gender, _enum_for_ControlData_gender, ControlData_gender_male /* IMPORTED_LONG_ENUMERATION_ITEM */, male /* IMPORTED_SHORT_ENUMERATION_ITEM */, ControlData_gender_female /* IMPORTED_LONG_ENUMERATION_ITEM */, female /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ControlData_gender, _encode_ControlData_gender } from "../CSTA-device-feature-types/ControlData-gender.ta.mjs";


/**
 * @summary ControlData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlData ::= SEQUENCE
 * {     gender         ENUMERATED
 *     {    male         (0),
 *         female         (1) },
 *     language     OCTET STRING }
 * ```
 * 
 * @class
 */
export
class ControlData {
    constructor (
        /**
         * @summary `gender`.
         * @public
         * @readonly
         */
        readonly gender: ControlData_gender,
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a ControlData
     * @description
     * 
     * This takes an `object` and converts it to a `ControlData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlData`.
     * @returns {ControlData}
     */
    public static _from_object (_o: { [_K in keyof (ControlData)]: (ControlData)[_K] }): ControlData {
        return new ControlData(_o.gender, _o.language);
    }

        /**
         * @summary The enum used as the type of the component `gender`
         * @public
         * @static
         */

    public static _enum_for_gender = _enum_for_ControlData_gender;
}

/**
 * @summary The Leading Root Component Types of ControlData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlData: $.ComponentSpec[] = [
    new $.ComponentSpec("gender", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("language", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ControlData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlData: $.ASN1Decoder<ControlData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlData (el: _Element): ControlData {
    if (!_cached_decoder_for_ControlData) { _cached_decoder_for_ControlData = function (el: _Element): ControlData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ControlData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gender";
    sequence[1].name = "language";
    let gender!: ControlData_gender;
    let language!: OCTET_STRING;
    gender = _decode_ControlData_gender(sequence[0]);
    language = $._decodeOctetString(sequence[1]);
    return new ControlData(
        gender,
        language,

    );
}; }
    return _cached_decoder_for_ControlData(el);
}

let _cached_encoder_for_ControlData: $.ASN1Encoder<ControlData> | null = null;

/**
 * @summary Encodes a(n) ControlData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlData, encoded as an ASN.1 Element.
 */
export
function _encode_ControlData (value: ControlData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlData) { _cached_encoder_for_ControlData = function (value: ControlData, elGetter: $.ASN1Encoder<ControlData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ControlData_gender(value.gender, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.language, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlData(value, elGetter);
}


/* eslint-enable */
