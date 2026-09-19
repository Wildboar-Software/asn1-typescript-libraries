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
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { EUICCInfo2, _decode_EUICCInfo2, _encode_EUICCInfo2 } from "../RSPDefinitions/EUICCInfo2.ta.mjs";
// export { EUICCInfo2, _decode_EUICCInfo2, _encode_EUICCInfo2 } from "../RSPDefinitions/EUICCInfo2.ta.mjs";
import { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";
// export { CtxParams1, _decode_CtxParams1, _encode_CtxParams1 } from "../RSPDefinitions/CtxParams1.ta.mjs";


/**
 * @summary EuiccSigned1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccSigned1 ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     serverAddress [3] UTF8String, -- The RSP Server address as an FQDN
 *     serverChallenge [4] Octet16,     -- The RSP Server Challenge
 *     euiccInfo2 [34] EUICCInfo2,
 *     ctxParams1 CtxParams1
 * }
 * ```
 * 
 * @class
 */
export
class EuiccSigned1 {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `serverAddress`.
         * @public
         * @readonly
         */
        readonly serverAddress: UTF8String,
        /**
         * @summary `serverChallenge`.
         * @public
         * @readonly
         */
        readonly serverChallenge: Octet16,
        /**
         * @summary `euiccInfo2`.
         * @public
         * @readonly
         */
        readonly euiccInfo2: EUICCInfo2,
        /**
         * @summary `ctxParams1`.
         * @public
         * @readonly
         */
        readonly ctxParams1: CtxParams1
    ) {}

    /**
     * @summary Restructures an object into a EuiccSigned1
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccSigned1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccSigned1`.
     * @returns {EuiccSigned1}
     */
    public static _from_object (_o: { [_K in keyof (EuiccSigned1)]: (EuiccSigned1)[_K] }): EuiccSigned1 {
        return new EuiccSigned1(_o.transactionId, _o.serverAddress, _o.serverChallenge, _o.euiccInfo2, _o.ctxParams1);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccSigned1: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serverAddress", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serverChallenge", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("euiccInfo2", false, $.hasTag(_TagClass.context, 34)),
    new $.ComponentSpec("ctxParams1", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccSigned1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccSigned1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccSigned1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccSigned1: $.ASN1Decoder<EuiccSigned1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccSigned1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccSigned1 (el: _Element): EuiccSigned1 {
    if (!_cached_decoder_for_EuiccSigned1) { _cached_decoder_for_EuiccSigned1 = function (el: _Element): EuiccSigned1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("EuiccSigned1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "serverAddress";
    sequence[2].name = "serverChallenge";
    sequence[3].name = "euiccInfo2";
    sequence[4].name = "ctxParams1";
    let transactionId!: TransactionId;
    let serverAddress!: UTF8String;
    let serverChallenge!: Octet16;
    let euiccInfo2!: EUICCInfo2;
    let ctxParams1!: CtxParams1;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    serverAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[1]);
    serverChallenge = $._decode_implicit<Octet16>(() => _decode_Octet16)(sequence[2]);
    euiccInfo2 = $._decode_implicit<EUICCInfo2>(() => _decode_EUICCInfo2)(sequence[3]);
    ctxParams1 = _decode_CtxParams1(sequence[4]);
    return new EuiccSigned1(
        transactionId,
        serverAddress,
        serverChallenge,
        euiccInfo2,
        ctxParams1,

    );
}; }
    return _cached_decoder_for_EuiccSigned1(el);
}

let _cached_encoder_for_EuiccSigned1: $.ASN1Encoder<EuiccSigned1> | null = null;

/**
 * @summary Encodes a(n) EuiccSigned1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccSigned1, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccSigned1 (value: EuiccSigned1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccSigned1) { _cached_encoder_for_EuiccSigned1 = function (value: EuiccSigned1, elGetter: $.ASN1Encoder<EuiccSigned1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.serverAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Octet16, $.BER)(value.serverChallenge, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 34, () => _encode_EUICCInfo2, $.BER)(value.euiccInfo2, $.BER),
            /* REQUIRED   */ _encode_CtxParams1(value.ctxParams1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccSigned1(value, elGetter);
}


/* eslint-enable */
