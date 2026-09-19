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
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements/PartySubaddress.ta.mjs";
// export { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements/PartySubaddress.ta.mjs";


/**
 * @summary AddressScreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressScreened ::= SEQUENCE {
 *   partyNumber         PartyNumber,
 *   screeninglndicator  ScreeningIndicator,
 *   partySubaddress     PartySubaddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AddressScreened {
    constructor (
        /**
         * @summary `partyNumber`.
         * @public
         * @readonly
         */
        readonly partyNumber: PartyNumber,
        /**
         * @summary `screeninglndicator`.
         * @public
         * @readonly
         */
        readonly screeninglndicator: ScreeningIndicator,
        /**
         * @summary `partySubaddress`.
         * @public
         * @readonly
         */
        readonly partySubaddress: OPTIONAL<PartySubaddress>
    ) {}

    /**
     * @summary Restructures an object into a AddressScreened
     * @description
     * 
     * This takes an `object` and converts it to a `AddressScreened`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressScreened`.
     * @returns {AddressScreened}
     */
    public static _from_object (_o: { [_K in keyof (AddressScreened)]: (AddressScreened)[_K] }): AddressScreened {
        return new AddressScreened(_o.partyNumber, _o.screeninglndicator, _o.partySubaddress);
    }

        /**
         * @summary The enum used as the type of the component `screeninglndicator`
         * @public
         * @static
         */

    public static _enum_for_screeninglndicator = _enum_for_ScreeningIndicator;
}

/**
 * @summary The Leading Root Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddressScreened: $.ComponentSpec[] = [
    new $.ComponentSpec("partyNumber", false, $.hasAnyTag),
    new $.ComponentSpec("screeninglndicator", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("partySubaddress", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 4)))
];

/**
 * @summary The Trailing Root Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddressScreened: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddressScreened
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddressScreened: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddressScreened: $.ASN1Decoder<AddressScreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressScreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressScreened (el: _Element): AddressScreened {
    if (!_cached_decoder_for_AddressScreened) { _cached_decoder_for_AddressScreened = function (el: _Element): AddressScreened {
    let partyNumber!: PartyNumber;
    let screeninglndicator!: ScreeningIndicator;
    let partySubaddress: OPTIONAL<PartySubaddress>;
    const callbacks: $.DecodingMap = {
        "partyNumber": (_el: _Element): void => { partyNumber = _decode_PartyNumber(_el); },
        "screeninglndicator": (_el: _Element): void => { screeninglndicator = _decode_ScreeningIndicator(_el); },
        "partySubaddress": (_el: _Element): void => { partySubaddress = _decode_PartySubaddress(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddressScreened,
        _extension_additions_list_spec_for_AddressScreened,
        _root_component_type_list_2_spec_for_AddressScreened,
        undefined,
    );
    return new AddressScreened(
        partyNumber,
        screeninglndicator,
        partySubaddress
    );
}; }
    return _cached_decoder_for_AddressScreened(el);
}

let _cached_encoder_for_AddressScreened: $.ASN1Encoder<AddressScreened> | null = null;

/**
 * @summary Encodes a(n) AddressScreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressScreened, encoded as an ASN.1 Element.
 */
export
function _encode_AddressScreened (value: AddressScreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressScreened) { _cached_encoder_for_AddressScreened = function (value: AddressScreened, elGetter: $.ASN1Encoder<AddressScreened>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PartyNumber(value.partyNumber, $.BER),
            /* REQUIRED   */ _encode_ScreeningIndicator(value.screeninglndicator, $.BER),
            /* IF_ABSENT  */ ((value.partySubaddress === undefined) ? undefined : _encode_PartySubaddress(value.partySubaddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AddressScreened(value, elGetter);
}


/* eslint-enable */
