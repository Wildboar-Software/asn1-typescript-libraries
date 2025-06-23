/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
    OCTET_STRING,
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
import { ECPrivateKey_version, _decode_ECPrivateKey_version, _encode_ECPrivateKey_version } from "../SEC1-v1-9/ECPrivateKey-version.ta.mjs";
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.mjs";
/**
 * @summary ECPrivateKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPrivateKey ::= SEQUENCE {
 *     version INTEGER { ecPrivkeyVer1(1) } (ecPrivkeyVer1),
 *     privateKey OCTET STRING,
 *     parameters [0] ECDomainParameters {{ SECGCurveNames }} OPTIONAL,
 *     publicKey [1] BIT STRING OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class ECPrivateKey {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ECPrivateKey_version,
        /**
         * @summary `privateKey`.
         * @public
         * @readonly
         */
        readonly privateKey: OCTET_STRING,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<ECDomainParameters>,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: OPTIONAL<BIT_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ECPrivateKey
     * @description
     *
     * This takes an `object` and converts it to a `ECPrivateKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECPrivateKey`.
     * @returns {ECPrivateKey}
     */
    public static _from_object (_o: { [_K in keyof (ECPrivateKey)]: (ECPrivateKey)[_K] }): ECPrivateKey {
        return new ECPrivateKey(_o.version, _o.privateKey, _o.parameters, _o.publicKey);
    }


}

/**
 * @summary The Leading Root Component Types of ECPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECPrivateKey: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("privateKey", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("parameters", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("publicKey", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ECPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECPrivateKey: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of ECPrivateKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_ECPrivateKey: $.ComponentSpec[] = [

];

let _cached_decoder_for_ECPrivateKey: $.ASN1Decoder<ECPrivateKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECPrivateKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPrivateKey} The decoded data structure.
 */
export
function _decode_ECPrivateKey (el: _Element) {
    if (!_cached_decoder_for_ECPrivateKey) { _cached_decoder_for_ECPrivateKey = function (el: _Element): ECPrivateKey {
    let version!: ECPrivateKey_version;
    let privateKey!: OCTET_STRING;
    let parameters: OPTIONAL<ECDomainParameters>;
    let publicKey: OPTIONAL<BIT_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_ECPrivateKey_version(_el); },
        "privateKey": (_el: _Element): void => { privateKey = $._decodeOctetString(_el); },
        "parameters": (_el: _Element): void => { parameters = $._decode_explicit<ECDomainParameters>(() => _decode_ECDomainParameters)(_el); },
        "publicKey": (_el: _Element): void => { publicKey = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECPrivateKey,
        _extension_additions_list_spec_for_ECPrivateKey,
        _root_component_type_list_2_spec_for_ECPrivateKey,
        undefined,
    );
    return new ECPrivateKey( 
        version,
        privateKey,
        parameters,
        publicKey
    );
}; }
    return _cached_decoder_for_ECPrivateKey(el);
}

let _cached_encoder_for_ECPrivateKey: $.ASN1Encoder<ECPrivateKey> | null = null;

/**
 * @summary Encodes a(n) ECPrivateKey into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPrivateKey, encoded as an ASN.1 Element.
 */
export
function _encode_ECPrivateKey (value: ECPrivateKey, elGetter: $.ASN1Encoder<ECPrivateKey>) {
    if (!_cached_encoder_for_ECPrivateKey) { _cached_encoder_for_ECPrivateKey = function (value: ECPrivateKey): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECPrivateKey_version(value.version, $.DER),
            /* REQUIRED   */ $._encodeOctetString(value.privateKey, $.DER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_ECDomainParameters, $.DER)(value.parameters, $.DER)),
            /* IF_ABSENT  */ ((value.publicKey === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeBitString, $.DER)(value.publicKey, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_ECPrivateKey(value, elGetter);
}


/* eslint-enable */
