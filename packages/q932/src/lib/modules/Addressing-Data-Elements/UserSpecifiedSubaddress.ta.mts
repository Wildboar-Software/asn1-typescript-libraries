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
import { SubaddressInformation, _decode_SubaddressInformation, _encode_SubaddressInformation } from "../Addressing-Data-Elements/SubaddressInformation.ta.mjs";
// export { SubaddressInformation, _decode_SubaddressInformation, _encode_SubaddressInformation } from "../Addressing-Data-Elements/SubaddressInformation.ta.mjs";


/**
 * @summary UserSpecifiedSubaddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserSpecifiedSubaddress ::= SEQUENCE {
 *   subaddressInformation  SubaddressInformation,
 *   oddCountIndicator      BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UserSpecifiedSubaddress {
    constructor (
        /**
         * @summary `subaddressInformation`.
         * @public
         * @readonly
         */
        readonly subaddressInformation: SubaddressInformation,
        /**
         * @summary `oddCountIndicator`.
         * @public
         * @readonly
         */
        readonly oddCountIndicator: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a UserSpecifiedSubaddress
     * @description
     * 
     * This takes an `object` and converts it to a `UserSpecifiedSubaddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserSpecifiedSubaddress`.
     * @returns {UserSpecifiedSubaddress}
     */
    public static _from_object (_o: { [_K in keyof (UserSpecifiedSubaddress)]: (UserSpecifiedSubaddress)[_K] }): UserSpecifiedSubaddress {
        return new UserSpecifiedSubaddress(_o.subaddressInformation, _o.oddCountIndicator);
    }


}

/**
 * @summary The Leading Root Component Types of UserSpecifiedSubaddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserSpecifiedSubaddress: $.ComponentSpec[] = [
    new $.ComponentSpec("subaddressInformation", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("oddCountIndicator", true, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of UserSpecifiedSubaddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserSpecifiedSubaddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserSpecifiedSubaddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserSpecifiedSubaddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserSpecifiedSubaddress: $.ASN1Decoder<UserSpecifiedSubaddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserSpecifiedSubaddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserSpecifiedSubaddress (el: _Element): UserSpecifiedSubaddress {
    if (!_cached_decoder_for_UserSpecifiedSubaddress) { _cached_decoder_for_UserSpecifiedSubaddress = function (el: _Element): UserSpecifiedSubaddress {
    let subaddressInformation!: SubaddressInformation;
    let oddCountIndicator: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "subaddressInformation": (_el: _Element): void => { subaddressInformation = _decode_SubaddressInformation(_el); },
        "oddCountIndicator": (_el: _Element): void => { oddCountIndicator = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserSpecifiedSubaddress,
        _extension_additions_list_spec_for_UserSpecifiedSubaddress,
        _root_component_type_list_2_spec_for_UserSpecifiedSubaddress,
        undefined,
    );
    return new UserSpecifiedSubaddress(
        subaddressInformation,
        oddCountIndicator
    );
}; }
    return _cached_decoder_for_UserSpecifiedSubaddress(el);
}

let _cached_encoder_for_UserSpecifiedSubaddress: $.ASN1Encoder<UserSpecifiedSubaddress> | null = null;

/**
 * @summary Encodes a(n) UserSpecifiedSubaddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserSpecifiedSubaddress, encoded as an ASN.1 Element.
 */
export
function _encode_UserSpecifiedSubaddress (value: UserSpecifiedSubaddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserSpecifiedSubaddress) { _cached_encoder_for_UserSpecifiedSubaddress = function (value: UserSpecifiedSubaddress, elGetter: $.ASN1Encoder<UserSpecifiedSubaddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubaddressInformation(value.subaddressInformation, $.BER),
            /* IF_ABSENT  */ ((value.oddCountIndicator === undefined) ? undefined : $._encodeBoolean(value.oddCountIndicator, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserSpecifiedSubaddress(value, elGetter);
}


/* eslint-enable */
