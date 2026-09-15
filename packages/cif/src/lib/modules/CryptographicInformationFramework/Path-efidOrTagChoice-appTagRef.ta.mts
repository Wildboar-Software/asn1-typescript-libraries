/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
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



/**
 * @summary Path_efidOrTagChoice_appTagRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-efidOrTagChoice-appTagRef ::= SEQUENCE {
 *     aid         [APPLICATION 15] OCTET STRING,
 *     tag         OCTET STRING,
 *     efidOrPath  OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Path_efidOrTagChoice_appTagRef {
    constructor (
        /**
         * @summary `aid`.
         * @public
         * @readonly
         */
        readonly aid: OCTET_STRING,
        /**
         * @summary `tag`.
         * @public
         * @readonly
         */
        readonly tag: OCTET_STRING,
        /**
         * @summary `efidOrPath`.
         * @public
         * @readonly
         */
        readonly efidOrPath: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a Path_efidOrTagChoice_appTagRef
     * @description
     * 
     * This takes an `object` and converts it to a `Path_efidOrTagChoice_appTagRef`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Path_efidOrTagChoice_appTagRef`.
     * @returns {Path_efidOrTagChoice_appTagRef}
     */
    public static _from_object (_o: { [_K in keyof (Path_efidOrTagChoice_appTagRef)]: (Path_efidOrTagChoice_appTagRef)[_K] }): Path_efidOrTagChoice_appTagRef {
        return new Path_efidOrTagChoice_appTagRef(_o.aid, _o.tag, _o.efidOrPath);
    }


}

/**
 * @summary The Leading Root Component Types of Path_efidOrTagChoice_appTagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Path_efidOrTagChoice_appTagRef: $.ComponentSpec[] = [
    new $.ComponentSpec("aid", false, $.hasTag(_TagClass.application, 15)),
    new $.ComponentSpec("tag", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("efidOrPath", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of Path_efidOrTagChoice_appTagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Path_efidOrTagChoice_appTagRef: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Path_efidOrTagChoice_appTagRef
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Path_efidOrTagChoice_appTagRef: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Path_efidOrTagChoice_appTagRef: $.ASN1Decoder<Path_efidOrTagChoice_appTagRef> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_efidOrTagChoice_appTagRef
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_efidOrTagChoice_appTagRef (el: _Element): Path_efidOrTagChoice_appTagRef {
    if (!_cached_decoder_for_Path_efidOrTagChoice_appTagRef) { _cached_decoder_for_Path_efidOrTagChoice_appTagRef = function (el: _Element): Path_efidOrTagChoice_appTagRef {
    let aid!: OCTET_STRING;
    let tag!: OCTET_STRING;
    let efidOrPath: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "aid": (_el: _Element): void => { aid = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tag": (_el: _Element): void => { tag = $._decodeOctetString(_el); },
        "efidOrPath": (_el: _Element): void => { efidOrPath = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Path_efidOrTagChoice_appTagRef,
        _extension_additions_list_spec_for_Path_efidOrTagChoice_appTagRef,
        _root_component_type_list_2_spec_for_Path_efidOrTagChoice_appTagRef,
        undefined,
    );
    return new Path_efidOrTagChoice_appTagRef(
        aid,
        tag,
        efidOrPath
    );
}; }
    return _cached_decoder_for_Path_efidOrTagChoice_appTagRef(el);
}

let _cached_encoder_for_Path_efidOrTagChoice_appTagRef: $.ASN1Encoder<Path_efidOrTagChoice_appTagRef> | null = null;

/**
 * @summary Encodes a(n) Path_efidOrTagChoice_appTagRef into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_efidOrTagChoice_appTagRef, encoded as an ASN.1 Element.
 */
export
function _encode_Path_efidOrTagChoice_appTagRef (value: Path_efidOrTagChoice_appTagRef, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_efidOrTagChoice_appTagRef) { _cached_encoder_for_Path_efidOrTagChoice_appTagRef = function (value: Path_efidOrTagChoice_appTagRef): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 15, () => $._encodeOctetString, $.BER)(value.aid, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.tag, $.BER),
            /* IF_ABSENT  */ ((value.efidOrPath === undefined) ? undefined : $._encodeOctetString(value.efidOrPath, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Path_efidOrTagChoice_appTagRef(value, elGetter);
}


/* eslint-enable */
