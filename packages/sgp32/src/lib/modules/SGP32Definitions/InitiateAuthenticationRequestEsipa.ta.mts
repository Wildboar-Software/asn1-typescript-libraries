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
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";
// export { EUICCInfo1, _decode_EUICCInfo1, _encode_EUICCInfo1 } from "../RSPDefinitions/EUICCInfo1.ta.mjs";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";


/**
 * @summary InitiateAuthenticationRequestEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationRequestEsipa ::= [57] SEQUENCE { -- Tag 'BF39'
 *     euiccChallenge [1] Octet16, -- random eUICC challenge
 *     smdpAddress [3] UTF8String OPTIONAL,
 *     euiccInfo1 EUICCInfo1 OPTIONAL,
 *     eimTransactionId [2] TransactionId OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitiateAuthenticationRequestEsipa {
    constructor (
        /**
         * @summary `euiccChallenge`.
         * @public
         * @readonly
         */
        readonly euiccChallenge: Octet16,
        /**
         * @summary `smdpAddress`.
         * @public
         * @readonly
         */
        readonly smdpAddress: OPTIONAL<UTF8String>,
        /**
         * @summary `euiccInfo1`.
         * @public
         * @readonly
         */
        readonly euiccInfo1: OPTIONAL<EUICCInfo1>,
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>
    ) {}

    /**
     * @summary Restructures an object into a InitiateAuthenticationRequestEsipa
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateAuthenticationRequestEsipa`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateAuthenticationRequestEsipa`.
     * @returns {InitiateAuthenticationRequestEsipa}
     */
    public static _from_object (_o: { [_K in keyof (InitiateAuthenticationRequestEsipa)]: (InitiateAuthenticationRequestEsipa)[_K] }): InitiateAuthenticationRequestEsipa {
        return new InitiateAuthenticationRequestEsipa(_o.euiccChallenge, _o.smdpAddress, _o.euiccInfo1, _o.eimTransactionId);
    }


}

/**
 * @summary The Leading Root Component Types of InitiateAuthenticationRequestEsipa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateAuthenticationRequestEsipa: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccChallenge", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("smdpAddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("euiccInfo1", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InitiateAuthenticationRequestEsipa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateAuthenticationRequestEsipa: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateAuthenticationRequestEsipa
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateAuthenticationRequestEsipa: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateAuthenticationRequestEsipa: $.ASN1Decoder<InitiateAuthenticationRequestEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationRequestEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationRequestEsipa (el: _Element): InitiateAuthenticationRequestEsipa {
    if (!_cached_decoder_for_InitiateAuthenticationRequestEsipa) { _cached_decoder_for_InitiateAuthenticationRequestEsipa = $._decode_implicit<InitiateAuthenticationRequestEsipa>(() => function (el: _Element): InitiateAuthenticationRequestEsipa {
    let euiccChallenge!: Octet16;
    let smdpAddress: OPTIONAL<UTF8String>;
    let euiccInfo1: OPTIONAL<EUICCInfo1>;
    let eimTransactionId: OPTIONAL<TransactionId>;
    const callbacks: $.DecodingMap = {
        "euiccChallenge": (_el: _Element): void => { euiccChallenge = $._decode_implicit<Octet16>(() => _decode_Octet16)(_el); },
        "smdpAddress": (_el: _Element): void => { smdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "euiccInfo1": (_el: _Element): void => { euiccInfo1 = _decode_EUICCInfo1(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateAuthenticationRequestEsipa,
        _extension_additions_list_spec_for_InitiateAuthenticationRequestEsipa,
        _root_component_type_list_2_spec_for_InitiateAuthenticationRequestEsipa,
        undefined,
    );
    return new InitiateAuthenticationRequestEsipa(
        euiccChallenge,
        smdpAddress,
        euiccInfo1,
        eimTransactionId
    );
}); }
    return _cached_decoder_for_InitiateAuthenticationRequestEsipa(el);
}

let _cached_encoder_for_InitiateAuthenticationRequestEsipa: $.ASN1Encoder<InitiateAuthenticationRequestEsipa> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationRequestEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationRequestEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationRequestEsipa (value: InitiateAuthenticationRequestEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationRequestEsipa) { _cached_encoder_for_InitiateAuthenticationRequestEsipa = $._encode_implicit(_TagClass.context, 57, () => function (value: InitiateAuthenticationRequestEsipa, elGetter: $.ASN1Encoder<InitiateAuthenticationRequestEsipa>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Octet16, $.BER)(value.euiccChallenge, $.BER),
            /* IF_ABSENT  */ ((value.smdpAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.smdpAddress, $.BER)),
            /* IF_ABSENT  */ ((value.euiccInfo1 === undefined) ? undefined : _encode_EUICCInfo1(value.euiccInfo1, $.BER)),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_InitiateAuthenticationRequestEsipa(value, elGetter);
}


/* eslint-enable */
