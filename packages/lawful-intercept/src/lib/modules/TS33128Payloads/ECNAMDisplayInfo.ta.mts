/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ECNAMDisplayInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECNAMDisplayInfo ::= SEQUENCE
 * {
 *     name           [1] UTF8String,
 *     additionalInfo [2] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ECNAMDisplayInfo {
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: UTF8String;
    /**
     * @summary `additionalInfo`.
     * @public
     * @readonly
     */
    readonly additionalInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        name: UTF8String,
        additionalInfo?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.name = name;
        this.additionalInfo = additionalInfo;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ECNAMDisplayInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ECNAMDisplayInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECNAMDisplayInfo`.
     * @returns {ECNAMDisplayInfo}
     */
    public static _from_object (_o: { [_K in keyof (ECNAMDisplayInfo)]: (ECNAMDisplayInfo)[_K] }): ECNAMDisplayInfo {
        return new ECNAMDisplayInfo(_o.name, _o.additionalInfo, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ECNAMDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECNAMDisplayInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ECNAMDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECNAMDisplayInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ECNAMDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECNAMDisplayInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ECNAMDisplayInfo: $.ASN1Decoder<ECNAMDisplayInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ECNAMDisplayInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ECNAMDisplayInfo (el: _Element): ECNAMDisplayInfo {
    if (!_cached_decoder_for_ECNAMDisplayInfo) { _cached_decoder_for_ECNAMDisplayInfo = function (el: _Element): ECNAMDisplayInfo {
    let name!: UTF8String;
    let additionalInfo: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ECNAMDisplayInfo,
        _extension_additions_list_spec_for_ECNAMDisplayInfo,
        _root_component_type_list_2_spec_for_ECNAMDisplayInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ECNAMDisplayInfo(
        name,
        additionalInfo,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ECNAMDisplayInfo(el);
}

let _cached_encoder_for_ECNAMDisplayInfo: $.ASN1Encoder<ECNAMDisplayInfo> | null = null;

/**
 * @summary Encodes a(n) ECNAMDisplayInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECNAMDisplayInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ECNAMDisplayInfo (value: ECNAMDisplayInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ECNAMDisplayInfo) { _cached_encoder_for_ECNAMDisplayInfo = function (value: ECNAMDisplayInfo, elGetter: $.ASN1Encoder<ECNAMDisplayInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.name, $.BER);
    if (value.additionalInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.additionalInfo, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ECNAMDisplayInfo(value, elGetter);
}


/* eslint-enable */
