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
import { EuiccPackageUnsignedErrorCode, EuiccPackageUnsignedErrorCode_sizeOverflow /* IMPORTED_LONG_NAMED_INTEGER */, sizeOverflow /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageUnsignedErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EuiccPackageUnsignedErrorCode, _encode_EuiccPackageUnsignedErrorCode } from "../SGP32Definitions/EuiccPackageUnsignedErrorCode.ta.mjs";
// export { EuiccPackageUnsignedErrorCode, EuiccPackageUnsignedErrorCode_sizeOverflow /* IMPORTED_LONG_NAMED_INTEGER */, sizeOverflow /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccPackageUnsignedErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EuiccPackageUnsignedErrorCode, _encode_EuiccPackageUnsignedErrorCode } from "../SGP32Definitions/EuiccPackageUnsignedErrorCode.ta.mjs";


/**
 * @summary EuiccPackageErrorUnsigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorUnsigned ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     associationToken [4] INTEGER OPTIONAL,
 *     euiccPackageUnsignedErrorCode [15] EuiccPackageUnsignedErrorCode OPTIONAL
 * 
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageErrorUnsigned {
    constructor (
        /**
         * @summary `eimId`.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `associationToken`.
         * @public
         * @readonly
         */
        readonly associationToken: OPTIONAL<INTEGER>,
        /**
         * @summary `euiccPackageUnsignedErrorCode`.
         * @public
         * @readonly
         */
        readonly euiccPackageUnsignedErrorCode: OPTIONAL<EuiccPackageUnsignedErrorCode>
    ) {}

    /**
     * @summary Restructures an object into a EuiccPackageErrorUnsigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageErrorUnsigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageErrorUnsigned`.
     * @returns {EuiccPackageErrorUnsigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageErrorUnsigned)]: (EuiccPackageErrorUnsigned)[_K] }): EuiccPackageErrorUnsigned {
        return new EuiccPackageErrorUnsigned(_o.eimId, _o.eimTransactionId, _o.associationToken, _o.euiccPackageUnsignedErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("associationToken", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("euiccPackageUnsignedErrorCode", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageErrorUnsigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageErrorUnsigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageErrorUnsigned: $.ASN1Decoder<EuiccPackageErrorUnsigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorUnsigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorUnsigned (el: _Element): EuiccPackageErrorUnsigned {
    if (!_cached_decoder_for_EuiccPackageErrorUnsigned) { _cached_decoder_for_EuiccPackageErrorUnsigned = function (el: _Element): EuiccPackageErrorUnsigned {
    let eimId!: UTF8String;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let associationToken: OPTIONAL<INTEGER>;
    let euiccPackageUnsignedErrorCode: OPTIONAL<EuiccPackageUnsignedErrorCode>;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "associationToken": (_el: _Element): void => { associationToken = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "euiccPackageUnsignedErrorCode": (_el: _Element): void => { euiccPackageUnsignedErrorCode = $._decode_implicit<EuiccPackageUnsignedErrorCode>(() => _decode_EuiccPackageUnsignedErrorCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageErrorUnsigned,
        _extension_additions_list_spec_for_EuiccPackageErrorUnsigned,
        _root_component_type_list_2_spec_for_EuiccPackageErrorUnsigned,
        undefined,
    );
    return new EuiccPackageErrorUnsigned(
        eimId,
        eimTransactionId,
        associationToken,
        euiccPackageUnsignedErrorCode
    );
}; }
    return _cached_decoder_for_EuiccPackageErrorUnsigned(el);
}

let _cached_encoder_for_EuiccPackageErrorUnsigned: $.ASN1Encoder<EuiccPackageErrorUnsigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorUnsigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorUnsigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorUnsigned (value: EuiccPackageErrorUnsigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorUnsigned) { _cached_encoder_for_EuiccPackageErrorUnsigned = function (value: EuiccPackageErrorUnsigned, elGetter: $.ASN1Encoder<EuiccPackageErrorUnsigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* IF_ABSENT  */ ((value.associationToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.associationToken, $.BER)),
            /* IF_ABSENT  */ ((value.euiccPackageUnsignedErrorCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_EuiccPackageUnsignedErrorCode, $.BER)(value.euiccPackageUnsignedErrorCode, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageErrorUnsigned(value, elGetter);
}


/* eslint-enable */
