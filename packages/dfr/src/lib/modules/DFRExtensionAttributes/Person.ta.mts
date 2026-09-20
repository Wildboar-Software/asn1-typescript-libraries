/* eslint-disable */
import {
    OPTIONAL,
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
import { CharacterData, _decode_CharacterData, _encode_CharacterData } from "../DFRAbstractService/CharacterData.ta.mjs";


/**
 * @summary Person
 * @description
 *
 * Person (and optional organization) used by preparers, owners, and authors.
 * Cor.1 removes IMPLICIT on the components. ISO/IEC 10166-1:1991 §9.4.2.4;
 * ISO/IEC 10166-1:1991/Cor.1:1994.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Person ::= SEQUENCE {
 *     surname        [0] CharacterData OPTIONAL,
 *     givenname      [1] CharacterData OPTIONAL,
 *     initials       [2] CharacterData OPTIONAL,
 *     title          [3] CharacterData OPTIONAL,
 *     organization   [4] CharacterData OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Person {
    constructor (
        /**
         * @summary `surname`.
         * @description
         *
         * Family name.
         * @public
         * @readonly
         */
        readonly surname: OPTIONAL<CharacterData>,
        /**
         * @summary `givenname`.
         * @description
         *
         * Given name.
         * @public
         * @readonly
         */
        readonly givenname: OPTIONAL<CharacterData>,
        /**
         * @summary `initials`.
         * @description
         *
         * Initials.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<CharacterData>,
        /**
         * @summary `title`.
         * @description
         *
         * Courtesy or job title.
         * @public
         * @readonly
         */
        readonly title: OPTIONAL<CharacterData>,
        /**
         * @summary `organization`.
         * @description
         *
         * Associated organization.
         * @public
         * @readonly
         */
        readonly organization: OPTIONAL<CharacterData>
    ) {}

    /**
     * @summary Restructures an object into a Person
     * @description
     * 
     * This takes an `object` and converts it to a `Person`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Person`.
     * @returns {Person}
     */
    public static _from_object (_o: { [_K in keyof (Person)]: (Person)[_K] }): Person {
        return new Person(_o.surname, _o.givenname, _o.initials, _o.title, _o.organization);
    }


}

/**
 * @summary The Leading Root Component Types of Person
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Person: $.ComponentSpec[] = [
    new $.ComponentSpec("surname", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("givenname", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("initials", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("title", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("organization", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Person
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Person: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Person
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Person: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Person: $.ASN1Decoder<Person> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Person
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Person (el: _Element): Person {
    if (!_cached_decoder_for_Person) { _cached_decoder_for_Person = function (el: _Element): Person {
    let surname: OPTIONAL<CharacterData>;
    let givenname: OPTIONAL<CharacterData>;
    let initials: OPTIONAL<CharacterData>;
    let title: OPTIONAL<CharacterData>;
    let organization: OPTIONAL<CharacterData>;
    const callbacks: $.DecodingMap = {
        "surname": (_el: _Element): void => { surname = $._decode_explicit<CharacterData>(() => _decode_CharacterData)(_el); },
        "givenname": (_el: _Element): void => { givenname = $._decode_explicit<CharacterData>(() => _decode_CharacterData)(_el); },
        "initials": (_el: _Element): void => { initials = $._decode_explicit<CharacterData>(() => _decode_CharacterData)(_el); },
        "title": (_el: _Element): void => { title = $._decode_explicit<CharacterData>(() => _decode_CharacterData)(_el); },
        "organization": (_el: _Element): void => { organization = $._decode_explicit<CharacterData>(() => _decode_CharacterData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Person,
        _extension_additions_list_spec_for_Person,
        _root_component_type_list_2_spec_for_Person,
        undefined,
    );
    return new Person(
        surname,
        givenname,
        initials,
        title,
        organization
    );
}; }
    return _cached_decoder_for_Person(el);
}

let _cached_encoder_for_Person: $.ASN1Encoder<Person> | null = null;

/**
 * @summary Encodes a(n) Person into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Person, encoded as an ASN.1 Element.
 */
export
function _encode_Person (value: Person, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Person) { _cached_encoder_for_Person = function (value: Person): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.surname === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_CharacterData, $.BER)(value.surname, $.BER)),
            /* IF_ABSENT  */ ((value.givenname === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_CharacterData, $.BER)(value.givenname, $.BER)),
            /* IF_ABSENT  */ ((value.initials === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_CharacterData, $.BER)(value.initials, $.BER)),
            /* IF_ABSENT  */ ((value.title === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_CharacterData, $.BER)(value.title, $.BER)),
            /* IF_ABSENT  */ ((value.organization === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_CharacterData, $.BER)(value.organization, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Person(value, elGetter);
}


/* eslint-enable */
