/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
// export { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "../CryptographicMessageSyntax/ContentInfo.ta.mjs";
import { TrustedCA, _decode_TrustedCA, _encode_TrustedCA } from "../KerberosV5-PK-INIT-SPEC/TrustedCA.ta.mjs";
// export { TrustedCA, _decode_TrustedCA, _encode_TrustedCA } from "../KerberosV5-PK-INIT-SPEC/TrustedCA.ta.mjs";


/**
 * @summary PA_PK_AS_REQ_Win2k
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-PK-AS-REQ-Win2k ::= SEQUENCE {
 *     signed-auth-pack    [0] ContentInfo,
 *     trusted-certifiers    [2] SEQUENCE OF TrustedCA OPTIONAL, -- XXX ExternalPrincipalIdentifier???
 *     kdc-cert        [3] IMPLICIT OCTET STRING OPTIONAL,
 *     encryption-cert        [4] IMPLICIT OCTET STRING OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PA_PK_AS_REQ_Win2k {
    constructor (
        /**
         * @summary `signed_auth_pack`.
         * @public
         * @readonly
         */
        readonly signed_auth_pack: ContentInfo,
        /**
         * @summary `trusted_certifiers`.
         * @public
         * @readonly
         */
        readonly trusted_certifiers: OPTIONAL<TrustedCA[]>,
        /**
         * @summary `kdc_cert`.
         * @public
         * @readonly
         */
        readonly kdc_cert: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `encryption_cert`.
         * @public
         * @readonly
         */
        readonly encryption_cert: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PA_PK_AS_REQ_Win2k
     * @description
     * 
     * This takes an `object` and converts it to a `PA_PK_AS_REQ_Win2k`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PA_PK_AS_REQ_Win2k`.
     * @returns {PA_PK_AS_REQ_Win2k}
     */
    public static _from_object (_o: { [_K in keyof (PA_PK_AS_REQ_Win2k)]: (PA_PK_AS_REQ_Win2k)[_K] }): PA_PK_AS_REQ_Win2k {
        return new PA_PK_AS_REQ_Win2k(_o.signed_auth_pack, _o.trusted_certifiers, _o.kdc_cert, _o.encryption_cert, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PA_PK_AS_REQ_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PA_PK_AS_REQ_Win2k: $.ComponentSpec[] = [
    new $.ComponentSpec("signed-auth-pack", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("trusted-certifiers", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kdc-cert", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("encryption-cert", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PA_PK_AS_REQ_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PA_PK_AS_REQ_Win2k: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PA_PK_AS_REQ_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PA_PK_AS_REQ_Win2k: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PA_PK_AS_REQ_Win2k: $.ASN1Decoder<PA_PK_AS_REQ_Win2k> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_PK_AS_REQ_Win2k
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_PK_AS_REQ_Win2k (el: _Element): PA_PK_AS_REQ_Win2k {
    if (!_cached_decoder_for_PA_PK_AS_REQ_Win2k) { _cached_decoder_for_PA_PK_AS_REQ_Win2k = function (el: _Element): PA_PK_AS_REQ_Win2k {
    let signed_auth_pack!: ContentInfo;
    let trusted_certifiers: OPTIONAL<TrustedCA[]>;
    let kdc_cert: OPTIONAL<OCTET_STRING>;
    let encryption_cert: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "signed-auth-pack": (_el: _Element): void => { signed_auth_pack = $._decode_explicit<ContentInfo>(() => _decode_ContentInfo)(_el); },
        "trusted-certifiers": (_el: _Element): void => { trusted_certifiers = $._decode_explicit<TrustedCA[]>(() => $._decodeSequenceOf<TrustedCA>(() => _decode_TrustedCA))(_el); },
        "kdc-cert": (_el: _Element): void => { kdc_cert = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "encryption-cert": (_el: _Element): void => { encryption_cert = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PA_PK_AS_REQ_Win2k,
        _extension_additions_list_spec_for_PA_PK_AS_REQ_Win2k,
        _root_component_type_list_2_spec_for_PA_PK_AS_REQ_Win2k,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PA_PK_AS_REQ_Win2k(
        signed_auth_pack,
        trusted_certifiers,
        kdc_cert,
        encryption_cert,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PA_PK_AS_REQ_Win2k(el);
}

let _cached_encoder_for_PA_PK_AS_REQ_Win2k: $.ASN1Encoder<PA_PK_AS_REQ_Win2k> | null = null;

/**
 * @summary Encodes a(n) PA_PK_AS_REQ_Win2k into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_PK_AS_REQ_Win2k, encoded as an ASN.1 Element.
 */
export
function _encode_PA_PK_AS_REQ_Win2k (value: PA_PK_AS_REQ_Win2k, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_PK_AS_REQ_Win2k) { _cached_encoder_for_PA_PK_AS_REQ_Win2k = function (value: PA_PK_AS_REQ_Win2k, elGetter: $.ASN1Encoder<PA_PK_AS_REQ_Win2k>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ContentInfo, $.BER)(value.signed_auth_pack, $.BER),
            /* IF_ABSENT  */ ((value.trusted_certifiers === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeSequenceOf<TrustedCA>(() => _encode_TrustedCA, $.BER), $.BER)(value.trusted_certifiers, $.BER)),
            /* IF_ABSENT  */ ((value.kdc_cert === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.kdc_cert, $.BER)),
            /* IF_ABSENT  */ ((value.encryption_cert === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.encryption_cert, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PA_PK_AS_REQ_Win2k(value, elGetter);
}


/* eslint-enable */
