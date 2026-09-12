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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary SemaphoreManagementParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemaphoreManagementParameters ::= SEQUENCE {
 *     algorithm           [0] IMPLICIT MMSString
 *     -- method of processing the &priority field
 * }
 * ```
 * 
 * @class
 */
export
class SemaphoreManagementParameters {
    constructor (
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: MMSString
    ) {}

    /**
     * @summary Restructures an object into a SemaphoreManagementParameters
     * @description
     * 
     * This takes an `object` and converts it to a `SemaphoreManagementParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SemaphoreManagementParameters`.
     * @returns {SemaphoreManagementParameters}
     */
    public static _from_object (_o: { [_K in keyof (SemaphoreManagementParameters)]: (SemaphoreManagementParameters)[_K] }): SemaphoreManagementParameters {
        return new SemaphoreManagementParameters(_o.algorithm);
    }


}

/**
 * @summary The Leading Root Component Types of SemaphoreManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SemaphoreManagementParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of SemaphoreManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SemaphoreManagementParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SemaphoreManagementParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SemaphoreManagementParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SemaphoreManagementParameters: $.ASN1Decoder<SemaphoreManagementParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SemaphoreManagementParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SemaphoreManagementParameters (el: _Element): SemaphoreManagementParameters {
    if (!_cached_decoder_for_SemaphoreManagementParameters) { _cached_decoder_for_SemaphoreManagementParameters = function (el: _Element): SemaphoreManagementParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SemaphoreManagementParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "algorithm";
    let algorithm!: MMSString;
    algorithm = $._decode_explicit<MMSString>(() => _decode_MMSString)(sequence[0]);
    return new SemaphoreManagementParameters(
        algorithm,

    );
}; }
    return _cached_decoder_for_SemaphoreManagementParameters(el);
}

let _cached_encoder_for_SemaphoreManagementParameters: $.ASN1Encoder<SemaphoreManagementParameters> | null = null;

/**
 * @summary Encodes a(n) SemaphoreManagementParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SemaphoreManagementParameters, encoded as an ASN.1 Element.
 */
export
function _encode_SemaphoreManagementParameters (value: SemaphoreManagementParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SemaphoreManagementParameters) { _cached_encoder_for_SemaphoreManagementParameters = function (value: SemaphoreManagementParameters, elGetter: $.ASN1Encoder<SemaphoreManagementParameters>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MMSString, $.BER)(value.algorithm, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SemaphoreManagementParameters(value, elGetter);
}


/* eslint-enable */
