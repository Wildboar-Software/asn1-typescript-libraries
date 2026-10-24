/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KMSRequestName, _decode_KMSRequestName, _encode_KMSRequestName, _enum_for_KMSRequestName } from "../TS33128Payloads/KMSRequestName.ta.mjs";
// export { KMSRequestName, _enum_for_KMSRequestName, KMSRequestName_kMSInitialize /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSInitialize /* IMPORTED_SHORT_ENUMERATION_ITEM */, KMSRequestName_kMSKeyProvision /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSKeyProvision /* IMPORTED_SHORT_ENUMERATION_ITEM */, KMSRequestName_kMSCert /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSCert /* IMPORTED_SHORT_ENUMERATION_ITEM */, KMSRequestName_kMSCertCache /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSCertCache /* IMPORTED_SHORT_ENUMERATION_ITEM */, KMSRequestName_kMSLookup /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSLookup /* IMPORTED_SHORT_ENUMERATION_ITEM */, KMSRequestName_kMSRedirectUpload /* IMPORTED_LONG_ENUMERATION_ITEM */, kMSRedirectUpload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_KMSRequestName, _encode_KMSRequestName } from "../TS33128Payloads/KMSRequestName.ta.mjs";
import { KMSRequestBody, _decode_KMSRequestBody, _encode_KMSRequestBody } from "../TS33128Payloads/KMSRequestBody.ta.mjs";
// export { KMSRequestBody, _decode_KMSRequestBody, _encode_KMSRequestBody } from "../TS33128Payloads/KMSRequestBody.ta.mjs";
import { KMSResponseBody, _decode_KMSResponseBody, _encode_KMSResponseBody } from "../TS33128Payloads/KMSResponseBody.ta.mjs";
// export { KMSResponseBody, _decode_KMSResponseBody, _encode_KMSResponseBody } from "../TS33128Payloads/KMSResponseBody.ta.mjs";
import { KMSResponseBodyKRR, _decode_KMSResponseBodyKRR, _encode_KMSResponseBodyKRR } from "../TS33128Payloads/KMSResponseBodyKRR.ta.mjs";
// export { KMSResponseBodyKRR, _decode_KMSResponseBodyKRR, _encode_KMSResponseBodyKRR } from "../TS33128Payloads/KMSResponseBodyKRR.ta.mjs";


