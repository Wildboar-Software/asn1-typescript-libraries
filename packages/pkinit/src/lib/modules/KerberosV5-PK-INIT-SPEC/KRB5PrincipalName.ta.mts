/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Realm, _decode_Realm, _encode_Realm } from "@wildboar/kerberos5";
import { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "@wildboar/kerberos5";


/**
 * @summary KRB5PrincipalName
 * @description
 *
 * Kerberos principal carried as the value of a subject
 * alternative name `otherName` whose `type-id` is
 * {@link id_pkinit_san}.
 *
 * On a client certificate, the KDC uses this name when it has
 * no other binding from the client's key, or from the
 * certificate, to the client principal in the AS-REQ. If the
 * AS-REQ name matches no binding the KDC has, or the KDC finds
 * no binding, it returns `KDC_ERR_CLIENT_NAME_MISMATCH` (75)
 * with no e-data.
 *
 * On a KDC certificate, unless the client already knows that
 * the signing key belongs to the KDC of the target realm, this
 * name must be the ticket-granting service of that realm
 * ([RFC 4120, section 7.3](https://www.rfc-editor.org/rfc/rfc4120#section-7.3)).
 * A certificate that carries that TGS name does not also need
 * the {@link id_pkinit_KPKdc} extended key usage.
 *
 * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2)
 * and
 * [section 3.2.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRB5PrincipalName ::= SEQUENCE {
 *     realm                   [0] Realm,
 *     principalName           [1] PrincipalName
 * }
 * ```
 * 
 * @class
 */
export
class KRB5PrincipalName {
    constructor (
        /**
         * Realm of the principal named by this SAN. Microsoft
         * realm names are domain-style and strictly uppercase.
         *
         * [RFC 4556, section 3.2.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.2)
         * and
         * [Appendix C](https://www.rfc-editor.org/rfc/rfc4556#appendix-C).
         * @public
         * @readonly
         */
        readonly realm: Realm,
        /**
         * Principal named by this SAN. When a KDC certificate uses
         * the SAN to show that it is a KDC, this is the TGS name of
         * the target realm.
         *
         * [RFC 4556, section 3.2.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.4).
         * @public
         * @readonly
         */
        readonly principalName: PrincipalName
    ) {}

    /**
     * @summary Restructures an object into a KRB5PrincipalName
     * @description
     * 
     * This takes an `object` and converts it to a `KRB5PrincipalName`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KRB5PrincipalName`.
     * @returns {KRB5PrincipalName}
     */
    public static _from_object (_o: { [_K in keyof (KRB5PrincipalName)]: (KRB5PrincipalName)[_K] }): KRB5PrincipalName {
        return new KRB5PrincipalName(_o.realm, _o.principalName);
    }


}

/**
 * @summary The Leading Root Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    new $.ComponentSpec("realm", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("principalName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KRB5PrincipalName: $.ASN1Decoder<KRB5PrincipalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRB5PrincipalName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRB5PrincipalName (el: _Element): KRB5PrincipalName {
    if (!_cached_decoder_for_KRB5PrincipalName) { _cached_decoder_for_KRB5PrincipalName = function (el: _Element): KRB5PrincipalName {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("KRB5PrincipalName contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "realm";
    sequence[1].name = "principalName";
    let realm!: Realm;
    let principalName!: PrincipalName;
    realm = $._decode_explicit<Realm>(() => _decode_Realm)(sequence[0]);
    principalName = $._decode_explicit<PrincipalName>(() => _decode_PrincipalName)(sequence[1]);
    return new KRB5PrincipalName(
        realm,
        principalName,

    );
}; }
    return _cached_decoder_for_KRB5PrincipalName(el);
}

let _cached_encoder_for_KRB5PrincipalName: $.ASN1Encoder<KRB5PrincipalName> | null = null;

/**
 * @summary Encodes a(n) KRB5PrincipalName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB5PrincipalName, encoded as an ASN.1 Element.
 */
export
function _encode_KRB5PrincipalName (value: KRB5PrincipalName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRB5PrincipalName) { _cached_encoder_for_KRB5PrincipalName = function (value: KRB5PrincipalName): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Realm, $.BER)(value.realm, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PrincipalName, $.BER)(value.principalName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KRB5PrincipalName(value, elGetter);
}


/* eslint-enable */
