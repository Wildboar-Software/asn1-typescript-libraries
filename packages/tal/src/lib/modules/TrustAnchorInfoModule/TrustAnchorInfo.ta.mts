/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
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
import { TrustAnchorInfoVersion, v1 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TrustAnchorInfoVersion, _encode_TrustAnchorInfoVersion } from "../TrustAnchorInfoModule/TrustAnchorInfoVersion.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { KeyIdentifier, _decode_KeyIdentifier, _encode_KeyIdentifier } from "@wildboar/x500/src/lib/modules/CertificateExtensions/KeyIdentifier.ta.mjs";
import { TrustAnchorTitle, _decode_TrustAnchorTitle, _encode_TrustAnchorTitle } from "../TrustAnchorInfoModule/TrustAnchorTitle.ta.mjs";
import { CertPathControls, _decode_CertPathControls, _encode_CertPathControls } from "../TrustAnchorInfoModule/CertPathControls.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary TrustAnchorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchorInfo ::= SEQUENCE {
 *     version   TrustAnchorInfoVersion DEFAULT v1,
 *     pubKey    SubjectPublicKeyInfo,
 *     keyId     KeyIdentifier,
 *     taTitle   TrustAnchorTitle OPTIONAL,
 *     certPath  CertPathControls OPTIONAL,
 *     exts      [1] EXPLICIT Extensions {{...}}   OPTIONAL,
 *     taTitleLangTag   [2] UTF8String OPTIONAL }
 * ```
 *
 * @class
 */
export
class TrustAnchorInfo {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<TrustAnchorInfoVersion>,
        /**
         * @summary `pubKey`.
         * @public
         * @readonly
         */
        readonly pubKey: SubjectPublicKeyInfo,
        /**
         * @summary `keyId`.
         * @public
         * @readonly
         */
        readonly keyId: KeyIdentifier,
        /**
         * @summary `taTitle`.
         * @public
         * @readonly
         */
        readonly taTitle: OPTIONAL<TrustAnchorTitle>,
        /**
         * @summary `certPath`.
         * @public
         * @readonly
         */
        readonly certPath: OPTIONAL<CertPathControls>,
        /**
         * @summary `exts`.
         * @public
         * @readonly
         */
        readonly exts: OPTIONAL<Extensions>,
        /**
         * @summary `taTitleLangTag`.
         * @public
         * @readonly
         */
        readonly taTitleLangTag: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a TrustAnchorInfo
     * @description
     *
     * This takes an `object` and converts it to a `TrustAnchorInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TrustAnchorInfo`.
     * @returns {TrustAnchorInfo}
     */
    public static _from_object (_o: { [_K in keyof (TrustAnchorInfo)]: (TrustAnchorInfo)[_K] }): TrustAnchorInfo {
        return new TrustAnchorInfo(_o.version, _o.pubKey, _o.keyId, _o.taTitle, _o.certPath, _o.exts, _o.taTitleLangTag);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v1; }
}

/**
 * @summary The Leading Root Component Types of TrustAnchorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TrustAnchorInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("pubKey", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("keyId", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("taTitle", true, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("certPath", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("exts", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("taTitleLangTag", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TrustAnchorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TrustAnchorInfo: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of TrustAnchorInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_TrustAnchorInfo: $.ComponentSpec[] = [

];

let _cached_decoder_for_TrustAnchorInfo: $.ASN1Decoder<TrustAnchorInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchorInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchorInfo} The decoded data structure.
 */
export
function _decode_TrustAnchorInfo (el: _Element) {
    if (!_cached_decoder_for_TrustAnchorInfo) { _cached_decoder_for_TrustAnchorInfo = function (el: _Element): TrustAnchorInfo {
    let version: OPTIONAL<TrustAnchorInfoVersion> = TrustAnchorInfo._default_value_for_version;
    let pubKey!: SubjectPublicKeyInfo;
    let keyId!: KeyIdentifier;
    let taTitle: OPTIONAL<TrustAnchorTitle>;
    let certPath: OPTIONAL<CertPathControls>;
    let exts: OPTIONAL<Extensions>;
    let taTitleLangTag: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_TrustAnchorInfoVersion(_el); },
        "pubKey": (_el: _Element): void => { pubKey = _decode_SubjectPublicKeyInfo(_el); },
        "keyId": (_el: _Element): void => { keyId = _decode_KeyIdentifier(_el); },
        "taTitle": (_el: _Element): void => { taTitle = _decode_TrustAnchorTitle(_el); },
        "certPath": (_el: _Element): void => { certPath = _decode_CertPathControls(_el); },
        "exts": (_el: _Element): void => { exts = $._decode_explicit<Extensions>(() => _decode_Extensions)(_el); },
        "taTitleLangTag": (_el: _Element): void => { taTitleLangTag = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TrustAnchorInfo,
        _extension_additions_list_spec_for_TrustAnchorInfo,
        _root_component_type_list_2_spec_for_TrustAnchorInfo,
        undefined,
    );
    return new TrustAnchorInfo( 
        version,
        pubKey,
        keyId,
        taTitle,
        certPath,
        exts,
        taTitleLangTag
    );
}; }
    return _cached_decoder_for_TrustAnchorInfo(el);
}

let _cached_encoder_for_TrustAnchorInfo: $.ASN1Encoder<TrustAnchorInfo> | null = null;

/**
 * @summary Encodes a(n) TrustAnchorInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchorInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TrustAnchorInfo (value: TrustAnchorInfo, elGetter: $.ASN1Encoder<TrustAnchorInfo>) {
    if (!_cached_encoder_for_TrustAnchorInfo) { _cached_encoder_for_TrustAnchorInfo = function (value: TrustAnchorInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, TrustAnchorInfo._default_value_for_version) ? undefined : _encode_TrustAnchorInfoVersion(value.version, $.DER)),
            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.pubKey, $.DER),
            /* REQUIRED   */ _encode_KeyIdentifier(value.keyId, $.DER),
            /* IF_ABSENT  */ ((value.taTitle === undefined) ? undefined : _encode_TrustAnchorTitle(value.taTitle, $.DER)),
            /* IF_ABSENT  */ ((value.certPath === undefined) ? undefined : _encode_CertPathControls(value.certPath, $.DER)),
            /* IF_ABSENT  */ ((value.exts === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Extensions, $.DER)(value.exts, $.DER)),
            /* IF_ABSENT  */ ((value.taTitleLangTag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.DER)(value.taTitleLangTag, $.DER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.DER);
}; }
    return _cached_encoder_for_TrustAnchorInfo(value, elGetter);
}


/* eslint-enable */
