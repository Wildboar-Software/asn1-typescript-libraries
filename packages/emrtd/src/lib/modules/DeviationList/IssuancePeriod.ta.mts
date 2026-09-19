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



/**
 * @summary IssuancePeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IssuancePeriod ::= SEQUENCE {
 *     firstIssued GeneralizedTime,
 *     lastIssued GeneralizedTime
 * }
 * ```
 * 
 * @class
 */
export
class IssuancePeriod {
    constructor (
        /**
         * @summary `firstIssued`.
         * @public
         * @readonly
         */
        readonly firstIssued: GeneralizedTime,
        /**
         * @summary `lastIssued`.
         * @public
         * @readonly
         */
        readonly lastIssued: GeneralizedTime
    ) {}

    /**
     * @summary Restructures an object into a IssuancePeriod
     * @description
     * 
     * This takes an `object` and converts it to a `IssuancePeriod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuancePeriod`.
     * @returns {IssuancePeriod}
     */
    public static _from_object (_o: { [_K in keyof (IssuancePeriod)]: (IssuancePeriod)[_K] }): IssuancePeriod {
        return new IssuancePeriod(_o.firstIssued, _o.lastIssued);
    }


}

/**
 * @summary The Leading Root Component Types of IssuancePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IssuancePeriod: $.ComponentSpec[] = [
    new $.ComponentSpec("firstIssued", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("lastIssued", false, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of IssuancePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IssuancePeriod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IssuancePeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IssuancePeriod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IssuancePeriod: $.ASN1Decoder<IssuancePeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IssuancePeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IssuancePeriod (el: _Element): IssuancePeriod {
    if (!_cached_decoder_for_IssuancePeriod) { _cached_decoder_for_IssuancePeriod = function (el: _Element): IssuancePeriod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IssuancePeriod contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "firstIssued";
    sequence[1].name = "lastIssued";
    let firstIssued!: GeneralizedTime;
    let lastIssued!: GeneralizedTime;
    firstIssued = $._decodeGeneralizedTime(sequence[0]);
    lastIssued = $._decodeGeneralizedTime(sequence[1]);
    return new IssuancePeriod(
        firstIssued,
        lastIssued,

    );
}; }
    return _cached_decoder_for_IssuancePeriod(el);
}

let _cached_encoder_for_IssuancePeriod: $.ASN1Encoder<IssuancePeriod> | null = null;

/**
 * @summary Encodes a(n) IssuancePeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuancePeriod, encoded as an ASN.1 Element.
 */
export
function _encode_IssuancePeriod (value: IssuancePeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IssuancePeriod) { _cached_encoder_for_IssuancePeriod = function (value: IssuancePeriod, elGetter: $.ASN1Encoder<IssuancePeriod>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeGeneralizedTime(value.firstIssued, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.lastIssued, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IssuancePeriod(value, elGetter);
}


/* eslint-enable */
