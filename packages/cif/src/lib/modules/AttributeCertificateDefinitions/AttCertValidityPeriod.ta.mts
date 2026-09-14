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
 * @summary AttCertValidityPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttCertValidityPeriod ::= SEQUENCE {
 *   notBeforeTime  GeneralizedTime,
 *   notAfterTime   GeneralizedTime,
 *   ... }
 * ```
 * 
 * @class
 */
export
class AttCertValidityPeriod {
    constructor (
        /**
         * @summary `notBeforeTime`.
         * @public
         * @readonly
         */
        readonly notBeforeTime: GeneralizedTime,
        /**
         * @summary `notAfterTime`.
         * @public
         * @readonly
         */
        readonly notAfterTime: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertValidityPeriod
     * @description
     * 
     * This takes an `object` and converts it to a `AttCertValidityPeriod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertValidityPeriod`.
     * @returns {AttCertValidityPeriod}
     */
    public static _from_object (_o: { [_K in keyof (AttCertValidityPeriod)]: (AttCertValidityPeriod)[_K] }): AttCertValidityPeriod {
        return new AttCertValidityPeriod(_o.notBeforeTime, _o.notAfterTime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AttCertValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [
    new $.ComponentSpec("notBeforeTime", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("notAfterTime", false, $.hasTag(_TagClass.universal, 24))
];

/**
 * @summary The Trailing Root Component Types of AttCertValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttCertValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttCertValidityPeriod: $.ASN1Decoder<AttCertValidityPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttCertValidityPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttCertValidityPeriod (el: _Element): AttCertValidityPeriod {
    if (!_cached_decoder_for_AttCertValidityPeriod) { _cached_decoder_for_AttCertValidityPeriod = function (el: _Element): AttCertValidityPeriod {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AttCertValidityPeriod contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "notBeforeTime";
    sequence[1].name = "notAfterTime";
    let notBeforeTime!: GeneralizedTime;
    let notAfterTime!: GeneralizedTime;
    notBeforeTime = $._decodeGeneralizedTime(sequence[0]);
    notAfterTime = $._decodeGeneralizedTime(sequence[1]);
    return new AttCertValidityPeriod(
        notBeforeTime,
        notAfterTime,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AttCertValidityPeriod(el);
}

let _cached_encoder_for_AttCertValidityPeriod: $.ASN1Encoder<AttCertValidityPeriod> | null = null;

/**
 * @summary Encodes a(n) AttCertValidityPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertValidityPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_AttCertValidityPeriod (value: AttCertValidityPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttCertValidityPeriod) { _cached_encoder_for_AttCertValidityPeriod = function (value: AttCertValidityPeriod, elGetter: $.ASN1Encoder<AttCertValidityPeriod>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeGeneralizedTime(value.notBeforeTime, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.notAfterTime, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttCertValidityPeriod(value, elGetter);
}


/* eslint-enable */
