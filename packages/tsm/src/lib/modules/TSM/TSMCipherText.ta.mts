/* eslint-disable */
import {
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
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../TSM/ProtocolIdentifier.ta.mjs";

import { ContentType, _enum_for_ContentType, _decode_ContentType, _encode_ContentType } from "../TSM/ContentType.ta.mjs";

import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";

import { TSMCipherText_fragment, _decode_TSMCipherText_fragment, _encode_TSMCipherText_fragment } from "../TSM/TSMCipherText-fragment.ta.mjs";



/**
 * @summary TSMCipherText
 * @description
 *
 * Encrypted TSM record: `type` is the TLS content type; `fragment` is a
 * stream or block cipher encoding of the corresponding plaintext fragment.
 * ITU-T Rec. X.1084 (05/2008) §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMCipherText ::= SEQUENCE {
 * protocolID    ProtocolIdentifier,
 * type        ContentType,
 * version    ProtocolVersion,
 * fragment    CHOICE {
 *     stream    GenericStreamCipher,
 *     block    GenericBlockCipher
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TSMCipherText {
    constructor (
        /**
         * @summary `protocolID`.
         * @description
         *
         * Same role as `TSMPlainText.protocolID`. X.1084 §10.3.1.
         *
         * @public
         * @readonly
         */
        readonly protocolID: ProtocolIdentifier,
        /**
         * @summary `type_`.
         * @description
         *
         * TLS content type of the encrypted fragment (CCS 20, alert 21,
         * handshake 22, application-data 23). X.1084 §10.3.1.
         *
         * @public
         * @readonly
         */
        readonly type_: ContentType,
        /**
         * @summary `version`.
         * @description
         *
         * Same major/minor pair as TLS `ProtocolVersion`. X.1084 §10.3.1.
         *
         * @public
         * @readonly
         */
        readonly version: ProtocolVersion,
        /**
         * @summary `fragment`.
         * @description
         *
         * `GenericStreamCipher` or `GenericBlockCipher` per the negotiated
         * cipher suite. X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly fragment: TSMCipherText_fragment
    ) {}

    /**
     * @summary Restructures an object into a TSMCipherText
     * @description
     * 
     * This takes an `object` and converts it to a `TSMCipherText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSMCipherText`.
     * @returns {TSMCipherText}
     */
    public static _from_object (_o: { [_K in keyof (TSMCipherText)]: (TSMCipherText)[_K] }): TSMCipherText {
        return new TSMCipherText(_o.protocolID, _o.type_, _o.version, _o.fragment);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_ = _enum_for_ContentType;
}

/**
 * @summary The Leading Root Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSMCipherText: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fragment", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSMCipherText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSMCipherText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSMCipherText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSMCipherText: $.ASN1Decoder<TSMCipherText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMCipherText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMCipherText (el: _Element): TSMCipherText {
    if (!_cached_decoder_for_TSMCipherText) { _cached_decoder_for_TSMCipherText = function (el: _Element): TSMCipherText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TSMCipherText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolID";
    sequence[1].name = "type";
    sequence[2].name = "version";
    sequence[3].name = "fragment";
    let protocolID!: ProtocolIdentifier;
    let type_!: ContentType;
    let version!: ProtocolVersion;
    let fragment!: TSMCipherText_fragment;
    protocolID = _decode_ProtocolIdentifier(sequence[0]);
    type_ = _decode_ContentType(sequence[1]);
    version = _decode_ProtocolVersion(sequence[2]);
    fragment = _decode_TSMCipherText_fragment(sequence[3]);
    return new TSMCipherText(
        protocolID,
        type_,
        version,
        fragment,

    );
}; }
    return _cached_decoder_for_TSMCipherText(el);
}

let _cached_encoder_for_TSMCipherText: $.ASN1Encoder<TSMCipherText> | null = null;

/**
 * @summary Encodes a(n) TSMCipherText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMCipherText, encoded as an ASN.1 Element.
 */
export
function _encode_TSMCipherText (value: TSMCipherText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMCipherText) { _cached_encoder_for_TSMCipherText = function (value: TSMCipherText): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolID, $.BER),
            /* REQUIRED   */ _encode_ContentType(value.type_, $.BER),
            /* REQUIRED   */ _encode_ProtocolVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_TSMCipherText_fragment(value.fragment, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSMCipherText(value, elGetter);
}


/* eslint-enable */
