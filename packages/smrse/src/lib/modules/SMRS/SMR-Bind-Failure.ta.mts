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
import { Connect_fail, Connect_fail_not_entitled /* IMPORTED_LONG_NAMED_INTEGER */, not_entitled /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_tmp_overload /* IMPORTED_LONG_NAMED_INTEGER */, tmp_overload /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_tmp_failure /* IMPORTED_LONG_NAMED_INTEGER */, tmp_failure /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_id_or_passwd /* IMPORTED_LONG_NAMED_INTEGER */, id_or_passwd /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_inv_SC_addr /* IMPORTED_LONG_NAMED_INTEGER */, inv_SC_addr /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Connect_fail, _encode_Connect_fail } from "../SMRS/Connect-fail.ta.mjs";
// export { Connect_fail, Connect_fail_not_entitled /* IMPORTED_LONG_NAMED_INTEGER */, not_entitled /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_tmp_overload /* IMPORTED_LONG_NAMED_INTEGER */, tmp_overload /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_tmp_failure /* IMPORTED_LONG_NAMED_INTEGER */, tmp_failure /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_id_or_passwd /* IMPORTED_LONG_NAMED_INTEGER */, id_or_passwd /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_not_supported /* IMPORTED_LONG_NAMED_INTEGER */, not_supported /* IMPORTED_SHORT_NAMED_INTEGER */, Connect_fail_inv_SC_addr /* IMPORTED_LONG_NAMED_INTEGER */, inv_SC_addr /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_Connect_fail, _encode_Connect_fail } from "../SMRS/Connect-fail.ta.mjs";


/**
 * @summary SMR_Bind_Failure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMR-Bind-Failure ::= SEQUENCE {
 *     connect-fail-reason Connect-fail,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SMR_Bind_Failure {
    constructor (
        /**
         * @summary `connect_fail_reason`.
         * @public
         * @readonly
         */
        readonly connect_fail_reason: Connect_fail,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMR_Bind_Failure
     * @description
     * 
     * This takes an `object` and converts it to a `SMR_Bind_Failure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMR_Bind_Failure`.
     * @returns {SMR_Bind_Failure}
     */
    public static _from_object (_o: { [_K in keyof (SMR_Bind_Failure)]: (SMR_Bind_Failure)[_K] }): SMR_Bind_Failure {
        return new SMR_Bind_Failure(_o.connect_fail_reason, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMR_Bind_Failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMR_Bind_Failure: $.ComponentSpec[] = [
    new $.ComponentSpec("connect-fail-reason", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of SMR_Bind_Failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMR_Bind_Failure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMR_Bind_Failure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMR_Bind_Failure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMR_Bind_Failure: $.ASN1Decoder<SMR_Bind_Failure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMR_Bind_Failure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMR_Bind_Failure (el: _Element): SMR_Bind_Failure {
    if (!_cached_decoder_for_SMR_Bind_Failure) { _cached_decoder_for_SMR_Bind_Failure = function (el: _Element): SMR_Bind_Failure {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("SMR-Bind-Failure contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "connect-fail-reason";
    let connect_fail_reason!: Connect_fail;
    connect_fail_reason = _decode_Connect_fail(sequence[0]);
    return new SMR_Bind_Failure(
        connect_fail_reason,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_SMR_Bind_Failure(el);
}

let _cached_encoder_for_SMR_Bind_Failure: $.ASN1Encoder<SMR_Bind_Failure> | null = null;

/**
 * @summary Encodes a(n) SMR_Bind_Failure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMR_Bind_Failure, encoded as an ASN.1 Element.
 */
export
function _encode_SMR_Bind_Failure (value: SMR_Bind_Failure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMR_Bind_Failure) { _cached_encoder_for_SMR_Bind_Failure = function (value: SMR_Bind_Failure, elGetter: $.ASN1Encoder<SMR_Bind_Failure>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Connect_fail(value.connect_fail_reason, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMR_Bind_Failure(value, elGetter);
}


/* eslint-enable */
