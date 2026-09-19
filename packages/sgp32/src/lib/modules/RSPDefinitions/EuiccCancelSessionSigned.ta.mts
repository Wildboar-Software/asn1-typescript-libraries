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
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { CancelSessionReason, CancelSessionReason_endUserRejection /* IMPORTED_LONG_NAMED_INTEGER */, endUserRejection /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_postponed /* IMPORTED_LONG_NAMED_INTEGER */, postponed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_timeout /* IMPORTED_LONG_NAMED_INTEGER */, timeout /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_pprNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, pprNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_metadataMismatch /* IMPORTED_LONG_NAMED_INTEGER */, metadataMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_loadBppExecutionError /* IMPORTED_LONG_NAMED_INTEGER */, loadBppExecutionError /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_undefinedReason /* IMPORTED_LONG_NAMED_INTEGER */, undefinedReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionReason, _encode_CancelSessionReason } from "../RSPDefinitions/CancelSessionReason.ta.mjs";
// export { CancelSessionReason, CancelSessionReason_endUserRejection /* IMPORTED_LONG_NAMED_INTEGER */, endUserRejection /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_postponed /* IMPORTED_LONG_NAMED_INTEGER */, postponed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_timeout /* IMPORTED_LONG_NAMED_INTEGER */, timeout /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_pprNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, pprNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_metadataMismatch /* IMPORTED_LONG_NAMED_INTEGER */, metadataMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_loadBppExecutionError /* IMPORTED_LONG_NAMED_INTEGER */, loadBppExecutionError /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionReason_undefinedReason /* IMPORTED_LONG_NAMED_INTEGER */, undefinedReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionReason, _encode_CancelSessionReason } from "../RSPDefinitions/CancelSessionReason.ta.mjs";


/**
 * @summary EuiccCancelSessionSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccCancelSessionSigned ::= SEQUENCE {
 *     transactionId TransactionId,
 *     smdpOid OBJECT IDENTIFIER, -- SM-DP+ OID as contained in CERT.DPauth.ECDSA
 *     reason CancelSessionReason
 * }
 * ```
 * 
 * @class
 */
export
class EuiccCancelSessionSigned {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `smdpOid`.
         * @public
         * @readonly
         */
        readonly smdpOid: OBJECT_IDENTIFIER,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: CancelSessionReason
    ) {}

    /**
     * @summary Restructures an object into a EuiccCancelSessionSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccCancelSessionSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccCancelSessionSigned`.
     * @returns {EuiccCancelSessionSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccCancelSessionSigned)]: (EuiccCancelSessionSigned)[_K] }): EuiccCancelSessionSigned {
        return new EuiccCancelSessionSigned(_o.transactionId, _o.smdpOid, _o.reason);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccCancelSessionSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("smdpOid", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reason", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccCancelSessionSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccCancelSessionSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccCancelSessionSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccCancelSessionSigned: $.ASN1Decoder<EuiccCancelSessionSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccCancelSessionSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccCancelSessionSigned (el: _Element): EuiccCancelSessionSigned {
    if (!_cached_decoder_for_EuiccCancelSessionSigned) { _cached_decoder_for_EuiccCancelSessionSigned = function (el: _Element): EuiccCancelSessionSigned {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("EuiccCancelSessionSigned contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "smdpOid";
    sequence[2].name = "reason";
    let transactionId!: TransactionId;
    let smdpOid!: OBJECT_IDENTIFIER;
    let reason!: CancelSessionReason;
    transactionId = _decode_TransactionId(sequence[0]);
    smdpOid = $._decodeObjectIdentifier(sequence[1]);
    reason = _decode_CancelSessionReason(sequence[2]);
    return new EuiccCancelSessionSigned(
        transactionId,
        smdpOid,
        reason,

    );
}; }
    return _cached_decoder_for_EuiccCancelSessionSigned(el);
}

let _cached_encoder_for_EuiccCancelSessionSigned: $.ASN1Encoder<EuiccCancelSessionSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccCancelSessionSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccCancelSessionSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccCancelSessionSigned (value: EuiccCancelSessionSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccCancelSessionSigned) { _cached_encoder_for_EuiccCancelSessionSigned = function (value: EuiccCancelSessionSigned, elGetter: $.ASN1Encoder<EuiccCancelSessionSigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TransactionId(value.transactionId, $.BER),
            /* REQUIRED   */ $._encodeObjectIdentifier(value.smdpOid, $.BER),
            /* REQUIRED   */ _encode_CancelSessionReason(value.reason, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccCancelSessionSigned(value, elGetter);
}


/* eslint-enable */
