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
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
import { ScreeningIndicator, _enum_for_ScreeningIndicator, ScreeningIndicator_userProvidedNotScreened /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedNotScreened /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_userProvidedVerifiedAndPassed /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedVerifiedAndPassed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_userProvidedVerifiedAndFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedVerifiedAndFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_networkProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, networkProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ScreeningIndicator, _encode_ScreeningIndicator } from "../Addressing-Data-Elements/ScreeningIndicator.ta.mjs";
// export { ScreeningIndicator, _enum_for_ScreeningIndicator, ScreeningIndicator_userProvidedNotScreened /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedNotScreened /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_userProvidedVerifiedAndPassed /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedVerifiedAndPassed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_userProvidedVerifiedAndFailed /* IMPORTED_LONG_ENUMERATION_ITEM */, userProvidedVerifiedAndFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */, ScreeningIndicator_networkProvided /* IMPORTED_LONG_ENUMERATION_ITEM */, networkProvided /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ScreeningIndicator, _encode_ScreeningIndicator } from "../Addressing-Data-Elements/ScreeningIndicator.ta.mjs";


/**
 * @summary NumberScreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberScreened ::= SEQUENCE {
 *   partyNumber         PartyNumber,
 *   screeningIndicator  ScreeningIndicator
 * }
 * ```
 * 
 * @class
 */
export
class NumberScreened {
    constructor (
        /**
         * @summary `partyNumber`.
         * @public
         * @readonly
         */
        readonly partyNumber: PartyNumber,
        /**
         * @summary `screeningIndicator`.
         * @public
         * @readonly
         */
        readonly screeningIndicator: ScreeningIndicator
    ) {}

    /**
     * @summary Restructures an object into a NumberScreened
     * @description
     * 
     * This takes an `object` and converts it to a `NumberScreened`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberScreened`.
     * @returns {NumberScreened}
     */
    public static _from_object (_o: { [_K in keyof (NumberScreened)]: (NumberScreened)[_K] }): NumberScreened {
        return new NumberScreened(_o.partyNumber, _o.screeningIndicator);
    }

        /**
         * @summary The enum used as the type of the component `screeningIndicator`
         * @public
         * @static
         */

    public static _enum_for_screeningIndicator = _enum_for_ScreeningIndicator;
}

/**
 * @summary The Leading Root Component Types of NumberScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NumberScreened: $.ComponentSpec[] = [
    new $.ComponentSpec("partyNumber", false, $.hasAnyTag),
    new $.ComponentSpec("screeningIndicator", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of NumberScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NumberScreened: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NumberScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NumberScreened: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NumberScreened: $.ASN1Decoder<NumberScreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberScreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberScreened (el: _Element): NumberScreened {
    if (!_cached_decoder_for_NumberScreened) { _cached_decoder_for_NumberScreened = function (el: _Element): NumberScreened {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NumberScreened contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "partyNumber";
    sequence[1].name = "screeningIndicator";
    let partyNumber!: PartyNumber;
    let screeningIndicator!: ScreeningIndicator;
    partyNumber = _decode_PartyNumber(sequence[0]);
    screeningIndicator = _decode_ScreeningIndicator(sequence[1]);
    return new NumberScreened(
        partyNumber,
        screeningIndicator,

    );
}; }
    return _cached_decoder_for_NumberScreened(el);
}

let _cached_encoder_for_NumberScreened: $.ASN1Encoder<NumberScreened> | null = null;

/**
 * @summary Encodes a(n) NumberScreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberScreened, encoded as an ASN.1 Element.
 */
export
function _encode_NumberScreened (value: NumberScreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberScreened) { _cached_encoder_for_NumberScreened = function (value: NumberScreened, elGetter: $.ASN1Encoder<NumberScreened>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PartyNumber(value.partyNumber, $.BER),
            /* REQUIRED   */ _encode_ScreeningIndicator(value.screeningIndicator, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NumberScreened(value, elGetter);
}


/* eslint-enable */
