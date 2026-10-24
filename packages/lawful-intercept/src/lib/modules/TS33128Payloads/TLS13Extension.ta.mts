/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13ExtensionType, _decode_TLS13ExtensionType, _encode_TLS13ExtensionType, _enum_for_TLS13ExtensionType } from "../TS33128Payloads/TLS13ExtensionType.ta.mjs";
// export { TLS13ExtensionType, _enum_for_TLS13ExtensionType, TLS13ExtensionType_serverName /* IMPORTED_LONG_ENUMERATION_ITEM */, serverName /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_maxFragmentLength /* IMPORTED_LONG_ENUMERATION_ITEM */, maxFragmentLength /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_statusRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, statusRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_supportedGroups /* IMPORTED_LONG_ENUMERATION_ITEM */, supportedGroups /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_signatureAlgorithms /* IMPORTED_LONG_ENUMERATION_ITEM */, signatureAlgorithms /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_useSRTP /* IMPORTED_LONG_ENUMERATION_ITEM */, useSRTP /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_heartbeat /* IMPORTED_LONG_ENUMERATION_ITEM */, heartbeat /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_applicationLayerProtocolNegotiation /* IMPORTED_LONG_ENUMERATION_ITEM */, applicationLayerProtocolNegotiation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_signedCertificateTimestamp /* IMPORTED_LONG_ENUMERATION_ITEM */, signedCertificateTimestamp /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_clientCertificateType /* IMPORTED_LONG_ENUMERATION_ITEM */, clientCertificateType /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_serverCertificateType /* IMPORTED_LONG_ENUMERATION_ITEM */, serverCertificateType /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_padding /* IMPORTED_LONG_ENUMERATION_ITEM */, padding /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_presharedKey /* IMPORTED_LONG_ENUMERATION_ITEM */, presharedKey /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_earlyData /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyData /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_supportedVersions /* IMPORTED_LONG_ENUMERATION_ITEM */, supportedVersions /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_cookie /* IMPORTED_LONG_ENUMERATION_ITEM */, cookie /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_pSKKeyExchangeModes /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKKeyExchangeModes /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_certificateAuthorities /* IMPORTED_LONG_ENUMERATION_ITEM */, certificateAuthorities /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_oIDFilters /* IMPORTED_LONG_ENUMERATION_ITEM */, oIDFilters /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_postHandshakeAuth /* IMPORTED_LONG_ENUMERATION_ITEM */, postHandshakeAuth /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_signatureAlgorithmsCert /* IMPORTED_LONG_ENUMERATION_ITEM */, signatureAlgorithmsCert /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13ExtensionType_keyShare /* IMPORTED_LONG_ENUMERATION_ITEM */, keyShare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13ExtensionType, _encode_TLS13ExtensionType } from "../TS33128Payloads/TLS13ExtensionType.ta.mjs";


/**
 * @summary TLS13Extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13Extension ::= SEQUENCE
 * {
 *     extensionType [1] TLS13ExtensionType,
 *     extensionData [2] OCTET STRING (SIZE(0..65535))
 * }
 * ```
 * 
 * @class
 */
export
class TLS13Extension {
    /**
     * @summary `extensionType`.
     * @public
     * @readonly
     */
    readonly extensionType: TLS13ExtensionType;
    /**
     * @summary `extensionData`.
     * @public
     * @readonly
     */
    readonly extensionData: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        extensionType: TLS13ExtensionType,
        extensionData: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.extensionType = extensionType;
        this.extensionData = extensionData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TLS13Extension
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13Extension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13Extension`.
     * @returns {TLS13Extension}
     */
    public static _from_object (_o: { [_K in keyof (TLS13Extension)]: (TLS13Extension)[_K] }): TLS13Extension {
        return new TLS13Extension(_o.extensionType, _o.extensionData, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `extensionType`
         * @public
         * @static
         */

    public static _enum_for_extensionType = _enum_for_TLS13ExtensionType;
}

/**
 * @summary The Leading Root Component Types of TLS13Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13Extension: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionData", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13Extension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13Extension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13Extension: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13Extension: $.ASN1Decoder<TLS13Extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13Extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13Extension (el: _Element): TLS13Extension {
    if (!_cached_decoder_for_TLS13Extension) { _cached_decoder_for_TLS13Extension = function (el: _Element): TLS13Extension {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13Extension contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "extensionType";
    sequence[1].name = "extensionData";
    let extensionType!: TLS13ExtensionType;
    let extensionData!: OCTET_STRING;
    extensionType = $._decode_implicit<TLS13ExtensionType>(() => _decode_TLS13ExtensionType)(sequence[0]);
    extensionData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    {
        if (extensionData.length > 65535) {
            throw new ASN1SizeError("TLS13Extension.extensionData violates SIZE constraint");
        }
    }
    return new TLS13Extension(
        extensionType,
        extensionData,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TLS13Extension(el);
}

let _cached_encoder_for_TLS13Extension: $.ASN1Encoder<TLS13Extension> | null = null;

/**
 * @summary Encodes a(n) TLS13Extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13Extension, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13Extension (value: TLS13Extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13Extension) { _cached_encoder_for_TLS13Extension = function (value: TLS13Extension, elGetter: $.ASN1Encoder<TLS13Extension>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS13ExtensionType, $.BER)(value.extensionType, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.extensionData, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TLS13Extension(value, elGetter);
}


/* eslint-enable */
