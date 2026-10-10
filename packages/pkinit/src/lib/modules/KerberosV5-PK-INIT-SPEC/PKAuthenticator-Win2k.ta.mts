/* eslint-disable */
import {
    ASN1OverflowError,
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "@wildboar/kerberos5";
import { Realm, _decode_Realm, _encode_Realm } from "@wildboar/kerberos5";
import { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "@wildboar/kerberos5";


/**
 * @summary PKAuthenticator_Win2k
 * @description
 *
 * Authenticator used with {@link PA_PK_AS_REQ_Win2k}. RFC 4556
 * does not define this type. Appendix C describes Windows
 * certificate contents, not these fields, so the integer ranges
 * below are only the constraints in this module's ASN.1.
 *
 * [RFC 4556, Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PKAuthenticator-Win2k ::= SEQUENCE {
 *     kdcName            [0] PrincipalName,
 *     kdcRealm        [1] Realm,
 *     cusec            [2] INTEGER (0..4294967295),
 *     ctime            [3] KerberosTime,
 *     nonce                   [4] INTEGER (-2147483648..2147483647),
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PKAuthenticator_Win2k {
    constructor (
        /**
         * Named `kdcName` in this module. RFC 4556 does not define
         * the field or say how a peer checks it.
         * @public
         * @readonly
         */
        readonly kdcName: PrincipalName,
        /**
         * Named `kdcRealm` in this module. RFC 4556 does not define
         * the field. Appendix C says Microsoft Kerberos realm names
         * are domain-style and strictly uppercase.
         *
         * [RFC 4556, Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
         * @public
         * @readonly
         */
        readonly kdcRealm: Realm,
        /**
         * Integer in 0..4294967295. That is wider than the
         * 0..999999 range of {@link PKAuthenticator.cusec}.
         * RFC 4556 does not define this field.
         * @public
         * @readonly
         */
        readonly cusec: INTEGER,
        /**
         * RFC 4556 does not define this field, so it does not say
         * whether the replay checks on
         * {@link PKAuthenticator.ctime} apply here.
         * @public
         * @readonly
         */
        readonly ctime: KerberosTime,
        /**
         * Integer in -2147483648..2147483647, a signed 32-bit
         * range. {@link PKAuthenticator.nonce} is an unsigned
         * value in 0..4294967295. RFC 4556 does not define this
         * field or say whether it must match another nonce.
         * @public
         * @readonly
         */
        readonly nonce: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        const cusecNumber = typeof this.cusec === "bigint" ? Number(this.cusec) : this.cusec;
        if (cusecNumber < 0 || cusecNumber > 4294967295) {
            throw new ASN1OverflowError("PKAuthenticator-Win2k.cusec violates INTEGER range");
        }
        const nonceNumber = typeof this.nonce === "bigint" ? Number(this.nonce) : this.nonce;
        if (nonceNumber < -2147483648 || nonceNumber > 2147483647) {
            throw new ASN1OverflowError("PKAuthenticator-Win2k.nonce violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a PKAuthenticator_Win2k
     * @description
     * 
     * This takes an `object` and converts it to a `PKAuthenticator_Win2k`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKAuthenticator_Win2k`.
     * @returns {PKAuthenticator_Win2k}
     */
    public static _from_object (_o: { [_K in keyof (PKAuthenticator_Win2k)]: (PKAuthenticator_Win2k)[_K] }): PKAuthenticator_Win2k {
        return new PKAuthenticator_Win2k(_o.kdcName, _o.kdcRealm, _o.cusec, _o.ctime, _o.nonce, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PKAuthenticator_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PKAuthenticator_Win2k: $.ComponentSpec[] = [
    new $.ComponentSpec("kdcName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("kdcRealm", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cusec", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ctime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("nonce", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PKAuthenticator_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PKAuthenticator_Win2k: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PKAuthenticator_Win2k
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PKAuthenticator_Win2k: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PKAuthenticator_Win2k: $.ASN1Decoder<PKAuthenticator_Win2k> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PKAuthenticator_Win2k
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PKAuthenticator_Win2k (el: _Element): PKAuthenticator_Win2k {
    if (!_cached_decoder_for_PKAuthenticator_Win2k) { _cached_decoder_for_PKAuthenticator_Win2k = function (el: _Element): PKAuthenticator_Win2k {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("PKAuthenticator-Win2k contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "kdcName";
    sequence[1].name = "kdcRealm";
    sequence[2].name = "cusec";
    sequence[3].name = "ctime";
    sequence[4].name = "nonce";
    let kdcName!: PrincipalName;
    let kdcRealm!: Realm;
    let cusec!: INTEGER;
    let ctime!: KerberosTime;
    let nonce!: INTEGER;
    kdcName = $._decode_explicit<PrincipalName>(() => _decode_PrincipalName)(sequence[0]);
    kdcRealm = $._decode_explicit<Realm>(() => _decode_Realm)(sequence[1]);
    cusec = $._decode_explicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    ctime = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(sequence[3]);
    nonce = $._decode_explicit<INTEGER>(() => $._decodeInteger)(sequence[4]);
    return new PKAuthenticator_Win2k(
        kdcName,
        kdcRealm,
        cusec,
        ctime,
        nonce,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_PKAuthenticator_Win2k(el);
}

let _cached_encoder_for_PKAuthenticator_Win2k: $.ASN1Encoder<PKAuthenticator_Win2k> | null = null;

/**
 * @summary Encodes a(n) PKAuthenticator_Win2k into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKAuthenticator_Win2k, encoded as an ASN.1 Element.
 */
export
function _encode_PKAuthenticator_Win2k (value: PKAuthenticator_Win2k, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PKAuthenticator_Win2k) { _cached_encoder_for_PKAuthenticator_Win2k = function (value: PKAuthenticator_Win2k): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_PrincipalName, $.BER)(value.kdcName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Realm, $.BER)(value.kdcRealm, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.cusec, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_KerberosTime, $.BER)(value.ctime, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.nonce, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PKAuthenticator_Win2k(value, elGetter);
}


/* eslint-enable */
