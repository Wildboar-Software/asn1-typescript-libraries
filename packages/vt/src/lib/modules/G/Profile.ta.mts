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
import { ProfileArgumOfferList, _decode_ProfileArgumOfferList, _encode_ProfileArgumOfferList } from "../G/ProfileArgumOfferList.ta.mjs";
// export { ProfileArgumOfferList, _decode_ProfileArgumOfferList, _encode_ProfileArgumOfferList } from "../G/ProfileArgumOfferList.ta.mjs";


/**
 * @summary Profile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Profile ::= SEQUENCE {
 *     name                OBJECT IDENTIFIER OPTIONAL,
 *     argumentOfferList   ProfileArgumOfferList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Profile {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `argumentOfferList`.
         * @public
         * @readonly
         */
        readonly argumentOfferList: OPTIONAL<ProfileArgumOfferList>
    ) {}

    /**
     * @summary Restructures an object into a Profile
     * @description
     * 
     * This takes an `object` and converts it to a `Profile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Profile`.
     * @returns {Profile}
     */
    public static _from_object (_o: { [_K in keyof (Profile)]: (Profile)[_K] }): Profile {
        return new Profile(_o.name, _o.argumentOfferList);
    }


}

/**
 * @summary The Leading Root Component Types of Profile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Profile: $.ComponentSpec[] = [
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("argumentOfferList", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Profile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Profile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Profile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Profile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Profile: $.ASN1Decoder<Profile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Profile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Profile (el: _Element): Profile {
    if (!_cached_decoder_for_Profile) { _cached_decoder_for_Profile = function (el: _Element): Profile {
    let name: OPTIONAL<OBJECT_IDENTIFIER>;
    let argumentOfferList: OPTIONAL<ProfileArgumOfferList>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decodeObjectIdentifier(_el); },
        "argumentOfferList": (_el: _Element): void => { argumentOfferList = _decode_ProfileArgumOfferList(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Profile,
        _extension_additions_list_spec_for_Profile,
        _root_component_type_list_2_spec_for_Profile,
        undefined,
    );
    return new Profile(
        name,
        argumentOfferList
    );
}; }
    return _cached_decoder_for_Profile(el);
}

let _cached_encoder_for_Profile: $.ASN1Encoder<Profile> | null = null;

/**
 * @summary Encodes a(n) Profile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Profile, encoded as an ASN.1 Element.
 */
export
function _encode_Profile (value: Profile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Profile) { _cached_encoder_for_Profile = function (value: Profile, elGetter: $.ASN1Encoder<Profile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encodeObjectIdentifier(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.argumentOfferList === undefined) ? undefined : _encode_ProfileArgumOfferList(value.argumentOfferList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Profile(value, elGetter);
}


/* eslint-enable */
