/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCDDisplayInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCDDisplayInfo ::= SEQUENCE
 * {
 *     name [1] UTF8String,
 *     jcd  [2] OCTET STRING OPTIONAL,
 *     jcl  [3] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RCDDisplayInfo {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: UTF8String,
        /**
         * @summary `jcd`.
         * @public
         * @readonly
         */
        readonly jcd: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `jcl`.
         * @public
         * @readonly
         */
        readonly jcl: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a RCDDisplayInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RCDDisplayInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RCDDisplayInfo`.
     * @returns {RCDDisplayInfo}
     */
    public static _from_object (_o: { [_K in keyof (RCDDisplayInfo)]: (RCDDisplayInfo)[_K] }): RCDDisplayInfo {
        return new RCDDisplayInfo(_o.name, _o.jcd, _o.jcl);
    }


}

/**
 * @summary The Leading Root Component Types of RCDDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RCDDisplayInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("jcd", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("jcl", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RCDDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RCDDisplayInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RCDDisplayInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RCDDisplayInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RCDDisplayInfo: $.ASN1Decoder<RCDDisplayInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCDDisplayInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCDDisplayInfo (el: _Element): RCDDisplayInfo {
    if (!_cached_decoder_for_RCDDisplayInfo) { _cached_decoder_for_RCDDisplayInfo = function (el: _Element): RCDDisplayInfo {
    let name!: UTF8String;
    let jcd: OPTIONAL<OCTET_STRING>;
    let jcl: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "jcd": (_el: _Element): void => { jcd = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "jcl": (_el: _Element): void => { jcl = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RCDDisplayInfo,
        _extension_additions_list_spec_for_RCDDisplayInfo,
        _root_component_type_list_2_spec_for_RCDDisplayInfo,
        undefined,
    );
    return new RCDDisplayInfo(
        name,
        jcd,
        jcl
    );
}; }
    return _cached_decoder_for_RCDDisplayInfo(el);
}

let _cached_encoder_for_RCDDisplayInfo: $.ASN1Encoder<RCDDisplayInfo> | null = null;

/**
 * @summary Encodes a(n) RCDDisplayInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCDDisplayInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RCDDisplayInfo (value: RCDDisplayInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCDDisplayInfo) { _cached_encoder_for_RCDDisplayInfo = function (value: RCDDisplayInfo, elGetter: $.ASN1Encoder<RCDDisplayInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.jcd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.jcd, $.BER)),
            /* IF_ABSENT  */ ((value.jcl === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.jcl, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RCDDisplayInfo(value, elGetter);
}


/* eslint-enable */
