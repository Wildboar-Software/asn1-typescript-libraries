/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OPTIONAL,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_JWSTokenType, _encode_JWSTokenType, _enum_for_JWSTokenType, JWSTokenType } from "../TS33128Payloads/JWSTokenType.ta.mjs";
// export { JWSTokenType, _enum_for_JWSTokenType, JWSTokenType_passport /* IMPORTED_LONG_ENUMERATION_ITEM */, passport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_JWSTokenType, _encode_JWSTokenType } from "../TS33128Payloads/JWSTokenType.ta.mjs";


/**
 * @summary PASSporTHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporTHeader ::= SEQUENCE
 * {
 *     type          [1] JWSTokenType,
 *     algorithm     [2] UTF8String,
 *     ppt           [3] UTF8String OPTIONAL,
 *     x5u           [4] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PASSporTHeader {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: JWSTokenType;
    /**
     * @summary `algorithm`.
     * @description
     *
     * Shall be derived from the value of the 'alg' parameter of the PASSporT
     * Header as defined in RFC 8225 [69] clause 4.2 for "shaken" PASSporT and
     * in RFC 8946 [76] clause 3 for "div" PASSporT.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly algorithm: UTF8String;
    /**
     * @summary `ppt`.
     * @description
     *
     * Shall be derived from the value of the 'ppt' parameter of the PASSporT
     * Header as defined in RFC 8225 [69] clause 8.1 for "shaken" PASSporT if
     * the PASSporT Header contains a ppt parameter and in RFC 8946 [76] clause
     * 3 for "div" PASSporT.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly ppt: OPTIONAL<UTF8String>;
    /**
     * @summary `x5u`.
     * @description
     *
     * Shall be populated with the URI contained in the 'x5u' parameter of the
     * PASSporT Header as defined in RFC 8225 [69] clause 4.3 for "shaken"
     * PASSporT and in RFC 8946 [76] clause 3 for "div" PASSporT.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly x5u: UTF8String;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        type_: JWSTokenType,
        algorithm: UTF8String,
        ppt: OPTIONAL<UTF8String>,
        x5u: UTF8String,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.type_ = type_;
        this.algorithm = algorithm;
        this.ppt = ppt;
        this.x5u = x5u;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PASSporTHeader
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporTHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporTHeader`.
     * @returns {PASSporTHeader}
     */
    public static _from_object (_o: { [_K in keyof (PASSporTHeader)]: (PASSporTHeader)[_K] }): PASSporTHeader {
        return new PASSporTHeader(_o.type_, _o.algorithm, _o.ppt, _o.x5u, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `type_`
         * @public
         * @static
         */

    public static _enum_for_type_: typeof _enum_for_JWSTokenType = _enum_for_JWSTokenType;
}

/**
 * @summary The Leading Root Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("algorithm", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ppt", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("x5u", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporTHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporTHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporTHeader: $.ASN1Decoder<PASSporTHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporTHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporTHeader (el: _Element): PASSporTHeader {
    if (!_cached_decoder_for_PASSporTHeader) { _cached_decoder_for_PASSporTHeader = function (el: _Element): PASSporTHeader {
    let type_!: JWSTokenType;
    let algorithm!: UTF8String;
    let ppt: OPTIONAL<UTF8String>;
    let x5u!: UTF8String;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<JWSTokenType>(() => _decode_JWSTokenType)(_el); },
        "algorithm": (_el: _Element): void => { algorithm = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "ppt": (_el: _Element): void => { ppt = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "x5u": (_el: _Element): void => { x5u = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PASSporTHeader,
        _extension_additions_list_spec_for_PASSporTHeader,
        _root_component_type_list_2_spec_for_PASSporTHeader,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PASSporTHeader(
        type_,
        algorithm,
        ppt,
        x5u,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PASSporTHeader(el);
}

let _cached_encoder_for_PASSporTHeader: $.ASN1Encoder<PASSporTHeader> | null = null;

/**
 * @summary Encodes a(n) PASSporTHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporTHeader, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporTHeader (value: PASSporTHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporTHeader) { _cached_encoder_for_PASSporTHeader = function (value: PASSporTHeader, elGetter: $.ASN1Encoder<PASSporTHeader>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_JWSTokenType, $.BER)(value.type_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.algorithm, $.BER);
    if (value.ppt !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.ppt, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.x5u, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PASSporTHeader(value, elGetter);
}


/* eslint-enable */
