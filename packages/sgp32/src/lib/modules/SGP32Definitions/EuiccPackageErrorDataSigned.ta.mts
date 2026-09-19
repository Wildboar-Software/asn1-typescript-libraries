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
import { EuiccPackageErrorCode, EuiccPackageErrorCode_invalidEid /* IMPORTED_LONG_NAMED_INTEGER */, invalidEid /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_replayError /* IMPORTED_LONG_NAMED_INTEGER */, replayError /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_counterValueOutOfRange /* IMPORTED_LONG_NAMED_INTEGER */, counterValueOutOfRange /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_sizeOverflow /* IMPORTED_LONG_NAMED_INTEGER */, sizeOverflow /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_ecallActive /* IMPORTED_LONG_NAMED_INTEGER */, ecallActive /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EuiccPackageErrorCode, _encode_EuiccPackageErrorCode } from "../SGP32Definitions/EuiccPackageErrorCode.ta.mjs";
// export { EuiccPackageErrorCode, EuiccPackageErrorCode_invalidEid /* IMPORTED_LONG_NAMED_INTEGER */, invalidEid /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_replayError /* IMPORTED_LONG_NAMED_INTEGER */, replayError /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_counterValueOutOfRange /* IMPORTED_LONG_NAMED_INTEGER */, counterValueOutOfRange /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_sizeOverflow /* IMPORTED_LONG_NAMED_INTEGER */, sizeOverflow /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_ecallActive /* IMPORTED_LONG_NAMED_INTEGER */, ecallActive /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EuiccPackageErrorCode, _encode_EuiccPackageErrorCode } from "../SGP32Definitions/EuiccPackageErrorCode.ta.mjs";


/**
 * @summary EuiccPackageErrorDataSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorDataSigned ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     counterValue [1] INTEGER,
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     euiccPackageErrorCode EuiccPackageErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageErrorDataSigned {
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
         * @summary `euiccPackageErrorCode`.
         * @public
         * @readonly
         */
        readonly euiccPackageErrorCode: EuiccPackageErrorCode
    ) {}

    /**
     * @summary Restructures an object into a EuiccPackageErrorDataSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageErrorDataSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageErrorDataSigned`.
     * @returns {EuiccPackageErrorDataSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageErrorDataSigned)]: (EuiccPackageErrorDataSigned)[_K] }): EuiccPackageErrorDataSigned {
        return new EuiccPackageErrorDataSigned(_o.eimId, _o.counterValue, _o.eimTransactionId, _o.euiccPackageErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccPackageErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageErrorDataSigned: $.ASN1Decoder<EuiccPackageErrorDataSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorDataSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorDataSigned (el: _Element): EuiccPackageErrorDataSigned {
    if (!_cached_decoder_for_EuiccPackageErrorDataSigned) { _cached_decoder_for_EuiccPackageErrorDataSigned = function (el: _Element): EuiccPackageErrorDataSigned {
    let eimId!: UTF8String;
    let counterValue!: INTEGER;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let euiccPackageErrorCode!: EuiccPackageErrorCode;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "counterValue": (_el: _Element): void => { counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "euiccPackageErrorCode": (_el: _Element): void => { euiccPackageErrorCode = _decode_EuiccPackageErrorCode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageErrorDataSigned,
        _extension_additions_list_spec_for_EuiccPackageErrorDataSigned,
        _root_component_type_list_2_spec_for_EuiccPackageErrorDataSigned,
        undefined,
    );
    return new EuiccPackageErrorDataSigned(
        eimId,
        counterValue,
        eimTransactionId,
        euiccPackageErrorCode
    );
}; }
    return _cached_decoder_for_EuiccPackageErrorDataSigned(el);
}

let _cached_encoder_for_EuiccPackageErrorDataSigned: $.ASN1Encoder<EuiccPackageErrorDataSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorDataSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorDataSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorDataSigned (value: EuiccPackageErrorDataSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorDataSigned) { _cached_encoder_for_EuiccPackageErrorDataSigned = function (value: EuiccPackageErrorDataSigned, elGetter: $.ASN1Encoder<EuiccPackageErrorDataSigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.counterValue, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_EuiccPackageErrorCode(value.euiccPackageErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageErrorDataSigned(value, elGetter);
}


/* eslint-enable */
