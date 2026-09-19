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
 * @summary UERadioCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UERadioCapability ::= SEQUENCE
 * {
 *     uERadioCapibilityNR    [1] OCTET STRING OPTIONAL,
 *     uERadioCapabilityEUTRA [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UERadioCapability {
    constructor (
        /**
         * @summary `uERadioCapibilityNR`.
         * @public
         * @readonly
         */
        readonly uERadioCapibilityNR: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `uERadioCapabilityEUTRA`.
         * @public
         * @readonly
         */
        readonly uERadioCapabilityEUTRA: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a UERadioCapability
     * @description
     * 
     * This takes an `object` and converts it to a `UERadioCapability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UERadioCapability`.
     * @returns {UERadioCapability}
     */
    public static _from_object (_o: { [_K in keyof (UERadioCapability)]: (UERadioCapability)[_K] }): UERadioCapability {
        return new UERadioCapability(_o.uERadioCapibilityNR, _o.uERadioCapabilityEUTRA);
    }


}

/**
 * @summary The Leading Root Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UERadioCapability: $.ComponentSpec[] = [
    new $.ComponentSpec("uERadioCapibilityNR", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uERadioCapabilityEUTRA", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UERadioCapability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UERadioCapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UERadioCapability: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UERadioCapability: $.ASN1Decoder<UERadioCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UERadioCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UERadioCapability (el: _Element): UERadioCapability {
    if (!_cached_decoder_for_UERadioCapability) { _cached_decoder_for_UERadioCapability = function (el: _Element): UERadioCapability {
    let uERadioCapibilityNR: OPTIONAL<OCTET_STRING>;
    let uERadioCapabilityEUTRA: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "uERadioCapibilityNR": (_el: _Element): void => { uERadioCapibilityNR = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "uERadioCapabilityEUTRA": (_el: _Element): void => { uERadioCapabilityEUTRA = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UERadioCapability,
        _extension_additions_list_spec_for_UERadioCapability,
        _root_component_type_list_2_spec_for_UERadioCapability,
        undefined,
    );
    return new UERadioCapability(
        uERadioCapibilityNR,
        uERadioCapabilityEUTRA
    );
}; }
    return _cached_decoder_for_UERadioCapability(el);
}

let _cached_encoder_for_UERadioCapability: $.ASN1Encoder<UERadioCapability> | null = null;

/**
 * @summary Encodes a(n) UERadioCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UERadioCapability, encoded as an ASN.1 Element.
 */
export
function _encode_UERadioCapability (value: UERadioCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UERadioCapability) { _cached_encoder_for_UERadioCapability = function (value: UERadioCapability, elGetter: $.ASN1Encoder<UERadioCapability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uERadioCapibilityNR === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.uERadioCapibilityNR, $.BER)),
            /* IF_ABSENT  */ ((value.uERadioCapabilityEUTRA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.uERadioCapabilityEUTRA, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UERadioCapability(value, elGetter);
}


/* eslint-enable */
