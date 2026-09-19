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
import { EuiccResultData, _decode_EuiccResultData, _encode_EuiccResultData } from "../SGP32Definitions/EuiccResultData.ta.mjs";
// export { EuiccResultData, _decode_EuiccResultData, _encode_EuiccResultData } from "../SGP32Definitions/EuiccResultData.ta.mjs";


/**
 * @summary EuiccPackageResultDataSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageResultDataSigned ::= SEQUENCE { -- #SupportedForPsmoV1.0.0#
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     counterValue [1] INTEGER,
 *     eimTransactionId[2] TransactionId OPTIONAL,
 *     seqNumber [3] INTEGER,
 *     euiccResult SEQUENCE OF EuiccResultData
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageResultDataSigned {
    constructor (
        /**
         * @summary `eimId`.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `counterValue`.
         * @public
         * @readonly
         */
        readonly counterValue: INTEGER,
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `seqNumber`.
         * @public
         * @readonly
         */
        readonly seqNumber: INTEGER,
        /**
         * @summary `euiccResult`.
         * @public
         * @readonly
         */
        readonly euiccResult: EuiccResultData[]
    ) {}

    /**
     * @summary Restructures an object into a EuiccPackageResultDataSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageResultDataSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageResultDataSigned`.
     * @returns {EuiccPackageResultDataSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageResultDataSigned)]: (EuiccPackageResultDataSigned)[_K] }): EuiccPackageResultDataSigned {
        return new EuiccPackageResultDataSigned(_o.eimId, _o.counterValue, _o.eimTransactionId, _o.seqNumber, _o.euiccResult);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageResultDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageResultDataSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("seqNumber", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("euiccResult", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageResultDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageResultDataSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageResultDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageResultDataSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageResultDataSigned: $.ASN1Decoder<EuiccPackageResultDataSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageResultDataSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageResultDataSigned (el: _Element): EuiccPackageResultDataSigned {
    if (!_cached_decoder_for_EuiccPackageResultDataSigned) { _cached_decoder_for_EuiccPackageResultDataSigned = function (el: _Element): EuiccPackageResultDataSigned {
    let eimId!: UTF8String;
    let counterValue!: INTEGER;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let seqNumber!: INTEGER;
    let euiccResult!: EuiccResultData[];
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "counterValue": (_el: _Element): void => { counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "seqNumber": (_el: _Element): void => { seqNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "euiccResult": (_el: _Element): void => { euiccResult = $._decodeSequenceOf<EuiccResultData>(() => _decode_EuiccResultData)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageResultDataSigned,
        _extension_additions_list_spec_for_EuiccPackageResultDataSigned,
        _root_component_type_list_2_spec_for_EuiccPackageResultDataSigned,
        undefined,
    );
    return new EuiccPackageResultDataSigned(
        eimId,
        counterValue,
        eimTransactionId,
        seqNumber,
        euiccResult
    );
}; }
    return _cached_decoder_for_EuiccPackageResultDataSigned(el);
}

let _cached_encoder_for_EuiccPackageResultDataSigned: $.ASN1Encoder<EuiccPackageResultDataSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageResultDataSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageResultDataSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageResultDataSigned (value: EuiccPackageResultDataSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageResultDataSigned) { _cached_encoder_for_EuiccPackageResultDataSigned = function (value: EuiccPackageResultDataSigned, elGetter: $.ASN1Encoder<EuiccPackageResultDataSigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.counterValue, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.seqNumber, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<EuiccResultData>(() => _encode_EuiccResultData, $.BER)(value.euiccResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageResultDataSigned(value, elGetter);
}


/* eslint-enable */
