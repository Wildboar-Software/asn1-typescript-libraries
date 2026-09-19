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
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { EPSBearerRemovalCauseValue, _decode_EPSBearerRemovalCauseValue, _encode_EPSBearerRemovalCauseValue } from "../TS33128Payloads/EPSBearerRemovalCauseValue.ta.mjs";
// export { EPSBearerRemovalCauseValue, _decode_EPSBearerRemovalCauseValue, _encode_EPSBearerRemovalCauseValue } from "../TS33128Payloads/EPSBearerRemovalCauseValue.ta.mjs";


/**
 * @summary EPSBearerContextForRemoval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerContextForRemoval ::= SEQUENCE
 * {
 *     ePSBearerID [1] EPSBearerID,
 *     cause       [2] EPSBearerRemovalCauseValue
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerContextForRemoval {
    constructor (
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSBearerRemovalCauseValue
    ) {}

    /**
     * @summary Restructures an object into a EPSBearerContextForRemoval
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerContextForRemoval`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerContextForRemoval`.
     * @returns {EPSBearerContextForRemoval}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerContextForRemoval)]: (EPSBearerContextForRemoval)[_K] }): EPSBearerContextForRemoval {
        return new EPSBearerContextForRemoval(_o.ePSBearerID, _o.cause);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerContextForRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerContextForRemoval: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerContextForRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerContextForRemoval: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerContextForRemoval
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerContextForRemoval: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerContextForRemoval: $.ASN1Decoder<EPSBearerContextForRemoval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerContextForRemoval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerContextForRemoval (el: _Element): EPSBearerContextForRemoval {
    if (!_cached_decoder_for_EPSBearerContextForRemoval) { _cached_decoder_for_EPSBearerContextForRemoval = function (el: _Element): EPSBearerContextForRemoval {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EPSBearerContextForRemoval contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ePSBearerID";
    sequence[1].name = "cause";
    let ePSBearerID!: EPSBearerID;
    let cause!: EPSBearerRemovalCauseValue;
    ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(sequence[0]);
    cause = $._decode_implicit<EPSBearerRemovalCauseValue>(() => _decode_EPSBearerRemovalCauseValue)(sequence[1]);
    return new EPSBearerContextForRemoval(
        ePSBearerID,
        cause,

    );
}; }
    return _cached_decoder_for_EPSBearerContextForRemoval(el);
}

let _cached_encoder_for_EPSBearerContextForRemoval: $.ASN1Encoder<EPSBearerContextForRemoval> | null = null;

/**
 * @summary Encodes a(n) EPSBearerContextForRemoval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerContextForRemoval, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerContextForRemoval (value: EPSBearerContextForRemoval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerContextForRemoval) { _cached_encoder_for_EPSBearerContextForRemoval = function (value: EPSBearerContextForRemoval, elGetter: $.ASN1Encoder<EPSBearerContextForRemoval>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSBearerRemovalCauseValue, $.BER)(value.cause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearerContextForRemoval(value, elGetter);
}


/* eslint-enable */
