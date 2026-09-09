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
import { InfoType, _enum_for_InfoType, InfoType_numericString /* IMPORTED_LONG_ENUMERATION_ITEM */, numericString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_characterString /* IMPORTED_LONG_ENUMERATION_ITEM */, characterString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_iA5String /* IMPORTED_LONG_ENUMERATION_ITEM */, iA5String /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InfoType, _encode_InfoType } from "../IN-CS2-datatypes/InfoType.ta.mjs";
// export { InfoType, _enum_for_InfoType, InfoType_numericString /* IMPORTED_LONG_ENUMERATION_ITEM */, numericString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_characterString /* IMPORTED_LONG_ENUMERATION_ITEM */, characterString /* IMPORTED_SHORT_ENUMERATION_ITEM */, InfoType_iA5String /* IMPORTED_LONG_ENUMERATION_ITEM */, iA5String /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InfoType, _encode_InfoType } from "../IN-CS2-datatypes/InfoType.ta.mjs";


/**
 * @summary Constraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Constraints ::= SEQUENCE {
 *   maximumNumberOfDigits   [1]  INTEGER(1..127),
 *   minimumNumberOfDigits   [2]  INTEGER(1..127),
 *   typeOfRequestedInfo     [3]  InfoType DEFAULT numericString,
 *   numberOfAllowedRetries  [4]  INTEGER(0..127) DEFAULT 0
 * }
 * ```
 * 
 * @class
 */
export
class Constraints {
    constructor (
        /**
         * @summary `maximumNumberOfDigits`.
         * @public
         * @readonly
         */
        readonly maximumNumberOfDigits: INTEGER,
        /**
         * @summary `minimumNumberOfDigits`.
         * @public
         * @readonly
         */
        readonly minimumNumberOfDigits: INTEGER,
        /**
         * @summary `typeOfRequestedInfo`.
         * @public
         * @readonly
         */
        readonly typeOfRequestedInfo: OPTIONAL<InfoType>,
        /**
         * @summary `numberOfAllowedRetries`.
         * @public
         * @readonly
         */
        readonly numberOfAllowedRetries: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Constraints
     * @description
     * 
     * This takes an `object` and converts it to a `Constraints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Constraints`.
     * @returns {Constraints}
     */
    public static _from_object (_o: { [_K in keyof (Constraints)]: (Constraints)[_K] }): Constraints {
        return new Constraints(_o.maximumNumberOfDigits, _o.minimumNumberOfDigits, _o.typeOfRequestedInfo, _o.numberOfAllowedRetries);
    }

    /**
     * @summary Getter that returns the default value for `typeOfRequestedInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_typeOfRequestedInfo () { return InfoType_numericString; }
    /**
     * @summary Getter that returns the default value for `numberOfAllowedRetries`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_numberOfAllowedRetries () { return 0; }        /**
         * @summary The enum used as the type of the component `typeOfRequestedInfo`
         * @public
         * @static
         */

    public static _enum_for_typeOfRequestedInfo = _enum_for_InfoType;
}

/**
 * @summary The Leading Root Component Types of Constraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Constraints: $.ComponentSpec[] = [
    new $.ComponentSpec("maximumNumberOfDigits", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("minimumNumberOfDigits", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("typeOfRequestedInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("numberOfAllowedRetries", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Constraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Constraints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Constraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Constraints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Constraints: $.ASN1Decoder<Constraints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Constraints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Constraints (el: _Element): Constraints {
    if (!_cached_decoder_for_Constraints) { _cached_decoder_for_Constraints = function (el: _Element): Constraints {
    let maximumNumberOfDigits!: INTEGER;
    let minimumNumberOfDigits!: INTEGER;
    let typeOfRequestedInfo: OPTIONAL<InfoType> = Constraints._default_value_for_typeOfRequestedInfo;
    let numberOfAllowedRetries: OPTIONAL<INTEGER> = Constraints._default_value_for_numberOfAllowedRetries;
    const callbacks: $.DecodingMap = {
        "maximumNumberOfDigits": (_el: _Element): void => { maximumNumberOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "minimumNumberOfDigits": (_el: _Element): void => { minimumNumberOfDigits = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "typeOfRequestedInfo": (_el: _Element): void => { typeOfRequestedInfo = $._decode_implicit<InfoType>(() => _decode_InfoType)(_el); },
        "numberOfAllowedRetries": (_el: _Element): void => { numberOfAllowedRetries = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Constraints,
        _extension_additions_list_spec_for_Constraints,
        _root_component_type_list_2_spec_for_Constraints,
        undefined,
    );
    return new Constraints(
        maximumNumberOfDigits,
        minimumNumberOfDigits,
        typeOfRequestedInfo,
        numberOfAllowedRetries
    );
}; }
    return _cached_decoder_for_Constraints(el);
}

let _cached_encoder_for_Constraints: $.ASN1Encoder<Constraints> | null = null;

/**
 * @summary Encodes a(n) Constraints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Constraints, encoded as an ASN.1 Element.
 */
export
function _encode_Constraints (value: Constraints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Constraints) { _cached_encoder_for_Constraints = function (value: Constraints, elGetter: $.ASN1Encoder<Constraints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximumNumberOfDigits, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.minimumNumberOfDigits, $.BER),
            /* IF_DEFAULT */ (value.typeOfRequestedInfo === undefined || $.deepEq(value.typeOfRequestedInfo, Constraints._default_value_for_typeOfRequestedInfo) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_InfoType, $.BER)(value.typeOfRequestedInfo, $.BER)),
            /* IF_DEFAULT */ (value.numberOfAllowedRetries === undefined || $.deepEq(value.numberOfAllowedRetries, Constraints._default_value_for_numberOfAllowedRetries) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.numberOfAllowedRetries, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Constraints(value, elGetter);
}


/* eslint-enable */
