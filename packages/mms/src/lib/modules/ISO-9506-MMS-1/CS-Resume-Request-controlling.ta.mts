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
import { CS_Resume_Request_controlling_modeType, _decode_CS_Resume_Request_controlling_modeType, _encode_CS_Resume_Request_controlling_modeType } from "../ISO-9506-MMS-1/CS-Resume-Request-controlling-modeType.ta.mjs";
// export { CS_Resume_Request_controlling_modeType, _decode_CS_Resume_Request_controlling_modeType, _encode_CS_Resume_Request_controlling_modeType } from "../ISO-9506-MMS-1/CS-Resume-Request-controlling-modeType.ta.mjs";


/**
 * @summary CS_Resume_Request_controlling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Resume-Request-controlling ::= SEQUENCE {
 *     modeType CHOICE {
 *         continueMode [0] IMPLICIT NULL,
 *         changeMode [1] StartCount
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class CS_Resume_Request_controlling {
    constructor (
        /**
         * @summary `modeType`.
         * @public
         * @readonly
         */
        readonly modeType: CS_Resume_Request_controlling_modeType
    ) {}

    /**
     * @summary Restructures an object into a CS_Resume_Request_controlling
     * @description
     * 
     * This takes an `object` and converts it to a `CS_Resume_Request_controlling`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CS_Resume_Request_controlling`.
     * @returns {CS_Resume_Request_controlling}
     */
    public static _from_object (_o: { [_K in keyof (CS_Resume_Request_controlling)]: (CS_Resume_Request_controlling)[_K] }): CS_Resume_Request_controlling {
        return new CS_Resume_Request_controlling(_o.modeType);
    }


}

/**
 * @summary The Leading Root Component Types of CS_Resume_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CS_Resume_Request_controlling: $.ComponentSpec[] = [
    new $.ComponentSpec("modeType", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of CS_Resume_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CS_Resume_Request_controlling: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CS_Resume_Request_controlling
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CS_Resume_Request_controlling: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CS_Resume_Request_controlling: $.ASN1Decoder<CS_Resume_Request_controlling> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Resume_Request_controlling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Resume_Request_controlling (el: _Element): CS_Resume_Request_controlling {
    if (!_cached_decoder_for_CS_Resume_Request_controlling) { _cached_decoder_for_CS_Resume_Request_controlling = function (el: _Element): CS_Resume_Request_controlling {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CS-Resume-Request-controlling contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "modeType";
    let modeType!: CS_Resume_Request_controlling_modeType;
    modeType = _decode_CS_Resume_Request_controlling_modeType(sequence[0]);
    return new CS_Resume_Request_controlling(
        modeType,

    );
}; }
    return _cached_decoder_for_CS_Resume_Request_controlling(el);
}

let _cached_encoder_for_CS_Resume_Request_controlling: $.ASN1Encoder<CS_Resume_Request_controlling> | null = null;

/**
 * @summary Encodes a(n) CS_Resume_Request_controlling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Resume_Request_controlling, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Resume_Request_controlling (value: CS_Resume_Request_controlling, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Resume_Request_controlling) { _cached_encoder_for_CS_Resume_Request_controlling = function (value: CS_Resume_Request_controlling, elGetter: $.ASN1Encoder<CS_Resume_Request_controlling>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CS_Resume_Request_controlling_modeType(value.modeType, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CS_Resume_Request_controlling(value, elGetter);
}


/* eslint-enable */
