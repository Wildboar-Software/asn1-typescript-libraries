/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresenceInfo, _decode_PresenceInfo, _encode_PresenceInfo } from "../TS33128Payloads/PresenceInfo.ta.mjs";
// export { PresenceInfo, _decode_PresenceInfo, _encode_PresenceInfo } from "../TS33128Payloads/PresenceInfo.ta.mjs";
import { LADNInfo, _decode_LADNInfo, _encode_LADNInfo } from "../TS33128Payloads/LADNInfo.ta.mjs";
// export { LADNInfo, _decode_LADNInfo, _encode_LADNInfo } from "../TS33128Payloads/LADNInfo.ta.mjs";


/**
 * @summary AMFEventArea
 * @description
 * 
 * The AMFEventArea type is derived from the data present in the AMFEventArea
 * type defined in TS 29.518 [22] clause 6.2.6.2.16. Table 7.3.3.2.48-1 contains
 * the details for the AMFEventArea type.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.48.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFEventArea ::= SEQUENCE
 * {
 *     presenceInfo                [1] PresenceInfo OPTIONAL,
 *     lADNInfo                    [2] LADNInfo OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFEventArea {
    /**
     * @summary `presenceInfo`.
     * @description
     *
     * This field shall be present if the Area of Interest subscribed is not a
     * LADN service area.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.48.
     *
     * @public
     * @readonly
     */
    readonly presenceInfo: OPTIONAL<PresenceInfo>;
    /**
     * @summary `lADNInfo`.
     * @description
     *
     * This field shall be present if the Area of Interest subscribed is a LADN
     * service area.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.48.
     *
     * @public
     * @readonly
     */
    readonly lADNInfo: OPTIONAL<LADNInfo>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        presenceInfo: OPTIONAL<PresenceInfo>,
        lADNInfo: OPTIONAL<LADNInfo>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.presenceInfo = presenceInfo;
        this.lADNInfo = lADNInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFEventArea
     * @description
     * 
     * This takes an `object` and converts it to a `AMFEventArea`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFEventArea`.
     * @returns {AMFEventArea}
     */
    public static _from_object (_o: { [_K in keyof (AMFEventArea)]: (AMFEventArea)[_K] }): AMFEventArea {
        return new AMFEventArea(_o.presenceInfo, _o.lADNInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFEventArea: $.ComponentSpec[] = [
    new $.ComponentSpec("presenceInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lADNInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFEventArea: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFEventArea
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFEventArea: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFEventArea: $.ASN1Decoder<AMFEventArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFEventArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFEventArea (el: _Element): AMFEventArea {
    if (!_cached_decoder_for_AMFEventArea) { _cached_decoder_for_AMFEventArea = function (el: _Element): AMFEventArea {
    let presenceInfo: OPTIONAL<PresenceInfo>;
    let lADNInfo: OPTIONAL<LADNInfo>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "presenceInfo": (_el: _Element): void => { presenceInfo = $._decode_implicit<PresenceInfo>(() => _decode_PresenceInfo)(_el); },
        "lADNInfo": (_el: _Element): void => { lADNInfo = $._decode_implicit<LADNInfo>(() => _decode_LADNInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFEventArea,
        _extension_additions_list_spec_for_AMFEventArea,
        _root_component_type_list_2_spec_for_AMFEventArea,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFEventArea(
        presenceInfo,
        lADNInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFEventArea(el);
}

let _cached_encoder_for_AMFEventArea: $.ASN1Encoder<AMFEventArea> | null = null;

/**
 * @summary Encodes a(n) AMFEventArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFEventArea, encoded as an ASN.1 Element.
 */
export
function _encode_AMFEventArea (value: AMFEventArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFEventArea) { _cached_encoder_for_AMFEventArea = function (value: AMFEventArea, elGetter: $.ASN1Encoder<AMFEventArea>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.presenceInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PresenceInfo, $.BER)(value.presenceInfo, $.BER);
    }
    if (value.lADNInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LADNInfo, $.BER)(value.lADNInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFEventArea(value, elGetter);
}


/* eslint-enable */
