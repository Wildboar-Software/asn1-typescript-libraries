/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WlanLocationAttributes
 * @description
 * 
 * WLAN attributes that can be placed in the common `Location` parameter. The
 * only attribute defined here is the access-point MAC address.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WlanLocationAttributes ::= SEQUENCE
 * {
 *     wlanAPMACAddress        [0] OCTET STRING (SIZE(6)) OPTIONAL,
 *         -- 48-bit (6 octet) MAC address of the WLAN access point derived from the BSSID
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class WlanLocationAttributes {
    /**
     * @summary `wlanAPMACAddress`.
     * @description
     *
     * 48-bit MAC address of the WLAN access point, 6 octets, derived from the
     * BSSID.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly wlanAPMACAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.5.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        wlanAPMACAddress: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.wlanAPMACAddress = wlanAPMACAddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a WlanLocationAttributes
     * @description
     * 
     * This takes an `object` and converts it to a `WlanLocationAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WlanLocationAttributes`.
     * @returns {WlanLocationAttributes}
     */
    public static _from_object (_o: { [_K in keyof (WlanLocationAttributes)]: (WlanLocationAttributes)[_K] }): WlanLocationAttributes {
        return new WlanLocationAttributes(_o.wlanAPMACAddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of WlanLocationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WlanLocationAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("wlanAPMACAddress", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of WlanLocationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WlanLocationAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WlanLocationAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WlanLocationAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WlanLocationAttributes: $.ASN1Decoder<WlanLocationAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WlanLocationAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WlanLocationAttributes (el: _Element): WlanLocationAttributes {
    if (!_cached_decoder_for_WlanLocationAttributes) { _cached_decoder_for_WlanLocationAttributes = function (el: _Element): WlanLocationAttributes {
    let wlanAPMACAddress: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "wlanAPMACAddress": (_el: _Element): void => {
            wlanAPMACAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (wlanAPMACAddress.length < 6 || wlanAPMACAddress.length > 6) {
                throw new ASN1SizeError("WlanLocationAttributes.wlanAPMACAddress violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WlanLocationAttributes,
        _extension_additions_list_spec_for_WlanLocationAttributes,
        _root_component_type_list_2_spec_for_WlanLocationAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new WlanLocationAttributes(
        wlanAPMACAddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_WlanLocationAttributes(el);
}

let _cached_encoder_for_WlanLocationAttributes: $.ASN1Encoder<WlanLocationAttributes> | null = null;

/**
 * @summary Encodes a(n) WlanLocationAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WlanLocationAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_WlanLocationAttributes (value: WlanLocationAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WlanLocationAttributes) { _cached_encoder_for_WlanLocationAttributes = function (value: WlanLocationAttributes, elGetter: $.ASN1Encoder<WlanLocationAttributes>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.wlanAPMACAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.wlanAPMACAddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_WlanLocationAttributes(value, elGetter);
}


/* eslint-enable */
