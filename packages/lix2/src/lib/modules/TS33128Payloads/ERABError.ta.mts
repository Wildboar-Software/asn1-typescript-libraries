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
import { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";
// export { EPSRANCause, _decode_EPSRANCause, _encode_EPSRANCause } from "../TS33128Payloads/EPSRANCause.ta.mjs";


/**
 * @summary ERABError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ERABError ::= SEQUENCE
 * {
 *     eRABID [1] EPSBearerID,
 *     cause  [2] EPSRANCause
 * }
 * ```
 * 
 * @class
 */
export
class ERABError {
    constructor (
        /**
         * @summary `eRABID`.
         * @public
         * @readonly
         */
        readonly eRABID: EPSBearerID,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EPSRANCause
    ) {}

    /**
     * @summary Restructures an object into a ERABError
     * @description
     * 
     * This takes an `object` and converts it to a `ERABError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ERABError`.
     * @returns {ERABError}
     */
    public static _from_object (_o: { [_K in keyof (ERABError)]: (ERABError)[_K] }): ERABError {
        return new ERABError(_o.eRABID, _o.cause);
    }


}

/**
 * @summary The Leading Root Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ERABError: $.ComponentSpec[] = [
    new $.ComponentSpec("eRABID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ERABError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ERABError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ERABError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ERABError: $.ASN1Decoder<ERABError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ERABError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ERABError (el: _Element): ERABError {
    if (!_cached_decoder_for_ERABError) { _cached_decoder_for_ERABError = function (el: _Element): ERABError {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ERABError contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eRABID";
    sequence[1].name = "cause";
    let eRABID!: EPSBearerID;
    let cause!: EPSRANCause;
    eRABID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(sequence[0]);
    cause = $._decode_implicit<EPSRANCause>(() => _decode_EPSRANCause)(sequence[1]);
    return new ERABError(
        eRABID,
        cause,

    );
}; }
    return _cached_decoder_for_ERABError(el);
}

let _cached_encoder_for_ERABError: $.ASN1Encoder<ERABError> | null = null;

/**
 * @summary Encodes a(n) ERABError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ERABError, encoded as an ASN.1 Element.
 */
export
function _encode_ERABError (value: ERABError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ERABError) { _cached_encoder_for_ERABError = function (value: ERABError, elGetter: $.ASN1Encoder<ERABError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.eRABID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSRANCause, $.BER)(value.cause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ERABError(value, elGetter);
}


/* eslint-enable */
