/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { StoreMetadataRequest, _decode_StoreMetadataRequest, _encode_StoreMetadataRequest } from "../RSPDefinitions/StoreMetadataRequest.ta.mjs";
// export { StoreMetadataRequest, _decode_StoreMetadataRequest, _encode_StoreMetadataRequest } from "../RSPDefinitions/StoreMetadataRequest.ta.mjs";
import { SmdpSigned2, _decode_SmdpSigned2, _encode_SmdpSigned2 } from "../RSPDefinitions/SmdpSigned2.ta.mjs";
// export { SmdpSigned2, _decode_SmdpSigned2, _encode_SmdpSigned2 } from "../RSPDefinitions/SmdpSigned2.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary AuthenticateClientOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientOk ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     profileMetaData [37] StoreMetadataRequest,
 *     smdpSigned2 SmdpSigned2, -- Signed information
 *     smdpSignature2 [APPLICATION 55] OCTET STRING,     -- tag '5F37'
 *     smdpCertificate Certificate    -- CERT.DPpb.ECDSA
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateClientOk {
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
        readonly profileMetaData: StoreMetadataRequest,
        /**
         * @summary `smdpSigned2`.
         * @public
         * @readonly
         */
        readonly smdpSigned2: SmdpSigned2,
        /**
         * @summary `smdpSignature2`.
         * @public
         * @readonly
         */
        readonly smdpSignature2: OCTET_STRING,
        /**
         * @summary `smdpCertificate`.
         * @public
         * @readonly
         */
        readonly smdpCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateClientOk
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateClientOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateClientOk`.
     * @returns {AuthenticateClientOk}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateClientOk)]: (AuthenticateClientOk)[_K] }): AuthenticateClientOk {
        return new AuthenticateClientOk(_o.transactionId, _o.profileMetaData, _o.smdpSigned2, _o.smdpSignature2, _o.smdpCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateClientOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateClientOk: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileMetaData", false, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("smdpSigned2", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smdpSignature2", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("smdpCertificate", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateClientOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateClientOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateClientOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateClientOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateClientOk: $.ASN1Decoder<AuthenticateClientOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientOk (el: _Element): AuthenticateClientOk {
    if (!_cached_decoder_for_AuthenticateClientOk) { _cached_decoder_for_AuthenticateClientOk = function (el: _Element): AuthenticateClientOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("AuthenticateClientOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "profileMetaData";
    sequence[2].name = "smdpSigned2";
    sequence[3].name = "smdpSignature2";
    sequence[4].name = "smdpCertificate";
    let transactionId!: TransactionId;
    let profileMetaData!: StoreMetadataRequest;
    let smdpSigned2!: SmdpSigned2;
    let smdpSignature2!: OCTET_STRING;
    let smdpCertificate!: Certificate;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    profileMetaData = $._decode_implicit<StoreMetadataRequest>(() => _decode_StoreMetadataRequest)(sequence[1]);
    smdpSigned2 = _decode_SmdpSigned2(sequence[2]);
    smdpSignature2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[3]);
    smdpCertificate = _decode_Certificate(sequence[4]);
    return new AuthenticateClientOk(
        transactionId,
        profileMetaData,
        smdpSigned2,
        smdpSignature2,
        smdpCertificate,

    );
}; }
    return _cached_decoder_for_AuthenticateClientOk(el);
}

let _cached_encoder_for_AuthenticateClientOk: $.ASN1Encoder<AuthenticateClientOk> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientOk, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientOk (value: AuthenticateClientOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientOk) { _cached_encoder_for_AuthenticateClientOk = function (value: AuthenticateClientOk, elGetter: $.ASN1Encoder<AuthenticateClientOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 37, () => _encode_StoreMetadataRequest, $.BER)(value.profileMetaData, $.BER),
            /* REQUIRED   */ _encode_SmdpSigned2(value.smdpSigned2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.smdpSignature2, $.BER),
            /* REQUIRED   */ _encode_Certificate(value.smdpCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticateClientOk(value, elGetter);
}


/* eslint-enable */
