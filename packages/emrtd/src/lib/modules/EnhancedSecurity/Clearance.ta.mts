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
import { ClassList, ClassList_unmarked /* IMPORTED_LONG_NAMED_BIT */, unmarked /* IMPORTED_SHORT_NAMED_BIT */, ClassList_unclassified /* IMPORTED_LONG_NAMED_BIT */, unclassified /* IMPORTED_SHORT_NAMED_BIT */, ClassList_restricted /* IMPORTED_LONG_NAMED_BIT */, restricted /* IMPORTED_SHORT_NAMED_BIT */, ClassList_confidential /* IMPORTED_LONG_NAMED_BIT */, confidential /* IMPORTED_SHORT_NAMED_BIT */, ClassList_secret /* IMPORTED_LONG_NAMED_BIT */, secret /* IMPORTED_SHORT_NAMED_BIT */, ClassList_topSecret /* IMPORTED_LONG_NAMED_BIT */, topSecret /* IMPORTED_SHORT_NAMED_BIT */, _decode_ClassList, _encode_ClassList } from "../EnhancedSecurity/ClassList.ta.mjs";
// export { ClassList, ClassList_unmarked /* IMPORTED_LONG_NAMED_BIT */, unmarked /* IMPORTED_SHORT_NAMED_BIT */, ClassList_unclassified /* IMPORTED_LONG_NAMED_BIT */, unclassified /* IMPORTED_SHORT_NAMED_BIT */, ClassList_restricted /* IMPORTED_LONG_NAMED_BIT */, restricted /* IMPORTED_SHORT_NAMED_BIT */, ClassList_confidential /* IMPORTED_LONG_NAMED_BIT */, confidential /* IMPORTED_SHORT_NAMED_BIT */, ClassList_secret /* IMPORTED_LONG_NAMED_BIT */, secret /* IMPORTED_SHORT_NAMED_BIT */, ClassList_topSecret /* IMPORTED_LONG_NAMED_BIT */, topSecret /* IMPORTED_SHORT_NAMED_BIT */, _decode_ClassList, _encode_ClassList } from "../EnhancedSecurity/ClassList.ta.mjs";
import { SecurityCategory, _decode_SecurityCategory, _encode_SecurityCategory } from "../EnhancedSecurity/SecurityCategory.ta.mjs";
// export { SecurityCategory, _decode_SecurityCategory, _encode_SecurityCategory } from "../EnhancedSecurity/SecurityCategory.ta.mjs";


/**
 * @summary Clearance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Clearance ::= SEQUENCE {
 *   policyId            OBJECT IDENTIFIER,
 *   classList           ClassList DEFAULT {unclassified},
 *   securityCategories  SET SIZE (1..MAX) OF SecurityCategory OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class Clearance {
    constructor (
        /**
         * @summary `policyId`.
         * @public
         * @readonly
         */
        readonly policyId: OBJECT_IDENTIFIER,
        /**
         * @summary `classList`.
         * @public
         * @readonly
         */
        readonly classList: OPTIONAL<ClassList>,
        /**
         * @summary `securityCategories`.
         * @public
         * @readonly
         */
        readonly securityCategories: OPTIONAL<SecurityCategory[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Clearance
     * @description
     * 
     * This takes an `object` and converts it to a `Clearance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Clearance`.
     * @returns {Clearance}
     */
    public static _from_object (_o: { [_K in keyof (Clearance)]: (Clearance)[_K] }): Clearance {
        return new Clearance(_o.policyId, _o.classList, _o.securityCategories, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `classList`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classList () { return (() => { const _ret = new Uint8ClampedArray(5); _ret[ClassList_unclassified] = TRUE_BIT;return _ret; })(); }
}

/**
 * @summary The Leading Root Component Types of Clearance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Clearance: $.ComponentSpec[] = [
    new $.ComponentSpec("policyId", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("classList", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("securityCategories", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of Clearance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Clearance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Clearance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Clearance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Clearance: $.ASN1Decoder<Clearance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Clearance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Clearance (el: _Element): Clearance {
    if (!_cached_decoder_for_Clearance) { _cached_decoder_for_Clearance = function (el: _Element): Clearance {
    let policyId!: OBJECT_IDENTIFIER;
    let classList: OPTIONAL<ClassList> = Clearance._default_value_for_classList;
    let securityCategories: OPTIONAL<SecurityCategory[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "policyId": (_el: _Element): void => { policyId = $._decodeObjectIdentifier(_el); },
        "classList": (_el: _Element): void => { classList = _decode_ClassList(_el); },
        "securityCategories": (_el: _Element): void => { securityCategories = $._decodeSetOf<SecurityCategory>(() => _decode_SecurityCategory)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Clearance,
        _extension_additions_list_spec_for_Clearance,
        _root_component_type_list_2_spec_for_Clearance,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Clearance(
        policyId,
        classList,
        securityCategories,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Clearance(el);
}

let _cached_encoder_for_Clearance: $.ASN1Encoder<Clearance> | null = null;

/**
 * @summary Encodes a(n) Clearance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Clearance, encoded as an ASN.1 Element.
 */
export
function _encode_Clearance (value: Clearance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Clearance) { _cached_encoder_for_Clearance = function (value: Clearance, elGetter: $.ASN1Encoder<Clearance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.policyId, $.BER),
            /* IF_DEFAULT */ (value.classList === undefined || $.deepEq(value.classList, Clearance._default_value_for_classList) ? undefined : _encode_ClassList(value.classList, $.BER)),
            /* IF_ABSENT  */ ((value.securityCategories === undefined) ? undefined : $._encodeSetOf<SecurityCategory>(() => _encode_SecurityCategory, $.BER)(value.securityCategories, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Clearance(value, elGetter);
}


/* eslint-enable */
