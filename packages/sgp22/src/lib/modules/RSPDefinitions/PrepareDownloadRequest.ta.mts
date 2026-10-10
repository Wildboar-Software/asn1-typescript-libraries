/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SmdpSigned2, _decode_SmdpSigned2, _encode_SmdpSigned2 } from "../RSPDefinitions/SmdpSigned2.ta.mjs";
import { Octet32, _decode_Octet32, _encode_Octet32 } from "../RSPDefinitions/Octet32.ta.mjs";
import { type Certificate, _decode_Certificate, _encode_Certificate } from "@wildboar/pki-stub";


/**
 * @summary PrepareDownloadRequest
 * @description
 * 
 * ES10b.PrepareDownload. The LPA gives the eUICC the SM-DP+ binding signature,
 * the optional hashed Confirmation Code, and CERT.DPpb.SIG. The eUICC checks
 * the certificate and signature, generates or reuses otPK.EUICC.KA, and returns
 * that key inside `EUICCSigned2`. That key is what the SM-DP+ uses to bind the
 * profile package. SGP.22 v3.1 §5.7.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadRequest ::= [33] SEQUENCE { -- Tag 'BF21'
 *     smdpSigned2 SmdpSigned2,             -- Signed information
 *     smdpSignature2 [APPLICATION 55] OCTET STRING,     -- tag '5F37'
 *     hashCc Octet32 OPTIONAL, -- Hash of confirmation code
 *     smdpCertificate Certificate    -- CERT.DPpb.ECDSA
 * }
 * ```
 * 
 * @class
 */
export
class PrepareDownloadRequest {
    constructor (
        /**
         * @summary `smdpSigned2`.
         * @description
         * 
         * SM-DP+ binding data, including whether a Confirmation Code is
         * required. SGP.22 v3.1 §5.7.5.
         * 
         * @public
         * @readonly
         */
        readonly smdpSigned2: SmdpSigned2,
        /**
         * @summary `smdpSignature2`.
         * @description
         * 
         * Signature under SK.DPpb.SIG, tag `'5F37'`. The eUICC verifies it
         * before releasing otPK.EUICC.KA. SGP.22 v3.1 §5.7.5.
         * 
         * @public
         * @readonly
         */
        readonly smdpSignature2: OCTET_STRING,
        /**
         * @summary `hashCc`.
         * @description
         * 
         * Hashed Confirmation Code, present when the End User supplied one.
         * SHA-256(SHA-256(UTF-8 code) concatenated with the TransactionID).
         * SGP.22 v3.1 §3.1.3 and §4.7.
         * 
         * @public
         * @readonly
         */
        readonly hashCc: OPTIONAL<Octet32>,
        /**
         * @summary `smdpCertificate`.
         * @description
         * 
         * CERT.DPpb.SIG. The eUICC verifies the binding signature with this
         * key. SGP.22 v3.1 §5.7.5. v3.1 names the usage SIG rather than ECDSA;
         * this module's ASN.1 comment still says ECDSA.
         * 
         * @public
         * @readonly
         */
        readonly smdpCertificate: Certificate
    ) {}

    /**
     * @summary Restructures an object into a PrepareDownloadRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareDownloadRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareDownloadRequest`.
     * @returns {PrepareDownloadRequest}
     */
    public static _from_object (_o: { [_K in keyof (PrepareDownloadRequest)]: (PrepareDownloadRequest)[_K] }): PrepareDownloadRequest {
        return new PrepareDownloadRequest(_o.smdpSigned2, _o.smdpSignature2, _o.hashCc, _o.smdpCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("smdpSigned2", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("smdpSignature2", false, $.hasTag(_TagClass.application, 55)),
    new $.ComponentSpec("hashCc", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("smdpCertificate", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareDownloadRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareDownloadRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareDownloadRequest: $.ASN1Decoder<PrepareDownloadRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareDownloadRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareDownloadRequest (el: _Element): PrepareDownloadRequest {
    if (!_cached_decoder_for_PrepareDownloadRequest) { _cached_decoder_for_PrepareDownloadRequest = $._decode_implicit<PrepareDownloadRequest>(() => function (el: _Element): PrepareDownloadRequest {
    let smdpSigned2!: SmdpSigned2;
    let smdpSignature2!: OCTET_STRING;
    let hashCc: OPTIONAL<Octet32>;
    let smdpCertificate!: Certificate;
    const callbacks: $.DecodingMap = {
        "smdpSigned2": (_el: _Element): void => { smdpSigned2 = _decode_SmdpSigned2(_el); },
        "smdpSignature2": (_el: _Element): void => { smdpSignature2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hashCc": (_el: _Element): void => { hashCc = _decode_Octet32(_el); },
        "smdpCertificate": (_el: _Element): void => { smdpCertificate = _decode_Certificate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareDownloadRequest,
        _extension_additions_list_spec_for_PrepareDownloadRequest,
        _root_component_type_list_2_spec_for_PrepareDownloadRequest,
        undefined,
    );
    return new PrepareDownloadRequest(
        smdpSigned2,
        smdpSignature2,
        hashCc,
        smdpCertificate
    );
}); }
    return _cached_decoder_for_PrepareDownloadRequest(el);
}

let _cached_encoder_for_PrepareDownloadRequest: $.ASN1Encoder<PrepareDownloadRequest> | null = null;

/**
 * @summary Encodes a(n) PrepareDownloadRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareDownloadRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareDownloadRequest (value: PrepareDownloadRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareDownloadRequest) { _cached_encoder_for_PrepareDownloadRequest = $._encode_implicit(_TagClass.context, 33, () => function (value: PrepareDownloadRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SmdpSigned2(value.smdpSigned2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.smdpSignature2, $.BER),
            /* IF_ABSENT  */ ((value.hashCc === undefined) ? undefined : _encode_Octet32(value.hashCc, $.BER)),
            /* REQUIRED   */ _encode_Certificate(value.smdpCertificate, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareDownloadRequest(value, elGetter);
}


/* eslint-enable */
