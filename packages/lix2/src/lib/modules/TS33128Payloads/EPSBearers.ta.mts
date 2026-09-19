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
import { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
// export { FTEID, _decode_FTEID, _encode_FTEID } from "../TS33128Payloads/FTEID.ta.mjs";
import { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
// export { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";


/**
 * @summary EPSBearers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearers ::= SEQUENCE
 * {
 *     ePSBearerID         [1] EPSBearerID,
 *     pGWS8UserPlaneFTEID [2] FTEID,
 *     qCI                 [3] QCI
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearers {
    constructor (
        /**
         * @summary `ePSBearerID`.
         * @public
         * @readonly
         */
        readonly ePSBearerID: EPSBearerID,
        /**
         * @summary `pGWS8UserPlaneFTEID`.
         * @public
         * @readonly
         */
        readonly pGWS8UserPlaneFTEID: FTEID,
        /**
         * @summary `qCI`.
         * @public
         * @readonly
         */
        readonly qCI: QCI
    ) {}

    /**
     * @summary Restructures an object into a EPSBearers
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearers`.
     * @returns {EPSBearers}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearers)]: (EPSBearers)[_K] }): EPSBearers {
        return new EPSBearers(_o.ePSBearerID, _o.pGWS8UserPlaneFTEID, _o.qCI);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearers: $.ComponentSpec[] = [
    new $.ComponentSpec("ePSBearerID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pGWS8UserPlaneFTEID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("qCI", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EPSBearers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearers: $.ASN1Decoder<EPSBearers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearers (el: _Element): EPSBearers {
    if (!_cached_decoder_for_EPSBearers) { _cached_decoder_for_EPSBearers = function (el: _Element): EPSBearers {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EPSBearers contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ePSBearerID";
    sequence[1].name = "pGWS8UserPlaneFTEID";
    sequence[2].name = "qCI";
    let ePSBearerID!: EPSBearerID;
    let pGWS8UserPlaneFTEID!: FTEID;
    let qCI!: QCI;
    ePSBearerID = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(sequence[0]);
    pGWS8UserPlaneFTEID = $._decode_implicit<FTEID>(() => _decode_FTEID)(sequence[1]);
    qCI = $._decode_implicit<QCI>(() => _decode_QCI)(sequence[2]);
    return new EPSBearers(
        ePSBearerID,
        pGWS8UserPlaneFTEID,
        qCI,

    );
}; }
    return _cached_decoder_for_EPSBearers(el);
}

let _cached_encoder_for_EPSBearers: $.ASN1Encoder<EPSBearers> | null = null;

/**
 * @summary Encodes a(n) EPSBearers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearers, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearers (value: EPSBearers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearers) { _cached_encoder_for_EPSBearers = function (value: EPSBearers, elGetter: $.ASN1Encoder<EPSBearers>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPSBearerID, $.BER)(value.ePSBearerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FTEID, $.BER)(value.pGWS8UserPlaneFTEID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_QCI, $.BER)(value.qCI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearers(value, elGetter);
}


/* eslint-enable */
