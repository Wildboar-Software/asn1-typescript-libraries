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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary ContactInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContactInfo ::= SEQUENCE {
 *   name          [0] IMPLICIT InternationalString OPTIONAL,
 *   description   [1] IMPLICIT HumanString OPTIONAL,
 *   address       [2] IMPLICIT HumanString OPTIONAL,
 *   email         [3] IMPLICIT InternationalString OPTIONAL,
 *   phone         [4] IMPLICIT InternationalString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ContactInfo {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<InternationalString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OPTIONAL<HumanString>,
        /**
         * @summary `email`.
         * @public
         * @readonly
         */
        readonly email: OPTIONAL<InternationalString>,
        /**
         * @summary `phone`.
         * @public
         * @readonly
         */
        readonly phone: OPTIONAL<InternationalString>
    ) {}

    /**
     * @summary Restructures an object into a ContactInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ContactInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContactInfo`.
     * @returns {ContactInfo}
     */
    public static _from_object (_o: { [_K in keyof (ContactInfo)]: (ContactInfo)[_K] }): ContactInfo {
        return new ContactInfo(_o.name, _o.description, _o.address, _o.email, _o.phone);
    }


}

/**
 * @summary The Leading Root Component Types of ContactInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContactInfo: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("address", true, $.hasTag(_TagClass.context, 2)),
    /* FIXME: email COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: phone COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ContactInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContactInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContactInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContactInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContactInfo: $.ASN1Decoder<ContactInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContactInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContactInfo (el: _Element): ContactInfo {
    if (!_cached_decoder_for_ContactInfo) { _cached_decoder_for_ContactInfo = function (el: _Element): ContactInfo {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let address: OPTIONAL<HumanString>;
    let email: OPTIONAL<InternationalString>;
    let phone: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "address": (_el: _Element): void => { address = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "email": (_el: _Element): void => { email = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "phone": (_el: _Element): void => { phone = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContactInfo,
        _extension_additions_list_spec_for_ContactInfo,
        _root_component_type_list_2_spec_for_ContactInfo,
        undefined,
    );
    return new ContactInfo(
        name,
        description,
        address,
        email,
        phone
    );
}; }
    return _cached_decoder_for_ContactInfo(el);
}

let _cached_encoder_for_ContactInfo: $.ASN1Encoder<ContactInfo> | null = null;

/**
 * @summary Encodes a(n) ContactInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ContactInfo (value: ContactInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContactInfo) { _cached_encoder_for_ContactInfo = function (value: ContactInfo, elGetter: $.ASN1Encoder<ContactInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.address, $.BER)),
            /* IF_ABSENT  */ ((value.email === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.email, $.BER)),
            /* IF_ABSENT  */ ((value.phone === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.phone, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContactInfo(value, elGetter);
}


/* eslint-enable */
