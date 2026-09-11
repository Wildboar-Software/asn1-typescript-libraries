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

import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";

import { TSMPlainText_fragment, _decode_TSMPlainText_fragment, _encode_TSMPlainText_fragment } from "../TSM/TSMPlainText-fragment.ta.mjs";



/**
 * @summary TSMPlainText
 * @description
 *
 * Unencrypted TSM record. X.1084 modifies the TLS record layer (it does not
 * use RFC 4366 ClientHello/ServerHello extensions without IETF consensus)
 * and identifies the protocol with `protocolID` plus TLS-style `version`.
 * `fragment` is CCS, alert, handshake, or application data. ITU-T Rec.
 * X.1084 (05/2008) §10.3.1, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMPlainText ::= SEQUENCE {
 * protocolID    ProtocolIdentifier,
 * version    ProtocolVersion,
 * fragment    CHOICE {
 *     change-cipher-spec-opaque    ChangeCipherSpec,
 *     alert-opaque            Alert,
 *     biometric-handshake-opaque    Handshake,
 *     application-data-opaque    ApplicationData
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TSMPlainText {
    constructor (
        /**
         * @summary `protocolID`.
         * @description
         *
         * Distinguishes TSM from other record-layer protocols. X.1084 does
         * not assign a numeric value in Annex A.
         *
         * @public
         * @readonly
         */
        readonly protocolID: ProtocolIdentifier,
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
         * Payload: CCS, alert, biometric handshake, or application data.
         * X.1084 §10.3.1.
         *
         * @public
         * @readonly
         */
        readonly fragment: TSMPlainText_fragment
    ) {}

    /**
     * @summary Restructures an object into a TSMPlainText
     * @description
     * 
     * This takes an `object` and converts it to a `TSMPlainText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSMPlainText`.
     * @returns {TSMPlainText}
     */
    public static _from_object (_o: { [_K in keyof (TSMPlainText)]: (TSMPlainText)[_K] }): TSMPlainText {
        return new TSMPlainText(_o.protocolID, _o.version, _o.fragment);
    }


}

/**
 * @summary The Leading Root Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSMPlainText: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fragment", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSMPlainText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSMPlainText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSMPlainText: $.ASN1Decoder<TSMPlainText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMPlainText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMPlainText (el: _Element): TSMPlainText {
    if (!_cached_decoder_for_TSMPlainText) { _cached_decoder_for_TSMPlainText = function (el: _Element): TSMPlainText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TSMPlainText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolID";
    sequence[1].name = "version";
    sequence[2].name = "fragment";
    let protocolID!: ProtocolIdentifier;
    let version!: ProtocolVersion;
    let fragment!: TSMPlainText_fragment;
    protocolID = _decode_ProtocolIdentifier(sequence[0]);
    version = _decode_ProtocolVersion(sequence[1]);
    fragment = _decode_TSMPlainText_fragment(sequence[2]);
    return new TSMPlainText(
        protocolID,
        version,
        fragment,

    );
}; }
    return _cached_decoder_for_TSMPlainText(el);
}

let _cached_encoder_for_TSMPlainText: $.ASN1Encoder<TSMPlainText> | null = null;

/**
 * @summary Encodes a(n) TSMPlainText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMPlainText, encoded as an ASN.1 Element.
 */
export
function _encode_TSMPlainText (value: TSMPlainText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMPlainText) { _cached_encoder_for_TSMPlainText = function (value: TSMPlainText): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolID, $.BER),
            /* REQUIRED   */ _encode_ProtocolVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_TSMPlainText_fragment(value.fragment, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSMPlainText(value, elGetter);
}


/* eslint-enable */
