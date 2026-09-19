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
import { EimPackageErrorWithCid_correlationId, _decode_EimPackageErrorWithCid_correlationId, _encode_EimPackageErrorWithCid_correlationId } from "../SGP32Definitions/EimPackageErrorWithCid-correlationId.ta.mjs";
// export { EimPackageErrorWithCid_correlationId, _decode_EimPackageErrorWithCid_correlationId, _encode_EimPackageErrorWithCid_correlationId } from "../SGP32Definitions/EimPackageErrorWithCid-correlationId.ta.mjs";
import { EimPackageResultErrorCode, EimPackageResultErrorCode_invalidPackageFormat /* IMPORTED_LONG_NAMED_INTEGER */, invalidPackageFormat /* IMPORTED_SHORT_NAMED_INTEGER */, EimPackageResultErrorCode_unknownPackage /* IMPORTED_LONG_NAMED_INTEGER */, unknownPackage /* IMPORTED_SHORT_NAMED_INTEGER */, EimPackageResultErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimPackageResultErrorCode, _encode_EimPackageResultErrorCode } from "../SGP32Definitions/EimPackageResultErrorCode.ta.mjs";
// export { EimPackageResultErrorCode, EimPackageResultErrorCode_invalidPackageFormat /* IMPORTED_LONG_NAMED_INTEGER */, invalidPackageFormat /* IMPORTED_SHORT_NAMED_INTEGER */, EimPackageResultErrorCode_unknownPackage /* IMPORTED_LONG_NAMED_INTEGER */, unknownPackage /* IMPORTED_SHORT_NAMED_INTEGER */, EimPackageResultErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimPackageResultErrorCode, _encode_EimPackageResultErrorCode } from "../SGP32Definitions/EimPackageResultErrorCode.ta.mjs";


/**
 * @summary EimPackageErrorWithCid
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageErrorWithCid ::= SEQUENCE {
 *     correlationId CHOICE {
 *         eimTransactionId [0] TransactionId, -- if received in the EimPackage
 *         eidValue [APPLICATION 26] Octet16 -- otherwise
 *     } OPTIONAL,
 *     eimPackageError EimPackageResultErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class EimPackageErrorWithCid {
    constructor (
        /**
         * @summary `correlationId`.
         * @public
         * @readonly
         */
        readonly correlationId: OPTIONAL<EimPackageErrorWithCid_correlationId>,
        /**
         * @summary `eimPackageError`.
         * @public
         * @readonly
         */
        readonly eimPackageError: EimPackageResultErrorCode
    ) {}

    /**
     * @summary Restructures an object into a EimPackageErrorWithCid
     * @description
     * 
     * This takes an `object` and converts it to a `EimPackageErrorWithCid`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimPackageErrorWithCid`.
     * @returns {EimPackageErrorWithCid}
     */
    public static _from_object (_o: { [_K in keyof (EimPackageErrorWithCid)]: (EimPackageErrorWithCid)[_K] }): EimPackageErrorWithCid {
        return new EimPackageErrorWithCid(_o.correlationId, _o.eimPackageError);
    }


}

/**
 * @summary The Leading Root Component Types of EimPackageErrorWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimPackageErrorWithCid: $.ComponentSpec[] = [
    new $.ComponentSpec("correlationId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimPackageError", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EimPackageErrorWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimPackageErrorWithCid: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimPackageErrorWithCid
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimPackageErrorWithCid: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimPackageErrorWithCid: $.ASN1Decoder<EimPackageErrorWithCid> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageErrorWithCid
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageErrorWithCid (el: _Element): EimPackageErrorWithCid {
    if (!_cached_decoder_for_EimPackageErrorWithCid) { _cached_decoder_for_EimPackageErrorWithCid = function (el: _Element): EimPackageErrorWithCid {
    let correlationId: OPTIONAL<EimPackageErrorWithCid_correlationId>;
    let eimPackageError!: EimPackageResultErrorCode;
    const callbacks: $.DecodingMap = {
        "correlationId": (_el: _Element): void => { correlationId = _decode_EimPackageErrorWithCid_correlationId(_el); },
        "eimPackageError": (_el: _Element): void => { eimPackageError = _decode_EimPackageResultErrorCode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimPackageErrorWithCid,
        _extension_additions_list_spec_for_EimPackageErrorWithCid,
        _root_component_type_list_2_spec_for_EimPackageErrorWithCid,
        undefined,
    );
    return new EimPackageErrorWithCid(
        correlationId,
        eimPackageError
    );
}; }
    return _cached_decoder_for_EimPackageErrorWithCid(el);
}

let _cached_encoder_for_EimPackageErrorWithCid: $.ASN1Encoder<EimPackageErrorWithCid> | null = null;

/**
 * @summary Encodes a(n) EimPackageErrorWithCid into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageErrorWithCid, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageErrorWithCid (value: EimPackageErrorWithCid, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageErrorWithCid) { _cached_encoder_for_EimPackageErrorWithCid = function (value: EimPackageErrorWithCid, elGetter: $.ASN1Encoder<EimPackageErrorWithCid>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.correlationId === undefined) ? undefined : _encode_EimPackageErrorWithCid_correlationId(value.correlationId, $.BER)),
            /* REQUIRED   */ _encode_EimPackageResultErrorCode(value.eimPackageError, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimPackageErrorWithCid(value, elGetter);
}


/* eslint-enable */
