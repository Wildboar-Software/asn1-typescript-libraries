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
import { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";
// export { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";


/**
 * @summary EUICCSigned2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCSigned2 ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     euiccOtpk [APPLICATION 73] OCTET STRING, -- otPK.EUICC.ECKA, tag '5F49'
 *     hashCc Octet32 OPTIONAL     -- Hash of confirmation code
 * }
 * ```
 * 
 * @class
 */
export
class EUICCSigned2 {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `euiccOtpk`.
         * @public
         * @readonly
         */
        readonly euiccOtpk: OCTET_STRING,
        /**
         * @summary `hashCc`.
         * @public
         * @readonly
         */
        readonly hashCc: OPTIONAL<Octet32>
    ) {}

    /**
     * @summary Restructures an object into a EUICCSigned2
     * @description
     * 
     * This takes an `object` and converts it to a `EUICCSigned2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EUICCSigned2`.
     * @returns {EUICCSigned2}
     */
    public static _from_object (_o: { [_K in keyof (EUICCSigned2)]: (EUICCSigned2)[_K] }): EUICCSigned2 {
        return new EUICCSigned2(_o.transactionId, _o.euiccOtpk, _o.hashCc);
    }


}

/**
 * @summary The Leading Root Component Types of EUICCSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EUICCSigned2: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("euiccOtpk", false, $.hasTag(_TagClass.application, 73)),
    new $.ComponentSpec("hashCc", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of EUICCSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EUICCSigned2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EUICCSigned2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EUICCSigned2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EUICCSigned2: $.ASN1Decoder<EUICCSigned2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCSigned2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCSigned2 (el: _Element): EUICCSigned2 {
    if (!_cached_decoder_for_EUICCSigned2) { _cached_decoder_for_EUICCSigned2 = function (el: _Element): EUICCSigned2 {
    let transactionId!: TransactionId;
    let euiccOtpk!: OCTET_STRING;
    let hashCc: OPTIONAL<Octet32>;
    const callbacks: $.DecodingMap = {
        "transactionId": (_el: _Element): void => { transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "euiccOtpk": (_el: _Element): void => { euiccOtpk = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hashCc": (_el: _Element): void => { hashCc = _decode_Octet32(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EUICCSigned2,
        _extension_additions_list_spec_for_EUICCSigned2,
        _root_component_type_list_2_spec_for_EUICCSigned2,
        undefined,
    );
    return new EUICCSigned2(
        transactionId,
        euiccOtpk,
        hashCc
    );
}; }
    return _cached_decoder_for_EUICCSigned2(el);
}

let _cached_encoder_for_EUICCSigned2: $.ASN1Encoder<EUICCSigned2> | null = null;

/**
 * @summary Encodes a(n) EUICCSigned2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCSigned2, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCSigned2 (value: EUICCSigned2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCSigned2) { _cached_encoder_for_EUICCSigned2 = function (value: EUICCSigned2, elGetter: $.ASN1Encoder<EUICCSigned2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 73, () => $._encodeOctetString, $.BER)(value.euiccOtpk, $.BER),
            /* IF_ABSENT  */ ((value.hashCc === undefined) ? undefined : _encode_Octet32(value.hashCc, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EUICCSigned2(value, elGetter);
}


/* eslint-enable */
