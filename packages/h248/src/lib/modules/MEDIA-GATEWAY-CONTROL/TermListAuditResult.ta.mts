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
import { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
// export { TerminationIDList, _decode_TerminationIDList, _encode_TerminationIDList } from "../MEDIA-GATEWAY-CONTROL/TerminationIDList.ta.mjs";
import { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";
// export { TerminationAudit, _decode_TerminationAudit, _encode_TerminationAudit } from "../MEDIA-GATEWAY-CONTROL/TerminationAudit.ta.mjs";


/**
 * @summary TermListAuditResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListAuditResult ::= SEQUENCE
 *     {
 *         terminationIDList            [0] TerminationIDList,
 *         terminationAuditResult        [1] TerminationAudit,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class TermListAuditResult {
    constructor (
        /**
         * @summary `terminationIDList`.
         * @public
         * @readonly
         */
        readonly terminationIDList: TerminationIDList,
        /**
         * @summary `terminationAuditResult`.
         * @public
         * @readonly
         */
        readonly terminationAuditResult: TerminationAudit,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TermListAuditResult
     * @description
     * 
     * This takes an `object` and converts it to a `TermListAuditResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListAuditResult`.
     * @returns {TermListAuditResult}
     */
    public static _from_object (_o: { [_K in keyof (TermListAuditResult)]: (TermListAuditResult)[_K] }): TermListAuditResult {
        return new TermListAuditResult(_o.terminationIDList, _o.terminationAuditResult, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TermListAuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListAuditResult: $.ComponentSpec[] = [
    new $.ComponentSpec("terminationIDList", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("terminationAuditResult", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of TermListAuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListAuditResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListAuditResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListAuditResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListAuditResult: $.ASN1Decoder<TermListAuditResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListAuditResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListAuditResult (el: _Element): TermListAuditResult {
    if (!_cached_decoder_for_TermListAuditResult) { _cached_decoder_for_TermListAuditResult = function (el: _Element): TermListAuditResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TermListAuditResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationIDList";
    sequence[1].name = "terminationAuditResult";
    let terminationIDList!: TerminationIDList;
    let terminationAuditResult!: TerminationAudit;
    terminationIDList = $._decode_implicit<TerminationIDList>(() => _decode_TerminationIDList)(sequence[0]);
    terminationAuditResult = $._decode_implicit<TerminationAudit>(() => _decode_TerminationAudit)(sequence[1]);
    return new TermListAuditResult(
        terminationIDList,
        terminationAuditResult,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TermListAuditResult(el);
}

let _cached_encoder_for_TermListAuditResult: $.ASN1Encoder<TermListAuditResult> | null = null;

/**
 * @summary Encodes a(n) TermListAuditResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListAuditResult, encoded as an ASN.1 Element.
 */
export
function _encode_TermListAuditResult (value: TermListAuditResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListAuditResult) { _cached_encoder_for_TermListAuditResult = function (value: TermListAuditResult, elGetter: $.ASN1Encoder<TermListAuditResult>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationIDList, $.BER)(value.terminationIDList, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TerminationAudit, $.BER)(value.terminationAuditResult, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermListAuditResult(value, elGetter);
}


/* eslint-enable */
