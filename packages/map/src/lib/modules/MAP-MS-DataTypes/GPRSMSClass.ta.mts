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
import { MSNetworkCapability, _decode_MSNetworkCapability, _encode_MSNetworkCapability } from "../MAP-MS-DataTypes/MSNetworkCapability.ta.mjs";
// export { MSNetworkCapability, _decode_MSNetworkCapability, _encode_MSNetworkCapability } from "../MAP-MS-DataTypes/MSNetworkCapability.ta.mjs";
import { MSRadioAccessCapability, _decode_MSRadioAccessCapability, _encode_MSRadioAccessCapability } from "../MAP-MS-DataTypes/MSRadioAccessCapability.ta.mjs";
// export { MSRadioAccessCapability, _decode_MSRadioAccessCapability, _encode_MSRadioAccessCapability } from "../MAP-MS-DataTypes/MSRadioAccessCapability.ta.mjs";


/**
 * @summary GPRSMSClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSMSClass ::= SEQUENCE {
 *     mSNetworkCapability    [0] MSNetworkCapability,
 *     mSRadioAccessCapability    [1] MSRadioAccessCapability    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class GPRSMSClass {
    constructor (
        /**
         * @summary `mSNetworkCapability`.
         * @public
         * @readonly
         */
        readonly mSNetworkCapability: MSNetworkCapability,
        /**
         * @summary `mSRadioAccessCapability`.
         * @public
         * @readonly
         */
        readonly mSRadioAccessCapability: OPTIONAL<MSRadioAccessCapability>
    ) {}

    /**
     * @summary Restructures an object into a GPRSMSClass
     * @description
     * 
     * This takes an `object` and converts it to a `GPRSMSClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRSMSClass`.
     * @returns {GPRSMSClass}
     */
    public static _from_object (_o: { [_K in keyof (GPRSMSClass)]: (GPRSMSClass)[_K] }): GPRSMSClass {
        return new GPRSMSClass(_o.mSNetworkCapability, _o.mSRadioAccessCapability);
    }


}

/**
 * @summary The Leading Root Component Types of GPRSMSClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRSMSClass: $.ComponentSpec[] = [
    new $.ComponentSpec("mSNetworkCapability", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mSRadioAccessCapability", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GPRSMSClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRSMSClass: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRSMSClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRSMSClass: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GPRSMSClass: $.ASN1Decoder<GPRSMSClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSMSClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSMSClass (el: _Element): GPRSMSClass {
    if (!_cached_decoder_for_GPRSMSClass) { _cached_decoder_for_GPRSMSClass = function (el: _Element): GPRSMSClass {
    let mSNetworkCapability!: MSNetworkCapability;
    let mSRadioAccessCapability: OPTIONAL<MSRadioAccessCapability>;
    const callbacks: $.DecodingMap = {
        "mSNetworkCapability": (_el: _Element): void => { mSNetworkCapability = $._decode_implicit<MSNetworkCapability>(() => _decode_MSNetworkCapability)(_el); },
        "mSRadioAccessCapability": (_el: _Element): void => { mSRadioAccessCapability = $._decode_implicit<MSRadioAccessCapability>(() => _decode_MSRadioAccessCapability)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSMSClass,
        _extension_additions_list_spec_for_GPRSMSClass,
        _root_component_type_list_2_spec_for_GPRSMSClass,
        undefined,
    );
    return new GPRSMSClass(
        mSNetworkCapability,
        mSRadioAccessCapability
    );
}; }
    return _cached_decoder_for_GPRSMSClass(el);
}

let _cached_encoder_for_GPRSMSClass: $.ASN1Encoder<GPRSMSClass> | null = null;

/**
 * @summary Encodes a(n) GPRSMSClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSMSClass, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSMSClass (value: GPRSMSClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSMSClass) { _cached_encoder_for_GPRSMSClass = function (value: GPRSMSClass, elGetter: $.ASN1Encoder<GPRSMSClass>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MSNetworkCapability, $.BER)(value.mSNetworkCapability, $.BER),
            /* IF_ABSENT  */ ((value.mSRadioAccessCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MSRadioAccessCapability, $.BER)(value.mSRadioAccessCapability, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GPRSMSClass(value, elGetter);
}


/* eslint-enable */