/**
 * @summary KMMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KMMessage ::= SEQUENCE
 * {
 *     kMSRequestName              [1] KMSRequestName,
 *     kMSRequestBody              [2] KMSRequestBody,
 *     kMSResponseBody             [3] KMSResponseBody OPTIONAL,
 *     kMSResponseBodyKRR          [4] KMSResponseBodyKRR OPTIONAL,
 *     hTTPResponseCode            [5] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class KMMessage {
    /**
     * @summary `kMSRequestName`.
     * @description
     *
     * Indicates whether the HTTP POST operation is for KMS Initialize, KMS
     * KeyProvision, KMS CertCache, KMS Cert, KMS Discovery Lookup or KMS
     * Redirect Upload.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly kMSRequestName: KMSRequestName;
    /**
     * @summary `kMSRequestBody`.
     * @description
     *
     * Provides the content of the KMS request type encoded as a
     * "KmsRequestType" or "SignedKmsRequestType" structure according to TS
     * 33.180 [154] clause D.3.5. The XMLType.namespace for this parameter shall
     * be set to the namespace of the root element of the XML document, e.g.,
     * urn:3gpp:ns:mcsecKMSInterface:1.0.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly kMSRequestBody: KMSRequestBody;
    /**
     * @summary `kMSResponseBody`.
     * @description
     *
     * Provides the content of the KMS response type for any response type
     * except for KMS Redirect Response type, encoded as a "KmsResponseType" or
     * "SignedKmsResponseType" structure according to TS 33.180 [154] clause
     * D.3.5. The XMLType.namespace for this parameter shall be set to the
     * namespace of the root element of the XML document, e.g.,
     * urn:3gpp:ns:mcsecKMSInterface:1.0.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly kMSResponseBody: OPTIONAL<KMSResponseBody>;
    /**
     * @summary `kMSResponseBodyKRR`.
     * @description
     *
     * Provides the content of the KMS Redirect Response type, encoded as a
     * "KRResponseType" structure according to TS 33.180 [154] clause D.4.4. The
     * XMLType.namespace for this parameter shall be set to the namespace of the
     * root element of the XML document, e.g., urn:3gpp:ns:mcsecKMSKRR:1.0.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly kMSResponseBodyKRR: OPTIONAL<KMSResponseBodyKRR>;
    /**
     * @summary `hTTPResponseCode`.
     * @description
     *
     * Indicates the HTTP response code.
     *
     * 3GPP TS 33.128, clause 7.20.2.4.2.
     *
     * @public
     * @readonly
     */
    readonly hTTPResponseCode: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        kMSRequestName: KMSRequestName,
        kMSRequestBody: KMSRequestBody,
        kMSResponseBody: OPTIONAL<KMSResponseBody>,
        kMSResponseBodyKRR: OPTIONAL<KMSResponseBodyKRR>,
        hTTPResponseCode: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.kMSRequestName = kMSRequestName;
        this.kMSRequestBody = kMSRequestBody;
        this.kMSResponseBody = kMSResponseBody;
        this.kMSResponseBodyKRR = kMSResponseBodyKRR;
        this.hTTPResponseCode = hTTPResponseCode;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a KMMessage
     * @description
     * 
     * This takes an `object` and converts it to a `KMMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KMMessage`.
     * @returns {KMMessage}
     */
    public static _from_object (_o: { [_K in keyof (KMMessage)]: (KMMessage)[_K] }): KMMessage {
        return new KMMessage(_o.kMSRequestName, _o.kMSRequestBody, _o.kMSResponseBody, _o.kMSResponseBodyKRR, _o.hTTPResponseCode, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `kMSRequestName`
         * @public
         * @static
         */

    public static _enum_for_kMSRequestName = _enum_for_KMSRequestName;
}

/**
 * @summary The Leading Root Component Types of KMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KMMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("kMSRequestName", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kMSRequestBody", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kMSResponseBody", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("kMSResponseBodyKRR", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("hTTPResponseCode", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of KMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KMMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KMMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KMMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KMMessage: $.ASN1Decoder<KMMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KMMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KMMessage (el: _Element): KMMessage {
    if (!_cached_decoder_for_KMMessage) { _cached_decoder_for_KMMessage = function (el: _Element): KMMessage {
    let kMSRequestName!: KMSRequestName;
    let kMSRequestBody!: KMSRequestBody;
    let kMSResponseBody: OPTIONAL<KMSResponseBody>;
    let kMSResponseBodyKRR: OPTIONAL<KMSResponseBodyKRR>;
    let hTTPResponseCode!: UTF8String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "kMSRequestName": (_el: _Element): void => { kMSRequestName = $._decode_implicit<KMSRequestName>(() => _decode_KMSRequestName)(_el); },
        "kMSRequestBody": (_el: _Element): void => { kMSRequestBody = $._decode_explicit<KMSRequestBody>(() => _decode_KMSRequestBody)(_el); },
        "kMSResponseBody": (_el: _Element): void => { kMSResponseBody = $._decode_explicit<KMSResponseBody>(() => _decode_KMSResponseBody)(_el); },
        "kMSResponseBodyKRR": (_el: _Element): void => { kMSResponseBodyKRR = $._decode_implicit<KMSResponseBodyKRR>(() => _decode_KMSResponseBodyKRR)(_el); },
        "hTTPResponseCode": (_el: _Element): void => { hTTPResponseCode = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KMMessage,
        _extension_additions_list_spec_for_KMMessage,
        _root_component_type_list_2_spec_for_KMMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new KMMessage(
        kMSRequestName,
        kMSRequestBody,
        kMSResponseBody,
        kMSResponseBodyKRR,
        hTTPResponseCode,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_KMMessage(el);
}

let _cached_encoder_for_KMMessage: $.ASN1Encoder<KMMessage> | null = null;

/**
 * @summary Encodes a(n) KMMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KMMessage, encoded as an ASN.1 Element.
 */
export
function _encode_KMMessage (value: KMMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KMMessage) { _cached_encoder_for_KMMessage = function (value: KMMessage, elGetter: $.ASN1Encoder<KMMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_KMSRequestName, $.BER)(value.kMSRequestName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_KMSRequestBody, $.BER)(value.kMSRequestBody, $.BER);
    if (value.kMSResponseBody !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_KMSResponseBody, $.BER)(value.kMSResponseBody, $.BER);
    }
    if (value.kMSResponseBodyKRR !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_KMSResponseBodyKRR, $.BER)(value.kMSResponseBodyKRR, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.hTTPResponseCode, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_KMMessage(value, elGetter);
}


/* eslint-enable */
