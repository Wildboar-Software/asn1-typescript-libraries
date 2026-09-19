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
import { FiveQI, _decode_FiveQI, _encode_FiveQI } from "../TS33128Payloads/FiveQI.ta.mjs";
// export { FiveQI, _decode_FiveQI, _encode_FiveQI } from "../TS33128Payloads/FiveQI.ta.mjs";


/**
 * @summary QOSFlowProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowProfile ::= SEQUENCE
 * {
 *     fiveQI [1] FiveQI
 * }
 * ```
 * 
 * @class
 */
export
class QOSFlowProfile {
    constructor (
        /**
         * @summary `fiveQI`.
         * @public
         * @readonly
         */
        readonly fiveQI: FiveQI
    ) {}

    /**
     * @summary Restructures an object into a QOSFlowProfile
     * @description
     * 
     * This takes an `object` and converts it to a `QOSFlowProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QOSFlowProfile`.
     * @returns {QOSFlowProfile}
     */
    public static _from_object (_o: { [_K in keyof (QOSFlowProfile)]: (QOSFlowProfile)[_K] }): QOSFlowProfile {
        return new QOSFlowProfile(_o.fiveQI);
    }


}

/**
 * @summary The Leading Root Component Types of QOSFlowProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QOSFlowProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveQI", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of QOSFlowProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QOSFlowProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QOSFlowProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QOSFlowProfile: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QOSFlowProfile: $.ASN1Decoder<QOSFlowProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowProfile (el: _Element): QOSFlowProfile {
    if (!_cached_decoder_for_QOSFlowProfile) { _cached_decoder_for_QOSFlowProfile = function (el: _Element): QOSFlowProfile {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("QOSFlowProfile contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fiveQI";
    let fiveQI!: FiveQI;
    fiveQI = $._decode_implicit<FiveQI>(() => _decode_FiveQI)(sequence[0]);
    return new QOSFlowProfile(
        fiveQI,

    );
}; }
    return _cached_decoder_for_QOSFlowProfile(el);
}

let _cached_encoder_for_QOSFlowProfile: $.ASN1Encoder<QOSFlowProfile> | null = null;

/**
 * @summary Encodes a(n) QOSFlowProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowProfile, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowProfile (value: QOSFlowProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowProfile) { _cached_encoder_for_QOSFlowProfile = function (value: QOSFlowProfile, elGetter: $.ASN1Encoder<QOSFlowProfile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveQI, $.BER)(value.fiveQI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QOSFlowProfile(value, elGetter);
}


/* eslint-enable */
