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
import { StoreMetadataRequest, _decode_StoreMetadataRequest, _encode_StoreMetadataRequest } from "../RSPDefinitions/StoreMetadataRequest.ta.mjs";
// export { StoreMetadataRequest, _decode_StoreMetadataRequest, _encode_StoreMetadataRequest } from "../RSPDefinitions/StoreMetadataRequest.ta.mjs";


/**
 * @summary AuthenticateClientOkAcr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientOkAcr ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     profileMetaData [37] StoreMetadataRequest
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateClientOkAcr {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `profileMetaData`.
         * @public
         * @readonly
         */
        readonly profileMetaData: StoreMetadataRequest
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateClientOkAcr
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateClientOkAcr`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateClientOkAcr`.
     * @returns {AuthenticateClientOkAcr}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateClientOkAcr)]: (AuthenticateClientOkAcr)[_K] }): AuthenticateClientOkAcr {
        return new AuthenticateClientOkAcr(_o.transactionId, _o.profileMetaData);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateClientOkAcr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateClientOkAcr: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileMetaData", false, $.hasTag(_TagClass.context, 37))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateClientOkAcr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateClientOkAcr: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateClientOkAcr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateClientOkAcr: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateClientOkAcr: $.ASN1Decoder<AuthenticateClientOkAcr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientOkAcr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientOkAcr (el: _Element): AuthenticateClientOkAcr {
    if (!_cached_decoder_for_AuthenticateClientOkAcr) { _cached_decoder_for_AuthenticateClientOkAcr = function (el: _Element): AuthenticateClientOkAcr {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuthenticateClientOkAcr contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "profileMetaData";
    let transactionId!: TransactionId;
    let profileMetaData!: StoreMetadataRequest;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    profileMetaData = $._decode_implicit<StoreMetadataRequest>(() => _decode_StoreMetadataRequest)(sequence[1]);
    return new AuthenticateClientOkAcr(
        transactionId,
        profileMetaData,

    );
}; }
    return _cached_decoder_for_AuthenticateClientOkAcr(el);
}

let _cached_encoder_for_AuthenticateClientOkAcr: $.ASN1Encoder<AuthenticateClientOkAcr> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientOkAcr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientOkAcr, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientOkAcr (value: AuthenticateClientOkAcr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientOkAcr) { _cached_encoder_for_AuthenticateClientOkAcr = function (value: AuthenticateClientOkAcr, elGetter: $.ASN1Encoder<AuthenticateClientOkAcr>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 37, () => _encode_StoreMetadataRequest, $.BER)(value.profileMetaData, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticateClientOkAcr(value, elGetter);
}


/* eslint-enable */
