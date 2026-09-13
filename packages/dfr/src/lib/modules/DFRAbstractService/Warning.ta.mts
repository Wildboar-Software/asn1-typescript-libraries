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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { AccessProblem, _enum_for_AccessProblem, AccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, AccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, AccessProblem_externally_located_object /* IMPORTED_LONG_ENUMERATION_ITEM */, externally_located_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessProblem, _encode_AccessProblem } from "../DFRAbstractService/AccessProblem.ta.mjs";
// export { AccessProblem, _enum_for_AccessProblem, AccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, AccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, AccessProblem_externally_located_object /* IMPORTED_LONG_ENUMERATION_ITEM */, externally_located_object /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessProblem, _encode_AccessProblem } from "../DFRAbstractService/AccessProblem.ta.mjs";
import { ReferentAccessProblem, _enum_for_ReferentAccessProblem, ReferentAccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, ReferentAccessProblem_insufficient_access_rights /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficient_access_rights /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, ReferentAccessProblem_referent_no_longer_exists /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_no_longer_exists /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_referent_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reference_content_empty /* IMPORTED_LONG_ENUMERATION_ITEM */, reference_content_empty /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferentAccessProblem, _encode_ReferentAccessProblem } from "../DFRAbstractService/ReferentAccessProblem.ta.mjs";
// export { ReferentAccessProblem, _enum_for_ReferentAccessProblem, ReferentAccessProblem_inappropriate_object_class /* IMPORTED_LONG_ENUMERATION_ITEM */, ReferentAccessProblem_insufficient_access_rights /* IMPORTED_LONG_ENUMERATION_ITEM */, insufficient_access_rights /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reserved_by_a_user /* IMPORTED_LONG_ENUMERATION_ITEM */, ReferentAccessProblem_referent_no_longer_exists /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_no_longer_exists /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_referent_modified /* IMPORTED_LONG_ENUMERATION_ITEM */, referent_modified /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentAccessProblem_reference_content_empty /* IMPORTED_LONG_ENUMERATION_ITEM */, reference_content_empty /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferentAccessProblem, _encode_ReferentAccessProblem } from "../DFRAbstractService/ReferentAccessProblem.ta.mjs";


/**
 * @summary Warning
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Warning ::= SEQUENCE {
 *     entry          [0] DfrEntryName,
 *     accessl        [1] AccessProblem OPTIONAL, -- see 8.3.3
 *     access2        [2] ReferentAccessProblem OPTIONAL -- see 8.3.5
 * }
 * ```
 * 
 * @class
 */
export
class Warning {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `accessl`.
         * @public
         * @readonly
         */
        readonly accessl: OPTIONAL<AccessProblem>,
        /**
         * @summary `access2`.
         * @public
         * @readonly
         */
        readonly access2: OPTIONAL<ReferentAccessProblem>
    ) {}

    /**
     * @summary Restructures an object into a Warning
     * @description
     * 
     * This takes an `object` and converts it to a `Warning`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Warning`.
     * @returns {Warning}
     */
    public static _from_object (_o: { [_K in keyof (Warning)]: (Warning)[_K] }): Warning {
        return new Warning(_o.entry, _o.accessl, _o.access2);
    }

        /**
         * @summary The enum used as the type of the component `accessl`
         * @public
         * @static
         */

    public static _enum_for_accessl = _enum_for_AccessProblem;        /**
         * @summary The enum used as the type of the component `access2`
         * @public
         * @static
         */

    public static _enum_for_access2 = _enum_for_ReferentAccessProblem;
}

/**
 * @summary The Leading Root Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Warning: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessl", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("access2", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Warning: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Warning
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Warning: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Warning: $.ASN1Decoder<Warning> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Warning
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Warning (el: _Element): Warning {
    if (!_cached_decoder_for_Warning) { _cached_decoder_for_Warning = function (el: _Element): Warning {
    let entry!: DfrEntryName;
    let accessl: OPTIONAL<AccessProblem>;
    let access2: OPTIONAL<ReferentAccessProblem>;
    const callbacks: $.DecodingMap = {
        "entry": (_el: _Element): void => { entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "accessl": (_el: _Element): void => { accessl = $._decode_implicit<AccessProblem>(() => _decode_AccessProblem)(_el); },
        "access2": (_el: _Element): void => { access2 = $._decode_implicit<ReferentAccessProblem>(() => _decode_ReferentAccessProblem)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Warning,
        _extension_additions_list_spec_for_Warning,
        _root_component_type_list_2_spec_for_Warning,
        undefined,
    );
    return new Warning(
        entry,
        accessl,
        access2
    );
}; }
    return _cached_decoder_for_Warning(el);
}

let _cached_encoder_for_Warning: $.ASN1Encoder<Warning> | null = null;

/**
 * @summary Encodes a(n) Warning into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Warning, encoded as an ASN.1 Element.
 */
export
function _encode_Warning (value: Warning, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Warning) { _cached_encoder_for_Warning = function (value: Warning, elGetter: $.ASN1Encoder<Warning>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* IF_ABSENT  */ ((value.accessl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AccessProblem, $.BER)(value.accessl, $.BER)),
            /* IF_ABSENT  */ ((value.access2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ReferentAccessProblem, $.BER)(value.access2, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Warning(value, elGetter);
}


/* eslint-enable */
